"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _celebrate = require("celebrate");
var _schema = _interopRequireDefault(require("./middleware/schema"));
var _debug = _interopRequireDefault(require("../util/debug"));
var _OathService = _interopRequireDefault(require("../services/OathService"));
var _common = _interopRequireDefault(require("../common/common"));

const router = _express.default.Router();

router.post(
'/register',
(0, _celebrate.celebrate)({
  body: _schema.default.userRegisterSchema }), /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(

  function* (req, res, next) {
    yield _common.default.dbClient.createNewOAuthUser(req.body);
    const accountMatched = yield _common.default.dbClient.getAccountByCredentials(
    req.body);


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
    'scope'].

    map(a => `${a}=${req.body[a]}`).
    join('&');
    return res.redirect(`/oauth?success=false&${params}`);
  });return function (_x, _x2, _x3) {return _ref.apply(this, arguments);};}(),
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
'/authorize', /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(
  function* (req, res, next) {
    _debug.default.log.flow('Initial User Authentication');

    const accountMatched = yield _common.default.dbClient.getAccountByCredentials(
    req.body);


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
    'scope'].

    map(a => `${a}=${req.body[a]}`).
    join('&');
    return res.redirect(`/login?success=false&${params}`);
  });return function (_x4, _x5, _x6) {return _ref2.apply(this, arguments);};}(),
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
  _debug.default.log.flow('Token');
  next();
},
tokenHandler(),
(req, res, next) => {
  _debug.default.log.flow('After');
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
    console.log('AUTH Token Error!');
    console.log(err);
  }
  return response;
}var _default =

