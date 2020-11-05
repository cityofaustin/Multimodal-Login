"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _SocialSupportLoginSvg = _interopRequireDefault(require("../svg/SocialSupportLoginSvg"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
var _KeycodeInputSvg = _interopRequireDefault(require("../svg/KeycodeInputSvg"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _HowSvg = _interopRequireDefault(require("../svg/HowSvg"));
var _TextExampleSvg = _interopRequireDefault(require("../svg/TextExampleSvg"));
var _GoBackSvg = _interopRequireDefault(require("../svg/GoBackSvg"));
var _contactSvg = _interopRequireDefault(require("../svg/contact-svg"));

class SocialSupportSetup extends _react.Component {constructor(...args) {super(...args);(0, _defineProperty2.default)(this, "state",
    {
      isDisplayHow: false,
      keycode: "" });(0, _defineProperty2.default)(this, "renderHiddenInputs",

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


    });}
  renderConfigure() {
    const { isDisplayHow } = { ...this.state };
    const { goBack } = { ...this.props };
    return /*#__PURE__*/(
      _react.default.createElement(_react.Fragment, null,
      isDisplayHow && this.renderIsDisplayHow(),
      !isDisplayHow && /*#__PURE__*/
      _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("form", {
        onSubmit: e => {
          e.preventDefault();
          goBack();
        },
        className: "card login-card" }, /*#__PURE__*/

      _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Social Support"), /*#__PURE__*/
      _react.default.createElement(_contactSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", {
        style: {
          fontSize: "20px",
          color: "rgba(72, 72, 72, 0.77)",
          textAlign: "center" } }, "To configure this login method add contacts to your account and give them permission to help you login to your account"), /*#__PURE__*/





      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "submit",
        value: "Got it" }), /*#__PURE__*/

      _react.default.createElement("div", {
        className: "how",
        onClick: () =>
        this.setState({ isDisplayHow: !isDisplayHow }) }, "How does this work?")))))));












  }
  renderIsDisplayHow() {
    const { isDisplayHow } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/
      _react.default.createElement(_HowSvg.default, { loginMethod: "text" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "sec-excerpt" }, "Two-step verification is a simple way to authenticate a user by sending a unique code to their mobile device."), /*#__PURE__*/



      _react.default.createElement(_TextExampleSvg.default, null)), /*#__PURE__*/

      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.setState({ isDisplayHow: !isDisplayHow }) }))));




  }
  renderLogin() {
    const { isDisplayHow, keycode } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement(_react.Fragment, null,
      !isDisplayHow && /*#__PURE__*/
      _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("form", {
        method: "POST",
        action: "/authorize",
        className: "card login-card" }, /*#__PURE__*/

      _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Social Support"), /*#__PURE__*/
      _react.default.createElement(_SocialSupportLoginSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "keycode-btn-container" }, /*#__PURE__*/
      _react.default.createElement("input", {
        className: "keycode-btn",
        style: { width: "210px" },
        type: "button",
        value: "Text code to helpers",
        onClick: () => this.sendKeycodeToHelper()
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



      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "submit",
        value: "Login",
        disabled: keycode.length < 1 }), /*#__PURE__*/

      _react.default.createElement("div", {
        className: "how",
        onClick: () =>
        this.setState({ isDisplayHow: !isDisplayHow }) }, "How does this work?")),





      this.renderHiddenInputs()))),




      isDisplayHow && this.renderIsDisplayHow()));


  }
  render() {
    const { isSettings } = { ...this.props };
    if (!isSettings) {
      return this.renderLogin();
    } else {
      return this.renderConfigure();
    }
  }}


SocialSupportSetup.propTypes = {
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  goBack: PropTypes.func };var _default =


