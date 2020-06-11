import mongoose from "mongoose";
import { v4 as uuidv4 } from "uuid";

import OAuthUser from "./models/OAuthUser";
import OAuthClient from "./models/OAuthClient";

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
        userName1: "owner1",
        password1: "owner1",
        userName2: "owner2",
        password2: "owner2",
        userName3: "owner3",
        password3: "owner3",
      };

      let billy = {
        userName1: "caseworker1",
        password1: "caseworker1",
        userName2: "caseworker1",
        password2: "caseworker1",
        userName3: "caseworker1",
        password3: "caseworker1",
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

    user.usernames = [];
    user.passwords = [];

    user.userNames.push(body.userName1);
    user.passwords.push(body.password1);

    user.userNames.push(body.userName2);
    user.passwords.push(body.password2);

    user.userNames.push(body.userName3);
    user.passwords.push(body.password3);

    await user.save();
    return user;
  }

  async getAllAuthAccounts() {
    const authUsers = await OAuthUser.find({});
    return authUsers;
  }

  async findUserByUserName(userName) {
    let user = await OAuthUser.findOne({
      userNames: { $in: userName }
    })

    return user;
  }

  async getAccountByCredentials(usernames, passwords) {
    let neededMatches = 1;
    let authMatches = 0;
    let authorized = false;
    let accountMatched;
    let counter = 0;
    for (let i = 0; i < usernames.length; i++) {
      counter = i;

      accountMatched = await OAuthUser.findOne({
        userNames: usernames[i],
      });

      if (accountMatched && accountMatched.passwords[i] === passwords[i]) {
        authMatches++;
        if (authMatches === neededMatches) {
          authorized = true;
          break;
        }
      }
    }

    // console.log(accountMatched);
    // var hash = crypto
    //   .pbkdf2Sync(password, accountMatched.salt, 10000, 512, "sha512")
    //   .toString("hex");
    // const validPassword = accountMatched.hash === hash;

    // if (accountMatched && password === accountMatched.password) {
    //   return accountMatched;
    // } else {
    //   return undefined;
    // }

    // let testAccounts = await OAuthUser.find({});

    // console.log(testAccounts[0]);
    // return testAccounts[0];

    if (authorized) {
      return accountMatched;
    } else {
      return undefined;
    }
  }
}

module.exports = MongoDbClient;
