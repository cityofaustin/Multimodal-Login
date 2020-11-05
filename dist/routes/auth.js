"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _celebrate = require("celebrate");
var _schema = _interopRequireDefault(require("./middleware/schema"));
var _debug = _interopRequireDefault(require("../util/debug"));
var _OathService = _interopRequireDefault(require("../services/OathService"));
var _common = _interopRequireDefault(require("../common/common"));
var _secureKeyStorage = _interopRequireDefault(require("../common/secureKeyStorage"));

var _auth = _interopRequireDefault(require("../middleware/auth"));

const router = _express.default.Router();

router.
route("/get-encryption-key").
get(_auth.default.required, /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* (req, res, next) {
    const account = yield _common.default.dbClient.findUserByUserName(
    req.payload.username);

    let key = yield _secureKeyStorage.default.retrieve(account.didPrivateKeyGuid);
    res.status(200).json({ encryptionKey: key });
  });return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}());

router.post(
"/register",
(0, _celebrate.celebrate)({
  body: _schema.default.userRegisterSchema }), /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(

  function* (req, res, next) {
    yield _common.default.dbClient.createNewOAuthUser(req.body);
    const accountMatched = yield _common.default.dbClient.getAccountByCredentials(
    req.body);


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
    "scope"].

    map(a => `${a}=${req.body[a]}`).
    join("&");
    return res.redirect(`/oauth?success=false&${params}`);
  });return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}(),
(req, res, next) => {
  // sends us to our redirect with an authorization code in our url
  return next();
},
_OathService.default.authorize({
  authenticateHandler: {
    handle: req => {
      return req.body.user;
    } },

  allowEmptyState: true,
  authorizationCodeLifetime: 600 // 10min, default 5 minutes
}));


router.post(
"/authorize", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(
  function* (req, res, next) {
    _debug.default.log.flow("Initial User Authentication");

    const accountMatched = yield _common.default.dbClient.getAccountByCredentials(
    req.body);


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
    "scope"].

    map(a => `${a}=${req.body[a]}`).
    join("&");
    return res.redirect(`/login?success=false&${params}`);
  });return function (_x7, _x8, _x9) {return _ref3.apply(this, arguments);};}(),
(req, res, next) => {
  // sends us to our redirect with an authorization code in our url
  // DebugControl.log.flow('Authorization');
  return next();
},
_OathService.default.authorize({
  authenticateHandler: {
    handle: req => {
      // DebugControl.log.functionName('Authenticate Handler');
      // DebugControl.log.parameters(
      //   Object.keys(req.body).map((k) => ({ name: k, value: req.body[k] }))
      // );
      return req.body.user;
    } },

  allowEmptyState: true,
  authorizationCodeLifetime: 600 // 10min, default 5 minutes
}));


router.post(
"/token",
(req, res, next) => {
  _debug.default.log.flow("Token");
  next();
},
tokenHandler(),
(req, res, next) => {
  _debug.default.log.flow("After");
  next();
});
// Sends back token

function tokenHandler() {
  let response;
  try {
    response = _OathService.default.token({
      requireClientAuthentication: {
        // whether client needs to provide client_secret
        authorization_code: false,
        accessTokenLifetime: 172800, // 2days, default 1 hour
        refreshTokenLifetime: 1209600 // 2wk, default 2 weeks
      } });

  } catch (err) {
    console.log("AUTH Token Error!");
    console.log(err);
  }
  return response;
}var _default =