router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvYXV0aC5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsImJvZHkiLCJTY2hlbWEiLCJ1c2VyUmVnaXN0ZXJTY2hlbWEiLCJyZXEiLCJyZXMiLCJuZXh0IiwiY29tbW9uIiwiZGJDbGllbnQiLCJjcmVhdGVOZXdPQXV0aFVzZXIiLCJhY2NvdW50TWF0Y2hlZCIsImdldEFjY291bnRCeUNyZWRlbnRpYWxzIiwidXNlciIsInBhcmFtcyIsIm1hcCIsImEiLCJqb2luIiwicmVkaXJlY3QiLCJvYXV0aFNlcnZlciIsImF1dGhvcml6ZSIsImF1dGhlbnRpY2F0ZUhhbmRsZXIiLCJoYW5kbGUiLCJhbGxvd0VtcHR5U3RhdGUiLCJhdXRob3JpemF0aW9uQ29kZUxpZmV0aW1lIiwiRGVidWdDb250cm9sIiwibG9nIiwiZmxvdyIsInRva2VuSGFuZGxlciIsInJlc3BvbnNlIiwidG9rZW4iLCJyZXF1aXJlQ2xpZW50QXV0aGVudGljYXRpb24iLCJhdXRob3JpemF0aW9uX2NvZGUiLCJhY2Nlc3NUb2tlbkxpZmV0aW1lIiwicmVmcmVzaFRva2VuTGlmZXRpbWUiLCJlcnIiLCJjb25zb2xlIl0sIm1hcHBpbmdzIjoiNlJBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxJQUFQO0FBQ0UsV0FERjtBQUVFLDBCQUFVO0FBQ1JDLEVBQUFBLElBQUksRUFBRUMsZ0JBQU9DLGtCQURMLEVBQVYsQ0FGRjs7QUFLRSxhQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBaUJDLElBQWpCLEVBQTBCO0FBQ3hCLFVBQU1DLGdCQUFPQyxRQUFQLENBQWdCQyxrQkFBaEIsQ0FBbUNMLEdBQUcsQ0FBQ0gsSUFBdkMsQ0FBTjtBQUNBLFVBQU1TLGNBQWMsU0FBU0gsZ0JBQU9DLFFBQVAsQ0FBZ0JHLHVCQUFoQjtBQUMzQlAs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QixpQkFBYUMsR0FBYixDQUFpQkMsSUFBakIsQ0FBc0IsT0FBdEI7QUFDQXBCLEVBQUFBLElBQUk7QUFDTCxDQUxIO0FBTUVxQixZQUFZLEVBTmQ7QUFPRSxDQUFDdkIsR0FBRCxFQUFNQyxHQUFOLEVBQVdDLElBQVgsS0FBb0I7QUFDbEJrQixpQkFBYUMsR0FBYixDQUFpQkMsSUFBakIsQ0FBc0IsT0FBdEI7QUFDQXBCLEVBQUFBLElBQUk7QUFDTCxDQVZIO0FBV0c7O0FBRUgsU0FBU3FCLFlBQVQsR0FBd0I7QUFDdEIsTUFBSUMsUUFBSjtBQUNBLE1BQUk7QUFDRkEsSUFBQUEsUUFBUSxHQUFHVixxQkFBWVcsS0FBWixDQUFrQjtBQUMzQkMsTUFBQUEsMkJBQTJCLEVBQUU7QUFDM0I7QUFDQUMsUUFBQUEsa0JBQWtCLEVBQUUsS0FGTztBQUczQkMsUUFBQUEsbUJBQW1CLEVBQUUsTUFITSxFQUdFO0FBQzdCQyxRQUFBQSxvQkFBb0IsRUFBRSxPQUpLLENBSUk7QUFKSixPQURGLEVBQWxCLENBQVg7O0FBUUQsR0FURCxDQVNFLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxJQUFBQSxPQUFPLENBQUNWLEdBQVIsQ0FBWSxtQkFBWjtBQUNBVSxJQUFBQSxPQUFPLENBQUNWLEdBQVIsQ0FBWVMsR0FBWjtBQUNEO0FBQ0QsU0FBT04sUUFBUDtBQUNELEM7O0FBRWMvQixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IGNlbGVicmF0ZSB9IGZyb20gXCJjZWxlYnJhdGVcIjtcbmltcG9ydCBTY2hlbWEgZnJvbSBcIi4vbWlkZGxld2FyZS9zY2hlbWFcIjtcbmltcG9ydCBEZWJ1Z0NvbnRyb2wgZnJvbSAnLi4vdXRpbC9kZWJ1Zyc7XG5pbXBvcnQgb2F1dGhTZXJ2ZXIgZnJvbSAnLi4vc2VydmljZXMvT2F0aFNlcnZpY2UnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuLi9jb21tb24vY29tbW9uJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoXG4gICcvcmVnaXN0ZXInLFxuICBjZWxlYnJhdGUoe1xuICAgIGJvZHk6IFNjaGVtYS51c2VyUmVnaXN0ZXJTY2hlbWEsXG4gIH0pLFxuICBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBhd2FpdCBjb21tb24uZGJDbGllbnQuY3JlYXRlTmV3T0F1dGhVc2VyKHJlcS5ib2R5KTtcbiAgICBjb25zdCBhY2NvdW50TWF0Y2hlZCA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5nZXRBY2NvdW50QnlDcmVkZW50aWFscyhcbiAgICAgIHJlcS5ib2R5XG4gICAgKTtcblxuICAgIGlmIChhY2NvdW50TWF0Y2hlZCkge1xuICAgICAgcmVxLmJvZHkudXNlciA9IGFjY291bnRNYXRjaGVkO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAnY2xpZW50X2lkJyxcbiAgICAgICdyZWRpcmVjdF91cmknLFxuICAgICAgJ3Jlc3BvbnNlX3R5cGUnLFxuICAgICAgJ2dyYW50X3R5cGUnLFxuICAgICAgJ3N0YXRlJywgLy8gY291bGQgYmUgdXNlZCB0byBwcmV2ZW50IENTUkYgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY3N1cmZcbiAgICAgICdzY29wZScsXG4gICAgXVxuICAgICAgLm1hcCgoYSkgPT4gYCR7YX09JHtyZXEuYm9keVthXX1gKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAvb2F1dGg/c3VjY2Vzcz1mYWxzZSYke3BhcmFtc31gKTtcbiAgfSxcbiAgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLy8gc2VuZHMgdXMgdG8gb3VyIHJlZGlyZWN0IHdpdGggYW4gYXV0aG9yaXphdGlvbiBjb2RlIGluIG91ciB1cmxcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9LFxuICBvYXV0aFNlcnZlci5hdXRob3JpemUoe1xuICAgIGF1dGhlbnRpY2F0ZUhhbmRsZXI6IHtcbiAgICAgIGhhbmRsZTogKHJlcSkgPT4ge1xuICAgICAgICByZXR1cm4gcmVxLmJvZHkudXNlcjtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBhbGxvd0VtcHR5U3RhdGU6IHRydWUsXG4gICAgYXV0aG9yaXphdGlvbkNvZGVMaWZldGltZTogNjAwLCAvLyAxMG1pbiwgZGVmYXVsdCA1IG1pbnV0ZXNcbiAgfSlcbik7XG5cbnJvdXRlci5wb3N0KFxuICAnL2F1dGhvcml6ZScsXG4gIGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIERlYnVnQ29udHJvbC5sb2cuZmxvdygnSW5pdGlhbCBVc2VyIEF1dGhlbnRpY2F0aW9uJyk7XG5cbiAgICBjb25zdCBhY2NvdW50TWF0Y2hlZCA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5nZXRBY2NvdW50QnlDcmVkZW50aWFscyhcbiAgICAgIHJlcS5ib2R5XG4gICAgKTtcblxuICAgIGlmIChhY2NvdW50TWF0Y2hlZCkge1xuICAgICAgcmVxLmJvZHkudXNlciA9IGFjY291bnRNYXRjaGVkO1xuICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBjb25zdCBwYXJhbXMgPSBbXG4gICAgICAnY2xpZW50X2lkJyxcbiAgICAgICdyZWRpcmVjdF91cmknLFxuICAgICAgJ3Jlc3BvbnNlX3R5cGUnLFxuICAgICAgJ2dyYW50X3R5cGUnLFxuICAgICAgJ3N0YXRlJywgLy8gY291bGQgYmUgdXNlZCB0byBwcmV2ZW50IENTUkYgaHR0cHM6Ly93d3cubnBtanMuY29tL3BhY2thZ2UvY3N1cmZcbiAgICAgICdzY29wZScsXG4gICAgXVxuICAgICAgLm1hcCgoYSkgPT4gYCR7YX09JHtyZXEuYm9keVthXX1gKVxuICAgICAgLmpvaW4oJyYnKTtcbiAgICByZXR1cm4gcmVzLnJlZGlyZWN0KGAvbG9naW4/c3VjY2Vzcz1mYWxzZSYke3BhcmFtc31gKTtcbiAgfSxcbiAgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gICAgLy8gc2VuZHMgdXMgdG8gb3VyIHJlZGlyZWN0IHdpdGggYW4gYXV0aG9yaXphdGlvbiBjb2RlIGluIG91ciB1cmxcbiAgICAvLyBEZWJ1Z0NvbnRyb2wubG9nLmZsb3coJ0F1dGhvcml6YXRpb24nKTtcbiAgICByZXR1cm4gbmV4dCgpO1xuICB9LFxuICBvYXV0aFNlcnZlci5hdXRob3JpemUoe1xuICAgIGF1dGhlbnRpY2F0ZUhhbmRsZXI6IHtcbiAgICAgIGhhbmRsZTogKHJlcSkgPT4ge1xuICAgICAgICAvLyBEZWJ1Z0NvbnRyb2wubG9nLmZ1bmN0aW9uTmFtZSgnQXV0aGVudGljYXRlIEhhbmRsZXInKTtcbiAgICAgICAgLy8gRGVidWdDb250cm9sLmxvZy5wYXJhbWV0ZXJzKFxuICAgICAgICAvLyAgIE9iamVjdC5rZXlzKHJlcS5ib2R5KS5tYXAoKGspID0+ICh7IG5hbWU6IGssIHZhbHVlOiByZXEuYm9keVtrXSB9KSlcbiAgICAgICAgLy8gKTtcbiAgICAgICAgcmV0dXJuIHJlcS5ib2R5LnVzZXI7XG4gICAgICB9LFxuICAgIH0sXG4gICAgYWxsb3dFbXB0eVN0YXRlOiB0cnVlLFxuICAgIGF1dGhvcml6YXRpb25Db2RlTGlmZXRpbWU6IDYwMCwgLy8gMTBtaW4sIGRlZmF1bHQgNSBtaW51dGVzXG4gIH0pXG4pO1xuXG4vLyByb3V0ZXIucG9zdChcbi8vICAgJy90b2tlbicsXG4vLyAgIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuLy8gICAgIERlYnVnQ29udHJvbC5sb2cuZmxvdygnVG9rZW4nKTtcbi8vICAgICBuZXh0KCk7XG4vLyAgIH0sXG4vLyAgIG9hdXRoU2VydmVyLnRva2VuKHtcbi8vICAgICByZXF1aXJlQ2xpZW50QXV0aGVudGljYXRpb246IHtcbi8vICAgICAgIC8vIHdoZXRoZXIgY2xpZW50IG5lZWRzIHRvIHByb3ZpZGUgY2xpZW50X3NlY3JldFxuLy8gICAgICAgYXV0aG9yaXphdGlvbl9jb2RlOiBmYWxzZSxcbi8vICAgICAgIGFjY2Vzc1Rva2VuTGlmZXRpbWU6IDE3MjgwMCwgLy8gMmRheXMsIGRlZmF1bHQgMSBob3VyXG4vLyAgICAgICByZWZyZXNoVG9rZW5MaWZldGltZTogMTIwOTYwMCwgLy8gMndrLCBkZWZhdWx0IDIgd2Vla3Ncbi8vICAgICB9LFxuLy8gICB9KVxuLy8gKTsgLy8gU2VuZHMgYmFjayB0b2tlblxuXG5yb3V0ZXIucG9zdChcbiAgJy90b2tlbicsXG4gIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICAgIERlYnVnQ29udHJvbC5sb2cuZmxvdygnVG9rZW4nKTtcbiAgICBuZXh0KCk7XG4gIH0sXG4gIHRva2VuSGFuZGxlcigpLFxuICAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgICBEZWJ1Z0NvbnRyb2wubG9nLmZsb3coJ0FmdGVyJyk7XG4gICAgbmV4dCgpO1xuICB9XG4pOyAvLyBTZW5kcyBiYWNrIHRva2VuXG5cbmZ1bmN0aW9uIHRva2VuSGFuZGxlcigpIHtcbiAgbGV0IHJlc3BvbnNlO1xuICB0cnkge1xuICAgIHJlc3BvbnNlID0gb2F1dGhTZXJ2ZXIudG9rZW4oe1xuICAgICAgcmVxdWlyZUNsaWVudEF1dGhlbnRpY2F0aW9uOiB7XG4gICAgICAgIC8vIHdoZXRoZXIgY2xpZW50IG5lZWRzIHRvIHByb3ZpZGUgY2xpZW50X3NlY3JldFxuICAgICAgICBhdXRob3JpemF0aW9uX2NvZGU6IGZhbHNlLFxuICAgICAgICBhY2Nlc3NUb2tlbkxpZmV0aW1lOiAxNzI4MDAsIC8vIDJkYXlzLCBkZWZhdWx0IDEgaG91clxuICAgICAgICByZWZyZXNoVG9rZW5MaWZldGltZTogMTIwOTYwMCwgLy8gMndrLCBkZWZhdWx0IDIgd2Vla3NcbiAgICAgIH0sXG4gICAgfSk7XG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnNvbGUubG9nKCdBVVRIIFRva2VuIEVycm9yIScpO1xuICAgIGNvbnNvbGUubG9nKGVycik7XG4gIH1cbiAgcmV0dXJuIHJlc3BvbnNlO1xufVxuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=