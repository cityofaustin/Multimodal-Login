"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var express = _interopRequireWildcard(require("express"));
var _auth = _interopRequireDefault(require("../middleware/auth"));
var _common = _interopRequireDefault(require("../common/common"));

let fetch;
if (!process.env.BROWSER) {
  fetch = require("node-fetch");
} else {
  fetch = window.fetch;
}

class LoginMethodController {



  constructor() {(0, _defineProperty2.default)(this, "path", "/login-methods");(0, _defineProperty2.default)(this, "router", express.Router());(0, _defineProperty2.default)(this, "getLoginMethods", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(















      function* (request, response) {
        try {
          let username = request.payload.username;
          let res = yield _common.default.dbClient.getLoginInfoByUsernameOrEmail(username);
          return response.json({ ...res, username });
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x, _x2) {return _ref.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "saveLoginMethod", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(

      function* (request, response) {
        try {
          let username = request.payload.username;
          let res = yield _common.default.dbClient.saveLoginMethod(username, {
            password: request.body.password,
            palmTemplate: request.body.palmTemplate,
            text: request.body.text,
            securityQuestions: request.body.securityQuestions });

          if (request.body.text) {
            try {
              const url = `${process.env.BACKEND_URI}/accounts/set-phone-number`;
              const init = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  secret: process.env.AUTH_SECRET,
                  username,
                  phoneNumber: request.body.text }) };


              yield fetch(url, init);
            } catch (err) {
              console.error(err.stack);
              return response.status(500).send("Something broke!");
            }
          }
          return response.json({ ...res });
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "deleteLoginMethod", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(

      function* (request, response) {
        try {
          let username = request.payload.username;
          let loginMethod = request.params.loginMethod;
          yield _common.default.dbClient.deleteLoginMethod(username, loginMethod);
          return response.status(200).json({ message: "success" });
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());this.initializeRoutes();return this.router;}initializeRoutes() {this.router.get(this.path, _auth.default.required, this.getLoginMethods);this.router.put(this.path, _auth.default.required, this.saveLoginMethod);this.router.post(this.path, _auth.default.required, this.saveLoginMethod);this.router.delete(this.path + "/:loginMethod", _auth.default.required, this.deleteLoginMethod);}}var _default =


LoginMethodController;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9Mb2dpbk1ldGhvZENvbnRyb2xsZXIuanMiXSwibmFtZXMiOlsiZmV0Y2giLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsInJlcXVpcmUiLCJ3aW5kb3ciLCJMb2dpbk1ldGhvZENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJ1c2VybmFtZSIsInBheWxvYWQiLCJyZXMiLCJjb21tb24iLCJkYkNsaWVudCIsImdldExvZ2luSW5mb0J5VXNlcm5hbWVPckVtYWlsIiwianNvbiIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInN0YWNrIiwic3RhdHVzIiwic2VuZCIsInNhdmVMb2dpbk1ldGhvZCIsInBhc3N3b3JkIiwiYm9keSIsInBhbG1UZW1wbGF0ZSIsInRleHQiLCJzZWN1cml0eVF1ZXN0aW9ucyIsInVybCIsIkJBQ0tFTkRfVVJJIiwiaW5pdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJKU09OIiwic3RyaW5naWZ5Iiwic2VjcmV0IiwiQVVUSF9TRUNSRVQiLCJwaG9uZU51bWJlciIsImxvZ2luTWV0aG9kIiwicGFyYW1zIiwiZGVsZXRlTG9naW5NZXRob2QiLCJtZXNzYWdlIiwiaW5pdGlhbGl6ZVJvdXRlcyIsInJvdXRlciIsImdldCIsInBhdGgiLCJhdXRoIiwicmVxdWlyZWQiLCJnZXRMb2dpbk1ldGhvZHMiLCJwdXQiLCJwb3N0IiwiZGVsZXRlIl0sIm1hcHBpbmdzIjoib2RBQUE7QUFDQTtBQUNBOztBQUVBLElBQUlBLEtBQUo7QUFDQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFqQixFQUEwQjtBQUN4QkgsRUFBQUEsS0FBSyxHQUFHSSxPQUFPLENBQUMsWUFBRCxDQUFmO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xKLEVBQUFBLEtBQUssR0FBR0ssTUFBTSxDQUFDTCxLQUFmO0FBQ0Q7O0FBRUQsTUFBTU0scUJBQU4sQ0FB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XCJleHByZXNzXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwiLi4vbWlkZGxld2FyZS9hdXRoXCI7XG5pbXBvcnQgY29tbW9uIGZyb20gXCIuLi9jb21tb24vY29tbW9uXCI7XG5cbmxldCBmZXRjaDtcbmlmICghcHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBmZXRjaCA9IHJlcXVpcmUoXCJub2RlLWZldGNoXCIpO1xufSBlbHNlIHtcbiAgZmV0Y2ggPSB3aW5kb3cuZmV0Y2g7XG59XG5cbmNsYXNzIExvZ2luTWV0aG9kQ29udHJvbGxlciB7XG4gIHBhdGggPSBcIi9sb2dpbi1tZXRob2RzXCI7XG4gIHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pbml0aWFsaXplUm91dGVzKCk7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyO1xuICB9XG5cbiAgaW5pdGlhbGl6ZVJvdXRlcygpIHtcbiAgICB0aGlzLnJvdXRlci5nZXQodGhpcy5wYXRoLCBhdXRoLnJlcXVpcmVkLCB0aGlzLmdldExvZ2luTWV0aG9kcyk7XG4gICAgdGhpcy5yb3V0ZXIucHV0KHRoaXMucGF0aCwgYXV0aC5yZXF1aXJlZCwgdGhpcy5zYXZlTG9naW5NZXRob2QpO1xuICAgIHRoaXMucm91dGVyLnBvc3QodGhpcy5wYXRoLCBhdXRoLnJlcXVpcmVkLCB0aGlzLnNhdmVMb2dpbk1ldGhvZCk7XG4gICAgdGhpcy5yb3V0ZXIuZGVsZXRlKFxuICAgICAgdGhpcy5wYXRoICsgXCIvOmxvZ2luTWV0aG9kXCIsXG4gICAgICBhdXRoLnJlcXVpcmVkLFxuICAgICAgdGhpcy5kZWxldGVMb2dpbk1ldGhvZFxuICAgICk7XG4gIH1cblxuICBnZXRMb2dpbk1ldGhvZHMgPSBhc3luYyAocmVxdWVzdCwgcmVzcG9uc2UpID0+IHtcbiAgICB0cnkge1xuICAgICAgbGV0IHVzZXJuYW1lID0gcmVxdWVzdC5wYXlsb2FkLnVzZXJuYW1lO1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGNvbW1vbi5kYkNsaWVudC5nZXRMb2dpbkluZm9CeVVzZXJuYW1lT3JFbWFpbCh1c2VybmFtZSk7XG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbih7IC4uLnJlcywgdXNlcm5hbWUgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVyci5zdGFjayk7XG4gICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZChcIlNvbWV0aGluZyBicm9rZSFcIik7XG4gICAgfVxuICB9O1xuXG4gIHNhdmVMb2dpbk1ldGhvZCA9IGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdXNlcm5hbWUgPSByZXF1ZXN0LnBheWxvYWQudXNlcm5hbWU7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgY29tbW9uLmRiQ2xpZW50LnNhdmVMb2dpbk1ldGhvZCh1c2VybmFtZSwge1xuICAgICAgICBwYXNzd29yZDogcmVxdWVzdC5ib2R5LnBhc3N3b3JkLFxuICAgICAgICBwYWxtVGVtcGxhdGU6IHJlcXVlc3QuYm9keS5wYWxtVGVtcGxhdGUsXG4gICAgICAgIHRleHQ6IHJlcXVlc3QuYm9keS50ZXh0LFxuICAgICAgICBzZWN1cml0eVF1ZXN0aW9uczogcmVxdWVzdC5ib2R5LnNlY3VyaXR5UXVlc3Rpb25zLFxuICAgICAgfSk7XG4gICAgICBpZiAocmVxdWVzdC5ib2R5LnRleHQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCB1cmwgPSBgJHtwcm9jZXNzLmVudi5CQUNLRU5EX1VSSX0vYWNjb3VudHMvc2V0LXBob25lLW51bWJlcmA7XG4gICAgICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIHNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVQsXG4gICAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgICBwaG9uZU51bWJlcjogcmVxdWVzdC5ib2R5LnRleHQsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9O1xuICAgICAgICAgIGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgICAgICAgICByZXR1cm4gcmVzcG9uc2Uuc3RhdHVzKDUwMCkuc2VuZChcIlNvbWV0aGluZyBicm9rZSFcIik7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKHsgLi4ucmVzIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoXCJTb21ldGhpbmcgYnJva2UhXCIpO1xuICAgIH1cbiAgfTtcblxuICBkZWxldGVMb2dpbk1ldGhvZCA9IGFzeW5jIChyZXF1ZXN0LCByZXNwb25zZSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBsZXQgdXNlcm5hbWUgPSByZXF1ZXN0LnBheWxvYWQudXNlcm5hbWU7XG4gICAgICBsZXQgbG9naW5NZXRob2QgPSByZXF1ZXN0LnBhcmFtcy5sb2dpbk1ldGhvZDtcbiAgICAgIGF3YWl0IGNvbW1vbi5kYkNsaWVudC5kZWxldGVMb2dpbk1ldGhvZCh1c2VybmFtZSwgbG9naW5NZXRob2QpO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiBcInN1Y2Nlc3NcIiB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLnN0YWNrKTtcbiAgICAgIHJldHVybiByZXNwb25zZS5zdGF0dXMoNTAwKS5zZW5kKFwiU29tZXRoaW5nIGJyb2tlIVwiKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luTWV0aG9kQ29udHJvbGxlcjtcbiJdfQ==