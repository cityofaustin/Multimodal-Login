import * as express from "express";
import auth from "../middleware/auth";
import common from "../common/common";

class LoginMethodController {
  path = "/login-methods";
  router = express.Router();

  constructor() {
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.get(this.path, auth.required, this.getLoginMethods);
    this.router.put(this.path, auth.required, this.saveLoginMethod);
    this.router.post(this.path, auth.required, this.saveLoginMethod);
    this.router.delete(this.path, auth.required, this.deleteLoginMethod);
  }

  getLoginMethods = async (request, response) => {
    try {
      let username = request.payload.username;
      let res = await common.dbClient.getLoginInfoByUsernameOrEmail(
        username
      );
      return response.json({...res, username });
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };

  saveLoginMethod = async (request, response) => {
    try {
      let username = request.payload.username;
      let res = await common.dbClient.saveLoginMethod(username, {
        password: request.body.password,
        palmTemplate: request.body.palmTemplate,
        text: request.body.text,
        securityQuestions: request.body.securityQuestions
      });
      return response.json({...res});
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  }

  deleteLoginMethod = async (request, response) => {
    try {
      // TODO:
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  }
}

export default LoginMethodController;
