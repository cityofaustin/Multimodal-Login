"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _react = _interopRequireWildcard(require("react"));
var _logoSvg = _interopRequireDefault(require("../svg/logo-svg"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _WaveSvg = _interopRequireDefault(require("../svg/WaveSvg"));


let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/c5dfb6e7fab9cf0e11ec3fc3dd9cb1c3.scss";
  img = "/public/img/24bada2dc970bc7c358aba2b16688cbd.png".default;
}

class Index extends _react.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    if (process.env.BROWSER) {
      setTimeout(() => {
        document.getElementById('splash').style.animation = 'fadeout 1s';
        document.getElementById('splash').style.opacity = 0;
        document.getElementById('main').style.animation = 'fadein 1s';
        document.getElementById('main').style.opacity = 1;
      }, 1000);
    }
  }

  renderHiddenInputs() {
    return /*#__PURE__*/(
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
      _react.default.createElement("input", {
        type: "hidden",
        name: "client_id",
        value: _urlUtil.default.getQueryVariable('client_id') }), /*#__PURE__*/

      _react.default.createElement("input", {
        type: "hidden",
        name: "response_type",
        value: _urlUtil.default.getQueryVariable('response_type') }), /*#__PURE__*/

      _react.default.createElement("input", {
        type: "hidden",
        name: "redirect_url",
        value: _urlUtil.default.getQueryVariable('redirect_url') }), /*#__PURE__*/

      _react.default.createElement("input", {
        type: "hidden",
        name: "scope",
        value: _urlUtil.default.getQueryVariable('scope') }), /*#__PURE__*/

      _react.default.createElement("input", {
        type: "hidden",
        name: "state",
        value: _urlUtil.default.getQueryVariable('state') })));



  }

  render() {
    if (process.env.BROWSER) {
      return /*#__PURE__*/(
        _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
        _react.default.createElement("div", { id: "splash" }, /*#__PURE__*/
        _react.default.createElement(_logoSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("main", { id: "main" }, /*#__PURE__*/
        _react.default.createElement("section", { className: "wave-container" }, /*#__PURE__*/
        _react.default.createElement(_WaveSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("section", { className: "welcome-container" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "section" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "title" }, "Welcome!"), /*#__PURE__*/
        _react.default.createElement("div", { className: "subtitle" }, "MyPass is a secure & private document storage solution."), /*#__PURE__*/


        _react.default.createElement("div", { className: "sub-section" }, /*#__PURE__*/
        _react.default.createElement("img", { src: img, alt: "" }), /*#__PURE__*/
        _react.default.createElement("div", { className: "already" }, "Already a user?"), /*#__PURE__*/
        _react.default.createElement("form", { method: "GET", action: "login" },
        this.renderHiddenInputs(), /*#__PURE__*/
        _react.default.createElement("input", { className: "login", value: "Login", type: "submit" })), /*#__PURE__*/


        _react.default.createElement("div", { className: "or" }, "or"), /*#__PURE__*/
        _react.default.createElement("form", { method: "GET", action: "register" },
        this.renderHiddenInputs(), /*#__PURE__*/
        _react.default.createElement("input", { className: "sign-up", type: "submit", value: "Sign-Up" }))))))));







    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null);
    }
  }}var _default =


