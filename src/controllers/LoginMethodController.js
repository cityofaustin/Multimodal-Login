import * as express from 'express';
import auth from "../middleware/auth";

class LoginMethodController {
  path = '/login-methods';
  router = express.Router();

  constructor() {
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.get(this.path, auth.required, this.getLoginMethods);
  }

  getLoginMethods = (request, response) => {
    // TODO:
    return response.json({loginMethods: ['1']});
  }
}

export default LoginMethodController;