SocialSupportSetup;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NldHVwL1NvY2lhbFN1cHBvcnRTZXR1cC5qc3giXSwibmFtZXMiOlsiU29jaWFsU3VwcG9ydFNldHVwIiwiQ29tcG9uZW50IiwiaXNEaXNwbGF5SG93Iiwia2V5Y29kZSIsInVzZXJuYW1lIiwicHJvcHMiLCJVcmxVdGlsIiwiZ2V0UXVlcnlWYXJpYWJsZSIsInJlbmRlckNvbmZpZ3VyZSIsInN0YXRlIiwiZ29CYWNrIiwicmVuZGVySXNEaXNwbGF5SG93IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9udFNpemUiLCJjb2xvciIsInRleHRBbGlnbiIsIndpZHRoIiwic2V0U3RhdGUiLCJyZW5kZXJMb2dpbiIsInNlbmRLZXljb2RlVG9IZWxwZXIiLCJ0YXJnZXQiLCJ2YWx1ZSIsImxlbmd0aCIsInJlbmRlckhpZGRlbklucHV0cyIsInJlbmRlciIsImlzU2V0dGluZ3MiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJib29sIiwiZnVuYyJdLCJtYXBwaW5ncyI6ImdYQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNQSxrQkFBTixTQUFpQ0MsZ0JBQWpDLENBQTJDO0FBQ2pDO0FBQ05DLE1BQUFBLFlBQVksRUFBRSxLQURSO0FBRU5DLE1BQUFBLE9BQU8sRUFBRSxFQUZILEVBRGlDOztBQUtwQixVQUFNO0FBQ3pCLFlBQU0sRUFBRUMsUUFBRixLQUFlLEVBQUUsR0FBRyxLQUFLQyxLQUFWLEVBQXJCO0FBQ0E7QUFDRSxxQ0FBQyxlQUFEO0FBQ0UsZ0RBQU8sSUFBSSxFQUFDLFFBQVosRUFBcUIsRUFBRSxFQUFDLFVBQXhCLEVBQW1DLElBQUksRUFBQyxVQUF4QyxFQUFtRCxLQUFLLEVBQUVELFFBQTFELEdBREY7QUFFRTtBQUNFLFVBQUEsRUFBRSxFQUFDLFdBREw7QUFFRSxVQUFBLElBQUksRUFBQyxXQUZQO0FBR0UsVUFBQSxJQUFJLEVBQUMsUUFI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IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgU29jaWFsU3VwcG9ydExvZ2luU3ZnIGZyb20gXCIuLi9zdmcvU29jaWFsU3VwcG9ydExvZ2luU3ZnXCI7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBLZXljb2RlSW5wdXRTdmcgZnJvbSBcIi4uL3N2Zy9LZXljb2RlSW5wdXRTdmdcIjtcbmltcG9ydCBVcmxVdGlsIGZyb20gXCIuLi8uLi91dGlsL3VybC11dGlsXCI7XG5pbXBvcnQgSG93U3ZnIGZyb20gXCIuLi9zdmcvSG93U3ZnXCI7XG5pbXBvcnQgVGV4dEV4YW1wbGVTdmcgZnJvbSBcIi4uL3N2Zy9UZXh0RXhhbXBsZVN2Z1wiO1xuaW1wb3J0IEdvQmFja1N2ZyBmcm9tIFwiLi4vc3ZnL0dvQmFja1N2Z1wiO1xuaW1wb3J0IENvbnRhY3RTdmcgZnJvbSBcIi4uL3N2Zy9jb250YWN0LXN2Z1wiO1xuXG5jbGFzcyBTb2NpYWxTdXBwb3J0U2V0dXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0ZSA9IHtcbiAgICBpc0Rpc3BsYXlIb3c6IGZhbHNlLFxuICAgIGtleWNvZGU6IFwiXCIsXG4gIH07XG4gIHJlbmRlckhpZGRlbklucHV0cyA9ICgpID0+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIGlkPVwidXNlcm5hbWVcIiBuYW1lPVwidXNlcm5hbWVcIiB2YWx1ZT17dXNlcm5hbWV9IC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICBuYW1lPVwiY2xpZW50X2lkXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwiY2xpZW50X2lkXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInJlc3BvbnNlX3R5cGVcIlxuICAgICAgICAgIG5hbWU9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVzcG9uc2VfdHlwZVwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgIG5hbWU9XCJyZWRpcmVjdF91cmxcIlxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJyZWRpcmVjdF91cmxcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dCBpZD1cInNjb3BlXCIgbmFtZT1cInNjb3BlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgPGlucHV0IGlkPVwic3RhdGVcIiBuYW1lPVwic3RhdGVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJcIiAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9O1xuICByZW5kZXJDb25maWd1cmUoKSB7XG4gICAgY29uc3QgeyBpc0Rpc3BsYXlIb3cgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IHsgZ29CYWNrIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7aXNEaXNwbGF5SG93ICYmIHRoaXMucmVuZGVySXNEaXNwbGF5SG93KCl9XG4gICAgICAgIHshaXNEaXNwbGF5SG93ICYmIChcbiAgICAgICAgICA8ZGl2IGlkPVwic2VjdGlvbi0xLW93bmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGdvQmFjaygpO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBsb2dpbi1jYXJkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlNvY2lhbCBTdXBwb3J0PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Q29udGFjdFN2ZyAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg3MiwgNzIsIDcyLCAwLjc3KVwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIFRvIGNvbmZpZ3VyZSB0aGlzIGxvZ2luIG1ldGhvZCBhZGQgY29udGFjdHMgdG8geW91ciBhY2NvdW50XG4gICAgICAgICAgICAgICAgICBhbmQgZ2l2ZSB0aGVtIHBlcm1pc3Npb24gdG8gaGVscCB5b3UgbG9naW4gdG8geW91ciBhY2NvdW50XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkdvdCBpdFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJob3dcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc0Rpc3BsYXlIb3c6ICFpc0Rpc3BsYXlIb3cgfSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICBIb3cgZG9lcyB0aGlzIHdvcms/XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7Lyoge3RoaXMucmVuZGVySGlkZGVuSW5wdXRzKCl9ICovfVxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuICByZW5kZXJJc0Rpc3BsYXlIb3coKSB7XG4gICAgY29uc3QgeyBpc0Rpc3BsYXlIb3cgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8SG93U3ZnIGxvZ2luTWV0aG9kPVwidGV4dFwiIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1leGNlcnB0XCI+XG4gICAgICAgICAgICAgIFR3by1zdGVwIHZlcmlmaWNhdGlvbiBpcyBhIHNpbXBsZSB3YXkgdG8gYXV0aGVudGljYXRlIGEgdXNlciBieVxuICAgICAgICAgICAgICBzZW5kaW5nIGEgdW5pcXVlIGNvZGUgdG8gdGhlaXIgbW9iaWxlIGRldmljZS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFRleHRFeGFtcGxlU3ZnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheUhvdzogIWlzRGlzcGxheUhvdyB9KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmVuZGVyTG9naW4oKSB7XG4gICAgY29uc3QgeyBpc0Rpc3BsYXlIb3csIGtleWNvZGUgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIHshaXNEaXNwbGF5SG93ICYmIChcbiAgICAgICAgICA8ZGl2IGlkPVwic2VjdGlvbi0xLW93bmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICAgICAgPGZvcm1cbiAgICAgICAgICAgICAgICBtZXRob2Q9XCJQT1NUXCJcbiAgICAgICAgICAgICAgICBhY3Rpb249XCIvYXV0aG9yaXplXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkIGxvZ2luLWNhcmRcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+U29jaWFsIFN1cHBvcnQ8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxTb2NpYWxTdXBwb3J0TG9naW5TdmcgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWNvZGUtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleWNvZGUtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJUZXh0IGNvZGUgdG8gaGVscGVyc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2VuZEtleWNvZGVUb0hlbHBlcigpfVxuICAgICAgICAgICAgICAgICAgICAvLyBkaXNhYmxlZD17IXBob25lTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJrZXljb2RlLXNlbnRcIj5Zb3VyIGtleWNvZGUgaGFzIGJlZW4gc2VudCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMlwiPlxuICAgICAgICAgICAgICAgICAgPGRpdj5Zb3VyIEtleWNvZGU8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Y29kZS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgICA8S2V5Y29kZUlucHV0U3ZnIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbmVUaW1lQ29kZVwiXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2tleWNvZGV9XG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsga2V5Y29kZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1leGNlcnB0XCI+XG4gICAgICAgICAgICAgICAgICAgIFBsZWFzZSBlbnRlciB5b3VyIDYgZGlnaXQga2V5Y29kZVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT1cIkxvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2tleWNvZGUubGVuZ3RoIDwgMX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhvd1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheUhvdzogIWlzRGlzcGxheUhvdyB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEhvdyBkb2VzIHRoaXMgd29yaz9cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhpZGRlbklucHV0cygpfVxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAge2lzRGlzcGxheUhvdyAmJiB0aGlzLnJlbmRlcklzRGlzcGxheUhvdygpfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzU2V0dGluZ3MgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGlmICghaXNTZXR0aW5ncykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29uZmlndXJlKCk7XG4gICAgfVxuICB9XG59XG5cblNvY2lhbFN1cHBvcnRTZXR1cC5wcm9wVHlwZXMgPSB7XG4gIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc1NldHRpbmdzOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNvY2lhbFN1cHBvcnRTZXR1cDtcbiJdfQ==