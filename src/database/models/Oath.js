const getAccessToken = async (bearerToken) => {
  // TODO:
  return {};
};

const getRefreshToken = async (refreshToken) => {
  // TODO:
  return {};
  // return await OAuthTokensModel.findOne({ refreshToken: refreshToken }).lean();
};

const getAuthorizationCode = async (authorizationCode) => {
  // TODO:
  return {};
};

const getClient = async (clientId, clientSecret) => {
  // TODO:
  return {};
};

const getUser = async (username, password) => {
  // TODO:
  return {};
};

const saveToken = async (token, client, user) => {
  // TODO:
  return {};
};

const saveAuthorizationCode = async (code, client, user) => {
  // TODO:
  return {};
};

const revokeAuthorizationCode = async (code) => {
  // TODO:
  return {};
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
