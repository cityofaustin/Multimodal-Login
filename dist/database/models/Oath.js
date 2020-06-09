"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _OAuthClient = _interopRequireDefault(require("./OAuthClient"));

var _OAuthAuthorizationCodesModel = _interopRequireDefault(require("./OAuthAuthorizationCodesModel"));

var _OAuthToken = _interopRequireDefault(require("./OAuthToken"));

var _OAuthUser = _interopRequireDefault(require("./OAuthUser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const getAccessToken = async bearerToken => {
  const oathToken = await _OAuthToken.default.findOne({
    accessToken: bearerToken
  }).lean();
  return oathToken;
};

const getRefreshToken = async refreshToken => {
  return await _OAuthToken.default.findOne({
    refreshToken: refreshToken
  }).lean();
};

const getAuthorizationCode = async authorizationCode => {
  const authCode = await _OAuthAuthorizationCodesModel.default.findOne({
    authorizationCode
  }).populate("client").populate("user").lean();
  return authCode;
};

const getClient = async (clientId, clientSecret) => {
  const oathClient = await _OAuthClient.default.findOne({
    clientId: clientId,
    clientSecret: clientSecret
  }).lean();
  return oathClient;
};

const getUser = async _id => {
  return await _OAuthUser.default.findOne({
    _id
  }).lean();
};

const saveToken = async (token, client, user) => {
  const accessToken = new _OAuthToken.default({
    accessToken: token.accessToken,
    accessTokenExpiresAt: token.accessTokenExpiresAt,
    client: client,
    clientId: client.clientId,
    refreshToken: token.refreshToken,
    refreshTokenExpiresAt: token.refreshTokenExpiresAt,
    user: user,
    userId: user._id
  }); // Can't just chain `lean()` to `save()` as we did with `findOne()` elsewhere. Instead we use `Promise` to resolve the data.

  let saveResult = await accessToken.save();
  const accessJWT = jwt.sign({
    sub: user._id,
    // subject, whom the token refers to
    // event_id: '',
    token_use: 'access',
    scope: user.role,
    auth_time: parseInt(new Date().getTime() / 1000),
    // time when authetication occurred
    // TODO: change this to actuall origin it's running on
    iss: 'http://localhost:5001',
    // issuer, who created and signed this token
    exp: parseInt(token.accessTokenExpiresAt.getTime() / 1000),
    // expiration time, seconds since unix epoch
    // iat issued at, don't need it's automatically created for us
    jti: saveResult._id,
    // jwt id unique identifier for this token
    client_id: clearInterval.clientId,
    username: user.username
  }, process.env.AUTH_SECRET);
  saveResult.accessToken = accessJWT;
  saveResult = await accessToken.save(); // `saveResult` is mongoose wrapper object, not doc itself. Calling `toJSON()` returns the doc.

  saveResult = saveResult && typeof saveResult == "object" ? saveResult.toJSON() : saveResult; // Unsure what else points to `saveResult` in oauth2-server, making copy to be safe

  const data = new Object();

  for (const prop in saveResult) data[prop] = saveResult[prop]; // /oauth-server/lib/models/token-model.js complains if missing `client` and `user`. Creating missing properties.


  data.client = data.clientId;
  data.user = data.userId;
  return data;
};

const saveAuthorizationCode = async (code, client, user) => {
  const authCode = new _OAuthAuthorizationCodesModel.default({
    authorizationCode: code.authorizationCode,
    expiresAt: code.expiresAt,
    redirectUri: code.redirectUri,
    // scope: code.scope, // you can use this to specify permissions
    clientId: client.clientId,
    userId: user._id
  });
  const clientSaved = await getClient(client.clientId, client.clientSecret);
  const userSaved = await getUser(user._id);
  authCode.client = clientSaved;
  authCode.user = userSaved;
  let saveResult = await authCode.save();
  saveResult = saveResult && typeof saveResult == "object" ? saveResult.toJSON() : saveResult;
  const data = new Object();

  for (const prop in saveResult) data[prop] = saveResult[prop];

  return data;
};

const revokeAuthorizationCode = async code => {
  await _OAuthAuthorizationCodesModel.default.deleteMany({
    authorizationCode: code.authorizationCode
  });
  return true;
};

var _default = {
  getAccessToken,
  getRefreshToken,
  getAuthorizationCode,
  getClient,
  getUser,
  saveToken,
  saveAuthorizationCode,
  revokeAuthorizationCode
};
exports.default = _default;