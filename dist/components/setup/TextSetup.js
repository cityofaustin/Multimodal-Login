"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
var _TextExampleSvg = _interopRequireDefault(require("../svg/TextExampleSvg"));
var _TextMethodLoginSvg = _interopRequireDefault(require("../svg/TextMethodLoginSvg"));
var _KeycodeInputSvg = _interopRequireDefault(require("../svg/KeycodeInputSvg"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _delay = _interopRequireDefault(require("../../util/delay"));

class TextSetup extends _react.Component {constructor(...args) {var _this;super(...args);_this = this;(0, _defineProperty2.default)(this, "state",
    {
      keycode: "",
      phoneNumber: "",
      isTextSet: false,
      confirmDelete: false });(0, _defineProperty2.default)(this, "setText", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(

      function* (e) {
        e.preventDefault();
        const { phoneNumber } = { ..._this.state };
        const { isAdd, loginMethods, setLoginMethods, goBack } = { ..._this.props };
        try {
          const url = "/api/login-methods";
          const authorization = _urlUtil.default.getQueryVariable("access_token");
          const init = {
            method: isAdd ? "POST" : "PUT",
            headers: {
              Authorization: `Bearer ${authorization}`,
              "Content-Type": "application/json" },

            body: JSON.stringify({ text: phoneNumber }) };

          yield fetch(url, init);
          if (isAdd) {
            loginMethods.push("TextLoginType");
            setLoginMethods(loginMethods);
            goBack();
            return;
          }
        } catch (err) {
          console.error(err);
        }
        _this.setState({ isTextSet: true });
      });return function (_x) {return _ref.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "sendKeycode", /*#__PURE__*/(0, _asyncToGenerator2.default)(
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
    }));(0, _defineProperty2.default)(this, "deleteTextLogin", /*#__PURE__*/(0, _asyncToGenerator2.default)(
    function* () {
      const { setLoginMethods, goBack } = { ..._this.props };
      let { loginMethods } = { ..._this.props };
      try {
        const url = "/api/login-methods/TextLoginType";
        const authorization = _urlUtil.default.getQueryVariable("access_token");
        const init = {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authorization}`,
            "Content-Type": "application/json" } };


        yield fetch(url, init);
        loginMethods = loginMethods.filter(lm => lm !== "TextLoginType");
        setLoginMethods(loginMethods);
        goBack();
      } catch (err) {
        console.error(err);
      }
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


    });}
  renderConfigure() {
    const { isAdd, goBack } = { ...this.props };
    const { phoneNumber, isTextSet, confirmDelete } = { ...this.state };
    if (confirmDelete) {
      return /*#__PURE__*/(
        _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "card login-card delete" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "card-title" }, "Text Login"), /*#__PURE__*/
        _react.default.createElement(_TextMethodLoginSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("div", { className: "delete-excerpt" }, /*#__PURE__*/
        _react.default.createElement("p", null, "Are you sure you wish to delete this login method?"), /*#__PURE__*/
        _react.default.createElement("p", null, "You will have to add a new phone number later if you change your mind")), /*#__PURE__*/




        _react.default.createElement("div", null, /*#__PURE__*/
        _react.default.createElement("input", {
          className: "delete-button",
          style: { width: "210px" },
          type: "button",
          value: "Yes, delete",
          onClick: this.deleteTextLogin }), /*#__PURE__*/

        _react.default.createElement("div", {
          className: "delete-excerpt",
          onClick: () => this.setState({ confirmDelete: false }),
          style: {
            marginTop: "12px",
            cursor: "pointer" } }, "no, take me back"))))));









    }
    return /*#__PURE__*/(
      _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("form", { onSubmit: this.setText, className: "card login-card" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Text Login"), /*#__PURE__*/
      _react.default.createElement(_TextMethodLoginSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "card-body-section2" }, /*#__PURE__*/
      _react.default.createElement("div", null, "New Phone Number"), /*#__PURE__*/
      _react.default.createElement("input", {
        style: {
          width: "210px",
          height: "35px",
          lineHeight: "35px",
          borderRadius: "8px",
          border: "solid 1px rgba(112, 112, 112, 0.27)",
          backgroundColor: "#e8f0fe",
          paddingLeft: "14px",
          fontSize: "15px",
          color: "rgba(72, 72, 72, 0.77)",
          fontFamily: "Montserrat",
          marginTop: "3.3px" },

        type: "tel",
        value: phoneNumber,
        onChange: e => {
          this.setState({ phoneNumber: e.target.value });
        } }),

      !isTextSet && /*#__PURE__*/
      _react.default.createElement("div", {
        style: {
          color: "rgba(72, 72, 72, 0.77)",
          fontSize: "15px",
          textAlign: "center",
          marginTop: "12px" } }, "Please type in your new phone number above"),





      isTextSet && /*#__PURE__*/
      _react.default.createElement("div", {
        className: "success",
        style: {
          marginTop: "12px",
          fontSize: "15px",
          textAlign: "center",
          color: "#32a736" } }, "Phone number set!")), /*#__PURE__*/






      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "submit",
        value: "Link Phone",
        disabled:
        !phoneNumber ||
        phoneNumber.length < 10 ||
        phoneNumber.length > 10 }),


      isAdd && /*#__PURE__*/
      _react.default.createElement("div", { className: "how", onClick: goBack }, "Take me back"),



      !isAdd && /*#__PURE__*/
      _react.default.createElement("div", {
        onClick: () => this.setState({ confirmDelete: true }),
        style: {
          color: "#d95868",
          marginTop: "12px",
          fontSize: "15px",
          cursor: "pointer",
          textAlign: "center" } }, "delete this login method")),












      this.renderHiddenInputs()))));




  }
  renderLogin() {
    const { keycode, isDisplayHow } = { ...this.state };
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




      isDisplayHow && /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/
      _react.default.createElement(HowSvg, { loginMethod: "text" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "sec-excerpt" }, "Two-step verification is a simple way to authenticate a user by sending a unique code to their mobile device."), /*#__PURE__*/



      _react.default.createElement(_TextExampleSvg.default, null)), /*#__PURE__*/

      _react.default.createElement(GoBackSvg, {
        color: "#2362c7",
        goBack: () => this.setState({ isDisplayHow: !isDisplayHow }) })))));






  }
  render() {
    const { isSettings } = { ...this.props };
    if (!isSettings) {
      return this.renderLogin();
    } else {
      return this.renderConfigure();
    }
  }}


TextSetup.propTypes = {
  loginMethods: PropTypes.arrayOf(PropTypes.string),
  setLoginMethods: PropTypes.func,
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  isAdd: PropTypes.bool,
  goBack: PropTypes.func };var _default =


TextSetup;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NldHVwL1RleHRTZXR1cC5qc3giXSwibmFtZXMiOlsiVGV4dFNldHVwIiwiQ29tcG9uZW50Iiwia2V5Y29kZSIsInBob25lTnVtYmVyIiwiaXNUZXh0U2V0IiwiY29uZmlybURlbGV0ZSIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInN0YXRlIiwiaXNBZGQiLCJsb2dpbk1ldGhvZHMiLCJzZXRMb2dpbk1ldGhvZHMiLCJnb0JhY2siLCJwcm9wcyIsInVybCIsImF1dGhvcml6YXRpb24iLCJVcmxVdGlsIiwiZ2V0UXVlcnlWYXJpYWJsZSIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwidGV4dCIsImZldGNoIiwicHVzaCIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsInNldFN0YXRlIiwidXNlcm5hbWUiLCJrZXljb2RlU2VudEVsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwib3BhY2l0eSIsImxvZyIsImZpbHRlciIsImxtIiwicmVuZGVyQ29uZmlndXJlIiwid2lkdGgiLCJkZWxldGVUZXh0TG9naW4iLCJtYXJnaW5Ub3AiLCJjdXJzb3IiLCJzZXRUZXh0IiwiaGVpZ2h0IiwibGluZUhlaWdodCIsImJvcmRlclJhZGl1cyIsImJvcmRlciIsImJhY2tncm91bmRDb2xvciIsInBhZGRpbmdMZWZ0IiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRGYW1pbHkiLCJ0YXJnZXQiLCJ2YWx1ZSIsInRleHRBbGlnbiIsImxlbmd0aCIsInJlbmRlckhpZGRlbklucHV0cyIsInJlbmRlckxvZ2luIiwiaXNEaXNwbGF5SG93Iiwic2VuZEtleWNvZGUiLCJyZW5kZXIiLCJpc1NldHRpbmdzIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYXJyYXlPZiIsInN0cmluZyIsImZ1bmMiLCJib29sIl0sIm1hcHBpbmdzIjoib2RBQUE7QUFD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OztBQVNFLG1DQUFDLFNBQUQ7QUFDRSxRQUFBLEtBQUssRUFBQyxTQURSO0FBRUUsUUFBQSxNQUFNLEVBQUUsTUFBTSxLQUFLL0IsUUFBTCxDQUFjLEVBQUUrQixZQUFZLEVBQUUsQ0FBQ0EsWUFBakIsRUFBZCxDQUZoQixHQVRGLENBREYsQ0FqRUosQ0FERjs7Ozs7OztBQXFGRDtBQUNERSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUVDLFVBQUYsS0FBaUIsRUFBRSxHQUFHLEtBQUtwRCxLQUFWLEVBQXZCO0FBQ0EsUUFBSSxDQUFDb0QsVUFBTCxFQUFpQjtBQUNmLGFBQU8sS0FBS0osV0FBTCxFQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTyxLQUFLcEIsZUFBTCxFQUFQO0FBQ0Q7QUFDRixHQXJWK0I7OztBQXdWbEN6QyxTQUFTLENBQUNrRSxTQUFWLEdBQXNCO0FBQ3BCeEQsRUFBQUEsWUFBWSxFQUFFeUQsU0FBUyxDQUFDQyxPQUFWLENBQWtCRCxTQUFTLENBQUNFLE1BQTVCLENBRE07QUFFcEIxRCxFQUFBQSxlQUFlLEVBQUV3RCxTQUFTLENBQUNHLElBRlA7QUFHcEJ0QyxFQUFBQSxRQUFRLEVBQUVtQyxTQUFTLENBQUNFLE1BSEE7QUFJcEJKLEVBQUFBLFVBQVUsRUFBRUUsU0FBUyxDQUFDSSxJQUpGO0FBS3BCOUQsRUFBQUEsS0FBSyxFQUFFMEQsU0FBUyxDQUFDSSxJQUxHO0FBTXBCM0QsRUFBQUEsTUFBTSxFQUFFdUQsU0FBUyxDQUFDRyxJQU5FLEVBQXRCLEM7OztBQVNldEUsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBUZXh0RXhhbXBsZVN2ZyBmcm9tIFwiLi4vc3ZnL1RleHRFeGFtcGxlU3ZnXCI7XG5pbXBvcnQgVGV4dE1ldGhvZExvZ2luU3ZnIGZyb20gXCIuLi9zdmcvVGV4dE1ldGhvZExvZ2luU3ZnXCI7XG5pbXBvcnQgS2V5Y29kZUlucHV0U3ZnIGZyb20gXCIuLi9zdmcvS2V5Y29kZUlucHV0U3ZnXCI7XG5pbXBvcnQgVXJsVXRpbCBmcm9tIFwiLi4vLi4vdXRpbC91cmwtdXRpbFwiO1xuaW1wb3J0IGRlbGF5IGZyb20gXCIuLi8uLi91dGlsL2RlbGF5XCI7XG5cbmNsYXNzIFRleHRTZXR1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRlID0ge1xuICAgIGtleWNvZGU6IFwiXCIsXG4gICAgcGhvbmVOdW1iZXI6IFwiXCIsXG4gICAgaXNUZXh0U2V0OiBmYWxzZSxcbiAgICBjb25maXJtRGVsZXRlOiBmYWxzZSxcbiAgfTtcbiAgc2V0VGV4dCA9IGFzeW5jIChlKSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IHsgcGhvbmVOdW1iZXIgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IHsgaXNBZGQsIGxvZ2luTWV0aG9kcywgc2V0TG9naW5NZXRob2RzLCBnb0JhY2sgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW4tbWV0aG9kc1wiO1xuICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IFVybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogaXNBZGQgPyBcIlBPU1RcIiA6IFwiUFVUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aG9yaXphdGlvbn1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHRleHQ6IHBob25lTnVtYmVyIH0pLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgICBpZiAoaXNBZGQpIHtcbiAgICAgICAgbG9naW5NZXRob2RzLnB1c2goXCJUZXh0TG9naW5UeXBlXCIpO1xuICAgICAgICBzZXRMb2dpbk1ldGhvZHMobG9naW5NZXRob2RzKTtcbiAgICAgICAgZ29CYWNrKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzVGV4dFNldDogdHJ1ZSB9KTtcbiAgfTtcbiAgc2VuZEtleWNvZGUgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgY29uc3Qga2V5Y29kZVNlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5Y29kZS1zZW50XCIpO1xuICAgIGtleWNvZGVTZW50RWwuc3R5bGUub3BhY2l0eSA9IDAuNjtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gXCJhcGkvdXNlcnMvc2VuZC10ZXh0LW90cFwiO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgIH0pLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICAgIGF3YWl0IGRlbGF5KDIwMDApO1xuICAgIGtleWNvZGVTZW50RWwuc3R5bGUub3BhY2l0eSA9IDA7XG4gIH07XG4gIGRlbGV0ZVRleHRMb2dpbiA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHNldExvZ2luTWV0aG9kcywgZ29CYWNrIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBsZXQgeyBsb2dpbk1ldGhvZHMgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW4tbWV0aG9kcy9UZXh0TG9naW5UeXBlXCI7XG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gVXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGhvcml6YXRpb259YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgICAgbG9naW5NZXRob2RzID0gbG9naW5NZXRob2RzLmZpbHRlcigobG0pID0+IGxtICE9PSBcIlRleHRMb2dpblR5cGVcIik7XG4gICAgICBzZXRMb2dpbk1ldGhvZHMobG9naW5NZXRob2RzKTtcbiAgICAgIGdvQmFjaygpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmVuZGVySGlkZGVuSW5wdXRzID0gKCkgPT4ge1xuICAgIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiaGlkZGVuXCIgaWQ9XCJ1c2VybmFtZVwiIG5hbWU9XCJ1c2VybmFtZVwiIHZhbHVlPXt1c2VybmFtZX0gLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJjbGllbnRfaWRcIlxuICAgICAgICAgIG5hbWU9XCJjbGllbnRfaWRcIlxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJjbGllbnRfaWRcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicmVzcG9uc2VfdHlwZVwiXG4gICAgICAgICAgbmFtZT1cInJlc3BvbnNlX3R5cGVcIlxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoXCJyZXNwb25zZV90eXBlXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cInJlZGlyZWN0X3VybFwiXG4gICAgICAgICAgbmFtZT1cInJlZGlyZWN0X3VybFwiXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcInJlZGlyZWN0X3VybFwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0IGlkPVwic2NvcGVcIiBuYW1lPVwic2NvcGVcIiB0eXBlPVwiaGlkZGVuXCIgdmFsdWU9XCJcIiAvPlxuICAgICAgICA8aW5wdXQgaWQ9XCJzdGF0ZVwiIG5hbWU9XCJzdGF0ZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlwiIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH07XG4gIHJlbmRlckNvbmZpZ3VyZSgpIHtcbiAgICBjb25zdCB7IGlzQWRkLCBnb0JhY2sgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGNvbnN0IHsgcGhvbmVOdW1iZXIsIGlzVGV4dFNldCwgY29uZmlybURlbGV0ZSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgaWYgKGNvbmZpcm1EZWxldGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJzZWN0aW9uLTEtb3duZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBsb2dpbi1jYXJkIGRlbGV0ZVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGV4dCBMb2dpbjwvZGl2PlxuICAgICAgICAgICAgICAgIDxUZXh0TWV0aG9kTG9naW5TdmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlLWV4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlIHRoaXMgbG9naW4gbWV0aG9kPzwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFlvdSB3aWxsIGhhdmUgdG8gYWRkIGEgbmV3IHBob25lIG51bWJlciBsYXRlciBpZiB5b3UgY2hhbmdlXG4gICAgICAgICAgICAgICAgICB5b3VyIG1pbmRcbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIyMTBweFwiIH19XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5kZWxldGVUZXh0TG9naW59XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtZXhjZXJwdFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29uZmlybURlbGV0ZTogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBubywgdGFrZSBtZSBiYWNrXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJzZWN0aW9uLTEtb3duZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2V0VGV4dH0gY2xhc3NOYW1lPVwiY2FyZCBsb2dpbi1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRleHQgTG9naW48L2Rpdj5cbiAgICAgICAgICAgICAgPFRleHRNZXRob2RMb2dpblN2ZyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMlwiPlxuICAgICAgICAgICAgICA8ZGl2Pk5ldyBQaG9uZSBOdW1iZXI8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMzVweFwiLFxuICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIzNXB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgICBib3JkZXI6IFwic29saWQgMXB4IHJnYmEoMTEyLCAxMTIsIDExMiwgMC4yNylcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZThmMGZlXCIsXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxNHB4XCIsXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDcyLCA3MiwgNzIsIDAuNzcpXCIsXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5OiBcIk1vbnRzZXJyYXRcIixcbiAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIzLjNweFwiLFxuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cInRlbFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e3Bob25lTnVtYmVyfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBob25lTnVtYmVyOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7IWlzVGV4dFNldCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg3MiwgNzIsIDcyLCAwLjc3KVwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIHR5cGUgaW4geW91ciBuZXcgcGhvbmUgbnVtYmVyIGFib3ZlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHtpc1RleHRTZXQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMzMmE3MzZcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgUGhvbmUgbnVtYmVyIHNldCFcbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiTGluayBQaG9uZVwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e1xuICAgICAgICAgICAgICAgICAgIXBob25lTnVtYmVyIHx8XG4gICAgICAgICAgICAgICAgICBwaG9uZU51bWJlci5sZW5ndGggPCAxMCB8fFxuICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXIubGVuZ3RoID4gMTBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHtpc0FkZCAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3dcIiBvbkNsaWNrPXtnb0JhY2t9PlxuICAgICAgICAgICAgICAgICAgVGFrZSBtZSBiYWNrXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshaXNBZGQgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb25maXJtRGVsZXRlOiB0cnVlIH0pfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2Q5NTg2OFwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMgbG9naW4gbWV0aG9kXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHsvKiA8ZGl2XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG93XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgaXNEaXNwbGF5SG93OiAhaXNEaXNwbGF5SG93IH0pfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgSG93IGRvZXMgdGhpcyB3b3JrP1xuICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHt0aGlzLnJlbmRlckhpZGRlbklucHV0cygpfVxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG4gIHJlbmRlckxvZ2luKCkge1xuICAgIGNvbnN0IHsga2V5Y29kZSwgaXNEaXNwbGF5SG93IH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7IWlzRGlzcGxheUhvdyAmJiAoXG4gICAgICAgICAgPGRpdiBpZD1cInNlY3Rpb24tMS1vd25lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgICAgIDxmb3JtXG4gICAgICAgICAgICAgICAgbWV0aG9kPVwiUE9TVFwiXG4gICAgICAgICAgICAgICAgYWN0aW9uPVwiL2F1dGhvcml6ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY2FyZCBsb2dpbi1jYXJkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlRleHQgTG9naW48L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxUZXh0TWV0aG9kTG9naW5TdmcgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImtleWNvZGUtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleWNvZGUtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9XCJUZXh0IG1lIG15IGNvZGVcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNlbmRLZXljb2RlKCl9XG4gICAgICAgICAgICAgICAgICAgIC8vIGRpc2FibGVkPXshcGhvbmVOdW1iZXJ9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPGRpdiBpZD1cImtleWNvZGUtc2VudFwiPllvdXIga2V5Y29kZSBoYXMgYmVlbiBzZW50ITwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb24yXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2PllvdXIgS2V5Y29kZTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJrZXljb2RlLWlucHV0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxLZXljb2RlSW5wdXRTdmcgLz5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9uZVRpbWVDb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICBtaW5MZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17a2V5Y29kZX1cbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBrZXljb2RlOiBlLnRhcmdldC52YWx1ZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWV4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgNiBkaWdpdCBrZXljb2RlXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17a2V5Y29kZS5sZW5ndGggPCAxfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaG93XCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaXNwbGF5SG93OiAhaXNEaXNwbGF5SG93IH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgSG93IGRvZXMgdGhpcyB3b3JrP1xuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGlkZGVuSW5wdXRzKCl9XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7aXNEaXNwbGF5SG93ICYmIChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8SG93U3ZnIGxvZ2luTWV0aG9kPVwidGV4dFwiIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtZXhjZXJwdFwiPlxuICAgICAgICAgICAgICAgICAgVHdvLXN0ZXAgdmVyaWZpY2F0aW9uIGlzIGEgc2ltcGxlIHdheSB0byBhdXRoZW50aWNhdGUgYSB1c2VyXG4gICAgICAgICAgICAgICAgICBieSBzZW5kaW5nIGEgdW5pcXVlIGNvZGUgdG8gdGhlaXIgbW9iaWxlIGRldmljZS5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8VGV4dEV4YW1wbGVTdmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICAgICAgICBjb2xvcj1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheUhvdzogIWlzRGlzcGxheUhvdyB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGlzU2V0dGluZ3MgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGlmICghaXNTZXR0aW5ncykge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyTG9naW4oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyQ29uZmlndXJlKCk7XG4gICAgfVxuICB9XG59XG5cblRleHRTZXR1cC5wcm9wVHlwZXMgPSB7XG4gIGxvZ2luTWV0aG9kczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIHNldExvZ2luTWV0aG9kczogUHJvcFR5cGVzLmZ1bmMsXG4gIHVzZXJuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpc1NldHRpbmdzOiBQcm9wVHlwZXMuYm9vbCxcbiAgaXNBZGQ6IFByb3BUeXBlcy5ib29sLFxuICBnb0JhY2s6IFByb3BUeXBlcy5mdW5jLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dFNldHVwO1xuIl19