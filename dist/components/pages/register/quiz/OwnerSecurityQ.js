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
      options: ['securityNotGood', 'securityGood'],
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
        option === options[0] ? 'meh-security' : 'smiley-security';
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
          q.answeringSecurityQuestions = selectedOption;
          this.props.handleGoForward('owner', 9, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack('owner', 8) }))));




  }}exports.default = OwnerSecurityQ;(0, _defineProperty2.default)(OwnerSecurityQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJTZWN1cml0eVEuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJTZWN1cml0eVEiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnMiLCJxdWVzdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInVuZGVmaW5lZCIsInN0YXRlIiwib3B0aW9ucyIsImNvbXBvbmVudERpZE1vdW50IiwicmVmcyIsInNlY3Rpb24iLCJyZW5kZXIiLCJwb3NpdGlvbiIsIm1hcCIsIm9wdGlvbiIsInN2Z1R5cGUiLCJzZXRTdGF0ZSIsIndpZHRoIiwicSIsImhhbmRsZUdvRm9yd2FyZCIsImhhbmRsZUdvQmFjayJdLCJtYXBwaW5ncyI6ImllQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEOztBQUVjLE1BQU1DLGNBQU4sU0FBNkJDLGdCQUE3QixDQUF1Qzs7Ozs7O0FBTXBEQyxFQUFBQSxXQUFXLENBQUNDLEtBQUQsRUFBUTtBQUNqQixVQUFNQSxLQUFOO0FBQ0EsVUFBTSxFQUFFQywwQkFBRixLQUFpQ0QsS0FBSyxDQUFDRSxTQUE3QztBQUNBLFVBQU1DLGNBQWMsR0FBR0YsMEJBQTBCO0FBQzdDQSxJQUFBQSwwQkFENkM7QUFFN0NHLElBQUFBLFNBRko7QUFHQSxTQUFLQyxLQUFMLEdBQWE7QUFDWEMsTUFBQUEsT0FBTyxFQUFFLENBQUMsaUJBQUQsRUFBb0IsY0FBcEIsQ0FERTtBQUVYSCxNQUFBQSxjQUZXLEVBQWI7O0FBSUQ7O0FBRURJLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCO0FBQ0Esa0NBQVUsS0FBS0MsSUFBTCxDQUFVQyxPQUFwQjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUVKLE9BQUYsRUFBV0gsY0FBWCxLQUE4QixFQUFFLEdBQUcsS0FBS0UsS0FBVixFQUFwQztBQUNBO0FBQ0U7QUFDRSxRQUFBLEdBQUcsRUFBQyxTQUROO0FBRUUsUUFBQSxFQUFFLEVBQUMsaUJBRkw7QUFHRSxRQUFBLFNBQVMsRUFBRSx3Q0FBb0IsS0FBS0wsS0FBTCxDQUFXVyxRQUEvQixDQUhiOztBQUtFLDRDQUFLLFNBQVMsRUFBQyxrQkFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxPQUFmLHFCQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFVBQWYseUJBRkY7QUFHRSw0Q0FBSyxTQUFTLEVBQUMsYUFBZjtBQUNFO0FBQ0UsNENBQUssU0FBUyxFQUFDLFlBQWYsd0RBREY7OztBQUlFLDRDQUFLLFNBQVMsRUFBQyxlQUFmLG1EQUpGLENBREY7Ozs7QUFTRSxtQ0FBQyw0QkFBRCxPQVRGO0FBVUUsNENBQUssU0FBUyxFQUFDLFNBQWY7QUFDR0wsTUFBQUEsT0FBTyxDQUFDTSxHQUFSLENBQWFDLE1BQUQsSUFBWTtBQUN2QixjQUFNQyxPQUFPO0FBQ1hELFFBQUFBLE1BQU0sS0FBS1AsT0FBTyxDQUFDLENBQUQsQ0FBbEIsR0FBd0IsY0FBeEIsR0FBeUMsaUJBRDNDO0FBRUE7QUFDRSx1Q0FBQyxrQkFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFTyxNQURQO0FBRUUsWUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxZQUFBLFdBQVcsRUFBRTtBQUNYLGlCQUFLQyxRQUFMLENBQWMsRUFBRVosY0FBYyxFQUFFVSxNQUFsQixFQUFkLENBSko7O0FBTUUsWUFBQSxVQUFVLEVBQUVWLGNBQWMsS0FBS1UsTUFOakMsR0FERjs7O0FBVUQsT0FiQSxDQURILENBVkY7O0FBMEJFLDRDQUFLLFNBQVMsRUFBQyxtQkFBZjtBQUNFO0FBQ0UsUUFBQSxLQUFLLEVBQUUsRUFBRUcsS0FBSyxFQUFFLE9BQVQsRUFEVDtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLEtBQUssRUFBQyxNQUhSO0FBSUUsUUFBQSxPQUFPLEVBQUUsTUFBTTtBQUNiLGdCQUFNQyxDQUFDLEdBQUcsS0FBS2pCLEtBQUwsQ0FBV0UsU0FBckI7QUFDQWUsVUFBQUEsQ0FBQyxDQUFDaEIsMEJBQUYsR0FBK0JFLGNBQS9CO0FBQ0EsZUFBS0gsS0FBTCxDQUFXa0IsZUFBWCxDQUEyQixPQUEzQixFQUFvQyxDQUFwQyxFQUF1QyxFQUFFaEIsU0FBUyxFQUFFZSxDQUFiLEVBQXZDO0FBQ0QsU0FSSDtBQVNFLFFBQUEsUUFBUSxFQUFFLENBQUNkLGNBVGIsR0FERixDQTFCRixDQUhGOzs7O0FBMkNFLG1DQUFDLGtCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLFFBQUEsTUFBTSxFQUFFLE1BQU0sS0FBS0gsS0FBTCxDQUFXbUIsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxDQUFqQyxDQUZoQixHQTNDRixDQUxGLENBREY7Ozs7O0FBd0RELEdBakZtRCxDLCtEQUFqQ3RCLGMsa0JBQ0csRUFDcEJxQixlQUFlLEVBQUUsTUFBTSxDQUFFLENBREwsRUFFcEJDLFlBQVksRUFBRSxNQUFNLENBQUUsQ0FGRixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGhhbmRsZUlPU0Jyb3dzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2Jyb3dzZXItdXRpbCc7XG5pbXBvcnQgR29CYWNrU3ZnIGZyb20gJy4uLy4uLy4uL3N2Zy9Hb0JhY2tTdmcnO1xuaW1wb3J0IE9wdGlvblN2ZyBmcm9tICcuLi8uLi8uLi9zdmcvT3B0aW9uU3ZnJztcbmltcG9ydCBTZWN1cml0eVF1ZXN0aW9uU3ZnIGZyb20gJy4uLy4uLy4uL3N2Zy9TZWN1cml0eVF1ZXN0aW9uU3ZnJztcbmltcG9ydCB7XG4gIGFuaW1hdGVJbixcbiAgZ2V0U2VjdGlvbkNsYXNzTmFtZSxcbn0gZnJvbSAnLi4vLi4vLi4vLi4vdXRpbC9hbmltYXRpb24tdXRpbCc7XG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBpbXBvcnQoJy4vT3duZXJTZWN1cml0eVEuc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lclNlY3VyaXR5USBleHRlbmRzIENvbXBvbmVudCB7XG4gIHN0YXRpYyBkZWZhdWx0UHJvcHMgPSB7XG4gICAgaGFuZGxlR29Gb3J3YXJkOiAoKSA9PiB7fSxcbiAgICBoYW5kbGVHb0JhY2s6ICgpID0+IHt9LFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHsgYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnMgfSA9IHByb3BzLnF1ZXN0aW9ucztcbiAgICBjb25zdCBzZWxlY3RlZE9wdGlvbiA9IGFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zXG4gICAgICA/IGFuc3dlcmluZ1NlY3VyaXR5UXVlc3Rpb25zXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgb3B0aW9uczogWydzZWN1cml0eU5vdEdvb2QnLCAnc2VjdXJpdHlHb29kJ10sXG4gICAgICBzZWxlY3RlZE9wdGlvbixcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaGFuZGxlSU9TQnJvd3NlcigpO1xuICAgIGFuaW1hdGVJbih0aGlzLnJlZnMuc2VjdGlvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBvcHRpb25zLCBzZWxlY3RlZE9wdGlvbiB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXZcbiAgICAgICAgcmVmPVwic2VjdGlvblwiXG4gICAgICAgIGlkPVwic2VjdGlvbi04LW93bmVyXCJcbiAgICAgICAgY2xhc3NOYW1lPXtnZXRTZWN0aW9uQ2xhc3NOYW1lKHRoaXMucHJvcHMucG9zaXRpb24pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+RG9jdW1lbnQgT3duZXI8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+TW9yZSB3YXlzIHRvIGxvZ2luPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgSG93IGdvb2QgYXJlIHlvdSBhdCBhbnN3ZXJpbmcgc2VjdXJpdHkgcXVlc3Rpb25zP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICAgICAgRXhhbXBsZTogXCJXaGF0J3MgeW91ciBtb3RoZXIncyBtYWlkZW4gbmFtZT9cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxTZWN1cml0eVF1ZXN0aW9uU3ZnIC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9wdGlvbnNcIj5cbiAgICAgICAgICAgICAge29wdGlvbnMubWFwKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBzdmdUeXBlID1cbiAgICAgICAgICAgICAgICAgIG9wdGlvbiA9PT0gb3B0aW9uc1swXSA/ICdtZWgtc2VjdXJpdHknIDogJ3NtaWxleS1zZWN1cml0eSc7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxPcHRpb25TdmdcbiAgICAgICAgICAgICAgICAgICAga2V5PXtvcHRpb259XG4gICAgICAgICAgICAgICAgICAgIHN2Z1R5cGU9e3N2Z1R5cGV9XG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZE9wdGlvbjogb3B0aW9uIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaXNTZWxlY3RlZD17c2VsZWN0ZWRPcHRpb24gPT09IG9wdGlvbn1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcgfX1cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIk5leHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHEgPSB0aGlzLnByb3BzLnF1ZXN0aW9ucztcbiAgICAgICAgICAgICAgICAgIHEuYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnMgPSBzZWxlY3RlZE9wdGlvbjtcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlR29Gb3J3YXJkKCdvd25lcicsIDksIHsgcXVlc3Rpb25zOiBxIH0pO1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFzZWxlY3RlZE9wdGlvbn1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxHb0JhY2tTdmdcbiAgICAgICAgICAgIGNvbG9yPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICBnb0JhY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKCdvd25lcicsIDgpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19