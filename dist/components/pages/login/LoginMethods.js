"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _urlUtil = _interopRequireDefault(require("../../../util/url-util"));
var _LoginMethodOptionSvg = _interopRequireDefault(require("../../svg/LoginMethodOptionSvg"));
var _delay = _interopRequireDefault(require("../../../util/delay"));
var _PalmSetup = _interopRequireDefault(require("../../setup/PalmSetup"));
var _ExitConfigSvg = _interopRequireDefault(require("../../svg/ExitConfigSvg"));
var _PasswordSetup = _interopRequireDefault(require("../../setup/PasswordSetup"));
var _SocialSupportSetup = _interopRequireDefault(require("../../setup/SocialSupportSetup"));
var _TextSetup = _interopRequireDefault(require("../../setup/TextSetup"));
var _SecurityQuestionsSetup = _interopRequireDefault(require("../../setup/SecurityQuestionsSetup"));
var PropTypes = _interopRequireWildcard3(require("prop-types"));

if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/c478a45a1e78d6bb211abaed7f941fe7.scss"));
}

class LoginMethods extends _react.Component {
  constructor(props) {var _this;
    super(props);_this = this;(0, _defineProperty2.default)(this, "getOptions",






























    () => {
      const { securityItems } = { ...this.state };
      return [
      {
        value: "streetNumGrewOn",
        label: "What was the street number that you grew up on?",
        isDisabled: securityItems.some(
        securityItem => securityItem.question === "streetNumGrewOn") },


      {
        value: "cityGrewIn",
        label: "In what town or city did you grow up in?",
        isDisabled: securityItems.some(
        securityItem => securityItem.question === "cityGrewIn") },


      {
        value: "primarySchool",
        label: "What primary school did you go to?",
        isDisabled: securityItems.some(
        securityItem => securityItem.question === "primarySchool") }];



    });(0, _defineProperty2.default)(this, "getLoginMethodsNotSetup",

    () => {
      const { loginMethods } = { ...this.props };
      const allLoginMethods = [
      "SecurityQuestionsLoginType",
      "PasswordLoginType",
      "TextLoginType",
      "SocialSupportType",
      "PalmLoginType"];

      const loginMethodsNotSetup = allLoginMethods.filter(
      alm => !loginMethods.find(lm => lm === alm));

      return loginMethodsNotSetup;
    });(0, _defineProperty2.default)(this, "sendKeycodeToHelper", /*#__PURE__*/(0, _asyncToGenerator2.default)(

    function* () {
      const { username } = { ..._this.props };
      const keycodeSentEl = document.getElementById("keycode-sent");
      keycodeSentEl.style.opacity = 0.6;
      try {
        const url = "api/users/send-helper-text-otp";
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
    }));(0, _defineProperty2.default)(this, "renderHiddenInputs",

    () => {
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


    });const { securityQuestions } = { ...this.props };let _securityItems;if (securityQuestions) {_securityItems = [];if (securityQuestions.length > 2) {for (let i = 0; i < 2; i++) {// They can pick 2 of 3 if they did 3
          _securityItems.push({ question: undefined, answer: "" });}} else {for (const {} of securityQuestions) {_securityItems.push({ question: undefined, answer: "" });}}}this.state = { username: "", faceTemplate: "", oneTimeCode: "", requestLoginCode: false, faceVerify: false, keycode: "", selectedLoginMethod: "", // selectedLoginMethod: "TextLoginType",
      securityItems: _securityItems, isDisplayHow: false };}renderSelectedLoginMethod(loginMethod, isSettings = false, isAdd = false) {
    const { isDisplayHow } = {
      ...this.state };

    const {
      username,
      loginMethods,
      setLoginMethods,
      securityQuestions,
      setSecurityQuestions } =
    {
      ...this.props };

    switch (loginMethod) {
      case "PasswordLoginType":
        return /*#__PURE__*/(
          _react.default.createElement(_PasswordSetup.default, {
            loginMethods: loginMethods,
            setLoginMethods: setLoginMethods,
            username: username,
            isSettings: isSettings,
            isAdd: isAdd,
            goBack: () => this.setState({ selectedLoginMethod: "" }) }));


      case "TextLoginType":
        return /*#__PURE__*/(
          _react.default.createElement(_TextSetup.default, {
            loginMethods: loginMethods,
            setLoginMethods: setLoginMethods,
            username: username,
            isSettings: isSettings,
            isAdd: isAdd,
            goBack: () => this.setState({ selectedLoginMethod: "" }) }));


      case "SecurityQuestionsLoginType":
        return /*#__PURE__*/(
          _react.default.createElement(_SecurityQuestionsSetup.default, {
            loginMethods: loginMethods,
            setLoginMethods: setLoginMethods,
            isLogin: !isSettings,
            isSettings: isSettings,
            securityItems: securityQuestions,
            setSecurityQuestions: setSecurityQuestions,
            isAdd: isAdd,
            goBack: () => this.setState({ selectedLoginMethod: "" }),
            renderHiddenInputs: this.renderHiddenInputs }));


      case "PalmLoginType":
        return /*#__PURE__*/(
          _react.default.createElement(_PalmSetup.default, {
            isLogin: !isSettings,
            loginMethods: loginMethods,
            setLoginMethods: setLoginMethods,
            isAdd: isAdd,
            isSettings: isSettings,
            renderHiddenInputs: this.renderHiddenInputs,
            toggleDisplayHow: () =>
            this.setState({ isDisplayHow: !isDisplayHow }),

            isDisplayHow: isDisplayHow,
            goBack: () => this.setState({ selectedLoginMethod: "" }) }));


      case "SocialSupportType":
        return /*#__PURE__*/(
          _react.default.createElement(_SocialSupportSetup.default, {
            username: username,
            isSettings: isSettings,
            goBack: () => this.setState({ selectedLoginMethod: "" }) }));


      default:
        return /*#__PURE__*/(
          _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card login-card" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-title" }, "TBD"))))));}






  }

  render() {
    const { loginMethods, isSettings } = { ...this.props };
    const { selectedLoginMethod } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "login-container" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section" },
      !isSettings && /*#__PURE__*/
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "How would you like to login?"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "Choose your login method")),


      isSettings && /*#__PURE__*/
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Which login method do you need to configure?"), /*#__PURE__*/


      _react.default.createElement("div", { className: "subtitle" }, "Edit an existing login method or add a new one")), /*#__PURE__*/




      _react.default.createElement("div", { className: "login-methods" },
      loginMethods.map((loginMethod) => /*#__PURE__*/
      _react.default.createElement("div", { key: loginMethod, className: "login-method" },
      selectedLoginMethod === loginMethod &&
      this.renderSelectedLoginMethod(loginMethod, isSettings),
      selectedLoginMethod !== loginMethod && /*#__PURE__*/
      _react.default.createElement("div", {
        className: "login-svg",
        onClick: () =>
        this.setState({
          isDisplayHow: false,
          selectedLoginMethod: loginMethod }) }, /*#__PURE__*/



      _react.default.createElement(_LoginMethodOptionSvg.default, {
        loginMethod: loginMethod,
        loginConfigure: isSettings ? "configure" : "none" })))),





      isSettings && /*#__PURE__*/
      _react.default.createElement(_react.Fragment, null,
      this.getLoginMethodsNotSetup().map((loginMethod) => /*#__PURE__*/
      _react.default.createElement("div", { key: loginMethod, className: "login-method" },
      selectedLoginMethod === loginMethod &&
      this.renderSelectedLoginMethod(
      loginMethod,
      isSettings,
      true),

      selectedLoginMethod !== loginMethod && /*#__PURE__*/
      _react.default.createElement("div", {
        className: "login-svg",
        onClick: () =>
        this.setState({
          isDisplayHow: false,
          selectedLoginMethod: loginMethod }) }, /*#__PURE__*/



      _react.default.createElement(_LoginMethodOptionSvg.default, {
        loginMethod: loginMethod,
        loginConfigure: "add" })))), /*#__PURE__*/





      _react.default.createElement("div", {
        style: { cursor: "pointer" },
        onClick: () => {
          window.location.href = _urlUtil.default.getQueryVariable(
          "redirect_url");

        } }, /*#__PURE__*/

      _react.default.createElement(_ExitConfigSvg.default, null)))))));







  }}


