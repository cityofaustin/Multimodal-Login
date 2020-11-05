"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _mongoose = _interopRequireDefault(require("mongoose"));
var _uuid = require("uuid");

var _OAuthUser = _interopRequireDefault(require("./models/OAuthUser"));
var _OAuthClient = _interopRequireDefault(require("./models/OAuthClient"));
var _SocialLogin = _interopRequireDefault(require("./models/SocialLogin"));
var _LoginTypeBase = _interopRequireDefault(require("./models/login-type/LoginTypeBase"));
var _PasswordLoginType = _interopRequireDefault(require("./models/login-type/PasswordLoginType"));
var _FaceLoginType = _interopRequireDefault(require("./models/login-type/FaceLoginType"));
var _PalmLoginType = _interopRequireDefault(require("./models/login-type/PalmLoginType"));
var _crypto = _interopRequireDefault(require("crypto"));
var _Key = _interopRequireDefault(require("./models/Key"));
var _TextLoginType = _interopRequireDefault(require("./models/login-type/TextLoginType"));
var _SecurityQuestionsLoginType = _interopRequireDefault(require("./models/login-type/SecurityQuestionsLoginType"));
var _web = _interopRequireDefault(require("web3"));
var _secureKeyStorage = _interopRequireDefault(require("../common/secureKeyStorage"));
var _ethCrypto = _interopRequireDefault(require("eth-crypto"));
var _SocialSupportType = _interopRequireDefault(require("./models/login-type/SocialSupportType"));

// const secureKeyStorage = require("../common/secureKeyStorage");
// const EthCrypto = require("eth-crypto");
// const common = require("../common/common");

const web3 = new _web.default();
const REQUIRED_PASSWORDS = 1;

let mongoDbOptions = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true };


