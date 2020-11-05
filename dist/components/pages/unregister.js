"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _logoSvg = _interopRequireDefault(require("../svg/logo-svg"));
var _contactSvg = _interopRequireDefault(require("../svg/contact-svg"));
var _LoaderSvg = _interopRequireDefault(require("../svg/LoaderSvg"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));

if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/646169534e88035f3164e333cb0b6470.scss";
  "/public/css/b3972a6c1e8fa6f6788e119f4cdde614.scss";
}

class Unregister extends _react.Component {constructor(...args) {super(...args);(0, _defineProperty2.default)(this, "loadAppSettings", /*#__PURE__*/(0, _asyncToGenerator2.default)(













    function* () {
      try {
        const url = "/api/app-settings";
        const init = {
          method: "GET",
          headers: {
            "Content-Type": "application/json" } };


        const response = yield fetch(url, init);
        const appSettings = yield response.json();
        const titleSetting = appSettings.find(a => a.settingName === "title");
        if (titleSetting) {
          document.title = titleSetting.settingValue + " Auth";
        }
      } catch (err) {
        console.log("Error!");
        console.log(err);
      }
    }));(0, _defineProperty2.default)(this, "deleteMyAccount", /*#__PURE__*/(0, _asyncToGenerator2.default)(

    function* () {
      try {
        const url = "/api/my-account";
        const authorization = _urlUtil.default.getQueryVariable("access_token");
        const init = {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authorization}`,
            "Content-Type": "application/json" } };


        const response = yield fetch(url, init);
        const replaceQueryParam = (param, newval, search) => {
          const regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
          const query = search.replace(regex, "$1").replace(/&$/, "");
          return (
            (query.length > 2 ? query + "&" : "?") + (
            newval ? param + "=" + newval : ""));

        };
        if (response.status === 403) {
          window.location.href =
          "../" + replaceQueryParam("access_token", "", location.search);
        }
        yield response.json();
        window.location.href =
        "../" + replaceQueryParam("access_token", "", location.search);
      } catch (err) {
        console.error(err);
      }
    }));}componentDidMount() {if (process.env.BROWSER) {this.loadAppSettings();setTimeout(() => {document.getElementById("splash").style.animation = "fadeout 0.5s";document.getElementById("splash").style.opacity = 0;document.getElementById("main").style.animation = "fadein 0.5s";document.getElementById("main").style.opacity = 1;}, 500);this.deleteMyAccount();}}

  render() {
    return /*#__PURE__*/(
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
      _react.default.createElement("div", {
        id: "splash",
        style: {
          backgroundColor: "#2362c7",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center" } }, /*#__PURE__*/


      _react.default.createElement(_logoSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("main", { id: "main", style: { position: "absolute", top: 0, opacity: 0 } }, /*#__PURE__*/
      _react.default.createElement("div", { className: "unregister-container" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Removing Account..."), /*#__PURE__*/
      _react.default.createElement(_contactSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", { className: "rotate" }, /*#__PURE__*/
      _react.default.createElement(_LoaderSvg.default, null)))))));






  }}exports.default = Unregister;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3VucmVnaXN0ZXIuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiVW5yZWdpc3RlciIsIkNvbXBvbmVudCIsInVybCIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImFwcFNldHRpbmdzIiwianNvbiIsInRpdGxlU2V0dGluZyIsImZpbmQiLCJhIiwic2V0dGluZ05hbWUiLCJkb2N1bWVudCIsInRpdGxlIiwic2V0dGluZ1ZhbHVlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImF1dGhvcml6YXRpb24iLCJVcmxVdGlsIiwiZ2V0UXVlcnlWYXJpYWJsZSIsIkF1dGhvcml6YXRpb24iLCJyZXBsYWNlUXVlcnlQYXJhbSIsInBhcmFtIiwibmV3dmFsIiwic2VhcmNoIiwicmVnZXgiLCJSZWdFeHAiLCJxdWVyeSIsInJlcGxhY2UiLCJsZW5ndGgiLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJlcnJvciIsImNvbXBvbmVudERpZE1vdW50IiwibG9hZEFwcFNldHRpbmdzIiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwiZGVsZXRlTXlBY2NvdW50IiwicmVuZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoib2RBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0Q7O0FBRWMsTUFBTUMsVUFBTixTQUF5QkMsZ0JBQXpCLENBQW1DOzs7Ozs7Ozs7Ozs7OztBQWM5QixpQkFBWTtBQUM1QixVQUFJO0FBQ0YsY0FBTUMsR0FB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bnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dvU3ZnIGZyb20gXCIuLi9zdmcvbG9nby1zdmdcIjtcbmltcG9ydCBDb250YWN0U3ZnIGZyb20gXCIuLi9zdmcvY29udGFjdC1zdmdcIjtcbmltcG9ydCBMb2FkZXJTdmcgZnJvbSBcIi4uL3N2Zy9Mb2FkZXJTdmdcIjtcbmltcG9ydCBVcmxVdGlsIGZyb20gXCIuLi8uLi91dGlsL3VybC11dGlsXCI7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoXCIuLi9nbG9iYWwuc2Nzc1wiKTtcbiAgcmVxdWlyZShcIi4vdW5yZWdpc3Rlci5zY3NzXCIpO1xuICByZXF1aXJlKFwiLi9sb2dpbi5zY3NzXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVbnJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgICAgIHRoaXMubG9hZEFwcFNldHRpbmdzKCk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIikuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlb3V0IDAuNXNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIikuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVpbiAwLjVzXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIH0sIDUwMCk7XG4gICAgICB0aGlzLmRlbGV0ZU15QWNjb3VudCgpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRBcHBTZXR0aW5ncyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gXCIvYXBpL2FwcC1zZXR0aW5nc1wiO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgICAgY29uc3QgYXBwU2V0dGluZ3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCB0aXRsZVNldHRpbmcgPSBhcHBTZXR0aW5ncy5maW5kKChhKSA9PiBhLnNldHRpbmdOYW1lID09PSBcInRpdGxlXCIpO1xuICAgICAgaWYgKHRpdGxlU2V0dGluZykge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlU2V0dGluZy5zZXR0aW5nVmFsdWUgKyBcIiBBdXRoXCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZU15QWNjb3VudCA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gXCIvYXBpL215LWFjY291bnRcIjtcbiAgICAgIGNvbnN0IGF1dGhvcml6YXRpb24gPSBVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aG9yaXphdGlvbn1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICAgIGNvbnN0IHJlcGxhY2VRdWVyeVBhcmFtID0gKHBhcmFtLCBuZXd2YWwsIHNlYXJjaCkgPT4ge1xuICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoXCIoWz87Jl0pXCIgKyBwYXJhbSArIFwiW14mO10qWzsmXT9cIik7XG4gICAgICAgIGNvbnN0IHF1ZXJ5ID0gc2VhcmNoLnJlcGxhY2UocmVnZXgsIFwiJDFcIikucmVwbGFjZSgvJiQvLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAocXVlcnkubGVuZ3RoID4gMiA/IHF1ZXJ5ICsgXCImXCIgOiBcIj9cIikgK1xuICAgICAgICAgIChuZXd2YWwgPyBwYXJhbSArIFwiPVwiICsgbmV3dmFsIDogXCJcIilcbiAgICAgICAgKTtcbiAgICAgIH07XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICAgIFwiLi4vXCIgKyByZXBsYWNlUXVlcnlQYXJhbShcImFjY2Vzc190b2tlblwiLCBcIlwiLCBsb2NhdGlvbi5zZWFyY2gpO1xuICAgICAgfVxuICAgICAgYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPVxuICAgICAgICBcIi4uL1wiICsgcmVwbGFjZVF1ZXJ5UGFyYW0oXCJhY2Nlc3NfdG9rZW5cIiwgXCJcIiwgbG9jYXRpb24uc2VhcmNoKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cInNwbGFzaFwiXG4gICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjM2MmM3XCIsXG4gICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgIH19XG4gICAgICAgID5cbiAgICAgICAgICA8TG9nb1N2ZyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPG1haW4gaWQ9XCJtYWluXCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAwLCBvcGFjaXR5OiAwIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidW5yZWdpc3Rlci1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+UmVtb3ZpbmcgQWNjb3VudC4uLjwvZGl2PlxuICAgICAgICAgICAgICA8Q29udGFjdFN2ZyAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdGF0ZVwiPlxuICAgICAgICAgICAgICAgIDxMb2FkZXJTdmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG4iXX0=