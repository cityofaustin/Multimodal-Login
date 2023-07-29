import express from "express";
import { celebrate } from "celebrate";
import Schema from "./middleware/schema";
import DebugControl from "../../util/debug";
import oauthServer from "../../services/OauthService";
import common from "../../common/common";
import secureKeyStorage from "../../common/secureKeyStorage";

import auth from "../../middleware/auth";

const router = express.Router();

router
  .route("/get-encryption-key")
  .get(auth.required, async (req, res, next) => {
    const account = await common.dbClient.findUserByUserName(
      req.payload.username
    );
    let key = await secureKeyStorage.retrieve(account.didPrivateKeyGuid);
    res.status(200).json({ encryptionKey: key });
  });

router.post(
  "/register",
  celebrate({
    body: Schema.userRegisterSchema,
  }),
  async (req, res, next) => {
    try {
      await common.dbClient.createNewOAuthUser(req.body);
    } catch (err) {
      const { username, email } = req.body;
      const userType = username ? "username" : "email";
      const userValue = username ? username : email;
      console.log(err.stack);
      const params = [
        "client_id",
        "redirect_uri",
        "response_type",
        "grant_type",
        "state",
        "scope",
      ]
        .map((a) => `${a}=${req.body[a]}`)
        .join("&");
      return res.redirect(
        `/register?success=false&error=user-exists&user=${userValue}&type=${userType}&${params}`
      );
    }
    const accountMatched = await common.dbClient.getAccountByCredentials(
      req.body
    );

    if (accountMatched) {
      req.body.user = accountMatched;
      return next();
    }

    const params = [
      "client_id",
      "response_type",
      "redirect_uri",
      "grant_type",
      "scope",
      "state", // could be used to prevent CSRF https://www.npmjs.com/package/csurf
    ]
      .map((a) => `${a}=${req.body[a]}`)
      .join("&");
    return res.redirect(
      `/register?success=false&error=no-valid-login-methods&${params}`
    );
  },
  (req, res, next) => {
    // sends us to our redirect with an authorization code in our url
    return next();
  },
  oauthServer.authorize({
    authenticateHandler: {
      handle: (req) => {
        return req.body.user;
      },
    },
    allowEmptyState: true,
    authorizationCodeLifetime: 600, // 10min, default 5 minutes
  })
);

router.post(
  "/authorize",
  async (req, res, next) => {
    DebugControl.log.flow("Initial User Authentication");

    const accountMatched = await common.dbClient.getAccountByCredentials(
      req.body
    );

    if (accountMatched) {
      req.body.user = accountMatched;
      return next();
    }

    // const params = [
    //   "client_id",
    //   "redirect_uri",
    //   "response_type",
    //   "grant_type",
    //   "state", // could be used to prevent CSRF https://www.npmjs.com/package/csurf
    //   "scope",
    // ]
    //   .map((a) => `${a}=${req.body[a]}`)
    //   .join("&");
    // return res.redirect(`/login?success=false&${params}`);
    return res.status(401).send({
      message: "Authorization has been refused for those credentials",
    });
  },
  (req, res, next) => {
    // sends us to our redirect with an authorization code in our url
    DebugControl.log.flow("Authorization");
    return next();
  },
  async (req, res, next) => {
    const authorize = oauthServer.authorize({
      authenticateHandler: {
        handle: (req) => {
          // DebugControl.log.functionName('Authenticate Handler');
          // DebugControl.log.parameters(
          //   Object.keys(req.body).map((k) => ({ name: k, value: req.body[k] }))
          // );
          return req.body.user;
        },
      },
      allowEmptyState: true,
      authorizationCodeLifetime: 600, // 10min, default 5 minutes
    });
    // http://localhost:5001/login?client_id=t1L0EvTYT-H_xU3oNaR0BBYc&response_type=code&redirect_uri=http://localhost:3001/&scope=&state=
    await authorize(req, res, next);
  }
);

router.post(
  "/token",
  (req, res, next) => {
    DebugControl.log.flow("Token");
    next();
  },
  tokenHandler(),
  (req, res, next) => {
    DebugControl.log.flow("After");
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
    console.log("AUTH Token Error!");
    console.log(err);
  }
  return response;
}

export default router;
