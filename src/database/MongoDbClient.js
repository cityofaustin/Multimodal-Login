import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

import OAuthUser from "./models/OAuthUser";
import OAuthClient from "./models/OAuthClient";
import SocialLogin from "./models/SocialLogin";
// import LoginTypeBase from './models/login-type/LoginTypeBase';
import PasswordLoginType from "./models/login-type/PasswordLoginType";
import FaceLoginType from "./models/login-type/FaceLoginType";
import PalmLoginType from "./models/login-type/PalmLoginType";
import crypto from "crypto";
import TextLoginType from "./models/login-type/TextLoginType";
import SecurityQuestionsLoginType from "./models/login-type/SecurityQuestionsLoginType";

const REQUIRED_PASSWORDS = 1;

let mongoDbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
};

class MongoDbClient {
  constructor() {
    this.mongoURI = process.env.MONGODB_URI;

    mongoose.connect(this.mongoURI, mongoDbOptions).then(() => {
      this.populateDefaultValues();
    });
  }

  async populateDefaultValues() {
    let clients = await OAuthClient.find({});

    if (clients.length === 0) {
      let mypassClient = new OAuthClient();
      let grants = [];
      grants.push("authorization_code");
      mypassClient.clientId = process.env.CLIENT_ID;
      mypassClient.redirectUris = process.env.REDIRECT_URI;
      mypassClient.grants = grants;

      await mypassClient.save();
    }

    let users = await OAuthUser.find({});
    if (users.length === 0) {
      const ownerEmail = "wiyase1364@royandk.com";
      const caseWorkerEmail = "joxef68600@tmail15.com";

      let sally = {
        username: "owner",
        password: "owner",
        faceTemplate: "owner",
        email: ownerEmail,
        contactEmail: caseWorkerEmail,
        phoneNumber: "5555555555",
      };

      let billy = {
        username: "caseworker",
        password: "caseworker",
        faceTemplate: "caseworker",
        email: caseWorkerEmail,
      };

      await this.createNewOAuthUser(sally, "sally-oauth-123");
      await this.createNewOAuthUser(billy, "billy-oauth-123");
    }

    console.log("Oauth Server Ready!");
  }

  async createNewOAuthUser(body, uuid = undefined) {
    const user = new OAuthUser();

    if (uuid === undefined) {
      user.oauthId = uuidv4();
    } else {
      user.oauthId = uuid;
    }

    user.username = body.username;
    user.email = body.email;
    // user.contactEmail = body.contactEmail;
    // user.phoneNumber = body.phoneNumber;

    user.loginTypes = [];

    if (body.password !== undefined) {
      const passwordLoginType = new PasswordLoginType();
      const saltHash = this.getSecretSaltHash(body.password);
      passwordLoginType.passwordSalt = saltHash.salt;
      passwordLoginType.passwordHash = saltHash.hash;
      await passwordLoginType.save();
      user.loginTypes.push(passwordLoginType);
    }

    if (body.palmTemplate !== undefined) {
      const palmLoginType = new PalmLoginType();
      const saltHash = this.getSecretSaltHash(body.palmTemplate);
      palmLoginType.palmGuidSalt = saltHash.salt;
      palmLoginType.palmGuidHash = saltHash.hash;
      await palmLoginType.save();
      user.loginTypes.push(palmLoginType);
    }

    if (body.text !== undefined) {
      const textLoginType = new TextLoginType();
      textLoginType.phoneNumber = body.text;
      await textLoginType.save();
      user.loginTypes.push(textLoginType);
    }

    if (body.securityQuestions !== undefined) {
      const securityQuestionsLoginType = new SecurityQuestionsLoginType();
      securityQuestionsLoginType.securityQuestions = JSON.parse(body.securityQuestions).map(
        (securityQuestion) => {
          const question = securityQuestion.question;
          const saltHash = this.getSecretSaltHash(securityQuestion.answer);
          return {
            question,
            answerSalt: saltHash.salt,
            answerHash: saltHash.hash,
          };
        }
      );
      // console.log(securityQuestionsLoginType.securityQuestions);
      await securityQuestionsLoginType.save();
      user.loginTypes.push(securityQuestionsLoginType);
    }

    if (body.faceTemplate !== undefined) {
      const faceLoginType = new FaceLoginType();
      const saltHash = this.getSecretSaltHash(body.faceTemplate);
      faceLoginType.faceGuidSalt = saltHash.salt;
      faceLoginType.faceGuidHash = saltHash.hash;
      await faceLoginType.save();
      user.loginTypes.push(faceLoginType);
    }

    await user.save();

    return user;
  }

