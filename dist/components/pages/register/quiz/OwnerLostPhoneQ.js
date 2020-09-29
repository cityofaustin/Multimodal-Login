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
      options: ['noPhone', 'lostPhoneOnceOrMore', 'lostPhoneNever'],
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
        let svgType = i < 2 ? 'meh-phone' : 'smiley-phone';
        svgType = i < 1 ? 'no-phone' : svgType;
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
          q.lostPhone = selectedOption;
          this.props.handleGoForward('owner', 7, { questions: q });
        },
        disabled: !selectedOption }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, {
        color: "#2362c7",
        goBack: () => this.props.handleGoBack('owner', 6) }))));




  }}exports.default = OwnerLostPhoneQ;(0, _defineProperty2.default)(OwnerLostPhoneQ, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL3F1aXovT3duZXJMb3N0UGhvbmVRLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIk93bmVyTG9zdFBob25lUSIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJsb3N0UGhvbmUiLCJxdWVzdGlvbnMiLCJzZWxlY3RlZE9wdGlvbiIsInVuZGVmaW5lZCIsInN0YXRlIiwib3B0aW9ucyIsImNvbXBvbmVudERpZE1vdW50IiwicmVmcyIsInNlY3Rpb24iLCJyZW5kZXIiLCJwb3NpdGlvbiIsIm1hcCIsIm9wdGlvbiIsImkiLCJzdmdUeXBlIiwic2V0U3RhdGUiLCJ3aWR0aCIsInEiLCJoYW5kbGVHb0ZvcndhcmQiLCJoYW5kbGVHb0JhY2siXSwibWFwcGluZ3MiOiJpZUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnRSxDQURBOzs7O0FBS0EsSUFBSUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRWMsTUFBTUMsZUFBTixTQUE4QkMsZ0JBQTlCLENBQXdDOzs7Ozs7QUFNckRDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxVQUFNLEVBQUVDLFNBQUYsS0FBZ0JELEtBQUssQ0FBQ0UsU0FBNUI7QUFDQSxVQUFNQyxjQUFjLEdBQUdGLFNBQVMsR0FBR0EsU0FBSCxHQUFlRyxTQUEvQztBQUNBLFNBQUtDLEtBQUwsR0FBYTtBQUNYQyxNQUFBQSxPQUFPLEVBQUUsQ0FBQyxTQUFELEVBQVkscUJBQVosRUFBbUMsZ0JBQW5DLENBREU7QUFFWEgsTUFBQUEsY0FGVyxFQUFiOztBQUlEOztBQUVESSxFQUFBQSxpQkFBaUIsR0FBRztBQUNsQjtBQUNBLGtDQUFVLEtBQUtDLElBQUwsQ0FBVUMsT0FBcEI7QUFDRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTSxFQUFFSixPQUFGLEVBQVdILGNBQVgsS0FBOEIsRUFBRSxHQUFHLEtBQUtFLEtBQVYsRUFBcEM7QUFDQTtBQUNFO0FBQ0UsUUFBQSxHQUFHLEVBQUMsU0FETjtBQUVFLFFBQUEsRUFBRSxFQUFDLGlCQUZMO0FBR0UsUUFBQSxTQUFTLEVBQUUsd0NBQW9CLEtBQUtMLEtBQUwsQ0FBV1csUUFBL0IsQ0FIYjs7QUFLRSw0Q0FBSyxTQUFTLEVBQUMsa0JBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsT0FBZixxQkFERjtBQUVFLDRDQUFLLFNBQVMsRUFBQyxVQUFmLHlCQUZGO0FBR0UsNENBQUssU0FBUyxFQUFDLGFBQWY7QUFDRTtBQUNFLDRDQUFLLFNBQVMsRUFBQyxZQUFmLG1GQURGLENBREY7Ozs7OztBQVFFLDRDQUFLLFNBQVMsRUFBQyxTQUFmO0FBQ0dMLE1BQUFBLE9BQU8sQ0FBQ00sR0FBUixDQUFZLENBQUNDLE1BQUQsRUFBU0MsQ0FBVCxLQUFlO0FBQzFCLFlBQUlDLE9BQU8sR0FBR0QsQ0FBQyxHQUFHLENBQUosR0FBUSxXQUFSLEdBQXNCLGNBQXBDO0FBQ0FDLFFBQUFBLE9BQU8sR0FBR0QsQ0FBQyxHQUFHLENBQUosR0FBUSxVQUFSLEdBQXFCQyxPQUEvQjtBQUNBO0FBQ0UsdUNBQUMsa0JBQUQ7QUFDRSxZQUFBLEdBQUcsRUFBRUYsTUFEUDtBQUVFLFlBQUEsT0FBTyxFQUFFRSxPQUZYO0FBR0UsWUFBQSxXQUFXLEVBQUU7QUFDWCxpQkFBS0MsUUFBTCxDQUFjLEVBQUViLGNBQWMsRUFBRVUsTUFBbEIsRUFBZCxDQUpKOztBQU1FLFlBQUEsVUFBVSxFQUFFVixjQUFjLEtBQUtVLE1BTmpDLEdBREY7OztBQVVELE9BYkEsQ0FESCxDQVJGOztBQXdCRSw0Q0FBSyxTQUFTLEVBQUMsbUJBQWY7QUFDRTtBQUNFLFFBQUEsS0FBSyxFQUFFLEVBQUVJLEtBQUssRUFBRSxPQUFULEVBRFQ7QUFFRSxRQUFBLElBQUksRUFBQyxRQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUMsTUFIUjtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQU07QUFDYixnQkFBTUMsQ0FBQyxHQUFHLEtBQUtsQixLQUFMLENBQVdFLFNBQXJCO0FBQ0FnQixVQUFBQSxDQUFDLENBQUNqQixTQUFGLEdBQWNFLGNBQWQ7QUFDQSxlQUFLSCxLQUFMLENBQVdtQixlQUFYLENBQTJCLE9BQTNCLEVBQW9DLENBQXBDLEVBQXVDLEVBQUVqQixTQUFTLEVBQUVnQixDQUFiLEVBQXZDO0FBQ0QsU0FSSDtBQVNFLFFBQUEsUUFBUSxFQUFFLENBQUNmLGNBVGIsR0FERixDQXhCRixDQUhGOzs7O0FBeUNFLG1DQUFDLGtCQUFEO0FBQ0UsUUFBQSxLQUFLLEVBQUMsU0FEUjtBQUVFLFFBQUEsTUFBTSxFQUFFLE1BQU0sS0FBS0gsS0FBTCxDQUFXb0IsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxDQUFqQyxDQUZoQixHQXpDRixDQUxGLENBREY7Ozs7O0FBc0RELEdBN0VvRCxDLGdFQUFsQ3ZCLGUsa0JBQ0csRUFDcEJzQixlQUFlLEVBQUUsTUFBTSxDQUFFLENBREwsRUFFcEJDLFlBQVksRUFBRSxNQUFNLENBQUUsQ0FGRixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGhhbmRsZUlPU0Jyb3dzZXIgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2Jyb3dzZXItdXRpbCc7XG5pbXBvcnQgR29CYWNrU3ZnIGZyb20gJy4uLy4uLy4uL3N2Zy9Hb0JhY2tTdmcnO1xuaW1wb3J0IE9wdGlvblN2ZyBmcm9tICcuLi8uLi8uLi9zdmcvT3B0aW9uU3ZnJztcbi8vIGltcG9ydCBIYXNQaG9uZVN2ZyBmcm9tICcuLi8uLi8uLi9zdmcvSGFzUGhvbmVTdmcnO1xuaW1wb3J0IHtcbiAgYW5pbWF0ZUluLFxuICBnZXRTZWN0aW9uQ2xhc3NOYW1lLFxufSBmcm9tICcuLi8uLi8uLi8uLi91dGlsL2FuaW1hdGlvbi11dGlsJztcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIGltcG9ydCgnLi9Pd25lckxvc3RQaG9uZVEuc2NzcycpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBPd25lckxvc3RQaG9uZVEgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZUdvRm9yd2FyZDogKCkgPT4ge30sXG4gICAgaGFuZGxlR29CYWNrOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCB7IGxvc3RQaG9uZSB9ID0gcHJvcHMucXVlc3Rpb25zO1xuICAgIGNvbnN0IHNlbGVjdGVkT3B0aW9uID0gbG9zdFBob25lID8gbG9zdFBob25lIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBvcHRpb25zOiBbJ25vUGhvbmUnLCAnbG9zdFBob25lT25jZU9yTW9yZScsICdsb3N0UGhvbmVOZXZlciddLFxuICAgICAgc2VsZWN0ZWRPcHRpb24sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGhhbmRsZUlPU0Jyb3dzZXIoKTtcbiAgICBhbmltYXRlSW4odGhpcy5yZWZzLnNlY3Rpb24pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgb3B0aW9ucywgc2VsZWN0ZWRPcHRpb24gfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj1cInNlY3Rpb25cIlxuICAgICAgICBpZD1cInNlY3Rpb24tNi1vd25lclwiXG4gICAgICAgIGNsYXNzTmFtZT17Z2V0U2VjdGlvbkNsYXNzTmFtZSh0aGlzLnByb3BzLnBvc2l0aW9uKX1cbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvY3VtZW50IE93bmVyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPk1vcmUgd2F5cyB0byBsb2dpbjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBvd25lcjFcIj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlxuICAgICAgICAgICAgICAgIEluIHRoZSBsYXN0IGZpdmUgeWVhcnMsIGhvdyBtYW55IHRpbWVzIGhhdmUgeW91IHBlcm1hbmVudGx5IGxvc3RcbiAgICAgICAgICAgICAgICB5b3VyIHBob25lP1xuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgey8qIDxIYXNQaG9uZVN2ZyAvPiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3B0aW9uc1wiPlxuICAgICAgICAgICAgICB7b3B0aW9ucy5tYXAoKG9wdGlvbiwgaSkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzdmdUeXBlID0gaSA8IDIgPyAnbWVoLXBob25lJyA6ICdzbWlsZXktcGhvbmUnO1xuICAgICAgICAgICAgICAgIHN2Z1R5cGUgPSBpIDwgMSA/ICduby1waG9uZScgOiBzdmdUeXBlO1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8T3B0aW9uU3ZnXG4gICAgICAgICAgICAgICAgICAgIGtleT17b3B0aW9ufVxuICAgICAgICAgICAgICAgICAgICBzdmdUeXBlPXtzdmdUeXBlfVxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRPcHRpb246IG9wdGlvbiB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlzU2VsZWN0ZWQ9e3NlbGVjdGVkT3B0aW9uID09PSBvcHRpb259XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjEwcHgnIH19XG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgdmFsdWU9XCJOZXh0XCJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBxID0gdGhpcy5wcm9wcy5xdWVzdGlvbnM7XG4gICAgICAgICAgICAgICAgICBxLmxvc3RQaG9uZSA9IHNlbGVjdGVkT3B0aW9uO1xuICAgICAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVHb0ZvcndhcmQoJ293bmVyJywgNywgeyBxdWVzdGlvbnM6IHEgfSk7XG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXNlbGVjdGVkT3B0aW9ufVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdvQmFja1N2Z1xuICAgICAgICAgICAgY29sb3I9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgIGdvQmFjaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soJ293bmVyJywgNil9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=