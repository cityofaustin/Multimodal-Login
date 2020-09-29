"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../../svg/GoBackSvg"));
var _PasswordSetup = _interopRequireDefault(require("./PasswordSetup"));
var _PalmSetup = _interopRequireDefault(require("./PalmSetup"));
var _TextSetup = _interopRequireDefault(require("./TextSetup"));
var _SecurityQuestionsSetup = _interopRequireDefault(require("./SecurityQuestionsSetup"));

var _animationUtil = require("../../../../util/animation-util"); // import delay from '../../../../util/delay';



if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/f0dc6479b33e32a417c266a6529c88ae.scss"));
}

class LoginMethodSetup extends _react.Component {constructor(...args) {super(...args);(0, _defineProperty2.default)(this, "state",






    {
      isDisplayHow: false });(0, _defineProperty2.default)(this, "toggleDisplayHow",







    () => {
      const { isDisplayHow } = { ...this.state };
      this.setState({ isDisplayHow: !isDisplayHow });
    });}componentDidMount() {var _this = this;return (0, _asyncToGenerator2.default)(function* () {(0, _browserUtil.handleIOSBrowser)();(0, _animationUtil.animateIn)(_this.refs.section);})();}

  renderTitles() {
    const { isDisplayHow } = { ...this.state };
    const { loginMethod } = { ...this.props };
    let title = 'Document Owner';
    let subtitle = 'More ways to login';
    if (!!isDisplayHow) {
      subtitle = 'In a nutshell';
      switch (loginMethod) {
        case 'securityQuestions':
          title = 'What are Security Questions?';
          break;
        case 'text':
          title = 'What is Text Login?';
          break;
        case 'palm':
          title = 'What is Palm Recognition';
          break;}

    }
    return /*#__PURE__*/(
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, title), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, subtitle)));


  }

  render() {
    const {
      passwordItem,
      textItem,
      palmItem,
      securityItems,
      loginMethod,
      handleGoBack } =
    { ...this.props };
    const { isDisplayHow } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", {
        ref: "section",
        id: "section-10-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" },
      this.renderTitles(),
      loginMethod === 'password' && /*#__PURE__*/
      _react.default.createElement(_PasswordSetup.default, {
        passwordItem: passwordItem,
        handleGoBack: (selectedRole, step, data) =>
        handleGoBack(selectedRole, step, data) }),



      loginMethod === 'palm' && /*#__PURE__*/
      _react.default.createElement(_PalmSetup.default, {
        palmItem: palmItem,
        handleGoBack: (selectedRole, step, data) =>
        handleGoBack(selectedRole, step, data),

        toggleDisplayHow: this.toggleDisplayHow,
        isDisplayHow: isDisplayHow }),


      loginMethod === 'text' && /*#__PURE__*/
      _react.default.createElement(_TextSetup.default, {
        textItem: textItem,
        handleGoBack: (selectedRole, step, data) =>
        handleGoBack(selectedRole, step, data),

        toggleDisplayHow: this.toggleDisplayHow,
        isDisplayHow: isDisplayHow }),


      loginMethod === 'securityQuestions' && /*#__PURE__*/
      _react.default.createElement(_SecurityQuestionsSetup.default, {
        securityItems: securityItems,
        handleGoBack: (selectedRole, step, data) =>
        handleGoBack(selectedRole, step, data),

        toggleDisplayHow: this.toggleDisplayHow,
        isDisplayHow: isDisplayHow }), /*#__PURE__*/


      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => {
          const { isDisplayHow } = { ...this.state };
          if (isDisplayHow) {
            this.setState({ isDisplayHow: !isDisplayHow });
          } else {
            handleGoBack('owner', 10);
          }
        } }))));




  }}exports.default = LoginMethodSetup;(0, _defineProperty2.default)(LoginMethodSetup, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {}, loginMethod: 'securityQuestions' });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL2xvZ2luLW1ldGhvZC1zZXR1cC9Mb2dpbk1ldGhvZFNldHVwLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIkxvZ2luTWV0aG9kU2V0dXAiLCJDb21wb25lbnQiLCJpc0Rpc3BsYXlIb3ciLCJzdGF0ZSIsInNldFN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZWZzIiwic2VjdGlvbiIsInJlbmRlclRpdGxlcyIsImxvZ2luTWV0aG9kIiwicHJvcHMiLCJ0aXRsZSIsInN1YnRpdGxlIiwicmVuZGVyIiwicGFzc3dvcmRJdGVtIiwidGV4dEl0ZW0iLCJwYWxtSXRlbSIsInNlY3VyaXR5SXRlbXMiLCJoYW5kbGVHb0JhY2siLCJwb3NpdGlvbiIsInNlbGVjdGVkUm9sZSIsInN0ZXAiLCJkYXRhIiwidG9nZ2xlRGlzcGxheUhvdyIsImhhbmRsZUdvRm9yd2FyZCJdLCJtYXBwaW5ncyI6InFrQkFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRSxDQURBOzs7O0FBS0EsSUFBSUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRWMsTUFBTUMsZ0JBQU4sU0FBK0JDLGdCQUEvQixDQUF5Qzs7Ozs7OztBQU85QztBQUNOQyxNQUFBQSxZQUFZLEVBQUUsS0FEUixFQVA4Qzs7Ozs7Ozs7QUFnQm5DLFVBQU07QUFDdkIsWUFBTSxFQUFFQSxZQUFGLEtBQW1CLEVBQUUsR0FBRyxLQUFLQyxLQUFWLEVBQXpCO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUVGLFlBQVksRUFBRSxDQUFDQSxZQUFqQixFQUFkO0FBQ0QsS0FuQnFELEdBV2hERyxpQkFBTixHQUEwQix1RUFDeEIscUNBQ0EsOEJBQVUsS0FBSSxDQUFDQyxJQUFMLENBQVVDLE9BQXBCLEVBRndCLEtBR3pCOztBQU9EQyxFQUFBQSxZQUFZ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QUFLRSxRQUFBLGdCQUFnQixFQUFFLEtBQUtDLGdCQUx6QjtBQU1FLFFBQUEsWUFBWSxFQUFFckIsWUFOaEIsR0EvQko7OztBQXdDRSxtQ0FBQyxrQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFBLE1BQU0sRUFBRSxNQUFNO0FBQ1osZ0JBQU0sRUFBRUEsWUFBRixLQUFtQixFQUFFLEdBQUcsS0FBS0MsS0FBVixFQUF6QjtBQUNBLGNBQUlELFlBQUosRUFBa0I7QUFDaEIsaUJBQUtFLFFBQUwsQ0FBYyxFQUFFRixZQUFZLEVBQUUsQ0FBQ0EsWUFBakIsRUFBZDtBQUNELFdBRkQsTUFFTztBQUNMZ0IsWUFBQUEsWUFBWSxDQUFDLE9BQUQsRUFBVSxFQUFWLENBQVo7QUFDRDtBQUNGLFNBVEgsR0F4Q0YsQ0FMRixDQURGOzs7OztBQTRERCxHQXRIcUQsQyxpRUFBbkNsQixnQixrQkFDRyxFQUNwQndCLGVBQWUsRUFBRSxNQUFNLENBQUUsQ0FETCxFQUVwQk4sWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUZGLEVBR3BCVCxXQUFXLEVBQUUsbUJBSE8sRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYnJvd3Nlci11dGlsJztcbmltcG9ydCBHb0JhY2tTdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL0dvQmFja1N2Zyc7XG5pbXBvcnQgUGFzc3dvcmRTZXR1cCBmcm9tICcuL1Bhc3N3b3JkU2V0dXAnO1xuaW1wb3J0IFBhbG1TZXR1cCBmcm9tICcuL1BhbG1TZXR1cCc7XG5pbXBvcnQgVGV4dFNldHVwIGZyb20gJy4vVGV4dFNldHVwJztcbmltcG9ydCBTZWN1cml0eVF1ZXN0aW9uU2V0dXAgZnJvbSAnLi9TZWN1cml0eVF1ZXN0aW9uc1NldHVwJztcbi8vIGltcG9ydCBkZWxheSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2RlbGF5JztcbmltcG9ydCB7XG4gIGFuaW1hdGVJbixcbiAgZ2V0U2VjdGlvbkNsYXNzTmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9hbmltYXRpb24tdXRpbCc7XG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBpbXBvcnQoJy4vTG9naW5NZXRob2RTZXR1cC5zY3NzJyk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWV0aG9kU2V0dXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZUdvRm9yd2FyZDogKCkgPT4ge30sXG4gICAgaGFuZGxlR29CYWNrOiAoKSA9PiB7fSxcbiAgICBsb2dpbk1ldGhvZDogJ3NlY3VyaXR5UXVlc3Rpb25zJyxcbiAgfTtcblxuICBzdGF0ZSA9IHtcbiAgICBpc0Rpc3BsYXlIb3c6IGZhbHNlLFxuICB9O1xuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGhhbmRsZUlPU0Jyb3dzZXIoKTtcbiAgICBhbmltYXRlSW4odGhpcy5yZWZzLnNlY3Rpb24pO1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheUhvdyA9ICgpID0+IHtcbiAgICBjb25zdCB7IGlzRGlzcGxheUhvdyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzRGlzcGxheUhvdzogIWlzRGlzcGxheUhvdyB9KTtcbiAgfTtcblxuICByZW5kZXJUaXRsZXMoKSB7XG4gICAgY29uc3QgeyBpc0Rpc3BsYXlIb3cgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IHsgbG9naW5NZXRob2QgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGxldCB0aXRsZSA9ICdEb2N1bWVudCBPd25lcic7XG4gICAgbGV0IHN1YnRpdGxlID0gJ01vcmUgd2F5cyB0byBsb2dpbic7XG4gICAgaWYgKCEhaXNEaXNwbGF5SG93KSB7XG4gICAgICBzdWJ0aXRsZSA9ICdJbiBhIG51dHNoZWxsJztcbiAgICAgIHN3aXRjaCAobG9naW5NZXRob2QpIHtcbiAgICAgICAgY2FzZSAnc2VjdXJpdHlRdWVzdGlvbnMnOlxuICAgICAgICAgIHRpdGxlID0gJ1doYXQgYXJlIFNlY3VyaXR5IFF1ZXN0aW9ucz8nO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0ZXh0JzpcbiAgICAgICAgICB0aXRsZSA9ICdXaGF0IGlzIFRleHQgTG9naW4/JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFsbSc6XG4gICAgICAgICAgdGl0bGUgPSAnV2hhdCBpcyBQYWxtIFJlY29nbml0aW9uJztcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPnt0aXRsZX08L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPntzdWJ0aXRsZX08L2Rpdj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBwYXNzd29yZEl0ZW0sXG4gICAgICB0ZXh0SXRlbSxcbiAgICAgIHBhbG1JdGVtLFxuICAgICAgc2VjdXJpdHlJdGVtcyxcbiAgICAgIGxvZ2luTWV0aG9kLFxuICAgICAgaGFuZGxlR29CYWNrLFxuICAgIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBjb25zdCB7IGlzRGlzcGxheUhvdyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPVwic2VjdGlvblwiXG4gICAgICAgIGlkPVwic2VjdGlvbi0xMC1vd25lclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2VjdGlvbkNsYXNzTmFtZSh0aGlzLnByb3BzLnBvc2l0aW9uKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAge3RoaXMucmVuZGVyVGl0bGVzKCl9XG4gICAgICAgICAge2xvZ2luTWV0aG9kID09PSAncGFzc3dvcmQnICYmIChcbiAgICAgICAgICAgIDxQYXNzd29yZFNldHVwXG4gICAgICAgICAgICAgIHBhc3N3b3JkSXRlbT17cGFzc3dvcmRJdGVtfVxuICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9eyhzZWxlY3RlZFJvbGUsIHN0ZXAsIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrKHNlbGVjdGVkUm9sZSwgc3RlcCwgZGF0YSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtsb2dpbk1ldGhvZCA9PT0gJ3BhbG0nICYmIChcbiAgICAgICAgICAgIDxQYWxtU2V0dXBcbiAgICAgICAgICAgICAgcGFsbUl0ZW09e3BhbG1JdGVtfVxuICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9eyhzZWxlY3RlZFJvbGUsIHN0ZXAsIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrKHNlbGVjdGVkUm9sZSwgc3RlcCwgZGF0YSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0b2dnbGVEaXNwbGF5SG93PXt0aGlzLnRvZ2dsZURpc3BsYXlIb3d9XG4gICAgICAgICAgICAgIGlzRGlzcGxheUhvdz17aXNEaXNwbGF5SG93fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtsb2dpbk1ldGhvZCA9PT0gJ3RleHQnICYmIChcbiAgICAgICAgICAgIDxUZXh0U2V0dXBcbiAgICAgICAgICAgICAgdGV4dEl0ZW09e3RleHRJdGVtfVxuICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9eyhzZWxlY3RlZFJvbGUsIHN0ZXAsIGRhdGEpID0+XG4gICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrKHNlbGVjdGVkUm9sZSwgc3RlcCwgZGF0YSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0b2dnbGVEaXNwbGF5SG93PXt0aGlzLnRvZ2dsZURpc3BsYXlIb3d9XG4gICAgICAgICAgICAgIGlzRGlzcGxheUhvdz17aXNEaXNwbGF5SG93fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApfVxuICAgICAgICAgIHtsb2dpbk1ldGhvZCA9PT0gJ3NlY3VyaXR5UXVlc3Rpb25zJyAmJiAoXG4gICAgICAgICAgICA8U2VjdXJpdHlRdWVzdGlvblNldHVwXG4gICAgICAgICAgICAgIHNlY3VyaXR5SXRlbXM9e3NlY3VyaXR5SXRlbXN9XG4gICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17KHNlbGVjdGVkUm9sZSwgc3RlcCwgZGF0YSkgPT5cbiAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2soc2VsZWN0ZWRSb2xlLCBzdGVwLCBkYXRhKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRvZ2dsZURpc3BsYXlIb3c9e3RoaXMudG9nZ2xlRGlzcGxheUhvd31cbiAgICAgICAgICAgICAgaXNEaXNwbGF5SG93PXtpc0Rpc3BsYXlIb3d9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCB7IGlzRGlzcGxheUhvdyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgICAgICAgICAgIGlmIChpc0Rpc3BsYXlIb3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNEaXNwbGF5SG93OiAhaXNEaXNwbGF5SG93IH0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaygnb3duZXInLCAxMCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=