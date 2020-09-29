"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _OwnerChoiceSvg = _interopRequireDefault(require("../../svg/OwnerChoiceSvg"));
var _HelperChoiceSvg = _interopRequireDefault(require("../../svg/HelperChoiceSvg"));
var _InfoSvg = _interopRequireDefault(require("../../svg/InfoSvg"));
var _InfoBubbleSvg = _interopRequireDefault(require("../../svg/InfoBubbleSvg"));
var _GoBackSvg = _interopRequireDefault(require("../../svg/GoBackSvg"));
var _browserUtil = require("../../../util/browser-util");
var _animationUtil = require("../../../util/animation-util");

class RoleSelect extends _react.Component {





  componentDidMount() {
    (0, _browserUtil.handleIOSBrowser)();
    (0, _animationUtil.animateIn)(this.refs.section);
  }

  render() {
    return /*#__PURE__*/(
      _react.default.createElement("div", { ref: "section", id: "section0", className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Sign-up"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "What would you like to do?"), /*#__PURE__*/
      _react.default.createElement("div", {
        style: { margin: "92px 0" },
        className: "card owner owner-choice",
        onClick: () => this.props.handleGoForward('owner', 1) }, /*#__PURE__*/

      _react.default.createElement("div", { className: "role" }, /*#__PURE__*/
      _react.default.createElement(_OwnerChoiceSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("div", { className: "desc-title" }, "I'd like to store my documents")), /*#__PURE__*/





















      _react.default.createElement(_GoBackSvg.default, { goBack: () => this.props.handleGoBack('', 0) }))));



  }}exports.default = RoleSelect;(0, _defineProperty2.default)(RoleSelect, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL1JvbGVTZWxlY3QuanN4Il0sIm5hbWVzIjpbIlJvbGVTZWxlY3QiLCJDb21wb25lbnQiLCJjb21wb25lbnREaWRNb3VudCIsInJlZnMiLCJzZWN0aW9uIiwicmVuZGVyIiwicHJvcHMiLCJwb3NpdGlvbiIsIm1hcmdpbiIsImhhbmRsZUdvRm9yd2FyZCIsImhhbmRsZUdvQmFjayJdLCJtYXBwaW5ncyI6ImdYQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWUsTUFBTUEsVUFBTixTQUF5QkMsZ0JBQXpCLENBQW1DOzs7Ozs7QUFNaERDLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2xCO0FBQ0Esa0NBQVUsS0FBS0MsSUFBTCxDQUFVQyxPQUFwQjtBQUNEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUDtBQUNFLDRDQUFLLEdBQUcsRUFBQyxTQUFULEVBQW1CLEVBQUUsRUFBQyxVQUF0QixFQUFpQyxTQUFTLEVBQUUsd0NBQW9CLEtBQUtDLEtBQUwsQ0FBV0MsUUFBL0IsQ0FBNUM7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsa0JBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsT0FBZixjQURGO0FBRUUsNENBQUssU0FBUyxFQUFDLFVBQWYsaUNBRkY7QUFHRTtBQUNFLFFBQUEsS0FBSyxFQUFFLEVBQUNDLE1BQU0sRUFBRSxRQUFULEVBRFQ7QUFFRSxRQUFBLFNBQVMsRUFBQyx5QkFGWjtBQUdFLFFBQUEsT0FBTyxFQUFFLE1BQU0sS0FBS0YsS0FBTCxDQUFXRyxlQUFYLENBQTJCLE9BQTNCLEVBQW9DLENBQXBDLENBSGpCOztBQUtFLDRDQUFLLFNBQVMsRUFBQyxNQUFmO0FBQ0UsbUNBQUMsdUJBQUQsT0FERixDQUxGOztBQVFFLDRDQUFLLFNBQVMsRUFBQyxZQUFmLHFDQVJGLENBSEY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0UsbUNBQUMsa0JBQUQsSUFBVyxNQUFNLEVBQUUsTUFBTSxLQUFLSCxLQUFMLENBQVdJLFlBQVgsQ0FBd0IsRUFBeEIsRUFBNEIsQ0FBNUIsQ0FBekIsR0FqQ0YsQ0FERixDQURGOzs7O0FBdUNELEdBbkQrQyxDLDJEQUE3QlYsVSxrQkFDRyxFQUNwQlMsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCQyxZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgT3duZXJDaG9pY2VTdmcgZnJvbSAnLi4vLi4vc3ZnL093bmVyQ2hvaWNlU3ZnJztcbmltcG9ydCBIZWxwZXJDaG9pY2VTdmcgZnJvbSAnLi4vLi4vc3ZnL0hlbHBlckNob2ljZVN2Zyc7XG5pbXBvcnQgSW5mb1N2ZyBmcm9tICcuLi8uLi9zdmcvSW5mb1N2Zyc7XG5pbXBvcnQgSW5mb0J1YmJsZVN2ZyBmcm9tICcuLi8uLi9zdmcvSW5mb0J1YmJsZVN2Zyc7XG5pbXBvcnQgR29CYWNrU3ZnIGZyb20gJy4uLy4uL3N2Zy9Hb0JhY2tTdmcnO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnJvd3Nlci11dGlsJztcbmltcG9ydCB7IGFuaW1hdGVJbiwgZ2V0U2VjdGlvbkNsYXNzTmFtZSB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYW5pbWF0aW9uLXV0aWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb2xlU2VsZWN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBoYW5kbGVHb0ZvcndhcmQ6ICgpID0+IHt9LFxuICAgIGhhbmRsZUdvQmFjazogKCkgPT4ge30sXG4gIH07XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgaGFuZGxlSU9TQnJvd3NlcigpO1xuICAgIGFuaW1hdGVJbih0aGlzLnJlZnMuc2VjdGlvbik7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwic2VjdGlvblwiIGlkPVwic2VjdGlvbjBcIiBjbGFzc05hbWU9e2dldFNlY3Rpb25DbGFzc05hbWUodGhpcy5wcm9wcy5wb3NpdGlvbil9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGVudHNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+U2lnbi11cDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5XaGF0IHdvdWxkIHlvdSBsaWtlIHRvIGRvPzwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7bWFyZ2luOiBcIjkycHggMFwifX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgb3duZXIgb3duZXItY2hvaWNlXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29Gb3J3YXJkKCdvd25lcicsIDEpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9sZVwiPlxuICAgICAgICAgICAgICA8T3duZXJDaG9pY2VTdmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZXNjLXRpdGxlXCI+SSdkIGxpa2UgdG8gc3RvcmUgbXkgZG9jdW1lbnRzPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXZcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgaGVscGVyIGhlbHBlci1jaG9pY2VcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0ZvcndhcmQoJ2hlbHBlcicsIDEpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm9sZVwiPlxuICAgICAgICAgICAgICA8SGVscGVyQ2hvaWNlU3ZnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGVzYy10aXRsZVwiPlxuICAgICAgICAgICAgICBJIHdhbnQgdG8gaGVscCBvdGhlcnMgd2l0aCB0aGVpciBkb2N1bWVudHNcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJib3R0b20tc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tbGFiZWxcIj5XaGF0IGlmIEkgd2FudCB0byBkbyBib3RoPzwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbmZvXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnViYmxlXCI+XG4gICAgICAgICAgICAgICAgPEluZm9CdWJibGVTdmcgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxJbmZvU3ZnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgPEdvQmFja1N2ZyBnb0JhY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKCcnLCAwKX0gLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iXX0=