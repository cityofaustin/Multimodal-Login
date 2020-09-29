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
      options: ['forgetPasswordOften', 'forgetPasswordRarely'],
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
        const svgType = option === options[0] ? 'meh' : 'smiley';
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
          q.forgetsPassword = selectedOption;
          this.props.handleGoForward('owner', 5, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack('owner', 4) }))));




  }}exports.default = OwnerPasswordQ;(0, _defineProperty2.default)(OwnerPasswordQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJQYXNzd29yZFEuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3duZXJQYXNzd29yZFEiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwiZm9yZ2V0c1Bhc3N3b3JkIiwicXVlc3Rpb25zIiwic2VsZWN0ZWRPcHRpb24iLCJ1bmRlZmluZWQiLCJzdGF0ZSIsIm9wdGlvbnMiLCJjb21wb25lbnREaWRNb3VudCIsInJlZnMiLCJzZWN0aW9uIiwicmVuZGVyIiwicG9zaXRpb24iLCJtYXAiLCJvcHRpb24iLCJzdmdUeXBlIiwic2V0U3RhdGUiLCJ3aWR0aCIsInEiLCJoYW5kbGVHb0ZvcndhcmQiLCJoYW5kbGVHb0JhY2siXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQSxJQUFJQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkI7QUFDRDs7QUFFYyxNQUFNQyxjQUFOLFNBQTZCQyxnQkFBN0IsQ0FBdUM7Ozs7OztBQU1wREMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFVBQU0sRUFBRUMsZUFBRixLQUFzQkQsS0FBSyxDQUFDRSxTQUFsQztBQUNBLFVBQU1DLGNBQWMsR0FBR0YsZUFBZSxHQUFHQSxlQUFILEdBQXFCRyxTQUEzRDtBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxxQkFBRCxFQUF3QixzQkFBeEIsQ0FERTtBQUVYSCxNQUFBQSxjQUZXLEVBQWI7O0FBSUQ7O0FBRURJLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCO0FBQ0Esa0NBQVUsS0FBS0MsSUFBTCxDQUFVQyxPQUFwQjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUVKLE9BQUYsRUFBV0gsY0FBWCxLQUE4QixFQUFFLEdBQUcsS0FBS0UsS0FBVixFQUFwQztBQUNBO0FBQ0U7QUFDRSxRQUFBLEdBQUcsRUFBQyxTQUROO0FBRUUsUUFBQSxFQUFFLEVBQUMsaUJBRkw7QUFHRSxRQUFBLFNBQVMsRUFBRSx3Q0FBb0IsS0FBS0wsS0FBTCxDQUFXVyxRQUEvQixDQUhiOztBQUtFLDRDQUFLLFNBQVMsRUFBQyxrQkFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxPQUFmLHFCQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFVBQWYseUJBRkY7QUFHRSw0Q0FBSyxTQUFTLEVBQUMsYUFBZjtBQUNFO0FBQ0UsNENBQUssU0FBUyxFQUFDLFlBQWYscUVBREYsQ0FERjs7OztBQU1FO0FBQ0UsbUNBQUMsb0JBQUQsT0FERixDQU5GOztBQVNFLDRDQUFLLFNBQVMsRUFBQyxTQUFmO0FBQ0dMLE1BQUFBLE9BQU8sQ0FBQ00sR0FBUixDQUFhQyxNQUFELElBQVk7QUFDdkIsY0FBTUMsT0FBTyxHQUFHRCxNQUFNLEtBQUtQLE9BQU8sQ0FBQyxDQUFELENBQWxCLEdBQXdCLEtBQXhCLEdBQWdDLFFBQWhEO0FBQ0E7QUFDRSx1Q0FBQyxrQkFBRDtBQUNFLFlBQUEsR0FBRyxFQUFFTyxNQURQO0FBRUUsWUFBQSxPQUFPLEVBQUVDLE9BRlg7QUFHRSxZQUFBLFdBQVcsRUFBRTtBQUNYLGlCQUFLQyxRQUFMLENBQWMsRUFBRVosY0FBYyxFQUFFVSxNQUFsQixFQUFkLENBSko7O0FBTUUsWUFBQSxVQUFVLEVBQUVWLGNBQWMsS0FBS1UsTUFOakMsR0FERjs7O0FBVUQsT0FaQSxDQURILENBVEY7O0FBd0JFLDRDQUFLLFNBQVMsRUFBQyxtQkFBZjtBQUNFO0FBQ0UsUUFBQSxLQUFLLEVBQUUsRUFBRUcsS0FBSyxFQUFFLE9BQVQsRUFEVDtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLEtBQUssRUFBQyxNQUhSO0FBSUUsUUFBQSxPQUFPLEVBQUUsTUFBTTtBQUNiLGdCQUFNQyxDQUFDLEdBQUcsS0FBS2pCLEtBQUwsQ0FBV0UsU0FBckI7QUFDQWUsVUFBQUEsQ0FBQyxDQUFDaEIsZUFBRixHQUFvQkUsY0FBcEI7QUFDQSxlQUFLSCxLQUFMLENBQVdrQixlQUFYLENBQTJCLE9BQTNCLEVBQW9DLENBQXBDLEVBQXVDLEVBQUVoQixTQUFTLEVBQUVlLENBQWIsRUFBdkM7QUFDRCxTQVJIO0FBU0UsUUFBQSxRQUFRLEVBQUUsQ0FBQ2QsY0FUYixHQURGLENBeEJGLENBSEY7Ozs7QUF5Q0UsbUNBQUMsa0JBQUQ7QUFDRSxRQUFBLEtBQUssRUFBQyxTQURSO0FBRUUsUUFBQSxNQUFNLEVBQUUsTUFBTSxLQUFLSCxLQUFMLENBQVdtQixZQUFYLENBQXdCLE9BQXhCLEVBQWlDLENBQWpDLENBRmhCLEdBekNGLENBTEYsQ0FERjs7Ozs7QUFzREQsR0E3RW1ELEMsK0RBQWpDdEIsYyxrQkFDRyxFQUNwQnFCLGVBQWUsRUFBRSxNQUFNLENBQUUsQ0FETCxFQUVwQkMsWUFBWSxFQUFFLE1BQU0sQ0FBRSxDQUZGLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYnJvd3Nlci11dGlsJztcbmltcG9ydCBHb0JhY2tTdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL0dvQmFja1N2Zyc7XG5pbXBvcnQgUGFzc3dvcmRTdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL1Bhc3N3b3JkU3ZnJztcbmltcG9ydCBPcHRpb25TdmcgZnJvbSAnLi4vLi4vLi4vc3ZnL09wdGlvblN2Zyc7XG5pbXBvcnQge1xuICBhbmltYXRlSW4sXG4gIGdldFNlY3Rpb25DbGFzc05hbWUsXG59IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvYW5pbWF0aW9uLXV0aWwnO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KCcuL093bmVyUGFzc3dvcmRRLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3duZXJQYXNzd29yZFEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZUdvRm9yd2FyZDogKCkgPT4ge30sXG4gICAgaGFuZGxlR29CYWNrOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IGZvcmdldHNQYXNzd29yZCB9ID0gcHJvcHMucXVlc3Rpb25zO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gZm9yZ2V0c1Bhc3N3b3JkID8gZm9yZ2V0c1Bhc3N3b3JkIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcHRpb25zOiBbJ2ZvcmdldFBhc3N3b3JkT2Z0ZW4nLCAnZm9yZ2V0UGFzc3dvcmRSYXJlbHknXSxcbiAgICAgIHNlbGVjdGVkT3B0aW9uLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBoYW5kbGVJT1NCcm93c2VyKCk7XG4gICAgYW5pbWF0ZUluKHRoaXMucmVmcy5zZWN0aW9uKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IG9wdGlvbnMsIHNlbGVjdGVkT3B0aW9uIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICByZWY9XCJzZWN0aW9uXCJcbiAgICAgICAgaWQ9XCJzZWN0aW9uLTQtb3duZXJcIlxuICAgICAgICBjbGFzc05hbWU9e2dldFNlY3Rpb25DbGFzc05hbWUodGhpcy5wcm9wcy5wb3NpdGlvbil9XG4gICAgICA+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250ZW50c1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5Eb2N1bWVudCBPd25lcjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Nb3JlIHdheXMgdG8gbG9naW48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5cbiAgICAgICAgICAgICAgICBIb3cgb2Z0ZW4gZG8geW91IGZvcmdldCB5b3VyIHBhc3N3b3JkcyBhbmQgaGF2ZSB0byByZXNldCB0aGVtP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPFBhc3N3b3JkU3ZnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHN2Z1R5cGUgPSBvcHRpb24gPT09IG9wdGlvbnNbMF0gPyAnbWVoJyA6ICdzbWlsZXknO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uU3ZnXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICBzdmdUeXBlPXtzdmdUeXBlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb246IG9wdGlvbiB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9uID09PSBvcHRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjEwcHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJOZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBxID0gdGhpcy5wcm9wcy5xdWVzdGlvbnM7XG4gICAgICAgICAgICAgICAgICBxLmZvcmdldHNQYXNzd29yZCA9IHNlbGVjdGVkT3B0aW9uO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVHb0ZvcndhcmQoJ293bmVyJywgNSwgeyBxdWVzdGlvbnM6IHEgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soJ293bmVyJywgNCl9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=