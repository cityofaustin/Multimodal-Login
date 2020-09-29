"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _logoSvg = _interopRequireDefault(require("../svg/logo-svg"));
var _contactSvg = _interopRequireDefault(require("../svg/contact-svg"));


var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _axios = _interopRequireDefault(require("axios"));
var _LoginMethods = _interopRequireDefault(require("./login/LoginMethods")); // import WebCameraShapshot from '../web-camera-shapshot';
// import CognitiveFaceService from '../../services/CognitiveFaceService';
let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/679ec4032f01e73ec08f6331a1a3f50c.scss";
  img = "/public/img/f53665075594dc59980862e7e2dca27a.jpg".default;
}

class Login extends _react.default.Component {
  constructor() {var _this;
    super();_this = this;(0, _defineProperty2.default)(this, "requestLoginCode", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(






























      function* (e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append(username, _this.state.username);

        let res;

        try {
          res = yield _axios.default.post("/request-social-login-code", {
            username: _this.state.username });

        } catch (err) {
          console.log("Error!");
          console.log(err);
        }
        yield res.data;
        _this.setState({ requestLoginCode: true });
      });return function (_x) {return _ref.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "findUser", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(

      function* (e) {
        e.preventDefault();

        const { username } = { ..._this.state };
        let { findUserError, loginMethods } = { ..._this.state };
        const input = "/api/users/find-by-username-or-email";
        const init = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ usernameOrEmail: username }) };

        const httpResponse = yield fetch(input, init);
        const response = yield httpResponse.json();
        if (response.loginMethods) {
          findUserError = "";
          loginMethods = response.loginMethods;
        } else {
          findUserError = "No account found with that username";
        }
        _this.setState({ findUserError, loginMethods });
      });return function (_x2) {return _ref2.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "handleInputChange",

    e => {
      const { value } = e.target;
      const key = e.target.name;
      this.setState({ [key]: value });
    });(0, _defineProperty2.default)(this, "handleSnapshot", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(

      function* (blob) {
        const { userName1 } = { ..._this.state };
        if (blob) {
          try {
            const imgFile = new File([blob], "imgFile.png", {
              type: blob.type,
              lastModified: Date.now() });

            const input = "/verify/face";
            const formdata = new FormData();
            formdata.append("img", imgFile, "imgFile");
            formdata.append("username", userName1);
            const init = {
              method: "POST",
              body: formdata };

            const response = yield fetch(input, init);
            console.log(response);
          } catch (err) {
            console.error(err.message);
          }
        }
      });return function (_x3) {return _ref3.apply(this, arguments);};}());this.state = { username: "", // username: "adamtest",
      password: "", faceTemplate: "", oneTimeCode: "", loginMethods: undefined, // loginMethods: [
      // "PasswordLoginType",
      // "SecurityQuestionsLoginType",
      // "PalmLoginType",
      // "TextLoginType",
      // ],
      findUserError: "", requestLoginCode: false, faceVerify: false };}componentDidMount() {if (process.env.BROWSER) {setTimeout(() => {document.getElementById("splash").style.animation = "fadeout 1s";document.getElementById("splash").style.opacity = 0;document.getElementById("main").style.animation = "fadein 1s";document.getElementById("main").style.opacity = 1;}, 1000);}}renderUsernamePrompt() {const { username, findUserError } = { ...this.state };return /*#__PURE__*/_react.default.createElement("div", { className: "username-container" }, /*#__PURE__*/_react.default.createElement("div", { className: "section" }, /*#__PURE__*/_react.default.createElement("div", { className: "title" }, "First off"), /*#__PURE__*/
    _react.default.createElement("div", { className: "subtitle" }, "Help us find your account"), /*#__PURE__*/
    _react.default.createElement("form", { onSubmit: e => this.findUser(e) }, /*#__PURE__*/
    _react.default.createElement("div", { className: "card" }, /*#__PURE__*/
    _react.default.createElement(_contactSvg.default, null), /*#__PURE__*/
    _react.default.createElement("div", { className: "username" }, "E-mail or Username"), /*#__PURE__*/
    _react.default.createElement("div", { className: "prompt" }, "Please enter your e-mail or username below..."), /*#__PURE__*/


    _react.default.createElement("input", {
      className: "username-input",
      name: "username",
      type: "text"
      // placeholder="..."
      , value: username,
      onChange: this.handleInputChange }), /*#__PURE__*/

    _react.default.createElement("div", { className: "error" },
    findUserError.length > 0 && /*#__PURE__*/
    _react.default.createElement("span", null,
    findUserError, /*#__PURE__*/
    _react.default.createElement("br", null)),


    _urlUtil.default.getQueryVariable("success") === "false" && /*#__PURE__*/
    _react.default.createElement(_react.Fragment, null, "Failed login attempt")), /*#__PURE__*/




    _react.default.createElement("input", {
      className: "find-user",
      type: "submit",
      value: "Find me",
      disabled: username.length < 1 })))));








  }

  renderLoginWithMethods() {
    const { username } = { ...this.state };
    let oneTimeCodeHidden = "hidden";

    if (this.state.requestLoginCode) {
      oneTimeCodeHidden = "text";
    }
    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "login-container" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Choose your login method"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "To access your account"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card" }, /*#__PURE__*/
      _react.default.createElement("input", {
        className: "login",
        type: "submit",
        value: "Request One Time Code",
        onClick: this.requestLoginCode }), /*#__PURE__*/


      _react.default.createElement("div", { className: "method-title" }, "Method #1"), /*#__PURE__*/
      _react.default.createElement("form", { method: "POST", action: "/authorize" }, /*#__PURE__*/
      _react.default.createElement("input", {
        type: "hidden",
        id: "username",
        name: "username",
        value: username }), /*#__PURE__*/

      _react.default.createElement("div", { className: "form-input" }, /*#__PURE__*/
      _react.default.createElement("label", { htmlFor: "lname" }, "Password:"), /*#__PURE__*/
      _react.default.createElement("input", {
        type: "text",
        id: "password",
        name: "password",
        onChange: this.handleInputChange,
        value: this.state.password })), /*#__PURE__*/



      _react.default.createElement("div", { className: "form-input" }, /*#__PURE__*/
      _react.default.createElement("label", { htmlFor: "lname" }, "Face Template:"), /*#__PURE__*/
      _react.default.createElement("input", {
        type: "text",
        id: "faceTemplate",
        name: "faceTemplate",
        onChange: this.handleInputChange,
        value: this.state.faceTemplate })), /*#__PURE__*/



      _react.default.createElement("div", { className: "form-input" }, /*#__PURE__*/
      _react.default.createElement("label", { htmlFor: "lname" }, "One Time Code:"), /*#__PURE__*/
      _react.default.createElement("input", {
        type: oneTimeCodeHidden,
        id: "oneTimeCode",
        name: "oneTimeCode",
        onChange: this.handleInputChange,
        value: this.state.oneTimeCode })), /*#__PURE__*/



      _react.default.createElement("input", {
        id: "client_id",
        name: "client_id",
        type: "hidden",
        value: _urlUtil.default.getQueryVariable("client_id") }), /*#__PURE__*/

      _react.default.createElement("input", {
        id: "response_type",
        name: "response_type",
        type: "hidden",
        value: _urlUtil.default.getQueryVariable("response_type") }), /*#__PURE__*/

      _react.default.createElement("input", {
        id: "redirect_url",
        name: "redirect_url",
        type: "hidden",
        value: _urlUtil.default.getQueryVariable("redirect_url") }), /*#__PURE__*/

      _react.default.createElement("input", { id: "scope", name: "scope", type: "hidden", value: "" }), /*#__PURE__*/
      _react.default.createElement("input", { id: "state", name: "state", type: "hidden", value: "" }), /*#__PURE__*/

      _react.default.createElement("input", { className: "login", type: "submit", value: "Login" }))))));





  }

  render() {
    const { loginMethods, username } = { ...this.state };
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
      !loginMethods && this.renderUsernamePrompt(),
      loginMethods && /*#__PURE__*/
      _react.default.createElement(_LoginMethods.default, { loginMethods: loginMethods, username: username })))));





  }}var _default =


