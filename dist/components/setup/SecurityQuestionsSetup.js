"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _MSelect = _interopRequireDefault(require("../common/MSelect"));
var _HowSvg = _interopRequireDefault(require("../svg/HowSvg"));
var _SecurityExampleSvg = _interopRequireDefault(require("../svg/SecurityExampleSvg"));
var _CrossSvg = _interopRequireDefault(require("../svg/CrossSvg"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _SecurityMethodLoginSvg = _interopRequireDefault(require("../svg/SecurityMethodLoginSvg"));

if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/e18bfbb985f94998e74594b6b4706e9f.scss"));
}
class SecurityQuestionSetup extends _react.Component {
  constructor(props) {var _this;
    super(props);_this = this;(0, _defineProperty2.default)(this, "setSecurityQuestions", /*#__PURE__*/(0, _asyncToGenerator2.default)(













    function* () {
      const {
        goBack,
        loginMethods,
        setLoginMethods,
        setSecurityQuestions,
        isAdd } =
      { ..._this.props };
      const { securityItems } = { ..._this.state };
      try {
        const url = "/api/login-methods";
        const authorization = _urlUtil.default.getQueryVariable("access_token");
        const init = {
          method: isAdd ? "POST" : "PUT",
          headers: {
            Authorization: `Bearer ${authorization}`,
            "Content-Type": "application/json" },

          body: JSON.stringify({
            securityQuestions: JSON.stringify(securityItems) }) };


        yield fetch(url, init);
        if (isAdd) {
          loginMethods.push("SecurityQuestionsLoginType");
          setLoginMethods(loginMethods);
        }
        setSecurityQuestions(securityItems);
        goBack();
      } catch (err) {
        console.error(err);
      }
    }));(0, _defineProperty2.default)(this, "deleteSecurityQuestions", /*#__PURE__*/(0, _asyncToGenerator2.default)(

    function* () {
      const { setLoginMethods, goBack, setSecurityQuestions } = { ..._this.props };
      let { loginMethods } = { ..._this.props };
      try {
        const url = "/api/login-methods/SecurityQuestionsLoginType";
        const authorization = _urlUtil.default.getQueryVariable("access_token");
        const init = {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authorization}`,
            "Content-Type": "application/json" } };


        yield fetch(url, init);
        loginMethods = loginMethods.filter(lm => lm !== "SecurityQuestionsLoginType");
        setLoginMethods(loginMethods);
        setSecurityQuestions([]);
        goBack();
      } catch (err) {
        console.error(err);
      }
    }));(0, _defineProperty2.default)(this, "isDisabled",

















































































































































































































































































































































    () => {
      const { securityItems } = { ...this.state };
      let matched = securityItems.filter(
      securityItem => securityItem.answer.length > 0 && securityItem.question);

      return matched.length < securityItems.length || matched.length === 0;
    });(0, _defineProperty2.default)(this, "getOptions",

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



    });let _securityItems = [{ question: undefined, answer: "" }];_securityItems = props.securityItems ? props.securityItems : _securityItems;this.state = { securityItems: _securityItems, confirmDelete: false };}isSecurityFilledOut() {const { securityItems } = { ...this.state };let isFilledOut = true;for (const securityItem of securityItems) {if (securityItem.answer.length <= 0 || !securityItem.question) {isFilledOut = false;}}return isFilledOut;}renderSecurityCard() {const { securityItems } = { ...this.state };const { toggleDisplayHow, isLogin, isSettings, isAdd } = { ...this.props };return /*#__PURE__*/_react.default.createElement("div", { id: "security-questions-setup", className: "card owner1" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-title", style: { fontSize: "25px", paddingBottom: "13px" } }, "Security Questions"), /*#__PURE__*/_react.default.createElement("div", { className: "excerpt1" }, "Select a maximum of three preferred security questions followed by your answers"), securityItems.map((securityItem, i) => {return /*#__PURE__*/_react.default.createElement(_react.Fragment, { key: i }, /*#__PURE__*/_react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /*#__PURE__*/_react.default.createElement("label", null, "Question #", i + 1), i > 0 && /*#__PURE__*/_react.default.createElement("div", { style: { cursor: "pointer" }, onClick: () => {securityItems.splice(i, 1);this.setState({ securityItems });} }, /*#__PURE__*/_react.default.createElement(_CrossSvg.default, null))), /*#__PURE__*/_react.default.createElement(_MSelect.default, { value: this.getOptions().find(option => option.value === securityItem.question), options: this.getOptions(), isSearcheable: false, onChange: e => {securityItem.question = e.value;this.setState({ securityItems });} })), /*#__PURE__*/_react.default.createElement("div", { className: "answer-section" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/_react.default.createElement("div", null, "Answer"), /*#__PURE__*/_react.default.createElement("input", { type: "text", value: securityItem.answer, onChange: e => {securityItem.answer = e.target.value;this.setState({ securityItems });} }))));}), securityItems.length < 3 && /*#__PURE__*/_react.default.createElement("input", { type: "button", value: "Add Question", style: { width: "220px", marginTop: "20px" }, onClick: () => {securityItems.push({ question: undefined, answer: "" });this.setState({ securityItems });} })), /*#__PURE__*/_react.default.createElement("div", { className: "submit-section" }, !isLogin && !isSettings && /*#__PURE__*/_react.default.createElement("input", { style: { width: "210px" }, type: "button", value: "Set Questions", onClick: () => this.props.handleGoBack("owner", 10, { securityItems }), disabled: this.isDisabled() }), !isLogin && isSettings && /*#__PURE__*/_react.default.createElement("input", { style: { width: "210px" }, type: "button", value: "Save", onClick: this.setSecurityQuestions, disabled: this.isDisabled() })), !isSettings && /*#__PURE__*/_react.default.createElement("div", { className: "how", onClick: toggleDisplayHow }, "How does this work?"), isSettings && !isAdd && /*#__PURE__*/_react.default.createElement("div", { onClick: () => this.setState({ confirmDelete: true }), style: { color: "#d95868", marginTop: "12px", fontSize: "15px", cursor: "pointer" } }, "delete this login method"));}renderHow() {return /*#__PURE__*/_react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/_react.default.createElement(_HowSvg.default, { loginMethod: "securityAnswers" }), /*#__PURE__*/_react.default.createElement("div", { className: "sec-excerpt" }, "Two-step verification is a simple way to authenticate a user by sending a unique code to their mobile device."), /*#__PURE__*/_react.default.createElement(_SecurityExampleSvg.default, null));}renderLogin() {const { renderHiddenInputs } = { ...this.props };const { isDisplayHow, securityItems } = { ...this.state };return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, !isDisplayHow && /*#__PURE__*/_react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/_react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/_react.default.createElement("form", { method: "POST", action: "/authorize", className: "card login-card" }, /*#__PURE__*/_react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-title", style: { margin: "0 -18px 12px -18px" } }, "Security Questions"), /*#__PURE__*/_react.default.createElement(_SecurityMethodLoginSvg.default, null)), /*#__PURE__*/_react.default.createElement("div", { className: "question-container" }, securityItems.map((securityItem, i) => {return /*#__PURE__*/_react.default.createElement(_react.Fragment, { key: i }, /*#__PURE__*/_react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/_react.default.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, /*#__PURE__*/_react.default.createElement("label", null, "Question #", i + 1)), /*#__PURE__*/_react.default.createElement(_MSelect.default, { value: this.getOptions().find(option => option.value === securityItem.question), options: this.getOptions(), isSearcheable: false, onChange: e => {securityItem.question = e.value;this.setState({ securityItems });} })), /*#__PURE__*/_react.default.createElement("div", { className: "answer-section" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/_react.default.createElement("label", null, "Answer"), /*#__PURE__*/_react.default.createElement("input", { type: "text", value: securityItem.answer, onChange: e => {securityItem.answer = e.target.value;this.setState({ securityItems });} }))));})), /*#__PURE__*/_react.default.createElement("div", { className: "security-excerpt" }, "Please clear the questions listed above to gain access to your account."), /*#__PURE__*/_react.default.createElement("input", { name: "securityQuestions", type: "hidden", value: JSON.stringify(securityItems) }), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", { style: { width: "210px" }, type: "submit", value: "Login", disabled: !this.isSecurityFilledOut() }), /*#__PURE__*/_react.default.createElement("div", { className: "how", onClick: () => this.setState({ isDisplayHow: !isDisplayHow }) }, "How does this work?")), renderHiddenInputs()))), isDisplayHow && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", { className: "card owner1 delete" }, /*#__PURE__*/_react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/_react.default.createElement(_HowSvg.default, { loginMethod: "securityAnswers" }), /*#__PURE__*/_react.default.createElement("div", { className: "sec-excerpt" }, "Two-step verification is a simple way to authenticate a user by sending a unique code to their mobile device."), /*#__PURE__*/_react.default.createElement(_SecurityExampleSvg.default, null)), /*#__PURE__*/_react.default.createElement(GoBackSvg, { color: "#2362c7", goBack: () => this.setState({ isDisplayHow: !isDisplayHow }) }))));}renderConfirmDelete() {return /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/_react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/_react.default.createElement("div", { className: "card login-card delete" }, /*#__PURE__*/_react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/_react.default.createElement("div", { className: "card-title", style: { margin: "0 -18px 12px -18px" } }, "Security Questions"), /*#__PURE__*/_react.default.createElement(_SecurityMethodLoginSvg.default, null)), /*#__PURE__*/_react.default.createElement("div", { style: { fontSize: "15px", color: "white", textAlign: "center" } }, /*#__PURE__*/_react.default.createElement("p", null, "Are you sure you wish to delete this login method?"), /*#__PURE__*/_react.default.createElement("p", null, "You will have to add every single question again if you change your mind")), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("input", { type: "button", value: "Yes, delete", style: { width: "220px", marginTop: "20px", backgroundColor: "#d95868" }, onClick: this.deleteSecurityQuestions }), /*#__PURE__*/_react.default.createElement("div", { style: { fontSize: "15px", textAlign: "center", color: "white", marginTop: "12px", cursor: "pointer" }, onClick: () => this.setState({ confirmDelete: false }) }, "no, take me back"))))));}render() {const { confirmDelete } = { ...this.state };const { isDisplayHow, isLogin } = { ...this.props };if (confirmDelete) {return this.renderConfirmDelete();}if (isLogin) {return this.renderLogin();}return !isDisplayHow ? this.renderSecurityCard() : this.renderHow();}}exports.default = SecurityQuestionSetup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NldHVwL1NlY3VyaXR5UXVlc3Rpb25zU2V0dXAuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiU2VjdXJpdHlRdWVzdGlvblNldHVwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsImdvQmFjayIsImxvZ2luTWV0aG9kcyIsInNldExvZ2luTWV0aG9kcyIsInNldFNlY3VyaXR5UXVlc3Rpb25zIiwiaXNBZGQiLCJzZWN1cml0eUl0ZW1zIiwic3RhdGUiLCJ1cmwiLCJhdXRob3JpemF0aW9uIiwiVXJsVXRpbCIsImdldFF1ZXJ5VmFyaWFibGUiLCJpbml0IiwibWV0aG9kIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInNlY3VyaXR5UXVlc3Rpb25zIiwiZmV0Y2giLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwibG0iLCJtYXRjaGVkIiwic2VjdXJpdHlJdGVtIiwiYW5zd2VyIiwibGVuZ3RoIiwicXVlc3Rpb24iLCJ2YWx1ZSIsImxhYmVsIiwiaXNEaXNhYmxlZCIsInNvbWUiLCJ1bmRlZmluZWQiLCJjb25maXJtRGVsZXRlIiwiaXNTZWN1cml0eUZpbGxlZE91dCIsImlzRmlsbGVkT3V0IiwicmVuZGVyU2VjdXJpdHlDYXJkIiwidG9nZ2xlRGlzcGxheUhvdyIsImlzTG9naW4iLCJpc1NldHRpbmdzIiwiZm9udFNpemUiLCJwYWRkaW5nQm90dG9tIiwibWFwIiwiaSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImN1cnNvciIsInNwbGljZSIsInNldFN0YXRlIiwiZ2V0T3B0aW9ucyIsImZpbmQiLCJvcHRpb24iLCJlIiwidGFyZ2V0Iiwid2lkdGgiLCJtYXJnaW5Ub3AiLCJoYW5kbGVHb0JhY2siLCJjb2xvciIsInJlbmRlckhvdyIsInJlbmRlckxvZ2luIiwicmVuZGVySGlkZGVuSW5wdXRzIiwiaXNEaXNwbGF5SG93IiwibWFyZ2luIiwicmVuZGVyQ29uZmlybURlbGV0ZSIsInRleHRBbGlnbiIsImJhY2tncm91bmRDb2xvciIsImRlbGV0ZVNlY3VyaXR5UXVlc3Rpb25zIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoicWtCQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEO0FBQ2MsTUFBTUMscUJBQU4sU0FBb0NDLGdCQUFwQyxDQUE4QztBQUMzREMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTixDQURpQjs7Ozs7Ozs7Ozs7Ozs7QUFlSSxpQkFBWTtBQUNqQyxZQUFNO0FBQ0pDLFFBQUFBLE1BREk7QUFFSkMsUUFBQUEsWUFGSTtBQUdKQyxRQUFBQSxlQUhJO0FBSUpDLFFBQUFBLG9CQUpJO0FBS0pDLFFBQUFBLEtBTEk7QUFNRixRQUFFLEdBQUcsS0FBSSxDQUFDTCxLQUFWLEVBTko7QUFPQSxZQUFNLEVBQUVNLGFBQUYsS0FBb0IsRUFBRSxHQUFHLEtBQUksQ0FBQ0MsS0FBVixFQUExQjtBQUNBLFVBQUk7QUFDRixjQUFNQyxHQUFHLEdBQUcsb0JBQVo7QUFDQSxjQUFNQyxhQUFhLEdBQUdDLGlCQUFRQyxnQkFBUixDQUF5QixjQUF6QixDQUF0QjtBQUNBLGNBQU1DLElBQUksR0FBRztBQUNYQyxVQUFBQSxNQUFNLEVBQUVSLEtBQUssR0FBRyxNQUFILEdBQVksS0FEZDtBQUVYUyxVQUFBQSxPQUFPLEVBQUU7QUFDUEMsWUFBQUEsYUFBYSxFQUFHLFVBQVNOLGFBQWMsRUFEaEM7QUFFUCw0QkFBZ0Isa0JBRlQsRUFGRTs7QUFNWE8sVUFBQUEsSUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZTtBQUNuQkMsWUFBQUEsaUJBQWlCLEVBQUVGLElBQUksQ0FBQ0MsU0FBTCxDQUFlWixhQUFmLENBREEsRUFBZixDQU5LLEVBQWI7OztB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QVMsRUFBRSxNQUpOLEVBS0xULE1BQU0sRUFBRSxTQUxILEVBRFQsRUFRRSxPQUFPLEVBQUUsTUFBTSxLQUFLRSxRQUFMLENBQWMsRUFBRWYsYUFBYSxFQUFFLEtBQWpCLEVBQWQsQ0FSakIsdUJBWEYsQ0F2QkYsQ0FERixDQURGLENBREYsQ0FERixDQXdERCxDQUVEa0MsTUFBTSxHQUFHLENBQ1AsTUFBTSxFQUFFbEMsYUFBRixLQUFvQixFQUFFLEdBQUcsS0FBSzlCLEtBQVYsRUFBMUIsQ0FDQSxNQUFNLEVBQUUwRCxZQUFGLEVBQWdCdkIsT0FBaEIsS0FBNEIsRUFBRSxHQUFHLEtBQUsxQyxLQUFWLEVBQWxDLENBQ0EsSUFBSXFDLGFBQUosRUFBbUIsQ0FDakIsT0FBTyxLQUFLOEIsbUJBQUwsRUFBUCxDQUNELENBQ0QsSUFBSXpCLE9BQUosRUFBYSxDQUNYLE9BQU8sS0FBS3FCLFdBQUwsRUFBUCxDQUNELENBQ0QsT0FBTyxDQUFDRSxZQUFELEdBQWdCLEtBQUt6QixrQkFBTCxFQUFoQixHQUE0QyxLQUFLc0IsU0FBTCxFQUFuRCxDQUNELENBdlowRCxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBNU2VsZWN0IGZyb20gXCIuLi9jb21tb24vTVNlbGVjdFwiO1xuaW1wb3J0IEhvd1N2ZyBmcm9tIFwiLi4vc3ZnL0hvd1N2Z1wiO1xuaW1wb3J0IFNlY3VyaXR5RXhhbXBsZVN2ZyBmcm9tIFwiLi4vc3ZnL1NlY3VyaXR5RXhhbXBsZVN2Z1wiO1xuaW1wb3J0IENyb3NzU3ZnIGZyb20gXCIuLi9zdmcvQ3Jvc3NTdmdcIjtcbmltcG9ydCBVcmxVdGlsIGZyb20gXCIuLi8uLi91dGlsL3VybC11dGlsXCI7XG5pbXBvcnQgU2VjdXJpdHlNZXRob2RMb2dpblN2ZyBmcm9tIFwiLi4vc3ZnL1NlY3VyaXR5TWV0aG9kTG9naW5TdmdcIjtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KFwiLi9TZWN1cml0eVF1ZXN0aW9uc1NldHVwLnNjc3NcIik7XG59XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN1cml0eVF1ZXN0aW9uU2V0dXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBsZXQgc2VjdXJpdHlJdGVtcyA9IFtcbiAgICAgIHtcbiAgICAgICAgcXVlc3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgYW5zd2VyOiBcIlwiLFxuICAgICAgfSxcbiAgICBdO1xuICAgIHNlY3VyaXR5SXRlbXMgPSBwcm9wcy5zZWN1cml0eUl0ZW1zID8gcHJvcHMuc2VjdXJpdHlJdGVtcyA6IHNlY3VyaXR5SXRlbXM7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlY3VyaXR5SXRlbXMsXG4gICAgICBjb25maXJtRGVsZXRlOiBmYWxzZSxcbiAgICB9O1xuICB9XG5cbiAgc2V0U2VjdXJpdHlRdWVzdGlvbnMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge1xuICAgICAgZ29CYWNrLFxuICAgICAgbG9naW5NZXRob2RzLFxuICAgICAgc2V0TG9naW5NZXRob2RzLFxuICAgICAgc2V0U2VjdXJpdHlRdWVzdGlvbnMsXG4gICAgICBpc0FkZCxcbiAgICB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgY29uc3QgeyBzZWN1cml0eUl0ZW1zIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gXCIvYXBpL2xvZ2luLW1ldGhvZHNcIjtcbiAgICAgIGNvbnN0IGF1dGhvcml6YXRpb24gPSBVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJhY2Nlc3NfdG9rZW5cIik7XG4gICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICBtZXRob2Q6IGlzQWRkID8gXCJQT1NUXCIgOiBcIlBVVFwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGhvcml6YXRpb259YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgIHNlY3VyaXR5UXVlc3Rpb25zOiBKU09OLnN0cmluZ2lmeShzZWN1cml0eUl0ZW1zKSxcbiAgICAgICAgfSksXG4gICAgICB9O1xuICAgICAgYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICAgIGlmIChpc0FkZCkge1xuICAgICAgICBsb2dpbk1ldGhvZHMucHVzaChcIlNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlXCIpO1xuICAgICAgICBzZXRMb2dpbk1ldGhvZHMobG9naW5NZXRob2RzKTtcbiAgICAgIH1cbiAgICAgIHNldFNlY3VyaXR5UXVlc3Rpb25zKHNlY3VyaXR5SXRlbXMpO1xuICAgICAgZ29CYWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuXG4gIGRlbGV0ZVNlY3VyaXR5UXVlc3Rpb25zID0gYXN5bmMgKCkgPT4ge1xuICAgIGNvbnN0IHsgc2V0TG9naW5NZXRob2RzLCBnb0JhY2ssIHNldFNlY3VyaXR5UXVlc3Rpb25zIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBsZXQgeyBsb2dpbk1ldGhvZHMgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW4tbWV0aG9kcy9TZWN1cml0eVF1ZXN0aW9uc0xvZ2luVHlwZVwiO1xuICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IFVybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRob3JpemF0aW9ufWAsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICAgIGxvZ2luTWV0aG9kcyA9IGxvZ2luTWV0aG9kcy5maWx0ZXIobG0gPT4gbG0gIT09IFwiU2VjdXJpdHlRdWVzdGlvbnNMb2dpblR5cGVcIik7XG4gICAgICBzZXRMb2dpbk1ldGhvZHMobG9naW5NZXRob2RzKTtcbiAgICAgIHNldFNlY3VyaXR5UXVlc3Rpb25zKFtdKTtcbiAgICAgIGdvQmFjaygpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcblxuICBpc1NlY3VyaXR5RmlsbGVkT3V0KCkge1xuICAgIGNvbnN0IHsgc2VjdXJpdHlJdGVtcyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgbGV0IGlzRmlsbGVkT3V0ID0gdHJ1ZTtcbiAgICBmb3IgKGNvbnN0IHNlY3VyaXR5SXRlbSBvZiBzZWN1cml0eUl0ZW1zKSB7XG4gICAgICBpZiAoc2VjdXJpdHlJdGVtLmFuc3dlci5sZW5ndGggPD0gMCB8fCAhc2VjdXJpdHlJdGVtLnF1ZXN0aW9uKSB7XG4gICAgICAgIGlzRmlsbGVkT3V0ID0gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBpc0ZpbGxlZE91dDtcbiAgfVxuXG4gIHJlbmRlclNlY3VyaXR5Q2FyZCgpIHtcbiAgICBjb25zdCB7IHNlY3VyaXR5SXRlbXMgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IHsgdG9nZ2xlRGlzcGxheUhvdywgaXNMb2dpbiwgaXNTZXR0aW5ncywgaXNBZGQgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGlkPVwic2VjdXJpdHktcXVlc3Rpb25zLXNldHVwXCIgY2xhc3NOYW1lPVwiY2FyZCBvd25lcjFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCJcbiAgICAgICAgICAgIHN0eWxlPXt7IGZvbnRTaXplOiBcIjI1cHhcIiwgcGFkZGluZ0JvdHRvbTogXCIxM3B4XCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBTZWN1cml0eSBRdWVzdGlvbnNcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2VycHQxXCI+XG4gICAgICAgICAgICBTZWxlY3QgYSBtYXhpbXVtIG9mIHRocmVlIHByZWZlcnJlZCBzZWN1cml0eSBxdWVzdGlvbnMgZm9sbG93ZWQgYnlcbiAgICAgICAgICAgIHlvdXIgYW5zd2Vyc1xuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIHtzZWN1cml0eUl0ZW1zLm1hcCgoc2VjdXJpdHlJdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8RnJhZ21lbnQga2V5PXtpfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMVwiPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD5RdWVzdGlvbiAje2kgKyAxfTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIHtpID4gMCAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3VyaXR5SXRlbXMgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxDcm9zc1N2ZyAvPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8TVNlbGVjdFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRPcHRpb25zKCkuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAob3B0aW9uKSA9PiBvcHRpb24udmFsdWUgPT09IHNlY3VyaXR5SXRlbS5xdWVzdGlvblxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgaXNTZWFyY2hlYWJsZT17ZmFsc2V9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5SXRlbS5xdWVzdGlvbiA9IGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNlY3VyaXR5SXRlbXMgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXY+QW5zd2VyPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VjdXJpdHlJdGVtLmFuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5SXRlbS5hbnN3ZXIgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWN1cml0eUl0ZW1zIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAge3NlY3VyaXR5SXRlbXMubGVuZ3RoIDwgMyAmJiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiQWRkIFF1ZXN0aW9uXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjIwcHhcIiwgbWFyZ2luVG9wOiBcIjIwcHhcIiB9fVxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VjdXJpdHlJdGVtcy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICBhbnN3ZXI6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtc2VjdGlvblwiPlxuICAgICAgICAgIHshaXNMb2dpbiAmJiAhaXNTZXR0aW5ncyAmJiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJTZXQgUXVlc3Rpb25zXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUdvQmFjayhcIm93bmVyXCIsIDEwLCB7IHNlY3VyaXR5SXRlbXMgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5pc0Rpc2FibGVkKCl9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgeyFpc0xvZ2luICYmIGlzU2V0dGluZ3MgJiYgKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiU2F2ZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc2V0U2VjdXJpdHlRdWVzdGlvbnN9XG4gICAgICAgICAgICAgIGRpc2FibGVkPXt0aGlzLmlzRGlzYWJsZWQoKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHshaXNTZXR0aW5ncyAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3dcIiBvbkNsaWNrPXt0b2dnbGVEaXNwbGF5SG93fT5cbiAgICAgICAgICAgIEhvdyBkb2VzIHRoaXMgd29yaz9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2lzU2V0dGluZ3MgJiYgIWlzQWRkICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29uZmlybURlbGV0ZTogdHJ1ZSB9KX1cbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGNvbG9yOiBcIiNkOTU4NjhcIixcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBkZWxldGUgdGhpcyBsb2dpbiBtZXRob2RcbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXJIb3coKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93LWNvbnRhaW5lclwiPlxuICAgICAgICA8SG93U3ZnIGxvZ2luTWV0aG9kPVwic2VjdXJpdHlBbnN3ZXJzXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtZXhjZXJwdFwiPlxuICAgICAgICAgIFR3by1zdGVwIHZlcmlmaWNhdGlvbiBpcyBhIHNpbXBsZSB3YXkgdG8gYXV0aGVudGljYXRlIGEgdXNlciBieVxuICAgICAgICAgIHNlbmRpbmcgYSB1bmlxdWUgY29kZSB0byB0aGVpciBtb2JpbGUgZGV2aWNlLlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPFNlY3VyaXR5RXhhbXBsZVN2ZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlckxvZ2luKCkge1xuICAgIGNvbnN0IHsgcmVuZGVySGlkZGVuSW5wdXRzIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBjb25zdCB7IGlzRGlzcGxheUhvdywgc2VjdXJpdHlJdGVtcyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgeyFpc0Rpc3BsYXlIb3cgJiYgKFxuICAgICAgICAgIDxkaXYgaWQ9XCJzZWN0aW9uLTEtb3duZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICAgICAgICA8Zm9ybVxuICAgICAgICAgICAgICAgIG1ldGhvZD1cIlBPU1RcIlxuICAgICAgICAgICAgICAgIGFjdGlvbj1cIi9hdXRob3JpemVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgbG9naW4tY2FyZFwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW46IFwiMCAtMThweCAxMnB4IC0xOHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgU2VjdXJpdHkgUXVlc3Rpb25zXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTZWN1cml0eU1ldGhvZExvZ2luU3ZnIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJxdWVzdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICAgIHtzZWN1cml0eUl0ZW1zLm1hcCgoc2VjdXJpdHlJdGVtLCBpKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPEZyYWdtZW50IGtleT17aX0+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UXVlc3Rpb24gI3tpICsgMX08L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPE1TZWxlY3RcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5nZXRPcHRpb25zKCkuZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvcHRpb24pID0+IG9wdGlvbi52YWx1ZSA9PT0gc2VjdXJpdHlJdGVtLnF1ZXN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zPXt0aGlzLmdldE9wdGlvbnMoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1NlYXJjaGVhYmxlPXtmYWxzZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5SXRlbS5xdWVzdGlvbiA9IGUudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VjdXJpdHlJdGVtcyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkFuc3dlcjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VjdXJpdHlJdGVtLmFuc3dlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW0uYW5zd2VyID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWN1cml0eUl0ZW1zIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3VyaXR5LWV4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSBjbGVhciB0aGUgcXVlc3Rpb25zIGxpc3RlZCBhYm92ZSB0byBnYWluIGFjY2VzcyB0byB5b3VyXG4gICAgICAgICAgICAgICAgICBhY2NvdW50LlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgbmFtZT1cInNlY3VyaXR5UXVlc3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e0pTT04uc3RyaW5naWZ5KHNlY3VyaXR5SXRlbXMpfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyF0aGlzLmlzU2VjdXJpdHlGaWxsZWRPdXQoKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvd1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheUhvdzogIWlzRGlzcGxheUhvdyB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEhvdyBkb2VzIHRoaXMgd29yaz9cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHtyZW5kZXJIaWRkZW5JbnB1dHMoKX1cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICAgIHtpc0Rpc3BsYXlIb3cgJiYgKFxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxIGRlbGV0ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SG93U3ZnIGxvZ2luTWV0aG9kPVwic2VjdXJpdHlBbnN3ZXJzXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1leGNlcnB0XCI+XG4gICAgICAgICAgICAgICAgICBUd28tc3RlcCB2ZXJpZmljYXRpb24gaXMgYSBzaW1wbGUgd2F5IHRvIGF1dGhlbnRpY2F0ZSBhIHVzZXJcbiAgICAgICAgICAgICAgICAgIGJ5IHNlbmRpbmcgYSB1bmlxdWUgY29kZSB0byB0aGVpciBtb2JpbGUgZGV2aWNlLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxTZWN1cml0eUV4YW1wbGVTdmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheUhvdzogIWlzRGlzcGxheUhvdyB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyQ29uZmlybURlbGV0ZSgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8ZGl2IGlkPVwic2VjdGlvbi0xLW93bmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbG9naW4tY2FyZCBkZWxldGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgLTE4cHggMTJweCAtMThweFwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgU2VjdXJpdHkgUXVlc3Rpb25zXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPFNlY3VyaXR5TWV0aG9kTG9naW5TdmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGlzIGxvZ2luIG1ldGhvZD88L3A+XG4gICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICBZb3Ugd2lsbCBoYXZlIHRvIGFkZCBldmVyeSBzaW5nbGUgcXVlc3Rpb24gYWdhaW4gaWYgeW91IGNoYW5nZVxuICAgICAgICAgICAgICAgICAgeW91ciBtaW5kXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJZZXMsIGRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIyMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2Q5NTg2OFwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlU2VjdXJpdHlRdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwid2hpdGVcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29uZmlybURlbGV0ZTogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgbm8sIHRha2UgbWUgYmFja1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGNvbmZpcm1EZWxldGUgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IHsgaXNEaXNwbGF5SG93LCBpc0xvZ2luIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBpZiAoY29uZmlybURlbGV0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29uZmlybURlbGV0ZSgpO1xuICAgIH1cbiAgICBpZiAoaXNMb2dpbikge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTG9naW4oKTtcbiAgICB9XG4gICAgcmV0dXJuICFpc0Rpc3BsYXlIb3cgPyB0aGlzLnJlbmRlclNlY3VyaXR5Q2FyZCgpIDogdGhpcy5yZW5kZXJIb3coKTtcbiAgfVxuXG4gIGlzRGlzYWJsZWQgPSAoKSA9PiB7XG4gICAgY29uc3QgeyBzZWN1cml0eUl0ZW1zIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBsZXQgbWF0Y2hlZCA9IHNlY3VyaXR5SXRlbXMuZmlsdGVyKFxuICAgICAgKHNlY3VyaXR5SXRlbSkgPT4gc2VjdXJpdHlJdGVtLmFuc3dlci5sZW5ndGggPiAwICYmIHNlY3VyaXR5SXRlbS5xdWVzdGlvblxuICAgICk7XG4gICAgcmV0dXJuIG1hdGNoZWQubGVuZ3RoIDwgc2VjdXJpdHlJdGVtcy5sZW5ndGggfHwgbWF0Y2hlZC5sZW5ndGggPT09IDA7XG4gIH07XG5cbiAgZ2V0T3B0aW9ucyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHNlY3VyaXR5SXRlbXMgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiBbXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcInN0cmVldE51bUdyZXdPblwiLFxuICAgICAgICBsYWJlbDogXCJXaGF0IHdhcyB0aGUgc3RyZWV0IG51bWJlciB0aGF0IHlvdSBncmV3IHVwIG9uP1wiLFxuICAgICAgICBpc0Rpc2FibGVkOiBzZWN1cml0eUl0ZW1zLnNvbWUoXG4gICAgICAgICAgKHNlY3VyaXR5SXRlbSkgPT4gc2VjdXJpdHlJdGVtLnF1ZXN0aW9uID09PSBcInN0cmVldE51bUdyZXdPblwiXG4gICAgICAgICksXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2YWx1ZTogXCJjaXR5R3Jld0luXCIsXG4gICAgICAgIGxhYmVsOiBcIkluIHdoYXQgdG93biBvciBjaXR5IGRpZCB5b3UgZ3JvdyB1cCBpbj9cIixcbiAgICAgICAgaXNEaXNhYmxlZDogc2VjdXJpdHlJdGVtcy5zb21lKFxuICAgICAgICAgIChzZWN1cml0eUl0ZW0pID0+IHNlY3VyaXR5SXRlbS5xdWVzdGlvbiA9PT0gXCJjaXR5R3Jld0luXCJcbiAgICAgICAgKSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHZhbHVlOiBcInByaW1hcnlTY2hvb2xcIixcbiAgICAgICAgbGFiZWw6IFwiV2hhdCBwcmltYXJ5IHNjaG9vbCBkaWQgeW91IGdvIHRvP1wiLFxuICAgICAgICBpc0Rpc2FibGVkOiBzZWN1cml0eUl0ZW1zLnNvbWUoXG4gICAgICAgICAgKHNlY3VyaXR5SXRlbSkgPT4gc2VjdXJpdHlJdGVtLnF1ZXN0aW9uID09PSBcInByaW1hcnlTY2hvb2xcIlxuICAgICAgICApLFxuICAgICAgfSxcbiAgICBdO1xuICB9O1xufVxuIl19