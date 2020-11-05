"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../svg/GoBackSvg"));


var _LoginOption = _interopRequireDefault(require("./LoginOption"));
var _animationUtil = require("../../../util/animation-util");
var _AnsweredItemSvg = _interopRequireDefault(require("../../svg/AnsweredItemSvg"));
var _urlUtil = _interopRequireDefault(require("../../../util/url-util"));
var _ethCrypto = _interopRequireDefault(require("eth-crypto")); // import OptionSvg from '../../svg/OptionSvg';
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
    });(0, _defineProperty2.default)(this, "generatePasswordInputForm",

    passwordItem => {
      let passwordInput = /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", name: "password", value: passwordItem.password });


      if (
      passwordItem.password !== undefined &&
      passwordItem.password.length >= 64)
      {
        let privateKey = passwordItem.password;
        let publicEncryptionKey;
        let publicAddress;
        let signature;

        if (privateKey.substring(0, 2) !== "0x") {
          privateKey = "0x" + privateKey;
        }

        try {
          publicEncryptionKey = _ethCrypto.default.publicKeyByPrivateKey(privateKey);
          publicAddress = _ethCrypto.default.publicKey.toAddress(publicEncryptionKey);

          const message = publicAddress;
          const messageHash = _ethCrypto.default.hash.keccak256(message);
          signature = _ethCrypto.default.sign(privateKey, messageHash);

          document.cookie =
          "bring-your-own-key=" + privateKey.substring(2, privateKey.length);
        } catch (e) {
          console.log("Not using byok");
        }

        if (publicEncryptionKey !== undefined) {
          passwordInput = /*#__PURE__*/
          _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
          _react.default.createElement("input", {
            type: "hidden",
            name: "publicEncryptionKey",
            value: publicEncryptionKey }), /*#__PURE__*/

          _react.default.createElement("input", { type: "hidden", name: "publicAddress", value: publicAddress }), /*#__PURE__*/
          _react.default.createElement("input", { type: "hidden", name: "signature", value: signature }));


        }
      }
      return passwordInput;
    });}componentDidMount() {(0, _browserUtil.handleIOSBrowser)();(0, _animationUtil.animateIn)(this.refs.section);}

  renderRegisterForm() {
    const { emailItem, palmItem, passwordItem, securityItems, textItem } = {
      ...this.props };


    let passwordInput;

    if (passwordItem) {
      passwordInput = this.generatePasswordInputForm(passwordItem);
    }

    return /*#__PURE__*/(
      _react.default.createElement("form", { method: "POST", action: "/register" },
      emailItem && /*#__PURE__*/
      _react.default.createElement(_react.Fragment, null,

      emailItem.username.length > 0 && /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", name: "username", value: emailItem.username }),

      emailItem.email.length > 0 && /*#__PURE__*/
      _react.default.createElement("input", { type: "hidden", name: "email", value: emailItem.email })),



      passwordItem && passwordInput,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL093bmVyTG9naW5SZWNvbW1lbmQuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJMb2dpblJlY29tbWVuZCIsIkNvbXBvbmVudCIsInBhc3N3b3JkIiwidGV4dCIsInBhbG0iLCJzZWN1cml0eVF1ZXN0aW9ucyIsImxvZ2luTWV0aG9kcyIsImlzRGlzcGxheVdoeSIsImZvcmdldHNQYXNzd29yZCIsImxvc3RQaG9uZSIsInNjYW5uaW5nUGFsbSIsImFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zIiwicHJvcHMiLCJxdWVzdGlvbnMiLCJyZWNvbW1lbmRlZCIsInB1c2giLCJsb2dpbk1ldGhvZCIsInBhc3N3b3JkSXRlbSIsInRleHRJdGVtIiwicGFsbUl0ZW0iLCJzZWN1cml0eUl0ZW1zIiwic3RhdGUiLCJpc0NvbXBsZXRlIiwicmVjb21tZW5kZWRMb2dpbk1ldGhvZHMiLCJnZXRSZWNvbW1lbmRlZCIsImluZGV4T2YiLCJwYXNzd29yZElucHV0IiwidW5kZWZpbmVkIiwibGVuZ3RoIiwicHJpdmF0ZUtleSIsInB1YmxpY0VuY3J5cHRpb25LZXkiLCJwdWJsaWNBZGRyZXNzIiwic2lnbmF0dXJlIiwic3Vic3RyaW5nIiwiRXRoQ3J5cHRvIiwicHVibGljS2V5QnlQcml2YXRlS2V5IiwicHVibGljS2V5IiwidG9BZGRyZXNzIiwibWVzc2FnZSIsIm1lc3NhZ2VIYXNoIiwiaGFzaCIsImtlY2NhazI1NiIsInNpZ24iLCJkb2N1bWVudCIsImNvb2tpZSIsImUiLCJjb25zb2xlIiwibG9nIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZWZzIiwic2VjdGlvbiIsInJlbmRlclJlZ2lzdGVyRm9ybSIsImVtYWlsSXRlbSIsImdlbmVyYXRlUGFzc3dvcmRJbnB1dEZvcm0iLCJ1c2VybmFtZSIsImVtYWlsIiwicGFsbVRlbXBsYXRlIiwicGhvbmVOdW1iZXIiLCJKU09OIiwic3RyaW5naWZ5IiwiVXJsVXRpbCIsImdldFF1ZXJ5VmFyaWFibGUiLCJ3aWR0aCIsImFyZUFueUNvbXBsZXRlIiwicmVuZGVyU2VjdGlvbkNvbnRlbnRzIiwibWFwIiwiaGFuZGxlR29Gb3J3YXJkIiwiZmlsdGVyIiwic2V0U3RhdGUiLCJoYW5kbGVHb0JhY2siLCJyZW5kZXJTZWN0aW9uV2h5IiwiYW5zd2VyVGl0bGVzIiwiaXNRdWVzdGlvblN1Y2Nlc3MiLCJyZW5kZXIiLCJwb3NpdGlvbiJdLCJtYXBwaW5ncyI6ImllQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrRCxDQU5BO0FBQ0E7QUFNQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUIsQ0FDdkI7QUFDRDtBQUNjLE1BQU1DLG1CQUFOLFNBQWtDQyxnQkFBbEMsQ0FBNEM7Ozs7OztBQU0xQztBQUNiQyxNQUFBQSxRQUFRLEVBQUUsb0RBREc7QUFFYkMsTUFBQUEsSUFBSTtBQUNGLHFGQUhXO0FBSWJDLE1BQUFBLElBQUksRUFBRSw4REFKTztBQUtiQyxNQUFBQSxpQkFBaUIsRUFBRSxtREFMTixFQU4wQzs7O0FBY2pEO0FBQ05DLE1BQUFBLFlBQVksRUFBRSxDQUFDLFVBQUQsRUFBYSxNQUFiLEVBQXFCLE1BQXJCLEVBQTZCLG1CQUE3QixDQURSO0FBRU5DLE1BQUFBLFlBQVksRUFBRSxLQUZSLEVBZGlEOzs7Ozs7OztBQXdCeEMsVUFBTTtBQUNyQixZQUFNO0FBQ0pDLFFBQUFBLGVBREk7QUFFSkMsUUFBQUEsU0FGSTtBQUdKQyxRQUFBQSxZQUhJO0FBSUpDLFFBQUFBLDBCQUpJO0FBS0Y7QUFDRixXQUFHLEtBQUtDLEtBQUwsQ0FBV0MsU0FEWixFQUxKOztBQVFBLFlBQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUNBLFVBQUlOLGVBQWUsS0FBSyxzQkFBeEIsRUFBZ0Q7QUFDOUNNLFFBQUFBLFdBQVcsQ0FBQ0MsSUFBWixDQUFpQixVQUFqQjtBQUNEO0FBQ0QsVUFBSU4sU0FB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QUFDRSxRQUFBLEdBQUcsRUFBQyxTQUROO0FBRUUsUUFBQSxFQUFFLEVBQUMsaUJBRkw7QUFHRSxRQUFBLFNBQVMsRUFBRSx3Q0FBb0IsS0FBS1QsS0FBTCxDQUFXOEQsUUFBL0IsQ0FIYjs7QUFLR25FLE1BQUFBLFlBQVksR0FBRyxLQUFLK0QsZ0JBQUwsRUFBSCxHQUE2QixLQUFLTixxQkFBTCxFQUw1QyxDQURGOzs7QUFTRCxHQXRUd0QsQyxvRUFBdENoRSxtQixrQkFDRyxFQUNwQmtFLGVBQWUsRUFBRSxNQUFNLENBQUUsQ0FETCxFQUVwQkcsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUZGLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gXCIuLi8uLi8uLi91dGlsL2Jyb3dzZXItdXRpbFwiO1xuaW1wb3J0IEdvQmFja1N2ZyBmcm9tIFwiLi4vLi4vc3ZnL0dvQmFja1N2Z1wiO1xuLy8gaW1wb3J0IE9wdGlvblN2ZyBmcm9tICcuLi8uLi9zdmcvT3B0aW9uU3ZnJztcbi8vIGltcG9ydCBIYXNQaG9uZVN2ZyBmcm9tICcuLi8uLi9zdmcvSGFzUGhvbmVTdmcnO1xuaW1wb3J0IExvZ2luT3B0aW9uIGZyb20gXCIuL0xvZ2luT3B0aW9uXCI7XG5pbXBvcnQgeyBhbmltYXRlSW4sIGdldFNlY3Rpb25DbGFzc05hbWUgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9hbmltYXRpb24tdXRpbFwiO1xuaW1wb3J0IEFuc3dlcmVkSXRlbVN2ZyBmcm9tIFwiLi4vLi4vc3ZnL0Fuc3dlcmVkSXRlbVN2Z1wiO1xuaW1wb3J0IFVybFV0aWwgZnJvbSBcIi4uLy4uLy4uL3V0aWwvdXJsLXV0aWxcIjtcbmltcG9ydCBFdGhDcnlwdG8gZnJvbSBcImV0aC1jcnlwdG9cIjtcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIGltcG9ydChcIi4vT3duZXJMb2dpblJlY29tbWVuZC5zY3NzXCIpO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJMb2dpblJlY29tbWVuZCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlR29Gb3J3YXJkOiAoKSA9PiB7fSxcbiAgICBoYW5kbGVHb0JhY2s6ICgpID0+IHt9LFxuICB9O1xuXG4gIGFuc3dlclRpdGxlcyA9IHtcbiAgICBwYXNzd29yZDogXCJIb3cgb2Z0ZW4gZG8geW91IGNvbXBsZXRlbHkgZm9yZ2V0IHlvdXIgcGFzc3dvcmRzP1wiLFxuICAgIHRleHQ6XG4gICAgICBcIkluIHRoZSBsYXN0IGZpdmUgeWVhcnMsIGhvdyBtYW55IHRpbWVzIGhhdmUgeW91IHBlcm1hbmVudGx5IGxvc3QgeW91ciBwaG9uZT8gXCIsXG4gICAgcGFsbTogXCJIb3cgY29tZm9ydGFibGUgYXJlIHlvdSB1c2luZyB5b3VyIGNhbWVyYSB0byBzY2FuIHlvdXIgcGFsbT9cIixcbiAgICBzZWN1cml0eVF1ZXN0aW9uczogXCJIb3cgZ29vZCBhcmUgeW91IGF0IGFuc3dlcmluZyBzZWN1cml0eSBxdWVzdGlvbnM/XCIsXG4gIH07XG5cbiAgc3RhdGUgPSB7XG4gICAgbG9naW5NZXRob2RzOiBbXCJwYXNzd29yZFwiLCBcInRleHRcIiwgXCJwYWxtXCIsIFwic2VjdXJpdHlRdWVzdGlvbnNcIl0sXG4gICAgaXNEaXNwbGF5V2h5OiBmYWxzZSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBoYW5kbGVJT1NCcm93c2VyKCk7XG4gICAgYW5pbWF0ZUluKHRoaXMucmVmcy5zZWN0aW9uKTtcbiAgfVxuXG4gIGdldFJlY29tbWVuZGVkID0gKCkgPT4ge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcmdldHNQYXNzd29yZCxcbiAgICAgIGxvc3RQaG9uZSxcbiAgICAgIHNjYW5uaW5nUGFsbSxcbiAgICAgIGFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zLFxuICAgIH0gPSB7XG4gICAgICAuLi50aGlzLnByb3BzLnF1ZXN0aW9ucyxcbiAgICB9O1xuICAgIGNvbnN0IHJlY29tbWVuZGVkID0gW107XG4gICAgaWYgKGZvcmdldHNQYXNzd29yZCA9PT0gXCJmb3JnZXRQYXNzd29yZFJhcmVseVwiKSB7XG4gICAgICByZWNvbW1lbmRlZC5wdXNoKFwicGFzc3dvcmRcIik7XG4gICAgfVxuICAgIGlmIChsb3N0UGhvbmUgIT09IFwibm9QaG9uZVwiKSB7XG4gICAgICByZWNvbW1lbmRlZC5wdXNoKFwidGV4dFwiKTtcbiAgICB9XG4gICAgaWYgKHNjYW5uaW5nUGFsbSA9PT0gXCJwYWxtQ29tZm9ydGFibGVcIikge1xuICAgICAgcmVjb21tZW5kZWQucHVzaChcInBhbG1cIik7XG4gICAgfVxuICAgIGlmIChhbnN3ZXJpbmdTZWN1cml0eVF1ZXN0aW9ucyA9PT0gXCJzZWN1cml0eUdvb2RcIikge1xuICAgICAgcmVjb21tZW5kZWQucHVzaChcInNlY3VyaXR5UXVlc3Rpb25zXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVjb21tZW5kZWQ7XG4gIH07XG5cbiAgaXNDb21wbGV0ZSA9IChsb2dpbk1ldGhvZCkgPT4ge1xuICAgIGNvbnN0IHsgcGFzc3dvcmRJdGVtLCB0ZXh0SXRlbSwgcGFsbUl0ZW0sIHNlY3VyaXR5SXRlbXMgfSA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgfTtcbiAgICBzd2l0Y2ggKGxvZ2luTWV0aG9kKSB7XG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcbiAgICAgICAgcmV0dXJuICEhcGFzc3dvcmRJdGVtO1xuICAgICAgY2FzZSBcInRleHRcIjpcbiAgICAgICAgcmV0dXJuICEhdGV4dEl0ZW07XG4gICAgICBjYXNlIFwicGFsbVwiOlxuICAgICAgICByZXR1cm4gISFwYWxtSXRlbTtcbiAgICAgIGNhc2UgXCJzZWN1cml0eVF1ZXN0aW9uc1wiOlxuICAgICAgICByZXR1cm4gISFzZWN1cml0eUl0ZW1zO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfTtcblxuICBhcmVBbnlDb21wbGV0ZSA9ICgpID0+IHtcbiAgICBjb25zdCB7IGxvZ2luTWV0aG9kcyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgZm9yIChjb25zdCBsb2dpbk1ldGhvZCBvZiBsb2dpbk1ldGhvZHMpIHtcbiAgICAgIGlmICh0aGlzLmlzQ29tcGxldGUobG9naW5NZXRob2QpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgaXNRdWVzdGlvblN1Y2Nlc3MgPSAobG9naW5NZXRob2QpID0+IHtcbiAgICBjb25zdCByZWNvbW1lbmRlZExvZ2luTWV0aG9kcyA9IHRoaXMuZ2V0UmVjb21tZW5kZWQoKTtcbiAgICByZXR1cm4gcmVjb21tZW5kZWRMb2dpbk1ldGhvZHMuaW5kZXhPZihsb2dpbk1ldGhvZCkgPiAtMTtcbiAgfTtcblxuICBnZW5lcmF0ZVBhc3N3b3JkSW5wdXRGb3JtID0gKHBhc3N3b3JkSXRlbSkgPT4ge1xuICAgIGxldCBwYXNzd29yZElucHV0ID0gKFxuICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwicGFzc3dvcmRcIiB2YWx1ZT17cGFzc3dvcmRJdGVtLnBhc3N3b3JkfSAvPlxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICBwYXNzd29yZEl0ZW0ucGFzc3dvcmQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgcGFzc3dvcmRJdGVtLnBhc3N3b3JkLmxlbmd0aCA+PSA2NFxuICAgICkge1xuICAgICAgbGV0IHByaXZhdGVLZXkgPSBwYXNzd29yZEl0ZW0ucGFzc3dvcmQ7XG4gICAgICBsZXQgcHVibGljRW5jcnlwdGlvbktleTtcbiAgICAgIGxldCBwdWJsaWNBZGRyZXNzO1xuICAgICAgbGV0IHNpZ25hdHVyZTtcblxuICAgICAgaWYgKHByaXZhdGVLZXkuc3Vic3RyaW5nKDAsIDIpICE9PSBcIjB4XCIpIHtcbiAgICAgICAgcHJpdmF0ZUtleSA9IFwiMHhcIiArIHByaXZhdGVLZXk7XG4gICAgICB9XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHB1YmxpY0VuY3J5cHRpb25LZXkgPSBFdGhDcnlwdG8ucHVibGljS2V5QnlQcml2YXRlS2V5KHByaXZhdGVLZXkpO1xuICAgICAgICBwdWJsaWNBZGRyZXNzID0gRXRoQ3J5cHRvLnB1YmxpY0tleS50b0FkZHJlc3MocHVibGljRW5jcnlwdGlvbktleSk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHB1YmxpY0FkZHJlc3M7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2VIYXNoID0gRXRoQ3J5cHRvLmhhc2gua2VjY2FrMjU2KG1lc3NhZ2UpO1xuICAgICAgICBzaWduYXR1cmUgPSBFdGhDcnlwdG8uc2lnbihwcml2YXRlS2V5LCBtZXNzYWdlSGFzaCk7XG5cbiAgICAgICAgZG9jdW1lbnQuY29va2llID1cbiAgICAgICAgICBcImJyaW5nLXlvdXItb3duLWtleT1cIiArIHByaXZhdGVLZXkuc3Vic3RyaW5nKDIsIHByaXZhdGVLZXkubGVuZ3RoKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJOb3QgdXNpbmcgYnlva1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHB1YmxpY0VuY3J5cHRpb25LZXkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXNzd29yZElucHV0ID0gKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY0VuY3J5cHRpb25LZXlcIlxuICAgICAgICAgICAgICB2YWx1ZT17cHVibGljRW5jcnlwdGlvbktleX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJwdWJsaWNBZGRyZXNzXCIgdmFsdWU9e3B1YmxpY0FkZHJlc3N9IC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJzaWduYXR1cmVcIiB2YWx1ZT17c2lnbmF0dXJlfSAvPlxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBwYXNzd29yZElucHV0O1xuICB9O1xuXG4gIHJlbmRlclJlZ2lzdGVyRm9ybSgpIHtcbiAgICBjb25zdCB7IGVtYWlsSXRlbSwgcGFsbUl0ZW0sIHBhc3N3b3JkSXRlbSwgc2VjdXJpdHlJdGVtcywgdGV4dEl0ZW0gfSA9IHtcbiAgICAgIC4uLnRoaXMucHJvcHMsXG4gICAgfTtcblxuICAgIGxldCBwYXNzd29yZElucHV0O1xuXG4gICAgaWYgKHBhc3N3b3JkSXRlbSkge1xuICAgICAgcGFzc3dvcmRJbnB1dCA9IHRoaXMuZ2VuZXJhdGVQYXNzd29yZElucHV0Rm9ybShwYXNzd29yZEl0ZW0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL3JlZ2lzdGVyXCI+XG4gICAgICAgIHtlbWFpbEl0ZW0gJiYgKFxuICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgIHsvKiA8c3Bhbj51c2VybmFtZSBsZW5ndGgge2VtYWlsSXRlbS51c2VybmFtZS5sZW5ndGh9PC9zcGFuPiAqL31cbiAgICAgICAgICAgIHtlbWFpbEl0ZW0udXNlcm5hbWUubGVuZ3RoID4gMCAmJiAoXG4gICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e2VtYWlsSXRlbS51c2VybmFtZX0gLz5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICB7ZW1haWxJdGVtLmVtYWlsLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJlbWFpbFwiIHZhbHVlPXtlbWFpbEl0ZW0uZW1haWx9IC8+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIHtwYXNzd29yZEl0ZW0gJiYgcGFzc3dvcmRJbnB1dH1cbiAgICAgICAge3BhbG1JdGVtICYmIChcbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgbmFtZT1cInBhbG1UZW1wbGF0ZVwiXG4gICAgICAgICAgICB2YWx1ZT17cGFsbUl0ZW0ucGFsbVRlbXBsYXRlfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIHt0ZXh0SXRlbSAmJiAoXG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidGV4dFwiIHZhbHVlPXt0ZXh0SXRlbS5waG9uZU51bWJlcn0gLz5cbiAgICAgICAgKX1cbiAgICAgICAge3NlY3VyaXR5SXRlbXMgJiYgKFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgICBuYW1lPVwic2VjdXJpdHlRdWVzdGlvbnNcIlxuICAgICAgICAgICAgdmFsdWU9e0pTT04uc3RyaW5naWZ5KHNlY3VyaXR5SXRlbXMpfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICBuYW1lPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwiY2xpZW50X2lkXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInJlc3BvbnNlX3R5cGVcIlxuICAgICAgICAgIG5hbWU9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVzcG9uc2VfdHlwZVwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJyZWRpcmVjdF91cmxcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCBpZD1cInNjb3BlXCIgbmFtZT1cInNjb3BlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgPGlucHV0IGlkPVwic3RhdGVcIiBuYW1lPVwic3RhdGVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJcIiAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMTBweFwiIH19XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdmFsdWU9XCJGaW5pc2hcIlxuICAgICAgICAgIGRpc2FibGVkPXshdGhpcy5hcmVBbnlDb21wbGV0ZSgpfVxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTZWN0aW9uQ29udGVudHMoKSB7XG4gICAgY29uc3QgeyBsb2dpbk1ldGhvZHMsIGlzRGlzcGxheVdoeSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RG9jdW1lbnQgT3duZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPk1vcmUgd2F5cyB0byBsb2dpbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICB7dGhpcy5nZXRSZWNvbW1lbmRlZCgpLmxlbmd0aCA8IDEgJiZcbiAgICAgICAgICAgICAgICBcIldlIGNvdWxkbid0IGZpbmQgdGhlIHBlcmZlY3QgbG9naW4gc29sdXRpb24gZm9yIHlvdSwgYnV0IGhlcmUgYXJlIHNvbWUgb3B0aW9uc1wifVxuICAgICAgICAgICAgICB7dGhpcy5nZXRSZWNvbW1lbmRlZCgpLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgICAgICAgICBcIkJhc2VkIG9uIHlvdXIgYW5zd2Vycywgd2UgZm91bmQgdGhlIGZvbGxvd2luZyBsb2dpbiBzb2x1dGlvbiBmb3IgeW91XCJ9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICB7dGhpcy5nZXRSZWNvbW1lbmRlZCgpLm1hcCgobG9naW5NZXRob2QpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVjb21tZW5kZWRcIlxuICAgICAgICAgICAgICBrZXk9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlR29Gb3J3YXJkKFwib3duZXJcIiwgMTAsIHsgbG9naW5NZXRob2QgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TG9naW5PcHRpb25cbiAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZD17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgaXNDb21wbGV0ZT17dGhpcy5pc0NvbXBsZXRlKGxvZ2luTWV0aG9kKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICAgIHt0aGlzLmdldFJlY29tbWVuZGVkKCkubGVuZ3RoIDwgNCAmJiAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2VycHQxXCI+T3RoZXIgbG9naW4gbWV0aG9kczwvZGl2PlxuICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0MlwiPihub3QgcmVjb21tZW5kZWQgZm9yIHlvdSk8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtsb2dpbk1ldGhvZHNcbiAgICAgICAgICAgIC5maWx0ZXIoXG4gICAgICAgICAgICAgIChsb2dpbk1ldGhvZCkgPT4gdGhpcy5nZXRSZWNvbW1lbmRlZCgpLmluZGV4T2YobG9naW5NZXRob2QpIDwgMFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLm1hcCgobG9naW5NZXRob2QpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlR29Gb3J3YXJkKFwib3duZXJcIiwgMTAsIHsgbG9naW5NZXRob2QgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8TG9naW5PcHRpb25cbiAgICAgICAgICAgICAgICAgIGxvZ2luTWV0aG9kPXtsb2dpbk1ldGhvZH1cbiAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGU9e3RoaXMuaXNDb21wbGV0ZShsb2dpbk1ldGhvZCl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJSZWdpc3RlckZvcm0oKX1cbiAgICAgICAgICAgIDxkaXYgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheVdoeTogIWlzRGlzcGxheVdoeSB9KX0+XG4gICAgICAgICAgICAgIFdoeSBkaWQgeW91IHBpY2sgdGhpcyBmb3IgbWU/XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICBjb2xvcj1cIiMyMzYyYzdcIlxuICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soXCJvd25lclwiLCA5KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJTZWN0aW9uV2h5KCkge1xuICAgIGNvbnN0IHsgbG9naW5NZXRob2RzLCBpc0Rpc3BsYXlXaHkgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RG9jdW1lbnQgT3duZXI8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPk1vcmUgd2F5cyB0byBsb2dpbjwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxIHdoeS1jYXJkXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3aHktdGl0bGVcIj5XaHkgZGlkIHlvdSBwaWNrIHRoaXMgZm9yIG1lPzwvZGl2PlxuICAgICAgICAgIHtsb2dpbk1ldGhvZHMubWFwKChsb2dpbk1ldGhvZCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBrZXk9e2xvZ2luTWV0aG9kfSBjbGFzc05hbWU9XCJ3aHktaXRlbVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndoeS1pdGVtLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3RoaXMuYW5zd2VyVGl0bGVzW2xvZ2luTWV0aG9kXX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxBbnN3ZXJlZEl0ZW1TdmdcbiAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZD17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgaXNTdWNjZXNzPXt0aGlzLmlzUXVlc3Rpb25TdWNjZXNzKGxvZ2luTWV0aG9kKX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgIGNvbG9yPVwiIzIzNjJjN1wiXG4gICAgICAgICAgZ29CYWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNEaXNwbGF5V2h5OiAhaXNEaXNwbGF5V2h5IH0pfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzRGlzcGxheVdoeSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPVwic2VjdGlvblwiXG4gICAgICAgIGlkPVwic2VjdGlvbi05LW93bmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtnZXRTZWN0aW9uQ2xhc3NOYW1lKHRoaXMucHJvcHMucG9zaXRpb24pfVxuICAgICAgPlxuICAgICAgICB7aXNEaXNwbGF5V2h5ID8gdGhpcy5yZW5kZXJTZWN0aW9uV2h5KCkgOiB0aGlzLnJlbmRlclNlY3Rpb25Db250ZW50cygpfVxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19