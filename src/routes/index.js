import express from "express";
import common from "../common/common";
import DebugControl from "../util/debug";
import oauthServer from "../services/OathService";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({ account: "hello!" });
});

// TODO: Delete this route
router.get("/users", async (req, res) => {
  let allUsers = await common.dbClient.getAllAuthAccounts();
  return res.json({ users: allUsers });
});

router.get("/register", (req, res) => {
  res.render("pages/register");
});

router.post("/register", async (req, res) => {
  let newUser = await common.dbClient.createNewOAuthUser(req.body);
  return res.json({ newUser: newUser });
});

router.get("/login", (req, res) => {
  res.render("pages/login");
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

    const accountMatched = await common.dbClient.getAccountByCredentials(
      usernames,
      passwords
    );
    if (accountMatched) {
      req.body.user = accountMatched;
      return next();
    }
    const params = [
      // Send params back down
      "client_id", // client
      "redirect_uri", // client.redirect
      "response_type",
      "grant_type", // authorization_code
      "state", // could be used to prevent CSRF https://www.npmjs.com/package/csurf
      "scope", // is a comma separated permissions string like 'public,birthday,email'
    ]
      .map((a) => `${a}=${req.body[a]}`)
      .join("&");
    // This should redirect back to the login page, not here since we aren't logging in over here.
    return res.redirect(`/oauth?success=false&${params}`);
  },
  (req, res, next) => {
    // sends us to our redirect with an authorization code in our url
    DebugControl.log.flow("Authorization");
    return next();
    // 3)
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

export default router;
