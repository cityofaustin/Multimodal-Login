"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const OAuthUser = require("./models/OAuthUser");

let mongoDbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
};

class MongoDbClient {
  constructor() {
    this.mongoURI = process.env.MONGODB_URI;

    _mongoose.default.connect(this.mongoURI, mongoDbOptions).then(() => {// Populate default values
    });
  }

  async createNewOAuthUser(body) {
    const user = new OAuthUser();
    user.uuid = (0, _uuid.v4)();
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

  async getAccountByCredentials(usernames, passwords) {
    const findObj = {};

    for (let i = 0; i < usernames.length; i++) {
      findObj["userName" + (i + 1)] = usernames[i];
      findObj["password" + (i + 1)] = passwords[i];
    }

    console.log("find obj");
    console.log(findObj);
    let accountMatched = await OAuthUser.findOne({
      userNames: {
        $all: usernames
      },
      passwords: {
        $all: passwords
      }
    });
    console.log(accountMatched); // var hash = crypto
    //   .pbkdf2Sync(password, accountMatched.salt, 10000, 512, "sha512")
    //   .toString("hex");
    // const validPassword = accountMatched.hash === hash;
    // if (accountMatched && password === accountMatched.password) {
    //   return accountMatched;
    // } else {
    //   return undefined;
    // }

    return accountMatched;
  }

}

module.exports = MongoDbClient;