import express from "express";
import common from "../common/common";
import DebugControl from "../util/debug";
import oauthServer from "../services/OathService";
import { renderToString } from "react-dom/server";
import Login from "../components/pages/login";
import Register from "../components/pages/register";
import React from "react";

const router = express.Router();

router.get("/login", async (req, res) => {
  let reactComp = renderToString(React.createElement(Login));
  res.status(200).render("./pages/login", { reactApp: reactComp });
});

router.get("/register", async (req, res) => {
  let reactComp = renderToString(React.createElement(Register));
  res.status(200).render("pages/register", { reactApp: reactComp });
});

router.post("/register", async (req, res) => {
  let newUser = await common.dbClient.createNewOAuthUser(req.body);
  return res.json({ newUser: newUser });
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