router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicm91dGUiLCJnZXQiLCJhdXRoIiwicmVxdWlyZWQiLCJyZXEiLCJyZXMiLCJuZXh0IiwiYWNjb3VudCIsImNvbW1vbiIsImRiQ2xpZW50IiwiZmluZFVzZXJCeVVzZXJOYW1lIiwicGF5bG9hZCIsInVzZXJuYW1lIiwia2V5Iiwic2VjdXJlS2V5U3RvcmFnZSIsInJldHJpZXZlIiwiZGlkUHJpdmF0ZUtleUd1aWQiLCJzdGF0dXMiLCJqc29uIiwiZW5jcnlwdGlvbktleSIsInBvc3QiLCJib2R5IiwiU2NoZW1hIiwidXNlclJlZ2lzdGVyU2NoZW1hIiwiY3JlYXRlTmV3T0F1dGhVc2VyIiwiYWNjb3VudE1hdGNoZWQiLCJnZXRBY2NvdW50QnlDcmVkZW50aWFscyIsInVzZXIiLCJwYXJhbXMiLCJtYXAiLCJhIiwiam9pbiIsInJlZGlyZWN0Iiwib2F1dGhTZXJ2ZXIiLCJhdXRob3JpemUiLCJhdXRoZW50aWNhdGVIYW5kbGVyIiwiaGFuZGxlIiwiYWxsb3dFbXB0eVN0YXRlIiwiYXV0aG9yaXphdGlvbkNvZGVMaWZldGltZSIsIkRlYnVnQ29udHJvbCIsImxvZyIsImZsb3ciLCJ0b2tlbkhhbmRsZXIiLCJyZXNwb25zZSIsInRva2VuIiwicmVxdWlyZUNsaWVudEF1dGhlbnRpY2F0aW9uIiwiYXV0aG9yaXphdGlvbl9jb2RlIiwiYWNjZXNzVG9rZW5MaWZldGltZSIsInJlZnJlc2hUb2tlbkxpZmV0aW1lIiwiZXJyIiwiY29uc29sZSJdLCJtYXBwaW5ncyI6IjZSQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTTtBQUNIRyxLQURILENBQ1MscUJBRFQ7QUFFR0MsR0FGSCxDQUVPQyxjQUFLQyxRQUZaLHVFQUVzQixXQUFPQyxH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QUhNLEVBR0U7QUFDN0JDLFFBQUFBLG9CQUFvQixFQUFFLE9BSkssQ0FJSTtBQUpKLE9BREYsRUFBbEIsQ0FBWDs7QUFRRCxHQVRELENBU0UsT0FBT0MsR0FBUCxFQUFZO0FBQ1pDLElBQUFBLE9BQU8sQ0FBQ1YsR0FBUixDQUFZLG1CQUFaO0FBQ0FVLElBQUFBLE9BQU8sQ0FBQ1YsR0FBUixDQUFZUyxHQUFaO0FBQ0Q7QUFDRCxTQUFPTixRQUFQO0FBQ0QsQzs7QUFFYzlDLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IHsgY2VsZWJyYXRlIH0gZnJvbSBcImNlbGVicmF0ZVwiO1xuaW1wb3J0IFNjaGVtYSBmcm9tIFwiLi9taWRkbGV3YXJlL3NjaGVtYVwiO1xuaW1wb3J0IERlYnVnQ29udHJvbCBmcm9tIFwiLi4vdXRpbC9kZWJ1Z1wiO1xuaW1wb3J0IG9hdXRoU2VydmVyIGZyb20gXCIuLi9zZXJ2aWNlcy9PYXRoU2VydmljZVwiO1xuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi4vY29tbW9uL2NvbW1vblwiO1xuaW1wb3J0IHNlY3VyZUtleVN0b3JhZ2UgZnJvbSBcIi4uL2NvbW1vbi9zZWN1cmVLZXlTdG9yYWdlXCI7XG5cbmltcG9ydCBhdXRoIGZyb20gXCIuLi9taWRkbGV3YXJlL2F1dGhcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyXG4gIC5yb3V0ZShcIi9nZXQtZW5jcnlwdGlvbi1rZXlcIilcbiAgLmdldChhdXRoLnJlcXVpcmVkLCBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgY29tbW9uLmRiQ2xpZW50LmZpbmRVc2VyQnlVc2VyTmFtZShcbiAgICAgIHJlcS5wYXlsb2FkLnVzZXJuYW1lXG4gICAgKTtcbiAgICBsZXQga2V5ID0gYXdhaXQgc2VjdXJlS2V5U3RvcmFnZS5yZXRyaWV2ZShhY2NvdW50LmRpZFByaXZhdGVLZXlHdWlkKTtcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IGVuY3J5cHRpb25LZXk6IGtleSB9KTtcbiAgfSk7XG5cbnJvdXRlci5wb3N0KFxuICBcIi9yZWdpc3RlclwiLFxuICBjZWxlYnJhdGUoe1xuICAgIGJvZHk6IFNjaGVtYS51c2VyUmVnaXN0ZXJTY2hlbWEsXG4gIH0pLFxuICBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBhd2FpdCBjb21tb24uZGJDbGllbnQuY3JlYXRlTmV3T0F1dGhVc2VyKHJlcS5ib2R5KTtcbiAgICBjb25zdCBhY2NvdW50TWF0Y2hlZCA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5nZXRBY2NvdW50QnlDcmVkZW50aWFscyhcbiAgICAgIHJlcS5ib2R5XG4gICAgKTtcblxuICAgIGlmIChhY2NvdW50TWF0Y2hlZCkge1xuICAgICAgcmVxLmJvZHkudXNlciA9IGFjY291bnRNYXRjaGVkO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICBcImNsaWVudF9pZFwiLFxuICAgICAgXCJyZWRpcmVjdF91cmlcIixcbiAgICAgIFwicmVzcG9uc2VfdHlwZVwiLFxuICAgICAgXCJncmFudF90eXBlXCIsXG4gICAgICBcInN0YXRlXCIsIC8vIGNvdWxkIGJlIHVzZWQgdG8gcHJldmVudCBDU1JGIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2NzdXJmXG4gICAgICBcInNjb3BlXCIsXG4gICAgXVxuICAgICAgLm1hcCgoYSkgPT4gYCR7YX09JHtyZXEuYm9keVthXX1gKVxuICAgICAgLmpvaW4oXCImXCIpO1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoYC9vYXV0aD9zdWNjZXNzPWZhbHNlJiR7cGFyYW1zfWApO1xuICB9LFxuICAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAvLyBzZW5kcyB1cyB0byBvdXIgcmVkaXJlY3Qgd2l0aCBhbiBhdXRob3JpemF0aW9uIGNvZGUgaW4gb3VyIHVybFxuICAgIHJldHVybiBuZXh0KCk7XG4gIH0sXG4gIG9hdXRoU2VydmVyLmF1dGhvcml6ZSh7XG4gICAgYXV0aGVudGljYXRlSGFuZGxlcjoge1xuICAgICAgaGFuZGxlOiAocmVxKSA9PiB7XG4gICAgICAgIHJldHVybiByZXEuYm9keS51c2VyO1xuICAgICAgfSxcbiAgICB9LFxuICAgIGFsbG93RW1wdHlTdGF0ZTogdHJ1ZSxcbiAgICBhdXRob3JpemF0aW9uQ29kZUxpZmV0aW1lOiA2MDAsIC8vIDEwbWluLCBkZWZhdWx0IDUgbWludXRlc1xuICB9KVxuKTtcblxucm91dGVyLnBvc3QoXG4gIFwiL2F1dGhvcml6ZVwiLFxuICBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBEZWJ1Z0NvbnRyb2wubG9nLmZsb3coXCJJbml0aWFsIFVzZXIgQXV0aGVudGljYXRpb25cIik7XG5cbiAgICBjb25zdCBhY2NvdW50TWF0Y2hlZCA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5nZXRBY2NvdW50QnlDcmVkZW50aWFscyhcbiAgICAgIHJlcS5ib2R5XG4gICAgKTtcblxuICAgIGlmIChhY2NvdW50TWF0Y2hlZCkge1xuICAgICAgcmVxLmJvZHkudXNlciA9IGFjY291bnRNYXRjaGVkO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICBcImNsaWVudF9pZFwiLFxuICAgICAgXCJyZWRpcmVjdF91cmlcIixcbiAgICAgIFwicmVzcG9uc2VfdHlwZVwiLFxuICAgICAgXCJncmFudF90eXBlXCIsXG4gICAgICBcInN0YXRlXCIsIC8vIGNvdWxkIGJlIHVzZWQgdG8gcHJldmVudCBDU1JGIGh0dHBzOi8vd3d3Lm5wbWpzLmNvbS9wYWNrYWdlL2NzdXJmXG4gICAgICBcInNjb3BlXCIsXG4gICAgXVxuICAgICAgLm1hcCgoYSkgPT4gYCR7YX09JHtyZXEuYm9keVthXX1gKVxuICAgICAgLmpvaW4oXCImXCIpO1xuICAgIHJldHVybiByZXMucmVkaXJlY3QoYC9sb2dpbj9zdWNjZXNzPWZhbHNlJiR7cGFyYW1zfWApO1xuICB9LFxuICAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICAvLyBzZW5kcyB1cyB0byBvdXIgcmVkaXJlY3Qgd2l0aCBhbiBhdXRob3JpemF0aW9uIGNvZGUgaW4gb3VyIHVybFxuICAgIC8vIERlYnVnQ29udHJvbC5sb2cuZmxvdygnQXV0aG9yaXphdGlvbicpO1xuICAgIHJldHVybiBuZXh0KCk7XG4gIH0sXG4gIG9hdXRoU2VydmVyLmF1dGhvcml6ZSh7XG4gICAgYXV0aGVudGljYXRlSGFuZGxlcjoge1xuICAgICAgaGFuZGxlOiAocmVxKSA9PiB7XG4gICAgICAgIC8vIERlYnVnQ29udHJvbC5sb2cuZnVuY3Rpb25OYW1lKCdBdXRoZW50aWNhdGUgSGFuZGxlcicpO1xuICAgICAgICAvLyBEZWJ1Z0NvbnRyb2wubG9nLnBhcmFtZXRlcnMoXG4gICAgICAgIC8vICAgT2JqZWN0LmtleXMocmVxLmJvZHkpLm1hcCgoaykgPT4gKHsgbmFtZTogaywgdmFsdWU6IHJlcS5ib2R5W2tdIH0pKVxuICAgICAgICAvLyApO1xuICAgICAgICByZXR1cm4gcmVxLmJvZHkudXNlcjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhbGxvd0VtcHR5U3RhdGU6IHRydWUsXG4gICAgYXV0aG9yaXphdGlvbkNvZGVMaWZldGltZTogNjAwLCAvLyAxMG1pbiwgZGVmYXVsdCA1IG1pbnV0ZXNcbiAgfSlcbik7XG5cbnJvdXRlci5wb3N0KFxuICBcIi90b2tlblwiLFxuICAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBEZWJ1Z0NvbnRyb2wubG9nLmZsb3coXCJUb2tlblwiKTtcbiAgICBuZXh0KCk7XG4gIH0sXG4gIHRva2VuSGFuZGxlcigpLFxuICAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBEZWJ1Z0NvbnRyb2wubG9nLmZsb3coXCJBZnRlclwiKTtcbiAgICBuZXh0KCk7XG4gIH1cbik7IC8vIFNlbmRzIGJhY2sgdG9rZW5cblxuZnVuY3Rpb24gdG9rZW5IYW5kbGVyKCkge1xuICBsZXQgcmVzcG9uc2U7XG4gIHRyeSB7XG4gICAgcmVzcG9uc2UgPSBvYXV0aFNlcnZlci50b2tlbih7XG4gICAgICByZXF1aXJlQ2xpZW50QXV0aGVudGljYXRpb246IHtcbiAgICAgICAgLy8gd2hldGhlciBjbGllbnQgbmVlZHMgdG8gcHJvdmlkZSBjbGllbnRfc2VjcmV0XG4gICAgICAgIGF1dGhvcml6YXRpb25fY29kZTogZmFsc2UsXG4gICAgICAgIGFjY2Vzc1Rva2VuTGlmZXRpbWU6IDE3MjgwMCwgLy8gMmRheXMsIGRlZmF1bHQgMSBob3VyXG4gICAgICAgIHJlZnJlc2hUb2tlbkxpZmV0aW1lOiAxMjA5NjAwLCAvLyAyd2ssIGRlZmF1bHQgMiB3ZWVrc1xuICAgICAgfSxcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc29sZS5sb2coXCJBVVRIIFRva2VuIEVycm9yIVwiKTtcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xuICB9XG4gIHJldHVybiByZXNwb25zZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19