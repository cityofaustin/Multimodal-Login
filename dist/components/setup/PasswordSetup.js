"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _PasswordMethodLoginSvg = _interopRequireDefault(require("../svg/PasswordMethodLoginSvg"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
var _ethCrypto = _interopRequireDefault(require("eth-crypto"));

class PasswordSetup extends _react.Component {constructor(...args) {var _this;super(...args);_this = this;(0, _defineProperty2.default)(this, "state",
    {
      password: "",
      confirmPassword: "",
      isPasswordSet: false,
      confirmDelete: false });(0, _defineProperty2.default)(this, "onPasswordChange",


    e => {
      let pass = e.target.value;
      this.setState({ password: pass });

      if (this.state.password !== undefined && pass.length >= 64) {
        let privateKey = pass;
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

        this.setState({ publicAddress });
        this.setState({ signature });
      }
    });(0, _defineProperty2.default)(this, "setPassword", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(

      function* (e) {
        e.preventDefault();
        const { password } = { ..._this.state };
        const { isAdd, loginMethods, setLoginMethods, goBack } = { ..._this.props };

        try {
          const url = "/api/login-methods";
          const authorization = _urlUtil.default.getQueryVariable("access_token");
          const init = {
            method: isAdd ? "POST" : "PUT",
            headers: {
              Authorization: `Bearer ${authorization}`,
              "Content-Type": "application/json" },

            body: JSON.stringify({ password }) };

          yield fetch(url, init);
          if (isAdd) {
            loginMethods.push("PasswordLoginType");
            setLoginMethods(loginMethods);
            goBack();
            return;
          }
        } catch (err) {
          console.error(err);
        }
        _this.setState({ isPasswordSet: true });
      });return function (_x) {return _ref.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "deletePassword", /*#__PURE__*/(0, _asyncToGenerator2.default)(
    function* () {
      const { setLoginMethods, goBack } = { ..._this.props };
      let { loginMethods } = { ..._this.props };
      try {
        const url = "/api/login-methods/PasswordLoginType";
        const authorization = _urlUtil.default.getQueryVariable("access_token");
        const init = {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authorization}`,
            "Content-Type": "application/json" } };


        yield fetch(url, init);
        loginMethods = loginMethods.filter(lm => lm !== "PasswordLoginType");
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
        _react.default.createElement("input", { id: "state", name: "state", type: "hidden", value: "" }), /*#__PURE__*/
        _react.default.createElement("input", {
          type: "text",
          id: "signature",
          name: "signature",
          type: "hidden",
          value: this.state.signature }), /*#__PURE__*/

        _react.default.createElement("input", {
          type: "text",
          id: "publicAddress",
          name: "publicAddress",
          type: "hidden",
          value: this.state.publicAddress })));



    });}
  renderSetPassword() {
    const { password, confirmPassword, isPasswordSet, confirmDelete } = {
      ...this.state };

    const { goBack, isAdd } = { ...this.props };
    if (confirmDelete) {
      return /*#__PURE__*/(
        _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "card login-card delete" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "card-title" }, "Password"), /*#__PURE__*/
        _react.default.createElement(_PasswordMethodLoginSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("div", { className: "delete-excerpt" }, /*#__PURE__*/
        _react.default.createElement("p", null, "Are you sure you wish to delete this login method?"), /*#__PURE__*/
        _react.default.createElement("p", null, "You will have to setup a new password if you change your mind later")), /*#__PURE__*/




        _react.default.createElement("div", null, /*#__PURE__*/
        _react.default.createElement("input", {
          className: "delete-button",
          style: { width: "210px" },
          type: "button",
          value: "Yes, delete",
          onClick: this.deletePassword }), /*#__PURE__*/

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
      _react.default.createElement("form", { onSubmit: this.setPassword, className: "card login-card" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Password"), /*#__PURE__*/
      _react.default.createElement(_PasswordMethodLoginSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/
      _react.default.createElement("div", { style: { color: "rgba(72, 72, 72, 0.77)" } }, "New Password"), /*#__PURE__*/


      _react.default.createElement("input", {
        name: "password",
        type: "password",
        value: password,
        onChange: e => this.setState({ password: e.target.value }) }), /*#__PURE__*/

      _react.default.createElement("div", {
        style: { marginTop: "13px", color: "rgba(72, 72, 72, 0.77)" } }, "Confirm New Password"), /*#__PURE__*/



      _react.default.createElement("input", {
        name: "confirmPassword",
        type: "password",
        value: confirmPassword,
        onChange: (e) =>
        this.setState({ confirmPassword: e.target.value }) }),


      !isPasswordSet && /*#__PURE__*/
      _react.default.createElement("div", { className: "excerpt" }, "Please type in your new password above"),



      isPasswordSet && /*#__PURE__*/
      _react.default.createElement("div", {
        className: "success",
        style: {
          marginTop: "12px",
          fontSize: "15px",
          textAlign: "center",
          color: "#32a736" } }, "Password set!"))), /*#__PURE__*/







      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "submit",
        value: "Set Password",
        disabled:
        password.length < 1 ||
        confirmPassword.length < 1 ||
        password !== confirmPassword ||
        isPasswordSet }),


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
          textAlign: "center" } }, "delete this login method")))));









  }
  renderLogin() {
    const { password } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", { id: "section-1-owner" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("form", { method: "POST", action: "/authorize", className: "card login-card" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "top-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Password"), /*#__PURE__*/
      _react.default.createElement(_PasswordMethodLoginSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/
      _react.default.createElement("div", null, "Password"), /*#__PURE__*/
      _react.default.createElement("input", {
        name: "password",
        type: "password",
        value: password
        // onChange={(e) => this.setState({ password: e.target.value })}
        , onChange: this.onPasswordChange }), /*#__PURE__*/

      _react.default.createElement("div", { className: "excerpt" }, "Please type your password to gain access to your account."))), /*#__PURE__*/




      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "submit",
        value: "Login",
        disabled: password.length < 1 }),

      this.renderHiddenInputs()))));




  }
  render() {
    const { isSettings } = { ...this.props };
    if (!isSettings) {
      return this.renderLogin();
    } else {
      return this.renderSetPassword();
    }
  }}


PasswordSetup.propTypes = {
  loginMethods: PropTypes.arrayOf(PropTypes.string),
  setLoginMethods: PropTypes.func,
  username: PropTypes.string,
  isSettings: PropTypes.bool,
  isAdd: PropTypes.bool,
  goBack: PropTypes.func };var _default =


PasswordSetup;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NldHVwL1Bhc3N3b3JkU2V0dXAuanN4Il0sIm5hbWVzIjpbIlBhc3N3b3JkU2V0dXAiLCJDb21wb25lbnQiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImlzUGFzc3dvcmRTZXQiLCJjb25maXJtRGVsZXRlIiwiZSIsInBhc3MiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFN0YXRlIiwic3RhdGUiLCJ1bmRlZmluZWQiLCJsZW5ndGgiLCJwcml2YXRlS2V5IiwicHVibGljRW5jcnlwdGlvbktleSIsInB1YmxpY0FkZHJlc3MiLCJzaWduYXR1cmUiLCJzdWJzdHJpbmciLCJFdGhDcnlwdG8iLCJwdWJsaWNLZXlCeVByaXZhdGVLZXkiLCJwdWJsaWNLZXkiLCJ0b0FkZHJlc3MiLCJtZXNzYWdlIiwibWVzc2FnZUhhc2giLCJoYXNoIiwia2VjY2FrMjU2Iiwic2lnbiIsImRvY3VtZW50IiwiY29va2llIiwiY29uc29sZSIsImxvZyIsInByZXZlbnREZWZhdWx0IiwiaXNBZGQiLCJsb2dpbk1ldGhvZHMiLCJzZXRMb2dpbk1ldGhvZHMiLCJnb0JhY2siLCJwcm9wcyIsInVybCIsImF1dGhvcml6YXRpb24iLCJVcmxVdGlsIiwiZ2V0UXVlcnlWYXJpYWJsZSIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJwdXNoIiwiZXJyIiwiZXJyb3IiLCJmaWx0ZXIiLCJsbSIsInVzZXJuYW1lIiwicmVuZGVyU2V0UGFzc3dvcmQiLCJ3aWR0aCIsImRlbGV0ZVBhc3N3b3JkIiwibWFyZ2luVG9wIiwiY3Vyc29yIiwic2V0UGFzc3dvcmQiLCJjb2xvciIsImZvbnRTaXplIiwidGV4dEFsaWduIiwicmVuZGVyTG9naW4iLCJvblBhc3N3b3JkQ2hhbmdlIiwicmVuZGVySGlkZGVuSW5wdXRzIiwicmVuZGVyIiwiaXNTZXR0aW5ncyIsInBy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QUZELE1BRU87QUFDTCxhQUFPLEtBQUtULGlCQUFMLEVBQVA7QUFDRDtBQUNGLEdBcFRtQzs7O0FBdVR0Q3hELGFBQWEsQ0FBQ3NFLFNBQWQsR0FBMEI7QUFDeEJwQyxFQUFBQSxZQUFZLEVBQUVxQyxTQUFTLENBQUNDLE9BQVYsQ0FBa0JELFNBQVMsQ0FBQ0UsTUFBNUIsQ0FEVTtBQUV4QnRDLEVBQUFBLGVBQWUsRUFBRW9DLFNBQVMsQ0FBQ0csSUFGSDtBQUd4Qm5CLEVBQUFBLFFBQVEsRUFBRWdCLFNBQVMsQ0FBQ0UsTUFISTtBQUl4QkosRUFBQUEsVUFBVSxFQUFFRSxTQUFTLENBQUNJLElBSkU7QUFLeEIxQyxFQUFBQSxLQUFLLEVBQUVzQyxTQUFTLENBQUNJLElBTE87QUFNeEJ2QyxFQUFBQSxNQUFNLEVBQUVtQyxTQUFTLENBQUNHLElBTk0sRUFBMUIsQzs7O0FBU2UxRSxhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBVcmxVdGlsIGZyb20gXCIuLi8uLi91dGlsL3VybC11dGlsXCI7XG5pbXBvcnQgUGFzc3dvcmRNZXRob2RMb2dpblN2ZyBmcm9tIFwiLi4vc3ZnL1Bhc3N3b3JkTWV0aG9kTG9naW5TdmdcIjtcbmltcG9ydCAqIGFzIFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IEV0aENyeXB0byBmcm9tIFwiZXRoLWNyeXB0b1wiO1xuXG5jbGFzcyBQYXNzd29yZFNldHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGUgPSB7XG4gICAgcGFzc3dvcmQ6IFwiXCIsXG4gICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxuICAgIGlzUGFzc3dvcmRTZXQ6IGZhbHNlLFxuICAgIGNvbmZpcm1EZWxldGU6IGZhbHNlLFxuICB9O1xuXG4gIG9uUGFzc3dvcmRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGxldCBwYXNzID0gZS50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBwYXNzIH0pO1xuXG4gICAgaWYgKHRoaXMuc3RhdGUucGFzc3dvcmQgIT09IHVuZGVmaW5lZCAmJiBwYXNzLmxlbmd0aCA+PSA2NCkge1xuICAgICAgbGV0IHByaXZhdGVLZXkgPSBwYXNzO1xuICAgICAgbGV0IHB1YmxpY0VuY3J5cHRpb25LZXk7XG4gICAgICBsZXQgcHVibGljQWRkcmVzcztcbiAgICAgIGxldCBzaWduYXR1cmU7XG5cbiAgICAgIGlmIChwcml2YXRlS2V5LnN1YnN0cmluZygwLCAyKSAhPT0gXCIweFwiKSB7XG4gICAgICAgIHByaXZhdGVLZXkgPSBcIjB4XCIgKyBwcml2YXRlS2V5O1xuICAgICAgfVxuXG4gICAgICB0cnkge1xuICAgICAgICBwdWJsaWNFbmNyeXB0aW9uS2V5ID0gRXRoQ3J5cHRvLnB1YmxpY0tleUJ5UHJpdmF0ZUtleShwcml2YXRlS2V5KTtcbiAgICAgICAgcHVibGljQWRkcmVzcyA9IEV0aENyeXB0by5wdWJsaWNLZXkudG9BZGRyZXNzKHB1YmxpY0VuY3J5cHRpb25LZXkpO1xuXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBwdWJsaWNBZGRyZXNzO1xuICAgICAgICBjb25zdCBtZXNzYWdlSGFzaCA9IEV0aENyeXB0by5oYXNoLmtlY2NhazI1NihtZXNzYWdlKTtcbiAgICAgICAgc2lnbmF0dXJlID0gRXRoQ3J5cHRvLnNpZ24ocHJpdmF0ZUtleSwgbWVzc2FnZUhhc2gpO1xuXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZSA9XG4gICAgICAgICAgXCJicmluZy15b3VyLW93bi1rZXk9XCIgKyBwcml2YXRlS2V5LnN1YnN0cmluZygyLCBwcml2YXRlS2V5Lmxlbmd0aCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiTm90IHVzaW5nIGJ5b2tcIik7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBwdWJsaWNBZGRyZXNzIH0pO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHNpZ25hdHVyZSB9KTtcbiAgICB9XG4gIH07XG5cbiAgc2V0UGFzc3dvcmQgPSBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBjb25zdCB7IGlzQWRkLCBsb2dpbk1ldGhvZHMsIHNldExvZ2luTWV0aG9kcywgZ29CYWNrIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW4tbWV0aG9kc1wiO1xuICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IFVybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogaXNBZGQgPyBcIlBPU1RcIiA6IFwiUFVUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aG9yaXphdGlvbn1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBhc3N3b3JkIH0pLFxuICAgICAgfTtcbiAgICAgIGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgICBpZiAoaXNBZGQpIHtcbiAgICAgICAgbG9naW5NZXRob2RzLnB1c2goXCJQYXNzd29yZExvZ2luVHlwZVwiKTtcbiAgICAgICAgc2V0TG9naW5NZXRob2RzKGxvZ2luTWV0aG9kcyk7XG4gICAgICAgIGdvQmFjaygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc1Bhc3N3b3JkU2V0OiB0cnVlIH0pO1xuICB9O1xuICBkZWxldGVQYXNzd29yZCA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHNldExvZ2luTWV0aG9kcywgZ29CYWNrIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBsZXQgeyBsb2dpbk1ldGhvZHMgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW4tbWV0aG9kcy9QYXNzd29yZExvZ2luVHlwZVwiO1xuICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IFVybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogXCJERUxFVEVcIixcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHthdXRob3JpemF0aW9ufWAsXG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgICAgYXdhaXQgZmV0Y2godXJsLCBpbml0KTtcbiAgICAgIGxvZ2luTWV0aG9kcyA9IGxvZ2luTWV0aG9kcy5maWx0ZXIoKGxtKSA9PiBsbSAhPT0gXCJQYXNzd29yZExvZ2luVHlwZVwiKTtcbiAgICAgIHNldExvZ2luTWV0aG9kcyhsb2dpbk1ldGhvZHMpO1xuICAgICAgZ29CYWNrKCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgfVxuICB9O1xuICByZW5kZXJIaWRkZW5JbnB1dHMgPSAoKSA9PiB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBpZD1cInVzZXJuYW1lXCIgbmFtZT1cInVzZXJuYW1lXCIgdmFsdWU9e3VzZXJuYW1lfSAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICBpZD1cImNsaWVudF9pZFwiXG4gICAgICAgICAgbmFtZT1cImNsaWVudF9pZFwiXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImNsaWVudF9pZFwiKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgaWQ9XCJyZXNwb25zZV90eXBlXCJcbiAgICAgICAgICBuYW1lPVwicmVzcG9uc2VfdHlwZVwiXG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcInJlc3BvbnNlX3R5cGVcIil9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICBuYW1lPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwicmVkaXJlY3RfdXJsXCIpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXQgaWQ9XCJzY29wZVwiIG5hbWU9XCJzY29wZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT1cIlwiIC8+XG4gICAgICAgIDxpbnB1dCBpZD1cInN0YXRlXCIgbmFtZT1cInN0YXRlXCIgdHlwZT1cImhpZGRlblwiIHZhbHVlPVwiXCIgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIGlkPVwic2lnbmF0dXJlXCJcbiAgICAgICAgICBuYW1lPVwic2lnbmF0dXJlXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5zaWduYXR1cmV9XG4gICAgICAgIC8+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBpZD1cInB1YmxpY0FkZHJlc3NcIlxuICAgICAgICAgIG5hbWU9XCJwdWJsaWNBZGRyZXNzXCJcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5wdWJsaWNBZGRyZXNzfVxuICAgICAgICAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9O1xuICByZW5kZXJTZXRQYXNzd29yZCgpIHtcbiAgICBjb25zdCB7IHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQsIGlzUGFzc3dvcmRTZXQsIGNvbmZpcm1EZWxldGUgfSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgfTtcbiAgICBjb25zdCB7IGdvQmFjaywgaXNBZGQgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGlmIChjb25maXJtRGVsZXRlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGlkPVwic2VjdGlvbi0xLW93bmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbG9naW4tY2FyZCBkZWxldGVcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlBhc3N3b3JkPC9kaXY+XG4gICAgICAgICAgICAgICAgPFBhc3N3b3JkTWV0aG9kTG9naW5TdmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVsZXRlLWV4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICA8cD5BcmUgeW91IHN1cmUgeW91IHdpc2ggdG8gZGVsZXRlIHRoaXMgbG9naW4gbWV0aG9kPzwvcD5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFlvdSB3aWxsIGhhdmUgdG8gc2V0dXAgYSBuZXcgcGFzc3dvcmQgaWYgeW91IGNoYW5nZSB5b3VyIG1pbmRcbiAgICAgICAgICAgICAgICAgIGxhdGVyXG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImRlbGV0ZS1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIlllcywgZGVsZXRlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuZGVsZXRlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtZXhjZXJwdFwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29uZmlybURlbGV0ZTogZmFsc2UgfSl9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBubywgdGFrZSBtZSBiYWNrXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJzZWN0aW9uLTEtb3duZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuc2V0UGFzc3dvcmR9IGNsYXNzTmFtZT1cImNhcmQgbG9naW4tY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3Atc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5QYXNzd29yZDwvZGl2PlxuICAgICAgICAgICAgICA8UGFzc3dvcmRNZXRob2RMb2dpblN2ZyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgY29sb3I6IFwicmdiYSg3MiwgNzIsIDcyLCAwLjc3KVwiIH19PlxuICAgICAgICAgICAgICAgICAgTmV3IFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCIxM3B4XCIsIGNvbG9yOiBcInJnYmEoNzIsIDcyLCA3MiwgMC43NylcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENvbmZpcm0gTmV3IFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17Y29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgY29uZmlybVBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgeyFpc1Bhc3N3b3JkU2V0ICYmIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjZXJwdFwiPlxuICAgICAgICAgICAgICAgICAgICBQbGVhc2UgdHlwZSBpbiB5b3VyIG5ldyBwYXNzd29yZCBhYm92ZVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICB7aXNQYXNzd29yZFNldCAmJiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzJhNzM2XCIsXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIFBhc3N3b3JkIHNldCFcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJTZXQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQubGVuZ3RoIDwgMSB8fFxuICAgICAgICAgICAgICAgIGNvbmZpcm1QYXNzd29yZC5sZW5ndGggPCAxIHx8XG4gICAgICAgICAgICAgICAgcGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCB8fFxuICAgICAgICAgICAgICAgIGlzUGFzc3dvcmRTZXRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIHtpc0FkZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93XCIgb25DbGljaz17Z29CYWNrfT5cbiAgICAgICAgICAgICAgICBUYWtlIG1lIGJhY2tcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgeyFpc0FkZCAmJiAoXG4gICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgY29uZmlybURlbGV0ZTogdHJ1ZSB9KX1cbiAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2Q5NTg2OFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzIGxvZ2luIG1ldGhvZFxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbiAgcmVuZGVyTG9naW4oKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJzZWN0aW9uLTEtb3duZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgPGZvcm0gbWV0aG9kPVwiUE9TVFwiIGFjdGlvbj1cIi9hdXRob3JpemVcIiBjbGFzc05hbWU9XCJjYXJkIGxvZ2luLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9wLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+UGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgPFBhc3N3b3JkTWV0aG9kTG9naW5TdmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHktc2VjdGlvbjFcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PlBhc3N3b3JkPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIC8vIG9uQ2hhbmdlPXsoZSkgPT4gdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLm9uUGFzc3dvcmRDaGFuZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2VycHRcIj5cbiAgICAgICAgICAgICAgICAgIFBsZWFzZSB0eXBlIHlvdXIgcGFzc3dvcmQgdG8gZ2FpbiBhY2Nlc3MgdG8geW91ciBhY2NvdW50LlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiTG9naW5cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD17cGFzc3dvcmQubGVuZ3RoIDwgMX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICB7dGhpcy5yZW5kZXJIaWRkZW5JbnB1dHMoKX1cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc1NldHRpbmdzIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBpZiAoIWlzU2V0dGluZ3MpIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlckxvZ2luKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlclNldFBhc3N3b3JkKCk7XG4gICAgfVxuICB9XG59XG5cblBhc3N3b3JkU2V0dXAucHJvcFR5cGVzID0ge1xuICBsb2dpbk1ldGhvZHM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBzZXRMb2dpbk1ldGhvZHM6IFByb3BUeXBlcy5mdW5jLFxuICB1c2VybmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgaXNTZXR0aW5nczogUHJvcFR5cGVzLmJvb2wsXG4gIGlzQWRkOiBQcm9wVHlwZXMuYm9vbCxcbiAgZ29CYWNrOiBQcm9wVHlwZXMuZnVuYyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhc3N3b3JkU2V0dXA7XG4iXX0=