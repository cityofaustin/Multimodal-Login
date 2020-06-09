"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _expressOauthServer = _interopRequireDefault(require("express-oauth-server"));

var _Oauth = _interopRequireDefault(require("../database/models/Oauth"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const oathServer = new _expressOauthServer.default({
  debug: true,
  model: _Oauth.default,
  grants: ["authorization_code"] // allowBearerTokensInQueryString: true, // not needed here

});
var _default = oathServer;
exports.default = _default;