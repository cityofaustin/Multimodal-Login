"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _logoSvg = _interopRequireDefault(require("../svg/logo-svg"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _WaveSvg = _interopRequireDefault(require("../svg/WaveSvg"));


let img;
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/834792c349f120579b19b2959963e6fd.scss";
  img = "/public/img/24bada2dc970bc7c358aba2b16688cbd.png".default;
}

class Index extends _react.Component {
  constructor() {var _this;
    super();_this = this;(0, _defineProperty2.default)(this, "loadAppSettings", /*#__PURE__*/(0, _asyncToGenerator2.default)(

















    function* () {
      let { appSettings } = { ..._this.state };
      try {
        const url = "api/app-settings";
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" } };

        appSettings = yield (yield fetch(url, init)).json();
        const titleSetting = appSettings.find(
        a => a.settingName === "title");

        if (titleSetting) {
          document.title = titleSetting.settingValue + ' Auth';
        }
      } catch (err) {
        console.log("Error!");
        console.log(err);
      }
      _this.setState({ appSettings });
    }));this.state = { appSettings: [] };}componentDidMount() {if (process.env.BROWSER) {this.loadAppSettings();setTimeout(() => {document.getElementById('splash').style.animation = 'fadeout 1s';document.getElementById('splash').style.opacity = 0;document.getElementById('main').style.animation = 'fadein 1s';document.getElementById('main').style.opacity = 1;}, 1000);}}

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
      const { appSettings } = { ...this.state };
      const titleSetting = appSettings.find(
      a => a.settingName === 'title');

