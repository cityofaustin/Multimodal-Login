"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../../svg/GoBackSvg"));
var _AuthQuestionSvg = _interopRequireDefault(require("../../../svg/AuthQuestionSvg"));
var _animationUtil = require("../../../../util/animation-util");



if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/c8ecdadb70adb461be6f6b4017cfd0c2.scss"));
}

class OwnerQuizIntro extends _react.Component {





  componentDidMount() {
    (0, _browserUtil.handleIOSBrowser)();
    (0, _animationUtil.animateIn)(this.refs.section);
  }

  render() {
    return /*#__PURE__*/(
      _react.default.createElement("div", {
        ref: "section",
        id: "section-3-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Let's figure out which login methods work best for you")), /*#__PURE__*/



      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-subtitle" }, "To do this, we'll ask you a few questions.")), /*#__PURE__*/



      _react.default.createElement(_AuthQuestionSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-subtitle" }, "This will help you access your account whilst keeping it private and secure")), /*#__PURE__*/




      _react.default.createElement("div", { className: "section-container" }, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: '210px', marginTop: '27px' },
        type: "button",
        value: "Continue",
        onClick: () => this.props.handleGoForward('owner', 4) }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack('owner', 3) }))));




  }}exports.default = OwnerQuizIntro;(0, _defineProperty2.default)(OwnerQuizIntro, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJRdWl6SW50cm8uanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJRdWl6SW50cm8iLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInJlZnMiLCJzZWN0aW9uIiwicmVuZGVyIiwicHJvcHMiLCJwb3NpdGlvbiIsIndpZHRoIiwibWFyZ2luVG9wIiwiaGFuZGxlR29Gb3J3YXJkIiwiaGFuZGxlR29CYWNrIl0sIm1hcHBpbmdzIjoiaWVBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEOztBQUVjLE1BQU1DLGNBQU4sU0FBNkJDLGdCQUE3QixDQUF1Qzs7Ozs7O0FBTXBEQyxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQjtBQUNBLGtDQUFVLEtBQUtDLElBQUwsQ0FBVUMsT0FBcEI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1A7QUFDRTtBQUNFLFFBQUEsR0FBRyxFQUFDLFNBRE47QUFFRSxRQUFBLEVBQUUsRUFBQyxpQkFGTDtBQUdFLFFBQUEsU0FBUyxFQUFFLHdDQUFvQixLQUFLQyxLQUFMLENBQVdDLFFBQS9CLENBSGI7O0FBS0UsNENBQUssU0FBUyxFQUFDLGtCQUFmO0FBQ0UsNENBQUssU0FBUyxFQUFDLE9BQWYscUJBREY7QUFFRSw0Q0FBSyxTQUFTLEVBQUMsVUFBZix5QkFGRjtBQUdFLDRDQUFLLFNBQVMsRUFBQyxhQUFmO0FBQ0U7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsWUFBZiw2REFERixDQURGOzs7O0FBTUU7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsZUFBZixpREFERixDQU5GOzs7O0FBV0UsbUNBQUMsd0JBQUQsT0FYRjtBQVlFO0FBQ0UsNENBQUssU0FBUyxFQUFDLGVBQWYsa0ZBREYsQ0FaRjs7Ozs7QUFrQkUsNENBQUssU0FBUyxFQUFDLG1CQUFmO0FBQ0U7QUFDRSxRQUFBLEtBQUssRUFBRSxFQUFFQyxLQUFLLEVBQUUsT0FBVCxFQUFrQkMsU0FBUyxFQUFFLE1BQTdCLEVBRFQ7QUFFRSxRQUFBLElBQUksRUFBQyxRQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUMsVUFIUjtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQU0sS0FBS0gsS0FBTCxDQUFXSSxlQUFYLENBQTJCLE9BQTNCLEVBQW9DLENBQXBDLENBSmpCLEdBREYsQ0FsQkYsQ0FIRjs7OztBQThCRSxtQ0FBQyxrQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFBLE1BQU0sRUFBRSxNQUFNLEtBQUtKLEtBQUwsQ0FBV0ssWUFBWCxDQUF3QixPQUF4QixFQUFpQyxDQUFqQyxDQUZoQixHQTlCRixDQUxGLENBREY7Ozs7O0FBMkNELEdBdkRtRCxDLCtEQUFqQ1gsYyxrQkFDRyxFQUNwQlUsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCQyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBoYW5kbGVJT1NCcm93c2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9icm93c2VyLXV0aWwnO1xuaW1wb3J0IEdvQmFja1N2ZyBmcm9tICcuLi8uLi8uLi9zdmcvR29CYWNrU3ZnJztcbmltcG9ydCBBdXRoUXVlc3Rpb25TdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL0F1dGhRdWVzdGlvblN2Zyc7XG5pbXBvcnQge1xuICBhbmltYXRlSW4sXG4gIGdldFNlY3Rpb25DbGFzc05hbWUsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYW5pbWF0aW9uLXV0aWwnO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KCcuL093bmVyUXVpekludHJvLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJRdWl6SW50cm8gZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZUdvRm9yd2FyZDogKCkgPT4ge30sXG4gICAgaGFuZGxlR29CYWNrOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBoYW5kbGVJT1NCcm93c2VyKCk7XG4gICAgYW5pbWF0ZUluKHRoaXMucmVmcy5zZWN0aW9uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9XCJzZWN0aW9uXCJcbiAgICAgICAgaWQ9XCJzZWN0aW9uLTMtb3duZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2dldFNlY3Rpb25DbGFzc05hbWUodGhpcy5wcm9wcy5wb3NpdGlvbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2N1bWVudCBPd25lcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Nb3JlIHdheXMgdG8gbG9naW48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBMZXQncyBmaWd1cmUgb3V0IHdoaWNoIGxvZ2luIG1ldGhvZHMgd29yayBiZXN0IGZvciB5b3VcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIFRvIGRvIHRoaXMsIHdlJ2xsIGFzayB5b3UgYSBmZXcgcXVlc3Rpb25zLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPEF1dGhRdWVzdGlvblN2ZyAvPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgVGhpcyB3aWxsIGhlbHAgeW91IGFjY2VzcyB5b3VyIGFjY291bnQgd2hpbHN0IGtlZXBpbmcgaXQgcHJpdmF0ZVxuICAgICAgICAgICAgICAgIGFuZCBzZWN1cmVcbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcsIG1hcmdpblRvcDogJzI3cHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJDb250aW51ZVwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0ZvcndhcmQoJ293bmVyJywgNCl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8R29CYWNrU3ZnXG4gICAgICAgICAgICBjb2xvcj1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgZ29CYWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUdvQmFjaygnb3duZXInLCAzKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==