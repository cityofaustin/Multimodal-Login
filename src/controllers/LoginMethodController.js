import * as express from "express";
import auth from "../middleware/auth";
import common from "../common/common";

let fetch;
if (!process.env.BROWSER) {
  fetch = require("node-fetch");
} else {
  fetch = window.fetch;
}

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
    this.router.delete(
      this.path + "/:loginMethod",
      auth.required,
      this.deleteLoginMethod
    );
  }

  getLoginMethods = async (request, response) => {
    try {
      let username = request.payload.username;
      let res = await common.dbClient.getLoginInfoByUsernameOrEmail(username);
      return response.json({ ...res, username });
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
        securityQuestions: request.body.securityQuestions,
      });
      if (request.body.text) {
        try {
          const url = `${process.env.BACKEND_URI}/accounts/set-phone-number`;
          const init = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              secret: process.env.AUTH_SECRET,
              username,
              phoneNumber: request.body.text,
            }),
          };
          await fetch(url, init);
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      }
      return response.json({ ...res });
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };

  deleteLoginMethod = async (request, response) => {
    try {
      let username = request.payload.username;
      let loginMethod = request.params.loginMethod;
      await common.dbClient.deleteLoginMethod(username, loginMethod);
      return response.status(200).json({ message: "success" });
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };
}

export default LoginMethodController;
