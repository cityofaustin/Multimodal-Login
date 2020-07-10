import OAuthServer from 'express-oauth-server';
import model from '../database/models/Oauth';

const oathServer = new OAuthServer({
  debug: true,
  model,
  useErrorHandler: true,
  grants: ['authorization_code'],
  // allowBearerTokensInQueryString: true, // not needed here
});

export default oathServer;
