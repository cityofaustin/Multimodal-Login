import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

import OAuthUser from "./models/OAuthUser";
import OAuthClient from "./models/OAuthClient";
import SocialLogin from "./models/SocialLogin";
import LoginTypeBase from "./models/login-type/LoginTypeBase";
import PasswordLoginType from "./models/login-type/PasswordLoginType";
import FaceLoginType from "./models/login-type/FaceLoginType";
import PalmLoginType from "./models/login-type/PalmLoginType";
import crypto from "crypto";
import Key from "./models/Key";
import TextLoginType from "./models/login-type/TextLoginType";
import SecurityQuestionsLoginType from "./models/login-type/SecurityQuestionsLoginType";
import Web3 from "web3";
import secureKeyStorage from "../common/secureKeyStorage";
import EthCrypto from "eth-crypto";
import SocialSupportType from "./models/login-type/SocialSupportType";

// const secureKeyStorage = require("../common/secureKeyStorage");
// const EthCrypto = require("eth-crypto");
// const common = require("../common/common");

const web3 = new Web3();
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
      };

      await this.createNewOAuthUser(sally, "sally-oauth-123");
    }

    console.log("Oauth Server Ready!");
  }

  // Encrytpion Keys
  async store(guid, key) {
    const keyEntity = new Key();
    keyEntity.uuid = guid;
    keyEntity.encryptedKey = key;
    await keyEntity.save();
    return keyEntity;
  }

  async retrieve(guid) {
    let key = await Key.findOne({
      uuid: guid,
    });
    return key;
  }

  async createNewDID() {
    const account = web3.eth.accounts.create();
    const privKeyWithoutHeader = account.privateKey.substring(2);
    let did = { address: account.address, privateKey: privKeyWithoutHeader };
    return did;
  }

  async createNewOAuthUser(body, uuid = undefined) {
    const user = new OAuthUser();

    if (uuid === undefined) {
      user.oauthId = uuidv4();
    } else {
      user.oauthId = uuid;
    }

    user.username =
      body.username && body.username.length > 0 ? body.username : body.email;
    user.email = body.email;
    user.phoneNumber = body.text;

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
      // NOTE: don't hash template as need original to compare.
      palmLoginType.palmTemplate = body.palmTemplate;
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
      securityQuestionsLoginType.securityQuestions = JSON.parse(
        body.securityQuestions
      ).map((securityQuestion) => {
        const question = securityQuestion.question;
        const saltHash = this.getSecretSaltHash(securityQuestion.answer);
        return {
          question,
          answerSalt: saltHash.salt,
          answerHash: saltHash.hash,
        };
      });
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

    // Everyone gets a socialhelper login method
    const socialSupportType = new SocialSupportType();
    await socialSupportType.save();
    user.loginTypes.push(socialSupportType);

    // Normal User
    if (
      body.publicEncryptionKey === undefined &&
      body.publicAddress === undefined
    ) {
      const privKeyUuid = uuidv4();

      let did = await this.createNewDID();
      did.publicEncryptionKey = EthCrypto.publicKeyByPrivateKey(
        "0x" + did.privateKey
      );
      did.privateKeyGuid = privKeyUuid;

      await secureKeyStorage.store(privKeyUuid, did.privateKey);

      user.didAddress = did.address;
      user.didPublicEncryptionKey = did.publicEncryptionKey;
      user.didPrivateKeyGuid = did.privateKeyGuid;
    } else {
      // BYOK User
      // Doubles as passwordLoginType
      const passwordLoginType = new PasswordLoginType();
      const saltHash = this.getSecretSaltHash(uuidv4());
      passwordLoginType.passwordSalt = saltHash.salt;
      passwordLoginType.passwordHash = saltHash.hash;
      await passwordLoginType.save();
      user.loginTypes.push(passwordLoginType);

      const privKeyUuid = uuidv4();
      await secureKeyStorage.store(privKeyUuid, "userbyok");

      user.didAddress = body.publicAddress;
      user.didPublicEncryptionKey = body.publicEncryptionKey;
      user.didPrivateKeyGuid = privKeyUuid;
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
    if (userName) {
      let user = await OAuthUser.findOne({
        username: userName,
      });
      return user;
    }
    return undefined;
  }

  async findUserByUsernameOrEmail(usernameOrEmail) {
    if (usernameOrEmail) {
      let user = await OAuthUser.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      });
      return user;
    }
    return undefined;
  }

  async deleteLoginMethod(username, loginMethod) {
    const user = await OAuthUser.findOne({ username }).populate("loginTypes");
    if (loginMethod === "SecurityQuestionsLoginType") {
      let securityQuestionsLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "SecurityQuestionsLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "SecurityQuestionsLoginType"
      );
      await user.save();
      if (securityQuestionsLoginType) {
        await SecurityQuestionsLoginType.findOneAndDelete({
          _id: securityQuestionsLoginType._id.toString(),
        });
      }
    }
    if (loginMethod === "PalmLoginType") {
      let palmLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "PalmLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "PalmLoginType"
      );
      await user.save();
      if (palmLoginType) {
        await PalmLoginType.findOneAndDelete({
          _id: palmLoginType._id.toString(),
        });
      }
    }
    if (loginMethod === "PasswordLoginType") {
      let passwordLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "PasswordLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "PasswordLoginType"
      );
      await user.save();
      if (passwordLoginType) {
        await PasswordLoginType.findOneAndDelete({
          _id: passwordLoginType._id.toString(),
        });
      }
    }
    if (loginMethod === "TextLoginType") {
      let textLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "TextLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "TextLoginType"
      );
      await user.save();
      if (textLoginType) {
        await TextLoginType.findOneAndDelete({
          _id: textLoginType._id.toString(),
        });
      }
    }
    // TODO: other login methods
    return user._doc;
  }

  async saveLoginMethod(username, loginMethodParams) {
    const { password, palmTemplate, text, securityQuestions } = {
      ...loginMethodParams,
    };
    const user = await OAuthUser.findOne({ username }).populate("loginTypes");
    if (password) {
      // remove old one if there was one there
      let passwordLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "PasswordLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "PasswordLoginType"
      );
      await user.save();
      if (passwordLoginType) {
        await PasswordLoginType.findOneAndDelete({
          _id: passwordLoginType._id.toString(),
        });
      }
      // create the new one and link it
      passwordLoginType = new PasswordLoginType();
      const saltHash = this.getSecretSaltHash(password);
      passwordLoginType.passwordSalt = saltHash.salt;
      passwordLoginType.passwordHash = saltHash.hash;
      await passwordLoginType.save();
      user.loginTypes.push(passwordLoginType);
    }
    if (text) {
      let textLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "TextLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "TextLoginType"
      );
      await user.save();
      if (textLoginType) {
        await TextLoginType.findOneAndDelete({
          _id: textLoginType._id.toString(),
        });
      }
      textLoginType = new TextLoginType();
      textLoginType.phoneNumber = text;
      await textLoginType.save();
      user.loginTypes.push(textLoginType);
    }
    if (palmTemplate) {
      let palmLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "PalmLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "PalmLoginType"
      );
      await user.save();
      if (palmLoginType) {
        await PalmLoginType.findOneAndDelete({
          _id: palmLoginType._id.toString(),
        });
      }
      palmLoginType = new PalmLoginType();
      // NOTE: don't hash template as need original to compare.
      palmLoginType.palmTemplate = palmTemplate;
      await palmLoginType.save();
      user.loginTypes.push(palmLoginType);
    }
    if (securityQuestions) {
      let securityQuestionsLoginType = user.loginTypes.find(
        (lt) => lt.itemtype === "SecurityQuestionsLoginType"
      );
      user.loginTypes = user.loginTypes.filter(
        (lt) => lt.itemtype !== "SecurityQuestionsLoginType"
      );
      await user.save();
      if (securityQuestionsLoginType) {
        await SecurityQuestionsLoginType.findOneAndDelete({
          _id: securityQuestionsLoginType._id.toString(),
        });
      }
      securityQuestionsLoginType = new SecurityQuestionsLoginType();
      securityQuestionsLoginType.securityQuestions = JSON.parse(
        securityQuestions
      ).map((securityQuestion) => {
        const question = securityQuestion.question;
        const saltHash = this.getSecretSaltHash(securityQuestion.answer);
        return {
          question,
          answerSalt: saltHash.salt,
          answerHash: saltHash.hash,
        };
      });
      await securityQuestionsLoginType.save();
      user.loginTypes.push(securityQuestionsLoginType);
    }
    await user.save();
    return user._doc;
  }

  async getLoginInfoByUsernameOrEmail(usernameOrEmail) {
    let loginInfo = {};
    let loginMethods;
    let securityQuestions;
    if (usernameOrEmail) {
      let user = await OAuthUser.findOne({
        $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }],
      }).populate("loginTypes");
      if (user) {
        loginMethods = user.loginTypes.map((loginType) => loginType.itemtype);
        const securityQuestionLoginType = user.loginTypes.find(
          (loginType) => loginType.itemtype === "SecurityQuestionsLoginType"
        );

        if (securityQuestionLoginType !== undefined) {
          securityQuestions = securityQuestionLoginType.securityQuestions.map(
            (securityQuestion) => securityQuestion.question
          );

          loginInfo.securityQuestions = securityQuestions;
        }
        loginInfo.loginMethods = loginMethods;
      }
    }
    return loginInfo;
  }

  async saveUser(user) {
    await user.save();
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

      // BYOK
      if (
        body.publicAddress &&
        body.signature &&
        loginType.itemtype === "PasswordLoginType" &&
        this.validByok(body.publicAddress, body.signature, user.didAddress)
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

      if (body.palmTemplate && loginType.itemtype === "PalmLoginType") {
        const newtemplateList = body.palmTemplate.split(",");
        // console.log(newtemplateList);
        const newTemplate = [];
        const newPointTemplate = [];
        // for (let i = 0; i < 128 * 128;) {
        //   const row = [];
        //   for (; i < 128; i++) {
        //     row.push(newtemplateList[i]);
        //   }
        //   newTemplate.push(row);
        // }
        // for(let i=0; i<128; i++){
        //   for(let j=0; j<128; j++){
        //     if(newTemplate[i][j] === '1') {
        //       newPointTemplate.push([i,j]);
        //     }
        //   }
        // }
        let min = 2147483647.0; // max int
        let min_id = 0;
        let matchedIndex = -1;
        let sum = 0;
        // TODO:
        // Calculate Chamfer distance
        // for (let i = 0; i < storedFeatures.length; i++) {
        //   sum = 0;
        // array of points for this particular template
        // let temp = storedFeatures[i].featureData;
        // if (temp.length != 0) {
        //     for (let j = 0; j < temp.length; ++j) {
        //       // [0] is x and [1] is y
        //       sum += distanceTransImg.ucharPtr(temp[j][0], temp[j][1])[0];
        //     }
        //     sum = sum / (temp.length * 255);
        //     if (sum < min) {
        //       min = sum;
        //       min_id = storedFeatures[i].userId;
        //       matchedIndex = i;
        //     }
        //   }
        // }
        // successfulLoginPasswords++;
      }

      if (
        body.securityQuestions &&
        loginType.itemtype === "SecurityQuestionsLoginType"
      ) {
        const securityQuestions = JSON.parse(body.securityQuestions);
        let isValid = true;
        for (const securityQuestion of securityQuestions) {
          const match = loginType.securityQuestions.find(
            (securityQuestionItem) =>
              securityQuestionItem.question === securityQuestion.question
          );
          const isAnswerValid = this.validSecret(
            securityQuestion.answer,
            match.answerSalt,
            match.answerHash
          );
          if (!isAnswerValid) {
            isValid = false;
          }
        }
        successfulLoginPasswords = isValid
          ? successfulLoginPasswords + 1
          : successfulLoginPasswords;
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

  validByok = function (publicAddress, signature, userPublicAddress) {
    const signer = EthCrypto.recover(
      signature,
      EthCrypto.hash.keccak256(publicAddress) // signed message hash
    );

    if (
      signer !== undefined &&
      signer.toLowerCase() === userPublicAddress.toLowerCase()
    ) {
      return true;
    } else {
      return false;
    }
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
