import * as express from "express";
import common from "../common/common";
import { getRandomInt } from "../util/random-util";
import { v4 as uuidv4 } from "uuid";

let fetch;
if (!process.env.BROWSER) {
  fetch = require("node-fetch");
} else {
  fetch = window.fetch;
}

class UserController {
  path = "/users";
  router = express.Router();

  constructor() {
    this.initializeRoutes();
    return this.router;
  }

  initializeRoutes() {
    this.router.post(
      this.path + "/login-info",
      this.getLoginInfoByUsernameOrEmail
    );
    this.router.post(this.path + "/send-text-otp", this.sendTextOTP);
    this.router.post(
      this.path + "/send-helper-text-otp",
      this.sendHelperTextOTP
    );
  }

  // client
  getLoginInfoByUsernameOrEmail = async (request, response) => {
    try {
      const usernameOrEmail = request.body.usernameOrEmail;

      let res = await common.dbClient.getLoginInfoByUsernameOrEmail(
        usernameOrEmail
      );

      return response.json(res);
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };

  // server
  sendTextOTP = async (req, res) => {
    try {
      const user = await common.dbClient.findUserByUsernameOrEmail(
        req.body.username
      );
      console.log(req.body.username);
      console.log(user);
      if (user === null || user === undefined) {
        return res.status(500).json({ matched: false });
      }

      const oneTimeCode = getRandomInt(100000, 999999);
      await common.dbClient.addOneTimeCode(user._id, oneTimeCode);

      const loginUuid = uuidv4();
      const url = `${process.env.BACKEND_URI}/send-code/account/${user.username}/${oneTimeCode}/${loginUuid}`;
      const init = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.AUTH_SECRET,
          sendSms: true,
        }),
      };
      await fetch(url, init);
      return res.status(200).json({ msg: "success" });
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };

  sendHelperTextOTP = async (req, res) => {
    try {
      const user = await common.dbClient.findUserByUsernameOrEmail(
        req.body.username
      );
      console.log(" send text to helper ");
      if (user === null || user === undefined) {
        return res.status(500).json({ matched: false });
      }

      const oneTimeCode = getRandomInt(100000, 999999);
      await common.dbClient.addOneTimeCode(user._id, oneTimeCode);

      const loginUuid = uuidv4();
      const url = `${process.env.BACKEND_URI}/send-helper-code/account/${user.username}/${oneTimeCode}/${loginUuid}`;
      const init = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret: process.env.AUTH_SECRET,
          sendSms: true,
        }),
      };
      await fetch(url, init);
      return res.status(200).json({ msg: "success" });
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };
}

export default UserController;
