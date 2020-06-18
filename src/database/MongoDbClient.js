import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

import OAuthUser from "./models/OAuthUser";
import OAuthClient from "./models/OAuthClient";
import LoginTypeBase from "./models/LoginTypeBase";
import PasswordLoginType from "./models/PasswordLoginType";
import FaceLoginType from "./models/FaceLoginType";

import crypto from "crypto";

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
      let sally = {
        username: "owner",
        password: "owner",
        faceTemplate: "owner",
      };

      let billy = {
        username: "caseworker",
        password: "caseworker",
        faceTemplate: "caseworker",
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
    user.loginTypes = [];

    if (body.password !== undefined) {
      const passwordLoginType = new PasswordLoginType();

      const saltHash = this.getSecretSaltHash(body.password);
      passwordLoginType.passwordSalt = saltHash.salt;
      passwordLoginType.passwordHash = saltHash.hash;

      await passwordLoginType.save();

      user.loginTypes.push(passwordLoginType);
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

  async getAccountByCredentials(body) {
    let user = await OAuthUser.findOne({
      username: body.username,
    }).populate("loginTypes");

    if (user === null || user === undefined) {
      return undefined;
    }

    let successfulLoginPasswords = 0;

    for (let loginType of user.loginTypes) {
      if (
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
