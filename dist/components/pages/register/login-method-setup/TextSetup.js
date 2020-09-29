"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _delay = _interopRequireDefault(require("../../../../util/delay"));

var _HowSvg = _interopRequireDefault(require("../../../svg/HowSvg"));
var _TextExampleSvg = _interopRequireDefault(require("../../../svg/TextExampleSvg")); // import KeycodeInputSvg from "../../../svg/KeycodeInputSvg";
if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/ef91135e59a3475cdc51d4c53d5452d4.scss"));
}

class TextSetup extends _react.Component {
  constructor(props) {
    super(props);
    const phoneNumber = props.textItem ? props.textItem.phoneNumber : "";
    // const keycode = props.textItem ? props.textItem.keycode : "";
    this.state = {
      phoneNumber
      // keycode,
    };
  }

  // async sendKeycode() {
  //   const keycodeSentEl = document.getElementById("keycode-sent");
  //   keycodeSentEl.style.opacity = 0.6;
  //   await delay(2000);
  //   keycodeSentEl.style.opacity = 0;
  // }

  renderTextCard() {
    const {
      phoneNumber
      // keycode
    } = { ...this.state };
    const { toggleDisplayHow } = { ...this.props };
    return /*#__PURE__*/(
      _react.default.createElement("div", { id: "text-setup", className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Text Login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "excerpt1" }, "Enter your phone number"), /*#__PURE__*/
      _react.default.createElement("div", { className: "email-section" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-body-section2" }, /*#__PURE__*/
      _react.default.createElement("div", null, "Phone Number"), /*#__PURE__*/
      _react.default.createElement("input", {
        type: "tel",
        value: phoneNumber,
        onChange: e => {
          this.setState({ phoneNumber: e.target.value });
        } }))))), /*#__PURE__*/






































      _react.default.createElement("div", { className: "submit-section" }, /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: "210px" },
        type: "button",
        value: "Link Phone",
        onClick: () =>
        this.props.handleGoBack("owner", 10, {
          textItem: {
            phoneNumber
            // , keycode
          } }),


