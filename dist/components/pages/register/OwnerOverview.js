"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));

var _GoBackSvg = _interopRequireDefault(require("../../svg/GoBackSvg"));
var _browserUtil = require("../../../util/browser-util");
var _UploadDocSvg = _interopRequireDefault(require("../../svg/UploadDocSvg"));
var _StoreDocSvg = _interopRequireDefault(require("../../svg/StoreDocSvg"));
var _ShareDocSvg = _interopRequireDefault(require("../../svg/ShareDocSvg"));
var _animationUtil = require("../../../util/animation-util"); // import SimpleStepSvg from '../../svg/SimpleStepSvg';

class OwnerOverview extends _react.Component {constructor(...args) {super(...args);(0, _defineProperty2.default)(this, "handleGoBack",










    () => {
      this.props.handleGoBack('owner', 1);
    });}componentDidMount() {(0, _browserUtil.handleIOSBrowser)();(0, _animationUtil.animateIn)(this.refs.section);}

  render() {
    return /*#__PURE__*/(
      _react.default.createElement("div", { ref: "section", id: "section-1-owner", className: (0, _animationUtil.getSectionClassName)(this.props.position) }, /*#__PURE__*/
      _react.default.createElement("div", { className: "section-contents" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "title" }, "Document Owner"), /*#__PURE__*/
      _react.default.createElement("div", { className: "subtitle" }, "As an owner you can..."), /*#__PURE__*/
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/




      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body-section", style: { marginTop: 0 } }, /*#__PURE__*/
      _react.default.createElement(_UploadDocSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", null, "Upload Documents")), /*#__PURE__*/

      _react.default.createElement("div", { className: "card-body-section" }, /*#__PURE__*/
      _react.default.createElement(_StoreDocSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", null, "Store Documents")), /*#__PURE__*/

      _react.default.createElement("div", { className: "card-body-section" }, /*#__PURE__*/
      _react.default.createElement(_ShareDocSvg.default, null), /*#__PURE__*/
      _react.default.createElement("div", null, "Share Documents")), /*#__PURE__*/

      _react.default.createElement("div", { className: "card-body-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "bottom-exerpt" }, "This account type will only allow you to upload store and share your own documents.")), /*#__PURE__*/




      _react.default.createElement("input", {
        style: { width: '210px', marginTop: '27px' },
        type: "button",
        value: "Continue",
        onClick: () => this.props.handleGoForward('owner', 2) }))), /*#__PURE__*/



      _react.default.createElement(_GoBackSvg.default, { color: "#2362c7", goBack: this.handleGoBack }))));



  }}exports.default = OwnerOverview;(0, _defineProperty2.default)(OwnerOverview, "defaultProps", { handleGoForward: () => {}, handleGoBack: () => {} });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL093bmVyT3ZlcnZpZXcuanN4Il0sIm5hbWVzIjpbIk93bmVyT3ZlcnZpZXciLCJDb21wb25lbnQiLCJwcm9wcyIsImhhbmRsZUdvQmFjayIsImNvbXBvbmVudERpZE1vdW50IiwicmVmcyIsInNlY3Rpb24iLCJyZW5kZXIiLCJwb3NpdGlvbiIsIm1hcmdpblRvcCIsIndpZHRoIiwiaGFuZGxlR29Gb3J3YXJkIl0sIm1hcHBpbmdzIjoiZ1hBQUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZELENBTkE7O0FBUWUsTUFBTUEsYUFBTixTQUE0QkMsZ0JBQTVCLENBQXNDOzs7Ozs7Ozs7OztBQVdwQyxVQUFNO0FBQ25CLFdBQUtDLEtBQUwsQ0FBV0MsWUFBWCxDQUF3QixPQUF4QixFQUFpQyxDQUFqQztBQUNELEtBYmtELEdBTW5EQyxpQkFBaUIsR0FBRyxDQUNsQixxQ0FDQSw4QkFBVSxLQUFLQyxJQUFMLENBQVVDLE9BQXBCLEVBQ0Q7O0FBTURDLEVBQUFBLE1BQU0sR0FBRztBQUNQO0FBQ0UsNENBQUssR0FBRyxFQUFDLFNBQVQsRUFBbUIsRUFBRSxFQUFDLGlCQUF0QixFQUF3QyxTQUFTLEVBQUUsd0NBQW9CLEtBQUtMLEtBQUwsQ0FBV00sUUFBL0IsQ0FBbkQ7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsa0JBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsT0FBZixxQkFERjtBQUVFLDRDQUFLLFNBQVMsRUFBQyxVQUFmLDZCQUZGO0FBR0UsNENBQUssU0FBUyxFQUFDLGFBQWY7Ozs7O0FBS0UsNENBQUssU0FBUyxFQUFDLFdBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsbUJBQWYsRUFBbUMsS0FBSyxFQUFFLEVBQUNDLFNBQVMsRUFBRSxDQUFaLEVBQTFDO0FBQ0UsbUNBQUMscUJBQUQsT0FERjtBQUVFLG1FQUZGLENBREY7O0FBS0UsNENBQUssU0FBUyxFQUFDLG1CQUFmO0FBQ0UsbUNBQUMsb0JBQUQsT0FERjtBQUVFLGtFQUZGLENBTEY7O0FBU0UsNENBQUssU0FBUyxFQUFDLG1CQUFmO0FBQ0UsbUNBQUMsb0JBQUQsT0FERjtBQUVFLGtFQUZGLENBVEY7O0FBYUUsNENBQUssU0FBUyxFQUFDLG1CQUFmO0FBQ0UsNENBQUssU0FBUyxFQUFDLGVBQWYsMEZBREYsQ0FiRjs7Ozs7QUFtQkU7QUFDRSxRQUFBLEtBQUssRUFBRSxFQUFFQyxLQUFLLEVBQUUsT0FBVCxFQUFrQkQsU0FBUyxFQUFFLE1BQTdCLEVBRFQ7QUFFRSxRQUFBLElBQUksRUFBQyxRQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUMsVUFIUjtBQUlFLFFBQUEsT0FBTyxFQUFFLE1BQU0sS0FBS1AsS0FBTCxDQUFXUyxlQUFYLENBQTJCLE9BQTNCLEVBQW9DLENBQXBDLENBSmpCLEdBbkJGLENBTEYsQ0FIRjs7OztBQW1DRSxtQ0FBQyxrQkFBRCxJQUFXLEtBQUssRUFBQyxTQUFqQixFQUEyQixNQUFNLEVBQUUsS0FBS1IsWUFBeEMsR0FuQ0YsQ0FERixDQURGOzs7O0FBeUNELEdBekRrRCxDLDhEQUFoQ0gsYSxrQkFDRyxFQUNwQlcsZUFBZSxFQUFFLE1BQU0sQ0FBRSxDQURMLEVBRXBCUixZQUFZLEVBQUUsTUFBTSxDQUFFLENBRkYsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG4vLyBpbXBvcnQgU2ltcGxlU3RlcFN2ZyBmcm9tICcuLi8uLi9zdmcvU2ltcGxlU3RlcFN2Zyc7XG5pbXBvcnQgR29CYWNrU3ZnIGZyb20gJy4uLy4uL3N2Zy9Hb0JhY2tTdmcnO1xuaW1wb3J0IHsgaGFuZGxlSU9TQnJvd3NlciB9IGZyb20gJy4uLy4uLy4uL3V0aWwvYnJvd3Nlci11dGlsJztcbmltcG9ydCBVcGxvYWREb2NTdmcgZnJvbSAnLi4vLi4vc3ZnL1VwbG9hZERvY1N2Zyc7XG5pbXBvcnQgU3RvcmVEb2NTdmcgZnJvbSAnLi4vLi4vc3ZnL1N0b3JlRG9jU3ZnJztcbmltcG9ydCBTaGFyZURvY1N2ZyBmcm9tICcuLi8uLi9zdmcvU2hhcmVEb2NTdmcnO1xuaW1wb3J0IHsgYW5pbWF0ZUluLCBnZXRTZWN0aW9uQ2xhc3NOYW1lIH0gZnJvbSAnLi4vLi4vLi4vdXRpbC9hbmltYXRpb24tdXRpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE93bmVyT3ZlcnZpZXcgZXh0ZW5kcyBDb21wb25lbnQge1xuICBzdGF0aWMgZGVmYXVsdFByb3BzID0ge1xuICAgIGhhbmRsZUdvRm9yd2FyZDogKCkgPT4ge30sXG4gICAgaGFuZGxlR29CYWNrOiAoKSA9PiB7fSxcbiAgfTtcblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBoYW5kbGVJT1NCcm93c2VyKCk7XG4gICAgYW5pbWF0ZUluKHRoaXMucmVmcy5zZWN0aW9uKTtcbiAgfVxuXG4gIGhhbmRsZUdvQmFjayA9ICgpID0+IHtcbiAgICB0aGlzLnByb3BzLmhhbmRsZUdvQmFjaygnb3duZXInLCAxKTtcbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgcmVmPVwic2VjdGlvblwiIGlkPVwic2VjdGlvbi0xLW93bmVyXCIgY2xhc3NOYW1lPXtnZXRTZWN0aW9uQ2xhc3NOYW1lKHRoaXMucHJvcHMucG9zaXRpb24pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRlbnRzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPkRvY3VtZW50IE93bmVyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPkFzIGFuIG93bmVyIHlvdSBjYW4uLi48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+XG4gICAgICAgICAgICAgIFRvIGNyZWF0ZSBhbmQgc2V0dXAgeW91ciBhY2NvdW50IHlvdSBuZWVkIHRvIGZvbGxvdyB0aGVzZSAzIHNpbXBsZVxuICAgICAgICAgICAgICBzdGVwczpcbiAgICAgICAgICAgIDwvZGl2PiAqL31cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb25cIiBzdHlsZT17e21hcmdpblRvcDogMH19PlxuICAgICAgICAgICAgICAgIDxVcGxvYWREb2NTdmcgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlVwbG9hZCBEb2N1bWVudHM8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICA8U3RvcmVEb2NTdmcgLz5cbiAgICAgICAgICAgICAgICA8ZGl2PlN0b3JlIERvY3VtZW50czwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHktc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxTaGFyZURvY1N2ZyAvPlxuICAgICAgICAgICAgICAgIDxkaXY+U2hhcmUgRG9jdW1lbnRzPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib3R0b20tZXhlcnB0XCI+XG4gICAgICAgICAgICAgICAgICBUaGlzIGFjY291bnQgdHlwZSB3aWxsIG9ubHkgYWxsb3cgeW91IHRvIHVwbG9hZCBzdG9yZSBhbmRcbiAgICAgICAgICAgICAgICAgIHNoYXJlIHlvdXIgb3duIGRvY3VtZW50cy5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMjEwcHgnLCBtYXJnaW5Ub3A6ICcyN3B4JyB9fVxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiQ29udGludWVcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMucHJvcHMuaGFuZGxlR29Gb3J3YXJkKCdvd25lcicsIDIpfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPEdvQmFja1N2ZyBjb2xvcj1cIiMyMzYyYzdcIiBnb0JhY2s9e3RoaXMuaGFuZGxlR29CYWNrfSAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cbiJdfQ==