  async createSocialLogin(requestingUserId, providingUserId, uuid) {
    const socialLogin = new SocialLogin();
    socialLogin.uuid = uuid;
    socialLogin.requestingUserId = requestingUserId;
    socialLogin.providingUserId = providingUserId;
    socialLogin.timestamp = new Date();

    await socialLogin.save();
  }

  async findSocialLoginByUuid(uuid) {
    let socialLogin = await SocialLogin.findOne({
      uuid: uuid,
    });

    return socialLogin;
  }

  async getUserById(id) {
    const user = await OAuthUser.findById(id);
    return user;
  }

  async addOneTimeCode(userId, oneTimeCode) {
    const user = await OAuthUser.findById(userId);
    user.oneTimeCode = oneTimeCode;
    user.oneTimeCodeIssueDate = new Date();
    await user.save();
  }

  async getAllAuthAccounts() {
    const authUsers = await OAuthUser.find({});
    return authUsers;
  }

  async findUserByUserName(userName) {
    let user = await OAuthUser.findOne({
      username: userName,
    });
    return user;
  }

  async saveUser(user) {
    await user.save();
    return user;
  }

  async findUserByUserName(userName) {
    let user = await OAuthUser.findOne({
      username: userName,
    });

    return user;
  }

  async findUserByEmail(email) {
    let user = await OAuthUser.findOne({
      email: email,
    });

    return user;
  }

  // If they are authorized to login
  async getAccountByCredentials(body) {
    let user = null;
    if (body.username && body.username.length > 0) {
      user = await OAuthUser.findOne({
        username: body.username,
      }).populate("loginTypes");
    }
    if (body.email && body.email.length > 0) {
      user = await OAuthUser.findOne({
        email: body.email,
      }).populate("loginTypes");
    }

    if (user === null || user === undefined) {
      return undefined;
    }

    let successfulLoginPasswords = 0;

    if (
      user.oneTimeCode !== undefined &&
      "" + body.oneTimeCode === "" + user.oneTimeCode
    ) {
      user.oneTimeCode = undefined;
      await user.save();

      // TODO: Add timestamp checking
      // let now = new Date();
      // let OneDayInSeconds = 86400;

      // if (
      //   now.getTime() - oneTimeCodeIssueDate.timestamp.getTime() >
      //   OneDayInSeconds
      // ) {
      //   console.log("Expired One Time Code");
      // } else {
      //   successfulLoginPasswords++;
      // }
      successfulLoginPasswords++;
    }

    for (let loginType of user.loginTypes) {
      if (
        body.password &&
        loginType.itemtype === "PasswordLoginType" &&
        this.validSecret(
          body.password,
          loginType.passwordSalt,
          loginType.passwordHash
        )
      ) {
        successfulLoginPasswords++;
      }

      if (
        body.faceTemplate &&
        loginType.itemtype === "FaceLoginType" &&
        this.validSecret(
          body.faceTemplate,
          loginType.faceGuidSalt,
          loginType.faceGuidHash
        )
      ) {
        successfulLoginPasswords++;
      }
    }

    if (successfulLoginPasswords >= REQUIRED_PASSWORDS) {
      return user;
    } else {
      return undefined;
    }
  }

  // Helpers
  validSecret = function (password, secretSalt, secretHash) {
    if (
      password === undefined ||
      secretHash === undefined ||
      secretSalt === undefined
    ) {
      return false;
    }

    var hash = crypto
      .pbkdf2Sync(password, secretSalt, 10000, 512, "sha512")
      .toString("hex");
    return secretHash === hash;
  };

  getSecretSaltHash = function (password) {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto
      .pbkdf2Sync(password, salt, 10000, 512, "sha512")
      .toString("hex");

    return { salt: salt, hash: hash };
  };
}

module.exports = MongoDbClient;