Index;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbWciLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsImRlZmF1bHQiLCJJbmRleCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwic3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsInNldFRpbWVvdXQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwic3R5bGUiLCJhbmltYXRpb24iLCJvcGFjaXR5IiwicmVuZGVySGlkZGVuSW5wdXRzIiwiVXJsVXRpbCIsImdldFF1ZXJ5VmFyaWFibGUiLCJyZW5kZXIiXSwibWFwcGluZ3MiOiJnUkFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0EsSUFBSUEsR0FBSjtBQUNBO0FBQ0EsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0E7QUFDQUgsRUFBQUEsR0FBRyxHQUFHLG1EQUF1Q0ksT0FBN0M7QUFDRDs7QUFFRCxNQUFNQyxLQUFOLFNBQW9CQyxnQkFBcEIsQ0FBOEI7QUFDNUJDLEVBQUFBLFdBQVcsR0FBRztBQUNaO0FBQ0EsU0FBS0MsS0FBTCxHQUFhLEVBQWI7QUFDRDs7QUFFREMsRUFBQUEsaUJBQWlCLEdBQUc7QUFDbEIsUUFBSVIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCTyxNQUFBQSxVQUFVLENBQUMsTUFBTTtBQUNmQyxRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQWxDLENBQXdDQyxTQUF4QyxHQUFvRCxZQUFwRDtBQUNBSCxRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsRUFBa0NDLEtBQWxDLENBQXdDRSxPQUF4QyxHQUFrRCxDQUFsRDtBQUNBSixRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDQyxTQUF0QyxHQUFrRCxXQUFsRDtBQUNBSCxRQUFBQSxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLEtBQWhDLENBQXNDRSxPQUF0QyxHQUFnRCxDQUFoRDtBQUNELE9BTFMsRUFLUCxJQUxPLENBQVY7QUFNRDtBQUNGOztBQUVEQyxFQUFBQSxrQkFBa0IsR0FBRztBQUNuQjtBQUNFLG1DQUFDLGVBQUQ7QUFDRTtBQUNFLFFBQUEsSUFBSSxFQUFDLFFBRFA7QUFFRSxRQUFBLElBQUksRUFBQyxXQUZQO0FBR0UsUUFBQSxLQUFLLEVBQUVDLGlCQUFRQyxnQkFBUixDQUF5QixXQUF6QixDQUhULEdBREY7O0FBTUU7QUFDRSxRQUFBLElBQUksRUFBQyxRQURQO0FBRUUsUUFBQSxJQUFJLEVBQUMsZUFGUDtBQUdFLFFBQUEsS0FBSyxFQUFFRCxpQkFBUUMsZ0JBQVIsQ0FBeUIsZUFBekIsQ0FIVCxHQU5GOztBQVdFO0FBQ0UsUUFBQSxJQUFJLEVBQUMsUUFEUDtBQUVFLFFBQUEsSUFBSSxFQUFDLGNBRlA7QUFHRSxRQUFBLEtBQUssRUFBRUQsaUJBQVFDLGdCQUFSLENBQXlCLGNBQXpCLENBSFQsR0FYRjs7QUFnQkU7QUFDRSxRQUFBLElBQUksRUFBQyxRQURQO0FBRUUsUUFBQSxJQUFJLEVBQUMsT0FGUDtBQUdFLFFBQUEsS0FBSyxFQUFFRCxpQkFBUUMsZ0JBQVIsQ0FBeUIsT0FBekIsQ0FIVCxHQWhCRjs7QUFxQkU7QUFDRSxRQUFBLElBQUksRUFBQyxRQURQO0FBRUUsUUFBQSxJQUFJLEVBQUMsT0FGUDtBQUdFLFFBQUEsS0FBSyxFQUFFRCxpQkFBUUMsZ0JBQVIsQ0FBeUIsT0FBekIsQ0FIVCxHQXJCRixDQURGOzs7O0FBNkJEOztBQUVEQyxFQUFBQSxNQUFNLEdBQUc7QUFDUCxRQUFJbEIsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0UscUNBQUMsZUFBRDtBQUNFLDhDQUFLLEVBQUUsRUFBQyxRQUFSO0FBQ0UscUNBQUMsZ0JBQUQsT0FERixDQURGOztBQUlFLCtDQUFNLEVBQUUsRUFBQyxNQUFUO0FBQ0Usa0RBQVMsU0FBUyxFQUFDLGdCQUFuQjtBQUNFLHFDQUFDLGdCQUFELE9BREYsQ0FERjs7QUFJRSxrREFBUyxTQUFTLEVBQUMsbUJBQW5CO0FBQ0UsOENBQUssU0FBUyxFQUFDLFNBQWY7QUFDRSw4Q0FBSyxTQUFTLEVBQUMsT0FBZixlQURGO0FBRUUsOENBQUssU0FBUyxFQUFDLFVBQWYsOERBRkY7OztBQUtFLDhDQUFLLFNBQVMsRUFBQyxhQUFmO0FBQ0UsOENBQUssR0FBRyxFQUFFSCxHQUFWLEVBQWUsR0FBRyxFQUFDLEVBQW5CLEdBREY7QUFFRSw4Q0FBSyxTQUFTLEVBQUMsU0FBZixzQkFGRjtBQUdFLCtDQUFNLE1BQU0sRUFBQyxLQUFiLEVBQW1CLE1BQU0sRUFBQyxPQUExQjtBQUNHLGFBQUtnQixrQkFBTCxFQURIO0FBRUUsZ0RBQU8sU0FBUyxFQUFDLE9BQWpCLEVBQXlCLEtBQUssRUFBQyxPQUEvQixFQUF1QyxJQUFJLEVBQUMsUUFBNUMsR0FGRixDQUhGOzs7QUFRRSw4Q0FBSyxTQUFTLEVBQUMsSUFBZixTQVJGO0FBU0UsK0NBQU0sTUFBTSxFQUFDLEtBQWIsRUFBbUIsTUFBTSxFQUFDLFVBQTFCO0FBQ0csYUFBS0Esa0JBQUwsRUFESDtBQUVFLGdEQUFPLFNBQVMsRUFBQyxTQUFqQixFQUEyQixJQUFJLEVBQUMsUUFBaEMsRUFBeUMsS0FBSyxFQUFDLFNBQS9DLEdBRkYsQ0FURixDQUxGLENBREYsQ0FKRixDQUpGLENBREY7Ozs7Ozs7O0FBa0NELEtBbkNELE1BbUNPO0FBQ0wsMEJBQU8sNkJBQUMsZUFBRCxPQUFQO0FBQ0Q7QUFDRixHQXhGMkIsQzs7O0FBMkZmWCxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50LCBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgTG9nb1N2ZyBmcm9tICcuLi9zdmcvbG9nby1zdmcnO1xuaW1wb3J0IFVybFV0aWwgZnJvbSAnLi4vLi4vdXRpbC91cmwtdXRpbCc7XG5pbXBvcnQgV2F2ZVN2ZyBmcm9tICcuLi9zdmcvV2F2ZVN2Zyc7XG5cblxubGV0IGltZztcbi8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8zMDM1NTA4MC82OTA3NTQxXG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICByZXF1aXJlKCcuLi9nbG9iYWwuc2NzcycpO1xuICByZXF1aXJlKCcuL2luZGV4LnNjc3MnKTtcbiAgaW1nID0gcmVxdWlyZSgnLi4vLi4vaW1nL2RvY3VtZW50LWZpbGUucG5nJykuZGVmYXVsdDtcbn1cblxuY2xhc3MgSW5kZXggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7fTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwbGFzaCcpLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlb3V0IDFzJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwbGFzaCcpLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlaW4gMXMnO1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgfSwgMTAwMCk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVySGlkZGVuSW5wdXRzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJjbGllbnRfaWRcIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoJ2NsaWVudF9pZCcpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicmVzcG9uc2VfdHlwZVwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZSgncmVzcG9uc2VfdHlwZScpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKCdyZWRpcmVjdF91cmwnKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgbmFtZT1cInNjb3BlXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKCdzY29wZScpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoJ3N0YXRlJyl9XG4gICAgICAgIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGlkPVwic3BsYXNoXCI+XG4gICAgICAgICAgICA8TG9nb1N2ZyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtYWluIGlkPVwibWFpblwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2F2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPFdhdmVTdmcgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5XZWxjb21lITwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIE15UGFzcyBpcyBhIHNlY3VyZSAmYW1wOyBwcml2YXRlIGRvY3VtZW50IHN0b3JhZ2Ugc29sdXRpb24uXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWItc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2ltZ30gYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWxyZWFkeVwiPkFscmVhZHkgYSB1c2VyPzwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgYWN0aW9uPVwibG9naW5cIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGlkZGVuSW5wdXRzKCl9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJsb2dpblwiIHZhbHVlPVwiTG9naW5cIiB0eXBlPVwic3VibWl0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvclwiPm9yPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8Zm9ybSBtZXRob2Q9XCJHRVRcIiBhY3Rpb249XCJyZWdpc3RlclwiPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5yZW5kZXJIaWRkZW5JbnB1dHMoKX1cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInNpZ24tdXBcIiB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJTaWduLVVwXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0=