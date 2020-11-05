"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var express = _interopRequireWildcard(require("express"));
var _common = _interopRequireDefault(require("../common/common"));
var _randomUtil = require("../util/random-util");
var _uuid = require("uuid");

let fetch;
if (!process.env.BROWSER) {
  fetch = require("node-fetch");
} else {
  fetch = window.fetch;
}

class AppSettingController {



  constructor() {(0, _defineProperty2.default)(this, "path", "/app-settings");(0, _defineProperty2.default)(this, "router", express.Router());(0, _defineProperty2.default)(this, "getAppSettings", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(









      function* (req, res) {
        try {
          const url = `${process.env.BACKEND_URI}/admin/app-settings`;
          const init = {
            method: "GET",
            headers: { "Content-Type": "application/json" } };

          const response = yield fetch(url, init);
          const appSettings = (yield response.json()).map(a => {
            return {
              settingName: a.settingName,
              settingValue: a.settingValue };

          });
          return res.status(200).json(appSettings);
        } catch (err) {
          console.error(err.stack);
          return response.status(500).send("Something broke!");
        }
      });return function (_x, _x2) {return _ref.apply(this, arguments);};}());this.initializeRoutes();return this.router;}initializeRoutes() {this.router.get(this.path, this.getAppSettings);} // server
}var _default =

