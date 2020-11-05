"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var express = _interopRequireWildcard(require("express"));
var _common = _interopRequireDefault(require("../common/common"));
var _randomUtil = require("../util/random-util");
var _uuid = require("uuid");
var _auth = _interopRequireDefault(require("../middleware/auth"));

let fetch;
if (!process.env.BROWSER) {
  fetch = require("node-fetch");
} else {
  fetch = window.fetch;
}

class UserController {



  constructor() {(0, _defineProperty2.default)(this, "path", "/users");(0, _defineProperty2.default)(this, "router", express.Router());(0, _defineProperty2.default)(this, "getLoginInfoByUsernameOrEmail", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(


















      function* (request, response) {
        try {
          const usernameOrEmail = request.body.usernameOrEmail;

          let res = yield _common.default.dbClient.getLoginInfoByUsernameOrEmail(
          usernameOrEmail);


          return response.json(res);
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x, _x2) {return _ref.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "deleteMyAccount", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(
      function* (request, response) {
        try {
          let username = request.payload.username;
          let res = yield _common.default.dbClient.deleteOAuthUser(username);
          return response.json({ ...res, username });
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "sendTextOTP", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(


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
          const url = `${process.env.BACKEND_URI}/send-code/account/${user.username}/${oneTimeCode}/${loginUuid}`;
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
      });return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "sendHelperTextOTP", /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2.default)(

      function* (req, res) {
        try {
          const user = yield _common.default.dbClient.findUserByUsernameOrEmail(
          req.body.username);

          console.log(" send text to helper ");
          if (user === null || user === undefined) {
            return res.status(500).json({ matched: false });
          }

          const oneTimeCode = (0, _randomUtil.getRandomInt)(100000, 999999);
          yield _common.default.dbClient.addOneTimeCode(user._id, oneTimeCode);

          const loginUuid = (0, _uuid.v4)();
          const url = `${process.env.BACKEND_URI}/send-helper-code/account/${user.username}/${oneTimeCode}/${loginUuid}`;
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
      });return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());this.initializeRoutes();return this.router;}initializeRoutes() {this.router.post(this.path + "/login-info", this.getLoginInfoByUsernameOrEmail);this.router.post(this.path + "/send-text-otp", this.sendTextOTP);this.router.post(this.path + "/send-helper-text-otp", this.sendHelperTextOTP);this.router.delete("/my-account", _auth.default.required, this.deleteMyAccount);} // client
}var _default =

UserController;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9Vc2VyQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwicmVxdWlyZSIsIndpbmRvdyIsIlVzZXJDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJleHByZXNzIiwiUm91dGVyIiwicmVxdWVzdCIsInJlc3BvbnNlIiwidXNlcm5hbWVPckVtYWlsIiwiYm9keSIsInJlcyIsImNvbW1vbiIsImRiQ2xpZW50IiwiZ2V0TG9naW5JbmZvQnlVc2VybmFtZU9yRW1haWwiLCJqc29uIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJzdGF0dXMiLCJzZW5kIiwidXNlcm5hbWUiLCJwYXlsb2FkIiwiZGVsZXRlT0F1dGhVc2VyIiwicmVxIiwidXNlciIsImZpbmRVc2VyQnlVc2VybmFtZU9yRW1haWwiLCJsb2ciLCJ1bmRlZmluZWQiLCJtYXRjaGVkIiwib25lVGltZUNvZGUiLCJhZGRPbmVUaW1lQ29kZSIsIl9pZCIsImxvZ2luVXVpZCIsInVybCIsIkJBQ0tFTkRfVVJJIiwiaW5pdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VjcmV0IiwiQVVUSF9TRUNSRVQiLCJzZW5kU21zIiwibXNnIiwiaW5pdGlhbGl6ZVJvdXRlcyIsInJvdXRlciIsInBvc3QiLCJwYXRoIiwic2VuZFRleHRPVFAiLCJzZW5kSGVscGVyVGV4dE9UUCIsImRlbGV0ZSIsImF1dGgiLCJyZXF1aXJlZCIsImRlbGV0ZU15QWNjb3VudCJdLCJtYXBwaW5ncyI6Im9kQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBSUEsS0FBSjtBQUNBLElBQUksQ0FBQ0MsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWpCLEVBQTBCO0FBQ3hCSCxFQUFBQSxLQUFLLEdBQUdJLE9BQU8sQ0FBQyxZQUFELENBQWY7QUFDRCxDQUZELE1BRU87QUFDTEosRUFBQUEsS0FB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QUFaLENBQW1CLGFBQW5CLEVBQWtDQyxjQUFLQyxRQUF2QyxFQUFpRCxLQUFLQyxlQUF0RCxFQUNELENBcEJrQixDQXNCbkI7QUF0Qm1CLEM7O0FBaUhOcEQsYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21tb24gZnJvbSBcIi4uL2NvbW1vbi9jb21tb25cIjtcbmltcG9ydCB7IGdldFJhbmRvbUludCB9IGZyb20gXCIuLi91dGlsL3JhbmRvbS11dGlsXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuaW1wb3J0IGF1dGggZnJvbSBcIi4uL21pZGRsZXdhcmUvYXV0aFwiO1xuXG5sZXQgZmV0Y2g7XG5pZiAoIXByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgZmV0Y2ggPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcbn0gZWxzZSB7XG4gIGZldGNoID0gd2luZG93LmZldGNoO1xufVxuXG5jbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIHBhdGggPSBcIi91c2Vyc1wiO1xuICByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVJvdXRlcygpO1xuICAgIHJldHVybiB0aGlzLnJvdXRlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVSb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIucG9zdChcbiAgICAgIHRoaXMucGF0aCArIFwiL2xvZ2luLWluZm9cIixcbiAgICAgIHRoaXMuZ2V0TG9naW5JbmZvQnlVc2VybmFtZU9yRW1haWxcbiAgICApO1xuICAgIHRoaXMucm91dGVyLnBvc3QodGhpcy5wYXRoICsgXCIvc2VuZC10ZXh0LW90cFwiLCB0aGlzLnNlbmRUZXh0T1RQKTtcbiAgICB0aGlzLnJvdXRlci5wb3N0KFxuICAgICAgdGhpcy5wYXRoICsgXCIvc2VuZC1oZWxwZXItdGV4dC1vdHBcIixcbiAgICAgIHRoaXMuc2VuZEhlbHBlclRleHRPVFBcbiAgICApO1xuICAgIHRoaXMucm91dGVyLmRlbGV0ZShcIi9teS1hY2NvdW50XCIsIGF1dGgucmVxdWlyZWQsIHRoaXMuZGVsZXRlTXlBY2NvdW50KTtcbiAgfVxuXG4gIC8vIGNsaWVudFxuICBnZXRMb2dpbkluZm9CeVVzZXJuYW1lT3JFbWFpbCA9IGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VybmFtZU9yRW1haWwgPSByZXF1ZXN0LmJvZHkudXNlcm5hbWVPckVtYWlsO1xuXG4gICAgICBsZXQgcmVzID0gYXdhaXQgY29tbW9uLmRiQ2xpZW50LmdldExvZ2luSW5mb0J5VXNlcm5hbWVPckVtYWlsKFxuICAgICAgICB1c2VybmFtZU9yRW1haWxcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKHJlcyk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZChcIlNvbWV0aGluZyBicm9rZSFcIik7XG4gICAgfVxuICB9O1xuICBkZWxldGVNeUFjY291bnQgPSBhc3luYyAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHVzZXJuYW1lID0gcmVxdWVzdC5wYXlsb2FkLnVzZXJuYW1lO1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5kZWxldGVPQXV0aFVzZXIodXNlcm5hbWUpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oeyAuLi5yZXMsIHVzZXJuYW1lIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoXCJTb21ldGhpbmcgYnJva2UhXCIpO1xuICAgIH1cbiAgfTtcblxuICAvLyBzZXJ2ZXJcbiAgc2VuZFRleHRPVFAgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5maW5kVXNlckJ5VXNlcm5hbWVPckVtYWlsKFxuICAgICAgICByZXEuYm9keS51c2VybmFtZVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKHJlcS5ib2R5LnVzZXJuYW1lKTtcbiAgICAgIGNvbnNvbGUubG9nKHVzZXIpO1xuICAgICAgaWYgKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1hdGNoZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbmVUaW1lQ29kZSA9IGdldFJhbmRvbUludCgxMDAwMDAsIDk5OTk5OSk7XG4gICAgICBhd2FpdCBjb21tb24uZGJDbGllbnQuYWRkT25lVGltZUNvZGUodXNlci5faWQsIG9uZVRpbWVDb2RlKTtcblxuICAgICAgY29uc3QgbG9naW5VdWlkID0gdXVpZHY0KCk7XG4gICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSSX0vc2VuZC1jb2RlL2FjY291bnQvJHt1c2VyLnVzZXJuYW1lfS8ke29uZVRpbWVDb2RlfS8ke2xvZ2luVXVpZH1gO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgc2VjcmV0OiBwcm9jZXNzLmVudi5BVVRIX1NFQ1JFVCxcbiAgICAgICAgICBzZW5kU21zOiB0cnVlLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHsgbXNnOiBcInN1Y2Nlc3NcIiB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKFwiU29tZXRoaW5nIGJyb2tlIVwiKTtcbiAgICB9XG4gIH07XG5cbiAgc2VuZEhlbHBlclRleHRPVFAgPSBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5maW5kVXNlckJ5VXNlcm5hbWVPckVtYWlsKFxuICAgICAgICByZXEuYm9keS51c2VybmFtZVxuICAgICAgKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiIHNlbmQgdGV4dCB0byBoZWxwZXIgXCIpO1xuICAgICAgaWYgKHVzZXIgPT09IG51bGwgfHwgdXNlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiByZXMuc3RhdHVzKDUwMCkuanNvbih7IG1hdGNoZWQ6IGZhbHNlIH0pO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBvbmVUaW1lQ29kZSA9IGdldFJhbmRvbUludCgxMDAwMDAsIDk5OTk5OSk7XG4gICAgICBhd2FpdCBjb21tb24uZGJDbGllbnQuYWRkT25lVGltZUNvZGUodXNlci5faWQsIG9uZVRpbWVDb2RlKTtcblxuICAgICAgY29uc3QgbG9naW5VdWlkID0gdXVpZHY0KCk7XG4gICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSSX0vc2VuZC1oZWxwZXItY29kZS9hY2NvdW50LyR7dXNlci51c2VybmFtZX0vJHtvbmVUaW1lQ29kZX0vJHtsb2dpblV1aWR9YDtcbiAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQsXG4gICAgICAgICAgc2VuZFNtczogdHJ1ZSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgICAgYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICAgIHJldHVybiByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1zZzogXCJzdWNjZXNzXCIgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZChcIlNvbWV0aGluZyBicm9rZSFcIik7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyQ29udHJvbGxlcjtcbiJdfQ==