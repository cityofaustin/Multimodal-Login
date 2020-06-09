"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OAuthTokenSchema = new _mongoose.default.Schema({
  accessToken: {
    type: String
  },
  accessTokenExpiresAt: {
    type: Date
  },
  client: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "OAuthClient"
  },
  clientId: {
    type: String
  },
  refreshToken: {
    type: String
  },
  refreshTokenExpiresAt: {
    type: Date
  },
  user: {
    type: _mongoose.default.Schema.Types.ObjectId,
    ref: "OAuthUser"
  },
  userId: {
    type: String
  }
});

const OAuthToken = _mongoose.default.model("OAuthToken", OAuthTokenSchema);

var _default = OAuthToken;
exports.default = _default;