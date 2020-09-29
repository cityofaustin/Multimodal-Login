"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var express = _interopRequireWildcard(require("express"));
var _common = _interopRequireDefault(require("../common/common"));
var _randomUtil = require("../util/random-util");
var _uuid = require("uuid");

let fetch;
if (!process.env.BROWSER) {
  fetch = require('node-fetch');
} else {
  fetch = window.fetch;
}

class UserController {



  constructor() {(0, _defineProperty2.default)(this, "path", "/users");(0, _defineProperty2.default)(this, "router", express.Router());(0, _defineProperty2.default)(this, "findByUsernameOrEmail", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(













      function* (request, response) {
        try {
          const usernameOrEmail = request.body.usernameOrEmail;
          let res = yield _common.default.dbClient.getLoginMethodsByUsernameOrEmail(
          usernameOrEmail);

          return response.json(res);
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x, _x2) {return _ref.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "sendTextOTP", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(


      function* (req, res) {
        try {
          const user = yield _common.default.dbClient.findUserByUsernameOrEmail(
          req.body.username);

          console.log(req.body.username);
          console.log(user);
          if (user === null || user === undefined) {
            return res.status(500).json({ matched: false });
          }

          const oneTimeCode = (0, _randomUtil.getRandomInt)(100000, 999999);
          yield _common.default.dbClient.addOneTimeCode(user._id, oneTimeCode);

          const loginUuid = (0, _uuid.v4)();
          const url = `${process.env.BACKEND_URI}/account/${user.username}/${oneTimeCode}/${loginUuid}`;
          const init = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              secret: process.env.AUTH_SECRET,
              sendSms: true }) };


          yield fetch(url, init);
          return res.status(200).json({ msg: "success" });
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());this.initializeRoutes();return this.router;}initializeRoutes() {this.router.post(this.path + "/find-by-username-or-email", this.findByUsernameOrEmail);this.router.post(this.path + "/send-text-otp", this.sendTextOTP);} // client
}var _default =

UserController;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwicmVxdWlyZSIsIndpbmRvdyIsIlVzZXJDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJleHByZXNzIiwiUm91dGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwidXNlcm5hbWVPckVtYWlsIiwiYm9keSIsInJlcyIsImNvbW1vbiIsImRiQ2xpZW50IiwiZ2V0TG9naW5NZXRob2RzQnlVc2VybmFtZU9yRW1haWwiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJzdGF0dXMiLCJzZW5kIiwicmVxIiwidXNlciIsImZpbmRVc2VyQnlVc2VybmFtZU9yRW1haWwiLCJ1c2VybmFtZSIsImxvZyIsInVuZGVmaW5lZCIsIm1hdGNoZWQiLCJvbmVUaW1lQ29kZSIsImFkZE9uZVRpbWVDb2RlIiwiX2lkIiwibG9naW5VdWlkIiwidXJsIiwiQkFDS0VORF9VUkkiLCJpbml0IiwibWV0aG9kIiwiaGVhZGVycyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzZWNyZXQiLCJBVVRIX1NFQ1JFVCIsInNlbmRTbXMiLCJtc2ciLCJpbml0aWFsaXplUm91dGVzIiwicm91dGVyIiwicG9zdCIsInBhdGgiLCJmaW5kQnlVc2VybmFtZU9yRW1haWwiLCJzZW5kVGV4dE9UUCJdLCJtYXBwaW5ncyI6Im9kQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEtBQUo7QUFDQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFqQixFQUEwQjtBQUN4QkgsRUFBQUEsS0FBSyxHQUFHSSxPQUFPLENBQUMsWUFBRCxDQUFmO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xKLEVBQUFBLEtBQUssR0FBR0ssTUFBTSxDQUFDTCxLQUFmO0FBQ0Q7O0FBRUQsTUFBTU0sY0FBTixDQUFxQjs7OztBQUluQkMsRUFBQUEsV0FB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SCxNQUFMLENBQVlDLElBQVosQ0FBaUIsS0FBS0MsSUFBTCxHQUFZLGdCQUE3QixFQUErQyxLQUFLRSxXQUFwRCxFQUNELENBZmtCLENBaUJuQjtBQWpCbUIsQzs7QUFpRU45QyxjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IGNvbW1vbiBmcm9tIFwiLi4vY29tbW9uL2NvbW1vblwiO1xuaW1wb3J0IHsgZ2V0UmFuZG9tSW50IH0gZnJvbSBcIi4uL3V0aWwvcmFuZG9tLXV0aWxcIjtcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gXCJ1dWlkXCI7XG5cbmxldCBmZXRjaDtcbmlmICghcHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBmZXRjaCA9IHJlcXVpcmUoJ25vZGUtZmV0Y2gnKTtcbn0gZWxzZSB7XG4gIGZldGNoID0gd2luZG93LmZldGNoO1xufVxuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHBhdGggPSBcIi91c2Vyc1wiO1xuICByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVJvdXRlcygpO1xuICAgIHJldHVybiB0aGlzLnJvdXRlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVSb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIucG9zdChcbiAgICAgIHRoaXMucGF0aCArIFwiL2ZpbmQtYnktdXNlcm5hbWUtb3ItZW1haWxcIixcbiAgICAgIHRoaXMuZmluZEJ5VXNlcm5hbWVPckVtYWlsXG4gICAgKTtcbiAgICB0aGlzLnJvdXRlci5wb3N0KHRoaXMucGF0aCArIFwiL3NlbmQtdGV4dC1vdHBcIiwgdGhpcy5zZW5kVGV4dE9UUCk7XG4gIH1cblxuICAvLyBjbGllbnRcbiAgZmluZEJ5VXNlcm5hbWVPckVtYWlsID0gYXN5bmMgKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJuYW1lT3JFbWFpbCA9IHJlcXVlc3QuYm9keS51c2VybmFtZU9yRW1haWw7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgY29tbW9uLmRiQ2xpZW50LmdldExvZ2luTWV0aG9kc0J5VXNlcm5hbWVPckVtYWlsKFxuICAgICAgICB1c2VybmFtZU9yRW1haWxcbiAgICAgICk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbihyZXMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoXCJTb21ldGhpbmcgYnJva2UhXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBzZXJ2ZXJcbiAgc2VuZFRleHRPVFAgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5maW5kVXNlckJ5VXNlcm5hbWVPckVtYWlsKFxuICAgICAgICByZXEuYm9keS51c2VybmFtZVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LnVzZXJuYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgaWYgKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1hdGNoZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbmVUaW1lQ29kZSA9IGdldFJhbmRvbUludCgxMDAwMDAsIDk5OTk5OSk7XG4gICAgICBhd2FpdCBjb21tb24uZGJDbGllbnQuYWRkT25lVGltZUNvZGUodXNlci5faWQsIG9uZVRpbWVDb2RlKTtcblxuICAgICAgY29uc3QgbG9naW5VdWlkID0gdXVpZHY0KCk7XG4gICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSSX0vYWNjb3VudC8ke3VzZXIudXNlcm5hbWV9LyR7b25lVGltZUNvZGV9LyR7bG9naW5VdWlkfWA7XG4gICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICBzZWNyZXQ6IHByb2Nlc3MuZW52LkFVVEhfU0VDUkVULFxuICAgICAgICAgIHNlbmRTbXM6IHRydWUsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtc2c6IFwic3VjY2Vzc1wiIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoXCJTb21ldGhpbmcgYnJva2UhXCIpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVXNlckNvbnRyb2xsZXI7XG4iXX0=