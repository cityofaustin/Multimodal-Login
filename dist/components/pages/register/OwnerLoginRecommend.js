"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../svg/GoBackSvg"));


var _LoginOption = _interopRequireDefault(require("./LoginOption"));
var _animationUtil = require("../../../util/animation-util");
var _AnsweredItemSvg = _interopRequireDefault(require("../../svg/AnsweredItemSvg"));
var _urlUtil = _interopRequireDefault(require("../../../util/url-util")); // import OptionSvg from '../../svg/OptionSvg';
// import HasPhoneSvg from '../../svg/HasPhoneSvg';
if (process.env.BROWSER) {Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/0b10fd0dd4461585e0bfbec7eede3652.scss"));
}
class OwnerLoginRecommend extends _react.Component {constructor(...args) {super(...args);(0, _defineProperty2.default)(this, "answerTitles",





    {
      password: "How often do you completely forget your passwords?",
      text:
      "In the last five years, how many times have you permanently lost your phone? ",
      palm: "How comfortable are you using your camera to scan your palm?",
      securityQuestions: "How good are you at answering security questions?" });(0, _defineProperty2.default)(this, "state",


    {
      loginMethods: ["password", "text", "palm", "securityQuestions"],
      isDisplayWhy: false });(0, _defineProperty2.default)(this, "getRecommended",







    () => {
      const {
        forgetsPassword,
        lostPhone,
        scanningPalm,
        answeringSecurityQuestions } =
      {
        ...this.props.questions };

      const recommended = [];
      if (forgetsPassword === "forgetPasswordRarely") {
        recommended.push("password");
      }
      if (lostPhone !== "noPhone") {
        recommended.push("text");
      }
      if (scanningPalm === "palmComfortable") {
        recommended.push("palm");
      }
      if (answeringSecurityQuestions === "securityGood") {
        recommended.push("securityQuestions");
      }
      return recommended;
    });(0, _defineProperty2.default)(this, "isComplete",

    loginMethod => {
      const { passwordItem, textItem, palmItem, securityItems } = {
        ...this.props };

      switch (loginMethod) {
        case "password":
          return !!passwordItem;
        case "text":
          return !!textItem;
        case "palm":
          return !!palmItem;
        case "securityQuestions":
          return !!securityItems;
        default:
          return false;}

    });(0, _defineProperty2.default)(this, "areAnyComplete",

    () => {
      const { loginMethods } = { ...this.state };
      for (const loginMethod of loginMethods) {
        if (this.isComplete(loginMethod)) {
          return true;
        }
      }
      return false;
    });(0, _defineProperty2.default)(this, "isQuestionSuccess",

    loginMethod => {
      const recommendedLoginMethods = this.getRecommended();
      return recommendedLoginMethods.indexOf(loginMethod) > -1;
    });}componentDidMount() {(0, _browserUtil.handleIOSBrowser)();(0, _animationUtil.animateIn)(this.refs.section);}

