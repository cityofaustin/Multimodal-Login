"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _PalmDetectedSvg = _interopRequireDefault(require("../../../svg/PalmDetectedSvg"));
var _PalmNotDetectedSvg = _interopRequireDefault(require("../../../svg/PalmNotDetectedSvg"));
var _HowSvg = _interopRequireDefault(require("../../../svg/HowSvg"));
var _PalmExampleSvg = _interopRequireDefault(require("../../../svg/PalmExampleSvg"));
if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/749672e84fc03e5603d0fdd7684ec1b3.scss"));
}
class PalmSetup extends _react.Component {
  constructor(props) {
    super(props);
    const palmTemplate = props.palmItem ?
    props.palmItem.palmTemplate :
    undefined;
    this.state = {
      palmTemplate };

  }

  renderPalmCard() {
    const { palmTemplate } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", { id: "palm-setup", className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Palm Login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "excerpt" }, "Please use your camera to register your palm")), /*#__PURE__*/



      _react.default.createElement("div", null,
      !palmTemplate && /*#__PURE__*/_react.default.createElement(_PalmNotDetectedSvg.default, null),
      palmTemplate && /*#__PURE__*/_react.default.createElement(_PalmDetectedSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "submit-section" },
      !palmTemplate && /*#__PURE__*/
      _react.default.createElement("input", {
        type: "button",
        value: "Open Camera"
        // TODO:
        , onClick: () => this.setState({ palmTemplate: '123' }) }),


      palmTemplate && /*#__PURE__*/
      _react.default.createElement("input", {
        type: "button",
        value: "Set Palm",
        onClick: () =>
        this.props.handleGoBack('owner', 10, {
          palmItem: { palmTemplate } }) }), /*#__PURE__*/




      _react.default.createElement("div", { className: "how" }, "How does this work?"))));



  }

  renderHow() {
    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/
      _react.default.createElement(_HowSvg.default, { loginMethod: "palm" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "sec-excerpt" }, "Palm recognition is a technology that records your unique palm print and utilizes it to login to your account using your device's camera.",

      ' '), /*#__PURE__*/

      _react.default.createElement(_PalmExampleSvg.default, null)));


  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderPalmCard() : this.renderHow();
  }}exports.default = PalmSetup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL2xvZ2luLW1ldGhvZC1zZXR1cC9QYWxtU2V0dXAuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiUGFsbVNldHVwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBhbG1UZW1wbGF0ZSIsInBhbG1JdGVtIiwidW5kZWZpbmVkIiwic3RhdGUiLCJyZW5kZXJQYWxtQ2FyZCIsInNldFN0YXRlIiwiaGFuZGxlR29CYWNrIiwicmVuZGVySG93IiwicmVuZGVyIiwiaXNEaXNwbGF5SG93Il0sIm1hcHBpbmdzIjoiaVlBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEO0FBQ2MsTUFBTUMsU0FBTixTQUF3QkMsZ0JBQXhCLENBQWtDO0FBQy9DQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsVUFBTUMsWUFBWSxHQUFHRCxLQUFLLENBQUNFLFFBQU47QUFDakJGLElBQUFBLEtBQUssQ0FBQ0UsUUFBTixDQUFlRCxZQURFO0FBRWpCRSxJQUFBQSxTQUZKO0FBR0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hILE1BQUFBLFlBRFcsRUFBYjs7QUFHRDs7QUFFREksRUFBQUEsY0FBYyxHQUFHO0FBQ2YsVUFBTSxFQUFFSixZQUFGLEtBQW1CLEVBQUUsR0FBRyxLQUFLRyxLQUFWLEVBQXpCO0FBQ0E7QUFDRSw0Q0FBSyxFQUFFLEVBQUMsWUFBUixFQUFxQixTQUFTLEVBQUMsYUFBL0I7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsY0FBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxZQUFmLGlCQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFNBQWYsbURBRkYsQ0FERjs7OztBQU9FO0FBQ0csT0FBQ0gsWUFBRCxpQkFBaUIsNkJBQUMsMkJBQUQsT0FEcEI7QUFFR0EsTUFBQUEsWUFBWSxpQkFBSSw2QkFBQyx3QkFBRCxPQUZuQixDQVBGOztBQVdFLDRDQUFLLFNBQVMsRUFBQyxnQkFBZjtBQUNHLE9BQUNBLFlBQUQ7QUFDQztBQUNFLFFBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFBLEtBQUssRUFBQztBQUNOO0FBSEYsVUFJRSxPQUFPLEVBQUUsTUFBTSxLQUFLSyxRQUFMLENBQWMsRUFBRUwsWUFBWSxFQUFFLEtBQWhCLEVBQWQsQ0FKakIsR0FGSjs7O0FBU0dBLE1BQUFBLFlBQVk7QUFDWDtBQUNFLFFBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFBLEtBQUssRUFBQyxVQUZSO0FBR0UsUUFBQSxPQUFPLEVBQUU7QUFDUCxhQUFLRCxLQUFMLENBQVdPLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsRUFBakMsRUFBcUM7QUFDbkNMLFVBQUFBLFFBQVEsRUFBRSxFQUFFRCxZQUFGLEVBRHlCLEVBQXJDLENBSkosR0FWSjs7Ozs7QUFvQkUsNENBQUssU0FBUyxFQUFDLEtBQWYsMEJBcEJGLENBWEYsQ0FERjs7OztBQW9DRDs7QUFFRE8sRUFBQUEsU0FBUyxHQUFHO0FBQ1Y7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsZUFBZjtBQUNFLG1DQUFDLGVBQUQsSUFBUSxXQUFXLEVBQUMsTUFBcEIsR0FERjtBQUVFLDRDQUFLLFNBQVMsRUFBQyxhQUFmOztBQUV1RSxTQUZ2RSxDQUZGOztBQU1FLG1DQUFDLHVCQUFELE9BTkYsQ0FERjs7O0FBVUQ7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU0sRUFBRUMsWUFBRixLQUFtQixFQUFFLEdBQUcsS0FBS1YsS0FBVixFQUF6QjtBQUNBLFdBQU8sQ0FBQ1UsWUFBRCxHQUFnQixLQUFLTCxjQUFMLEVBQWhCLEdBQXdDLEtBQUtHLFNBQUwsRUFBL0M7QUFDRCxHQW5FOEMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUGFsbURldGVjdGVkU3ZnIGZyb20gJy4uLy4uLy4uL3N2Zy9QYWxtRGV0ZWN0ZWRTdmcnO1xuaW1wb3J0IFBhbG1Ob3REZXRlY3RlZFN2ZyBmcm9tICcuLi8uLi8uLi9zdmcvUGFsbU5vdERldGVjdGVkU3ZnJztcbmltcG9ydCBIb3dTdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL0hvd1N2Zyc7XG5pbXBvcnQgUGFsbUV4YW1wbGVTdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL1BhbG1FeGFtcGxlU3ZnJztcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIGltcG9ydCgnLi9QYWxtU2V0dXAuc2NzcycpO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFsbVNldHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgcGFsbVRlbXBsYXRlID0gcHJvcHMucGFsbUl0ZW1cbiAgICAgID8gcHJvcHMucGFsbUl0ZW0ucGFsbVRlbXBsYXRlXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgcGFsbVRlbXBsYXRlLFxuICAgIH07XG4gIH1cblxuICByZW5kZXJQYWxtQ2FyZCgpIHtcbiAgICBjb25zdCB7IHBhbG1UZW1wbGF0ZSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJwYWxtLXNldHVwXCIgY2xhc3NOYW1lPVwiY2FyZCBvd25lcjFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5QYWxtIExvZ2luPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0XCI+XG4gICAgICAgICAgICBQbGVhc2UgdXNlIHlvdXIgY2FtZXJhIHRvIHJlZ2lzdGVyIHlvdXIgcGFsbVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICB7IXBhbG1UZW1wbGF0ZSAmJiA8UGFsbU5vdERldGVjdGVkU3ZnIC8+fVxuICAgICAgICAgIHtwYWxtVGVtcGxhdGUgJiYgPFBhbG1EZXRlY3RlZFN2ZyAvPn1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LXNlY3Rpb25cIj5cbiAgICAgICAgICB7IXBhbG1UZW1wbGF0ZSAmJiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiT3BlbiBDYW1lcmFcIlxuICAgICAgICAgICAgICAvLyBUT0RPOlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB0aGlzLnNldFN0YXRlKHsgcGFsbVRlbXBsYXRlOiAnMTIzJyB9KX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFsbVRlbXBsYXRlICYmIChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJTZXQgUGFsbVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soJ293bmVyJywgMTAsIHtcbiAgICAgICAgICAgICAgICAgIHBhbG1JdGVtOiB7IHBhbG1UZW1wbGF0ZSB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd1wiPkhvdyBkb2VzIHRoaXMgd29yaz88L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySG93KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy1jb250YWluZXJcIj5cbiAgICAgICAgPEhvd1N2ZyBsb2dpbk1ldGhvZD1cInBhbG1cIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1leGNlcnB0XCI+XG4gICAgICAgICAgUGFsbSByZWNvZ25pdGlvbiBpcyBhIHRlY2hub2xvZ3kgdGhhdCByZWNvcmRzIHlvdXIgdW5pcXVlIHBhbG0gcHJpbnRcbiAgICAgICAgICBhbmQgdXRpbGl6ZXMgaXQgdG8gbG9naW4gdG8geW91ciBhY2NvdW50IHVzaW5nIHlvdXIgZGV2aWNlJ3MgY2FtZXJhLnsnICd9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8UGFsbUV4YW1wbGVTdmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0Rpc3BsYXlIb3cgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHJldHVybiAhaXNEaXNwbGF5SG93ID8gdGhpcy5yZW5kZXJQYWxtQ2FyZCgpIDogdGhpcy5yZW5kZXJIb3coKTtcbiAgfVxufVxuIl19