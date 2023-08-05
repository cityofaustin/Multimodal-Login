import express from "express";
import common from "../../common/common";

import auth from "../../middleware/auth";

const router = express.Router();

router
  .route("/user/login-info")
  .get(auth.required, async (request, response) => {
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
        const data = await res2.json();
        if (data.isEnabled) {
          res.loginMethods.push("SocialSupportType");
        }
      } catch (err) {
        console.error(err.stack);
      }
      return response.json(res);
    } catch (err) {
      console.error(err.stack);
      return response.status(500).send("Internal Server Error");
    }
  });

export default router;