        disabled:
        !phoneNumber
        // || !keycode
      }), /*#__PURE__*/

      _react.default.createElement("div", { className: "how", onClick: toggleDisplayHow }, "How does this work?"))));





  }

  renderHow() {
    return /*#__PURE__*/(
      _react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/
      _react.default.createElement(_HowSvg.default, { loginMethod: "text" }), /*#__PURE__*/
      _react.default.createElement("div", { className: "sec-excerpt" }, "Two-step verification is a simple way to authenticate a user by sending a unique code to their mobile device."), /*#__PURE__*/



      _react.default.createElement(_TextExampleSvg.default, null)));


  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderTextCard() : this.renderHow();
  }}exports.default = TextSetup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyL2xvZ2luLW1ldGhvZC1zZXR1cC9UZXh0U2V0dXAuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiVGV4dFNldHVwIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJwcm9wcyIsInBob25lTnVtYmVyIiwidGV4dEl0ZW0iLCJzdGF0ZSIsInJlbmRlclRleHRDYXJkIiwidG9nZ2xlRGlzcGxheUhvdyIsImUiLCJzZXRTdGF0ZSIsInRhcmdldCIsInZhbHVlIiwid2lkdGgiLCJoYW5kbGVHb0JhY2siLCJyZW5kZXJIb3ciLCJyZW5kZXIiLCJpc0Rpc3BsYXlIb3ciXSwibWFwcGluZ3MiOiJpWUFBQTtBQUNBOztBQUVBO0FBQ0EscUYsQ0FGQTtBQUdBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEOztBQUVjLE1BQU1DLFNBQU4sU0FBd0JDLGdCQUF4QixDQUFrQztBQUMvQ0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTjtBQUNBLFVBQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxRQUFOLEdBQWlCRixLQUFLLENBQUNFLFFBQU4sQ0FBZUQsV0FBaEMsR0FBOEMsRUFBbEU7QUFDQTtBQUNBLFNBQUtFLEtBQUwsR0FBYTtBQUNYRixNQUFBQTtBQUNBO0FBRlcsS0FBYjtBQUlEOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQUcsRUFBQUEsY0FBYyxHQUFHO0FBQ2YsVUFBTTtBQUNKSCxNQUFBQTtBQUNBO0FBRkksUUFHRixFQUFFLEdBQUcsS0FBS0UsS0FBVixFQUhKO0FBSUEsVUFBTSxFQUFFRSxnQkFBRixLQUF1QixFQUFFLEdBQUcsS0FBS0wsS0FBVixFQUE3QjtBQUNBO0FBQ0UsNENBQUssRUFBRSxFQUFDLFlBQVIsRUFBcUIsU0FBUyxFQUFDLGFBQS9CO0FBQ0UsNENBQUssU0FBUyxFQUFDLGNBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsWUFBZixpQkFERjtBQUVFLDRDQUFLLFNBQVMsRUFBQyxVQUFmLDhCQUZGO0FBR0UsNENBQUssU0FBUyxFQUFDLGVBQWY7QUFDRSw0Q0FBSyxTQUFTLEVBQUMsV0FBZjtBQUNFLDRDQUFLLFNBQVMsRUFBQyxvQkFBZjtBQUNFLCtEQURGO0FBRUU7QUFDRSxRQUFBLElBQUksRUFBQyxLQURQO0FBRUUsUUFBQSxLQUFLLEVBQUVDLFdBRlQ7QUFHRSxRQUFBLFFBQVEsRUFBR0ssQ0FBRCxJQUFPO0FBQ2YsZUFBS0MsUUFBTCxDQUFjLEVBQUVOLFdBQVcsRUFBRUssQ0FBQyxDQUFDRSxNQUFGLENBQVNDLEtBQXhCLEVBQWQ7QUFDRCxTQUxILEdBRkYsQ0FERixDQURGLENBSEYsQ0FERjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0RFLDRDQUFLLFNBQVMsRUFBQyxnQkFBZjtBQUNFO0FBQ0UsUUFBQSxLQUFLLEVBQUUsRUFBRUMsS0FBSyxFQUFFLE9BQVQsRUFEVDtBQUVFLFFBQUEsSUFBSSxFQUFDLFFBRlA7QUFHRSxRQUFBLEtBQUssRUFBQyxZQUhSO0FBSUUsUUFBQSxPQUFPLEVBQUU7QUFDUCxhQUFLVixLQUFMLENBQVdXLFlBQVgsQ0FBd0IsT0FBeEIsRUFBaUMsRUFBakMsRUFBcUM7QUFDbkNULFVBQUFBLFFBQVEsRUFBRTtBQUNSRCxZQUFBQTtBQUNBO0FBRlEsV0FEeUIsRUFBckMsQ0FMSjs7O0FBWUUsUUFBQSxRQUFRO0FBQ04sU0FBQ0E7QUFDRDtBQWRKLFFBREY7O0FBa0JFLDRDQUFLLFNBQVMsRUFBQyxLQUFmLEVBQXFCLE9BQU8sRUFBRUksZ0JBQTlCLDBCQWxCRixDQXBERixDQURGOzs7Ozs7QUE2RUQ7O0FBRURPLEVBQUFBLFNBQVMsR0FBRztBQUNWO0FBQ0UsNENBQUssU0FBUyxFQUFDLGVBQWY7QUFDRSxtQ0FBQyxlQUFELElBQVEsV0FBVyxFQUFDLE1BQXBCLEdBREY7QUFFRSw0Q0FBSyxTQUFTLEVBQUMsYUFBZixvSEFGRjs7OztBQU1FLG1DQUFDLHVCQUFELE9BTkYsQ0FERjs7O0FBVUQ7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFVBQU0sRUFBRUMsWUFBRixLQUFtQixFQUFFLEdBQUcsS0FBS2QsS0FBVixFQUF6QjtBQUNBLFdBQU8sQ0FBQ2MsWUFBRCxHQUFnQixLQUFLVixjQUFMLEVBQWhCLEdBQXdDLEtBQUtRLFNBQUwsRUFBL0M7QUFDRCxHQXZIOEMsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkZWxheSBmcm9tIFwiLi4vLi4vLi4vLi4vdXRpbC9kZWxheVwiO1xuLy8gaW1wb3J0IEtleWNvZGVJbnB1dFN2ZyBmcm9tIFwiLi4vLi4vLi4vc3ZnL0tleWNvZGVJbnB1dFN2Z1wiO1xuaW1wb3J0IEhvd1N2ZyBmcm9tIFwiLi4vLi4vLi4vc3ZnL0hvd1N2Z1wiO1xuaW1wb3J0IFRleHRFeGFtcGxlU3ZnIGZyb20gXCIuLi8uLi8uLi9zdmcvVGV4dEV4YW1wbGVTdmdcIjtcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIGltcG9ydChcIi4vVGV4dFNldHVwLnNjc3NcIik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRleHRTZXR1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIGNvbnN0IHBob25lTnVtYmVyID0gcHJvcHMudGV4dEl0ZW0gPyBwcm9wcy50ZXh0SXRlbS5waG9uZU51bWJlciA6IFwiXCI7XG4gICAgLy8gY29uc3Qga2V5Y29kZSA9IHByb3BzLnRleHRJdGVtID8gcHJvcHMudGV4dEl0ZW0ua2V5Y29kZSA6IFwiXCI7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHBob25lTnVtYmVyLFxuICAgICAgLy8ga2V5Y29kZSxcbiAgICB9O1xuICB9XG5cbiAgLy8gYXN5bmMgc2VuZEtleWNvZGUoKSB7XG4gIC8vICAgY29uc3Qga2V5Y29kZVNlbnRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwia2V5Y29kZS1zZW50XCIpO1xuICAvLyAgIGtleWNvZGVTZW50RWwuc3R5bGUub3BhY2l0eSA9IDAuNjtcbiAgLy8gICBhd2FpdCBkZWxheSgyMDAwKTtcbiAgLy8gICBrZXljb2RlU2VudEVsLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAvLyB9XG5cbiAgcmVuZGVyVGV4dENhcmQoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcGhvbmVOdW1iZXIsXG4gICAgICAvLyBrZXljb2RlXG4gICAgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGNvbnN0IHsgdG9nZ2xlRGlzcGxheUhvdyB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgaWQ9XCJ0ZXh0LXNldHVwXCIgY2xhc3NOYW1lPVwiY2FyZCBvd25lcjFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5UZXh0IExvZ2luPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0MVwiPkVudGVyIHlvdXIgcGhvbmUgbnVtYmVyPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlbWFpbC1zZWN0aW9uXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keS1zZWN0aW9uMlwiPlxuICAgICAgICAgICAgICAgIDxkaXY+UGhvbmUgTnVtYmVyPC9kaXY+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGVsXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXtwaG9uZU51bWJlcn1cbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgcGhvbmVOdW1iZXI6IGUudGFyZ2V0LnZhbHVlIH0pO1xuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cImtleWNvZGUtYnRuLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImtleWNvZGUtYnRuXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcyMTBweCcgfX1cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPVwiVGV4dCBtZSBteSBrZXljb2RlXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZW5kS2V5Y29kZSgpfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17IXBob25lTnVtYmVyfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJrZXljb2RlLXNlbnRcIj5Zb3VyIGtleWNvZGUgaGFzIGJlZW4gc2VudCE8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPVwiZW1haWwtc2VjdGlvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHktc2VjdGlvbjJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2PllvdXIgS2V5Y29kZTwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwia2V5Y29kZS1pbnB1dFwiPlxuICAgICAgICAgICAgICAgICAgPEtleWNvZGVJbnB1dFN2ZyAvPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgICAgICBtYXhMZW5ndGg9XCI2XCJcbiAgICAgICAgICAgICAgICAgICAgbWluTGVuZ3RoPVwiNlwiXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtrZXljb2RlfVxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsga2V5Y29kZTogZS50YXJnZXQudmFsdWUgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZXhjZXJwdFwiPlxuICAgICAgICAgICAgICAgICAgUGxlYXNlIGVudGVyIHlvdXIgNiBkaWdpdCBrZXljb2RlXG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+ICovfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtc2VjdGlvblwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICB2YWx1ZT1cIkxpbmsgUGhvbmVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cbiAgICAgICAgICAgICAgdGhpcy5wcm9wcy5oYW5kbGVHb0JhY2soXCJvd25lclwiLCAxMCwge1xuICAgICAgICAgICAgICAgIHRleHRJdGVtOiB7XG4gICAgICAgICAgICAgICAgICBwaG9uZU51bWJlcixcbiAgICAgICAgICAgICAgICAgIC8vICwga2V5Y29kZVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkaXNhYmxlZD17XG4gICAgICAgICAgICAgICFwaG9uZU51bWJlclxuICAgICAgICAgICAgICAvLyB8fCAha2V5Y29kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3dcIiBvbkNsaWNrPXt0b2dnbGVEaXNwbGF5SG93fT5cbiAgICAgICAgICAgIEhvdyBkb2VzIHRoaXMgd29yaz9cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgcmVuZGVySG93KCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvdy1jb250YWluZXJcIj5cbiAgICAgICAgPEhvd1N2ZyBsb2dpbk1ldGhvZD1cInRleHRcIiAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYy1leGNlcnB0XCI+XG4gICAgICAgICAgVHdvLXN0ZXAgdmVyaWZpY2F0aW9uIGlzIGEgc2ltcGxlIHdheSB0byBhdXRoZW50aWNhdGUgYSB1c2VyIGJ5XG4gICAgICAgICAgc2VuZGluZyBhIHVuaXF1ZSBjb2RlIHRvIHRoZWlyIG1vYmlsZSBkZXZpY2UuXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8VGV4dEV4YW1wbGVTdmcgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBpc0Rpc3BsYXlIb3cgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHJldHVybiAhaXNEaXNwbGF5SG93ID8gdGhpcy5yZW5kZXJUZXh0Q2FyZCgpIDogdGhpcy5yZW5kZXJIb3coKTtcbiAgfVxufVxuIl19