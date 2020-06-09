"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OAuthAuthorizationCodeSchema = new _mongoose.default.Schema({
  authorizationCode: {
    type: String
  },
  expiresAt: {
    type: Date
  },
  redirectUri: {
    type: Object
  },
  client: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "OAuthClient"
  },
  clientId: {
    type: String
  },
  user: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "OAuthUser"
  },
  userId: {
    type: String
  }
});

const OAuthAuthorizationCode = _mongoose.default.model("OAuthAuthorizationCode", OAuthAuthorizationCodeSchema);

var _default = OAuthAuthorizationCode;
exports.default = _default;