  renderRegisterForm() {
    const { emailItem, palmItem, passwordItem, securityItems, textItem } = {
      ...this.props };

    return /*#__PURE__*/(
      _react.default.createElement("form", { method: "POST", action: "/register" },
      emailItem && /*#__PURE__*/
      _react.default.createElement(_react.Fragment, null,

      emailItem.username.length > 0 && /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", name: "username", value: emailItem.username }),

      emailItem.email.length > 0 && /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", name: "email", value: emailItem.email })),



      passwordItem && /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", name: "password", value: passwordItem.password }),

      palmItem && /*#__PURE__*/
      _react.default.createElement("input", {
        type: "hidden",
        name: "palmTemplate",
        value: palmItem.palmTemplate }),


      textItem && /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", name: "text", value: textItem.phoneNumber }),

      securityItems && /*#__PURE__*/
      _react.default.createElement("input", {
        type: "hidden",
        name: "securityQuestions",
        value: JSON.stringify(securityItems) }), /*#__PURE__*/


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
      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "submit",
        value: "Finish",
        disabled: !this.areAnyComplete() })));



  }

  renderSectionContents() {
    const { loginMethods, isDisplayWhy } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" },
      this.getRecommended().length < 1 &&
      "We couldn't find the perfect login solution for you, but here are some options",
      this.getRecommended().length > 0 &&
      "Based on your answers, we found the following login solution for you")),


      this.getRecommended().map((loginMethod) => /*#__PURE__*/
      _react.default.createElement("div", {
        className: "recommended",
        key: loginMethod,
        onClick: () =>
        this.props.handleGoForward("owner", 10, { loginMethod }) }, /*#__PURE__*/


      _react.default.createElement(_LoginOption.default, {
        loginMethod: loginMethod,
        isComplete: this.isComplete(loginMethod) }))),



      this.getRecommended().length < 4 && /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "excerpt1" }, "Other login methods")),



      loginMethods.
      filter(
      loginMethod => this.getRecommended().indexOf(loginMethod) < 0).

      map((loginMethod) => /*#__PURE__*/
      _react.default.createElement("div", {
        key: loginMethod,
        onClick: () =>
        this.props.handleGoForward("owner", 10, { loginMethod }) }, /*#__PURE__*/


      _react.default.createElement(_LoginOption.default, {
        loginMethod: loginMethod,
        isComplete: this.isComplete(loginMethod) }))), /*#__PURE__*/



      _react.default.createElement("div", { className: "submit-section" },
      this.renderRegisterForm(), /*#__PURE__*/
      _react.default.createElement("div", { onClick: () => this.setState({ isDisplayWhy: !isDisplayWhy }) }, "Why did you pick this for me?"))), /*#__PURE__*/




      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack("owner", 9) })));



  }

  renderSectionWhy() {
    const { loginMethods, isDisplayWhy } = { ...this.state };

    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1 why-card" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "why-title" }, "Why did you pick this for me?"),
      loginMethods.map((loginMethod) => /*#__PURE__*/
      _react.default.createElement("div", { key: loginMethod, className: "why-item" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "why-item-title" },
      this.answerTitles[loginMethod]), /*#__PURE__*/

      _react.default.createElement(_AnsweredItemSvg.default, {
        loginMethod: loginMethod,
        isSuccess: this.isQuestionSuccess(loginMethod) })))), /*#__PURE__*/




      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.setState({ isDisplayWhy: !isDisplayWhy }) })));



  }

  render() {
    const { isDisplayWhy } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", {
        ref: "section",
        id: "section-9-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) },

      isDisplayWhy ? this.renderSectionWhy() : this.renderSectionContents()));


  }}exports.default = OwnerLoginRecommend;(0, _defineProperty2.default)(OwnerLoginRecommend, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL093bmVyTG9naW5SZWNvbW1lbmQuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJMb2dpblJlY29tbWVuZCIsIkNvbXBvbmVudCIsInBhc3N3b3JkIiwidGV4dCIsInBhbG0iLCJzZWN1cml0eVF1ZXN0aW9ucyIsImxvZ2luTWV0aG9kcyIsImlzRGlzcGxheVdoeSIsImZvcmdldHNQYXNzd29yZCIsImxvc3RQaG9uZSIsInNjYW5uaW5nUGFsbSIsImFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJyZWNvbW1lbmRlZCIsInB1c2giLCJsb2dpbk1ldGhvZCIsInBhc3N3b3JkSXRlbSIsInRleHRJdGVtIiwicGFsbUl0ZW0iLCJzZWN1cml0eUl0ZW1zIiwic3RhdGUiLCJpc0NvbXBsZXRlIiwicmVjb21tZW5kZWRMb2dpbk1ldGhvZHMiLCJnZXRSZWNvbW1lbmRlZCIsImluZGV4T2YiLCJjb21wb25lbnREaWRNb3VudCIsInJlZnMiLCJzZWN0aW9uIiwicmVuZGVyUmVnaXN0ZXJGb3JtIiwiZW1haWxJdGVtIiwidXNlcm5hbWUiLCJsZW5ndGgiLCJlbWFpbCIsInBhbG1UZW1wbGF0ZSIsInBob25lTnVtYmVyIiwiSlNPTiIsInN0cmluZ2lmeSIsIlVybFV0aWwiLCJnZXRRdWVyeVZhcmlhYmxlIiwid2lkdGgiLCJhcmVBbnlDb21wbGV0ZSIsInJlbmRlclNlY3Rpb25Db250ZW50cyIsIm1hcCIsImhhbmRsZUdvRm9yd2FyZCIsImZpbHRlciIsInNldFN0YXRlIiwiaGFuZGxlR29CYWNrIiwicmVuZGVyU2VjdGlvbldoeSIsImFuc3dlclRpdGxlcyIsImlzUXVlc3Rpb25TdWNjZXNzIiwicmVuZGVyIiwicG9zaXRpb24iXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLHlFLENBTEE7QUFDQTtBQUtBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QixDQUN2QjtBQUNEO0FBQ2MsTUFBTUMsbUJBQU4sU0FBa0NDLGdCQUFsQyxDQUE0Qzs7Ozs7O0FBTTFDO0FBQ2JDLE1BQUFBLFFBQVEsRUFBRSxvREFERztBQUViQyxNQUFBQSxJQUFJO0FBQ0YscUZBSFc7QUFJYkMsTUFBQUEsSUFBSSxFQUFFLDhEQUpPO0FBS2JDLE1BQUFBLGlCQUFpQixFQUFFLG1EQUxOLEVBTjBDOzs7QUFjakQ7QUFDTkMsTUFBQUEsWUFBWSxFQUFFLENBQUMsVUFBRCxFQUFhLE1BQWIsRUFBcUIsTUFBckIsRUFBNkIsbUJBQTdCLENBRFI7QUFFTkMsTUFBQUEsWUFBWSxFQUFFLEtBRlIsRUFkaUQ7Ozs7Ozs7O0FBd0J4QyxVQUFNO0FBQ3JCLFlBQU07QUFDSkMsUUFBQUEsZUFESTtBQUVKQyxRQUFBQSxTQUZJO0FBR0pDLFFBQUFBLFlBSEk7QUFJSkMsUUFBQUEsMEJBSkk7QUFLRjtBQUNGLFdBQUcsS0FBS0MsS0FBTCxDQUFXQyxTQURaLEVBTEo7O0FBUUEsWUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBQ0EsVUFBSU4sZUFBZSxLQUFLLHNCQUF4QixFQUFnRDtBQUM5Q00sUUFBQUEsV0FBVyxDQUFDQyxJQUFaLENBQWlCLFVBQWpCO0FBQ0Q7QUFDRCxVQUFJTixTQUFTLEtBQUssU0FBbEIsRUFBNkI7QUFDM0JLLFFBQUFBLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixNQUFqQjtBQUNEO0FBQ0QsVUFBSUwsWUFBWSxLQUFLLGlCQUFyQixFQUF3QztBQUN0Q0ksUUFBQUEsV0FBVyxDQUFDQyxJQUFaLENBQWlCLE1BQWpCO0FBQ0Q7QUFDRCxVQUFJSiwwQkFBMEIsS0FBSyxjQUFuQyxFQUFtRDtBQUNqREcsUUFBQUEsV0FBVyxDQUFDQyxJQUFaLENBQWlCLG1CQUFqQjtBQUNEO0FBQ0QsYUFBT0QsV0FBUDtBQUNELEtBL0N3RDs7QUFpRDNDRSxJQUFBQSxXQUFELElBQWlCO0FBQzVCLFlBQU0sRUFBRUMsWUFBRixFQUFnQkMsUUFBaEIsRUFBMEJDLFFBQTFCLEVBQW9DQyxhQUFwQyxLQUFzRDtBQUMxRCxXQUFHLEtBQUtSLEtBRGtELEVBQTVEOztBQUdBLGNBQVFJLFdBQVI7QUFDRSxhQUFLLFVBQUw7QUFDRSxpQkFBTyxDQUFDLENBQUNDLFlBQVQ7QUFDRixhQUFLLE1BQUw7QUFDRSxpQkFBTyxDQUFDLENBQUNDLFFBQVQ7QUFDRixhQUFLLE1BQUw7QUFDRSxpQkFBTyxDQUFDLENBQUNDLFFBQVQ7QUFDRixhQUFLLG1CQUFMO0FBQ0UsaUJBQU8sQ0FBQyxDQUFDQyxhQUFUO0FBQ0Y7QUFDRSxpQkFBTyxLQUFQLENBVko7O0FBWUQsS0FqRXdEOztBQW1FeEMsVUFBTTtBQUNyQixZQUFNLEVBQUVkLFlBQUYsS0FBbUIsRUFBRSxHQUFHLEtBQUtlLEtBQVYsRUFBekI7QUFDQSxXQUFLLE1BQU1MLFdBQVgsSUFBMEJWLFlBQTFCLEVBQXdDO0FBQ3RDLFlBQUksS0FBS2dCLFVBQUwsQ0FBZ0JOLFdBQWhCLENBQUosRUFBa0M7QUFDaEMsaUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRCxhQUFPLEtBQVA7QUFDRCxLQTNFd0Q7O0FBNkVwQ0EsSUFBQUEsV0FBRCxJQUFpQjtBQUNuQyxZQUFNTyx1QkFBdUIsR0FBRyxLQUFLQyxjQUFMLEVBQWhDO0FBQ0EsYUFBT0QsdUJBQXVCLENBQUNFLE9BQXhCLENBQWdDVCxXQUFoQyxJQUErQyxDQUFDLENBQXZEO0FBQ0QsS0FoRndELEdBbUJ6RFUsaUJBQWlCLEdBQUcsQ0FDbEIscUNBQ0EsOEJBQVUsS0FBS0MsSUFBTCxDQUFVQyxPQUFwQixFQUNEOztBQTREREMsRUFBQUEsa0JBQWtCLEdBQUc7QUFDbkIsVUFBTSxFQUFFQyxTQUFGLEVBQWFYLFFBQWIsRUFBdUJGLFlBQXZCLEVBQXFDRyxhQUFyQyxFQUFvREYsUUFBcEQsS0FBaUU7QUFDckUsU0FBRyxLQUFLTixLQUQ2RCxFQUF2RTs7QUFHQTtBQUNFLDZDQUFNLE1BQU0sRUFBQyxNQUFiLEVBQW9CLE1BQU0sRUFBQyxXQUEzQjtBQUNHa0IsTUFBQUEsU0FBUztBQUNSLG1DQUFDLGVBQUQ7O0FBRUdBLE1BQUFBLFNBQVMsQ0FBQ0MsUUFBVixDQUFtQkMsTUFBbkIsR0FBNEIsQ0FBNUI7QUFDQyw4Q0FBTyxJQUFJLEVBQUMsUUFBWixFQUFxQixJQUFJLEVBQUMsVUFBMUIsRUFBcUMsS0FBSyxFQUFFRixTQUFTLENBQUNDLFFBQXRELEdBSEo7O0FBS0dELE1BQUFBLFNBQVMsQ0FBQ0csS0FBVixDQUFnQkQsTUFBaEIsR0FBeUIsQ0FBekI7QUFDQyw4Q0FBTyxJQUFJLEVBQUMsUUFBWixFQUFxQixJQUFJLEVBQUMsT0FBMUIsRUFBa0MsS0FBSyxFQUFFRixTQUFTLENBQUNHLEtBQW5ELEdBTkosQ0FGSjs7OztBQVlHaEIsTUFBQUEsWUFBWTtBQUNYLDhDQUFPLElBQUksRUFBQyxRQUFaLEVBQXFCLElBQUksRUFBQyxVQUExQixFQUFxQyxLQUFLLEVBQUVBLFlBQVksQ0FBQ2YsUUFBekQsR0FiSjs7QUFlR2lCLE1BQUFBLFFBQVE7QUFDUDtBQUNFLFFBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFBLElBQUksRUFBQyxjQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUVBLFFBQVEsQ0FBQ2UsWUFIbEIsR0FoQko7OztBQXNCR2hCLE1BQUFBLFFBQVE7QUFDUCw4Q0FBTyxJQUFJLEVBQUMsUUFBWixFQUFxQixJQUFJLEVBQUMsTUFBMUIsRUFBaUMsS0FBSyxFQUFFQSxRQUFRLENBQUNpQixXQUFqRCxHQXZCSjs7QUF5QkdmLE1BQUFBLGFBQWE7QUFDWjtBQUNFLFFBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFBLElBQUksRUFBQyxtQkFGUDtBQUdFLFFBQUEsS0FBSyxFQUFFZ0IsSUFBSSxDQUFDQyxTQUFMLENBQWVqQixhQUFmLENBSFQsR0ExQko7OztBQWdDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLFdBREw7QUFFRSxRQUFBLElBQUksRUFBQyxXQUZQO0FBR0UsUUFBQSxJQUFJLEVBQUMsUUFIUDtBQUlFLFFBQUEsS0FBSyxFQUFFa0IsaUJBQVFDLGdCQUFSLENBQXlCLFdBQXpCLENBSlQsR0FoQ0Y7O0FBc0NFO0FBQ0UsUUFBQSxFQUFFLEVBQUMsZUFETDtBQUVFLFFBQUEsSUFBSSxFQUFDLGVBRlA7QUFHRSxRQUFBLElBQUksRUFBQyxRQUhQO0FBSUUsUUFBQSxLQUFLLEVBQUVELGlCQUFRQyxnQkFBUixDQUF5QixlQUF6QixDQUpULEdBdENGOztBQTRDRTtBQUNFLFFBQUEsRUFBRSxFQUFDLGNBREw7QUFFRSxRQUFBLElBQUksRUFBQyxjQUZQO0FBR0UsUUFBQSxJQUFJLEVBQUMsUUFIUDtBQUlFLFFBQUEsS0FBSyxFQUFFRCxpQkFBUUMsZ0JBQVIsQ0FBeUIsY0FBekIsQ0FKVCxHQTVDRjs7QUFrREUsOENBQU8sRUFBRSxFQUFDLE9BQVYsRUFBa0IsSUFBSSxFQUFDLE9BQXZCLEVBQStCLElBQUksRUFBQyxRQUFwQyxFQUE2QyxLQUFLLEVBQUMsRUFBbkQsR0FsREY7QUFtREUsOENBQU8sRUFBRSxFQUFDLE9BQVYsRUFBa0IsSUFBSSxFQUFDLE9BQXZCLEVBQStCLElBQUksRUFBQyxRQUFwQyxFQUE2QyxLQUFLLEVBQUMsRUFBbkQsR0FuREY7QUFvREU7QUFDRSxRQUFBLEtBQUssRUFBRSxFQUFFQyxLQUFLLEVBQUUsT0FBVCxFQURUO0FBRUUsUUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUEsS0FBSyxFQUFDLFFBSFI7QUFJRSxRQUFBLFFBQVEsRUFBRSxDQUFDLEtBQUtDLGNBQUwsRUFKYixHQXBERixDQURGOzs7O0FBNkREOztBQUVEQyxFQUFBQSxxQkFBcUIsR0FBRztBQUN0QixVQUFNLEVBQUVwQyxZQUFGLEVBQWdCQyxZQUFoQixLQUFpQyxFQUFFLEdBQUcsS0FBS2MsS0FBVixFQUF2QztBQUNBO0FBQ0UsNENBQUssU0FBUyxFQUFDLGtCQUFmO0FBQ0UsNENBQUssU0FBUyxFQUFDLE9BQWYscUJBREY7QUFFRSw0Q0FBSyxTQUFTLEVBQUMsVUFBZix5QkFGRjtBQUdFLDRDQUFLLFNBQVMsRUFBQyxhQUFmO0FBQ0U7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsWUFBZjtBQUNHLFdBQUtHLGNBQUwsR0FBc0JRLE1BQXRCLEdBQStCLENBQS9CO0FBQ0Msc0ZBRko7QUFHRyxXQUFLUixjQUFMLEdBQXNCUSxNQUF0QixHQUErQixDQUEvQjtBQUNDLDRFQUpKLENBREYsQ0FERjs7O0FBU0csV0FBS1IsY0FBTCxHQUFzQm1CLEdBQXRCLENBQTBCLENBQUMzQixXQUFEO0FBQ3pCO0FBQ0UsUUFBQSxTQUFTLEVBQUMsYUFEWjtBQUVFLFFBQUEsR0FBRyxFQUFFQSxXQUZQO0FBR0UsUUFBQSxPQUFPLEVBQUU7QUFDUCxhQUFLSixLQUFMLENBQVdnQyxlQUFYLENBQTJCLE9BQTNCLEVBQW9DLEVBQXBDLEVBQXdDLEVBQUU1QixXQUFGLEVBQXhDLENBSko7OztBQU9FLG1DQUFDLG9CQUFEO0FBQ0UsUUFBQSxXQUFXLEVBQUVBLFdBRGY7QUFFRSxRQUFBLFVBQVUsRUFBRSxLQUFLTSxVQUFMLENBQWdCTixXQUFoQixDQUZkLEdBUEYsQ0FERCxDQVRIOzs7O0FBdUJHLFdBQUtRLGNBQUwsR0FBc0JRLE1BQXRCLEdBQStCLENBQS9CO0FBQ0M7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsVUFBZiwwQkFERixDQXhCSjs7OztBQTZCRzFCLE1BQUFBLFlBQVk7QUFDVnVDLE1BQUFBLE1BREY7QUFFSTdCLE1BQUFBLFdBQUQsSUFBaUIsS0FBS1EsY0FBTCxHQUFzQkMsT0FBdEIsQ0FBOEJULFdBQTlCLElBQTZDLENBRmpFOztBQUlFMkIsTUFBQUEsR0FKRixDQUlNLENBQUMzQixXQUFEO0FBQ0g7QUFDRSxRQUFBLEdBQUcsRUFBRUEsV0FEUDtBQUVFLFFBQUEsT0FBTyxFQUFFO0FBQ1AsYUFBS0osS0FBTCxDQUFXZ0MsZUFBWCxDQUEyQixPQUEzQixFQUFvQyxFQUFwQyxFQUF3QyxFQUFFNUIsV0FBRixFQUF4QyxDQUhKOzs7QUFNRSxtQ0FBQyxvQkFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFQSxXQURmO0FBRUUsUUFBQSxVQUFVLEVBQUUsS0FBS00sVUFBTCxDQUFnQk4sV0FBaEIsQ0FGZCxHQU5GLENBTEgsQ0E3Qkg7Ozs7QUE4Q0UsNENBQUssU0FBUyxFQUFDLGdCQUFmO0FBQ0csV0FBS2Esa0JBQUwsRUFESDtBQUVFLDRDQUFLLE9BQU8sRUFBRSxNQUFNLEtBQUtpQixRQUFMLENBQWMsRUFBRXZDLFlBQVksRUFBRSxDQUFDQSxZQUFqQixFQUFkLENBQXBCLG9DQUZGLENBOUNGLENBSEY7Ozs7O0FBd0RFLG1DQUFDLGtCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLFFBQUEsTUFBTSxFQUFFLE1BQU0sS0FBS0ssS0FBTCxDQUFXbUMsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxDQUFqQyxDQUZoQixHQXhERixDQURGOzs7O0FBK0REOztBQUVEQyxFQUFBQSxnQkFBZ0IsR0FBRztBQUNqQixVQUFNLEVBQUUxQyxZQUFGLEVBQWdCQyxZQUFoQixLQUFpQyxFQUFFLEdBQUcsS0FBS2MsS0FBVixFQUF2Qzs7QUFFQTtBQUNFLDRDQUFLLFNBQVMsRUFBQyxrQkFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxPQUFmLHFCQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFVBQWYseUJBRkY7QUFHRSw0Q0FBSyxTQUFTLEVBQUMsc0JBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsV0FBZixvQ0FERjtBQUVHZixNQUFBQSxZQUFZLENBQUNxQyxHQUFiLENBQWlCLENBQUMzQixXQUFEO0FBQ2hCLDRDQUFLLEdBQUcsRUFBRUEsV0FBVixFQUF1QixTQUFTLEVBQUMsVUFBakM7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsZ0JBQWY7QUFDRyxXQUFLaUMsWUFBTCxDQUFrQmpDLFdBQWxCLENBREgsQ0FERjs7QUFJRSxtQ0FBQyx3QkFBRDtBQUNFLFFBQUEsV0FBVyxFQUFFQSxXQURmO0FBRUUsUUFBQSxTQUFTLEVBQUUsS0FBS2tDLGlCQUFMLENBQXVCbEMsV0FBdkIsQ0FGYixHQUpGLENBREQsQ0FGSCxDQUhGOzs7OztBQWlCRSxtQ0FBQyxrQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFBLE1BQU0sRUFBRSxNQUFNLEtBQUs4QixRQUFMLENBQWMsRUFBRXZDLFlBQVksRUFBRSxDQUFDQSxZQUFqQixFQUFkLENBRmhCLEdBakJGLENBREY7Ozs7QUF3QkQ7O0FBRUQ0QyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUU1QyxZQUFGLEtBQW1CLEVBQUUsR0FBRyxLQUFLYyxLQUFWLEVBQXpCO0FBQ0E7QUFDRTtBQUNFLFFBQUEsR0FBRyxFQUFDLFNBRE47QUFFRSxRQUFBLEVBQUUsRUFBQyxpQkFGTDtBQUdFLFFBQUEsU0FBUyxFQUFFLHdDQUFvQixLQUFLVCxLQUFMLENBQVd3QyxRQUEvQixDQUhiOztBQUtHN0MsTUFBQUEsWUFBWSxHQUFHLEtBQUt5QyxnQkFBTCxFQUFILEdBQTZCLEtBQUtOLHFCQUFMLEVBTDVDLENBREY7OztBQVNELEdBaFF3RCxDLG9FQUF0QzFDLG1CLGtCQUNHLEVBQ3BCNEMsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCRyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBoYW5kbGVJT1NCcm93c2VyIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWwvYnJvd3Nlci11dGlsXCI7XG5pbXBvcnQgR29CYWNrU3ZnIGZyb20gXCIuLi8uLi9zdmcvR29CYWNrU3ZnXCI7XG4vLyBpbXBvcnQgT3B0aW9uU3ZnIGZyb20gJy4uLy4uL3N2Zy9PcHRpb25TdmcnO1xuLy8gaW1wb3J0IEhhc1Bob25lU3ZnIGZyb20gJy4uLy4uL3N2Zy9IYXNQaG9uZVN2Zyc7XG5pbXBvcnQgTG9naW5PcHRpb24gZnJvbSBcIi4vTG9naW5PcHRpb25cIjtcbmltcG9ydCB7IGFuaW1hdGVJbiwgZ2V0U2VjdGlvbkNsYXNzTmFtZSB9IGZyb20gXCIuLi8uLi8uLi91dGlsL2FuaW1hdGlvbi11dGlsXCI7XG5pbXBvcnQgQW5zd2VyZWRJdGVtU3ZnIGZyb20gXCIuLi8uLi9zdmcvQW5zd2VyZWRJdGVtU3ZnXCI7XG5pbXBvcnQgVXJsVXRpbCBmcm9tIFwiLi4vLi4vLi4vdXRpbC91cmwtdXRpbFwiO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KFwiLi9Pd25lckxvZ2luUmVjb21tZW5kLnNjc3NcIik7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lckxvZ2luUmVjb21tZW5kIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVHb0ZvcndhcmQ6ICgpID0+IHt9LFxuICAgIGhhbmRsZUdvQmFjazogKCkgPT4ge30sXG4gIH07XG5cbiAgYW5zd2VyVGl0bGVzID0ge1xuICAgIHBhc3N3b3JkOiBcIkhvdyBvZnRlbiBkbyB5b3UgY29tcGxldGVseSBmb3JnZXQgeW91ciBwYXNzd29yZHM/XCIsXG4gICAgdGV4dDpcbiAgICAgIFwiSW4gdGhlIGxhc3QgZml2ZSB5ZWFycywgaG93IG1hbnkgdGltZXMgaGF2ZSB5b3UgcGVybWFuZW50bHkgbG9zdCB5b3VyIHBob25lPyBcIixcbiAgICBwYWxtOiBcIkhvdyBjb21mb3J0YWJsZSBhcmUgeW91IHVzaW5nIHlvdXIgY2FtZXJhIHRvIHNjYW4geW91ciBwYWxtP1wiLFxuICAgIHNlY3VyaXR5UXVlc3Rpb25zOiBcIkhvdyBnb29kIGFyZSB5b3UgYXQgYW5zd2VyaW5nIHNlY3VyaXR5IHF1ZXN0aW9ucz9cIixcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBsb2dpbk1ldGhvZHM6IFtcInBhc3N3b3JkXCIsIFwidGV4dFwiLCBcInBhbG1cIiwgXCJzZWN1cml0eVF1ZXN0aW9uc1wiXSxcbiAgICBpc0Rpc3BsYXlXaHk6IGZhbHNlLFxuICB9O1xuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGhhbmRsZUlPU0Jyb3dzZXIoKTtcbiAgICBhbmltYXRlSW4odGhpcy5yZWZzLnNlY3Rpb24pO1xuICB9XG5cbiAgZ2V0UmVjb21tZW5kZWQgPSAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZm9yZ2V0c1Bhc3N3b3JkLFxuICAgICAgbG9zdFBob25lLFxuICAgICAgc2Nhbm5pbmdQYWxtLFxuICAgICAgYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnMsXG4gICAgfSA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMucXVlc3Rpb25zLFxuICAgIH07XG4gICAgY29uc3QgcmVjb21tZW5kZWQgPSBbXTtcbiAgICBpZiAoZm9yZ2V0c1Bhc3N3b3JkID09PSBcImZvcmdldFBhc3N3b3JkUmFyZWx5XCIpIHtcbiAgICAgIHJlY29tbWVuZGVkLnB1c2goXCJwYXNzd29yZFwiKTtcbiAgICB9XG4gICAgaWYgKGxvc3RQaG9uZSAhPT0gXCJub1Bob25lXCIpIHtcbiAgICAgIHJlY29tbWVuZGVkLnB1c2goXCJ0ZXh0XCIpO1xuICAgIH1cbiAgICBpZiAoc2Nhbm5pbmdQYWxtID09PSBcInBhbG1Db21mb3J0YWJsZVwiKSB7XG4gICAgICByZWNvbW1lbmRlZC5wdXNoKFwicGFsbVwiKTtcbiAgICB9XG4gICAgaWYgKGFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zID09PSBcInNlY3VyaXR5R29vZFwiKSB7XG4gICAgICByZWNvbW1lbmRlZC5wdXNoKFwic2VjdXJpdHlRdWVzdGlvbnNcIik7XG4gICAgfVxuICAgIHJldHVybiByZWNvbW1lbmRlZDtcbiAgfTtcblxuICBpc0NvbXBsZXRlID0gKGxvZ2luTWV0aG9kKSA9PiB7XG4gICAgY29uc3QgeyBwYXNzd29yZEl0ZW0sIHRleHRJdGVtLCBwYWxtSXRlbSwgc2VjdXJpdHlJdGVtcyB9ID0ge1xuICAgICAgLi4udGhpcy5wcm9wcyxcbiAgICB9O1xuICAgIHN3aXRjaCAobG9naW5NZXRob2QpIHtcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxuICAgICAgICByZXR1cm4gISFwYXNzd29yZEl0ZW07XG4gICAgICBjYXNlIFwidGV4dFwiOlxuICAgICAgICByZXR1cm4gISF0ZXh0SXRlbTtcbiAgICAgIGNhc2UgXCJwYWxtXCI6XG4gICAgICAgIHJldHVybiAhIXBhbG1JdGVtO1xuICAgICAgY2FzZSBcInNlY3VyaXR5UXVlc3Rpb25zXCI6XG4gICAgICAgIHJldHVybiAhIXNlY3VyaXR5SXRlbXM7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIGFyZUFueUNvbXBsZXRlID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgbG9naW5NZXRob2RzIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBmb3IgKGNvbnN0IGxvZ2luTWV0aG9kIG9mIGxvZ2luTWV0aG9kcykge1xuICAgICAgaWYgKHRoaXMuaXNDb21wbGV0ZShsb2dpbk1ldGhvZCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfTtcblxuICBpc1F1ZXN0aW9uU3VjY2VzcyA9IChsb2dpbk1ldGhvZCkgPT4ge1xuICAgIGNvbnN0IHJlY29tbWVuZGVkTG9naW5NZXRob2RzID0gdGhpcy5nZXRSZWNvbW1lbmRlZCgpO1xuICAgIHJldHVybiByZWNvbW1lbmRlZExvZ2luTWV0aG9kcy5pbmRleE9mKGxvZ2luTWV0aG9kKSA+IC0xO1xuICB9O1xuXG4gIHJlbmRlclJlZ2lzdGVyRm9ybSgpIHtcbiAgICBjb25zdCB7IGVtYWlsSXRlbSwgcGFsbUl0ZW0sIHBhc3N3b3JkSXRlbSwgc2VjdXJpdHlJdGVtcywgdGV4dEl0ZW0gfSA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9yZWdpc3RlclwiPlxuICAgICAgICB7ZW1haWxJdGVtICYmIChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICB7LyogPHNwYW4+dXNlcm5hbWUgbGVuZ3RoIHtlbWFpbEl0ZW0udXNlcm5hbWUubGVuZ3RofTwvc3Bhbj4gKi99XG4gICAgICAgICAgICB7ZW1haWxJdGVtLnVzZXJuYW1lLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJ1c2VybmFtZVwiIHZhbHVlPXtlbWFpbEl0ZW0udXNlcm5hbWV9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAge2VtYWlsSXRlbS5lbWFpbC5sZW5ndGggPiAwICYmIChcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwiZW1haWxcIiB2YWx1ZT17ZW1haWxJdGVtLmVtYWlsfSAvPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICApfVxuICAgICAgICB7cGFzc3dvcmRJdGVtICYmIChcbiAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwYXNzd29yZFwiIHZhbHVlPXtwYXNzd29yZEl0ZW0ucGFzc3dvcmR9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtwYWxtSXRlbSAmJiAoXG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgIG5hbWU9XCJwYWxtVGVtcGxhdGVcIlxuICAgICAgICAgICAgdmFsdWU9e3BhbG1JdGVtLnBhbG1UZW1wbGF0ZX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICB7dGV4dEl0ZW0gJiYgKFxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInRleHRcIiB2YWx1ZT17dGV4dEl0ZW0ucGhvbmVOdW1iZXJ9IC8+XG4gICAgICAgICl9XG4gICAgICAgIHtzZWN1cml0eUl0ZW1zICYmIChcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cInNlY3VyaXR5UXVlc3Rpb25zXCJcbiAgICAgICAgICAgIHZhbHVlPXtKU09OLnN0cmluZ2lmeShzZWN1cml0eUl0ZW1zKX1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImNsaWVudF9pZFwiXG4gICAgICAgICAgbmFtZT1cImNsaWVudF9pZFwiXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImNsaWVudF9pZFwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICBuYW1lPVwicmVzcG9uc2VfdHlwZVwiXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcInJlc3BvbnNlX3R5cGVcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICBuYW1lPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVkaXJlY3RfdXJsXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgaWQ9XCJzY29wZVwiIG5hbWU9XCJzY29wZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgIDxpbnB1dCBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIHZhbHVlPVwiRmluaXNoXCJcbiAgICAgICAgICBkaXNhYmxlZD17IXRoaXMuYXJlQW55Q29tcGxldGUoKX1cbiAgICAgICAgLz5cbiAgICAgIDwvZm9ybT5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VjdGlvbkNvbnRlbnRzKCkge1xuICAgIGNvbnN0IHsgbG9naW5NZXRob2RzLCBpc0Rpc3BsYXlXaHkgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvY3VtZW50IE93bmVyPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Nb3JlIHdheXMgdG8gbG9naW48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAge3RoaXMuZ2V0UmVjb21tZW5kZWQoKS5sZW5ndGggPCAxICYmXG4gICAgICAgICAgICAgICAgXCJXZSBjb3VsZG4ndCBmaW5kIHRoZSBwZXJmZWN0IGxvZ2luIHNvbHV0aW9uIGZvciB5b3UsIGJ1dCBoZXJlIGFyZSBzb21lIG9wdGlvbnNcIn1cbiAgICAgICAgICAgICAge3RoaXMuZ2V0UmVjb21tZW5kZWQoKS5sZW5ndGggPiAwICYmXG4gICAgICAgICAgICAgICAgXCJCYXNlZCBvbiB5b3VyIGFuc3dlcnMsIHdlIGZvdW5kIHRoZSBmb2xsb3dpbmcgbG9naW4gc29sdXRpb24gZm9yIHlvdVwifVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAge3RoaXMuZ2V0UmVjb21tZW5kZWQoKS5tYXAoKGxvZ2luTWV0aG9kKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlY29tbWVuZGVkXCJcbiAgICAgICAgICAgICAga2V5PXtsb2dpbk1ldGhvZH1cbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUdvRm9yd2FyZChcIm93bmVyXCIsIDEwLCB7IGxvZ2luTWV0aG9kIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPExvZ2luT3B0aW9uXG4gICAgICAgICAgICAgICAgbG9naW5NZXRob2Q9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICAgIGlzQ29tcGxldGU9e3RoaXMuaXNDb21wbGV0ZShsb2dpbk1ldGhvZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgICB7dGhpcy5nZXRSZWNvbW1lbmRlZCgpLmxlbmd0aCA8IDQgJiYgKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0MVwiPk90aGVyIGxvZ2luIG1ldGhvZHM8L2Rpdj5cbiAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZXhjZXJwdDJcIj4obm90IHJlY29tbWVuZGVkIGZvciB5b3UpPC9kaXY+ICovfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7bG9naW5NZXRob2RzXG4gICAgICAgICAgICAuZmlsdGVyKFxuICAgICAgICAgICAgICAobG9naW5NZXRob2QpID0+IHRoaXMuZ2V0UmVjb21tZW5kZWQoKS5pbmRleE9mKGxvZ2luTWV0aG9kKSA8IDBcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5tYXAoKGxvZ2luTWV0aG9kKSA9PiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBrZXk9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUdvRm9yd2FyZChcIm93bmVyXCIsIDEwLCB7IGxvZ2luTWV0aG9kIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExvZ2luT3B0aW9uXG4gICAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZD17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlPXt0aGlzLmlzQ29tcGxldGUobG9naW5NZXRob2QpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtc2VjdGlvblwiPlxuICAgICAgICAgICAge3RoaXMucmVuZGVyUmVnaXN0ZXJGb3JtKCl9XG4gICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBpc0Rpc3BsYXlXaHk6ICFpc0Rpc3BsYXlXaHkgfSl9PlxuICAgICAgICAgICAgICBXaHkgZGlkIHlvdSBwaWNrIHRoaXMgZm9yIG1lP1xuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8R29CYWNrU3ZnXG4gICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICBnb0JhY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKFwib3duZXJcIiwgOSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyU2VjdGlvbldoeSgpIHtcbiAgICBjb25zdCB7IGxvZ2luTWV0aG9kcywgaXNEaXNwbGF5V2h5IH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvY3VtZW50IE93bmVyPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Nb3JlIHdheXMgdG8gbG9naW48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMSB3aHktY2FyZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid2h5LXRpdGxlXCI+V2h5IGRpZCB5b3UgcGljayB0aGlzIGZvciBtZT88L2Rpdj5cbiAgICAgICAgICB7bG9naW5NZXRob2RzLm1hcCgobG9naW5NZXRob2QpID0+IChcbiAgICAgICAgICAgIDxkaXYga2V5PXtsb2dpbk1ldGhvZH0gY2xhc3NOYW1lPVwid2h5LWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aHktaXRlbS10aXRsZVwiPlxuICAgICAgICAgICAgICAgIHt0aGlzLmFuc3dlclRpdGxlc1tsb2dpbk1ldGhvZF19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8QW5zd2VyZWRJdGVtU3ZnXG4gICAgICAgICAgICAgICAgbG9naW5NZXRob2Q9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICAgIGlzU3VjY2Vzcz17dGhpcy5pc1F1ZXN0aW9uU3VjY2Vzcyhsb2dpbk1ldGhvZCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICBjb2xvcj1cIiMyMzYyYzdcIlxuICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheVdoeTogIWlzRGlzcGxheVdoeSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0Rpc3BsYXlXaHkgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cInNlY3Rpb25cIlxuICAgICAgICBpZD1cInNlY3Rpb24tOS1vd25lclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2VjdGlvbkNsYXNzTmFtZSh0aGlzLnByb3BzLnBvc2l0aW9uKX1cbiAgICAgID5cbiAgICAgICAge2lzRGlzcGxheVdoeSA/IHRoaXMucmVuZGVyU2VjdGlvbldoeSgpIDogdGhpcy5yZW5kZXJTZWN0aW9uQ29udGVudHMoKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==