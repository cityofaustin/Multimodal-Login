"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../../svg/GoBackSvg"));
var _OptionSvg = _interopRequireDefault(require("../../../svg/OptionSvg"));
var _PalmInfoSvg = _interopRequireDefault(require("../../../svg/PalmInfoSvg"));
var _animationUtil = require("../../../../util/animation-util");



if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/a7420b6dda4268a3ce7f31afe479a6a2.scss"));
}

class OwnerPalmQ extends _react.Component {






  constructor(props) {
    super(props);
    const { scanningPalm } = props.questions;
    const selectedOption = scanningPalm ? scanningPalm : undefined;
    this.state = {
      options: ["palmNotComfortable", "palmComfortable"],
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
        id: "section-7-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "How comfortable are you using your camera to scan your palm?")), /*#__PURE__*/



      _react.default.createElement(_PalmInfoSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", { className: "options" },
      options.map(option => {
        const svgType =
        option === options[0] ? "meh-palm" : "smiley-palm";
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
          q.scanningPalm = selectedOption;
          this.props.handleGoForward("owner", 8, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack("owner", 7) }))));




  }}exports.default = OwnerPalmQ;(0, _defineProperty2.default)(OwnerPalmQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {}, displayNone: false });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJQYWxtUS5qc3giXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJPd25lclBhbG1RIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNjYW5uaW5nUGFsbSIsInF1ZXN0aW9ucyIsInNlbGVjdGVkT3B0aW9uIiwidW5kZWZpbmVkIiwic3RhdGUiLCJvcHRpb25zIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZWZzIiwic2VjdGlvbiIsInJlbmRlciIsInBvc2l0aW9uIiwibWFwIiwib3B0aW9uIiwic3ZnVHlwZSIsInNldFN0YXRlIiwid2lkdGgiLCJxIiwiaGFuZGxlR29Gb3J3YXJkIiwiaGFuZGxlR29CYWNrIiwiZGlzcGxheU5vbmUiXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFYyxNQUFNQyxVQUFOLFNBQXlCQyxnQkFBekIsQ0FBbUM7Ozs7Ozs7QUFPaERDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxVQUFNLEVBQUVDLFlBQUYsS0FBbUJELEtBQUssQ0FBQ0UsU0FBL0I7QUFDQSxVQUFNQyxjQUFjLEdBQUdGLFlBQVksR0FBR0EsWUFBSCxHQUFrQkcsU0FBckQ7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLENBQUMsb0JBQUQsRUFBdUIsaUJBQXZCLENBREU7QUFFWEgsTUFBQUEsY0FGVyxFQUFiOztBQUlEOztBQUVESSxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQjtBQUNBLGtDQUFVLEtBQUtDLElBQUwsQ0FBVUMsT0FBcEI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTSxFQUFFSixPQUFGLEVBQVdILGNBQVgsS0FBOEIsRUFBRSxHQUFHLEtBQUtFLEtBQVYsRUFBcEM7QUFDQTtBQUNFO0FBQ0UsUUFBQSxHQUFHLEVBQUMsU0FETjtBQUVFLFFBQUEsRUFBRSxFQUFDLGlCQUZMO0FBR0UsUUFBQSxTQUFTLEVBQUUsd0NBQW9CLEtBQUtMLEtBQUwsQ0FBV1csUUFBL0IsQ0FIYjs7QUFLRSw0Q0FBSyxTQUFTLEVBQUMsa0JBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsT0FBZixxQkFERjtBQUVFLDRDQUFLLFNBQVMsRUFBQyxVQUFmLHlCQUZGO0FBR0UsNENBQUssU0FBUyxFQUFDLGFBQWY7QUFDRTtBQUNFLDRDQUFLLFNBQVMsRUFBQyxZQUFmLG1FQURGLENBREY7Ozs7QUFNRSxtQ0FBQyxvQkFBRCxPQU5GO0FBT0UsNENBQUssU0FBUyxFQUFDLFNBQWY7QUFDR0wsTUFBQUEsT0FBTyxDQUFDTSxHQUFSLENBQWFDLE1BQUQsSUFBWTtBQUN2QixjQUFNQyxPQUFPO0FBQ1hELFFBQUFBLE1BQU0sS0FBS1AsT0FBTyxDQUFDLENBQUQsQ0FBbEIsR0FBd0IsVUFBeEIsR0FBcUMsYUFEdkM7QUFFQTtBQUNFLHVDQUFDLGtCQUFEO0FBQ0UsWUFBQSxHQUFHLEVBQUVPLE1BRFA7QUFFRSxZQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLFlBQUEsV0FBVyxFQUFFLE1BQU07QUFDakIsa0JBQUksQ0FBQyxLQUFLZCxLQUFMLENBQVdXLFFBQWhCLEVBQTBCO0FBQ3hCLHFCQUFLSSxRQUFMLENBQWMsRUFBRVosY0FBYyxFQUFFVSxNQUFsQixFQUFkO0FBQ0Q7QUFDRixhQVBIO0FBUUUsWUFBQSxVQUFVLEVBQUVWLGNBQWMsS0FBS1UsTUFSakMsR0FERjs7O0FBWUQsT0FmQSxDQURILENBUEY7O0FBeUJFLDRDQUFLLFNBQVMsRUFBQyxtQkFBZjtBQUNFO0FBQ0UsUUFBQSxLQUFLLEVBQUUsRUFBRUcsS0FBSyxFQUFFLE9BQVQsRUFEVDtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLEtBQUssRUFBQyxNQUhSO0FBSUUsUUFBQSxPQUFPLEVBQUUsTUFBTTtBQUNiLGdCQUFNQyxDQUFDLEdBQUcsS0FBS2pCLEtBQUwsQ0FBV0UsU0FBckI7QUFDQWUsVUFBQUEsQ0FBQyxDQUFDaEIsWUFBRixHQUFpQkUsY0FBakI7QUFDQSxlQUFLSCxLQUFMLENBQVdrQixlQUFYLENBQTJCLE9BQTNCLEVBQW9DLENBQXBDLEVBQXVDLEVBQUVoQixTQUFTLEVBQUVlLENBQWIsRUFBdkM7QUFDRCxTQVJIO0FBU0UsUUFBQSxRQUFRLEVBQUUsQ0FBQ2QsY0FUYixHQURGLENBekJGLENBSEY7Ozs7QUEwQ0UsbUNBQUMsa0JBQUQ7QUFDRSxRQUFBLEtBQUssRUFBQyxTQURSO0FBRUUsUUFBQSxNQUFNLEVBQUUsTUFBTSxLQUFLSCxLQUFMLENBQVdtQixZQUFYLENBQXdCLE9BQXhCLEVBQWlDLENBQWpDLENBRmhCLEdBMUNGLENBTEYsQ0FERjs7Ozs7QUF1REQsR0EvRStDLEMsMkRBQTdCdEIsVSxrQkFDRyxFQUNwQnFCLGVBQWUsRUFBRSxNQUFNLENBQUUsQ0FETCxFQUVwQkMsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUZGLEVBR3BCQyxXQUFXLEVBQUUsS0FITyxFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gXCIuLi8uLi8uLi8uLi91dGlsL2Jyb3dzZXItdXRpbFwiO1xuaW1wb3J0IEdvQmFja1N2ZyBmcm9tIFwiLi4vLi4vLi4vc3ZnL0dvQmFja1N2Z1wiO1xuaW1wb3J0IE9wdGlvblN2ZyBmcm9tIFwiLi4vLi4vLi4vc3ZnL09wdGlvblN2Z1wiO1xuaW1wb3J0IFBhbG1JbmZvU3ZnIGZyb20gXCIuLi8uLi8uLi9zdmcvUGFsbUluZm9TdmdcIjtcbmltcG9ydCB7XG4gIGFuaW1hdGVJbixcbiAgZ2V0U2VjdGlvbkNsYXNzTmFtZSxcbn0gZnJvbSBcIi4uLy4uLy4uLy4uL3V0aWwvYW5pbWF0aW9uLXV0aWxcIjtcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIGltcG9ydChcIi4vT3duZXJQYWxtUS5zY3NzXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lclBhbG1RIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVHb0ZvcndhcmQ6ICgpID0+IHt9LFxuICAgIGhhbmRsZUdvQmFjazogKCkgPT4ge30sXG4gICAgZGlzcGxheU5vbmU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc2Nhbm5pbmdQYWxtIH0gPSBwcm9wcy5xdWVzdGlvbnM7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBzY2FubmluZ1BhbG0gPyBzY2FubmluZ1BhbG0gOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wdGlvbnM6IFtcInBhbG1Ob3RDb21mb3J0YWJsZVwiLCBcInBhbG1Db21mb3J0YWJsZVwiXSxcbiAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBoYW5kbGVJT1NCcm93c2VyKCk7XG4gICAgYW5pbWF0ZUluKHRoaXMucmVmcy5zZWN0aW9uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9XCJzZWN0aW9uXCJcbiAgICAgICAgaWQ9XCJzZWN0aW9uLTctb3duZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2dldFNlY3Rpb25DbGFzc05hbWUodGhpcy5wcm9wcy5wb3NpdGlvbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2N1bWVudCBPd25lcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Nb3JlIHdheXMgdG8gbG9naW48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBIb3cgY29tZm9ydGFibGUgYXJlIHlvdSB1c2luZyB5b3VyIGNhbWVyYSB0byBzY2FuIHlvdXIgcGFsbT9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQYWxtSW5mb1N2ZyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnVHlwZSA9XG4gICAgICAgICAgICAgICAgICBvcHRpb24gPT09IG9wdGlvbnNbMF0gPyBcIm1laC1wYWxtXCIgOiBcInNtaWxleS1wYWxtXCI7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25TdmdcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgIHN2Z1R5cGU9e3N2Z1R5cGV9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnByb3BzLnBvc2l0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb246IG9wdGlvbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9uID09PSBvcHRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIk5leHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnByb3BzLnF1ZXN0aW9ucztcbiAgICAgICAgICAgICAgICAgIHEuc2Nhbm5pbmdQYWxtID0gc2VsZWN0ZWRPcHRpb247XG4gICAgICAgICAgICAgICAgICB0aGlzLnByb3BzLmhhbmRsZUdvRm9yd2FyZChcIm93bmVyXCIsIDgsIHsgcXVlc3Rpb25zOiBxIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICAgIGNvbG9yPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICBnb0JhY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKFwib3duZXJcIiwgNyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=