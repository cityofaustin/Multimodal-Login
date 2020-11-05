"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _browserUtil = require("../../../../util/browser-util");
var _GoBackSvg = _interopRequireDefault(require("../../../svg/GoBackSvg"));
var _OptionSvg = _interopRequireDefault(require("../../../svg/OptionSvg"));
var _SecurityQuestionSvg = _interopRequireDefault(require("../../../svg/SecurityQuestionSvg"));
var _animationUtil = require("../../../../util/animation-util");



if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/205281f064c3a6ed9951f97f686f260c.scss"));
}

class OwnerSecurityQ extends _react.Component {





  constructor(props) {
    super(props);
    const { answeringSecurityQuestions } = props.questions;
    const selectedOption = answeringSecurityQuestions ?
    answeringSecurityQuestions :
    undefined;
    this.state = {
      options: ["securityNotGood", "securityGood"],
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
        id: "section-8-owner",
        className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "More ways to login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "How good are you at answering security questions?"), /*#__PURE__*/


      _react.default.createElement("div", { className: "card-subtitle" }, "Example: \"What's your mother's maiden name?")), /*#__PURE__*/



      _react.default.createElement(_SecurityQuestionSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", { className: "options" },
      options.map(option => {
        const svgType =
        option === options[0] ? "meh-security" : "smiley-security";
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
          q.answeringSecurityQuestions = selectedOption;
          this.props.handleGoForward("owner", 9, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack("owner", 8) }))));




  }}exports.default = OwnerSecurityQ;(0, _defineProperty2.default)(OwnerSecurityQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJTZWN1cml0eVEuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJTZWN1cml0eVEiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnMiLCJxdWVzdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInVuZGVmaW5lZCIsInN0YXRlIiwib3B0aW9ucyIsImNvbXBvbmVudERpZE1vdW50IiwicmVmcyIsInNlY3Rpb24iLCJyZW5kZXIiLCJwb3NpdGlvbiIsIm1hcCIsIm9wdGlvbiIsInN2Z1R5cGUiLCJzZXRTdGF0ZSIsIndpZHRoIiwicSIsImhhbmRsZUdvRm9yd2FyZCIsImhhbmRsZUdvQmFjayJdLCJtYXBwaW5ncyI6ImllQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEOztBQUVjLE1BQU1DLGNBQU4sU0FBNkJDLGdCQUE3QixDQUF1Qzs7Ozs7O0FBTXBEQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsVUFBTSxFQUFFQywwQkFBRixLQUFpQ0QsS0FBSyxDQUFDRSxTQUE3QztBQUNBLFVBQU1DLGNBQWMsR0FBR0YsMEJBQTBCO0FBQzdDQSxJQUFBQSwwQkFENkM7QUFFN0NHLElBQUFBLFNBRko7QUFHQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLENBQUMsaUJBQUQsRUFBb0IsY0FBcEIsQ0FERTtBQUVYSCxNQUFBQSxjQUZXLEVBQWI7O0FBSUQ7O0FBRURJLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCO0FBQ0Esa0NBQVUsS0FBS0MsSUFBTCxDQUFVQyxPQUFwQjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUVKLE9BQUYsRUFBV0gsY0FBWCxLQUE4QixFQUFFLEdBQUcsS0FBS0UsS0FBVixFQUFwQztBQUNBO0FBQ0U7QUFDRSxRQUFBLEdBQUcsRUFBQyxTQUROO0FBRUUsUUFBQSxFQUFFLEVBQUMsaUJBRkw7QUFHRSxRQUFBLFNBQVMsRUFBRSx3Q0FBb0IsS0FBS0wsS0FBTCxDQUFXVyxRQUEvQixDQUhiOztBQUtFLDRDQUFLLFNBQVMsRUFBQyxrQkFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxPQUFmLHFCQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFVBQWYseUJBRkY7QUFHRSw0Q0FBSyxTQUFTLEVBQUMsYUFBZjtBQUNFO0FBQ0UsNENBQUssU0FBUyxFQUFDLFlBQWYsd0RBREY7OztBQUlFLDRDQUFLLFNBQVMsRUFBQyxlQUFmLG1EQUpGLENBREY7Ozs7QUFTRSxtQ0FBQyw0QkFBRCxPQVRGO0FBVUUsNENBQUssU0FBUyxFQUFDLFNBQWY7QUFDR0wsTUFBQUEsT0FBTyxDQUFDTSxHQUFSLENBQWFDLE1BQUQsSUFBWTtBQUN2QixjQUFNQyxPQUFPO0FBQ1hELFFBQUFBLE1BQU0sS0FBS1AsT0FBTyxDQUFDLENBQUQsQ0FBbEIsR0FBd0IsY0FBeEIsR0FBeUMsaUJBRDNDO0FBRUE7QUFDRSx1Q0FBQyxrQkFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFTyxNQURQO0FBRUUsWUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxZQUFBLFdBQVcsRUFBRSxNQUFNO0FBQ2pCLGtCQUFJLENBQUMsS0FBS2QsS0FBTCxDQUFXVyxRQUFoQixFQUEwQjtBQUN4QixxQkFBS0ksUUFBTCxDQUFjLEVBQUVaLGNBQWMsRUFBRVUsTUFBbEIsRUFBZDtBQUNEO0FBQ0YsYUFQSDtBQVFFLFlBQUEsVUFBVSxFQUFFVixjQUFjLEtBQUtVLE1BUmpDLEdBREY7OztBQVlELE9BZkEsQ0FESCxDQVZGOztBQTRCRSw0Q0FBSyxTQUFTLEVBQUMsbUJBQWY7QUFDRTtBQUNFLFFBQUEsS0FBSyxFQUFFLEVBQUVHLEtBQUssRUFBRSxPQUFULEVBRFQ7QUFFRSxRQUFBLElBQUksRUFBQyxRQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUMsTUFIUjtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQU07QUFDYixnQkFBTUMsQ0FBQyxHQUFHLEtBQUtqQixLQUFMLENBQVdFLFNBQXJCO0FBQ0FlLFVBQUFBLENBQUMsQ0FBQ2hCLDBCQUFGLEdBQStCRSxjQUEvQjtBQUNBLGVBQUtILEtBQUwsQ0FBV2tCLGVBQVgsQ0FBMkIsT0FBM0IsRUFBb0MsQ0FBcEMsRUFBdUMsRUFBRWhCLFNBQVMsRUFBRWUsQ0FBYixFQUF2QztBQUNELFNBUkg7QUFTRSxRQUFBLFFBQVEsRUFBRSxDQUFDZCxjQVRiLEdBREYsQ0E1QkYsQ0FIRjs7OztBQTZDRSxtQ0FBQyxrQkFBRDtBQUNFLFFBQUEsS0FBSyxFQUFDLFNBRFI7QUFFRSxRQUFBLE1BQU0sRUFBRSxNQUFNLEtBQUtILEtBQUwsQ0FBV21CLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsQ0FBakMsQ0FGaEIsR0E3Q0YsQ0FMRixDQURGOzs7OztBQTBERCxHQW5GbUQsQywrREFBakN0QixjLGtCQUNHLEVBQ3BCcUIsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCQyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IGhhbmRsZUlPU0Jyb3dzZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9icm93c2VyLXV0aWxcIjtcbmltcG9ydCBHb0JhY2tTdmcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9Hb0JhY2tTdmdcIjtcbmltcG9ydCBPcHRpb25TdmcgZnJvbSBcIi4uLy4uLy4uL3N2Zy9PcHRpb25TdmdcIjtcbmltcG9ydCBTZWN1cml0eVF1ZXN0aW9uU3ZnIGZyb20gXCIuLi8uLi8uLi9zdmcvU2VjdXJpdHlRdWVzdGlvblN2Z1wiO1xuaW1wb3J0IHtcbiAgYW5pbWF0ZUluLFxuICBnZXRTZWN0aW9uQ2xhc3NOYW1lLFxufSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9hbmltYXRpb24tdXRpbFwiO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KFwiLi9Pd25lclNlY3VyaXR5US5zY3NzXCIpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lclNlY3VyaXR5USBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlR29Gb3J3YXJkOiAoKSA9PiB7fSxcbiAgICBoYW5kbGVHb0JhY2s6ICgpID0+IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnMgfSA9IHByb3BzLnF1ZXN0aW9ucztcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zXG4gICAgICA/IGFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3B0aW9uczogW1wic2VjdXJpdHlOb3RHb29kXCIsIFwic2VjdXJpdHlHb29kXCJdLFxuICAgICAgc2VsZWN0ZWRPcHRpb24sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGhhbmRsZUlPU0Jyb3dzZXIoKTtcbiAgICBhbmltYXRlSW4odGhpcy5yZWZzLnNlY3Rpb24pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgc2VsZWN0ZWRPcHRpb24gfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cInNlY3Rpb25cIlxuICAgICAgICBpZD1cInNlY3Rpb24tOC1vd25lclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2VjdGlvbkNsYXNzTmFtZSh0aGlzLnByb3BzLnBvc2l0aW9uKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvY3VtZW50IE93bmVyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPk1vcmUgd2F5cyB0byBsb2dpbjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBvd25lcjFcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIEhvdyBnb29kIGFyZSB5b3UgYXQgYW5zd2VyaW5nIHNlY3VyaXR5IHF1ZXN0aW9ucz9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1zdWJ0aXRsZVwiPlxuICAgICAgICAgICAgICAgIEV4YW1wbGU6IFwiV2hhdCdzIHlvdXIgbW90aGVyJ3MgbWFpZGVuIG5hbWU/XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8U2VjdXJpdHlRdWVzdGlvblN2ZyAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvcHRpb25zXCI+XG4gICAgICAgICAgICAgIHtvcHRpb25zLm1hcCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ZnVHlwZSA9XG4gICAgICAgICAgICAgICAgICBvcHRpb24gPT09IG9wdGlvbnNbMF0gPyBcIm1laC1zZWN1cml0eVwiIDogXCJzbWlsZXktc2VjdXJpdHlcIjtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPE9wdGlvblN2Z1xuICAgICAgICAgICAgICAgICAgICBrZXk9e29wdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgc3ZnVHlwZT17c3ZnVHlwZX1cbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMucHJvcHMucG9zaXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE9wdGlvbjogb3B0aW9uIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWRPcHRpb24gPT09IG9wdGlvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiTmV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgY29uc3QgcSA9IHRoaXMucHJvcHMucXVlc3Rpb25zO1xuICAgICAgICAgICAgICAgICAgcS5hbnN3ZXJpbmdTZWN1cml0eVF1ZXN0aW9ucyA9IHNlbGVjdGVkT3B0aW9uO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVHb0ZvcndhcmQoXCJvd25lclwiLCA5LCB7IHF1ZXN0aW9uczogcSB9KTtcbiAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXshc2VsZWN0ZWRPcHRpb259XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8R29CYWNrU3ZnXG4gICAgICAgICAgICBjb2xvcj1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgZ29CYWNrPXsoKSA9PiB0aGlzLnByb3BzLmhhbmRsZUdvQmFjayhcIm93bmVyXCIsIDgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19