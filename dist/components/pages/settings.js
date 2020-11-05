"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _logoSvg = _interopRequireDefault(require("../svg/logo-svg"));
var _contactSvg = _interopRequireDefault(require("../svg/contact-svg"));
var _LoaderSvg = _interopRequireDefault(require("../svg/LoaderSvg"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _LoginMethods = _interopRequireDefault(require("./login/LoginMethods"));
// import UrlUtil from "../../util/url-util";
// import LoginMethods from "./login/LoginMethods";

if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/8f2ed76bef8fcce90d312e11191e8e17.scss";
  "/public/css/b3972a6c1e8fa6f6788e119f4cdde614.scss";
}

class Settings extends _react.default.Component {
  constructor() {var _this;
    super();_this = this;(0, _defineProperty2.default)(this, "loadAppSettings", /*#__PURE__*/(0, _asyncToGenerator2.default)(





















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
    }));(0, _defineProperty2.default)(this, "loadLoginMethods", /*#__PURE__*/(0, _asyncToGenerator2.default)(

    function* () {
      let { loginMethods, securityQuestions, username } = { ..._this.state };
      try {
        const url = "/api/login-methods";
        const authorization = _urlUtil.default.getQueryVariable("access_token");
        const init = {
          method: "GET",
          headers: {
            Authorization: `Bearer ${authorization}`,
            "Content-Type": "application/json" } };


        const response = yield fetch(url, init);
        if (response.status === 403) {
          window.location.href = '../' + location.search;
        }
        const responseJson = yield response.json();
        loginMethods = responseJson.loginMethods;
        securityQuestions = responseJson.securityQuestions ?
        responseJson.securityQuestions.map(sq => {
          return { answer: "", question: sq };
        }) :
        [];
        _this.setState({
          isLoadingLoginMethods: false,
          loginMethods,
          securityQuestions,
          username });

      } catch (err) {
        console.error(err);
      }
    }));(0, _defineProperty2.default)(this, "setSecurityQuestions",

    securityQuestions => {
      this.setState({ securityQuestions });
    });(0, _defineProperty2.default)(this, "setLoginMethods",

    loginMethods => {
      this.setState({ loginMethods });
    });this.state = { isLoadingLoginMethods: true, loginMethods: [], securityQuestions: [], username: "" };}componentDidMount() {if (process.env.BROWSER) {this.loadAppSettings();setTimeout(() => {document.getElementById("splash").style.animation = "fadeout 0.5s";document.getElementById("splash").style.opacity = 0;document.getElementById("main").style.animation = "fadein 0.5s";document.getElementById("main").style.opacity = 1;}, 500);this.loadLoginMethods();}}

  render() {
    const {
      isLoadingLoginMethods,
      loginMethods,
      securityQuestions,
      username } =
    { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
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

      _react.default.createElement("main", { id: "main", style: { position: "absolute", top: 0, opacity: 0 } },
      isLoadingLoginMethods && /*#__PURE__*/
      _react.default.createElement("div", { className: "loading-user" }, /*#__PURE__*/
      _react.default.createElement(_contactSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "MyAccount"), /*#__PURE__*/
      _react.default.createElement("div", { className: "rotate" }, /*#__PURE__*/
      _react.default.createElement(_LoaderSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "excerpt" }, "Loading your login methods...")),


      !isLoadingLoginMethods && /*#__PURE__*/
      _react.default.createElement(_LoginMethods.default, {
        loginMethods: loginMethods,
        setSecurityQuestions: this.setSecurityQuestions,
        setLoginMethods: this.setLoginMethods,
        username: username,
        securityQuestions: securityQuestions,
        isSettings: true })))));






  }}var _default =


