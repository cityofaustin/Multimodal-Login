import express from 'express';
import common from '../common/common';
import DebugControl from '../util/debug';
import oauthServer from '../services/OathService';
import { renderToString } from 'react-dom/server';
import Index from '../components/pages/index';
import Login from '../components/pages/login';
import Register from '../components/pages/register';
import React from 'react';
import CognitiveFaceService from '../services/CognitiveFaceService';
import StringUtil from '../util/StringUtil';
import path from 'path';
import fs from 'fs';
import { ConnectionStates } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';
const Schema = require('./middleware/schema');
const { celebrate } = require('celebrate');
const smsUtil = require('../common/smsUtil');

const router = express.Router();

router.route('/users/username/:username/matched').get(async (req, res) => {
  const userName = req.params.username;
  let user = await common.dbClient.findUserByUserName(userName);
  if (user) {
    return res.json({ matched: true });
  } else {
    return res.json({ matched: false });
  }
});

// router.get("/users", async (req, res) => {
//   let allUsers = await common.dbClient.getAllAuthAccounts();
//   return res.json({ users: allUsers });
// });

router.get('/', async (req, res) => {
  let reactComp = renderToString(React.createElement(Index));
  res.status(200).render('./pages/index', { reactApp: reactComp });
});

router.get('/login', async (req, res) => {
  let reactComp = renderToString(React.createElement(Login));
  res.status(200).render('./pages/login', { reactApp: reactComp });
});

router.get('/register', async (req, res) => {
  let reactComp = renderToString(React.createElement(Login));
  res.status(200).render('./pages/register', { reactApp: reactComp });
});

router.post(
  '/register',
  celebrate({
    body: Schema.userRegisterSchema,
  }),
  async (req, res) => {
    let newUser = await common.dbClient.createNewOAuthUser(req.body);
    return res.json({ newUser: newUser });
  }
);

router.post('/request-social-login-code', async (req, res) => {
  const user = await common.dbClient.findUserByUserName(req.body.username);

  if (user === null || user === undefined) {
    return res.json({ matched: false });
  }

  const providingUser = await common.dbClient.findUserByEmail(
    user.contactEmail
  );

  const loginUuid = uuidv4();

  await common.dbClient.createSocialLogin(
    user._id,
    providingUser._id,
    loginUuid
  );

  const oneTimeCode = getRandomInt(100000, 999999);
  await common.dbClient.addOneTimeCode(user._id, oneTimeCode);

  const send = require('gmail-send')({
    user: 'mypass.austinatx@gmail.com',
    pass: process.env.MYPASS_GMAIL_PASSWORD,
    to: user.contactEmail,
    subject: `Mypass user ${user.username} is requesting a login code`,
  });

  send(
    {
      text: `The one time code for user: ${user.username} is ${oneTimeCode}. Alternatively you can click this link to generate a code and send it to the users email:  http://localhost:5001/provide-social-login-code/${loginUuid}`,
    },
    (error, result, fullResult) => {
      if (error) console.error(error);
      console.log(result);
    }
  );

  try {
    smsUtil.sendSms(
      `The one time code for user: ${user.username} is ${oneTimeCode}.`,
      '+1' + user.phoneNumber
    );
  } catch (err) {
    console.log('error!');
    console.log(err);
  }

  return res.json({ msg: 'success' });
});

router.get('/provide-social-login-code/:uuid', async (req, res) => {
  let uuid = req.params.uuid;

  let socialLogin = await common.dbClient.findSocialLoginByUuid(uuid);

  const user = await common.dbClient.getUserById(socialLogin.requestingUserId);
  const oneTimeCode = getRandomInt(100000, 999999);

  await common.dbClient.addOneTimeCode(
    socialLogin.requestingUserId,
    oneTimeCode
  );

  const send = require('gmail-send')({
    user: 'mypass.austinatx@gmail.com',
    pass: process.env.MYPASS_GMAIL_PASSWORD,
    to: user.email,
    subject: `One time login code: ${oneTimeCode}`,
  });

  send(
    {
      text: `You have 24 hours to login with your one time login code: ${oneTimeCode}`,
    },
    (error, result, fullResult) => {
      if (error) console.error(error);
      console.log(result);
    }
  );

  res.status(200).json({ msg: 'success' });
});

router.post('/verify/face', async (req, res) => {
  if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined
  ) {
    res.status(501).json({
      error: 'Must include a file to upload.',
    });
    return;
  }
  const file =
    req.files.img[0] === undefined ? req.files.img : req.files.img[0];
  const dataBuffer = fs.readFileSync(file.tempFilePath);
  const response = await CognitiveFaceService.verifyFaceToUsername(
    dataBuffer,
    req.body.username
  );
  return res.json({ registerFaceResponse: response });
});

router.post('/register/face', async (req, res) => {
  if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined
  ) {
    res.status(501).json({
      error: 'Must include a file to upload.',
    });
    return;
  }
  const file =
    req.files.img[0] === undefined ? req.files.img : req.files.img[0];
  const dataBuffer = fs.readFileSync(file.tempFilePath);
  const response = await CognitiveFaceService.registerFaceToUsername(
    dataBuffer,
    req.body.username
  );
  return res.json({ registerFaceResponse: response });
});

router.post(
  '/authorize',
  async (req, res, next) => {
    DebugControl.log.flow('Initial User Authentication');

    const accountMatched = await common.dbClient.getAccountByCredentials(
      req.body
    );

    if (accountMatched) {
      req.body.user = accountMatched;
      return next();
    }

    const params = [
      'client_id',
      'redirect_uri',
      'response_type',
      'grant_type',
      'state', // could be used to prevent CSRF https://www.npmjs.com/package/csurf
      'scope',
    ]
      .map((a) => `${a}=${req.body[a]}`)
      .join('&');
    return res.redirect(`/oauth?success=false&${params}`);
  },
  (req, res, next) => {
    // sends us to our redirect with an authorization code in our url
    DebugControl.log.flow('Authorization');
    return next();
  },
  oauthServer.authorize({
    authenticateHandler: {
      handle: (req) => {
        DebugControl.log.functionName('Authenticate Handler');
        DebugControl.log.parameters(
          Object.keys(req.body).map((k) => ({ name: k, value: req.body[k] }))
        );
        return req.body.user;
      },
    },
    allowEmptyState: true,
    authorizationCodeLifetime: 600, // 10min, default 5 minutes
  })
);

// router.post(
//   '/token',
//   (req, res, next) => {
//     DebugControl.log.flow('Token');
//     next();
//   },
//   oauthServer.token({
//     requireClientAuthentication: {
//       // whether client needs to provide client_secret
//       authorization_code: false,
//       accessTokenLifetime: 172800, // 2days, default 1 hour
//       refreshTokenLifetime: 1209600, // 2wk, default 2 weeks
//     },
//   })
// ); // Sends back token

router.post(
  '/token',
  (req, res, next) => {
    DebugControl.log.flow('Token');
    next();
  },
  tokenHandler(),
  (req, res, next) => {
    DebugControl.log.flow('After');
    next();
  }
); // Sends back token

function tokenHandler() {
  let response;
  try {
    response = oauthServer.token({
      requireClientAuthentication: {
        // whether client needs to provide client_secret
        authorization_code: false,
        accessTokenLifetime: 172800, // 2days, default 1 hour
        refreshTokenLifetime: 1209600, // 2wk, default 2 weeks
      },
    });
  } catch (err) {
    console.log('AUTH Token Error!');
    console.log(err);
  }
  return response;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

export default router;