      const title = titleSetting ? titleSetting.settingValue : 'This';
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
        _react.default.createElement("div", { className: "subtitle" },
        title, " is a secure & private document storage solution."), /*#__PURE__*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL2luZGV4LmpzeCJdLCJuYW1lcyI6WyJpbWciLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsImRlZmF1bHQiLCJJbmRleCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiYXBwU2V0dGluZ3MiLCJzdGF0ZSIsInVybCIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiZmV0Y2giLCJqc29uIiwidGl0bGVTZXR0aW5nIiwiZmluZCIsImEiLCJzZXR0aW5nTmFtZSIsImRvY3VtZW50IiwidGl0bGUiLCJzZXR0aW5nVmFsdWUiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJjb21wb25lbnREaWRNb3VudCIsImxvYWRBcHBTZXR0aW5ncyIsInNldFRpbWVvdXQiLCJnZXRFbGVtZW50QnlJZCIsInN0eWxlIiwiYW5pbWF0aW9uIiwib3BhY2l0eSIsInJlbmRlckhpZGRlbklucHV0cyIsIlVybFV0aWwiLCJnZXRRdWVyeVZhcmlhYmxlIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoib2RBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBLElBQUlBLEdBQUo7QUFDQTtBQUNBLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0FILEVBQUFBLEdBQUcsR0FBRyxtREFBdUNJLE9BQTdDO0FBQ0Q7O0FBRUQsTUFBTUMsS0FBTixTQUFvQkMsZ0JBQXBCLENBQThCO0FBQzVCQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixXQURZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtQkksaUJBQVk7QUFDNUIsVUFBSSxFQUFDQyxXQUFELEtBQWdCLEVBQUMsR0FBRyxLQUFJLENBQUNDLEtBQVQsRUFBcEI7QUFDQSxVQUFJO0FBQ0YsY0FBTUMsR0FBRyxHQUFHLGtCQUFaO0FBQ0EsY0FBTUMsSUFBSSxHQUFHO0FBQ1hDLFVBQUFBLE1BQU0sRUFBRSxLQURHO0FBRVhDLFVBQUFBLE9BQU8s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eUhmN0IsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ29TdmcgZnJvbSAnLi4vc3ZnL2xvZ28tc3ZnJztcbmltcG9ydCBVcmxVdGlsIGZyb20gJy4uLy4uL3V0aWwvdXJsLXV0aWwnO1xuaW1wb3J0IFdhdmVTdmcgZnJvbSAnLi4vc3ZnL1dhdmVTdmcnO1xuXG5cbmxldCBpbWc7XG4vLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMzAzNTUwODAvNjkwNzU0MVxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi4vZ2xvYmFsLnNjc3MnKTtcbiAgcmVxdWlyZSgnLi9pbmRleC5zY3NzJyk7XG4gIGltZyA9IHJlcXVpcmUoJy4uLy4uL2ltZy9kb2N1bWVudC1maWxlLnBuZycpLmRlZmF1bHQ7XG59XG5cbmNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgYXBwU2V0dGluZ3M6IFtdXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICB0aGlzLmxvYWRBcHBTZXR0aW5ncygpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGxhc2gnKS5zdHlsZS5hbmltYXRpb24gPSAnZmFkZW91dCAxcyc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGxhc2gnKS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5hbmltYXRpb24gPSAnZmFkZWluIDFzJztcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIH0sIDEwMDApO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRBcHBTZXR0aW5ncyA9IGFzeW5jICgpID0+IHtcbiAgICBsZXQge2FwcFNldHRpbmdzfSA9IHsuLi50aGlzLnN0YXRlfTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gXCJhcGkvYXBwLXNldHRpbmdzXCI7XG4gICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIH07XG4gICAgICBhcHBTZXR0aW5ncyA9IGF3YWl0IChhd2FpdCBmZXRjaCh1cmwsIGluaXQpKS5qc29uKCk7XG4gICAgICBjb25zdCB0aXRsZVNldHRpbmcgPSBhcHBTZXR0aW5ncy5maW5kKFxuICAgICAgICAoYSkgPT4gYS5zZXR0aW5nTmFtZSA9PT0gXCJ0aXRsZVwiXG4gICAgICApO1xuICAgICAgaWYgKHRpdGxlU2V0dGluZykge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHRpdGxlU2V0dGluZy5zZXR0aW5nVmFsdWUgKyAnIEF1dGgnO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJFcnJvciFcIik7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHthcHBTZXR0aW5nc30pO1xuICB9XG5cbiAgcmVuZGVySGlkZGVuSW5wdXRzKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJoaWRkZW5cIlxuICAgICAgICAgIG5hbWU9XCJjbGllbnRfaWRcIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoJ2NsaWVudF9pZCcpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicmVzcG9uc2VfdHlwZVwiXG4gICAgICAgICAgdmFsdWU9e1VybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZSgncmVzcG9uc2VfdHlwZScpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwicmVkaXJlY3RfdXJsXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKCdyZWRpcmVjdF91cmwnKX1cbiAgICAgICAgLz5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cImhpZGRlblwiXG4gICAgICAgICAgbmFtZT1cInNjb3BlXCJcbiAgICAgICAgICB2YWx1ZT17VXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKCdzY29wZScpfVxuICAgICAgICAvPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwiaGlkZGVuXCJcbiAgICAgICAgICBuYW1lPVwic3RhdGVcIlxuICAgICAgICAgIHZhbHVlPXtVcmxVdGlsLmdldFF1ZXJ5VmFyaWFibGUoJ3N0YXRlJyl9XG4gICAgICAgIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgICAgIGNvbnN0IHthcHBTZXR0aW5nc30gPSB7Li4udGhpcy5zdGF0ZX07XG4gICAgICBjb25zdCB0aXRsZVNldHRpbmcgPSBhcHBTZXR0aW5ncy5maW5kKFxuICAgICAgICAoYSkgPT4gYS5zZXR0aW5nTmFtZSA9PT0gJ3RpdGxlJ1xuICAgICAgKTtcbiAgICAgIGNvbnN0IHRpdGxlID0gdGl0bGVTZXR0aW5nID8gdGl0bGVTZXR0aW5nLnNldHRpbmdWYWx1ZSA6ICdUaGlzJztcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGlkPVwic3BsYXNoXCI+XG4gICAgICAgICAgICA8TG9nb1N2ZyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtYWluIGlkPVwibWFpblwiPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2F2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPFdhdmVTdmcgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cIndlbGNvbWUtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5XZWxjb21lITwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgICAgICAgIHt0aXRsZX0gaXMgYSBzZWN1cmUgJmFtcDsgcHJpdmF0ZSBkb2N1bWVudCBzdG9yYWdlIHNvbHV0aW9uLlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3ViLXNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbWd9IGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFscmVhZHlcIj5BbHJlYWR5IGEgdXNlcj88L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxmb3JtIG1ldGhvZD1cIkdFVFwiIGFjdGlvbj1cImxvZ2luXCI+XG4gICAgICAgICAgICAgICAgICAgIHt0aGlzLnJlbmRlckhpZGRlbklucHV0cygpfVxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwibG9naW5cIiB2YWx1ZT1cIkxvZ2luXCIgdHlwZT1cInN1Ym1pdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3JcIj5vcjwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGZvcm0gbWV0aG9kPVwiR0VUXCIgYWN0aW9uPVwicmVnaXN0ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAge3RoaXMucmVuZGVySGlkZGVuSW5wdXRzKCl9XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9XCJzaWduLXVwXCIgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU2lnbi1VcFwiIC8+XG4gICAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgIDwvbWFpbj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiA8RnJhZ21lbnQgLz47XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19