AppSettingController;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9BcHBTZXR0aW5nQ29udHJvbGxlci5qcyJdLCJuYW1lcyI6WyJmZXRjaCIsInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwicmVxdWlyZSIsIndpbmRvdyIsIkFwcFNldHRpbmdDb250cm9sbGVyIiwiY29uc3RydWN0b3IiLCJleHByZXNzIiwiUm91dGVyIiwicmVxIiwicmVzIiwidXJsIiwiQkFDS0VORF9VUkkiLCJpbml0IiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiYXBwU2V0dGluZ3MiLCJqc29uIiwibWFwIiwiYSIsInNldHRpbmdOYW1lIiwic2V0dGluZ1ZhbHVlIiwic3RhdHVzIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwic3RhY2siLCJzZW5kIiwiaW5pdGlhbGl6ZVJvdXRlcyIsInJvdXRlciIsImdldCIsInBhdGgiLCJnZXRBcHBTZXR0aW5ncyJdLCJtYXBwaW5ncyI6Im9kQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLEtBQUo7QUFDQSxJQUFJLENBQUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFqQixFQUEwQjtBQUN4QkgsRUFBQUEsS0FBSyxHQUFHSSxPQUFPLENBQUMsWUFBRCxDQUFmO0FBQ0QsQ0FGRCxNQUVPO0FBQ0xKLEVBQUFBLEtBQUssR0FBR0ssTUFBTSxDQUFDTCxLQUFmO0FBQ0Q7O0FBRUQsTUFBTU0sb0JBQU4sQ0FBMkI7Ozs7QUFJekJDLEVBQUFBLFdBQVcsR0FBRyw2Q0FIUCxlQUdPLGdEQUZMQyxPQUFPLENBQUNDLE1BQVIsRUFFSzs7Ozs7Ozs7OztBQVVHLGlCQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDbkMsWUFBSTtBQUNGLGdCQUFNQyxHQUFHLEdBQUksR0FBRVgsT0FBTyxDQUFDQyxHQUFSLENBQVlXLFdBQVkscUJBQXZDO0FBQ0EsZ0JBQU1DLElBQUksR0FBRztBQUNYQyxZQUFBQSxNQUFNLEVBQUUsS0FERztBQUVYQyxZQUFBQSxPQUFPLEVBQUUsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBRkUsRUFBYjs7QUFJQSxnQkFBTUMsUUFBUSxTQUFTakIsS0FBSyxDQUFDWSxHQUFELEVBQU1FLElBQU4sQ0FBNUI7QUFDQSxnQkFBTUksV0FBVyxHQUFHLE9BQU9ELFFBQVEsQ0FBQ0UsSUFBVCxFQUFQLEVBQXdCQyxHQUF4QixDQUE2QkMsQ0FBRCxJQUFPO0FBQ3JELG1CQUFPO0FBQ0xDLGNBQUFBLFdBQVcsRUFBRUQsQ0FBQyxDQUFDQyxXQURWO0FBRUxDLGNBQUFBLFlBQVksRUFBRUYsQ0FBQyxDQUFDRSxZQUZYLEVBQVA7O0FBSUQsV0FMbUIsQ0FBcEI7QUFNQSxpQkFBT1osR0FBRyxDQUFDYSxNQUFKLENBQVcsR0FBWCxFQUFnQkwsSUFBaEIsQ0FBcUJELFdBQXJCLENBQVA7QUFDRCxTQWRELENBY0UsT0FBT08sR0FBUCxFQUFZO0FBQ1pDLFVBQUFBLE9BQU8sQ0FBQ0MsS0FBUixDQUFjRixHQUFHLENBQUNHLEtBQWxCO0FBQ0EsaUJBQU9YLFFBQVEsQ0FBQ08sTUFBVCxDQUFnQixHQUFoQixFQUFxQkssSUFBckIsQ0FBMEIsa0JBQTFCLENBQVA7QUFDRDtBQUNGLE9BN0JhLHVFQUNaLEtBQUtDLGdCQUFMLEdBQ0EsT0FBTyxLQUFLQyxNQUFaLENBQ0QsQ0FFREQsZ0JBQWdCLEdBQUcsQ0FDakIsS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCLEtBQUtDLElBQXJCLEVBQTJCLEtBQUtDLGNBQWhDLEVBQ0QsQ0FYd0IsQ0FhekI7QUFieUIsQzs7QUFvQ1o1QixvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCBjb21tb24gZnJvbSBcIi4uL2NvbW1vbi9jb21tb25cIjtcbmltcG9ydCB7IGdldFJhbmRvbUludCB9IGZyb20gXCIuLi91dGlsL3JhbmRvbS11dGlsXCI7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tIFwidXVpZFwiO1xuXG5sZXQgZmV0Y2g7XG5pZiAoIXByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgZmV0Y2ggPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTtcbn0gZWxzZSB7XG4gIGZldGNoID0gd2luZG93LmZldGNoO1xufVxuXG5jbGFzcyBBcHBTZXR0aW5nQ29udHJvbGxlciB7XG4gIHBhdGggPSBcIi9hcHAtc2V0dGluZ3NcIjtcbiAgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmluaXRpYWxpemVSb3V0ZXMoKTtcbiAgICByZXR1cm4gdGhpcy5yb3V0ZXI7XG4gIH1cblxuICBpbml0aWFsaXplUm91dGVzKCkge1xuICAgIHRoaXMucm91dGVyLmdldCh0aGlzLnBhdGgsIHRoaXMuZ2V0QXBwU2V0dGluZ3MpO1xuICB9XG5cbiAgLy8gc2VydmVyXG4gIGdldEFwcFNldHRpbmdzID0gYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IGAke3Byb2Nlc3MuZW52LkJBQ0tFTkRfVVJJfS9hZG1pbi9hcHAtc2V0dGluZ3NgO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgICAgY29uc3QgYXBwU2V0dGluZ3MgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKS5tYXAoKGEpID0+IHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBzZXR0aW5nTmFtZTogYS5zZXR0aW5nTmFtZSxcbiAgICAgICAgICBzZXR0aW5nVmFsdWU6IGEuc2V0dGluZ1ZhbHVlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oYXBwU2V0dGluZ3MpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIuc3RhY2spO1xuICAgICAgcmV0dXJuIHJlc3BvbnNlLnN0YXR1cyg1MDApLnNlbmQoXCJTb21ldGhpbmcgYnJva2UhXCIpO1xuICAgIH1cbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQXBwU2V0dGluZ0NvbnRyb2xsZXI7XG4iXX0=