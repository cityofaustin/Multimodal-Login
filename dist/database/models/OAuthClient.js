"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OAuthClientSchema = new _mongoose.default.Schema({
  clientId: {
    type: String
  },
  clientSecret: {
    type: String
  },
  redirectUris: {
    type: Array
  },
  grants: {
    type: Array
  }
});

const OAuthClient = _mongoose.default.model("OAuthClient", OAuthClientSchema);

var _default = OAuthClient;
exports.default = _default;