Settings;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3NldHRpbmdzLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIlNldHRpbmdzIiwiUmVhY3QiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInVybCIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwicmVzcG9uc2UiLCJmZXRjaCIsImFwcFNldHRpbmdzIiwianNvbiIsInRpdGxlU2V0dGluZyIsImZpbmQiLCJhIiwic2V0dGluZ05hbWUiLCJkb2N1bWVudCIsInRpdGxlIiwic2V0dGluZ1ZhbHVlIiwiZXJyIiwiY29uc29sZSIsImxvZyIsImxvZ2luTWV0aG9kcyIsInNlY3VyaXR5UXVlc3Rpb25zIiwidXNlcm5hbWUiLCJzdGF0ZSIsImF1dGhvcml6YXRpb24iLCJVcmxVdGlsIiwiZ2V0UXVlcnlWYXJpYWJsZSIsIkF1dGhvcml6YXRpb24iLCJzdGF0dXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWFyY2giLCJyZXNwb25zZUpzb24iLCJtYXAiLCJzcSIsImFuc3dlciIsInF1ZXN0aW9uIiwic2V0U3RhdGUiLCJpc0xvYWRpbmdMb2dpbk1ldGhvZHMiLCJlcnJvciIsImNvbXBvbmVudERpZE1vdW50IiwibG9hZEFwcFNldHRpbmdzIiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwibG9hZExvZ2luTWV0aG9kcyIsInJlbmRlciIsImJhY2tncm91bmRDb2xvciIsIm1pbkhlaWdodCIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJwb3NpdGlvbiIsInRvcCIsInNldFNlY3VyaXR5UXVlc3Rpb25zIiwic2V0TG9naW5NZXRob2RzIl0sIm1hcHBpbmdzIjoib2RBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxPQUFPLENBQUNDLEdB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QUFBQSxPQUFPLEVBQUUsTUFISjtBQUlMQyxVQUFBQSxVQUFVLEVBQUUsUUFKUDtBQUtMQyxVQUFBQSxjQUFjLEVBQUUsUUFMWCxFQUZUOzs7QUFVRSxtQ0FBQyxnQkFBRCxPQVZGLENBREY7O0FBYUUsNkNBQU0sRUFBRSxFQUFDLE1BQVQsRUFBZ0IsS0FBSyxFQUFFLEVBQUVDLFFBQVEsRUFBRSxVQUFaLEVBQXdCQyxHQUFHLEVBQUUsQ0FBN0IsRUFBZ0NULE9BQU8sRUFBRSxDQUF6QyxFQUF2QjtBQUNHUixNQUFBQSxxQkFBcUI7QUFDcEIsNENBQUssU0FBUyxFQUFDLGNBQWY7QUFDRSxtQ0FBQyxtQkFBRCxPQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLE9BQWYsZ0JBRkY7QUFHRSw0Q0FBSyxTQUFTLEVBQUMsUUFBZjtBQUNFLG1DQUFDLGtCQUFELE9BREYsQ0FIRjs7QUFNRSw0Q0FBSyxTQUFTLEVBQUMsU0FBZixvQ0FORixDQUZKOzs7QUFXRyxPQUFDQSxxQkFBRDtBQUNDLG1DQUFDLHFCQUFEO0FBQ0UsUUFBQSxZQUFZLEVBQUVuQixZQURoQjtBQUVFLFFBQUEsb0JBQW9CLEVBQUUsS0FBS3FDLG9CQUY3QjtBQUdFLFFBQUEsZUFBZSxFQUFFLEtBQUtDLGVBSHhCO0FBSUUsUUFBQSxRQUFRLEVBQUVwQyxRQUpaO0FBS0UsUUFBQSxpQkFBaUIsRUFBRUQsaUJBTHJCO0FBTUUsUUFBQSxVQUFVLE1BTlosR0FaSixDQWJGLENBREYsQ0FERjs7Ozs7OztBQXdDRCxHQXRJb0MsQzs7O0FBeUl4QnZCLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMb2dvU3ZnIGZyb20gXCIuLi9zdmcvbG9nby1zdmdcIjtcbmltcG9ydCBDb250YWN0U3ZnIGZyb20gXCIuLi9zdmcvY29udGFjdC1zdmdcIjtcbmltcG9ydCBMb2FkZXJTdmcgZnJvbSBcIi4uL3N2Zy9Mb2FkZXJTdmdcIjtcbmltcG9ydCBVcmxVdGlsIGZyb20gXCIuLi8uLi91dGlsL3VybC11dGlsXCI7XG5pbXBvcnQgTG9naW5NZXRob2RzIGZyb20gXCIuL2xvZ2luL0xvZ2luTWV0aG9kc1wiO1xuLy8gaW1wb3J0IFVybFV0aWwgZnJvbSBcIi4uLy4uL3V0aWwvdXJsLXV0aWxcIjtcbi8vIGltcG9ydCBMb2dpbk1ldGhvZHMgZnJvbSBcIi4vbG9naW4vTG9naW5NZXRob2RzXCI7XG5cbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoXCIuLi9nbG9iYWwuc2Nzc1wiKTtcbiAgcmVxdWlyZShcIi4vc2V0dGluZ3Muc2Nzc1wiKTtcbiAgcmVxdWlyZShcIi4vbG9naW4uc2Nzc1wiKTtcbn1cblxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc0xvYWRpbmdMb2dpbk1ldGhvZHM6IHRydWUsXG4gICAgICBsb2dpbk1ldGhvZHM6IFtdLFxuICAgICAgc2VjdXJpdHlRdWVzdGlvbnM6IFtdLFxuICAgICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICB0aGlzLmxvYWRBcHBTZXR0aW5ncygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpLnN0eWxlLmFuaW1hdGlvbiA9IFwiZmFkZW91dCAwLjVzXCI7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3BsYXNoXCIpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuc3R5bGUuYW5pbWF0aW9uID0gXCJmYWRlaW4gMC41c1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9LCA1MDApO1xuICAgICAgdGhpcy5sb2FkTG9naW5NZXRob2RzKCk7XG4gICAgfVxuICB9XG5cbiAgbG9hZEFwcFNldHRpbmdzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvYXBwLXNldHRpbmdzXCI7XG4gICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgICBjb25zdCBhcHBTZXR0aW5ncyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHRpdGxlU2V0dGluZyA9IGFwcFNldHRpbmdzLmZpbmQoKGEpID0+IGEuc2V0dGluZ05hbWUgPT09IFwidGl0bGVcIik7XG4gICAgICBpZiAodGl0bGVTZXR0aW5nKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVTZXR0aW5nLnNldHRpbmdWYWx1ZSArIFwiIEF1dGhcIjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgbG9hZExvZ2luTWV0aG9kcyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQgeyBsb2dpbk1ldGhvZHMsIHNlY3VyaXR5UXVlc3Rpb25zLCB1c2VybmFtZSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IFwiL2FwaS9sb2dpbi1tZXRob2RzXCI7XG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gVXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGhvcml6YXRpb259YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi4vJyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGxvZ2luTWV0aG9kcyA9IHJlc3BvbnNlSnNvbi5sb2dpbk1ldGhvZHM7XG4gICAgICBzZWN1cml0eVF1ZXN0aW9ucyA9IHJlc3BvbnNlSnNvbi5zZWN1cml0eVF1ZXN0aW9uc1xuICAgICAgICA/IHJlc3BvbnNlSnNvbi5zZWN1cml0eVF1ZXN0aW9ucy5tYXAoKHNxKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4geyBhbnN3ZXI6IFwiXCIsIHF1ZXN0aW9uOiBzcSB9O1xuICAgICAgICAgIH0pXG4gICAgICAgIDogW107XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgaXNMb2FkaW5nTG9naW5NZXRob2RzOiBmYWxzZSxcbiAgICAgICAgbG9naW5NZXRob2RzLFxuICAgICAgICBzZWN1cml0eVF1ZXN0aW9ucyxcbiAgICAgICAgdXNlcm5hbWUsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgc2V0U2VjdXJpdHlRdWVzdGlvbnMgPSAoc2VjdXJpdHlRdWVzdGlvbnMpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VjdXJpdHlRdWVzdGlvbnMgfSk7XG4gIH07XG5cbiAgc2V0TG9naW5NZXRob2RzID0gKGxvZ2luTWV0aG9kcykgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsb2dpbk1ldGhvZHMgfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGlzTG9hZGluZ0xvZ2luTWV0aG9kcyxcbiAgICAgIGxvZ2luTWV0aG9kcyxcbiAgICAgIHNlY3VyaXR5UXVlc3Rpb25zLFxuICAgICAgdXNlcm5hbWUsXG4gICAgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBpZD1cInNwbGFzaFwiXG4gICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzIzNjJjN1wiLFxuICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8TG9nb1N2ZyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtYWluIGlkPVwibWFpblwiIHN0eWxlPXt7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHRvcDogMCwgb3BhY2l0eTogMCB9fT5cbiAgICAgICAgICAgIHtpc0xvYWRpbmdMb2dpbk1ldGhvZHMgJiYgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvYWRpbmctdXNlclwiPlxuICAgICAgICAgICAgICAgIDxDb250YWN0U3ZnIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPk15QWNjb3VudDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm90YXRlXCI+XG4gICAgICAgICAgICAgICAgICA8TG9hZGVyU3ZnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0XCI+TG9hZGluZyB5b3VyIGxvZ2luIG1ldGhvZHMuLi48L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFpc0xvYWRpbmdMb2dpbk1ldGhvZHMgJiYgKFxuICAgICAgICAgICAgICA8TG9naW5NZXRob2RzXG4gICAgICAgICAgICAgICAgbG9naW5NZXRob2RzPXtsb2dpbk1ldGhvZHN9XG4gICAgICAgICAgICAgICAgc2V0U2VjdXJpdHlRdWVzdGlvbnM9e3RoaXMuc2V0U2VjdXJpdHlRdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgc2V0TG9naW5NZXRob2RzPXt0aGlzLnNldExvZ2luTWV0aG9kc31cbiAgICAgICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgICAgc2VjdXJpdHlRdWVzdGlvbnM9e3NlY3VyaXR5UXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgIGlzU2V0dGluZ3NcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNldHRpbmdzO1xuIl19