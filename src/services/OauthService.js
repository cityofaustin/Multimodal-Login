import ExpressOAuthServer from "express-oauth-server";
import OAuth2Server from "oauth2-server";
import model from "../database/models/Oauth";

const options = {
  // continueMiddleware: true,
  debug: true,
  model,
  useErrorHandler: false,
  grants: ["authorization_code"],
  accessTokenLifetime: 60 * 60 * 24 * 30, // 30 days
  // allowBearerTokensInQueryString: true, // not needed here
};
// https://niceprogrammer.com/express-js-oauth-2-server-using-oauth2-server-package/
const expressOauthServer = new ExpressOAuthServer(options);

// https://oauth2-server.readthedocs.io/en/latest/
const oauth = new OAuth2Server(options);

export { oauth };

export default expressOauthServer;
