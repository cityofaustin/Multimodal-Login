import OAuthClientsModel from "./OAuthClient";
import OAuthAuthorizationCodesModel from "./OAuthAuthorizationCode";
import OAuthTokensModel from "./OAuthToken";
import OAuthUsersModel from "./OAuthUser";
import jwt from "jsonwebtoken";

const getAccessToken = async (bearerToken) => {
  console.log("getAccessToken");

  const oathToken = await OAuthTokensModel.findOne({
    accessToken: bearerToken,
  }).lean();

  console.log("end getAccessToken ");
  console.log(oathToken);
  return oathToken;
};

const getRefreshToken = async (refreshToken) => {
  console.log("getRefreshToken");

  let token = await OAuthTokensModel.findOne({
    refreshToken: refreshToken,
  }).lean();

  console.log("end getRefreshToken");
  console.log(token);
  return token;
};

const getAuthorizationCode = async (authorizationCode) => {
  console.log("getAuthorizationCode");

  const authCode = await OAuthAuthorizationCodesModel.findOne({
    authorizationCode,
  })
    .populate("client")
    .populate("user")
    .lean();

  console.log("end getAuthorizationCode");
  console.log(authCode);
  return authCode;
};

const getClient = async (clientId, clientSecret) => {
  console.log("getClient");

  const oathClient = await OAuthClientsModel.findOne({
    clientId: clientId,
    clientSecret: clientSecret,
  }).lean();

  console.log("end getClient");
  console.log(oathClient);
  return oathClient;
};

const getUser = async (_id) => {
  console.log("getUser");

  const user = await OAuthUsersModel.findOne({
    _id,
  }).lean();

  console.log("end getUser");
  console.log(user);
  return user;
};

const saveToken = async (token, client, user) => {
  console.log("saveToken");

  const accessToken = new OAuthTokensModel({
    accessToken: token.accessToken,
    accessTokenExpiresAt: token.accessTokenExpiresAt,
    client: client,
    clientId: client.clientId,
    refreshToken: token.refreshToken,
    refreshTokenExpiresAt: token.refreshTokenExpiresAt,
    user: user,
    userId: user._id,
  });

  // Can't just chain `lean()` to `save()` as we did with `findOne()` elsewhere. Instead we use `Promise` to resolve the data.
  let saveResult = await accessToken.save();

  let oauthId = "123";

  const accessJWT = jwt.sign(
    {
      sub: user._id, // subject, whom the token refers to
      oauthId: oauthId,
      // event_id: '',
      token_use: "access",
      scope: user.role,
      auth_time: parseInt(new Date().getTime() / 1000), // time when authetication occurred
      // TODO: change this to actuall origin it's running on
      iss: "http://localhost:5001", // issuer, who created and signed this token
      exp: parseInt(token.accessTokenExpiresAt.getTime() / 1000), // expiration time, seconds since unix epoch
      // iat issued at, don't need it's automatically created for us
      jti: saveResult._id, // jwt id unique identifier for this token
      client_id: clearInterval.clientId,
    },
    process.env.AUTH_SECRET
  );

  saveResult.accessToken = accessJWT;
  saveResult = await accessToken.save();

  // `saveResult` is mongoose wrapper object, not doc itself. Calling `toJSON()` returns the doc.
  saveResult =
    saveResult && typeof saveResult == "object"
      ? saveResult.toJSON()
      : saveResult;

  // Unsure what else points to `saveResult` in oauth2-server, making copy to be safe
  const data = new Object();
  for (const prop in saveResult) data[prop] = saveResult[prop];
  // /oauth-server/lib/models/token-model.js complains if missing `client` and `user`. Creating missing properties.
  data.client = data.clientId;
  data.user = data.userId;

  console.log("end saveToken");
  console.log(data);

  return data;
};

const saveAuthorizationCode = async (code, client, user) => {
  console.log("saveAuthorizationCode");

  const authCode = new OAuthAuthorizationCodesModel({
    authorizationCode: code.authorizationCode,
    expiresAt: code.expiresAt,
    redirectUri: code.redirectUri,
    // scope: code.scope, // you can use this to specify permissions
    clientId: client.clientId,
    userId: user._id,
  });
  const clientSaved = await getClient(client.clientId, client.clientSecret);
  const userSaved = await getUser(user._id);
  authCode.client = clientSaved;
  authCode.user = userSaved;

  let saveResult = await authCode.save();
  saveResult =
    saveResult && typeof saveResult == "object"
      ? saveResult.toJSON()
      : saveResult;
  const data = new Object();
  for (const prop in saveResult) data[prop] = saveResult[prop];

  console.log("saveAuthorizationCode");
  console.log(data);
  return data;
};

const revokeAuthorizationCode = async (code) => {
  console.log("revokeAuthorizationCode");

  await OAuthAuthorizationCodesModel.deleteMany({
    authorizationCode: code.authorizationCode,
  });
  return true;
};

export default {
  getAccessToken,
  getRefreshToken,
  getAuthorizationCode,
  getClient,
  getUser,
  saveToken,
  saveAuthorizationCode,
  revokeAuthorizationCode,
};