class MongoDbClient {
  constructor() {(0, _defineProperty2.default)(this, "validSecret",













































































































































































































































































































































































































































































































































































































    function (password, secretSalt, secretHash) {
      if (
      password === undefined ||
      secretHash === undefined ||
      secretSalt === undefined)
      {
        return false;
      }

      var hash = _crypto.default.
      pbkdf2Sync(password, secretSalt, 10000, 512, "sha512").
      toString("hex");
      return secretHash === hash;
    });(0, _defineProperty2.default)(this, "validByok",

    function (publicAddress, signature, userPublicAddress) {
      const signer = _ethCrypto.default.recover(
      signature,
      _ethCrypto.default.hash.keccak256(publicAddress) // signed message hash
      );

      if (
      signer !== undefined &&
      signer.toLowerCase() === userPublicAddress.toLowerCase())
      {
        return true;
      } else {
        return false;
      }
    });(0, _defineProperty2.default)(this, "getSecretSaltHash",

    function (password) {
      const salt = _crypto.default.randomBytes(16).toString("hex");
      const hash = _crypto.default.
      pbkdf2Sync(password, salt, 10000, 512, "sha512").
      toString("hex");

      return { salt: salt, hash: hash };
    });this.mongoURI = process.env.MONGODB_URI;_mongoose.default.connect(this.mongoURI, mongoDbOptions).then(() => {this.populateDefaultValues();});}populateDefaultValues() {var _this = this;return (0, _asyncToGenerator2.default)(function* () {let clients = yield _OAuthClient.default.find({});if (clients.length === 0) {let mypassClient = new _OAuthClient.default();let grants = [];grants.push("authorization_code");mypassClient.clientId = process.env.CLIENT_ID;mypassClient.redirectUris = process.env.REDIRECT_URI;mypassClient.grants = grants;yield mypassClient.save();}let users = yield _OAuthUser.default.find({});if (users.length === 0) {let sally = { username: "owner", password: "owner" };yield _this.createNewOAuthUser(sally, "sally-oauth-123");}console.log("Oauth Server Ready!");})();} // Encrytpion Keys
  store(guid, key) {return (0, _asyncToGenerator2.default)(function* () {const keyEntity = new _Key.default();keyEntity.uuid = guid;keyEntity.encryptedKey = key;yield keyEntity.save();return keyEntity;})();}retrieve(guid) {return (0, _asyncToGenerator2.default)(function* () {let key = yield _Key.default.findOne({ uuid: guid });return key;})();}createNewDID() {return (0, _asyncToGenerator2.default)(function* () {const account = web3.eth.accounts.create();const privKeyWithoutHeader = account.privateKey.substring(2);let did = { address: account.address, privateKey: privKeyWithoutHeader };return did;})();}deleteOAuthUser(username) {return (0, _asyncToGenerator2.default)(function* () {const user = yield _OAuthUser.default.findOne({ username });for (const loginType of user.loginTypes) {yield _LoginTypeBase.default.findOneAndDelete({ _id: loginType.toString() });}yield _OAuthUser.default.findOneAndDelete({ username });})();}createNewOAuthUser(body, uuid = undefined) {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {const user = new _OAuthUser.default();if (uuid === undefined) {user.oauthId = (0, _uuid.v4)();} else {user.oauthId = uuid;}user.username = body.username && body.username.length > 0 ? body.username : body.email;user.email = body.email;user.phoneNumber = body.text;user.loginTypes = [];if (body.password !== undefined) {const passwordLoginType = new _PasswordLoginType.default();const saltHash = _this2.getSecretSaltHash(body.password);passwordLoginType.passwordSalt = saltHash.salt;passwordLoginType.passwordHash = saltHash.hash;yield passwordLoginType.save();user.loginTypes.push(passwordLoginType);}if (body.palmTemplate !== undefined) {const palmLoginType = new _PalmLoginType.default(); // NOTE: don't hash template as need original to compare.
        palmLoginType.palmTemplate = body.palmTemplate;yield palmLoginType.save();user.loginTypes.push(palmLoginType);}if (body.text !== undefined) {const textLoginType = new _TextLoginType.default();textLoginType.phoneNumber = body.text;yield textLoginType.save();user.loginTypes.push(textLoginType);}if (body.securityQuestions !== undefined) {const securityQuestionsLoginType = new _SecurityQuestionsLoginType.default();securityQuestionsLoginType.securityQuestions = JSON.parse(body.securityQuestions).map(securityQuestion => {const question = securityQuestion.question;const saltHash = _this2.getSecretSaltHash(securityQuestion.answer);return { question, answerSalt: saltHash.salt, answerHash: saltHash.hash };});yield securityQuestionsLoginType.save();user.loginTypes.push(securityQuestionsLoginType);}if (body.faceTemplate !== undefined) {const faceLoginType = new _FaceLoginType.default();const saltHash = _this2.getSecretSaltHash(body.faceTemplate);faceLoginType.faceGuidSalt = saltHash.salt;faceLoginType.faceGuidHash = saltHash.hash;yield faceLoginType.save();user.loginTypes.push(faceLoginType);} // Everyone gets a socialhelper login method
      const socialSupportType = new _SocialSupportType.default();yield socialSupportType.save();user.loginTypes.push(socialSupportType); // Normal User
      if (body.publicEncryptionKey === undefined && body.publicAddress === undefined) {const privKeyUuid = (0, _uuid.v4)();let did = yield _this2.createNewDID();did.publicEncryptionKey = _ethCrypto.default.publicKeyByPrivateKey("0x" + did.privateKey);did.privateKeyGuid = privKeyUuid;yield _secureKeyStorage.default.store(privKeyUuid, did.privateKey);user.didAddress = did.address;user.didPublicEncryptionKey = did.publicEncryptionKey;user.didPrivateKeyGuid = did.privateKeyGuid;} else {// BYOK User
        // Doubles as passwordLoginType
        const passwordLoginType = new _PasswordLoginType.default();const saltHash = _this2.getSecretSaltHash((0, _uuid.v4)());passwordLoginType.passwordSalt = saltHash.salt;passwordLoginType.passwordHash = saltHash.hash;yield passwordLoginType.save();user.loginTypes.push(passwordLoginType);const privKeyUuid = (0, _uuid.v4)();yield _secureKeyStorage.default.store(privKeyUuid, "userbyok");user.didAddress = body.publicAddress;user.didPublicEncryptionKey = body.publicEncryptionKey;user.didPrivateKeyGuid = privKeyUuid;}yield user.save();return user;})();}createSocialLogin(requestingUserId, providingUserId, uuid) {return (0, _asyncToGenerator2.default)(function* () {const socialLogin = new _SocialLogin.default();socialLogin.uuid = uuid;socialLogin.requestingUserId = requestingUserId;socialLogin.providingUserId = providingUserId;socialLogin.timestamp = new Date();yield socialLogin.save();})();}findSocialLoginByUuid(uuid) {return (0, _asyncToGenerator2.default)(function* () {let socialLogin = yield _SocialLogin.default.findOne({ uuid: uuid });return socialLogin;})();}getUserById(id) {return (0, _asyncToGenerator2.default)(function* () {const user = yield _OAuthUser.default.findById(id);return user;})();}addOneTimeCode(userId, oneTimeCode) {return (0, _asyncToGenerator2.default)(function* () {const user = yield _OAuthUser.default.findById(userId);user.oneTimeCode = oneTimeCode;user.oneTimeCodeIssueDate = new Date();yield user.save();})();}getAllAuthAccounts() {return (0, _asyncToGenerator2.default)(function* () {const authUsers = yield _OAuthUser.default.find({});return authUsers;})();}findUserByUserName(userName) {return (0, _asyncToGenerator2.default)(function* () {if (userName) {let user = yield _OAuthUser.default.findOne({ username: userName });return user;}return undefined;})();}findUserByUsernameOrEmail(usernameOrEmail) {return (0, _asyncToGenerator2.default)(function* () {if (usernameOrEmail) {let user = yield _OAuthUser.default.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] });return user;}return undefined;})();}deleteLoginMethod(username, loginMethod) {return (0, _asyncToGenerator2.default)(function* () {const user = yield _OAuthUser.default.findOne({ username }).populate("loginTypes");if (loginMethod === "SecurityQuestionsLoginType") {let securityQuestionsLoginType = user.loginTypes.find(lt => lt.itemtype === "SecurityQuestionsLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "SecurityQuestionsLoginType");yield user.save();if (securityQuestionsLoginType) {yield _SecurityQuestionsLoginType.default.findOneAndDelete({ _id: securityQuestionsLoginType._id.toString() });}}if (loginMethod === "PalmLoginType") {let palmLoginType = user.loginTypes.find(lt => lt.itemtype === "PalmLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "PalmLoginType");yield user.save();if (palmLoginType) {yield _PalmLoginType.default.findOneAndDelete({ _id: palmLoginType._id.toString() });}}if (loginMethod === "PasswordLoginType") {let passwordLoginType = user.loginTypes.find(lt => lt.itemtype === "PasswordLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "PasswordLoginType");yield user.save();if (passwordLoginType) {yield _PasswordLoginType.default.findOneAndDelete({ _id: passwordLoginType._id.toString() });}}if (loginMethod === "TextLoginType") {let textLoginType = user.loginTypes.find(lt => lt.itemtype === "TextLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "TextLoginType");yield user.save();if (textLoginType) {yield _TextLoginType.default.findOneAndDelete({ _id: textLoginType._id.toString() });}} // TODO: other login methods
      return user._doc;})();}saveLoginMethod(username, loginMethodParams) {var _this3 = this;return (0, _asyncToGenerator2.default)(function* () {const { password, palmTemplate, text, securityQuestions } = { ...loginMethodParams };const user = yield _OAuthUser.default.findOne({ username }).populate("loginTypes");if (password) {// remove old one if there was one there
        let passwordLoginType = user.loginTypes.find(lt => lt.itemtype === "PasswordLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "PasswordLoginType");yield user.save();if (passwordLoginType) {yield _PasswordLoginType.default.findOneAndDelete({ _id: passwordLoginType._id.toString() });} // create the new one and link it
        passwordLoginType = new _PasswordLoginType.default();const saltHash = _this3.getSecretSaltHash(password);passwordLoginType.passwordSalt = saltHash.salt;passwordLoginType.passwordHash = saltHash.hash;yield passwordLoginType.save();user.loginTypes.push(passwordLoginType);}if (text) {let textLoginType = user.loginTypes.find(lt => lt.itemtype === "TextLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "TextLoginType");yield user.save();if (textLoginType) {yield _TextLoginType.default.findOneAndDelete({ _id: textLoginType._id.toString() });}textLoginType = new _TextLoginType.default();textLoginType.phoneNumber = text;yield textLoginType.save();user.loginTypes.push(textLoginType);}if (palmTemplate) {let palmLoginType = user.loginTypes.find(lt => lt.itemtype === "PalmLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "PalmLoginType");yield user.save();if (palmLoginType) {yield _PalmLoginType.default.findOneAndDelete({ _id: palmLoginType._id.toString() });}palmLoginType = new _PalmLoginType.default(); // NOTE: don't hash template as need original to compare.
        palmLoginType.palmTemplate = palmTemplate;yield palmLoginType.save();user.loginTypes.push(palmLoginType);}if (securityQuestions) {let securityQuestionsLoginType = user.loginTypes.find(lt => lt.itemtype === "SecurityQuestionsLoginType");user.loginTypes = user.loginTypes.filter(lt => lt.itemtype !== "SecurityQuestionsLoginType");yield user.save();if (securityQuestionsLoginType) {yield _SecurityQuestionsLoginType.default.findOneAndDelete({ _id: securityQuestionsLoginType._id.toString() });}securityQuestionsLoginType = new _SecurityQuestionsLoginType.default();securityQuestionsLoginType.securityQuestions = JSON.parse(securityQuestions).map(securityQuestion => {const question = securityQuestion.question;const saltHash = _this3.getSecretSaltHash(securityQuestion.answer);return { question, answerSalt: saltHash.salt, answerHash: saltHash.hash };});yield securityQuestionsLoginType.save();user.loginTypes.push(securityQuestionsLoginType);}yield user.save();return user._doc;})();}getLoginInfoByUsernameOrEmail(usernameOrEmail) {return (0, _asyncToGenerator2.default)(function* () {let loginInfo = {};let loginMethods;let securityQuestions;if (usernameOrEmail) {let user = yield _OAuthUser.default.findOne({ $or: [{ username: usernameOrEmail }, { email: usernameOrEmail }] }).populate("loginTypes");if (user) {loginMethods = user.loginTypes.map(loginType => loginType.itemtype);const securityQuestionLoginType = user.loginTypes.find(loginType => loginType.itemtype === "SecurityQuestionsLoginType");if (securityQuestionLoginType !== undefined) {securityQuestions = securityQuestionLoginType.securityQuestions.map(securityQuestion => securityQuestion.question);loginInfo.securityQuestions = securityQuestions;}loginInfo.loginMethods = loginMethods;}}return loginInfo;})();}saveUser(user) {return (0, _asyncToGenerator2.default)(function* () {yield user.save();return user;})();}findUserByEmail(email) {return (0, _asyncToGenerator2.default)(function* () {let user = yield _OAuthUser.default.findOne({ email: email });return user;})();} // If they are authorized to login
  getAccountByCredentials(body) {var _this4 = this;return (0, _asyncToGenerator2.default)(function* () {let user = null;if (body.username && body.username.length > 0) {user = yield _OAuthUser.default.findOne({ username: body.username }).populate("loginTypes");}if (body.email && body.email.length > 0) {user = yield _OAuthUser.default.findOne({ email: body.email }).populate("loginTypes");}if (user === null || user === undefined) {return undefined;}let successfulLoginPasswords = 0;if (user.oneTimeCode !== undefined && "" + body.oneTimeCode === "" + user.oneTimeCode) {user.oneTimeCode = undefined;yield user.save(); // TODO: Add timestamp checking
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
        successfulLoginPasswords++;}for (let loginType of user.loginTypes) {if (body.password && loginType.itemtype === "PasswordLoginType" && _this4.validSecret(body.password, loginType.passwordSalt, loginType.passwordHash)) {successfulLoginPasswords++;} // BYOK
        if (body.publicAddress && body.signature && loginType.itemtype === "PasswordLoginType" && _this4.validByok(body.publicAddress, body.signature, user.didAddress)) {successfulLoginPasswords++;}if (body.faceTemplate && loginType.itemtype === "FaceLoginType" && _this4.validSecret(body.faceTemplate, loginType.faceGuidSalt, loginType.faceGuidHash)) {successfulLoginPasswords++;}if (body.palmTemplate && loginType.itemtype === "PalmLoginType") {const newtemplateList = body.palmTemplate.split(","); // console.log(newtemplateList);
          const newTemplate = [];const newPointTemplate = []; // for (let i = 0; i < 128 * 128;) {
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
          let min_id = 0;let matchedIndex = -1;let sum = 0; // TODO:
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
        }if (body.securityQuestions && loginType.itemtype === "SecurityQuestionsLoginType") {const securityQuestions = JSON.parse(body.securityQuestions);let isValid = true;for (const securityQuestion of securityQuestions) {const match = loginType.securityQuestions.find((securityQuestionItem) => securityQuestionItem.question === securityQuestion.question);const isAnswerValid = _this4.validSecret(securityQuestion.answer, match.answerSalt, match.answerHash);if (!isAnswerValid) {isValid = false;}}successfulLoginPasswords = isValid ? successfulLoginPasswords + 1 : successfulLoginPasswords;}}if (successfulLoginPasswords >= REQUIRED_PASSWORDS) {return user;} else {return undefined;}})();} // Helpers
}module.exports = MongoDbClient;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhYmFzZS9Nb25nb0RiQ2xpZW50LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJXZWIzIiwiUkVRVUlSRURfUEFTU1dPUkRTIiwibW9uZ29EYk9wdGlvbnMiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VDcmVhdGVJbmRleCIsIk1vbmdvRGJDbGllbnQiLCJjb25zdHJ1Y3RvciIsInBhc3N3b3JkIiwic2VjcmV0U2FsdCIsInNlY3JldEhhc2giLCJ1bmRlZmluZWQiLCJoYXNoIiwiY3J5cHRvIiwicGJrZGYyU3luYyIsInRvU3RyaW5nIiwicHVibGljQWRkcmVzcyIsInNpZ25hdHVyZSIsInVzZXJQdWJsaWNBZGRyZXNzIiwic2lnbmVyIiwiRXRoQ3J5cHRvIiwicmVjb3ZlciIsImtlY2NhazI1NiIsInRvTG93ZXJDYXNlIiwic2FsdCIsInJhbmRvbUJ5dGVzIiwibW9uZ29VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJtb25nb29zZSIsImNvbm5lY3QiLCJ0aGVuIiwicG9wdWxhdGVEZWZhdWx0VmFsdWVzIiwiY2xpZW50cyIsIk9BdXRoQ2xpZW50IiwiZmluZCIsImxlbmd0aCIsIm15cGFzc0NsaWVudCIsImdyYW50cyIsInB1c2giLCJjbGllbnRJZCIsIkNMSUVOVF9JRCIsInJlZGlyZWN0VXJpcyIsIlJFRElSRUNUX1VSSSIsInNhdmUiLCJ1c2VycyIsIk9BdXRoVXNlciIsInNhbGx5IiwidXNlcm5hbWUiLCJjcmVhdGVOZXdPQXV0aFVzZXIiLCJjb25zb2xlIiwibG9nIiwic3RvcmUiLCJndWlkIiwia2V5Iiwia2V5RW50aXR5IiwiS2V5IiwidXVpZCIsImVuY3J5cHRlZEtleSIsInJldHJpZXZlIiwiZmluZE9uZSIsImNyZWF0ZU5ld0RJRCIsImFjY291bnQiLCJldGgiLCJhY2NvdW50cyIsImNyZWF0ZSIsInByaXZLZXlXaXRob3V0SGVhZGVyIiwicHJpdmF0ZUtleSIsInN1YnN0cmluZyIsImRpZCIsImFkZHJlc3MiLCJkZWxldGVPQXV0aFVzZXIiLCJ1c2VyIiwibG9naW5UeXBlIiwibG9naW5UeXBlcyIsIkxvZ2luVHlwZUJhc2UiLCJmaW5kT25lQW5kRGVsZXRlIiwiX2lkIiwiYm9keSIsIm9hdXRoSWQiLCJlbWFpbCIsInBob25lTnVtYmVyIiwidGV4dCIsInBhc3N3b3JkTG9naW5UeXBlIiwiUGFzc3dvcmRMb2dpblR5cGUiLCJzYWx0SGFzaCIsImdldFNlY3JldFNhbHRIYXNoIiwicGFzc3dvcmRTYWx0IiwicGFzc3dvcmRIYXNoIiwicGFsbVRlbXBsYXRlIiwicGFsbUxvZ2luVHlwZSIsIlBhbG1Mb2dpblR5cGUiLCJ0ZXh0TG9naW5UeXBlIiwiVGV4dExvZ2luVHlwZSIsInNlY3VyaXR5UXVlc3Rpb25zIiwic2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUiLCJTZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZSIsIkpTT04iLCJwYXJzZSIsIm1hcCIsInNlY3VyaXR5UXVlc3Rpb24iLCJxdWVzdGlvbiIsImFuc3dlciIsImFuc3dlclNhbHQiLCJhbnN3ZXJIYXNoIiwiZmFjZVRlbXBsYXRlIiwiZmFjZUxvZ2luVHlwZSIsIkZhY2VMb2dpblR5cGUiLCJmYWNlR3VpZFNhbHQiLCJmYWNlR3VpZEhhc2giLCJzb2NpYWxTdXBwb3J0VHlwZSIsIlNvY2lhbFN1cHBvcnRUeXBlIiwicHVibGljRW5jcnlwdGlvbktleSIsInByaXZLZXlVdWlkIiwicHVibGljS2V5QnlQcml2YXRlS2V5IiwicHJpdmF0ZUtleUd1aWQiLCJzZWN1cmVLZXlTdG9yYWdlIiwiZGlkQWRkcmVzcyIsImRpZFB1YmxpY0VuY3J5cHRpb25LZXkiLCJkaWRQcml2YXRlS2V5R3VpZCIsImNyZWF0ZVNvY2lhbExvZ2luIiwicmVxdWVzdGluZ1VzZXJJZCIsInByb3ZpZGluZ1VzZXJJZCIsInNvY2lhbExvZ2luIiwiU29jaWFsTG9naW4iLCJ0aW1lc3RhbXAiLCJEYXRlIiwiZmluZFNvY2lhbExvZ2luQnlVdWlkIiwiZ2V0VXNlckJ5SWQiLCJpZCIsImZpbmRCeUlkIiwiYWRkT25lVGltZUNvZGUiLCJ1c2VySWQiLCJvbmVUaW1lQ29kZSIsIm9uZVRpbWVDb2RlSXNzdWVEYXRlIiwiZ2V0QWxsQXV0aEFjY291bnRzIiwiYXV0aFVzZXJzIiwiZmluZFVzZXJCeVVzZXJOYW1lIiwidXNlck5hbWUiLCJmaW5kVXNlckJ5VXNlcm5hbWVPckVtYWlsIiwidXNlcm5hbWVPckVtYWlsIiwiJG9yIiwiZGVsZXRlTG9naW5NZXRob2QiLCJsb2dpbk1ldGhvZCIsInBvcHVsYXRlIiwibHQiLCJpdGVtdHlwZSIsImZpbHRlciIsIl9kb2MiLCJzYXZlTG9naW5NZXRob2QiLCJsb2dpbk1ldGhvZFBhcmFtcyIsImdldExvZ2luSW5mb0J5VXNlcm5hbWVPckVtYWlsIiwibG9naW5JbmZvIiwibG9naW5NZXRob2RzIiwic2VjdXJpdHlRdWVzdGlvbkxvZ2luVHlwZSIsInNhdmVVc2VyIiwiZmluZFVzZXJCeUVtYWlsIiwiZ2V0QWNjb3VudEJ5Q3JlZGVudGlhbHMiLCJzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMiLCJ2YWxpZFNlY3JldCIsInZhbGlkQnlvayIsIm5ld3RlbXBsYXRlTGlzdCIsInNwbGl0IiwibmV3VGVtcGxhdGUiLCJuZXdQb2ludFRlbXBsYXRlIiwibWluIiwibWluX2lkIiwibWF0Y2hlZEluZGV4Iiwic3VtIiwiaXNWYWxpZCIsIm1hdGNoIiwic2VjdXJpdHlRdWVzdGlvbkl0ZW0iLCJpc0Fuc3dlclZhbGlkIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6InNTQUFBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxJQUFJLEdBQUcsSUFBSUMsWUFBSixFQUFiO0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsQ0FBM0I7O0FBRUEsSUFBSUMsY0FBYyxHQUFHO0FB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QkFBTCxJQUNBckIsU0FBUyxDQUFDeUUsUUFBVixLQUF1Qiw0QkFGekIsRUFHRSxDQUNBLE1BQU1wRCxpQkFBaUIsR0FBR0csSUFBSSxDQUFDQyxLQUFMLENBQVdwQixJQUFJLENBQUNnQixpQkFBaEIsQ0FBMUIsQ0FDQSxJQUFJMkUsT0FBTyxHQUFHLElBQWQsQ0FDQSxLQUFLLE1BQU1yRSxnQkFBWCxJQUErQk4saUJBQS9CLEVBQWtELENBQ2hELE1BQU00RSxLQUFLLEdBQUdqRyxTQUFTLENBQUNxQixpQkFBVixDQUE0QjNELElBQTVCLENBQ1osQ0FBQ3dJLG9CQUFELEtBQ0VBLG9CQUFvQixDQUFDdEUsUUFBckIsS0FBa0NELGdCQUFnQixDQUFDQyxRQUZ6QyxDQUFkLENBSUEsTUFBTXVFLGFBQWEsR0FBRyxNQUFJLENBQUNiLFdBQUwsQ0FDcEIzRCxnQkFBZ0IsQ0FBQ0UsTUFERyxFQUVwQm9FLEtBQUssQ0FBQ25FLFVBRmMsRUFHcEJtRSxLQUFLLENBQUNsRSxVQUhjLENBQXRCLENBS0EsSUFBSSxDQUFDb0UsYUFBTCxFQUFvQixDQUNsQkgsT0FBTyxHQUFHLEtBQVYsQ0FDRCxDQUNGLENBQ0RYLHdCQUF3QixHQUFHVyxPQUFPLEdBQzlCWCx3QkFBd0IsR0FBRyxDQURHLEdBRTlCQSx3QkFGSixDQUdELENBQ0YsQ0FFRCxJQUFJQSx3QkFBd0IsSUFBSTlKLGtCQUFoQyxFQUFvRCxDQUNsRCxPQUFPd0UsSUFBUCxDQUNELENBRkQsTUFFTyxDQUNMLE9BQU85RCxTQUFQLENBQ0QsQ0F4SmlDLEtBeUpuQyxDQTVrQmlCLENBOGtCbEI7QUE5a0JrQixDQXduQnBCbUssTUFBTSxDQUFDQyxPQUFQLEdBQWlCekssYUFBakIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5pbXBvcnQgT0F1dGhVc2VyIGZyb20gXCIuL21vZGVscy9PQXV0aFVzZXJcIjtcbmltcG9ydCBPQXV0aENsaWVudCBmcm9tIFwiLi9tb2RlbHMvT0F1dGhDbGllbnRcIjtcbmltcG9ydCBTb2NpYWxMb2dpbiBmcm9tIFwiLi9tb2RlbHMvU29jaWFsTG9naW5cIjtcbmltcG9ydCBMb2dpblR5cGVCYXNlIGZyb20gXCIuL21vZGVscy9sb2dpbi10eXBlL0xvZ2luVHlwZUJhc2VcIjtcbmltcG9ydCBQYXNzd29yZExvZ2luVHlwZSBmcm9tIFwiLi9tb2RlbHMvbG9naW4tdHlwZS9QYXNzd29yZExvZ2luVHlwZVwiO1xuaW1wb3J0IEZhY2VMb2dpblR5cGUgZnJvbSBcIi4vbW9kZWxzL2xvZ2luLXR5cGUvRmFjZUxvZ2luVHlwZVwiO1xuaW1wb3J0IFBhbG1Mb2dpblR5cGUgZnJvbSBcIi4vbW9kZWxzL2xvZ2luLXR5cGUvUGFsbUxvZ2luVHlwZVwiO1xuaW1wb3J0IGNyeXB0byBmcm9tIFwiY3J5cHRvXCI7XG5pbXBvcnQgS2V5IGZyb20gXCIuL21vZGVscy9LZXlcIjtcbmltcG9ydCBUZXh0TG9naW5UeXBlIGZyb20gXCIuL21vZGVscy9sb2dpbi10eXBlL1RleHRMb2dpblR5cGVcIjtcbmltcG9ydCBTZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZSBmcm9tIFwiLi9tb2RlbHMvbG9naW4tdHlwZS9TZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZVwiO1xuaW1wb3J0IFdlYjMgZnJvbSBcIndlYjNcIjtcbmltcG9ydCBzZWN1cmVLZXlTdG9yYWdlIGZyb20gXCIuLi9jb21tb24vc2VjdXJlS2V5U3RvcmFnZVwiO1xuaW1wb3J0IEV0aENyeXB0byBmcm9tIFwiZXRoLWNyeXB0b1wiO1xuaW1wb3J0IFNvY2lhbFN1cHBvcnRUeXBlIGZyb20gXCIuL21vZGVscy9sb2dpbi10eXBlL1NvY2lhbFN1cHBvcnRUeXBlXCI7XG5cbi8vIGNvbnN0IHNlY3VyZUtleVN0b3JhZ2UgPSByZXF1aXJlKFwiLi4vY29tbW9uL3NlY3VyZUtleVN0b3JhZ2VcIik7XG4vLyBjb25zdCBFdGhDcnlwdG8gPSByZXF1aXJlKFwiZXRoLWNyeXB0b1wiKTtcbi8vIGNvbnN0IGNvbW1vbiA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tbW9uXCIpO1xuXG5jb25zdCB3ZWIzID0gbmV3IFdlYjMoKTtcbmNvbnN0IFJFUVVJUkVEX1BBU1NXT1JEUyA9IDE7XG5cbmxldCBtb25nb0RiT3B0aW9ucyA9IHtcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICB1c2VOZXdVcmxQYXJzZXI6IHRydWUsXG4gIHVzZUNyZWF0ZUluZGV4OiB0cnVlLFxufTtcblxuY2xhc3MgTW9uZ29EYkNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubW9uZ29VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuICAgIG1vbmdvb3NlLmNvbm5lY3QodGhpcy5tb25nb1VSSSwgbW9uZ29EYk9wdGlvbnMpLnRoZW4oKCkgPT4ge1xuICAgICAgdGhpcy5wb3B1bGF0ZURlZmF1bHRWYWx1ZXMoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHBvcHVsYXRlRGVmYXVsdFZhbHVlcygpIHtcbiAgICBsZXQgY2xpZW50cyA9IGF3YWl0IE9BdXRoQ2xpZW50LmZpbmQoe30pO1xuXG4gICAgaWYgKGNsaWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICBsZXQgbXlwYXNzQ2xpZW50ID0gbmV3IE9BdXRoQ2xpZW50KCk7XG4gICAgICBsZXQgZ3JhbnRzID0gW107XG4gICAgICBncmFudHMucHVzaChcImF1dGhvcml6YXRpb25fY29kZVwiKTtcbiAgICAgIG15cGFzc0NsaWVudC5jbGllbnRJZCA9IHByb2Nlc3MuZW52LkNMSUVOVF9JRDtcbiAgICAgIG15cGFzc0NsaWVudC5yZWRpcmVjdFVyaXMgPSBwcm9jZXNzLmVudi5SRURJUkVDVF9VUkk7XG4gICAgICBteXBhc3NDbGllbnQuZ3JhbnRzID0gZ3JhbnRzO1xuXG4gICAgICBhd2FpdCBteXBhc3NDbGllbnQuc2F2ZSgpO1xuICAgIH1cblxuICAgIGxldCB1c2VycyA9IGF3YWl0IE9BdXRoVXNlci5maW5kKHt9KTtcbiAgICBpZiAodXNlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICBsZXQgc2FsbHkgPSB7XG4gICAgICAgIHVzZXJuYW1lOiBcIm93bmVyXCIsXG4gICAgICAgIHBhc3N3b3JkOiBcIm93bmVyXCIsXG4gICAgICB9O1xuXG4gICAgICBhd2FpdCB0aGlzLmNyZWF0ZU5ld09BdXRoVXNlcihzYWxseSwgXCJzYWxseS1vYXV0aC0xMjNcIik7XG4gICAgfVxuXG4gICAgY29uc29sZS5sb2coXCJPYXV0aCBTZXJ2ZXIgUmVhZHkhXCIpO1xuICB9XG5cbiAgLy8gRW5jcnl0cGlvbiBLZXlzXG4gIGFzeW5jIHN0b3JlKGd1aWQsIGtleSkge1xuICAgIGNvbnN0IGtleUVudGl0eSA9IG5ldyBLZXkoKTtcbiAgICBrZXlFbnRpdHkudXVpZCA9IGd1aWQ7XG4gICAga2V5RW50aXR5LmVuY3J5cHRlZEtleSA9IGtleTtcbiAgICBhd2FpdCBrZXlFbnRpdHkuc2F2ZSgpO1xuICAgIHJldHVybiBrZXlFbnRpdHk7XG4gIH1cblxuICBhc3luYyByZXRyaWV2ZShndWlkKSB7XG4gICAgbGV0IGtleSA9IGF3YWl0IEtleS5maW5kT25lKHtcbiAgICAgIHV1aWQ6IGd1aWQsXG4gICAgfSk7XG4gICAgcmV0dXJuIGtleTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZU5ld0RJRCgpIHtcbiAgICBjb25zdCBhY2NvdW50ID0gd2ViMy5ldGguYWNjb3VudHMuY3JlYXRlKCk7XG4gICAgY29uc3QgcHJpdktleVdpdGhvdXRIZWFkZXIgPSBhY2NvdW50LnByaXZhdGVLZXkuc3Vic3RyaW5nKDIpO1xuICAgIGxldCBkaWQgPSB7IGFkZHJlc3M6IGFjY291bnQuYWRkcmVzcywgcHJpdmF0ZUtleTogcHJpdktleVdpdGhvdXRIZWFkZXIgfTtcbiAgICByZXR1cm4gZGlkO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlT0F1dGhVc2VyKHVzZXJuYW1lKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IE9BdXRoVXNlci5maW5kT25lKHsgdXNlcm5hbWUgfSk7XG4gICAgZm9yKGNvbnN0IGxvZ2luVHlwZSBvZiB1c2VyLmxvZ2luVHlwZXMpIHtcbiAgICAgIGF3YWl0IExvZ2luVHlwZUJhc2UuZmluZE9uZUFuZERlbGV0ZSh7XG4gICAgICAgIF9pZDogbG9naW5UeXBlLnRvU3RyaW5nKCksXG4gICAgICB9KTtcbiAgICB9XG4gICAgYXdhaXQgT0F1dGhVc2VyLmZpbmRPbmVBbmREZWxldGUoeyB1c2VybmFtZSB9KTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZU5ld09BdXRoVXNlcihib2R5LCB1dWlkID0gdW5kZWZpbmVkKSB7XG4gICAgY29uc3QgdXNlciA9IG5ldyBPQXV0aFVzZXIoKTtcblxuICAgIGlmICh1dWlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHVzZXIub2F1dGhJZCA9IHV1aWR2NCgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1c2VyLm9hdXRoSWQgPSB1dWlkO1xuICAgIH1cblxuICAgIHVzZXIudXNlcm5hbWUgPVxuICAgICAgYm9keS51c2VybmFtZSAmJiBib2R5LnVzZXJuYW1lLmxlbmd0aCA+IDAgPyBib2R5LnVzZXJuYW1lIDogYm9keS5lbWFpbDtcbiAgICB1c2VyLmVtYWlsID0gYm9keS5lbWFpbDtcbiAgICB1c2VyLnBob25lTnVtYmVyID0gYm9keS50ZXh0O1xuXG4gICAgdXNlci5sb2dpblR5cGVzID0gW107XG5cbiAgICBpZiAoYm9keS5wYXNzd29yZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBwYXNzd29yZExvZ2luVHlwZSA9IG5ldyBQYXNzd29yZExvZ2luVHlwZSgpO1xuICAgICAgY29uc3Qgc2FsdEhhc2ggPSB0aGlzLmdldFNlY3JldFNhbHRIYXNoKGJvZHkucGFzc3dvcmQpO1xuICAgICAgcGFzc3dvcmRMb2dpblR5cGUucGFzc3dvcmRTYWx0ID0gc2FsdEhhc2guc2FsdDtcbiAgICAgIHBhc3N3b3JkTG9naW5UeXBlLnBhc3N3b3JkSGFzaCA9IHNhbHRIYXNoLmhhc2g7XG4gICAgICBhd2FpdCBwYXNzd29yZExvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaChwYXNzd29yZExvZ2luVHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKGJvZHkucGFsbVRlbXBsYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHBhbG1Mb2dpblR5cGUgPSBuZXcgUGFsbUxvZ2luVHlwZSgpO1xuICAgICAgLy8gTk9URTogZG9uJ3QgaGFzaCB0ZW1wbGF0ZSBhcyBuZWVkIG9yaWdpbmFsIHRvIGNvbXBhcmUuXG4gICAgICBwYWxtTG9naW5UeXBlLnBhbG1UZW1wbGF0ZSA9IGJvZHkucGFsbVRlbXBsYXRlO1xuICAgICAgYXdhaXQgcGFsbUxvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaChwYWxtTG9naW5UeXBlKTtcbiAgICB9XG5cbiAgICBpZiAoYm9keS50ZXh0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHRleHRMb2dpblR5cGUgPSBuZXcgVGV4dExvZ2luVHlwZSgpO1xuICAgICAgdGV4dExvZ2luVHlwZS5waG9uZU51bWJlciA9IGJvZHkudGV4dDtcbiAgICAgIGF3YWl0IHRleHRMb2dpblR5cGUuc2F2ZSgpO1xuICAgICAgdXNlci5sb2dpblR5cGVzLnB1c2godGV4dExvZ2luVHlwZSk7XG4gICAgfVxuXG4gICAgaWYgKGJvZHkuc2VjdXJpdHlRdWVzdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY29uc3Qgc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUgPSBuZXcgU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUoKTtcbiAgICAgIHNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlLnNlY3VyaXR5UXVlc3Rpb25zID0gSlNPTi5wYXJzZShcbiAgICAgICAgYm9keS5zZWN1cml0eVF1ZXN0aW9uc1xuICAgICAgKS5tYXAoKHNlY3VyaXR5UXVlc3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBzZWN1cml0eVF1ZXN0aW9uLnF1ZXN0aW9uO1xuICAgICAgICBjb25zdCBzYWx0SGFzaCA9IHRoaXMuZ2V0U2VjcmV0U2FsdEhhc2goc2VjdXJpdHlRdWVzdGlvbi5hbnN3ZXIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICAgIGFuc3dlclNhbHQ6IHNhbHRIYXNoLnNhbHQsXG4gICAgICAgICAgYW5zd2VySGFzaDogc2FsdEhhc2guaGFzaCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUuc2F2ZSgpO1xuICAgICAgdXNlci5sb2dpblR5cGVzLnB1c2goc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUpO1xuICAgIH1cblxuICAgIGlmIChib2R5LmZhY2VUZW1wbGF0ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBmYWNlTG9naW5UeXBlID0gbmV3IEZhY2VMb2dpblR5cGUoKTtcbiAgICAgIGNvbnN0IHNhbHRIYXNoID0gdGhpcy5nZXRTZWNyZXRTYWx0SGFzaChib2R5LmZhY2VUZW1wbGF0ZSk7XG4gICAgICBmYWNlTG9naW5UeXBlLmZhY2VHdWlkU2FsdCA9IHNhbHRIYXNoLnNhbHQ7XG4gICAgICBmYWNlTG9naW5UeXBlLmZhY2VHdWlkSGFzaCA9IHNhbHRIYXNoLmhhc2g7XG4gICAgICBhd2FpdCBmYWNlTG9naW5UeXBlLnNhdmUoKTtcbiAgICAgIHVzZXIubG9naW5UeXBlcy5wdXNoKGZhY2VMb2dpblR5cGUpO1xuICAgIH1cblxuICAgIC8vIEV2ZXJ5b25lIGdldHMgYSBzb2NpYWxoZWxwZXIgbG9naW4gbWV0aG9kXG4gICAgY29uc3Qgc29jaWFsU3VwcG9ydFR5cGUgPSBuZXcgU29jaWFsU3VwcG9ydFR5cGUoKTtcbiAgICBhd2FpdCBzb2NpYWxTdXBwb3J0VHlwZS5zYXZlKCk7XG4gICAgdXNlci5sb2dpblR5cGVzLnB1c2goc29jaWFsU3VwcG9ydFR5cGUpO1xuXG4gICAgLy8gTm9ybWFsIFVzZXJcbiAgICBpZiAoXG4gICAgICBib2R5LnB1YmxpY0VuY3J5cHRpb25LZXkgPT09IHVuZGVmaW5lZCAmJlxuICAgICAgYm9keS5wdWJsaWNBZGRyZXNzID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIGNvbnN0IHByaXZLZXlVdWlkID0gdXVpZHY0KCk7XG5cbiAgICAgIGxldCBkaWQgPSBhd2FpdCB0aGlzLmNyZWF0ZU5ld0RJRCgpO1xuICAgICAgZGlkLnB1YmxpY0VuY3J5cHRpb25LZXkgPSBFdGhDcnlwdG8ucHVibGljS2V5QnlQcml2YXRlS2V5KFxuICAgICAgICBcIjB4XCIgKyBkaWQucHJpdmF0ZUtleVxuICAgICAgKTtcbiAgICAgIGRpZC5wcml2YXRlS2V5R3VpZCA9IHByaXZLZXlVdWlkO1xuXG4gICAgICBhd2FpdCBzZWN1cmVLZXlTdG9yYWdlLnN0b3JlKHByaXZLZXlVdWlkLCBkaWQucHJpdmF0ZUtleSk7XG5cbiAgICAgIHVzZXIuZGlkQWRkcmVzcyA9IGRpZC5hZGRyZXNzO1xuICAgICAgdXNlci5kaWRQdWJsaWNFbmNyeXB0aW9uS2V5ID0gZGlkLnB1YmxpY0VuY3J5cHRpb25LZXk7XG4gICAgICB1c2VyLmRpZFByaXZhdGVLZXlHdWlkID0gZGlkLnByaXZhdGVLZXlHdWlkO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBCWU9LIFVzZXJcbiAgICAgIC8vIERvdWJsZXMgYXMgcGFzc3dvcmRMb2dpblR5cGVcbiAgICAgIGNvbnN0IHBhc3N3b3JkTG9naW5UeXBlID0gbmV3IFBhc3N3b3JkTG9naW5UeXBlKCk7XG4gICAgICBjb25zdCBzYWx0SGFzaCA9IHRoaXMuZ2V0U2VjcmV0U2FsdEhhc2godXVpZHY0KCkpO1xuICAgICAgcGFzc3dvcmRMb2dpblR5cGUucGFzc3dvcmRTYWx0ID0gc2FsdEhhc2guc2FsdDtcbiAgICAgIHBhc3N3b3JkTG9naW5UeXBlLnBhc3N3b3JkSGFzaCA9IHNhbHRIYXNoLmhhc2g7XG4gICAgICBhd2FpdCBwYXNzd29yZExvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaChwYXNzd29yZExvZ2luVHlwZSk7XG5cbiAgICAgIGNvbnN0IHByaXZLZXlVdWlkID0gdXVpZHY0KCk7XG4gICAgICBhd2FpdCBzZWN1cmVLZXlTdG9yYWdlLnN0b3JlKHByaXZLZXlVdWlkLCBcInVzZXJieW9rXCIpO1xuXG4gICAgICB1c2VyLmRpZEFkZHJlc3MgPSBib2R5LnB1YmxpY0FkZHJlc3M7XG4gICAgICB1c2VyLmRpZFB1YmxpY0VuY3J5cHRpb25LZXkgPSBib2R5LnB1YmxpY0VuY3J5cHRpb25LZXk7XG4gICAgICB1c2VyLmRpZFByaXZhdGVLZXlHdWlkID0gcHJpdktleVV1aWQ7XG4gICAgfVxuXG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XG5cbiAgICByZXR1cm4gdXNlcjtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVNvY2lhbExvZ2luKHJlcXVlc3RpbmdVc2VySWQsIHByb3ZpZGluZ1VzZXJJZCwgdXVpZCkge1xuICAgIGNvbnN0IHNvY2lhbExvZ2luID0gbmV3IFNvY2lhbExvZ2luKCk7XG4gICAgc29jaWFsTG9naW4udXVpZCA9IHV1aWQ7XG4gICAgc29jaWFsTG9naW4ucmVxdWVzdGluZ1VzZXJJZCA9IHJlcXVlc3RpbmdVc2VySWQ7XG4gICAgc29jaWFsTG9naW4ucHJvdmlkaW5nVXNlcklkID0gcHJvdmlkaW5nVXNlcklkO1xuICAgIHNvY2lhbExvZ2luLnRpbWVzdGFtcCA9IG5ldyBEYXRlKCk7XG5cbiAgICBhd2FpdCBzb2NpYWxMb2dpbi5zYXZlKCk7XG4gIH1cblxuICBhc3luYyBmaW5kU29jaWFsTG9naW5CeVV1aWQodXVpZCkge1xuICAgIGxldCBzb2NpYWxMb2dpbiA9IGF3YWl0IFNvY2lhbExvZ2luLmZpbmRPbmUoe1xuICAgICAgdXVpZDogdXVpZCxcbiAgICB9KTtcblxuICAgIHJldHVybiBzb2NpYWxMb2dpbjtcbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJCeUlkKGlkKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IE9BdXRoVXNlci5maW5kQnlJZChpZCk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBhc3luYyBhZGRPbmVUaW1lQ29kZSh1c2VySWQsIG9uZVRpbWVDb2RlKSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IE9BdXRoVXNlci5maW5kQnlJZCh1c2VySWQpO1xuICAgIHVzZXIub25lVGltZUNvZGUgPSBvbmVUaW1lQ29kZTtcbiAgICB1c2VyLm9uZVRpbWVDb2RlSXNzdWVEYXRlID0gbmV3IERhdGUoKTtcbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgfVxuXG4gIGFzeW5jIGdldEFsbEF1dGhBY2NvdW50cygpIHtcbiAgICBjb25zdCBhdXRoVXNlcnMgPSBhd2FpdCBPQXV0aFVzZXIuZmluZCh7fSk7XG4gICAgcmV0dXJuIGF1dGhVc2VycztcbiAgfVxuXG4gIGFzeW5jIGZpbmRVc2VyQnlVc2VyTmFtZSh1c2VyTmFtZSkge1xuICAgIGlmICh1c2VyTmFtZSkge1xuICAgICAgbGV0IHVzZXIgPSBhd2FpdCBPQXV0aFVzZXIuZmluZE9uZSh7XG4gICAgICAgIHVzZXJuYW1lOiB1c2VyTmFtZSxcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVzZXI7XG4gICAgfVxuICAgIHJldHVybiB1bmRlZmluZWQ7XG4gIH1cblxuICBhc3luYyBmaW5kVXNlckJ5VXNlcm5hbWVPckVtYWlsKHVzZXJuYW1lT3JFbWFpbCkge1xuICAgIGlmICh1c2VybmFtZU9yRW1haWwpIHtcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgT0F1dGhVc2VyLmZpbmRPbmUoe1xuICAgICAgICAkb3I6IFt7IHVzZXJuYW1lOiB1c2VybmFtZU9yRW1haWwgfSwgeyBlbWFpbDogdXNlcm5hbWVPckVtYWlsIH1dLFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUxvZ2luTWV0aG9kKHVzZXJuYW1lLCBsb2dpbk1ldGhvZCkge1xuICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBPQXV0aFVzZXIuZmluZE9uZSh7IHVzZXJuYW1lIH0pLnBvcHVsYXRlKFwibG9naW5UeXBlc1wiKTtcbiAgICBpZiAobG9naW5NZXRob2QgPT09IFwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIikge1xuICAgICAgbGV0IHNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlID0gdXNlci5sb2dpblR5cGVzLmZpbmQoXG4gICAgICAgIChsdCkgPT4gbHQuaXRlbXR5cGUgPT09IFwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIlxuICAgICAgKTtcbiAgICAgIHVzZXIubG9naW5UeXBlcyA9IHVzZXIubG9naW5UeXBlcy5maWx0ZXIoXG4gICAgICAgIChsdCkgPT4gbHQuaXRlbXR5cGUgIT09IFwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIlxuICAgICAgKTtcbiAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgICAgaWYgKHNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlKSB7XG4gICAgICAgIGF3YWl0IFNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlLmZpbmRPbmVBbmREZWxldGUoe1xuICAgICAgICAgIF9pZDogc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobG9naW5NZXRob2QgPT09IFwiUGFsbUxvZ2luVHlwZVwiKSB7XG4gICAgICBsZXQgcGFsbUxvZ2luVHlwZSA9IHVzZXIubG9naW5UeXBlcy5maW5kKFxuICAgICAgICAobHQpID0+IGx0Lml0ZW10eXBlID09PSBcIlBhbG1Mb2dpblR5cGVcIlxuICAgICAgKTtcbiAgICAgIHVzZXIubG9naW5UeXBlcyA9IHVzZXIubG9naW5UeXBlcy5maWx0ZXIoXG4gICAgICAgIChsdCkgPT4gbHQuaXRlbXR5cGUgIT09IFwiUGFsbUxvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgICBpZiAocGFsbUxvZ2luVHlwZSkge1xuICAgICAgICBhd2FpdCBQYWxtTG9naW5UeXBlLmZpbmRPbmVBbmREZWxldGUoe1xuICAgICAgICAgIF9pZDogcGFsbUxvZ2luVHlwZS5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsb2dpbk1ldGhvZCA9PT0gXCJQYXNzd29yZExvZ2luVHlwZVwiKSB7XG4gICAgICBsZXQgcGFzc3dvcmRMb2dpblR5cGUgPSB1c2VyLmxvZ2luVHlwZXMuZmluZChcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSA9PT0gXCJQYXNzd29yZExvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgdXNlci5sb2dpblR5cGVzID0gdXNlci5sb2dpblR5cGVzLmZpbHRlcihcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSAhPT0gXCJQYXNzd29yZExvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgICBpZiAocGFzc3dvcmRMb2dpblR5cGUpIHtcbiAgICAgICAgYXdhaXQgUGFzc3dvcmRMb2dpblR5cGUuZmluZE9uZUFuZERlbGV0ZSh7XG4gICAgICAgICAgX2lkOiBwYXNzd29yZExvZ2luVHlwZS5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChsb2dpbk1ldGhvZCA9PT0gXCJUZXh0TG9naW5UeXBlXCIpIHtcbiAgICAgIGxldCB0ZXh0TG9naW5UeXBlID0gdXNlci5sb2dpblR5cGVzLmZpbmQoXG4gICAgICAgIChsdCkgPT4gbHQuaXRlbXR5cGUgPT09IFwiVGV4dExvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgdXNlci5sb2dpblR5cGVzID0gdXNlci5sb2dpblR5cGVzLmZpbHRlcihcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSAhPT0gXCJUZXh0TG9naW5UeXBlXCJcbiAgICAgICk7XG4gICAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICAgIGlmICh0ZXh0TG9naW5UeXBlKSB7XG4gICAgICAgIGF3YWl0IFRleHRMb2dpblR5cGUuZmluZE9uZUFuZERlbGV0ZSh7XG4gICAgICAgICAgX2lkOiB0ZXh0TG9naW5UeXBlLl9pZC50b1N0cmluZygpLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gVE9ETzogb3RoZXIgbG9naW4gbWV0aG9kc1xuICAgIHJldHVybiB1c2VyLl9kb2M7XG4gIH1cblxuICBhc3luYyBzYXZlTG9naW5NZXRob2QodXNlcm5hbWUsIGxvZ2luTWV0aG9kUGFyYW1zKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCwgcGFsbVRlbXBsYXRlLCB0ZXh0LCBzZWN1cml0eVF1ZXN0aW9ucyB9ID0ge1xuICAgICAgLi4ubG9naW5NZXRob2RQYXJhbXMsXG4gICAgfTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgT0F1dGhVc2VyLmZpbmRPbmUoeyB1c2VybmFtZSB9KS5wb3B1bGF0ZShcImxvZ2luVHlwZXNcIik7XG4gICAgaWYgKHBhc3N3b3JkKSB7XG4gICAgICAvLyByZW1vdmUgb2xkIG9uZSBpZiB0aGVyZSB3YXMgb25lIHRoZXJlXG4gICAgICBsZXQgcGFzc3dvcmRMb2dpblR5cGUgPSB1c2VyLmxvZ2luVHlwZXMuZmluZChcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSA9PT0gXCJQYXNzd29yZExvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgdXNlci5sb2dpblR5cGVzID0gdXNlci5sb2dpblR5cGVzLmZpbHRlcihcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSAhPT0gXCJQYXNzd29yZExvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgICBpZiAocGFzc3dvcmRMb2dpblR5cGUpIHtcbiAgICAgICAgYXdhaXQgUGFzc3dvcmRMb2dpblR5cGUuZmluZE9uZUFuZERlbGV0ZSh7XG4gICAgICAgICAgX2lkOiBwYXNzd29yZExvZ2luVHlwZS5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICAvLyBjcmVhdGUgdGhlIG5ldyBvbmUgYW5kIGxpbmsgaXRcbiAgICAgIHBhc3N3b3JkTG9naW5UeXBlID0gbmV3IFBhc3N3b3JkTG9naW5UeXBlKCk7XG4gICAgICBjb25zdCBzYWx0SGFzaCA9IHRoaXMuZ2V0U2VjcmV0U2FsdEhhc2gocGFzc3dvcmQpO1xuICAgICAgcGFzc3dvcmRMb2dpblR5cGUucGFzc3dvcmRTYWx0ID0gc2FsdEhhc2guc2FsdDtcbiAgICAgIHBhc3N3b3JkTG9naW5UeXBlLnBhc3N3b3JkSGFzaCA9IHNhbHRIYXNoLmhhc2g7XG4gICAgICBhd2FpdCBwYXNzd29yZExvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaChwYXNzd29yZExvZ2luVHlwZSk7XG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICBsZXQgdGV4dExvZ2luVHlwZSA9IHVzZXIubG9naW5UeXBlcy5maW5kKFxuICAgICAgICAobHQpID0+IGx0Lml0ZW10eXBlID09PSBcIlRleHRMb2dpblR5cGVcIlxuICAgICAgKTtcbiAgICAgIHVzZXIubG9naW5UeXBlcyA9IHVzZXIubG9naW5UeXBlcy5maWx0ZXIoXG4gICAgICAgIChsdCkgPT4gbHQuaXRlbXR5cGUgIT09IFwiVGV4dExvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgICBpZiAodGV4dExvZ2luVHlwZSkge1xuICAgICAgICBhd2FpdCBUZXh0TG9naW5UeXBlLmZpbmRPbmVBbmREZWxldGUoe1xuICAgICAgICAgIF9pZDogdGV4dExvZ2luVHlwZS5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICB0ZXh0TG9naW5UeXBlID0gbmV3IFRleHRMb2dpblR5cGUoKTtcbiAgICAgIHRleHRMb2dpblR5cGUucGhvbmVOdW1iZXIgPSB0ZXh0O1xuICAgICAgYXdhaXQgdGV4dExvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaCh0ZXh0TG9naW5UeXBlKTtcbiAgICB9XG4gICAgaWYgKHBhbG1UZW1wbGF0ZSkge1xuICAgICAgbGV0IHBhbG1Mb2dpblR5cGUgPSB1c2VyLmxvZ2luVHlwZXMuZmluZChcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSA9PT0gXCJQYWxtTG9naW5UeXBlXCJcbiAgICAgICk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMgPSB1c2VyLmxvZ2luVHlwZXMuZmlsdGVyKFxuICAgICAgICAobHQpID0+IGx0Lml0ZW10eXBlICE9PSBcIlBhbG1Mb2dpblR5cGVcIlxuICAgICAgKTtcbiAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuICAgICAgaWYgKHBhbG1Mb2dpblR5cGUpIHtcbiAgICAgICAgYXdhaXQgUGFsbUxvZ2luVHlwZS5maW5kT25lQW5kRGVsZXRlKHtcbiAgICAgICAgICBfaWQ6IHBhbG1Mb2dpblR5cGUuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgcGFsbUxvZ2luVHlwZSA9IG5ldyBQYWxtTG9naW5UeXBlKCk7XG4gICAgICAvLyBOT1RFOiBkb24ndCBoYXNoIHRlbXBsYXRlIGFzIG5lZWQgb3JpZ2luYWwgdG8gY29tcGFyZS5cbiAgICAgIHBhbG1Mb2dpblR5cGUucGFsbVRlbXBsYXRlID0gcGFsbVRlbXBsYXRlO1xuICAgICAgYXdhaXQgcGFsbUxvZ2luVHlwZS5zYXZlKCk7XG4gICAgICB1c2VyLmxvZ2luVHlwZXMucHVzaChwYWxtTG9naW5UeXBlKTtcbiAgICB9XG4gICAgaWYgKHNlY3VyaXR5UXVlc3Rpb25zKSB7XG4gICAgICBsZXQgc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUgPSB1c2VyLmxvZ2luVHlwZXMuZmluZChcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSA9PT0gXCJTZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgdXNlci5sb2dpblR5cGVzID0gdXNlci5sb2dpblR5cGVzLmZpbHRlcihcbiAgICAgICAgKGx0KSA9PiBsdC5pdGVtdHlwZSAhPT0gXCJTZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZVwiXG4gICAgICApO1xuICAgICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgICBpZiAoc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUpIHtcbiAgICAgICAgYXdhaXQgU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUuZmluZE9uZUFuZERlbGV0ZSh7XG4gICAgICAgICAgX2lkOiBzZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZS5faWQudG9TdHJpbmcoKSxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBzZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZSA9IG5ldyBTZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZSgpO1xuICAgICAgc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUuc2VjdXJpdHlRdWVzdGlvbnMgPSBKU09OLnBhcnNlKFxuICAgICAgICBzZWN1cml0eVF1ZXN0aW9uc1xuICAgICAgKS5tYXAoKHNlY3VyaXR5UXVlc3Rpb24pID0+IHtcbiAgICAgICAgY29uc3QgcXVlc3Rpb24gPSBzZWN1cml0eVF1ZXN0aW9uLnF1ZXN0aW9uO1xuICAgICAgICBjb25zdCBzYWx0SGFzaCA9IHRoaXMuZ2V0U2VjcmV0U2FsdEhhc2goc2VjdXJpdHlRdWVzdGlvbi5hbnN3ZXIpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHF1ZXN0aW9uLFxuICAgICAgICAgIGFuc3dlclNhbHQ6IHNhbHRIYXNoLnNhbHQsXG4gICAgICAgICAgYW5zd2VySGFzaDogc2FsdEhhc2guaGFzaCxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUuc2F2ZSgpO1xuICAgICAgdXNlci5sb2dpblR5cGVzLnB1c2goc2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGUpO1xuICAgIH1cbiAgICBhd2FpdCB1c2VyLnNhdmUoKTtcbiAgICByZXR1cm4gdXNlci5fZG9jO1xuICB9XG5cbiAgYXN5bmMgZ2V0TG9naW5JbmZvQnlVc2VybmFtZU9yRW1haWwodXNlcm5hbWVPckVtYWlsKSB7XG4gICAgbGV0IGxvZ2luSW5mbyA9IHt9O1xuICAgIGxldCBsb2dpbk1ldGhvZHM7XG4gICAgbGV0IHNlY3VyaXR5UXVlc3Rpb25zO1xuICAgIGlmICh1c2VybmFtZU9yRW1haWwpIHtcbiAgICAgIGxldCB1c2VyID0gYXdhaXQgT0F1dGhVc2VyLmZpbmRPbmUoe1xuICAgICAgICAkb3I6IFt7IHVzZXJuYW1lOiB1c2VybmFtZU9yRW1haWwgfSwgeyBlbWFpbDogdXNlcm5hbWVPckVtYWlsIH1dLFxuICAgICAgfSkucG9wdWxhdGUoXCJsb2dpblR5cGVzXCIpO1xuICAgICAgaWYgKHVzZXIpIHtcbiAgICAgICAgbG9naW5NZXRob2RzID0gdXNlci5sb2dpblR5cGVzLm1hcCgobG9naW5UeXBlKSA9PiBsb2dpblR5cGUuaXRlbXR5cGUpO1xuICAgICAgICBjb25zdCBzZWN1cml0eVF1ZXN0aW9uTG9naW5UeXBlID0gdXNlci5sb2dpblR5cGVzLmZpbmQoXG4gICAgICAgICAgKGxvZ2luVHlwZSkgPT4gbG9naW5UeXBlLml0ZW10eXBlID09PSBcIlNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlXCJcbiAgICAgICAgKTtcblxuICAgICAgICBpZiAoc2VjdXJpdHlRdWVzdGlvbkxvZ2luVHlwZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgc2VjdXJpdHlRdWVzdGlvbnMgPSBzZWN1cml0eVF1ZXN0aW9uTG9naW5UeXBlLnNlY3VyaXR5UXVlc3Rpb25zLm1hcChcbiAgICAgICAgICAgIChzZWN1cml0eVF1ZXN0aW9uKSA9PiBzZWN1cml0eVF1ZXN0aW9uLnF1ZXN0aW9uXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGxvZ2luSW5mby5zZWN1cml0eVF1ZXN0aW9ucyA9IHNlY3VyaXR5UXVlc3Rpb25zO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2luSW5mby5sb2dpbk1ldGhvZHMgPSBsb2dpbk1ldGhvZHM7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBsb2dpbkluZm87XG4gIH1cblxuICBhc3luYyBzYXZlVXNlcih1c2VyKSB7XG4gICAgYXdhaXQgdXNlci5zYXZlKCk7XG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cblxuICBhc3luYyBmaW5kVXNlckJ5RW1haWwoZW1haWwpIHtcbiAgICBsZXQgdXNlciA9IGF3YWl0IE9BdXRoVXNlci5maW5kT25lKHtcbiAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICB9KTtcblxuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgLy8gSWYgdGhleSBhcmUgYXV0aG9yaXplZCB0byBsb2dpblxuICBhc3luYyBnZXRBY2NvdW50QnlDcmVkZW50aWFscyhib2R5KSB7XG4gICAgbGV0IHVzZXIgPSBudWxsO1xuXG4gICAgaWYgKGJvZHkudXNlcm5hbWUgJiYgYm9keS51c2VybmFtZS5sZW5ndGggPiAwKSB7XG4gICAgICB1c2VyID0gYXdhaXQgT0F1dGhVc2VyLmZpbmRPbmUoe1xuICAgICAgICB1c2VybmFtZTogYm9keS51c2VybmFtZSxcbiAgICAgIH0pLnBvcHVsYXRlKFwibG9naW5UeXBlc1wiKTtcbiAgICB9XG4gICAgaWYgKGJvZHkuZW1haWwgJiYgYm9keS5lbWFpbC5sZW5ndGggPiAwKSB7XG4gICAgICB1c2VyID0gYXdhaXQgT0F1dGhVc2VyLmZpbmRPbmUoe1xuICAgICAgICBlbWFpbDogYm9keS5lbWFpbCxcbiAgICAgIH0pLnBvcHVsYXRlKFwibG9naW5UeXBlc1wiKTtcbiAgICB9XG5cbiAgICBpZiAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgbGV0IHN1Y2Nlc3NmdWxMb2dpblBhc3N3b3JkcyA9IDA7XG5cbiAgICBpZiAoXG4gICAgICB1c2VyLm9uZVRpbWVDb2RlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIFwiXCIgKyBib2R5Lm9uZVRpbWVDb2RlID09PSBcIlwiICsgdXNlci5vbmVUaW1lQ29kZVxuICAgICkge1xuICAgICAgdXNlci5vbmVUaW1lQ29kZSA9IHVuZGVmaW5lZDtcbiAgICAgIGF3YWl0IHVzZXIuc2F2ZSgpO1xuXG4gICAgICAvLyBUT0RPOiBBZGQgdGltZXN0YW1wIGNoZWNraW5nXG4gICAgICAvLyBsZXQgbm93ID0gbmV3IERhdGUoKTtcbiAgICAgIC8vIGxldCBPbmVEYXlJblNlY29uZHMgPSA4NjQwMDtcblxuICAgICAgLy8gaWYgKFxuICAgICAgLy8gICBub3cuZ2V0VGltZSgpIC0gb25lVGltZUNvZGVJc3N1ZURhdGUudGltZXN0YW1wLmdldFRpbWUoKSA+XG4gICAgICAvLyAgIE9uZURheUluU2Vjb25kc1xuICAgICAgLy8gKSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKFwiRXhwaXJlZCBPbmUgVGltZSBDb2RlXCIpO1xuICAgICAgLy8gfSBlbHNlIHtcbiAgICAgIC8vICAgc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzKys7XG4gICAgICAvLyB9XG4gICAgICBzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMrKztcbiAgICB9XG5cbiAgICBmb3IgKGxldCBsb2dpblR5cGUgb2YgdXNlci5sb2dpblR5cGVzKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGJvZHkucGFzc3dvcmQgJiZcbiAgICAgICAgbG9naW5UeXBlLml0ZW10eXBlID09PSBcIlBhc3N3b3JkTG9naW5UeXBlXCIgJiZcbiAgICAgICAgdGhpcy52YWxpZFNlY3JldChcbiAgICAgICAgICBib2R5LnBhc3N3b3JkLFxuICAgICAgICAgIGxvZ2luVHlwZS5wYXNzd29yZFNhbHQsXG4gICAgICAgICAgbG9naW5UeXBlLnBhc3N3b3JkSGFzaFxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzKys7XG4gICAgICB9XG5cbiAgICAgIC8vIEJZT0tcbiAgICAgIGlmIChcbiAgICAgICAgYm9keS5wdWJsaWNBZGRyZXNzICYmXG4gICAgICAgIGJvZHkuc2lnbmF0dXJlICYmXG4gICAgICAgIGxvZ2luVHlwZS5pdGVtdHlwZSA9PT0gXCJQYXNzd29yZExvZ2luVHlwZVwiICYmXG4gICAgICAgIHRoaXMudmFsaWRCeW9rKGJvZHkucHVibGljQWRkcmVzcywgYm9keS5zaWduYXR1cmUsIHVzZXIuZGlkQWRkcmVzcylcbiAgICAgICkge1xuICAgICAgICBzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMrKztcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICBib2R5LmZhY2VUZW1wbGF0ZSAmJlxuICAgICAgICBsb2dpblR5cGUuaXRlbXR5cGUgPT09IFwiRmFjZUxvZ2luVHlwZVwiICYmXG4gICAgICAgIHRoaXMudmFsaWRTZWNyZXQoXG4gICAgICAgICAgYm9keS5mYWNlVGVtcGxhdGUsXG4gICAgICAgICAgbG9naW5UeXBlLmZhY2VHdWlkU2FsdCxcbiAgICAgICAgICBsb2dpblR5cGUuZmFjZUd1aWRIYXNoXG4gICAgICAgIClcbiAgICAgICkge1xuICAgICAgICBzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMrKztcbiAgICAgIH1cblxuICAgICAgaWYgKGJvZHkucGFsbVRlbXBsYXRlICYmIGxvZ2luVHlwZS5pdGVtdHlwZSA9PT0gXCJQYWxtTG9naW5UeXBlXCIpIHtcbiAgICAgICAgY29uc3QgbmV3dGVtcGxhdGVMaXN0ID0gYm9keS5wYWxtVGVtcGxhdGUuc3BsaXQoXCIsXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXd0ZW1wbGF0ZUxpc3QpO1xuICAgICAgICBjb25zdCBuZXdUZW1wbGF0ZSA9IFtdO1xuICAgICAgICBjb25zdCBuZXdQb2ludFRlbXBsYXRlID0gW107XG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTI4ICogMTI4Oykge1xuICAgICAgICAvLyAgIGNvbnN0IHJvdyA9IFtdO1xuICAgICAgICAvLyAgIGZvciAoOyBpIDwgMTI4OyBpKyspIHtcbiAgICAgICAgLy8gICAgIHJvdy5wdXNoKG5ld3RlbXBsYXRlTGlzdFtpXSk7XG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIG5ld1RlbXBsYXRlLnB1c2gocm93KTtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3IobGV0IGk9MDsgaTwxMjg7IGkrKyl7XG4gICAgICAgIC8vICAgZm9yKGxldCBqPTA7IGo8MTI4OyBqKyspe1xuICAgICAgICAvLyAgICAgaWYobmV3VGVtcGxhdGVbaV1bal0gPT09ICcxJykge1xuICAgICAgICAvLyAgICAgICBuZXdQb2ludFRlbXBsYXRlLnB1c2goW2ksal0pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gfVxuICAgICAgICBsZXQgbWluID0gMjE0NzQ4MzY0Ny4wOyAvLyBtYXggaW50XG4gICAgICAgIGxldCBtaW5faWQgPSAwO1xuICAgICAgICBsZXQgbWF0Y2hlZEluZGV4ID0gLTE7XG4gICAgICAgIGxldCBzdW0gPSAwO1xuICAgICAgICAvLyBUT0RPOlxuICAgICAgICAvLyBDYWxjdWxhdGUgQ2hhbWZlciBkaXN0YW5jZVxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZEZlYXR1cmVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgc3VtID0gMDtcbiAgICAgICAgLy8gYXJyYXkgb2YgcG9pbnRzIGZvciB0aGlzIHBhcnRpY3VsYXIgdGVtcGxhdGVcbiAgICAgICAgLy8gbGV0IHRlbXAgPSBzdG9yZWRGZWF0dXJlc1tpXS5mZWF0dXJlRGF0YTtcbiAgICAgICAgLy8gaWYgKHRlbXAubGVuZ3RoICE9IDApIHtcbiAgICAgICAgLy8gICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGVtcC5sZW5ndGg7ICsraikge1xuICAgICAgICAvLyAgICAgICAvLyBbMF0gaXMgeCBhbmQgWzFdIGlzIHlcbiAgICAgICAgLy8gICAgICAgc3VtICs9IGRpc3RhbmNlVHJhbnNJbWcudWNoYXJQdHIodGVtcFtqXVswXSwgdGVtcFtqXVsxXSlbMF07XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vICAgICBzdW0gPSBzdW0gLyAodGVtcC5sZW5ndGggKiAyNTUpO1xuICAgICAgICAvLyAgICAgaWYgKHN1bSA8IG1pbikge1xuICAgICAgICAvLyAgICAgICBtaW4gPSBzdW07XG4gICAgICAgIC8vICAgICAgIG1pbl9pZCA9IHN0b3JlZEZlYXR1cmVzW2ldLnVzZXJJZDtcbiAgICAgICAgLy8gICAgICAgbWF0Y2hlZEluZGV4ID0gaTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICB9XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzKys7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgYm9keS5zZWN1cml0eVF1ZXN0aW9ucyAmJlxuICAgICAgICBsb2dpblR5cGUuaXRlbXR5cGUgPT09IFwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIlxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IHNlY3VyaXR5UXVlc3Rpb25zID0gSlNPTi5wYXJzZShib2R5LnNlY3VyaXR5UXVlc3Rpb25zKTtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGNvbnN0IHNlY3VyaXR5UXVlc3Rpb24gb2Ygc2VjdXJpdHlRdWVzdGlvbnMpIHtcbiAgICAgICAgICBjb25zdCBtYXRjaCA9IGxvZ2luVHlwZS5zZWN1cml0eVF1ZXN0aW9ucy5maW5kKFxuICAgICAgICAgICAgKHNlY3VyaXR5UXVlc3Rpb25JdGVtKSA9PlxuICAgICAgICAgICAgICBzZWN1cml0eVF1ZXN0aW9uSXRlbS5xdWVzdGlvbiA9PT0gc2VjdXJpdHlRdWVzdGlvbi5xdWVzdGlvblxuICAgICAgICAgICk7XG4gICAgICAgICAgY29uc3QgaXNBbnN3ZXJWYWxpZCA9IHRoaXMudmFsaWRTZWNyZXQoXG4gICAgICAgICAgICBzZWN1cml0eVF1ZXN0aW9uLmFuc3dlcixcbiAgICAgICAgICAgIG1hdGNoLmFuc3dlclNhbHQsXG4gICAgICAgICAgICBtYXRjaC5hbnN3ZXJIYXNoXG4gICAgICAgICAgKTtcbiAgICAgICAgICBpZiAoIWlzQW5zd2VyVmFsaWQpIHtcbiAgICAgICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzID0gaXNWYWxpZFxuICAgICAgICAgID8gc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzICsgMVxuICAgICAgICAgIDogc3VjY2Vzc2Z1bExvZ2luUGFzc3dvcmRzO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmIChzdWNjZXNzZnVsTG9naW5QYXNzd29yZHMgPj0gUkVRVUlSRURfUEFTU1dPUkRTKSB7XG4gICAgICByZXR1cm4gdXNlcjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvLyBIZWxwZXJzXG4gIHZhbGlkU2VjcmV0ID0gZnVuY3Rpb24gKHBhc3N3b3JkLCBzZWNyZXRTYWx0LCBzZWNyZXRIYXNoKSB7XG4gICAgaWYgKFxuICAgICAgcGFzc3dvcmQgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgc2VjcmV0SGFzaCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICBzZWNyZXRTYWx0ID09PSB1bmRlZmluZWRcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICB2YXIgaGFzaCA9IGNyeXB0b1xuICAgICAgLnBia2RmMlN5bmMocGFzc3dvcmQsIHNlY3JldFNhbHQsIDEwMDAwLCA1MTIsIFwic2hhNTEyXCIpXG4gICAgICAudG9TdHJpbmcoXCJoZXhcIik7XG4gICAgcmV0dXJuIHNlY3JldEhhc2ggPT09IGhhc2g7XG4gIH07XG5cbiAgdmFsaWRCeW9rID0gZnVuY3Rpb24gKHB1YmxpY0FkZHJlc3MsIHNpZ25hdHVyZSwgdXNlclB1YmxpY0FkZHJlc3MpIHtcbiAgICBjb25zdCBzaWduZXIgPSBFdGhDcnlwdG8ucmVjb3ZlcihcbiAgICAgIHNpZ25hdHVyZSxcbiAgICAgIEV0aENyeXB0by5oYXNoLmtlY2NhazI1NihwdWJsaWNBZGRyZXNzKSAvLyBzaWduZWQgbWVzc2FnZSBoYXNoXG4gICAgKTtcblxuICAgIGlmIChcbiAgICAgIHNpZ25lciAhPT0gdW5kZWZpbmVkICYmXG4gICAgICBzaWduZXIudG9Mb3dlckNhc2UoKSA9PT0gdXNlclB1YmxpY0FkZHJlc3MudG9Mb3dlckNhc2UoKVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgZ2V0U2VjcmV0U2FsdEhhc2ggPSBmdW5jdGlvbiAocGFzc3dvcmQpIHtcbiAgICBjb25zdCBzYWx0ID0gY3J5cHRvLnJhbmRvbUJ5dGVzKDE2KS50b1N0cmluZyhcImhleFwiKTtcbiAgICBjb25zdCBoYXNoID0gY3J5cHRvXG4gICAgICAucGJrZGYyU3luYyhwYXNzd29yZCwgc2FsdCwgMTAwMDAsIDUxMiwgXCJzaGE1MTJcIilcbiAgICAgIC50b1N0cmluZyhcImhleFwiKTtcblxuICAgIHJldHVybiB7IHNhbHQ6IHNhbHQsIGhhc2g6IGhhc2ggfTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBNb25nb0RiQ2xpZW50O1xuIl19