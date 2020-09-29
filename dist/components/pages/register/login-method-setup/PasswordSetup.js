"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireWildcard(require("react"));
var _PasswordMethod = _interopRequireDefault(require("../../../svg/PasswordMethod"));

class PasswordSetup extends _react.Component {
  constructor(props) {
    super(props);
    const password = props.passwordItem ? props.passwordItem.password : '';
    const confirmPassword = props.passwordItem ? props.passwordItem.confirmPassword : '';
    this.state = {
      password,
      confirmPassword };

  }

  render() {
    const { password, confirmPassword } = { ...this.state };

    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Password"), /*#__PURE__*/
      _react.default.createElement(_PasswordMethod.default, null), /*#__PURE__*/
      _react.default.createElement("div", { className: "excerpt" }, "Please choose a password to log into your account"), /*#__PURE__*/


      _react.default.createElement("div", { className: "email-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/
      _react.default.createElement("div", null, "Password"), /*#__PURE__*/
      _react.default.createElement("input", {
        type: "password",
        value: password,
        onChange: e => this.setState({ password: e.target.value }) })))), /*#__PURE__*/




      _react.default.createElement("div", { className: "email-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body-section1" }, /*#__PURE__*/
      _react.default.createElement("div", null, "Confirm Password"), /*#__PURE__*/
      _react.default.createElement("input", {
        type: "password",
        value: confirmPassword,
        onChange: (e) =>
        this.setState({ confirmPassword: e.target.value }) }))))), /*#__PURE__*/






      _react.default.createElement("div", { className: "submit-section" }, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: '210px' },
        type: "button",
        value: "Set Password",
        onClick: () => this.props.handleGoBack('owner', 10, { passwordItem: { password, confirmPassword } }),
        disabled: !password || !confirmPassword }))));




  }}exports.default = PasswordSetup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL2xvZ2luLW1ldGhvZC1zZXR1cC9QYXNzd29yZFNldHVwLmpzeCJdLCJuYW1lcyI6WyJQYXNzd29yZFNldHVwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBhc3N3b3JkIiwicGFzc3dvcmRJdGVtIiwiY29uZmlybVBhc3N3b3JkIiwic3RhdGUiLCJyZW5kZXIiLCJlIiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwiaGFuZGxlR29CYWNrIl0sIm1hcHBpbmdzIjoiZ1JBQUE7QUFDQTs7QUFFZSxNQUFNQSxhQUFOLFNBQTRCQyxnQkFBNUIsQ0FBc0M7QUFDbkRDLEVBQUFBLFdBQVcsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2pCLFVBQU1BLEtBQU47QUFDQSxVQUFNQyxRQUFRLEdBQUlELEtBQUssQ0FBQ0UsWUFBUCxHQUF1QkYsS0FBSyxDQUFDRSxZQUFOLENBQW1CRCxRQUExQyxHQUFxRCxFQUF0RTtBQUNBLFVBQU1FLGVBQWUsR0FBSUgsS0FBSyxDQUFDRSxZQUFQLEdBQXVCRixLQUFLLENBQUNFLFlBQU4sQ0FBbUJDLGVBQTFDLEdBQTRELEVBQXBGO0FBQ0EsU0FBS0MsS0FBTCxHQUFhO0FBQ1hILE1BQUFBLFFBRFc7QUFFWEUsTUFBQUEsZUFGVyxFQUFiOztBQUlEOztBQUVERSxFQUFBQSxNQUFNLEdBQUc7QUFDUCxVQUFNLEVBQUVKLFFBQUYsRUFBWUUsZUFBWixLQUFnQyxFQUFFLEdBQUcsS0FBS0MsS0FBVixFQUF0Qzs7QUFFQTtBQUNFLDRDQUFLLFNBQVMsRUFBQyxhQUFmO0FBQ0UsNENBQUssU0FBUyxFQUFDLGNBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsWUFBZixlQURGO0FBRUUsbUNBQUMsdUJBQUQsT0FGRjtBQUdFLDRDQUFLLFNBQVMsRUFBQyxTQUFmLHdEQUhGOzs7QUFNRSw0Q0FBSyxTQUFTLEVBQUMsZUFBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxXQUFmO0FBQ0UsNENBQUssU0FBUyxFQUFDLG9CQUFmO0FBQ0UsMkRBREY7QUFFRTtBQUNFLFFBQUEsSUFBSSxFQUFDLFVBRFA7QUFFRSxRQUFBLEtBQUssRUFBRUgsUUFGVDtBQUdFLFFBQUEsUUFBUSxFQUFHSyxDQUFELElBQU8sS0FBS0MsUUFBTCxDQUFjLEVBQUVOLFFBQVEsRUFBRUssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQXJCLEVBQWQsQ0FIbkIsR0FGRixDQURGLENBREYsQ0FORjs7Ozs7QUFrQkUsNENBQUssU0FBUyxFQUFDLGVBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsV0FBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxvQkFBZjtBQUNFLG1FQURGO0FBRUU7QUFDRSxRQUFBLElBQUksRUFBQyxVQURQO0FBRUUsUUFBQSxLQUFLLEVBQUVOLGVBRlQ7QUFHRSxRQUFBLFFBQVEsRUFBRSxDQUFDRyxDQUFEO0FBQ1IsYUFBS0MsUUFBTCxDQUFjLEVBQUVKLGVBQWUsRUFBRUcsQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQTVCLEVBQWQsQ0FKSixHQUZGLENBREYsQ0FERixDQWxCRixDQURGOzs7Ozs7O0FBa0NFLDRDQUFLLFNBQVMsRUFBQyxnQkFBZjtBQUNFO0FBQ0UsUUFBQSxLQUFLLEVBQUUsRUFBRUMsS0FBSyxFQUFFLE9BQVQsRUFEVDtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLEtBQUssRUFBQyxjQUhSO0FBSUUsUUFBQSxPQUFPLEVBQUUsTUFBTSxLQUFLVixLQUFMLENBQVdXLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsRUFBakMsRUFBcUMsRUFBQ1QsWUFBWSxFQUFFLEVBQUNELFFBQUQsRUFBV0UsZUFBWCxFQUFmLEVBQXJDLENBSmpCO0FBS0UsUUFBQSxRQUFRLEVBQUUsQ0FBQ0YsUUFBRCxJQUFhLENBQUNFLGVBTDFCLEdBREYsQ0FsQ0YsQ0FERjs7Ozs7QUE4Q0QsR0E1RGtELEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFBhc3N3b3JkTWV0aG9kIGZyb20gJy4uLy4uLy4uL3N2Zy9QYXNzd29yZE1ldGhvZCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkU2V0dXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICBjb25zdCBwYXNzd29yZCA9IChwcm9wcy5wYXNzd29yZEl0ZW0pID8gcHJvcHMucGFzc3dvcmRJdGVtLnBhc3N3b3JkIDogJyc7XG4gICAgY29uc3QgY29uZmlybVBhc3N3b3JkID0gKHByb3BzLnBhc3N3b3JkSXRlbSkgPyBwcm9wcy5wYXNzd29yZEl0ZW0uY29uZmlybVBhc3N3b3JkIDogJyc7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBhc3N3b3JkLFxuICAgICAgY29uZmlybVBhc3N3b3JkXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgcGFzc3dvcmQsIGNvbmZpcm1QYXNzd29yZCB9ID0geyAuLi50aGlzLnN0YXRlIH07XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlBhc3N3b3JkPC9kaXY+XG4gICAgICAgICAgPFBhc3N3b3JkTWV0aG9kIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0XCI+XG4gICAgICAgICAgICBQbGVhc2UgY2hvb3NlIGEgcGFzc3dvcmQgdG8gbG9nIGludG8geW91ciBhY2NvdW50XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+UGFzc3dvcmQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVtYWlsLXNlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5LXNlY3Rpb24xXCI+XG4gICAgICAgICAgICAgICAgPGRpdj5Db25maXJtIFBhc3N3b3JkPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9e2NvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm1QYXNzd29yZDogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtc2VjdGlvblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcgfX1cbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgdmFsdWU9XCJTZXQgUGFzc3dvcmRcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soJ293bmVyJywgMTAsIHtwYXNzd29yZEl0ZW06IHtwYXNzd29yZCwgY29uZmlybVBhc3N3b3JkfX0pfVxuICAgICAgICAgICAgZGlzYWJsZWQ9eyFwYXNzd29yZCB8fCAhY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19