LoginMethods.propTypes = {
  securityQuestions: PropTypes.arrayOf(
  PropTypes.shape({
    answer: PropTypes.string,
    question: PropTypes.string })),


  setSecurityQuestions: PropTypes.func,
  loginMethods: PropTypes.arrayOf(PropTypes.string),
  username: PropTypes.string,
  setLoginMethods: PropTypes.func,
  isSettings: PropTypes.bool };var _default =


LoginMethods;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2xvZ2luL0xvZ2luTWV0aG9kcy5qc3giXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJMb2dpbk1ldGhvZHMiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic2VjdXJpdHlJdGVtcyIsInN0YXRlIiwidmFsdWUiLCJsYWJlbCIsImlzRGlzYWJsZWQiLCJzb21lIiwic2VjdXJpdHlJdGVtIiwicXVlc3Rpb24iLCJsb2dpbk1ldGhvZHMiLCJhbGxMb2dpbk1ldGhvZHMiLCJsb2dpbk1ldGhvZHNOb3RTZXR1cCIsImZpbHRlciIsImFsbSIsImZpbmQiLCJsbSIsInVzZXJuYW1lIiwia2V5Y29kZVNlbnRFbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJzdHlsZSIsIm9wYWNpdHkiLCJ1cmwiLCJpbml0IiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiVXJsVXRpbCIsImdldFF1ZXJ5VmFyaWFibGUiLCJzZWN1cml0eVF1ZXN0aW9ucyIsImxlbmd0aCIsImkiLCJwdXNoIiwidW5kZWZpbmVkIiwiYW5zd2VyIiwiZmFjZVRlbXBsYXRlIiwib25lVGltZUNvZGUiLCJyZXF1ZXN0TG9naW5Db2RlIiwiZmFjZVZlcmlmeSIsImtleWNvZGUiLCJzZWxlY3RlZExvZ2luTWV0aG9kIiwiaXNEaXNwbGF5SG93IiwicmVuZGVyU2VsZWN0ZWRMb2dpbk1ldGhvZCIsImxvZ2luTWV0aG9kIiwiaXNTZXR0aW5ncyIsImlzQWRkIiwic2V0TG9naW5NZXRob2RzIiwic2V0U2VjdXJpdHlRdWVzdGlvbnMiLCJzZXRTdGF0ZSIsInJlbmRlckhpZGRlbklucHV0cyIsInJlbmRlciIsIm1hcCIsImdldExvZ2luTWV0aG9kc05vdFNldHVwIiwiY3Vyc29yIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInNoYXBlIiwic3RyaW5nIiwiZnVuYyIsImJvb2wiXSwibWFwcGluZ3MiOiJxa0JBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFRCxNQUFNQyxZQUFOLFNBQTJCQyxnQkFBM0IsQ0FBcUM7QUFDbkNDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU4sQ0FEaUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQ04sVUFBTTtBQUNqQixZQUFNLEVBQUVDLGFBQUYsS0FBb0IsRUFBRSxHQUFHLEtBQUtDLEtBQVYsRUFBMUI7QUFDQSxhQUFPO0FBQ0w7QUFDRUMsUUFBQUEsS0FBSyxFQUFFLGlCQURUO0FBRUVDLFFBQUFBLEtBQUssRUFBRSxpREFGVDtBQUdFQyxRQUFBQSxVQUFVLEVBQUVKLGFBQWEsQ0FBQ0ssSUFBZDtBQUNUQyxRQUFBQSxZQUFELElBQWtCQSxZQUFZLENBQUNDLFFBQWIsS0FBMEIsaUJBRGxDLENBSGQsRUFESzs7O0FBUUw7QUFDRUwsUUFBQUEsS0FBSyxFQUFFLFlBRFQ7QUFFRUMsUUFBQUEsS0FBSyxFQUFFLDBDQUZUO0FBR0VDLFFBQUFBLFVBQVUsRUFBRUosYUFBYSxDQUFDSyxJQUFkO0FBQ1RDLFFBQUFBLFlBQUQsSUFBa0JBLFlBQVksQ0FBQ0MsUUFBYixLQUEwQixZQURsQyxDQUhkLEVBUks7OztBQWVMO0FBQ0VMLFFBQUFBLEtBQUssRUFBRSxlQURUO0FBRUVDLFFBQUFBLEtBQUssRUFBRSxvQ0FGVDtBQUdFQyxRQUFBQSxVQUFVLEVBQUVKLGFBQWEsQ0FBQ0ssSUFBZDtBQUNUQyxRQUFBQSxZQUFELElBQWtCQSxZQUFZLENBQUNDLFFBQWIsS0FBMEIsZUFEbEMsQ0FIZCxFQWZLLENBQVA7Ozs7QUF1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RGlCLENBREk7OztBQU92QmQsRUFBQUEsb0JBQW9CLEVBQUVXLFNBQVMsQ0FBQ0ksSUFQVDtBQVF2QjNELEVBQUFBLFlBQVksRUFBRXVELFNBQVMsQ0FBQ0MsT0FBVixDQUFrQkQsU0FBUyxDQUFDRyxNQUE1QixDQVJTO0FBU3ZCbkQsRUFBQUEsUUFBUSxFQUFFZ0QsU0FBUyxDQUFDRyxNQVRHO0FBVXZCZixFQUFBQSxlQUFlLEVBQUVZLFNBQVMsQ0FBQ0ksSUFWSjtBQVd2QmxCLEVBQUFBLFVBQVUsRUFBRWMsU0FBUyxDQUFDSyxJQVhDLEVBQXpCLEM7OztBQWNleEUsWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgVXJsVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbC91cmwtdXRpbFwiO1xuaW1wb3J0IExvZ2luTWV0aG9kT3B0aW9uU3ZnIGZyb20gXCIuLi8uLi9zdmcvTG9naW5NZXRob2RPcHRpb25TdmdcIjtcbmltcG9ydCBkZWxheSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9kZWxheVwiO1xuaW1wb3J0IFBhbG1TZXR1cCBmcm9tIFwiLi4vLi4vc2V0dXAvUGFsbVNldHVwXCI7XG5pbXBvcnQgRXhpdENvbmZpZ1N2ZyBmcm9tIFwiLi4vLi4vc3ZnL0V4aXRDb25maWdTdmdcIjtcbmltcG9ydCBQYXNzd29yZFNldHVwIGZyb20gXCIuLi8uLi9zZXR1cC9QYXNzd29yZFNldHVwXCI7XG5pbXBvcnQgU29jaWFsU3VwcG9ydFNldHVwIGZyb20gXCIuLi8uLi9zZXR1cC9Tb2NpYWxTdXBwb3J0U2V0dXBcIjtcbmltcG9ydCBUZXh0U2V0dXAgZnJvbSBcIi4uLy4uL3NldHVwL1RleHRTZXR1cFwiO1xuaW1wb3J0IFNlY3VyaXR5UXVlc3Rpb25zU2V0dXAgZnJvbSBcIi4uLy4uL3NldHVwL1NlY3VyaXR5UXVlc3Rpb25zU2V0dXBcIjtcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBpbXBvcnQoXCIuL0xvZ2luTWV0aG9kcy5zY3NzXCIpO1xufVxuXG5jbGFzcyBMb2dpbk1ldGhvZHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IHNlY3VyaXR5UXVlc3Rpb25zIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBsZXQgc2VjdXJpdHlJdGVtcztcbiAgICBpZiAoc2VjdXJpdHlRdWVzdGlvbnMpIHtcbiAgICAgIHNlY3VyaXR5SXRlbXMgPSBbXTtcbiAgICAgIGlmIChzZWN1cml0eVF1ZXN0aW9ucy5sZW5ndGggPiAyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgLy8gVGhleSBjYW4gcGljayAyIG9mIDMgaWYgdGhleSBkaWQgM1xuICAgICAgICAgIHNlY3VyaXR5SXRlbXMucHVzaCh7IHF1ZXN0aW9uOiB1bmRlZmluZWQsIGFuc3dlcjogXCJcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm9yIChjb25zdCB7fSBvZiBzZWN1cml0eVF1ZXN0aW9ucykge1xuICAgICAgICAgIHNlY3VyaXR5SXRlbXMucHVzaCh7IHF1ZXN0aW9uOiB1bmRlZmluZWQsIGFuc3dlcjogXCJcIiB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB1c2VybmFtZTogXCJcIixcbiAgICAgIGZhY2VUZW1wbGF0ZTogXCJcIixcbiAgICAgIG9uZVRpbWVDb2RlOiBcIlwiLFxuICAgICAgcmVxdWVzdExvZ2luQ29kZTogZmFsc2UsXG4gICAgICBmYWNlVmVyaWZ5OiBmYWxzZSxcbiAgICAgIGtleWNvZGU6IFwiXCIsXG4gICAgICBzZWxlY3RlZExvZ2luTWV0aG9kOiBcIlwiLFxuICAgICAgLy8gc2VsZWN0ZWRMb2dpbk1ldGhvZDogXCJUZXh0TG9naW5UeXBlXCIsXG4gICAgICBzZWN1cml0eUl0ZW1zLFxuICAgICAgaXNEaXNwbGF5SG93OiBmYWxzZVxuICAgIH07XG4gIH1cblxuICBnZXRPcHRpb25zID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgc2VjdXJpdHlJdGVtcyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIFtcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwic3RyZWV0TnVtR3Jld09uXCIsXG4gICAgICAgIGxhYmVsOiBcIldoYXQgd2FzIHRoZSBzdHJlZXQgbnVtYmVyIHRoYXQgeW91IGdyZXcgdXAgb24/XCIsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHNlY3VyaXR5SXRlbXMuc29tZShcbiAgICAgICAgICAoc2VjdXJpdHlJdGVtKSA9PiBzZWN1cml0eUl0ZW0ucXVlc3Rpb24gPT09IFwic3RyZWV0TnVtR3Jld09uXCJcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcImNpdHlHcmV3SW5cIixcbiAgICAgICAgbGFiZWw6IFwiSW4gd2hhdCB0b3duIG9yIGNpdHkgZGlkIHlvdSBncm93IHVwIGluP1wiLFxuICAgICAgICBpc0Rpc2FibGVkOiBzZWN1cml0eUl0ZW1zLnNvbWUoXG4gICAgICAgICAgKHNlY3VyaXR5SXRlbSkgPT4gc2VjdXJpdHlJdGVtLnF1ZXN0aW9uID09PSBcImNpdHlHcmV3SW5cIlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmFsdWU6IFwicHJpbWFyeVNjaG9vbFwiLFxuICAgICAgICBsYWJlbDogXCJXaGF0IHByaW1hcnkgc2Nob29sIGRpZCB5b3UgZ28gdG8/XCIsXG4gICAgICAgIGlzRGlzYWJsZWQ6IHNlY3VyaXR5SXRlbXMuc29tZShcbiAgICAgICAgICAoc2VjdXJpdHlJdGVtKSA9PiBzZWN1cml0eUl0ZW0ucXVlc3Rpb24gPT09IFwicHJpbWFyeVNjaG9vbFwiXG4gICAgICAgICksXG4gICAgICB9LFxuICAgIF07XG4gIH07XG5cbiAgZ2V0TG9naW5NZXRob2RzTm90U2V0dXAgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBsb2dpbk1ldGhvZHMgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGNvbnN0IGFsbExvZ2luTWV0aG9kcyA9IFtcbiAgICAgIFwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIixcbiAgICAgIFwiUGFzc3dvcmRMb2dpblR5cGVcIixcbiAgICAgIFwiVGV4dExvZ2luVHlwZVwiLFxuICAgICAgXCJTb2NpYWxTdXBwb3J0VHlwZVwiLFxuICAgICAgXCJQYWxtTG9naW5UeXBlXCIsXG4gICAgXTtcbiAgICBjb25zdCBsb2dpbk1ldGhvZHNOb3RTZXR1cCA9IGFsbExvZ2luTWV0aG9kcy5maWx0ZXIoXG4gICAgICAoYWxtKSA9PiAhbG9naW5NZXRob2RzLmZpbmQoKGxtKSA9PiBsbSA9PT0gYWxtKVxuICAgICk7XG4gICAgcmV0dXJuIGxvZ2luTWV0aG9kc05vdFNldHVwO1xuICB9O1xuXG4gIHNlbmRLZXljb2RlVG9IZWxwZXIgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgY29uc3Qga2V5Y29kZVNlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5Y29kZS1zZW50XCIpO1xuICAgIGtleWNvZGVTZW50RWwuc3R5bGUub3BhY2l0eSA9IDAuNjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gXCJhcGkvdXNlcnMvc2VuZC1oZWxwZXItdGV4dC1vdHBcIjtcbiAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICB9KSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciFcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgICBrZXljb2RlU2VudEVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICB9O1xuXG4gIHJlbmRlckhpZGRlbklucHV0cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlcm5hbWV9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICBuYW1lPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwiY2xpZW50X2lkXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInJlc3BvbnNlX3R5cGVcIlxuICAgICAgICAgIG5hbWU9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVzcG9uc2VfdHlwZVwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJyZWRpcmVjdF91cmxcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCBpZD1cInNjb3BlXCIgbmFtZT1cInNjb3BlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgPGlucHV0IGlkPVwic3RhdGVcIiBuYW1lPVwic3RhdGVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJcIiAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9O1xuXG4gIHJlbmRlclNlbGVjdGVkTG9naW5NZXRob2QobG9naW5NZXRob2QsIGlzU2V0dGluZ3MgPSBmYWxzZSwgaXNBZGQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHsgaXNEaXNwbGF5SG93IH0gPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgIH07XG4gICAgY29uc3Qge1xuICAgICAgdXNlcm5hbWUsXG4gICAgICBsb2dpbk1ldGhvZHMsXG4gICAgICBzZXRMb2dpbk1ldGhvZHMsXG4gICAgICBzZWN1cml0eVF1ZXN0aW9ucyxcbiAgICAgIHNldFNlY3VyaXR5UXVlc3Rpb25zLFxuICAgIH0gPSB7XG4gICAgICAuLi50aGlzLnByb3BzLFxuICAgIH07XG4gICAgc3dpdGNoIChsb2dpbk1ldGhvZCkge1xuICAgICAgY2FzZSBcIlBhc3N3b3JkTG9naW5UeXBlXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFBhc3N3b3JkU2V0dXBcbiAgICAgICAgICAgIGxvZ2luTWV0aG9kcz17bG9naW5NZXRob2RzfVxuICAgICAgICAgICAgc2V0TG9naW5NZXRob2RzPXtzZXRMb2dpbk1ldGhvZHN9XG4gICAgICAgICAgICB1c2VybmFtZT17dXNlcm5hbWV9XG4gICAgICAgICAgICBpc1NldHRpbmdzPXtpc1NldHRpbmdzfVxuICAgICAgICAgICAgaXNBZGQ9e2lzQWRkfVxuICAgICAgICAgICAgZ29CYWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRMb2dpbk1ldGhvZDogXCJcIiB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlRleHRMb2dpblR5cGVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8VGV4dFNldHVwXG4gICAgICAgICAgICBsb2dpbk1ldGhvZHM9e2xvZ2luTWV0aG9kc31cbiAgICAgICAgICAgIHNldExvZ2luTWV0aG9kcz17c2V0TG9naW5NZXRob2RzfVxuICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgaXNTZXR0aW5ncz17aXNTZXR0aW5nc31cbiAgICAgICAgICAgIGlzQWRkPXtpc0FkZH1cbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTG9naW5NZXRob2Q6IFwiXCIgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGNhc2UgXCJTZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZVwiOlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxTZWN1cml0eVF1ZXN0aW9uc1NldHVwXG4gICAgICAgICAgICBsb2dpbk1ldGhvZHM9e2xvZ2luTWV0aG9kc31cbiAgICAgICAgICAgIHNldExvZ2luTWV0aG9kcz17c2V0TG9naW5NZXRob2RzfVxuICAgICAgICAgICAgaXNMb2dpbj17IWlzU2V0dGluZ3N9XG4gICAgICAgICAgICBpc1NldHRpbmdzPXtpc1NldHRpbmdzfVxuICAgICAgICAgICAgc2VjdXJpdHlJdGVtcz17c2VjdXJpdHlRdWVzdGlvbnN9XG4gICAgICAgICAgICBzZXRTZWN1cml0eVF1ZXN0aW9ucz17c2V0U2VjdXJpdHlRdWVzdGlvbnN9XG4gICAgICAgICAgICBpc0FkZD17aXNBZGR9XG4gICAgICAgICAgICBnb0JhY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZExvZ2luTWV0aG9kOiBcIlwiIH0pfVxuICAgICAgICAgICAgcmVuZGVySGlkZGVuSW5wdXRzPXt0aGlzLnJlbmRlckhpZGRlbklucHV0c31cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlBhbG1Mb2dpblR5cGVcIjpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8UGFsbVNldHVwXG4gICAgICAgICAgICBpc0xvZ2luPXshaXNTZXR0aW5nc31cbiAgICAgICAgICAgIGxvZ2luTWV0aG9kcz17bG9naW5NZXRob2RzfVxuICAgICAgICAgICAgc2V0TG9naW5NZXRob2RzPXtzZXRMb2dpbk1ldGhvZHN9XG4gICAgICAgICAgICBpc0FkZD17aXNBZGR9XG4gICAgICAgICAgICBpc1NldHRpbmdzPXtpc1NldHRpbmdzfVxuICAgICAgICAgICAgcmVuZGVySGlkZGVuSW5wdXRzPXt0aGlzLnJlbmRlckhpZGRlbklucHV0c31cbiAgICAgICAgICAgIHRvZ2dsZURpc3BsYXlIb3c9eygpID0+XG4gICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rpc3BsYXlIb3c6ICFpc0Rpc3BsYXlIb3cgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlzRGlzcGxheUhvdz17aXNEaXNwbGF5SG93fVxuICAgICAgICAgICAgZ29CYWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRMb2dpbk1ldGhvZDogXCJcIiB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgICAgY2FzZSBcIlNvY2lhbFN1cHBvcnRUeXBlXCI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFNvY2lhbFN1cHBvcnRTZXR1cFxuICAgICAgICAgICAgdXNlcm5hbWU9e3VzZXJuYW1lfVxuICAgICAgICAgICAgaXNTZXR0aW5ncz17aXNTZXR0aW5nc31cbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTG9naW5NZXRob2Q6IFwiXCIgfSl9XG4gICAgICAgICAgLz5cbiAgICAgICAgKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBpZD1cInNlY3Rpb24tMS1vd25lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBsb2dpbi1jYXJkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VEJEPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9naW5NZXRob2RzLCBpc1NldHRpbmdzIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBjb25zdCB7IHNlbGVjdGVkTG9naW5NZXRob2QgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ2luLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cbiAgICAgICAgICB7IWlzU2V0dGluZ3MgJiYgKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+SG93IHdvdWxkIHlvdSBsaWtlIHRvIGxvZ2luPzwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+Q2hvb3NlIHlvdXIgbG9naW4gbWV0aG9kPC9kaXY+XG4gICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2lzU2V0dGluZ3MgJiYgKFxuICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAgICAgICAgICAgICAgV2hpY2ggbG9naW4gbWV0aG9kIGRvIHlvdSBuZWVkIHRvIGNvbmZpZ3VyZT9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICBFZGl0IGFuIGV4aXN0aW5nIGxvZ2luIG1ldGhvZCBvciBhZGQgYSBuZXcgb25lXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICApfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibG9naW4tbWV0aG9kc1wiPlxuICAgICAgICAgICAge2xvZ2luTWV0aG9kcy5tYXAoKGxvZ2luTWV0aG9kKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtsb2dpbk1ldGhvZH0gY2xhc3NOYW1lPVwibG9naW4tbWV0aG9kXCI+XG4gICAgICAgICAgICAgICAge3NlbGVjdGVkTG9naW5NZXRob2QgPT09IGxvZ2luTWV0aG9kICYmXG4gICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkTG9naW5NZXRob2QobG9naW5NZXRob2QsIGlzU2V0dGluZ3MpfVxuICAgICAgICAgICAgICAgIHtzZWxlY3RlZExvZ2luTWV0aG9kICE9PSBsb2dpbk1ldGhvZCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxvZ2luLXN2Z1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0Rpc3BsYXlIb3c6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRMb2dpbk1ldGhvZDogbG9naW5NZXRob2QsXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8TG9naW5NZXRob2RPcHRpb25TdmdcbiAgICAgICAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZD17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgICAgICAgbG9naW5Db25maWd1cmU9e2lzU2V0dGluZ3MgPyBcImNvbmZpZ3VyZVwiIDogXCJub25lXCJ9XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgICAge2lzU2V0dGluZ3MgJiYgKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAge3RoaXMuZ2V0TG9naW5NZXRob2RzTm90U2V0dXAoKS5tYXAoKGxvZ2luTWV0aG9kKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGtleT17bG9naW5NZXRob2R9IGNsYXNzTmFtZT1cImxvZ2luLW1ldGhvZFwiPlxuICAgICAgICAgICAgICAgICAgICB7c2VsZWN0ZWRMb2dpbk1ldGhvZCA9PT0gbG9naW5NZXRob2QgJiZcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclNlbGVjdGVkTG9naW5NZXRob2QoXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU2V0dGluZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAge3NlbGVjdGVkTG9naW5NZXRob2QgIT09IGxvZ2luTWV0aG9kICYmIChcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsb2dpbi1zdmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNEaXNwbGF5SG93OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZExvZ2luTWV0aG9kOiBsb2dpbk1ldGhvZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8TG9naW5NZXRob2RPcHRpb25TdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9naW5NZXRob2Q9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbkNvbmZpZ3VyZT1cImFkZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFVybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcbiAgICAgICAgICAgICAgICAgICAgICBcInJlZGlyZWN0X3VybFwiXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxFeGl0Q29uZmlnU3ZnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTG9naW5NZXRob2RzLnByb3BUeXBlcyA9IHtcbiAgc2VjdXJpdHlRdWVzdGlvbnM6IFByb3BUeXBlcy5hcnJheU9mKFxuICAgIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgICBhbnN3ZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICBxdWVzdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB9KVxuICApLFxuICBzZXRTZWN1cml0eVF1ZXN0aW9uczogUHJvcFR5cGVzLmZ1bmMsXG4gIGxvZ2luTWV0aG9kczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZXRMb2dpbk1ldGhvZHM6IFByb3BUeXBlcy5mdW5jLFxuICBpc1NldHRpbmdzOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luTWV0aG9kcztcbiJdfQ==