"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _logoSvg = _interopRequireDefault(require("../svg/logo-svg"));
var _contactSvg = _interopRequireDefault(require("../svg/contact-svg"));


var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _axios = _interopRequireDefault(require("axios"));
var _LoginMethods = _interopRequireDefault(require("./login/LoginMethods"));
var _ethCrypto = _interopRequireDefault(require("eth-crypto")); // import WebCameraShapshot from '../web-camera-shapshot';
// import CognitiveFaceService from '../../services/CognitiveFaceService';
// import opencv from '../../workers/opencv-4-3-0.js';
// import test from '../../fonts/Montserrat/Montserrat-Regular.ttf'
// console.log(test);
// console.log(opencv);
let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/b3972a6c1e8fa6f6788e119f4cdde614.scss";
  img = "/public/img/f53665075594dc59980862e7e2dca27a.jpg".default;
}

class Login extends _react.default.Component {
  constructor() {var _this;
    super();_this = this;(0, _defineProperty2.default)(this, "loadAppSettings", /*#__PURE__*/(0, _asyncToGenerator2.default)(

































    function* () {
      try {
        const url = "api/app-settings";
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" } };

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
    }));(0, _defineProperty2.default)(this, "requestLoginCode", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(

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
      });return function (_x) {return _ref2.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "findUser", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(

      function* (e) {
        e.preventDefault();

        const { username } = { ..._this.state };
        let { findUserError, loginMethods, securityQuestions } = { ..._this.state };
        const input = "/api/users/login-info";
        const init = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ usernameOrEmail: username }) };

        const httpResponse = yield fetch(input, init);
        const response = yield httpResponse.json();
        if (response.loginMethods) {
          findUserError = "";
          loginMethods = response.loginMethods;
          securityQuestions = response.securityQuestions ? response.securityQuestions.map(sq => {
            return { answer: "", question: sq };
          }) : [];
        } else {
          findUserError = "No account found with that username";
        }
        _this.setState({ findUserError, loginMethods, securityQuestions });
      });return function (_x2) {return _ref3.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "handleInputChange",

    e => {
      const { value } = e.target;
      const key = e.target.name;
      this.setState({ [key]: value });
    });(0, _defineProperty2.default)(this, "handleSnapshot", /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2.default)(

      function* (blob) {
        const { userName1 } = { ..._this.state };
        // if (blob) {
        //   try {
        //     const imgFile = new File([blob], 'imgFile.png', {
        //       type: blob.type,
        //       lastModified: Date.now(),
        //     });
        //     const input = '/verify/face';
        //     const formdata = new FormData();
        //     formdata.append('img', imgFile, 'imgFile');
        //     formdata.append('username', userName1);
        //     const init = {
        //       method: 'POST',
        //       body: formdata,
        //     };
        //     const response = await fetch(input, init);
        //     console.log(response);
        //   } catch (err) {
        //     console.error(err.message);
        //   }
        // }
      });return function (_x3) {return _ref4.apply(this, arguments);};}());this.state = { username: "", // username: "adamtest",
      password: "", faceTemplate: "", oneTimeCode: "", loginMethods: undefined, // loginMethods: [
      // "PasswordLoginType",
      // "SecurityQuestionsLoginType",
      // "PalmLoginType",
      // "TextLoginType",
      // ],
      securityQuestions: undefined, // securityQuestions: ["streetNumGrewOn", "cityGrewIn", "primarySchool"],
      findUserError: "", requestLoginCode: false, faceVerify: false };}componentDidMount() {if (process.env.BROWSER) {this.loadAppSettings();setTimeout(() => {document.getElementById("splash").style.animation = "fadeout 1s";document.getElementById("splash").style.opacity = 0;document.getElementById("main").style.animation = "fadein 1s";document.getElementById("main").style.opacity = 1;}, 1000);}}renderUsernamePrompt() {const { username, findUserError } = { ...this.state };return /*#__PURE__*/_react.default.createElement("div", { className: "username-container" }, /*#__PURE__*/_react.default.createElement("div", { className: "section" }, /*#__PURE__*/_react.default.createElement("div", { className: "title" }, "First off"), /*#__PURE__*/_react.default.createElement("div", { className: "subtitle" }, "Help us find your account"), /*#__PURE__*/
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

    let passwordInput = /*#__PURE__*/
    _react.default.createElement("input", {
      type: "text",
      id: "password",
      name: "password",
      onChange: this.handleInputChange,
      value: this.state.password });



    if (this.state.password !== undefined && this.state.password.length >= 64) {
      let privateKey = this.state.password;

      if (privateKey.substring(0, 2) !== "0x") {
        privateKey = "0x" + privateKey;
      }

      let publicEncryptionKey;
      let publicAddress;

      try {
        publicEncryptionKey = _ethCrypto.default.publicKeyByPrivateKey(privateKey);
        publicAddress = _ethCrypto.default.publicKey.toAddress(publicEncryptionKey);

        document.cookie =
        "bring-your-own-key=" + privateKey.substring(2, privateKey.length);
      } catch (e) {
        console.log("Not using byok");
      }

      if (publicAddress !== undefined) {
        passwordInput = /*#__PURE__*/
        _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
        _react.default.createElement("input", {
          type: "text",
          id: "signature",
          name: "signature",
          value: "request-signature" }), /*#__PURE__*/

        _react.default.createElement("input", {
          type: "text",
          id: "publicAddress",
          name: "publicAddress",
          value: publicAddress }));



      }
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
      _react.default.createElement("label", { htmlFor: "lname" }, "Password:"),
      passwordInput), /*#__PURE__*/


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
    const { loginMethods, username, securityQuestions } = { ...this.state };
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
      _react.default.createElement(_LoginMethods.default, {
        loginMethods: loginMethods,
        username: username,
        securityQuestions: securityQuestions })))));






  }}var _default =


