"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _nodeFetch = _interopRequireDefault(require("node-fetch"));
var _randomUtil = require("../../util/random-util");
var _uuid = require("uuid");

const router = _express.default.Router();

router.post("/request-social-login-code", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* (req, res) {
    const user = yield common.dbClient.findUserByUserName(req.body.username);
    if (user === null || user === undefined) {
      return res.json({ matched: false });
    }
    const providingUser = yield common.dbClient.findUserByEmail(
    user.contactEmail);


    const loginUuid = (0, _uuid.v4)();

    yield common.dbClient.createSocialLogin(
    user._id,
    providingUser._id,
    loginUuid);


    const oneTimeCode = (0, _randomUtil.getRandomInt)(100000, 999999);
    yield common.dbClient.addOneTimeCode(user._id, oneTimeCode);

    const url = `${process.env.BACKEND_URI}/account/${user.username}/${oneTimeCode}/${loginUuid}`;
    const init = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        secret: process.env.AUTH_SECRET,
        sendSms: false,
        sendEmail: false }) };


    yield (0, _nodeFetch.default)(url, init);

    return res.status(200).json({ msg: "success" });
  });return function (_x, _x2) {return _ref.apply(this, arguments);};}());

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
var _default =
router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXBpL3NvY2lhbC1sb2dpbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsInJlcSIsInJlcyIsInVzZXIiLCJjb21tb24iLCJkYkNsaWVudCIsImZpbmRVc2VyQnlVc2VyTmFtZSIsImJvZHkiLCJ1c2VybmFtZSIsInVuZGVmaW5lZCIsImpzb24iLCJtYXRjaGVkIiwicHJvdmlkaW5nVXNlciIsImZpbmRVc2VyQnlFbWFpbCIsImNvbnRhY3RFbWFpbCIsImxvZ2luVXVpZCIsImNyZWF0ZVNvY2lhbExvZ2luIiwiX2lkIiwib25lVGltZUNvZGUiLCJhZGRPbmVUaW1lQ29kZSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EX1VSSSIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlY3JldCIsIkFVVEhfU0VDUkVUIiwic2VuZFNtcyIsInNlbmRFbWFpbCIsInN0YXR1cyIsIm1zZyJdLCJtYXBwaW5ncyI6IjZSQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxJQUFQLENBQVksNEJBQVosdUVBQTBDLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUM1RCxVQUFNQyxJQUFJLFNBQVNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsa0JBQWhCLENBQW1DTCxHQUFHLENBQUNNLElBQUosQ0FBU0MsUUFBNUMsQ0FBbkI7QUFDQSxRQUFJTCxJQUFJLEtBQUssSUFBVCxJQUFpQkEsSUFBSSxLQUFLTSxTQUE5QixFQUF5QztBQUN2QyxhQUFPUCxHQUFHLENBQUNRLElBQUosQ0FBUyxFQUFFQyxPQUFPLEVBQUUsS0FBWCxFQUFULENBQVA7QUFDRDtBQUNELFVBQU1DLGFBQWEsU0FBU1IsTUFBTSxDQUFDQyxRQUFQLENBQWdCUSxlQUFoQjtBQUMxQlYsSUFBQUEsSUFBSSxDQUFDVyxZQURxQixDQUE1Qjs7O0FBSUEsVUFBTUMsU0FBUyxHQUFHLGVBQWxCOztBQUVBLFVBQU1YLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlcsaUJBQWhCO0FBQ0piLElBQUFBLElBQUksQ0FBQ2MsR0FERDtBQUVKTCxJQUFBQSxhQUFhLENBQUNLLEdBRlY7QUFHSkYsSUFBQUEsU0FISSxDQUFOOzs7QUFNQSxVQUFNRyxXQUFXLEdBQUcsOEJBQWEsTUFBYixFQUFxQixNQUFyQixDQUFwQjtBQUNBLFVBQU1kLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmMsY0FBaEIsQ0FBK0JoQixJQUFJLENBQUNjLEdBQXBDLEVBQXlDQyxXQUF6QyxDQUFOOztBQUVBLFVBQU1FLEdBQUcsR0FBSSxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBWSxZQUFXcEIsSUFBSSxDQUFDSyxRQUFTLElBQUdVLFdBQVksSUFBR0gsU0FBVSxFQUE1RjtBQUNBLFVBQU1TLElBQUksR0FBRztBQUNYQyxNQUFBQSxNQUFNLEVBQUUsTUFERztBQUVYQyxNQUFBQSxPQUFPLEVBQUUsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBRkU7QUFHWG5CLE1BQUFBLElBQUksRUFBRW9CLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ25CQyxRQUFBQSxNQUFNLEVBQUVSLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUSxXQUREO0FBRW5CQyxRQUFBQSxPQUFPLEVBQUUsS0FGVTtBQUduQkMsUUFBQUEsU0FBUyxFQUFFLEtBSFEsRUFBZixDQUhLLEVBQWI7OztBQVNBLFVBQU0sd0JBQU1aLEdBQU4sRUFBV0ksSUFBWCxDQUFOOztBQUVBLFdBQU90QixHQUFHLENBQUMrQixNQUFKLENBQVcsR0FBWCxFQUFnQnZCLElBQWhCLENBQXFCLEVBQUV3QixHQUFHLEVBQUUsU0FBUCxFQUFyQixDQUFQO0FBQ0QsR0FqQ0Q7O0FBbUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRWVyQyxNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4uLy4uL3V0aWwvcmFuZG9tLXV0aWxcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5wb3N0KFwiL3JlcXVlc3Qtc29jaWFsLWxvZ2luLWNvZGVcIiwgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IHVzZXIgPSBhd2FpdCBjb21tb24uZGJDbGllbnQuZmluZFVzZXJCeVVzZXJOYW1lKHJlcS5ib2R5LnVzZXJuYW1lKTtcbiAgaWYgKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlcy5qc29uKHsgbWF0Y2hlZDogZmFsc2UgfSk7XG4gIH1cbiAgY29uc3QgcHJvdmlkaW5nVXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5maW5kVXNlckJ5RW1haWwoXG4gICAgdXNlci5jb250YWN0RW1haWxcbiAgKTtcblxuICBjb25zdCBsb2dpblV1aWQgPSB1dWlkdjQoKTtcblxuICBhd2FpdCBjb21tb24uZGJDbGllbnQuY3JlYXRlU29jaWFsTG9naW4oXG4gICAgdXNlci5faWQsXG4gICAgcHJvdmlkaW5nVXNlci5faWQsXG4gICAgbG9naW5VdWlkXG4gICk7XG5cbiAgY29uc3Qgb25lVGltZUNvZGUgPSBnZXRSYW5kb21JbnQoMTAwMDAwLCA5OTk5OTkpO1xuICBhd2FpdCBjb21tb24uZGJDbGllbnQuYWRkT25lVGltZUNvZGUodXNlci5faWQsIG9uZVRpbWVDb2RlKTtcblxuICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSSX0vYWNjb3VudC8ke3VzZXIudXNlcm5hbWV9LyR7b25lVGltZUNvZGV9LyR7bG9naW5VdWlkfWA7XG4gIGNvbnN0IGluaXQgPSB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVCxcbiAgICAgIHNlbmRTbXM6IGZhbHNlLFxuICAgICAgc2VuZEVtYWlsOiBmYWxzZSxcbiAgICB9KSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtc2c6IFwic3VjY2Vzc1wiIH0pO1xufSk7XG5cbi8vIHJvdXRlci5nZXQoJy9wcm92aWRlLXNvY2lhbC1sb2dpbi1jb2RlLzp1dWlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgIGxldCB1dWlkID0gcmVxLnBhcmFtcy51dWlkO1xuXG4vLyAgIGxldCBzb2NpYWxMb2dpbiA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5maW5kU29jaWFsTG9naW5CeVV1aWQodXVpZCk7XG5cbi8vICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5nZXRVc2VyQnlJZChzb2NpYWxMb2dpbi5yZXF1ZXN0aW5nVXNlcklkKTtcbi8vICAgY29uc3Qgb25lVGltZUNvZGUgPSBnZXRSYW5kb21JbnQoMTAwMDAwLCA5OTk5OTkpO1xuXG4vLyAgIGF3YWl0IGNvbW1vbi5kYkNsaWVudC5hZGRPbmVUaW1lQ29kZShcbi8vICAgICBzb2NpYWxMb2dpbi5yZXF1ZXN0aW5nVXNlcklkLFxuLy8gICAgIG9uZVRpbWVDb2RlXG4vLyAgICk7XG5cbi8vICAgY29uc3Qgc2VuZCA9IHJlcXVpcmUoJ2dtYWlsLXNlbmQnKSh7XG4vLyAgICAgdXNlcjogJ215cGFzcy5hdXN0aW5hdHhAZ21haWwuY29tJyxcbi8vICAgICBwYXNzOiBwcm9jZXNzLmVudi5NWVBBU1NfR01BSUxfUEFTU1dPUkQsXG4vLyAgICAgdG86IHVzZXIuZW1haWwsXG4vLyAgICAgc3ViamVjdDogYE9uZSB0aW1lIGxvZ2luIGNvZGU6ICR7b25lVGltZUNvZGV9YCxcbi8vICAgfSk7XG5cbi8vICAgc2VuZChcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiBgWW91IGhhdmUgMjQgaG91cnMgdG8gbG9naW4gd2l0aCB5b3VyIG9uZSB0aW1lIGxvZ2luIGNvZGU6ICR7b25lVGltZUNvZGV9YCxcbi8vICAgICB9LFxuLy8gICAgIChlcnJvciwgcmVzdWx0LCBmdWxsUmVzdWx0KSA9PiB7XG4vLyAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuLy8gICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICB9XG4vLyAgICk7XG5cbi8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtc2c6ICdzdWNjZXNzJyB9KTtcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=