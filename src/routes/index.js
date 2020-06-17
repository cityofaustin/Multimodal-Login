import express from "express";
import common from "../common/common";
import DebugControl from "../util/debug";
import oauthServer from "../services/OathService";
import { renderToString } from "react-dom/server";
import Index from "../components/pages/index";
import Login from "../components/pages/login";
import Register from "../components/pages/register";
import React from "react";
import CognitiveFaceService from "../services/CognitiveFaceService";
import StringUtil from "../util/StringUtil";
import path from "path";
import fs from "fs";

const router = express.Router();

router
  .route("/users/username/:username/matched")
  .get(async (req, res) => {
  const userName = req.params.username;
  let user = await common.dbClient.findUserByUserName(userName);
  if(user) {
    return res.json({ matched: true });
  } else {
    return res.json({ matched: false });
  }
});

// router.get("/users", async (req, res) => {
//   let allUsers = await common.dbClient.getAllAuthAccounts();
//   return res.json({ users: allUsers });
// });

router.get("/", async (req, res) => {
  let reactComp = renderToString(React.createElement(Index));
  res.status(200).render("./pages/index", { reactApp: reactComp });
});

router.get("/login", async (req, res) => {
  let reactComp = renderToString(React.createElement(Login));
  res.status(200).render("./pages/login", { reactApp: reactComp });
});

router.get("/register", async (req, res) => {
  let reactComp = renderToString(React.createElement(Login));
  res.status(200).render("./pages/register", { reactApp: reactComp });
});

router.post("/register", async (req, res) => {
  let newUser = await common.dbClient.createNewOAuthUser(req.body);
  return res.json({ newUser: newUser });
});

router.post("/verify/face", async(req, res) => {
  if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined
  ) {
    res.status(501).json({
      error: "Must include a file to upload.",
    });
    return;
  }
  const file = req.files.img[0] === undefined ? req.files.img : req.files.img[0];
  const dataBuffer = fs.readFileSync(file.tempFilePath);
  const response = await CognitiveFaceService.verifyFaceToUsername(dataBuffer, req.body.username);
  return res.json({ registerFaceResponse: response });
});

router.post("/register/face", async(req, res) => {
  if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined
  ) {
    res.status(501).json({
      error: "Must include a file to upload.",
    });
    return;
  }
  const file = req.files.img[0] === undefined ? req.files.img : req.files.img[0];
  const dataBuffer = fs.readFileSync(file.tempFilePath);
  const response = await CognitiveFaceService.registerFaceToUsername(dataBuffer, req.body.username);
  return res.json({ registerFaceResponse: response });
});

router.post(
  "/authorize",
  async (req, res, next) => {
    DebugControl.log.flow("Initial User Authentication");

    const usernames = [];
    usernames.push(req.body.userName1);
    usernames.push(req.body.userName2);
    usernames.push(req.body.userName3);

    const passwords = [];
    passwords.push(req.body.password1);
    passwords.push(req.body.password2);
    passwords.push(req.body.password3);

    // const accountMatched = true;
    const accountMatched = await common.dbClient.getAccountByCredentials(
      usernames,
      passwords
    );

    if (accountMatched) {
      req.body.user = accountMatched;
      return next();
    }

    const params = [
      "client_id",
      "redirect_uri",
      "response_type",
      "grant_type",
      "state", // could be used to prevent CSRF https://www.npmjs.com/package/csurf
      "scope",
    ]
      .map((a) => `${a}=${req.body[a]}`)
      .join("&");
    return res.redirect(`/oauth?success=false&${params}`);
  },
  (req, res, next) => {
    // sends us to our redirect with an authorization code in our url
    DebugControl.log.flow("Authorization");
    return next();
  },
  oauthServer.authorize({
    authenticateHandler: {
      handle: (req) => {
        DebugControl.log.functionName("Authenticate Handler");
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

router.post(
  "/token",
  (req, res, next) => {
    DebugControl.log.flow("Token");
    console.log(" POST TO TOKEN ");
    console.log(res.body);
    next();
  },
  oauthServer.token({
    requireClientAuthentication: {
      // whether client needs to provide client_secret
      authorization_code: false,
      accessTokenLifetime: 28800, // 8hr, default 1 hour
      refreshTokenLifetime: 1209600, // 2wk, default 2 weeks
    },
  })
); // Sends back token

export default router;
