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
      mypassClient.clientId = "t1L0EvTYT-H_xU3oNaR0BBYc";
      mypassClient.redirectUris = "http://localhost:3001";
      mypassClient.grants = grants;

      await mypassClient.save();
    }
  }

  async createNewOAuthUser(body) {
    const user = new OAuthUser();
    user.uuid = uuidv4();

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
    const findObj = {};
    for (let i = 0; i < usernames.length; i++) {
      findObj["userName" + (i + 1)] = usernames[i];
      findObj["password" + (i + 1)] = passwords[i];
    }

    // console.log("find obj");
    // console.log(findObj);

    let accountMatched = await OAuthUser.findOne({
      userNames: { $all: usernames },
      passwords: { $all: passwords },
    });

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

    let testAccounts = await OAuthUser.find({});

    console.log(testAccounts[0]);
    return testAccounts[0];

    //return accountMatched;
  }
}

module.exports = MongoDbClient;
