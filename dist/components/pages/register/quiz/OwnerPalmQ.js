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
      options: ['palmNotComfortable', 'palmComfortable'],
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
        option === options[0] ? 'meh-palm' : 'smiley-palm';
        return /*#__PURE__*/(
          _react.default.createElement(_OptionSvg.default, {
            key: option,
            svgType: svgType,
            handleClick: () =>
            this.setState({ selectedOption: option }),

            isSelected: selectedOption === option }));


      })), /*#__PURE__*/

      _react.default.createElement("div", { className: "section-container" }, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: '210px' },
        type: "button",
        value: "Next",
        onClick: () => {
          const q = this.props.questions;
          q.scanningPalm = selectedOption;
          this.props.handleGoForward('owner', 8, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack('owner', 7) }))));




  }}exports.default = OwnerPalmQ;(0, _defineProperty2.default)(OwnerPalmQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {}, displayNone: false });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJQYWxtUS5qc3giXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJPd25lclBhbG1RIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInNjYW5uaW5nUGFsbSIsInF1ZXN0aW9ucyIsInNlbGVjdGVkT3B0aW9uIiwidW5kZWZpbmVkIiwic3RhdGUiLCJvcHRpb25zIiwiY29tcG9uZW50RGlkTW91bnQiLCJyZWZzIiwic2VjdGlvbiIsInJlbmRlciIsInBvc2l0aW9uIiwibWFwIiwib3B0aW9uIiwic3ZnVHlwZSIsInNldFN0YXRlIiwid2lkdGgiLCJxIiwiaGFuZGxlR29Gb3J3YXJkIiwiaGFuZGxlR29CYWNrIiwiZGlzcGxheU5vbmUiXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFYyxNQUFNQyxVQUFOLFNBQXlCQyxnQkFBekIsQ0FBbUM7Ozs7Ozs7QUFPaERDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxVQUFNLEVBQUVDLFlBQUYsS0FBbUJELEtBQUssQ0FBQ0UsU0FBL0I7QUFDQSxVQUFNQyxjQUFjLEdBQUdGLFlBQVksR0FBR0EsWUFBSCxHQUFrQkcsU0FBckQ7QUFDQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLENBQUMsb0JBQUQsRUFBdUIsaUJBQXZCLENBREU7QUFFWEgsTUFBQUEsY0FGVyxFQUFiOztBQUlEOztBQUVESSxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQjtBQUNBLGtDQUFVLEtBQUtDLElBQUwsQ0FBVUMsT0FBcEI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTSxFQUFFSixPQUFGLEVBQVdILGNBQVgsS0FBOEIsRUFBRSxHQUFHLEtBQUtFLEtBQVYsRUFBcEM7QUFDQTtBQUNFO0FBQ0UsUUFBQSxHQUFHLEVBQUMsU0FETjtBQUVFLFFBQUEsRUFBRSxFQUFDLGlCQUZMO0FBR0UsUUFBQSxTQUFTLEVBQUUsd0NBQW9CLEtBQUtMLEtBQUwsQ0FBV1csUUFBL0IsQ0FIYjs7QUFLRSw0Q0FBSyxTQUFTLEVBQUMsa0JBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsT0FBZixxQkFERjtBQUVFLDRDQUFLLFNBQVMsRUFBQyxVQUFmLHlCQUZGO0FBR0UsNENBQUssU0FBUyxFQUFDLGFBQWY7QUFDRTtBQUNFLDRDQUFLLFNBQVMsRUFBQyxZQUFmLG1FQURGLENBREY7Ozs7QUFNRSxtQ0FBQyxvQkFBRCxPQU5GO0FBT0UsNENBQUssU0FBUyxFQUFDLFNBQWY7QUFDR0wsTUFBQUEsT0FBTyxDQUFDTSxHQUFSLENBQWFDLE1BQUQsSUFBWTtBQUN2QixjQUFNQyxPQUFPO0FBQ1hELFFBQUFBLE1BQU0sS0FBS1AsT0FBTyxDQUFDLENBQUQsQ0FBbEIsR0FBd0IsVUFBeEIsR0FBcUMsYUFEdkM7QUFFQTtBQUNFLHVDQUFDLGtCQUFEO0FBQ0UsWUFBQSxHQUFHLEVBQUVPLE1BRFA7QUFFRSxZQUFBLE9BQU8sRUFBRUMsT0FGWDtBQUdFLFlBQUEsV0FBVyxFQUFFO0FBQ1gsaUJBQUtDLFFBQUwsQ0FBYyxFQUFFWixjQUFjLEVBQUVVLE1BQWxCLEVBQWQsQ0FKSjs7QUFNRSxZQUFBLFVBQVUsRUFBRVYsY0FBYyxLQUFLVSxNQU5qQyxHQURGOzs7QUFVRCxPQWJBLENBREgsQ0FQRjs7QUF1QkUsNENBQUssU0FBUyxFQUFDLG1CQUFmO0FBQ0U7QUFDRSxRQUFBLEtBQUssRUFBRSxFQUFFRyxLQUFLLEVBQUUsT0FBVCxFQURUO0FBRUUsUUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUEsS0FBSyxFQUFDLE1BSFI7QUFJRSxRQUFBLE9BQU8sRUFBRSxNQUFNO0FBQ2IsZ0JBQU1DLENBQUMsR0FBRyxLQUFLakIsS0FBTCxDQUFXRSxTQUFyQjtBQUNBZSxVQUFBQSxDQUFDLENBQUNoQixZQUFGLEdBQWlCRSxjQUFqQjtBQUNBLGVBQUtILEtBQUwsQ0FBV2tCLGVBQVgsQ0FBMkIsT0FBM0IsRUFBb0MsQ0FBcEMsRUFBdUMsRUFBRWhCLFNBQVMsRUFBRWUsQ0FBYixFQUF2QztBQUNELFNBUkg7QUFTRSxRQUFBLFFBQVEsRUFBRSxDQUFDZCxjQVRiLEdBREYsQ0F2QkYsQ0FIRjs7OztBQXdDRSxtQ0FBQyxrQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFBLE1BQU0sRUFBRSxNQUFNLEtBQUtILEtBQUwsQ0FBV21CLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsQ0FBakMsQ0FGaEIsR0F4Q0YsQ0FMRixDQURGOzs7OztBQXFERCxHQTdFK0MsQywyREFBN0J0QixVLGtCQUNHLEVBQ3BCcUIsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCQyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRUFHcEJDLFdBQVcsRUFBRSxLQUhPLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYnJvd3Nlci11dGlsJztcbmltcG9ydCBHb0JhY2tTdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL0dvQmFja1N2Zyc7XG5pbXBvcnQgT3B0aW9uU3ZnIGZyb20gJy4uLy4uLy4uL3N2Zy9PcHRpb25TdmcnO1xuaW1wb3J0IFBhbG1JbmZvU3ZnIGZyb20gJy4uLy4uLy4uL3N2Zy9QYWxtSW5mb1N2Zyc7XG5pbXBvcnQge1xuICBhbmltYXRlSW4sXG4gIGdldFNlY3Rpb25DbGFzc05hbWUsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYW5pbWF0aW9uLXV0aWwnO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KCcuL093bmVyUGFsbVEuc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lclBhbG1RIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVHb0ZvcndhcmQ6ICgpID0+IHt9LFxuICAgIGhhbmRsZUdvQmFjazogKCkgPT4ge30sXG4gICAgZGlzcGxheU5vbmU6IGZhbHNlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgc2Nhbm5pbmdQYWxtIH0gPSBwcm9wcy5xdWVzdGlvbnM7XG4gICAgY29uc3Qgc2VsZWN0ZWRPcHRpb24gPSBzY2FubmluZ1BhbG0gPyBzY2FubmluZ1BhbG0gOiB1bmRlZmluZWQ7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIG9wdGlvbnM6IFsncGFsbU5vdENvbWZvcnRhYmxlJywgJ3BhbG1Db21mb3J0YWJsZSddLFxuICAgICAgc2VsZWN0ZWRPcHRpb24sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGhhbmRsZUlPU0Jyb3dzZXIoKTtcbiAgICBhbmltYXRlSW4odGhpcy5yZWZzLnNlY3Rpb24pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgc2VsZWN0ZWRPcHRpb24gfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cInNlY3Rpb25cIlxuICAgICAgICBpZD1cInNlY3Rpb24tNy1vd25lclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2VjdGlvbkNsYXNzTmFtZSh0aGlzLnByb3BzLnBvc2l0aW9uKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvY3VtZW50IE93bmVyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPk1vcmUgd2F5cyB0byBsb2dpbjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBvd25lcjFcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIEhvdyBjb21mb3J0YWJsZSBhcmUgeW91IHVzaW5nIHlvdXIgY2FtZXJhIHRvIHNjYW4geW91ciBwYWxtP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPFBhbG1JbmZvU3ZnIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdmdUeXBlID1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbiA9PT0gb3B0aW9uc1swXSA/ICdtZWgtcGFsbScgOiAnc21pbGV5LXBhbG0nO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uU3ZnXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICBzdmdUeXBlPXtzdmdUeXBlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb246IG9wdGlvbiB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9uID09PSBvcHRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjEwcHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJOZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBxID0gdGhpcy5wcm9wcy5xdWVzdGlvbnM7XG4gICAgICAgICAgICAgICAgICBxLnNjYW5uaW5nUGFsbSA9IHNlbGVjdGVkT3B0aW9uO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVHb0ZvcndhcmQoJ293bmVyJywgOCwgeyBxdWVzdGlvbnM6IHEgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soJ293bmVyJywgNyl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=