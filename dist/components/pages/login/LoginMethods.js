"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _urlUtil = _interopRequireDefault(require("../../../util/url-util"));
var _LoginMethodOptionSvg = _interopRequireDefault(require("../../svg/LoginMethodOptionSvg"));
var _PasswordMethodLoginSvg = _interopRequireDefault(require("../../svg/PasswordMethodLoginSvg"));
var _KeycodeInputSvg = _interopRequireDefault(require("../../svg/KeycodeInputSvg"));
var _delay = _interopRequireDefault(require("../../../util/delay"));
var _TextMethodLoginSvg = _interopRequireDefault(require("../../svg/TextMethodLoginSvg"));

if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/f7c60eadf5db2a67205c5d57b8f10f5d.scss"));
}

class LoginMethods extends _react.Component {constructor(...args) {var _this;super(...args);_this = this;(0, _defineProperty2.default)(this, "state",
    {
      username: "",
      password: "",
      faceTemplate: "",
      oneTimeCode: "",
      requestLoginCode: false,
      faceVerify: false,
      keycode: "",
      selectedLoginMethod: ""
      // selectedLoginMethod: "TextLoginType",
    });(0, _defineProperty2.default)(this, "sendKeycode", /*#__PURE__*/(0, _asyncToGenerator2.default)(

    function* () {
      const { username } = { ..._this.props };
      const keycodeSentEl = document.getElementById("keycode-sent");
      keycodeSentEl.style.opacity = 0.6;
      try {
        const url = "api/users/send-text-otp";
        const init = {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username }) };


        yield fetch(url, init);
      } catch (err) {
        console.log("Error!");
        console.log(err);
      }
      yield (0, _delay.default)(2000);
      keycodeSentEl.style.opacity = 0;
    }));}

  renderHiddenInputs() {
    const { username } = { ...this.props };
    return /*#__PURE__*/(
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", id: "username", name: "username", value: username }), /*#__PURE__*/
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
      _react.default.createElement("input", { id: "state", name: "state", type: "hidden", value: "" })));


  }

  renderSelectedLoginMethod(loginMethod) {
    const { password, keycode } = { ...this.state };
    switch (loginMethod) {
      case "PasswordLoginType":
        return /*#__PURE__*/(
          _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
          _react.default.createElement("form", {
            method: "POST",
            action: "/authorize",
            className: "card login-card" }, /*#__PURE__*/

          _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-title" }, "Password"), /*#__PURE__*/
          _react.default.createElement(_PasswordMethodLoginSvg.default, null)), /*#__PURE__*/

          _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/
          _react.default.createElement("div", null, "Password"), /*#__PURE__*/
          _react.default.createElement("input", {
            name: "password",
            type: "password",
            value: password,
            onChange: (e) =>
            this.setState({ password: e.target.value }) }), /*#__PURE__*/


          _react.default.createElement("div", { className: "excerpt" }, "Please type your password to gain access to your account."))), /*#__PURE__*/




          _react.default.createElement("input", {
            style: { width: "210px" },
            type: "submit",
            value: "Login",
            disabled: password.length < 1 }),

          this.renderHiddenInputs()))));




      case "TextLoginType":
        return /*#__PURE__*/(
          _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
          _react.default.createElement("form", {
            method: "POST",
            action: "/authorize",
            className: "card login-card" }, /*#__PURE__*/

          _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-title" }, "Text Login"), /*#__PURE__*/
          _react.default.createElement(_TextMethodLoginSvg.default, null)), /*#__PURE__*/

          _react.default.createElement("div", { className: "keycode-btn-container" }, /*#__PURE__*/
          _react.default.createElement("input", {
            className: "keycode-btn",
            style: { width: "210px" },
            type: "button",
            value: "Text me my code",
            onClick: () => this.sendKeycode()
            // disabled={!phoneNumber}
          }), /*#__PURE__*/
          _react.default.createElement("div", { id: "keycode-sent" }, "Your keycode has been sent!")), /*#__PURE__*/

          _react.default.createElement("div", { className: "card-body-section2" }, /*#__PURE__*/
          _react.default.createElement("div", null, "Your Keycode"), /*#__PURE__*/
          _react.default.createElement("div", { className: "keycode-input" }, /*#__PURE__*/
          _react.default.createElement(_KeycodeInputSvg.default, null), /*#__PURE__*/
          _react.default.createElement("input", {
            name: "oneTimeCode",
            type: "number",
            maxLength: "6",
            minLength: "6",
            value: keycode,
            onChange: e => {
              this.setState({ keycode: e.target.value });
            } })), /*#__PURE__*/


          _react.default.createElement("div", { className: "input-excerpt" }, "Please enter your 6 digit keycode")), /*#__PURE__*/



          _react.default.createElement("input", {
            style: { width: "210px" },
            type: "submit",
            value: "Login",
            disabled: keycode.length < 1 }),

          this.renderHiddenInputs()))));




      default:
        return /*#__PURE__*/(
          _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card login-card" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-title" }, "TBD"))))));}






  }

  render() {
    const { loginMethods } = { ...this.props };
    const { selectedLoginMethod } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "login-container" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "How would you like to login?"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "Choose your login method"), /*#__PURE__*/
      _react.default.createElement("div", { className: "login-methods" },
      loginMethods.map((loginMethod) => /*#__PURE__*/
      _react.default.createElement("div", {
        key: loginMethod,
        className: "login-method",
        onClick: () =>
        this.setState({ selectedLoginMethod: loginMethod }) },


      selectedLoginMethod === loginMethod &&
      this.renderSelectedLoginMethod(loginMethod),
      selectedLoginMethod !== loginMethod && /*#__PURE__*/
      _react.default.createElement(_LoginMethodOptionSvg.default, { loginMethod: loginMethod })))))));







  }}exports.default = LoginMethods;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL0xvZ2luTWV0aG9kcy5qc3giXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJMb2dpbk1ldGhvZHMiLCJDb21wb25lbnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiZmFjZVRlbXBsYXRlIiwib25lVGltZUNvZGUiLCJyZXF1ZXN0TG9naW5Db2RlIiwiZmFjZVZlcmlmeSIsImtleWNvZGUiLCJzZWxlY3RlZExvZ2luTWV0aG9kIiwicHJvcHMiLCJrZXljb2RlU2VudEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsInVybCIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmZXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZW5kZXJIaWRkZW5JbnB1dHMiLCJVcmxVdGlsIiwiZ2V0UXVlcnlWYXJpYWJsZSIsInJlbmRlclNlbGVjdGVkTG9naW5NZXRob2QiLCJsb2dpbk1ldGhvZCIsInN0YXRlIiwiZSIsInNldFN0YXRlIiwidGFyZ2V0IiwidmFsdWUiLCJ3aWR0aCIsImxlbmd0aCIsInNlbmRLZXljb2RlIiwicmVuZGVyIiwibG9naW5NZXRob2RzIiwibWFwIl0sIm1hcHBpbmdzIjoicWtCQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEOztBQUVjLE1BQU1DLFlBQU4sU0FBMkJDLGdCQUEzQixDQUFxQztBQUMxQztBQUNOQyxNQUFBQSxRQUFRLEVBQUUsRUFESjtBQUVOQyxNQUFBQSxRQUFRLEVBQUUsRUFGSjtBQUdOQyxNQUFBQSxZQUFZLEVBQUUsRUFIUjtBQUlOQyxNQUFBQSxXQUFXLEVBQUUsRUFKUDtBQUtOQyxNQUFBQSxnQkFBZ0IsRUFBRSxLQUxaO0FB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ZjtBQUNFLGdEQUFLLFNBQVMsRUFBQyxhQUFmO0FBQ0UsZ0RBQUssU0FBUyxFQUFDLFlBQWYsVUFERixDQURGLENBREYsQ0FERixDQURGLEVBaEdKOzs7Ozs7O0FBNEdEOztBQUVEYSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUVDLFlBQUYsS0FBbUIsRUFBRSxHQUFHLEtBQUsvQixLQUFWLEVBQXpCO0FBQ0EsVUFBTSxFQUFFRCxtQkFBRixLQUEwQixFQUFFLEdBQUcsS0FBS3VCLEtBQVYsRUFBaEM7QUFDQTtBQUNFLDRDQUFLLFNBQVMsRUFBQyxpQkFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxTQUFmO0FBQ0UsNENBQUssU0FBUyxFQUFDLE9BQWYsbUNBREY7QUFFRSw0Q0FBSyxTQUFTLEVBQUMsVUFBZiwrQkFGRjtBQUdFLDRDQUFLLFNBQVMsRUFBQyxlQUFmO0FBQ0dTLE1BQUFBLFlBQVksQ0FBQ0MsR0FBYixDQUFpQixDQUFDWCxXQUFEO0FBQ2hCO0FBQ0UsUUFBQSxHQUFHLEVBQUVBLFdBRFA7QUFFRSxRQUFBLFNBQVMsRUFBQyxjQUZaO0FBR0UsUUFBQSxPQUFPLEVBQUU7QUFDUCxhQUFLRyxRQUFMLENBQWMsRUFBRXpCLG1CQUFtQixFQUFFc0IsV0FBdkIsRUFBZCxDQUpKOzs7QUFPR3RCLE1BQUFBLG1CQUFtQixLQUFLc0IsV0FBeEI7QUFDQyxXQUFLRCx5QkFBTCxDQUErQkMsV0FBL0IsQ0FSSjtBQVNHdEIsTUFBQUEsbUJBQW1CLEtBQUtzQixXQUF4QjtBQUNDLG1DQUFDLDZCQUFELElBQXNCLFdBQVcsRUFBRUEsV0FBbkMsR0FWSixDQURELENBREgsQ0FIRixDQURGLENBREY7Ozs7Ozs7O0FBeUJELEdBNU1pRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVcmxVdGlsIGZyb20gXCIuLi8uLi8uLi91dGlsL3VybC11dGlsXCI7XG5pbXBvcnQgTG9naW5NZXRob2RPcHRpb25TdmcgZnJvbSBcIi4uLy4uL3N2Zy9Mb2dpbk1ldGhvZE9wdGlvblN2Z1wiO1xuaW1wb3J0IFBhc3N3b3JkTWV0aG9kTG9naW5TdmcgZnJvbSBcIi4uLy4uL3N2Zy9QYXNzd29yZE1ldGhvZExvZ2luU3ZnXCI7XG5pbXBvcnQgS2V5Y29kZUlucHV0U3ZnIGZyb20gXCIuLi8uLi9zdmcvS2V5Y29kZUlucHV0U3ZnXCI7XG5pbXBvcnQgZGVsYXkgZnJvbSBcIi4uLy4uLy4uL3V0aWwvZGVsYXlcIjtcbmltcG9ydCBUZXh0TWV0aG9kTG9naW5TdmcgZnJvbSBcIi4uLy4uL3N2Zy9UZXh0TWV0aG9kTG9naW5TdmdcIjtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KFwiLi9Mb2dpbk1ldGhvZHMuc2Nzc1wiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW5NZXRob2RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgdXNlcm5hbWU6IFwiXCIsXG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgZmFjZVRlbXBsYXRlOiBcIlwiLFxuICAgIG9uZVRpbWVDb2RlOiBcIlwiLFxuICAgIHJlcXVlc3RMb2dpbkNvZGU6IGZhbHNlLFxuICAgIGZhY2VWZXJpZnk6IGZhbHNlLFxuICAgIGtleWNvZGU6IFwiXCIsXG4gICAgc2VsZWN0ZWRMb2dpbk1ldGhvZDogXCJcIixcbiAgICAvLyBzZWxlY3RlZExvZ2luTWV0aG9kOiBcIlRleHRMb2dpblR5cGVcIixcbiAgfTtcblxuICBzZW5kS2V5Y29kZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBjb25zdCBrZXljb2RlU2VudEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJrZXljb2RlLXNlbnRcIik7XG4gICAga2V5Y29kZVNlbnRFbC5zdHlsZS5vcGFjaXR5ID0gMC42O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcImFwaS91c2Vycy9zZW5kLXRleHQtb3RwXCI7XG4gICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgICAgYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiRXJyb3IhXCIpO1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gICAgYXdhaXQgZGVsYXkoMjAwMCk7XG4gICAga2V5Y29kZVNlbnRFbC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgfTtcblxuICByZW5kZXJIaWRkZW5JbnB1dHMoKSB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImNsaWVudF9pZFwiXG4gICAgICAgICAgbmFtZT1cImNsaWVudF9pZFwiXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImNsaWVudF9pZFwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICBuYW1lPVwicmVzcG9uc2VfdHlwZVwiXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcInJlc3BvbnNlX3R5cGVcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICBuYW1lPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVkaXJlY3RfdXJsXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgaWQ9XCJzY29wZVwiIG5hbWU9XCJzY29wZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgIDxpbnB1dCBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclNlbGVjdGVkTG9naW5NZXRob2QobG9naW5NZXRob2QpIHtcbiAgICBjb25zdCB7IHBhc3N3b3JkLCBrZXljb2RlIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBzd2l0Y2ggKGxvZ2luTWV0aG9kKSB7XG4gICAgICBjYXNlIFwiUGFzc3dvcmRMb2dpblR5cGVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGlkPVwic2VjdGlvbi0xLW93bmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcbiAgICAgICAgICAgICAgICBhY3Rpb249XCIvYXV0aG9yaXplXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIGxvZ2luLWNhcmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxQYXNzd29yZE1ldGhvZExvZ2luU3ZnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+UGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgdHlwZSB5b3VyIHBhc3N3b3JkIHRvIGdhaW4gYWNjZXNzIHRvIHlvdXIgYWNjb3VudC5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17cGFzc3dvcmQubGVuZ3RoIDwgMX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhpZGRlbklucHV0cygpfVxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJUZXh0TG9naW5UeXBlXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBpZD1cInNlY3Rpb24tMS1vd25lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiL2F1dGhvcml6ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBsb2dpbi1jYXJkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRleHQgTG9naW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0TWV0aG9kTG9naW5TdmcgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWNvZGUtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleWNvZGUtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJUZXh0IG1lIG15IGNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRLZXljb2RlKCl9XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXshcGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImtleWNvZGUtc2VudFwiPllvdXIga2V5Y29kZSBoYXMgYmVlbiBzZW50ITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb24yXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PllvdXIgS2V5Y29kZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXljb2RlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxLZXljb2RlSW5wdXRTdmcgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9uZVRpbWVDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5Y29kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBrZXljb2RlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWV4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgNiBkaWdpdCBrZXljb2RlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJMb2dpblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17a2V5Y29kZS5sZW5ndGggPCAxfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGlkZGVuSW5wdXRzKCl9XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGlkPVwic2VjdGlvbi0xLW93bmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGxvZ2luLWNhcmRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UQkQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKTtcbiAgICB9XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBsb2dpbk1ldGhvZHMgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRMb2dpbk1ldGhvZCB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Ib3cgd291bGQgeW91IGxpa2UgdG8gbG9naW4/PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkNob29zZSB5b3VyIGxvZ2luIG1ldGhvZDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbWV0aG9kc1wiPlxuICAgICAgICAgICAge2xvZ2luTWV0aG9kcy5tYXAoKGxvZ2luTWV0aG9kKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLW1ldGhvZFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZExvZ2luTWV0aG9kOiBsb2dpbk1ldGhvZCB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZExvZ2luTWV0aG9kID09PSBsb2dpbk1ldGhvZCAmJlxuICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTZWxlY3RlZExvZ2luTWV0aG9kKGxvZ2luTWV0aG9kKX1cbiAgICAgICAgICAgICAgICB7c2VsZWN0ZWRMb2dpbk1ldGhvZCAhPT0gbG9naW5NZXRob2QgJiYgKFxuICAgICAgICAgICAgICAgICAgPExvZ2luTWV0aG9kT3B0aW9uU3ZnIGxvZ2luTWV0aG9kPXtsb2dpbk1ldGhvZH0gLz5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==