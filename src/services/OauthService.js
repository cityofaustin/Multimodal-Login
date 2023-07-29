import OAuthServer from "express-oauth-server";
import model from "../database/models/Oauth";

// https://niceprogrammer.com/express-js-oauth-2-server-using-oauth2-server-package/
const oauthServer = new OAuthServer({
  debug: true,
  model,
  useErrorHandler: true,
  grants: ["authorization_code"],
  accessTokenLifetime: 60 * 60 * 24 * 30, // 30 days
  // allowBearerTokensInQueryString: true, // not needed here
});

export default oauthServer;
