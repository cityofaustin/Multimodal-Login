import express from "express";
import axios from "axios";

import common from "../../common/common";
import { getRandomInt } from "../../util/random-util";
import { v4 as uuidv4 } from "uuid";
import auth from "../../middleware/auth";

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
    this.router.delete("/my-account", auth.required, this.deleteMyAccount);
  }

  // client
  getLoginInfoByUsernameOrEmail = async (request, response) => {
    try {
      const usernameOrEmail = request.body.usernameOrEmail;
      let res = await common.dbClient.getLoginInfoByUsernameOrEmail(
        usernameOrEmail
      );
      if (!res.loginMethods) {
        response.json(res);
        return;
      }
      // Don't show social support option if the owner has none enabled.
      res.loginMethods = res.loginMethods.filter(
        (lm) => lm !== "SocialSupportType"
      );
      try {
        const user = await common.dbClient.findUserByUsernameOrEmail(
          usernameOrEmail
        );
        const url = `${process.env.BACKEND_URI}/social-support/enabled`;
        const init = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          data: {
            secret: process.env.AUTH_SECRET,
            username: user.username,
          },
        };
        let res2 = await axios({ url, ...init });
        const data = await res2.data;
        if (data.isEnabled) {
          res.loginMethods.push("SocialSupportType");
        }
      } catch (err) {
        console.error(err.stack);
      }
      return response.json(res);
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };
  deleteMyAccount = async (request, response) => {
    try {
      let username = request.payload.username;
      let res = await common.dbClient.deleteOAuthUser(username);
      return response.json({ ...res, username });
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
        body: {
          secret: process.env.AUTH_SECRET,
          sendSms: true,
        },
      };
      await axios({ url, ...init });
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
        body: {
          secret: process.env.AUTH_SECRET,
          sendSms: true,
        },
      };
      await axios({ url, ...init });
      return res.status(200).json({ msg: "success" });
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Something broke!");
    }
  };
}

export default UserController;