Login;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJpbWciLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsImRlZmF1bHQiLCJMb2dpbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlcm5hbWUiLCJzdGF0ZSIsInJlcyIsImF4aW9zIiwicG9zdCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwic2V0U3RhdGUiLCJyZXF1ZXN0TG9naW5Db2RlIiwiZmluZFVzZXJFcnJvciIsImxvZ2luTWV0aG9kcyIsImlucHV0IiwiaW5pdCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInVzZXJuYW1lT3JFbWFpbCIsImh0dHBSZXNwb25zZSIsImZldGNoIiwicmVzcG9uc2UiLCJqc29uIiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwiYmxvYiIsInVzZXJOYW1lMSIsImltZ0ZpbGUiLCJGaWxlIiwidHlwZSIsImxhc3RNb2RpZmllZCIsIkRhdGUiLCJub3ciLCJmb3JtZGF0YSIsImVycm9yIiwibWVzc2FnZSIsInBhc3N3b3JkIiwiZmFjZVRlbXBsYXRlIiwib25lVGltZUNvZGUiLCJ1bmRlZmluZWQiLCJmYWNlVmVyaWZ5IiwiY29tcG9uZW50RGlkTW91bnQiLCJzZXRUaW1lb3V0IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInJlbmRlclVzZXJuYW1lUHJvbXB0IiwiZmluZFVzZXIiLCJoYW5kbGVJbnB1dENoYW5nZSIsImxlbmd0aCIsIlVybFV0aWwiLCJnZXRRdWVyeVZhcmlhYmxlIiwicmVuZGVyTG9naW5XaXRoTWV0aG9kcyIsIm9uZVRpbWVDb2RlSGlkZGVuIiwicmVuZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoib2RBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsNEUsQ0FKQTtBQUNBO0FBS0EsSUFBSUEsR0FBSjtBQUNBO0FBQ0EsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0E7QUFDQUgsRUFBQUEsR0FBRyxHQUFHLG1EQUE2QkksT0FBbkM7QUFDRDs7QUFFRCxNQUFNQyxLQUFOLFNBQW9CQyxlQUFNQyxTQUExQixDQUFvQztBQUNsQ0MsRUFBQUEsV0FBVyxHQUFHO0FBQ1osV0FEWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDSyxpQkFBT0MsQ0FBUCxFQUFhO0FBQzlCQSxRQUFBQSxDQUFDLENBQUNDLGNBQUY7O0FBRUEsY0FBTUMsUUFBUSxHQUFHLElBQUlDLFFBQUosRUFBakI7QUFDQUQsUUFBQUEsUUFBUSxDQUFDRSxNQUFULENBQWdCQyxRQUFoQixFQUEwQixLQUFJLENBQUNDLEtBQUwsQ0FBV0QsUUFBckM7O0FBRUEsWUFBSUUsR0FBSjs7QUFFQSxZQUFJO0FBQ0ZBLFVBQUFBLEdBQUcsU0FBU0MsZUFBTUMsSUFBTixDQUFXLDRCQUFYLEVBQXlDO0FBQ25ESixZQUFBQSxRQUFRLEVBQUUsS0FBSSxDQUFDQyxLQUFMLENBQVdELFFBRDhCLEVBQXpDLENBQVo7O0FBR0QsU0FKRCxDQUlFLE9BQU9LLEdBQVAsRUFBWTtBQUNaQyxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FELFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFDRCxjQUFNSCxHQUFHLENBQUNNLElBQVY7QUFDQSxRQUFBLEtBQUksQ0FBQ0MsUUFBTCxDQUFjLEVBQUVDLGdCQUFnQixFQUFFLElBQXBCLEVBQWQ7QUFDRCxPQWxEYTs7QUFvREgsaUJBQU9mLENBQVAs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QUFDLGVBQUQ7QUFDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLFFBREw7QUFFRSxRQUFBLEtBQUssRUFBRTtBQUNMNEQsVUFBQUEsZUFBZSxFQUFFLFNBRFo7QUFFTEMsVUFBQUEsU0FBUyxFQUFFLE9BRk47QUFHTEMsVUFBQUEsT0FBTyxFQUFFLE1BSEo7QUFJTEMsVUFBQUEsVUFBVSxFQUFFLFFBSlA7QUFLTEMsVUFBQUEsY0FBYyxFQUFFLFFBTFgsRUFGVDs7O0FBVUUsbUNBQUMsZ0JBQUQsT0FWRixDQURGOztBQWFFLDZDQUFNLEVBQUUsRUFBQyxNQUFULEVBQWdCLEtBQUssRUFBRSxFQUFFQyxRQUFRLEVBQUUsVUFBWixFQUF3QkMsR0FBRyxFQUFFLENBQTdCLEVBQWdDaEIsT0FBTyxFQUFFLENBQXpDLEVBQXZCO0FBQ0csT0FBQ3ZDLFlBQUQsSUFBaUIsS0FBS3dDLG9CQUFMLEVBRHBCO0FBRUd4QyxNQUFBQSxZQUFZO0FBQ1gsbUNBQUMscUJBQUQsSUFBYyxZQUFZLEVBQUVBLFlBQTVCLEVBQTBDLFFBQVEsRUFBRVosUUFBcEQsR0FISixDQWJGLENBREYsQ0FERjs7Ozs7O0FBd0JELEdBL1FpQyxDOzs7QUFrUnJCVCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9nb1N2ZyBmcm9tIFwiLi4vc3ZnL2xvZ28tc3ZnXCI7XG5pbXBvcnQgQ29udGFjdFN2ZyBmcm9tIFwiLi4vc3ZnL2NvbnRhY3Qtc3ZnXCI7XG4vLyBpbXBvcnQgV2ViQ2FtZXJhU2hhcHNob3QgZnJvbSAnLi4vd2ViLWNhbWVyYS1zaGFwc2hvdCc7XG4vLyBpbXBvcnQgQ29nbml0aXZlRmFjZVNlcnZpY2UgZnJvbSAnLi4vLi4vc2VydmljZXMvQ29nbml0aXZlRmFjZVNlcnZpY2UnO1xuaW1wb3J0IFVybFV0aWwgZnJvbSBcIi4uLy4uL3V0aWwvdXJsLXV0aWxcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBMb2dpbk1ldGhvZHMgZnJvbSBcIi4vbG9naW4vTG9naW5NZXRob2RzXCI7XG5cbmxldCBpbWc7XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzAzNTUwODAvNjkwNzU0MVxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZShcIi4uL2dsb2JhbC5zY3NzXCIpO1xuICByZXF1aXJlKFwiLi9sb2dpbi5zY3NzXCIpO1xuICBpbWcgPSByZXF1aXJlKFwiLi4vLi4vaW1nL2ltZy5qcGdcIikuZGVmYXVsdDtcbn1cblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIC8vIHVzZXJuYW1lOiBcImFkYW10ZXN0XCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIGZhY2VUZW1wbGF0ZTogXCJcIixcbiAgICAgIG9uZVRpbWVDb2RlOiBcIlwiLFxuICAgICAgbG9naW5NZXRob2RzOiB1bmRlZmluZWQsXG4gICAgICAvLyBsb2dpbk1ldGhvZHM6IFtcbiAgICAgICAgLy8gXCJQYXNzd29yZExvZ2luVHlwZVwiLFxuICAgICAgICAvLyBcIlNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlXCIsXG4gICAgICAgIC8vIFwiUGFsbUxvZ2luVHlwZVwiLFxuICAgICAgICAvLyBcIlRleHRMb2dpblR5cGVcIixcbiAgICAgIC8vIF0sXG4gICAgICBmaW5kVXNlckVycm9yOiBcIlwiLFxuICAgICAgcmVxdWVzdExvZ2luQ29kZTogZmFsc2UsXG4gICAgICBmYWNlVmVyaWZ5OiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaFwiKS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVvdXQgMXNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIikuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVpbiAxc1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICByZXF1ZXN0TG9naW5Db2RlID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgIGZvcm1EYXRhLmFwcGVuZCh1c2VybmFtZSwgdGhpcy5zdGF0ZS51c2VybmFtZSk7XG5cbiAgICBsZXQgcmVzO1xuXG4gICAgdHJ5IHtcbiAgICAgIHJlcyA9IGF3YWl0IGF4aW9zLnBvc3QoXCIvcmVxdWVzdC1zb2NpYWwtbG9naW4tY29kZVwiLCB7XG4gICAgICAgIHVzZXJuYW1lOiB0aGlzLnN0YXRlLnVzZXJuYW1lLFxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICAgIGF3YWl0IHJlcy5kYXRhO1xuICAgIHRoaXMuc2V0U3RhdGUoeyByZXF1ZXN0TG9naW5Db2RlOiB0cnVlIH0pO1xuICB9O1xuXG4gIGZpbmRVc2VyID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBsZXQgeyBmaW5kVXNlckVycm9yLCBsb2dpbk1ldGhvZHMgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IGlucHV0ID0gXCIvYXBpL3VzZXJzL2ZpbmQtYnktdXNlcm5hbWUtb3ItZW1haWxcIjtcbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWVPckVtYWlsOiB1c2VybmFtZSB9KSxcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGlucHV0LCBpbml0KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBSZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLmxvZ2luTWV0aG9kcykge1xuICAgICAgZmluZFVzZXJFcnJvciA9IFwiXCI7XG4gICAgICBsb2dpbk1ldGhvZHMgPSByZXNwb25zZS5sb2dpbk1ldGhvZHM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZpbmRVc2VyRXJyb3IgPSBcIk5vIGFjY291bnQgZm91bmQgd2l0aCB0aGF0IHVzZXJuYW1lXCI7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBmaW5kVXNlckVycm9yLCBsb2dpbk1ldGhvZHMgfSk7XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGtleSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTbmFwc2hvdCA9IGFzeW5jIChibG9iKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyTmFtZTEgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGlmIChibG9iKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBpbWdGaWxlID0gbmV3IEZpbGUoW2Jsb2JdLCBcImltZ0ZpbGUucG5nXCIsIHtcbiAgICAgICAgICB0eXBlOiBibG9iLnR5cGUsXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBcIi92ZXJpZnkvZmFjZVwiO1xuICAgICAgICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXCJpbWdcIiwgaW1nRmlsZSwgXCJpbWdGaWxlXCIpO1xuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoXCJ1c2VybmFtZVwiLCB1c2VyTmFtZTEpO1xuICAgICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgYm9keTogZm9ybWRhdGEsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJlbmRlclVzZXJuYW1lUHJvbXB0KCkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGZpbmRVc2VyRXJyb3IgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJuYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Rmlyc3Qgb2ZmPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkhlbHAgdXMgZmluZCB5b3VyIGFjY291bnQ8L2Rpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMuZmluZFVzZXIoZSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxDb250YWN0U3ZnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj5FLW1haWwgb3IgVXNlcm5hbWU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9tcHRcIj5cbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBlLW1haWwgb3IgdXNlcm5hbWUgYmVsb3cuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvLyBwbGFjZWhvbGRlcj1cIi4uLlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAge2ZpbmRVc2VyRXJyb3IubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2ZpbmRVc2VyRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcInN1Y2Nlc3NcIikgPT09IFwiZmFsc2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+RmFpbGVkIGxvZ2luIGF0dGVtcHQ8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2ZpbmRVc2VyRXJyb3J9PC9kaXY+ICovfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaW5kLXVzZXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiRmluZCBtZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXJuYW1lLmxlbmd0aCA8IDF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiBUT0RPOiBub3QgZnVuY3Rpb25hbCBzbyBjb21tZW50aW5nIG91dCBmb3Igbm93LiAqL31cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9yZ290XCI+Rm9yZ290IHlvdXIgdXNlcm5hbWU/PC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMb2dpbldpdGhNZXRob2RzKCkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGxldCBvbmVUaW1lQ29kZUhpZGRlbiA9IFwiaGlkZGVuXCI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5yZXF1ZXN0TG9naW5Db2RlKSB7XG4gICAgICBvbmVUaW1lQ29kZUhpZGRlbiA9IFwidGV4dFwiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dpbi1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkNob29zZSB5b3VyIGxvZ2luIG1ldGhvZDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5UbyBhY2Nlc3MgeW91ciBhY2NvdW50PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibG9naW5cIlxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJSZXF1ZXN0IE9uZSBUaW1lIENvZGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnJlcXVlc3RMb2dpbkNvZGV9XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1ldGhvZC10aXRsZVwiPk1ldGhvZCAjMTwvZGl2PlxuICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9hdXRob3JpemVcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG5hbWVcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxuYW1lXCI+RmFjZSBUZW1wbGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgaWQ9XCJmYWNlVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZhY2VUZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZhY2VUZW1wbGF0ZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxuYW1lXCI+T25lIFRpbWUgQ29kZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgdHlwZT17b25lVGltZUNvZGVIaWRkZW59XG4gICAgICAgICAgICAgICAgICBpZD1cIm9uZVRpbWVDb2RlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbmVUaW1lQ29kZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVJbnB1dENoYW5nZX1cbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLm9uZVRpbWVDb2RlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwiY2xpZW50X2lkXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cInJlc3BvbnNlX3R5cGVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVzcG9uc2VfdHlwZVwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJyZWRpcmVjdF91cmxcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cInNjb3BlXCIgbmFtZT1cInNjb3BlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgICAgICAgPGlucHV0IGlkPVwic3RhdGVcIiBuYW1lPVwic3RhdGVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJcIiAvPlxuXG4gICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsb2dpblwiIHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cIkxvZ2luXCIgLz5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9naW5NZXRob2RzLCB1c2VybmFtZSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGlkPVwic3BsYXNoXCJcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMjM2MmM3XCIsXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxMb2dvU3ZnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPG1haW4gaWQ9XCJtYWluXCIgc3R5bGU9e3sgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdG9wOiAwLCBvcGFjaXR5OiAwIH19PlxuICAgICAgICAgICAgeyFsb2dpbk1ldGhvZHMgJiYgdGhpcy5yZW5kZXJVc2VybmFtZVByb21wdCgpfVxuICAgICAgICAgICAge2xvZ2luTWV0aG9kcyAmJiAoXG4gICAgICAgICAgICAgIDxMb2dpbk1ldGhvZHMgbG9naW5NZXRob2RzPXtsb2dpbk1ldGhvZHN9IHVzZXJuYW1lPXt1c2VybmFtZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luO1xuIl19