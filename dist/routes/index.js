"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _common = _interopRequireDefault(require("../common/common"));

var _debug = _interopRequireDefault(require("../util/debug"));

var _OathService = _interopRequireDefault(require("../services/OathService"));

var _server = require("react-dom/server");

var _login = _interopRequireDefault(require("../pages/login"));

var _register = _interopRequireDefault(require("../pages/register"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import Index from "../pages/index";
const router = _express.default.Router(); // router.get("/", (req, res) => {
//   let reactComp = renderToString(React.createElement(Index));
//   res.status(200).render('pages/index', { reactApp: reactComp });
// });


router.get('/login', async (req, res) => {
  let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_login.default));
  res.status(200).render('pages/login', {
    reactApp: reactComp
  });
});
router.get('/register', async (req, res) => {
  let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_register.default));
  res.status(200).render('pages/register', {
    reactApp: reactComp
  });
}); // TODO: Delete this route

router.get("/users", async (req, res) => {
  let allUsers = await _common.default.dbClient.getAllAuthAccounts();
  return res.json({
    users: allUsers
  });
}); // router.get("/register", (req, res) => {
//   res.render("pages/register");
// });

router.post("/register", async (req, res) => {
  let newUser = await _common.default.dbClient.createNewOAuthUser(req.body);
  return res.json({
    newUser: newUser
  });
}); // router.get("/login", (req, res) => {
//   res.render("pages/login");
// });
// router.get("/login2", (req, res) => {
//   const reactComp = renderToString(<Login />);
//   res.status(200).render('pages/login', { reactApp: reactComp });
// });

router.post("/authorize", async (req, res, next) => {
  _debug.default.log.flow("Initial User Authentication");

  const usernames = [];
  usernames.push(req.body.userName1);
  usernames.push(req.body.userName2);
  usernames.push(req.body.userName3);
  const passwords = [];
  passwords.push(req.body.password1);
  passwords.push(req.body.password2);
  passwords.push(req.body.password3); // FIXME: hard coding the other required variables for now.
  // ref: response_type=code&client_id=t1L0EvTYT-H_xU3oNaR0BBYc&redirect_uri=https://www.oauth.com/playground/authorization-code.html&scope=photo+offline_access&state=fhhD2qGTUbCvDALY

  req.body.client_id = 't1L0EvTYT-H_xU3oNaR0BBYc';
  req.body.response_type = 'code';
  req.body.redirect_uri = 'http://localhost:3001';
  req.body.scope = '';
  req.body.state = ''; // TODO: generated randomly from the client I think

  const accountMatched = await _common.default.dbClient.getAccountByCredentials(usernames, passwords);

  if (accountMatched) {
    req.body.user = accountMatched;
    return next();
  }

  const params = [// Send params back down
  "client_id", // client
  "redirect_uri", // client.redirect
  "response_type", "grant_type", // authorization_code
  "state", // could be used to prevent CSRF https://www.npmjs.com/package/csurf
  "scope" // is a comma separated permissions string like 'public,birthday,email'
  ].map(a => `${a}=${req.body[a]}`).join("&"); // This should redirect back to the login page, not here since we aren't logging in over here.

  return res.redirect(`/oauth?success=false&${params}`);
}, (req, res, next) => {
  // sends us to our redirect with an authorization code in our url
  _debug.default.log.flow("Authorization");

  return next(); // 3)
}, _OathService.default.authorize({
  authenticateHandler: {
    handle: req => {
      _debug.default.log.functionName("Authenticate Handler");

      _debug.default.log.parameters(Object.keys(req.body).map(k => ({
        name: k,
        value: req.body[k]
      })));

      return req.body.user;
    }
  },
  allowEmptyState: true,
  authorizationCodeLifetime: 600 // 10min, default 5 minutes

}));
router.post('/token', (req, res, next) => {
  _debug.default.log.flow('Token');

  next();
}, _OathService.default.token({
  requireClientAuthentication: {
    // whether client needs to provide client_secret
    'authorization_code': false,
    accessTokenLifetime: 3600,
    // 1hr, default 1 hour
    refreshTokenLifetime: 1209600 // 2wk, default 2 weeks

  }
})); // Sends back token

var _default = router;
exports.default = _default;