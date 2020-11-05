"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../../svg/GoBackSvg"));
var _PasswordSvg = _interopRequireDefault(require("../../../svg/PasswordSvg"));
var _OptionSvg = _interopRequireDefault(require("../../../svg/OptionSvg"));
var _animationUtil = require("../../../../util/animation-util");



if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/6a28855f0c46ba094516b0828df5b179.scss"));
}

class OwnerPasswordQ extends _react.Component {





  constructor(props) {
    super(props);
    const { forgetsPassword } = props.questions;
    const selectedOption = forgetsPassword ? forgetsPassword : undefined;
    this.state = {
      options: ["forgetPasswordOften", "forgetPasswordRarely"],
      selectedOption };

  }

  componentDidMount() {
    (0, _browserUtil.handleIOSBrowser)();
    (0, _animationUtil.animateIn)(this.refs.section);
  }

  render() {
    const { options, selectedOption } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("div", {
        ref: "section",
        id: "section-4-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "How often do you forget your passwords and have to reset them?")), /*#__PURE__*/



      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement(_PasswordSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "options" },
      options.map(option => {
        const svgType = option === options[0] ? "meh" : "smiley";
        return /*#__PURE__*/(
          _react.default.createElement(_OptionSvg.default, {
            key: option,
            svgType: svgType,
            handleClick: () => {
              if (!this.props.position) {
                this.setState({ selectedOption: option });
              }
            },
            isSelected: selectedOption === option }));


      })), /*#__PURE__*/

      _react.default.createElement("div", { className: "section-container" }, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "button",
        value: "Next",
        onClick: () => {
          const q = this.props.questions;
          q.forgetsPassword = selectedOption;
          this.props.handleGoForward("owner", 5, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack("owner", 4) }))));




  }}exports.default = OwnerPasswordQ;(0, _defineProperty2.default)(OwnerPasswordQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJQYXNzd29yZFEuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJQYXNzd29yZFEiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZm9yZ2V0c1Bhc3N3b3JkIiwicXVlc3Rpb25zIiwic2VsZWN0ZWRPcHRpb24iLCJ1bmRlZmluZWQiLCJzdGF0ZSIsIm9wdGlvbnMiLCJjb21wb25lbnREaWRNb3VudCIsInJlZnMiLCJzZWN0aW9uIiwicmVuZGVyIiwicG9zaXRpb24iLCJtYXAiLCJvcHRpb24iLCJzdmdUeXBlIiwic2V0U3RhdGUiLCJ3aWR0aCIsInEiLCJoYW5kbGVHb0ZvcndhcmQiLCJoYW5kbGVHb0JhY2siXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFYyxNQUFNQyxjQUFOLFNBQTZCQyxnQkFBN0IsQ0FBdUM7Ozs7OztBQU1wREMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFVBQU0sRUFBRUMsZUFBRixLQUFzQkQsS0FBSyxDQUFDRSxTQUFsQztBQUNBLFVBQU1DLGNBQWMsR0FBR0YsZUFBZSxHQUFHQSxlQUFILEdBQXFCRyxTQUEzRDtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxxQkFBRCxFQUF3QixzQkFBeEIsQ0FERTtBQUVYSCxNQUFBQSxjQUZXLEVBQWI7O0FBSUQ7O0FBRURJLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCO0FBQ0Esa0NBQVUsS0FBS0MsSUFBTCxDQUFVQyxPQUFwQjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUVKLE9BQUYsRUFBV0gsY0FBWCxLQUE4QixFQUFFLEdBQUcsS0FBS0UsS0FBVixFQUFwQztBQUNBO0FBQ0U7QUFDRSxRQUFBLEdBQUcsRUFBQyxTQUROO0FBRUUsUUFBQSxFQUFFLEVBQUMsaUJBRkw7QUFHRSxRQUFBLFNBQVMsRUFBRSx3Q0FBb0IsS0FBS0wsS0FBTCxDQUFXVyxRQUEvQixDQUhiOztBQUtFLDRDQUFLLFNBQVMsRUFBQyxrQkFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxPQUFmLHFCQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFVBQWYseUJBRkY7QUFHRSw0Q0FBSyxTQUFTLEVBQUMsYUFBZjtBQUNFO0FBQ0UsNENBQUssU0FBUyxFQUFDLFlBQWYscUVBREYsQ0FERjs7OztBQU1FO0FBQ0UsbUNBQUMsb0JBQUQsT0FERixDQU5GOztBQVNFLDRDQUFLLFNBQVMsRUFBQyxTQUFmO0FBQ0dMLE1BQUFBLE9BQU8sQ0FBQ00sR0FBUixDQUFhQyxNQUFELElBQVk7QUFDdkIsY0FBTUMsT0FBTyxHQUFHRCxNQUFNLEtBQUtQLE9BQU8sQ0FBQyxDQUFELENBQWxCLEdBQXdCLEtBQXhCLEdBQWdDLFFBQWhEO0FBQ0E7QUFDRSx1Q0FBQyxrQkFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFTyxNQURQO0FBRUUsWUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxZQUFBLFdBQVcsRUFBRSxNQUFNO0FBQ2pCLGtCQUFJLENBQUMsS0FBS2QsS0FBTCxDQUFXVyxRQUFoQixFQUEwQjtBQUN4QixxQkFBS0ksUUFBTCxDQUFjLEVBQUVaLGNBQWMsRUFBRVUsTUFBbEIsRUFBZDtBQUNEO0FBQ0YsYUFQSDtBQVFFLFlBQUEsVUFBVSxFQUFFVixjQUFjLEtBQUtVLE1BUmpDLEdBREY7OztBQVlELE9BZEEsQ0FESCxDQVRGOztBQTBCRSw0Q0FBSyxTQUFTLEVBQUMsbUJBQWY7QUFDRTtBQUNFLFFBQUEsS0FBSyxFQUFFLEVBQUVHLEtBQUssRUFBRSxPQUFULEVBRFQ7QUFFRSxRQUFBLElBQUksRUFBQyxRQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUMsTUFIUjtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQU07QUFDYixnQkFBTUMsQ0FBQyxHQUFHLEtBQUtqQixLQUFMLENBQVdFLFNBQXJCO0FBQ0FlLFVBQUFBLENBQUMsQ0FBQ2hCLGVBQUYsR0FBb0JFLGNBQXBCO0FBQ0EsZUFBS0gsS0FBTCxDQUFXa0IsZUFBWCxDQUEyQixPQUEzQixFQUFvQyxDQUFwQyxFQUF1QyxFQUFFaEIsU0FBUyxFQUFFZSxDQUFiLEVBQXZDO0FBQ0QsU0FSSDtBQVNFLFFBQUEsUUFBUSxFQUFFLENBQUNkLGNBVGIsR0FERixDQTFCRixDQUhGOzs7O0FBMkNFLG1DQUFDLGtCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLFFBQUEsTUFBTSxFQUFFLE1BQU0sS0FBS0gsS0FBTCxDQUFXbUIsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxDQUFqQyxDQUZoQixHQTNDRixDQUxGLENBREY7Ozs7O0FBd0RELEdBL0VtRCxDLCtEQUFqQ3RCLGMsa0JBQ0csRUFDcEJxQixlQUFlLEVBQUUsTUFBTSxDQUFFLENBREwsRUFFcEJDLFlBQVksRUFBRSxNQUFNLENBQUUsQ0FGRixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL2Jyb3dzZXItdXRpbFwiO1xuaW1wb3J0IEdvQmFja1N2ZyBmcm9tIFwiLi4vLi4vLi4vc3ZnL0dvQmFja1N2Z1wiO1xuaW1wb3J0IFBhc3N3b3JkU3ZnIGZyb20gXCIuLi8uLi8uLi9zdmcvUGFzc3dvcmRTdmdcIjtcbmltcG9ydCBPcHRpb25TdmcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9PcHRpb25TdmdcIjtcbmltcG9ydCB7XG4gIGFuaW1hdGVJbixcbiAgZ2V0U2VjdGlvbkNsYXNzTmFtZSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvYW5pbWF0aW9uLXV0aWxcIjtcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIGltcG9ydChcIi4vT3duZXJQYXNzd29yZFEuc2Nzc1wiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJQYXNzd29yZFEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZUdvRm9yd2FyZDogKCkgPT4ge30sXG4gICAgaGFuZGxlR29CYWNrOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IGZvcmdldHNQYXNzd29yZCB9ID0gcHJvcHMucXVlc3Rpb25zO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZm9yZ2V0c1Bhc3N3b3JkID8gZm9yZ2V0c1Bhc3N3b3JkIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcHRpb25zOiBbXCJmb3JnZXRQYXNzd29yZE9mdGVuXCIsIFwiZm9yZ2V0UGFzc3dvcmRSYXJlbHlcIl0sXG4gICAgICBzZWxlY3RlZE9wdGlvbixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaGFuZGxlSU9TQnJvd3NlcigpO1xuICAgIGFuaW1hdGVJbih0aGlzLnJlZnMuc2VjdGlvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBzZWxlY3RlZE9wdGlvbiB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPVwic2VjdGlvblwiXG4gICAgICAgIGlkPVwic2VjdGlvbi00LW93bmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtnZXRTZWN0aW9uQ2xhc3NOYW1lKHRoaXMucHJvcHMucG9zaXRpb24pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RG9jdW1lbnQgT3duZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+TW9yZSB3YXlzIHRvIGxvZ2luPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgSG93IG9mdGVuIGRvIHlvdSBmb3JnZXQgeW91ciBwYXNzd29yZHMgYW5kIGhhdmUgdG8gcmVzZXQgdGhlbT9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxQYXNzd29yZFN2ZyAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdmdUeXBlID0gb3B0aW9uID09PSBvcHRpb25zWzBdID8gXCJtZWhcIiA6IFwic21pbGV5XCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25TdmdcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgIHN2Z1R5cGU9e3N2Z1R5cGV9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb246IG9wdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9uID09PSBvcHRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIk5leHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnByb3BzLnF1ZXN0aW9ucztcbiAgICAgICAgICAgICAgICAgIHEuZm9yZ2V0c1Bhc3N3b3JkID0gc2VsZWN0ZWRPcHRpb247XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUdvRm9yd2FyZChcIm93bmVyXCIsIDUsIHsgcXVlc3Rpb25zOiBxIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICAgIGNvbG9yPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICBnb0JhY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKFwib3duZXJcIiwgNCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=