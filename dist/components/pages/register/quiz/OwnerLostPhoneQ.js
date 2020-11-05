"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../../svg/GoBackSvg"));
var _OptionSvg = _interopRequireDefault(require("../../../svg/OptionSvg"));

var _animationUtil = require("../../../../util/animation-util"); // import HasPhoneSvg from '../../../svg/HasPhoneSvg';



if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/5a356a68dc89c2db94c6f103f1e687f9.scss"));
}

class OwnerLostPhoneQ extends _react.Component {





  constructor(props) {
    super(props);
    const { lostPhone } = props.questions;
    const selectedOption = lostPhone ? lostPhone : undefined;
    this.state = {
      options: ["noPhone", "lostPhoneOnceOrMore", "lostPhoneNever"],
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
        id: "section-6-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "In the last five years, how many times have you permanently lost your phone?")), /*#__PURE__*/





      _react.default.createElement("div", { className: "options" },
      options.map((option, i) => {
        let svgType = i < 2 ? "meh-phone" : "smiley-phone";
        svgType = i < 1 ? "no-phone" : svgType;
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
          q.lostPhone = selectedOption;
          this.props.handleGoForward("owner", 7, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack("owner", 6) }))));




  }}exports.default = OwnerLostPhoneQ;(0, _defineProperty2.default)(OwnerLostPhoneQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJMb3N0UGhvbmVRLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIk93bmVyTG9zdFBob25lUSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJsb3N0UGhvbmUiLCJxdWVzdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInVuZGVmaW5lZCIsInN0YXRlIiwib3B0aW9ucyIsImNvbXBvbmVudERpZE1vdW50IiwicmVmcyIsInNlY3Rpb24iLCJyZW5kZXIiLCJwb3NpdGlvbiIsIm1hcCIsIm9wdGlvbiIsImkiLCJzdmdUeXBlIiwic2V0U3RhdGUiLCJ3aWR0aCIsInEiLCJoYW5kbGVHb0ZvcndhcmQiLCJoYW5kbGVHb0JhY2siXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRSxDQURBOzs7O0FBS0EsSUFBSUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRWMsTUFBTUMsZUFBTixTQUE4QkMsZ0JBQTlCLENBQXdDOzs7Ozs7QUFNckRDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxVQUFNLEVBQUVDLFNBQUYsS0FBZ0JELEtBQUssQ0FBQ0UsU0FBNUI7QUFDQSxVQUFNQyxjQUFjLEdBQUdGLFNBQVMsR0FBR0EsU0FBSCxHQUFlRyxTQUEvQztBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVkscUJBQVosRUFBbUMsZ0JBQW5DLENBREU7QUFFWEgsTUFBQUEsY0FGVyxFQUFiOztBQUlEOztBQUVESSxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQjtBQUNBLGtDQUFVLEtBQUtDLElBQUwsQ0FBVUMsT0FBcEI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTSxFQUFFSixPQUFGLEVBQVdILGNBQVgsS0FBOEIsRUFBRSxHQUFHLEtBQUtFLEtBQVYsRUFBcEM7QUFDQTtBQUNFO0FBQ0UsUUFBQSxHQUFHLEVBQUMsU0FETjtBQUVFLFFBQUEsRUFBRSxFQUFDLGlCQUZMO0FBR0UsUUFBQSxTQUFTLEVBQUUsd0NBQW9CLEtBQUtMLEtBQUwsQ0FBV1csUUFBL0IsQ0FIYjs7QUFLRSw0Q0FBSyxTQUFTLEVBQUMsa0JBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsT0FBZixxQkFERjtBQUVFLDRDQUFLLFNBQVMsRUFBQyxVQUFmLHlCQUZGO0FBR0UsNENBQUssU0FBUyxFQUFDLGFBQWY7QUFDRTtBQUNFLDRDQUFLLFNBQVMsRUFBQyxZQUFmLG1GQURGLENBREY7Ozs7OztBQVFFLDRDQUFLLFNBQVMsRUFBQyxTQUFmO0FBQ0dMLE1BQUFBLE9BQU8sQ0FBQ00sR0FBUixDQUFZLENBQUNDLE1BQUQsRUFBU0MsQ0FBVCxLQUFlO0FBQzFCLFlBQUlDLE9BQU8sR0FBR0QsQ0FBQyxHQUFHLENBQUosR0FBUSxXQUFSLEdBQXNCLGNBQXBDO0FBQ0FDLFFBQUFBLE9BQU8sR0FBR0QsQ0FBQyxHQUFHLENBQUosR0FBUSxVQUFSLEdBQXFCQyxPQUEvQjtBQUNBO0FBQ0UsdUNBQUMsa0JBQUQ7QUFDRSxZQUFBLEdBQUcsRUFBRUYsTUFEUDtBQUVFLFlBQUEsT0FBTyxFQUFFRSxPQUZYO0FBR0UsWUFBQSxXQUFXLEVBQUUsTUFBTTtBQUNqQixrQkFBSSxDQUFDLEtBQUtmLEtBQUwsQ0FBV1csUUFBaEIsRUFBMEI7QUFDeEIscUJBQUtLLFFBQUwsQ0FBYyxFQUFFYixjQUFjLEVBQUVVLE1BQWxCLEVBQWQ7QUFDRDtBQUNGLGFBUEg7QUFRRSxZQUFBLFVBQVUsRUFBRVYsY0FBYyxLQUFLVSxNQVJqQyxHQURGOzs7QUFZRCxPQWZBLENBREgsQ0FSRjs7QUEwQkUsNENBQUssU0FBUyxFQUFDLG1CQUFmO0FBQ0U7QUFDRSxRQUFBLEtBQUssRUFBRSxFQUFFSSxLQUFLLEVBQUUsT0FBVCxFQURUO0FBRUUsUUFBQSxJQUFJLEVBQUMsUUFGUDtBQUdFLFFBQUEsS0FBSyxFQUFDLE1BSFI7QUFJRSxRQUFBLE9BQU8sRUFBRSxNQUFNO0FBQ2IsZ0JBQU1DLENBQUMsR0FBRyxLQUFLbEIsS0FBTCxDQUFXRSxTQUFyQjtBQUNBZ0IsVUFBQUEsQ0FBQyxDQUFDakIsU0FBRixHQUFjRSxjQUFkO0FBQ0EsZUFBS0gsS0FBTCxDQUFXbUIsZUFBWCxDQUEyQixPQUEzQixFQUFvQyxDQUFwQyxFQUF1QyxFQUFFakIsU0FBUyxFQUFFZ0IsQ0FBYixFQUF2QztBQUNELFNBUkg7QUFTRSxRQUFBLFFBQVEsRUFBRSxDQUFDZixjQVRiLEdBREYsQ0ExQkYsQ0FIRjs7OztBQTJDRSxtQ0FBQyxrQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFBLE1BQU0sRUFBRSxNQUFNLEtBQUtILEtBQUwsQ0FBV29CLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsQ0FBakMsQ0FGaEIsR0EzQ0YsQ0FMRixDQURGOzs7OztBQXdERCxHQS9Fb0QsQyxnRUFBbEN2QixlLGtCQUNHLEVBQ3BCc0IsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCQyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGhhbmRsZUlPU0Jyb3dzZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9icm93c2VyLXV0aWxcIjtcbmltcG9ydCBHb0JhY2tTdmcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9Hb0JhY2tTdmdcIjtcbmltcG9ydCBPcHRpb25TdmcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9PcHRpb25TdmdcIjtcbi8vIGltcG9ydCBIYXNQaG9uZVN2ZyBmcm9tICcuLi8uLi8uLi9zdmcvSGFzUGhvbmVTdmcnO1xuaW1wb3J0IHtcbiAgYW5pbWF0ZUluLFxuICBnZXRTZWN0aW9uQ2xhc3NOYW1lLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9hbmltYXRpb24tdXRpbFwiO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KFwiLi9Pd25lckxvc3RQaG9uZVEuc2Nzc1wiKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJMb3N0UGhvbmVRIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVHb0ZvcndhcmQ6ICgpID0+IHt9LFxuICAgIGhhbmRsZUdvQmFjazogKCkgPT4ge30sXG4gIH07XG5cbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgY29uc3QgeyBsb3N0UGhvbmUgfSA9IHByb3BzLnF1ZXN0aW9ucztcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGxvc3RQaG9uZSA/IGxvc3RQaG9uZSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3B0aW9uczogW1wibm9QaG9uZVwiLCBcImxvc3RQaG9uZU9uY2VPck1vcmVcIiwgXCJsb3N0UGhvbmVOZXZlclwiXSxcbiAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBoYW5kbGVJT1NCcm93c2VyKCk7XG4gICAgYW5pbWF0ZUluKHRoaXMucmVmcy5zZWN0aW9uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9XCJzZWN0aW9uXCJcbiAgICAgICAgaWQ9XCJzZWN0aW9uLTYtb3duZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2dldFNlY3Rpb25DbGFzc05hbWUodGhpcy5wcm9wcy5wb3NpdGlvbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2N1bWVudCBPd25lcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Nb3JlIHdheXMgdG8gbG9naW48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBJbiB0aGUgbGFzdCBmaXZlIHllYXJzLCBob3cgbWFueSB0aW1lcyBoYXZlIHlvdSBwZXJtYW5lbnRseSBsb3N0XG4gICAgICAgICAgICAgICAgeW91ciBwaG9uZT9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8SGFzUGhvbmVTdmcgLz4gKi99XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24sIGkpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgc3ZnVHlwZSA9IGkgPCAyID8gXCJtZWgtcGhvbmVcIiA6IFwic21pbGV5LXBob25lXCI7XG4gICAgICAgICAgICAgICAgc3ZnVHlwZSA9IGkgPCAxID8gXCJuby1waG9uZVwiIDogc3ZnVHlwZTtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPE9wdGlvblN2Z1xuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc3ZnVHlwZT17c3ZnVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE9wdGlvbjogb3B0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWRPcHRpb24gPT09IG9wdGlvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiTmV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcSA9IHRoaXMucHJvcHMucXVlc3Rpb25zO1xuICAgICAgICAgICAgICAgICAgcS5sb3N0UGhvbmUgPSBzZWxlY3RlZE9wdGlvbjtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlR29Gb3J3YXJkKFwib3duZXJcIiwgNywgeyBxdWVzdGlvbnM6IHEgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soXCJvd25lclwiLCA2KX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==