Login;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2xvZ2luLmpzeCJdLCJuYW1lcyI6WyJpbWciLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsImRlZmF1bHQiLCJMb2dpbiIsIlJlYWN0IiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJ1cmwiLCJpbml0IiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJhcHBTZXR0aW5ncyIsImpzb24iLCJ0aXRsZVNldHRpbmciLCJmaW5kIiwiYSIsInNldHRpbmdOYW1lIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInNldHRpbmdWYWx1ZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlIiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwidXNlcm5hbWUiLCJzdGF0ZSIsInJlcyIsImF4aW9zIiwicG9zdCIsImRhdGEiLCJzZXRTdGF0ZSIsInJlcXVlc3RMb2dpbkNvZGUiLCJmaW5kVXNlckVycm9yIiwibG9naW5NZXRob2RzIiwic2VjdXJpdHlRdWVzdGlvbnMiLCJpbnB1dCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidXNlcm5hbWVPckVtYWlsIiwiaHR0cFJlc3BvbnNlIiwibWFwIiwic3EiLCJhbnN3ZXIiLCJxdWVzdGlvbiIsInZhbHVlIiwidGFyZ2V0Iiwia2V5IiwibmFtZSIsImJsb2IiLCJ1c2VyTmFtZTEiLCJwYXNzd29yZCIsImZhY2VUZW1wbGF0ZSIsIm9uZVRpbWVDb2RlIiwidW5kZWZpbmVkIiwiZmFjZVZlcmlmeSIsImNvbXBvbmVudERpZE1vdW50IiwibG9hZEFwcFNldHRpbmdzIiwic2V0VGltZW91dCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwicmVuZGVyVXNlcm5hbWVQcm9tcHQiLCJmaW5kVXNlciIsImhhbmRsZUlucHV0Q2hhbmdlIiwibGVuZ3RoIiwiVXJsVXRpbCIsImdldFF1ZXJ5VmFyaWFibGUiLCJyZW5kZXJMb2dpbldpdGhNZXRob2RzIiwib25lVGltZUNvZGVIaWRkZW4iLCJwYXNzd29yZElucHV0IiwicHJpdmF0ZUtleSIsInN1YnN0cmluZyIsInB1YmxpY0VuY3J5cHRpb25LZXkiLCJwdWJsaWNBZGRyZXNzIiwiRXRoQ3J5cHRvIiwicHVibGljS2V5QnlQcml2YXRlS2V5IiwicHVibGljS2V5IiwidG9BZGRyZXNzIiwiY29va2llIiwicmVuZGVyIiwiYmFja2dyb3VuZENvbG9yIiwibWluSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsInBvc2l0aW9uIiwidG9wIl0sIm1hcHBpbmdzIjoib2RBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQSwrRCxDQUxBO0FBQ0E7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBLElBQUlBLEdBQUo7QUFDQTtBQUNBLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0FILEVBQUFBLEdBQUcsR0FBRyxtREFBNkJJLE9BQW5DO0FBQ0Q7O0FBRUQsTUFBTUMsS0FBTixTQUFvQkMsZUFBTUMsU0FBMUIsQ0FBb0M7QUFDbENDLEVBQUFBLFdBQVcsR0FBRztBQUNaLFdBRFk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQ0ksaUJBQVk7QUFDNUIsVUFBSTtBQUNGLGNBQU1DLEdBQUcsR0FBRyxrQkFBWjtBQUNBLGNBQU1DLElBQUksR0FBRztBQUNYQyxVQUFBQSxNQUFNLEVBQUUsS0FERztBQUVYQyxVQUFBQSxPQUFPLEVBQUUsRUFBRSxnQkFBZ0Isa0JBQWxCLEVBRkUsRUFBYjs7QUFJQSxjQUFNQyxRQUFRLFNBQVNDLEtBQUssQ0FBQ0wsR0FBRCxFQUFNQyxJQUFOLENBQTVCO0FBQ0EsY0FBTUssV0FBVyxTQUFTRixRQUFRLENBQUNHLElBQVQsRUFBMUI7QUFDQSxjQUFNQyxZQUFZLEdBQUdGLFdBQVcsQ0FBQ0csSUFBWixDQUFrQkMsQ0FBRCxJQUFPQSxDQUFDLENBQUNDLFdBQUYsS0FBa0IsT0FBMUMsQ0FBckI7QUFDQSxZQUFJSCxZQUFKLEVBQWtCO0FBQ2hCSSxVQUFBQSxRQUFRLENBQUNDLEtBQVQsR0FBaUJMLFlBQVksQ0FBQ00sWUFBYixHQUE0QixPQUE3QztBQUNEO0FBQ0YsT0FaRCxDQVlFLE9BQU9DLEdBQVAsRUFBWTtBQUNaQyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaO0FBQ0FELFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaO0FBQ0Q7QUFDRixLQXBEYTs7QUFzREssaUJBQU9HLENBQVAsRUFBYTtBQUM5QkEsUUFBQUEsQ0FBQyxDQUFDQyxjQUFGOztBQUVBLGNBQU1DLFFBQVEsR0FBRyxJQUFJQyxRQUFKLEVBQWpCO0FBQ0FELFFBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkMsUUFBaEIsRUFBMEIsS0FBSSxDQUFDQyxLQUFMLENBQVdELFFBQXJDOztBQUVBLFlBQUlFLEdBQUo7O0FBRUEsWUFBSTtBQUNGQSxVQUFBQSxHQUFHLFNBQVNDLGVBQU1DLElBQU4sQ0FBVyw0QkFBWCxFQUF5QztBQUNuREosWUFBQUEsUUFBUSxFQUFFLEtBQUksQ0FBQ0MsS0FBTCxDQUFXRCxRQUQ4QixFQUF6QyxDQUFaOztBQUdELFNBSkQsQ0FJRSxPQUFPUixHQUFQLEVBQVk7QUFDWkMsVUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWjtBQUNBRCxVQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNEO0FBQ0QsY0FBTVUsR0FBRyxDQUFDRyxJQUFWO0FBQ0EsUUFBQSxLQUFJLENBQUNDLFFBQUwsQ0FBYyxFQUFFQyxnQkFBZ0IsRUFBRSxJQUFwQixFQUFkO0FBQ0QsT0F4RWE7O0FBMEVILGlCQUFPWixDQUFQLEVBQWE7QUFDdEJBLFFBQUFBLENBQUMsQ0FBQ0MsY0FBRjs7QUFFQSxjQUFNLEVBQUVJLFFBQUYsS0FBZSxFQUFFLEdBQUcsS0FBSSxDQUFDQyxLQUFWLEVBQXJCO0FBQ0EsWUFBSSxFQUFFTyxhQUFGLEVBQWlCQyxZQUFqQixFQUErQkMsaUJBQS9CLEtBQXFELEVBQUUsR0FBRyxLQUFJLENBQUNULEtBQVYsRUFBekQ7QUFDQSxjQUFNVSxLQUFLLEdBQUcsdUJBQWQ7QUFDQSxjQUFNakMsSUFBSSxHQUFHO0FBQ1hDLFVBQUFBLE1BQU0sRUFBRSxNQURHO0FBRVhDLFVBQUFBLE9BQU8sRUFBRSxFQUFFLGdCQUFnQixrQkFBbEIsRUFGRTtBQUdYZ0MsVUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxFQUFFQyxlQUFlLEVBQUVmLFFBQW5CLEVBQWYsQ0FISyxFQUFiOztBQUtBLGNBQU1nQixZQUFZLFNBQVNsQyxLQUFLLENBQUM2QixLQUFELEVBQVFqQyxJQUFSLENBQWhDO0FBQ0EsY0FBTUcsUUFBUSxTQUFTbUMsWUFBWSxDQUFDaEMsSUFBYixFQUF2QjtBQUNBLFlBQUlILFFBQVEsQ0FBQzRCLFlBQWIsRUFBMkI7QUFDekJELFVBQUFBLGFBQWEsR0FBRyxFQUFoQjtBQUNBQyxVQUFBQSxZQUFZLEdBQUc1QixRQUFRLENBQUM0QixZQUF4QjtBQUNBQyxVQUFBQSxpQkFBaUIsR0FBRzdCLFFBQVEsQ0FBQzZCLGlCQUFULEdBQTZCN0IsUUFBUSxDQUFDNkIsaUJBQVQsQ0FBMkJPLEdBQTNCLENBQWdDQyxFQUFELElBQVE7QUFDdEYsbUJBQU8sRUFBRUMsTUFBTSxFQUFFLEVBQVYsRUFBY0MsUUFBUSxFQUFFRixFQUF4QixFQUFQO0FBQ0QsV0FGZ0QsQ0FBN0IsR0FFZixFQUZMO0FBR0QsU0FORCxNQU1PO0FBQ0xWLFVBQUFBLGFBQWEsR0FBRyxxQ0FBaEI7QUFDRDtBQUNELFFBQUEsS0FBSSxDQUFDRixRQUFMLENBQWMsRUFBRUUsYUFBRixFQUFpQkMsWUFBakIsRUFBK0JDLGlCQUEvQixFQUFkO0FBQ0QsT0FqR2E7O0FBbUdPZixJQUFBQSxDQUFELElBQU87QUFDekIsWUFBTSxFQUFFMEIsS0FBRixLQUFZMUIsQ0FBQyxDQUFDMkIsTUFBcEI7QUFDQSxZQUFNQyxHQUFHLEdBQUc1QixDQUFDLENBQUMyQixNQUFGLENBQVNFLElBQXJCO0FBQ0EsV0FBS2xCLFFBQUwsQ0FBYyxFQUFFLENBQUNpQixHQUFELEdBQU9GLEtBQVQsRUFBZDtBQUNELEtBdkdhOztBQXlHRyxpQkFBT0ksSUFBUCxFQUFnQjtBQUMvQixjQUFNLEVBQUVDLFNBQUYsS0FBZ0IsRUFBRSxHQUFHLEtBQUksQ0FBQ3pCLEtBQVYsRUFBdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0QsT0EvSGEsb0VBRVosS0FBS0EsS0FBTCxHQUFhLEVBQ1hELFFBQVEsRUFBRSxFQURDLEVBRVg7QUFDQTJCLE1BQUFBLFFBQVEsRUFBRSxFQUhDLEVBSVhDLFlBQVksRUFBRSxFQUpILEVBS1hDLFdBQVcsRUFBRSxFQUxGLEVBTVhwQixZQUFZLEVBQUVxQixTQU5ILEVBT1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FwQixNQUFBQSxpQkFBaUIsRUFBRW9CLFNBYlIsRUFjWDtBQUNBdEIsTUFBQUEsYUFBYSxFQUFFLEVBZkosRUFnQlhELGdCQUFnQixFQUFFLEtBaEJQLEVBaUJYd0IsVUFBVSxFQUFFLEtBakJELEVBQWIsQ0FtQkQsQ0FFREMsaUJBQWlCLEdBQUcsQ0FDbEIsSUFBSS9ELE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QixDQUN2QixLQUFLOEQsZUFBTCxHQUNBQyxVQUFVLENBQUMsTUFBTSxDQUNmN0MsUUFBUSxDQUFDOEMsY0FBVCxDQUF3QixRQUF4QixFQUFrQ0MsS0FBbEMsQ0FBd0NDLFNBQXhDLEdBQW9ELFlBQXBELENBQ0FoRCxRQUFRLENBQUM4QyxjQUFULENBQXdCLFFBQXhCLEVBQWtDQyxLQUFsQyxDQUF3Q0UsT0FBeEMsR0FBa0QsQ0FBbEQsQ0FDQWpELFFBQVEsQ0FBQzhDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDQyxTQUF0QyxHQUFrRCxXQUFsRCxDQUNBaEQsUUFBUSxDQUFDOEMsY0FBVCxDQUF3QixNQUF4QixFQUFnQ0MsS0FBaEMsQ0FBc0NFLE9BQXRDLEdBQWdELENBQWhELENBQ0QsQ0FMUyxFQUtQLElBTE8sQ0FBVixDQU1ELENBQ0YsQ0FnR0RDLG9CQUFvQixHQUFHLENBQ3JCLE1BQU0sRUFBRXZDLFFBQUYsRUFBWVEsYUFBWixLQUE4QixFQUFFLEdBQUcsS0FBS1AsS0FBVixFQUFwQyxDQUNBLG9CQUNFLHNDQUFLLFNBQVMsRUFBQyxvQkFBZixpQkFDRSxzQ0FBSyxTQUFTLEVBQUMsU0FBZixpQkFDRSxzQ0FBSyxTQUFTLEVBQUMsT0FBZixnQkFERixlQUVFLHNDQUFLLFNBQVMsRUFBQyxVQUFmLGdDQUZGO0FBR0UsMkNBQU0sUUFBUSxFQUFHTixDQUFELElBQU8sS0FBSzZDLFFBQUwsQ0FBYzdDLENBQWQsQ0FBdkI7QUFDRSwwQ0FBSyxTQUFTLEVBQUMsTUFBZjtBQUNFLGlDQUFDLG1CQUFELE9BREY7QUFFRSwwQ0FBSyxTQUFTLEVBQUMsVUFBZix5QkFGRjtBQUdFLDBDQUFLLFNBQVMsRUFBQyxRQUFmLG9EQUhGOzs7QUFNRTtBQUNFLE1BQUEsU0FBUyxFQUFDLGdCQURaO0FBRUUsTUFBQSxJQUFJLEVBQUMsVUFGUDtBQUdFLE1BQUEsSUFBSSxFQUFDO0FBQ0w7QUFKRixRQUtFLEtBQUssRUFBRUssUUFMVDtBQU1FLE1BQUEsUUFBUSxFQUFFLEtBQUt5QyxpQkFOakIsR0FORjs7QUFjRSwwQ0FBSyxTQUFTLEVBQUMsT0FBZjtBQUNHakMsSUFBQUEsYUFBYSxDQUFDa0MsTUFBZCxHQUF1QixDQUF2QjtBQUNDO0FBQ0dsQyxJQUFBQSxhQURIO0FBRUUsNENBRkYsQ0FGSjs7O0FBT0dtQyxxQkFBUUMsZ0JBQVIsQ0FBeUIsU0FBekIsTUFBd0MsT0FBeEM7QUFDQyxpQ0FBQyxlQUFELCtCQVJKLENBZEY7Ozs7O0FBMkJFO0FBQ0UsTUFBQSxTQUFTLEVBQUMsV0FEWjtBQUVFLE1BQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxNQUFBLEtBQUssRUFBQyxTQUhSO0FBSUUsTUFBQSxRQUFRLEVBQUU1QyxRQUFRLENBQUMwQyxNQUFULEdBQWtCLENBSjlCLEdBM0JGLENBREYsQ0FIRixDQURGLENBREY7Ozs7Ozs7OztBQThDRDs7QUFFREcsRUFBQUEsc0JBQXNCLEdBQUc7QUFDdkIsVUFBTSxFQUFFN0MsUUFBRixLQUFlLEVBQUUsR0FBRyxLQUFLQyxLQUFWLEVBQXJCO0FBQ0EsUUFBSTZDLGlCQUFpQixHQUFHLFFBQXhCOztBQUVBLFFBQUksS0FBSzdDLEtBQUwsQ0FBV00sZ0JBQWYsRUFBaUM7QUFDL0J1QyxNQUFBQSxpQkFBaUIsR0FBRyxNQUFwQjtBQUNEOztBQUVELFFBQUlDLGFBQWE7QUFDZjtBQUNFLE1BQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxNQUFBLEVBQUUsRUFBQyxVQUZMO0FBR0UsTUFBQSxJQUFJLEVBQUMsVUFIUDtBQUlFLE1BQUEsUUFBUSxFQUFFLEtBQUtOLGlCQUpqQjtBQUtFLE1BQUEsS0FBSyxFQUFFLEtBQUt4QyxLQUFMLENBQVcwQixRQUxwQixHQURGOzs7O0FBVUEsUUFBSSxLQUFLMUIsS0FBTCxDQUFXMEIsUUFBWCxLQUF3QkcsU0FBeEIsSUFBcUMsS0FBSzdCLEtBQUwsQ0FBVzBCLFFBQVgsQ0FBb0JlLE1BQXBCLElBQThCLEVBQXZFLEVBQTJFO0FBQ3pFLFVBQUlNLFVBQVUsR0FBRyxLQUFLL0MsS0FBTCxDQUFXMEIsUUFBNUI7O0FBRUEsVUFBSXFCLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQixDQUFyQixFQUF3QixDQUF4QixNQUErQixJQUFuQyxFQUF5QztBQUN2Q0QsUUFBQUEsVUFBVSxHQUFHLE9BQU9BLFVBQXBCO0FBQ0Q7O0FBRUQsVUFBSUUsbUJBQUo7QUFDQSxVQUFJQyxhQUFKOztBQUVBLFVBQUk7QUFDRkQsUUFBQUEsbUJBQW1CLEdBQUdFLG1CQUFVQyxxQkFBVixDQUFnQ0wsVUFBaEMsQ0FBdEI7QUFDQUcsUUFBQUEsYUFBYSxHQUFHQyxtQkFBVUUsU0FBVixDQUFvQkMsU0FBcEIsQ0FBOEJMLG1CQUE5QixDQUFoQjs7QUFFQTdELFFBQUFBLFFBQVEsQ0FBQ21FLE1BQVQ7QUFDRSxnQ0FBd0JSLFVBQVUsQ0FBQ0MsU0FBWCxDQUFxQixDQUFyQixFQUF3QkQsVUFBVSxDQUFDTixNQUFuQyxDQUQxQjtBQUVELE9BTkQsQ0FNRSxPQUFPL0MsQ0FBUCxFQUFVO0FBQ1ZGLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBQ0Q7O0FBRUQsVUFBSXlELGFBQWEsS0FBS3JCLFNBQXRCLEVBQWlDO0FBQy9CaUIsUUFBQUEsYUFBYTtBQUNYLHFDQUFDLGVBQUQ7QUFDRTtBQUNFLFVBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxVQUFBLEVBQUUsRUFBQyxXQUZMO0FBR0UsVUFBQSxJQUFJLEVBQUMsV0FIUDtBQUlFLFVBQUEsS0FBSyxFQUFDLG1CQUpSLEdBREY7O0FBT0U7QUFDRSxVQUFBLElBQUksRUFBQyxNQURQO0FBRUUsVUFBQSxFQUFFLEVBQUMsZUFGTDtBQUdFLFVBQUEsSUFBSSxFQUFDLGVBSFA7QUFJRSxVQUFBLEtBQUssRUFBRUksYUFKVCxHQVBGLENBREY7Ozs7QUFnQkQ7QUFDRjs7QUFFRDtBQUNFLDRDQUFLLFNBQVMsRUFBQyxpQkFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxTQUFmO0FBQ0UsNENBQUssU0FBUyxFQUFDLE9BQWYsK0JBREY7QUFFRSw0Q0FBSyxTQUFTLEVBQUMsVUFBZiw2QkFGRjtBQUdFLDRDQUFLLFNBQVMsRUFBQyxNQUFmO0FBQ0U7QUFDRSxRQUFBLFNBQVMsRUFBQyxPQURaO0FBRUUsUUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUEsS0FBSyxFQUFDLHVCQUhSO0FBSUUsUUFBQSxPQUFPLEVBQUUsS0FBSzVDLGdCQUpoQixHQURGOzs7QUFRRSw0Q0FBSyxTQUFTLEVBQUMsY0FBZixnQkFSRjtBQVNFLDZDQUFNLE1BQU0sRUFBQyxNQUFiLEVBQW9CLE1BQU0sRUFBQyxZQUEzQjtBQUNFO0FBQ0UsUUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUEsRUFBRSxFQUFDLFVBRkw7QUFHRSxRQUFBLElBQUksRUFBQyxVQUhQO0FBSUUsUUFBQSxLQUFLLEVBQUVQLFFBSlQsR0FERjs7QUFPRSw0Q0FBSyxTQUFTLEVBQUMsWUFBZjtBQUNFLDhDQUFPLE9BQU8sRUFBQyxPQUFmLGdCQURGO0FBRUcrQyxNQUFBQSxhQUZILENBUEY7OztBQVlFLDRDQUFLLFNBQVMsRUFBQyxZQUFmO0FBQ0UsOENBQU8sT0FBTyxFQUFDLE9BQWYscUJBREY7QUFFRTtBQUNFLFFBQUEsSUFBSSxFQUFDLE1BRFA7QUFFRSxRQUFBLEVBQUUsRUFBQyxjQUZMO0FBR0UsUUFBQSxJQUFJLEVBQUMsY0FIUDtBQUlFLFFBQUEsUUFBUSxFQUFFLEtBQUtOLGlCQUpqQjtBQUtFLFFBQUEsS0FBSyxFQUFFLEtBQUt4QyxLQUFMLENBQVcyQixZQUxwQixHQUZGLENBWkY7Ozs7QUF1QkUsNENBQUssU0FBUyxFQUFDLFlBQWY7QUFDRSw4Q0FBTyxPQUFPLEVBQUMsT0FBZixxQkFERjtBQUVFO0FBQ0UsUUFBQSxJQUFJLEVBQUVrQixpQkFEUjtBQUVFLFFBQUEsRUFBRSxFQUFDLGFBRkw7QUFHRSxRQUFBLElBQUksRUFBQyxhQUhQO0FBSUUsUUFBQSxRQUFRLEVBQUUsS0FBS0wsaUJBSmpCO0FBS0UsUUFBQSxLQUFLLEVBQUUsS0FBS3hDLEtBQUwsQ0FBVzRCLFdBTHBCLEdBRkYsQ0F2QkY7Ozs7QUFrQ0U7QUFDRSxRQUFBLEVBQUUsRUFBQyxXQURMO0FBRUUsUUFBQSxJQUFJLEVBQUMsV0FGUDtBQUdFLFFBQUEsSUFBSSxFQUFDLFFBSFA7QUFJRSxRQUFBLEtBQUssRUFBRWMsaUJBQVFDLGdCQUFSLENBQXlCLFdBQXpCLENBSlQsR0FsQ0Y7O0FBd0NFO0FBQ0UsUUFBQSxFQUFFLEVBQUMsZUFETDtBQUVFLFFBQUEsSUFBSSxFQUFDLGVBRlA7QUFHRSxRQUFBLElBQUksRUFBQyxRQUhQO0FBSUUsUUFBQSxLQUFLLEVBQUVELGlCQUFRQyxnQkFBUixDQUF5QixlQUF6QixDQUpULEdBeENGOztBQThDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLGNBREw7QUFFRSxRQUFBLElBQUksRUFBQyxjQUZQO0FBR0UsUUFBQSxJQUFJLEVBQUMsUUFIUDtBQUlFLFFBQUEsS0FBSyxFQUFFRCxpQkFBUUMsZ0JBQVIsQ0FBeUIsY0FBekIsQ0FKVCxHQTlDRjs7QUFvREUsOENBQU8sRUFBRSxFQUFDLE9BQVYsRUFBa0IsSUFBSSxFQUFDLE9BQXZCLEVBQStCLElBQUksRUFBQyxRQUFwQyxFQUE2QyxLQUFLLEVBQUMsRUFBbkQsR0FwREY7QUFxREUsOENBQU8sRUFBRSxFQUFDLE9BQVYsRUFBa0IsSUFBSSxFQUFDLE9BQXZCLEVBQStCLElBQUksRUFBQyxRQUFwQyxFQUE2QyxLQUFLLEVBQUMsRUFBbkQsR0FyREY7O0FBdURFLDhDQUFPLFNBQVMsRUFBQyxPQUFqQixFQUF5QixJQUFJLEVBQUMsUUFBOUIsRUFBdUMsS0FBSyxFQUFDLE9BQTdDLEdBdkRGLENBVEYsQ0FIRixDQURGLENBREY7Ozs7OztBQTJFRDs7QUFFRGEsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTSxFQUFFaEQsWUFBRixFQUFnQlQsUUFBaEIsRUFBMEJVLGlCQUExQixLQUFnRCxFQUFFLEdBQUcsS0FBS1QsS0FBVixFQUF0RDtBQUNBO0FBQ0UsbUNBQUMsZUFBRDtBQUNFLG1DQUFDLGVBQUQ7QUFDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLFFBREw7QUFFRSxRQUFBLEtBQUssRUFBRTtBQUNMeUQsVUFBQUEsZUFBZSxFQUFFLFNBRFo7QUFFTEMsVUFBQUEsU0FBUyxFQUFFLE9BRk47QUFHTEMsVUFBQUEsT0FBTyxFQUFFLE1BSEo7QUFJTEMsVUFBQUEsVUFBVSxFQUFFLFFBSlA7QUFLTEMsVUFBQUEsY0FBYyxFQUFFLFFBTFgsRUFGVDs7O0FBVUUsbUNBQUMsZ0JBQUQsT0FWRixDQURGOztBQWFFLDZDQUFNLEVBQUUsRUFBQyxNQUFULEVBQWdCLEtBQUssRUFBRSxFQUFFQyxRQUFRLEVBQUUsVUFBWixFQUF3QkMsR0FBRyxFQUFFLENBQTdCLEVBQWdDMUIsT0FBTyxFQUFFLENBQXpDLEVBQXZCO0FBQ0csT0FBQzdCLFlBQUQsSUFBaUIsS0FBSzhCLG9CQUFMLEVBRHBCO0FBRUc5QixNQUFBQSxZQUFZO0FBQ1gsbUNBQUMscUJBQUQ7QUFDRSxRQUFBLFlBQVksRUFBRUEsWUFEaEI7QUFFRSxRQUFBLFFBQVEsRUFBRVQsUUFGWjtBQUdFLFFBQUEsaUJBQWlCLEVBQUVVLGlCQUhyQixHQUhKLENBYkYsQ0FERixDQURGOzs7Ozs7O0FBNEJELEdBelZpQyxDOzs7QUE0VnJCckMsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExvZ29TdmcgZnJvbSBcIi4uL3N2Zy9sb2dvLXN2Z1wiO1xuaW1wb3J0IENvbnRhY3RTdmcgZnJvbSBcIi4uL3N2Zy9jb250YWN0LXN2Z1wiO1xuLy8gaW1wb3J0IFdlYkNhbWVyYVNoYXBzaG90IGZyb20gJy4uL3dlYi1jYW1lcmEtc2hhcHNob3QnO1xuLy8gaW1wb3J0IENvZ25pdGl2ZUZhY2VTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0NvZ25pdGl2ZUZhY2VTZXJ2aWNlJztcbmltcG9ydCBVcmxVdGlsIGZyb20gXCIuLi8uLi91dGlsL3VybC11dGlsXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgTG9naW5NZXRob2RzIGZyb20gXCIuL2xvZ2luL0xvZ2luTWV0aG9kc1wiO1xuaW1wb3J0IEV0aENyeXB0byBmcm9tIFwiZXRoLWNyeXB0b1wiO1xuLy8gaW1wb3J0IG9wZW5jdiBmcm9tICcuLi8uLi93b3JrZXJzL29wZW5jdi00LTMtMC5qcyc7XG4vLyBpbXBvcnQgdGVzdCBmcm9tICcuLi8uLi9mb250cy9Nb250c2VycmF0L01vbnRzZXJyYXQtUmVndWxhci50dGYnXG5cbi8vIGNvbnNvbGUubG9nKHRlc3QpO1xuLy8gY29uc29sZS5sb2cob3BlbmN2KTtcbmxldCBpbWc7XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzAzNTUwODAvNjkwNzU0MVxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZShcIi4uL2dsb2JhbC5zY3NzXCIpO1xuICByZXF1aXJlKFwiLi9sb2dpbi5zY3NzXCIpO1xuICBpbWcgPSByZXF1aXJlKFwiLi4vLi4vaW1nL2ltZy5qcGdcIikuZGVmYXVsdDtcbn1cblxuY2xhc3MgTG9naW4gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIC8vIHVzZXJuYW1lOiBcImFkYW10ZXN0XCIsXG4gICAgICBwYXNzd29yZDogXCJcIixcbiAgICAgIGZhY2VUZW1wbGF0ZTogXCJcIixcbiAgICAgIG9uZVRpbWVDb2RlOiBcIlwiLFxuICAgICAgbG9naW5NZXRob2RzOiB1bmRlZmluZWQsXG4gICAgICAvLyBsb2dpbk1ldGhvZHM6IFtcbiAgICAgIC8vIFwiUGFzc3dvcmRMb2dpblR5cGVcIixcbiAgICAgIC8vIFwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIixcbiAgICAgIC8vIFwiUGFsbUxvZ2luVHlwZVwiLFxuICAgICAgLy8gXCJUZXh0TG9naW5UeXBlXCIsXG4gICAgICAvLyBdLFxuICAgICAgc2VjdXJpdHlRdWVzdGlvbnM6IHVuZGVmaW5lZCxcbiAgICAgIC8vIHNlY3VyaXR5UXVlc3Rpb25zOiBbXCJzdHJlZXROdW1HcmV3T25cIiwgXCJjaXR5R3Jld0luXCIsIFwicHJpbWFyeVNjaG9vbFwiXSxcbiAgICAgIGZpbmRVc2VyRXJyb3I6IFwiXCIsXG4gICAgICByZXF1ZXN0TG9naW5Db2RlOiBmYWxzZSxcbiAgICAgIGZhY2VWZXJpZnk6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICAgICAgdGhpcy5sb2FkQXBwU2V0dGluZ3MoKTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNwbGFzaFwiKS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVvdXQgMXNcIjtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzcGxhc2hcIikuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKS5zdHlsZS5hbmltYXRpb24gPSBcImZhZGVpbiAxc1wiO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIikuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgICB9LCAxMDAwKTtcbiAgICB9XG4gIH1cblxuICBsb2FkQXBwU2V0dGluZ3MgPSBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVybCA9IFwiYXBpL2FwcC1zZXR0aW5nc1wiO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICB9O1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgICAgY29uc3QgYXBwU2V0dGluZ3MgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICBjb25zdCB0aXRsZVNldHRpbmcgPSBhcHBTZXR0aW5ncy5maW5kKChhKSA9PiBhLnNldHRpbmdOYW1lID09PSBcInRpdGxlXCIpO1xuICAgICAgaWYgKHRpdGxlU2V0dGluZykge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlU2V0dGluZy5zZXR0aW5nVmFsdWUgKyBcIiBBdXRoXCI7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9O1xuXG4gIHJlcXVlc3RMb2dpbkNvZGUgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKHVzZXJuYW1lLCB0aGlzLnN0YXRlLnVzZXJuYW1lKTtcblxuICAgIGxldCByZXM7XG5cbiAgICB0cnkge1xuICAgICAgcmVzID0gYXdhaXQgYXhpb3MucG9zdChcIi9yZXF1ZXN0LXNvY2lhbC1sb2dpbi1jb2RlXCIsIHtcbiAgICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcm5hbWUsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gICAgYXdhaXQgcmVzLmRhdGE7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJlcXVlc3RMb2dpbkNvZGU6IHRydWUgfSk7XG4gIH07XG5cbiAgZmluZFVzZXIgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGxldCB7IGZpbmRVc2VyRXJyb3IsIGxvZ2luTWV0aG9kcywgc2VjdXJpdHlRdWVzdGlvbnMgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IGlucHV0ID0gXCIvYXBpL3VzZXJzL2xvZ2luLWluZm9cIjtcbiAgICBjb25zdCBpbml0ID0ge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdXNlcm5hbWVPckVtYWlsOiB1c2VybmFtZSB9KSxcbiAgICB9O1xuICAgIGNvbnN0IGh0dHBSZXNwb25zZSA9IGF3YWl0IGZldGNoKGlucHV0LCBpbml0KTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGh0dHBSZXNwb25zZS5qc29uKCk7XG4gICAgaWYgKHJlc3BvbnNlLmxvZ2luTWV0aG9kcykge1xuICAgICAgZmluZFVzZXJFcnJvciA9IFwiXCI7XG4gICAgICBsb2dpbk1ldGhvZHMgPSByZXNwb25zZS5sb2dpbk1ldGhvZHM7XG4gICAgICBzZWN1cml0eVF1ZXN0aW9ucyA9IHJlc3BvbnNlLnNlY3VyaXR5UXVlc3Rpb25zID8gcmVzcG9uc2Uuc2VjdXJpdHlRdWVzdGlvbnMubWFwKChzcSkgPT4ge1xuICAgICAgICByZXR1cm4geyBhbnN3ZXI6IFwiXCIsIHF1ZXN0aW9uOiBzcSB9O1xuICAgICAgfSkgOiBbXTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmluZFVzZXJFcnJvciA9IFwiTm8gYWNjb3VudCBmb3VuZCB3aXRoIHRoYXQgdXNlcm5hbWVcIjtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZpbmRVc2VyRXJyb3IsIGxvZ2luTWV0aG9kcywgc2VjdXJpdHlRdWVzdGlvbnMgfSk7XG4gIH07XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGtleSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTbmFwc2hvdCA9IGFzeW5jIChibG9iKSA9PiB7XG4gICAgY29uc3QgeyB1c2VyTmFtZTEgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIC8vIGlmIChibG9iKSB7XG4gICAgLy8gICB0cnkge1xuICAgIC8vICAgICBjb25zdCBpbWdGaWxlID0gbmV3IEZpbGUoW2Jsb2JdLCAnaW1nRmlsZS5wbmcnLCB7XG4gICAgLy8gICAgICAgdHlwZTogYmxvYi50eXBlLFxuICAgIC8vICAgICAgIGxhc3RNb2RpZmllZDogRGF0ZS5ub3coKSxcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gICAgIGNvbnN0IGlucHV0ID0gJy92ZXJpZnkvZmFjZSc7XG4gICAgLy8gICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgLy8gICAgIGZvcm1kYXRhLmFwcGVuZCgnaW1nJywgaW1nRmlsZSwgJ2ltZ0ZpbGUnKTtcbiAgICAvLyAgICAgZm9ybWRhdGEuYXBwZW5kKCd1c2VybmFtZScsIHVzZXJOYW1lMSk7XG4gICAgLy8gICAgIGNvbnN0IGluaXQgPSB7XG4gICAgLy8gICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgLy8gICAgICAgYm9keTogZm9ybWRhdGEsXG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgLy8gICB9IGNhdGNoIChlcnIpIHtcbiAgICAvLyAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICB9O1xuXG4gIHJlbmRlclVzZXJuYW1lUHJvbXB0KCkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUsIGZpbmRVc2VyRXJyb3IgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInVzZXJuYW1lLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+Rmlyc3Qgb2ZmPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkhlbHAgdXMgZmluZCB5b3VyIGFjY291bnQ8L2Rpdj5cbiAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KGUpID0+IHRoaXMuZmluZFVzZXIoZSl9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgICAgICAgIDxDb250YWN0U3ZnIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidXNlcm5hbWVcIj5FLW1haWwgb3IgVXNlcm5hbWU8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9tcHRcIj5cbiAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgeW91ciBlLW1haWwgb3IgdXNlcm5hbWUgYmVsb3cuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVzZXJuYW1lLWlucHV0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAvLyBwbGFjZWhvbGRlcj1cIi4uLlwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+XG4gICAgICAgICAgICAgICAge2ZpbmRVc2VyRXJyb3IubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2ZpbmRVc2VyRXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAge1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcInN1Y2Nlc3NcIikgPT09IFwiZmFsc2VcIiAmJiAoXG4gICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+RmFpbGVkIGxvZ2luIGF0dGVtcHQ8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImVycm9yXCI+e2ZpbmRVc2VyRXJyb3J9PC9kaXY+ICovfVxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaW5kLXVzZXJcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiRmluZCBtZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3VzZXJuYW1lLmxlbmd0aCA8IDF9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHsvKiBUT0RPOiBub3QgZnVuY3Rpb25hbCBzbyBjb21tZW50aW5nIG91dCBmb3Igbm93LiAqL31cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZm9yZ290XCI+Rm9yZ290IHlvdXIgdXNlcm5hbWU/PC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMb2dpbldpdGhNZXRob2RzKCkge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGxldCBvbmVUaW1lQ29kZUhpZGRlbiA9IFwiaGlkZGVuXCI7XG5cbiAgICBpZiAodGhpcy5zdGF0ZS5yZXF1ZXN0TG9naW5Db2RlKSB7XG4gICAgICBvbmVUaW1lQ29kZUhpZGRlbiA9IFwidGV4dFwiO1xuICAgIH1cblxuICAgIGxldCBwYXNzd29yZElucHV0ID0gKFxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgaWQ9XCJwYXNzd29yZFwiXG4gICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUlucHV0Q2hhbmdlfVxuICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wYXNzd29yZH1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGlmICh0aGlzLnN0YXRlLnBhc3N3b3JkICE9PSB1bmRlZmluZWQgJiYgdGhpcy5zdGF0ZS5wYXNzd29yZC5sZW5ndGggPj0gNjQpIHtcbiAgICAgIGxldCBwcml2YXRlS2V5ID0gdGhpcy5zdGF0ZS5wYXNzd29yZDtcblxuICAgICAgaWYgKHByaXZhdGVLZXkuc3Vic3RyaW5nKDAsIDIpICE9PSBcIjB4XCIpIHtcbiAgICAgICAgcHJpdmF0ZUtleSA9IFwiMHhcIiArIHByaXZhdGVLZXk7XG4gICAgICB9XG5cbiAgICAgIGxldCBwdWJsaWNFbmNyeXB0aW9uS2V5O1xuICAgICAgbGV0IHB1YmxpY0FkZHJlc3M7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHB1YmxpY0VuY3J5cHRpb25LZXkgPSBFdGhDcnlwdG8ucHVibGljS2V5QnlQcml2YXRlS2V5KHByaXZhdGVLZXkpO1xuICAgICAgICBwdWJsaWNBZGRyZXNzID0gRXRoQ3J5cHRvLnB1YmxpY0tleS50b0FkZHJlc3MocHVibGljRW5jcnlwdGlvbktleSk7XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICBcImJyaW5nLXlvdXItb3duLWtleT1cIiArIHByaXZhdGVLZXkuc3Vic3RyaW5nKDIsIHByaXZhdGVLZXkubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgdXNpbmcgYnlva1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHB1YmxpY0FkZHJlc3MgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXNzd29yZElucHV0ID0gKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwic2lnbmF0dXJlXCJcbiAgICAgICAgICAgICAgbmFtZT1cInNpZ25hdHVyZVwiXG4gICAgICAgICAgICAgIHZhbHVlPVwicmVxdWVzdC1zaWduYXR1cmVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIGlkPVwicHVibGljQWRkcmVzc1wiXG4gICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNBZGRyZXNzXCJcbiAgICAgICAgICAgICAgdmFsdWU9e3B1YmxpY0FkZHJlc3N9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5DaG9vc2UgeW91ciBsb2dpbiBtZXRob2Q8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+VG8gYWNjZXNzIHlvdXIgYWNjb3VudDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luXCJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiUmVxdWVzdCBPbmUgVGltZSBDb2RlXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5yZXF1ZXN0TG9naW5Db2RlfVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZXRob2QtdGl0bGVcIj5NZXRob2QgIzE8L2Rpdj5cbiAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIlBPU1RcIiBhY3Rpb249XCIvYXV0aG9yaXplXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlcm5hbWVcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VybmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0taW5wdXRcIj5cbiAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxuYW1lXCI+UGFzc3dvcmQ6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICB7cGFzc3dvcmRJbnB1dH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsbmFtZVwiPkZhY2UgVGVtcGxhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgIGlkPVwiZmFjZVRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJmYWNlVGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5mYWNlVGVtcGxhdGV9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsbmFtZVwiPk9uZSBUaW1lIENvZGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9e29uZVRpbWVDb2RlSGlkZGVufVxuICAgICAgICAgICAgICAgICAgaWQ9XCJvbmVUaW1lQ29kZVwiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwib25lVGltZUNvZGVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlSW5wdXRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5vbmVUaW1lQ29kZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICBpZD1cImNsaWVudF9pZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNsaWVudF9pZFwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImNsaWVudF9pZFwiKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgaWQ9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVzcG9uc2VfdHlwZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcInJlc3BvbnNlX3R5cGVcIil9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIGlkPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVkaXJlY3RfdXJsXCIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8aW5wdXQgaWQ9XCJzY29wZVwiIG5hbWU9XCJzY29wZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgICAgICAgIDxpbnB1dCBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cblxuICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5cIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJMb2dpblwiIC8+XG4gICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGxvZ2luTWV0aG9kcywgdXNlcm5hbWUsIHNlY3VyaXR5UXVlc3Rpb25zIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgaWQ9XCJzcGxhc2hcIlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiMyMzYyYzdcIixcbiAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExvZ29TdmcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bWFpbiBpZD1cIm1haW5cIiBzdHlsZT17eyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB0b3A6IDAsIG9wYWNpdHk6IDAgfX0+XG4gICAgICAgICAgICB7IWxvZ2luTWV0aG9kcyAmJiB0aGlzLnJlbmRlclVzZXJuYW1lUHJvbXB0KCl9XG4gICAgICAgICAgICB7bG9naW5NZXRob2RzICYmIChcbiAgICAgICAgICAgICAgPExvZ2luTWV0aG9kc1xuICAgICAgICAgICAgICAgIGxvZ2luTWV0aG9kcz17bG9naW5NZXRob2RzfVxuICAgICAgICAgICAgICAgIHVzZXJuYW1lPXt1c2VybmFtZX1cbiAgICAgICAgICAgICAgICBzZWN1cml0eVF1ZXN0aW9ucz17c2VjdXJpdHlRdWVzdGlvbnN9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbjtcbiJdfQ==