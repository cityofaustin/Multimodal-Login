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

    const url = `${process.env.BACKEND_URI}/send-code/account/${user.username}/${oneTimeCode}/${loginUuid}`;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXBpL3NvY2lhbC1sb2dpbi5qcyJdLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsInJlcSIsInJlcyIsInVzZXIiLCJjb21tb24iLCJkYkNsaWVudCIsImZpbmRVc2VyQnlVc2VyTmFtZSIsImJvZHkiLCJ1c2VybmFtZSIsInVuZGVmaW5lZCIsImpzb24iLCJtYXRjaGVkIiwicHJvdmlkaW5nVXNlciIsImZpbmRVc2VyQnlFbWFpbCIsImNvbnRhY3RFbWFpbCIsImxvZ2luVXVpZCIsImNyZWF0ZVNvY2lhbExvZ2luIiwiX2lkIiwib25lVGltZUNvZGUiLCJhZGRPbmVUaW1lQ29kZSIsInVybCIsInByb2Nlc3MiLCJlbnYiLCJCQUNLRU5EX1VSSSIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlY3JldCIsIkFVVEhfU0VDUkVUIiwic2VuZFNtcyIsInNlbmRFbWFpbCIsInN0YXR1cyIsIm1zZyJdLCJtYXBwaW5ncyI6IjZSQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxJQUFQLENBQVksNEJBQVosdUVBQTBDLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUM1RCxVQUFNQyxJQUFJLFNBQVNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsa0JBQWhCLENBQW1DTCxHQUFHLENBQUNNLElBQUosQ0FBU0MsUUFBNUMsQ0FBbkI7QUFDQSxRQUFJTCxJQUFJLEtBQUssSUFBVCxJQUFpQkEsSUFBSSxLQUFLTSxTQUE5QixFQUF5QztBQUN2QyxhQUFPUCxHQUFHLENBQUNRLElBQUosQ0FBUyxFQUFFQyxPQUFPLEVBQUUsS0FBWCxFQUFULENBQVA7QUFDRDtBQUNELFVBQU1DLGFBQWEsU0FBU1IsTUFBTSxDQUFDQyxRQUFQLENBQWdCUSxlQUFoQjtBQUMxQlYsSUFBQUEsSUFBSSxDQUFDVyxZQURxQixDQUE1Qjs7O0FBSUEsVUFBTUMsU0FBUyxHQUFHLGVBQWxCOztBQUVBLFVBQU1YLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQlcsaUJBQWhCO0FBQ0piLElBQUFBLElBQUksQ0FBQ2MsR0FERDtBQUVKTCxJQUFBQSxhQUFhLENBQUNLLEdBRlY7QUFHSkYsSUFBQUEsU0FISSxDQUFOOzs7QUFNQSxVQUFNRyxXQUFXLEdBQUcsOEJBQWEsTUFBYixFQUFxQixNQUFyQixDQUFwQjtBQUNBLFVBQU1kLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQmMsY0FBaEIsQ0FBK0JoQixJQUFJLENBQUNjLEdBQXBDLEVBQXlDQyxXQUF6QyxDQUFOOztBQUVBLFVBQU1FLEdBQUcsR0FBSSxHQUFFQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FBWSxzQkFBcUJwQixJQUFJLENBQUNLLFFBQVMsSUFBR1UsV0FBWSxJQUFHSCxTQUFVLEVBQXRHO0FBQ0EsVUFBTVMsSUFBSSxHQUFHO0FBQ1hDLE1BQUFBLE1BQU0sRUFBRSxNQURHO0FBRVhDLE1BQUFBLE9BQU8sRUFBRSxFQUFFLGdCQUFnQixrQkFBbEIsRUFGRTtBQUdYbkIsTUFBQUEsSUFBSSxFQUFFb0IsSUFBSSxDQUFDQyxTQUFMLENBQWU7QUFDbkJDLFFBQUFBLE1BQU0sRUFBRVIsT0FBTyxDQUFDQyxHQUFSLENBQVlRLFdBREQ7QUFFbkJDLFFBQUFBLE9BQU8sRUFBRSxLQUZVO0FBR25CQyxRQUFBQSxTQUFTLEVBQUUsS0FIUSxFQUFmLENBSEssRUFBYjs7O0FBU0EsVUFBTSx3QkFBTVosR0FBTixFQUFXSSxJQUFYLENBQU47O0FBRUEsV0FBT3RCLEdBQUcsQ0FBQytCLE1BQUosQ0FBVyxHQUFYLEVBQWdCdkIsSUFBaEIsQ0FBcUIsRUFBRXdCLEdBQUcsRUFBRSxTQUFQLEVBQXJCLENBQVA7QUFDRCxHQWpDRDs7QUFtQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFZXJDLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJub2RlLWZldGNoXCI7XG5pbXBvcnQgeyBnZXRSYW5kb21JbnQgfSBmcm9tIFwiLi4vLi4vdXRpbC9yYW5kb20tdXRpbFwiO1xuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSBcInV1aWRcIjtcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoXCIvcmVxdWVzdC1zb2NpYWwtbG9naW4tY29kZVwiLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgdXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5maW5kVXNlckJ5VXNlck5hbWUocmVxLmJvZHkudXNlcm5hbWUpO1xuICBpZiAodXNlciA9PT0gbnVsbCB8fCB1c2VyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gcmVzLmpzb24oeyBtYXRjaGVkOiBmYWxzZSB9KTtcbiAgfVxuICBjb25zdCBwcm92aWRpbmdVc2VyID0gYXdhaXQgY29tbW9uLmRiQ2xpZW50LmZpbmRVc2VyQnlFbWFpbChcbiAgICB1c2VyLmNvbnRhY3RFbWFpbFxuICApO1xuXG4gIGNvbnN0IGxvZ2luVXVpZCA9IHV1aWR2NCgpO1xuXG4gIGF3YWl0IGNvbW1vbi5kYkNsaWVudC5jcmVhdGVTb2NpYWxMb2dpbihcbiAgICB1c2VyLl9pZCxcbiAgICBwcm92aWRpbmdVc2VyLl9pZCxcbiAgICBsb2dpblV1aWRcbiAgKTtcblxuICBjb25zdCBvbmVUaW1lQ29kZSA9IGdldFJhbmRvbUludCgxMDAwMDAsIDk5OTk5OSk7XG4gIGF3YWl0IGNvbW1vbi5kYkNsaWVudC5hZGRPbmVUaW1lQ29kZSh1c2VyLl9pZCwgb25lVGltZUNvZGUpO1xuXG4gIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJJfS9zZW5kLWNvZGUvYWNjb3VudC8ke3VzZXIudXNlcm5hbWV9LyR7b25lVGltZUNvZGV9LyR7bG9naW5VdWlkfWA7XG4gIGNvbnN0IGluaXQgPSB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVCxcbiAgICAgIHNlbmRTbXM6IGZhbHNlLFxuICAgICAgc2VuZEVtYWlsOiBmYWxzZSxcbiAgICB9KSxcbiAgfTtcbiAgYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcblxuICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtc2c6IFwic3VjY2Vzc1wiIH0pO1xufSk7XG5cbi8vIHJvdXRlci5nZXQoJy9wcm92aWRlLXNvY2lhbC1sb2dpbi1jb2RlLzp1dWlkJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4vLyAgIGxldCB1dWlkID0gcmVxLnBhcmFtcy51dWlkO1xuXG4vLyAgIGxldCBzb2NpYWxMb2dpbiA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5maW5kU29jaWFsTG9naW5CeVV1aWQodXVpZCk7XG5cbi8vICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5nZXRVc2VyQnlJZChzb2NpYWxMb2dpbi5yZXF1ZXN0aW5nVXNlcklkKTtcbi8vICAgY29uc3Qgb25lVGltZUNvZGUgPSBnZXRSYW5kb21JbnQoMTAwMDAwLCA5OTk5OTkpO1xuXG4vLyAgIGF3YWl0IGNvbW1vbi5kYkNsaWVudC5hZGRPbmVUaW1lQ29kZShcbi8vICAgICBzb2NpYWxMb2dpbi5yZXF1ZXN0aW5nVXNlcklkLFxuLy8gICAgIG9uZVRpbWVDb2RlXG4vLyAgICk7XG5cbi8vICAgY29uc3Qgc2VuZCA9IHJlcXVpcmUoJ2dtYWlsLXNlbmQnKSh7XG4vLyAgICAgdXNlcjogJ215cGFzcy5hdXN0aW5hdHhAZ21haWwuY29tJyxcbi8vICAgICBwYXNzOiBwcm9jZXNzLmVudi5NWVBBU1NfR01BSUxfUEFTU1dPUkQsXG4vLyAgICAgdG86IHVzZXIuZW1haWwsXG4vLyAgICAgc3ViamVjdDogYE9uZSB0aW1lIGxvZ2luIGNvZGU6ICR7b25lVGltZUNvZGV9YCxcbi8vICAgfSk7XG5cbi8vICAgc2VuZChcbi8vICAgICB7XG4vLyAgICAgICB0ZXh0OiBgWW91IGhhdmUgMjQgaG91cnMgdG8gbG9naW4gd2l0aCB5b3VyIG9uZSB0aW1lIGxvZ2luIGNvZGU6ICR7b25lVGltZUNvZGV9YCxcbi8vICAgICB9LFxuLy8gICAgIChlcnJvciwgcmVzdWx0LCBmdWxsUmVzdWx0KSA9PiB7XG4vLyAgICAgICBpZiAoZXJyb3IpIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuLy8gICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbi8vICAgICB9XG4vLyAgICk7XG5cbi8vICAgcmVzLnN0YXR1cygyMDApLmpzb24oeyBtc2c6ICdzdWNjZXNzJyB9KTtcbi8vIH0pO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=