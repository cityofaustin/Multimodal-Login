import express from "express";
import fetch from "node-fetch";
import { getRandomInt } from "../../util/random-util";
import { v4 as uuidv4 } from "uuid";

const router = express.Router();

router.post("/request-social-login-code", async (req, res) => {
  const user = await common.dbClient.findUserByUserName(req.body.username);
  if (user === null || user === undefined) {
    return res.json({ matched: false });
  }
  const providingUser = await common.dbClient.findUserByEmail(
    user.contactEmail
  );

  const loginUuid = uuidv4();

  await common.dbClient.createSocialLogin(
    user._id,
    providingUser._id,
    loginUuid
  );

  const oneTimeCode = getRandomInt(100000, 999999);
  await common.dbClient.addOneTimeCode(user._id, oneTimeCode);

  const url = `${process.env.BACKEND_URI}/send-code/account/${user.username}/${oneTimeCode}/${loginUuid}`;
  const init = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      secret: process.env.AUTH_SECRET,
      sendSms: false,
      sendEmail: false,
    }),
  };
  await fetch(url, init);

  return res.status(200).json({ msg: "success" });
});

// router.get('/provide-social-login-code/:uuid', async (req, res) => {
//   let uuid = req.params.uuid;

//   let socialLogin = await common.dbClient.findSocialLoginByUuid(uuid);

//   const user = await common.dbClient.getUserById(socialLogin.requestingUserId);
//   const oneTimeCode = getRandomInt(100000, 999999);

//   await common.dbClient.addOneTimeCode(
//     socialLogin.requestingUserId,
//     oneTimeCode
//   );

//   const send = require('gmail-send')({
//     user: 'mypass.austinatx@gmail.com',
//     pass: process.env.MYPASS_GMAIL_PASSWORD,
//     to: user.email,
//     subject: `One time login code: ${oneTimeCode}`,
//   });

//   send(
//     {
//       text: `You have 24 hours to login with your one time login code: ${oneTimeCode}`,
//     },
//     (error, result, fullResult) => {
//       if (error) console.error(error);
//       console.log(result);
//     }
//   );

//   res.status(200).json({ msg: 'success' });
// });

export default router;
