"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));

class LoginMethodOptionSvg extends _react.Component {




  render() {
    const { loginMethod, loginConfigure } = { ...this.props };
    return renderLoginMethod(loginMethod, loginConfigure);
  }}exports.default = LoginMethodOptionSvg;(0, _defineProperty2.default)(LoginMethodOptionSvg, "defaultProps", { loginMethod: "PasswordLoginType", loginConfigure: "none" // add, configure
});
const renderLoginConfigure = loginConfigure => {
  return /*#__PURE__*/(
    _react.default.createElement(_react.Fragment, null,
    loginConfigure === "add" && /*#__PURE__*/
    _react.default.createElement("g", {
      id: "Group_2598",
      "data-name": "Group 2598",
      transform: "translate(-113 -239)" }, /*#__PURE__*/

    _react.default.createElement("rect", {
      id: "Rectangle_1368",
      "data-name": "Rectangle 1368",
      width: "85",
      height: "18",
      rx: "9",
      transform: "translate(147 354)",
      fill: "#2362c7" }), /*#__PURE__*/

    _react.default.createElement("text", {
      id: "Add_Method",
      "data-name": "Add Method",
      transform: "translate(156 367)",
      fill: "#fff",
      fontSize: "12",
      fontFamily: "HelveticaNeue, Helvetica Neue" }, /*#__PURE__*/

    _react.default.createElement("tspan", { x: "0", y: "0" }, "Add Method"))),





    loginConfigure === "configure" && /*#__PURE__*/
    _react.default.createElement("g", {
      id: "Group_2600",
      "data-name": "Group 2600",
      transform: "translate(-105 -241)" }, /*#__PURE__*/

    _react.default.createElement("rect", {
      id: "Rectangle_1368",
      "data-name": "Rectangle 1368",
      width: "70",
      height: "18",
      rx: "9",
      transform: "translate(147 354)",
      fill: "#2362c7" }), /*#__PURE__*/

    _react.default.createElement("text", {
      id: "Configure",
      transform: "translate(156 367)",
      fill: "#fff",
      fontSize: "12",
      fontFamily: "HelveticaNeue, Helvetica Neue" }, /*#__PURE__*/

    _react.default.createElement("tspan", { x: "0", y: "0" }, "Configure")))));







};
const renderLoginMethod = (loginMethod, loginConfigure) => {
  const blue = "#2362c7";
  const grey = "#9a9a9a";
  switch (loginMethod) {
    case "SecurityQuestionsLoginType":
      if (loginConfigure === "none") {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_158_1",
            "data-name": "Component 158 \u2013 1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(37.279 36)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Security_Questions",
            "data-name": "Security Questions",

            transform: "translate(38.721 69.158)",
            fill: "#2362c7",
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-38.938", y: "0" }, "Security",
          " "), /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-45.101", y: "20" }, "Questions")), /*#__PURE__*/



          _react.default.createElement("g", {
            id: "Group_2129",
            "data-name": "Group 2129",
            transform: "translate(13.634 -11.603)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2126",
            "data-name": "Group 2126",
            transform: "translate(0)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1517",
            "data-name": "Path 1517",
            d: "M-351.334,22.1c-25.454,0-25.454,6.348-25.454,6.348V49.55a31.724,31.724,0,0,0,16.211,27.66l9.243,5.19,9.243-5.237A31.726,31.726,0,0,0-325.88,49.5V28.444S-327.471,22.1-351.334,22.1Zm-.388,49.492a2.713,2.713,0,0,1-2.713-2.713,2.713,2.713,0,0,1,2.713-2.713,2.713,2.713,0,0,1,2.713,2.713A2.713,2.713,0,0,1-351.722,71.588Zm8.243-18.566c-3.064,1.956-5.074,3.372-5.074,5.329a2.39,2.39,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.725,4.1-7.286,7.292-9.355,1.643-1.034,3.878-2.465,3.878-3.372,0-5.855-.655-10.341-8.777-10.341-8.537,0-8.777,6.427-8.777,7.158a2.389,2.389,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.12,2.841-11.931,13.563-11.931,13.563,0,13.563,10.595,13.563,15.113C-337.383,49.157-340.415,51.065-343.479,53.022Z",
            transform: "translate(376.788 -22.096)",
            fill: "#2362c7",
            fillRule: "evenodd" }))))));






      } else {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_158_1",
            "data-name": "Component 158 \u2013 1",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(38.279 27)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Security_Questions",
            "data-name": "Security\nQuestions",

            transform: "translate(38.721 69.158)",
            fill: loginConfigure === "configure" ? blue : grey,
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-38.938", y: "0" }, "Security",
          " "), /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-45.101", y: "20" }, "Questions")), /*#__PURE__*/



          _react.default.createElement("g", {
            id: "Group_2129",
            "data-name": "Group 2129",
            transform: "translate(13.634 -11.603)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2126",
            "data-name": "Group 2126",
            transform: "translate(0)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1517",
            "data-name": "Path 1517",
            d: "M-351.334,22.1c-25.454,0-25.454,6.348-25.454,6.348V49.55a31.724,31.724,0,0,0,16.211,27.66l9.243,5.19,9.243-5.237A31.726,31.726,0,0,0-325.88,49.5V28.444S-327.471,22.1-351.334,22.1Zm-.388,49.492a2.713,2.713,0,0,1-2.713-2.713,2.713,2.713,0,0,1,2.713-2.713,2.713,2.713,0,0,1,2.713,2.713A2.713,2.713,0,0,1-351.722,71.588Zm8.243-18.566c-3.064,1.956-5.074,3.372-5.074,5.329a2.39,2.39,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.725,4.1-7.286,7.292-9.355,1.643-1.034,3.878-2.465,3.878-3.372,0-5.855-.655-10.341-8.777-10.341-8.537,0-8.777,6.427-8.777,7.158a2.389,2.389,0,0,1-2.393,2.386,2.39,2.39,0,0,1-2.393-2.386c0-4.12,2.841-11.931,13.563-11.931,13.563,0,13.563,10.595,13.563,15.113C-337.383,49.157-340.415,51.065-343.479,53.022Z",
            transform: "translate(376.788 -22.096)",
            fill: loginConfigure === "configure" ? blue : grey,
            fillRule: "evenodd" })))), /*#__PURE__*/




          _react.default.createElement("g", { transform: "translate(0 7)" },
          renderLoginConfigure(loginConfigure))));



      }
    case "PasswordLoginType":
      if (loginConfigure === "none") {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_167_3",
            "data-name": "Component 167 \u2013 3",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(37.279 30)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(1 12.994)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Password",
            transform: "translate(38.721 69.158)",
            fill: "#2362c7",
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-43.154", y: "0" }, "Password")), /*#__PURE__*/



          _react.default.createElement("g", {
            id: "Group_1798",
            "data-name": "Group 1798",
            transform: "translate(-10.971 -1.43)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1510",
            "data-name": "Path 1510",
            d: "M93.72,44.672H92.5v-5.9A9.88,9.88,0,0,0,82.629,28.9H79.067A9.88,9.88,0,0,0,69.2,38.771v5.9H67.976A4.343,4.343,0,0,0,63.6,49.048V67.364a4.343,4.343,0,0,0,4.376,4.376H93.72A4.343,4.343,0,0,0,98.1,67.364V49.048A4.408,4.408,0,0,0,93.72,44.672ZM83.748,64.006a.714.714,0,0,1-.712.916H78.66a.75.75,0,0,1-.712-.916l1.425-5.7a3.37,3.37,0,0,1-2.035-3.154,3.46,3.46,0,1,1,6.92,0,3.37,3.37,0,0,1-2.035,3.154ZM86.6,44.672H75.1v-5.9A3.973,3.973,0,0,1,79.067,34.8h3.561A3.973,3.973,0,0,1,86.6,38.771v5.9Z",
            transform: "translate(-1.426 -28.9)",
            fill: "#2362c7" }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1511",
            "data-name": "Path 1511",
            d: "M23.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,11,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L19.755,52.52,22.3,51.095A1.518,1.518,0,0,0,23.011,49.06Z",
            transform: "translate(-2.354 -28.606)",
            fill: "#2362c7" }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1512",
            "data-name": "Path 1512",
            d: "M40.511,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425a1.482,1.482,0,0,0-.509,2.035,1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.887,1.887,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L37.255,52.52,39.8,51.095A1.518,1.518,0,0,0,40.511,49.06Z",
            transform: "translate(-2.047 -28.606)",
            fill: "#2362c7" }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1513",
            "data-name": "Path 1513",
            d: "M58.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,0,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,46,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L54.755,52.52,57.3,51.095A1.518,1.518,0,0,0,58.011,49.06Z",
            transform: "translate(-1.739 -28.606)",
            fill: "#2362c7" }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1514",
            "data-name": "Path 1514",
            d: "M65.793,40.025A1.391,1.391,0,0,0,64.369,38.6H10.539A8.056,8.056,0,0,0,2.5,46.639V58.545a8.056,8.056,0,0,0,8.039,8.039H58.772a1.425,1.425,0,1,0,0-2.849H10.539a5.211,5.211,0,0,1-5.19-5.19V46.639a5.211,5.211,0,0,1,5.19-5.19h53.83A1.335,1.335,0,0,0,65.793,40.025Z",
            transform: "translate(-2.5 -28.729)",
            fill: "#2362c7" }))))));






      } else {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_167_3",
            "data-name": "Component 167 \u2013 3",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(37.279 28)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(1 12.994)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Password",
            transform: "translate(38.721 63.158)",
            fill: loginConfigure === "configure" ? blue : grey,
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-43.154", y: "0" }, "Password")), /*#__PURE__*/



          _react.default.createElement("g", {
            id: "Group_1798",
            "data-name": "Group 1798",
            transform: "translate(-10.971 -1.43)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1510",
            "data-name": "Path 1510",
            d: "M93.72,44.672H92.5v-5.9A9.88,9.88,0,0,0,82.629,28.9H79.067A9.88,9.88,0,0,0,69.2,38.771v5.9H67.976A4.343,4.343,0,0,0,63.6,49.048V67.364a4.343,4.343,0,0,0,4.376,4.376H93.72A4.343,4.343,0,0,0,98.1,67.364V49.048A4.408,4.408,0,0,0,93.72,44.672ZM83.748,64.006a.714.714,0,0,1-.712.916H78.66a.75.75,0,0,1-.712-.916l1.425-5.7a3.37,3.37,0,0,1-2.035-3.154,3.46,3.46,0,1,1,6.92,0,3.37,3.37,0,0,1-2.035,3.154ZM86.6,44.672H75.1v-5.9A3.973,3.973,0,0,1,79.067,34.8h3.561A3.973,3.973,0,0,1,86.6,38.771v5.9Z",
            transform: "translate(-1.426 -28.9)",
            fill: loginConfigure === "configure" ? blue : grey }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1511",
            "data-name": "Path 1511",
            d: "M23.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,11,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L19.755,52.52,22.3,51.095A1.518,1.518,0,0,0,23.011,49.06Z",
            transform: "translate(-2.354 -28.606)",
            fill: loginConfigure === "configure" ? blue : grey }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1512",
            "data-name": "Path 1512",
            d: "M40.511,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,1,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425a1.482,1.482,0,0,0-.509,2.035,1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.887,1.887,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L37.255,52.52,39.8,51.095A1.518,1.518,0,0,0,40.511,49.06Z",
            transform: "translate(-2.047 -28.606)",
            fill: loginConfigure === "configure" ? blue : grey }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1513",
            "data-name": "Path 1513",
            d: "M58.011,49.06a1.482,1.482,0,0,0-2.035-.509l-2.544,1.425V47.025a1.425,1.425,0,0,0-2.849,0v2.951l-2.544-1.425a1.483,1.483,0,1,0-1.526,2.544l2.544,1.425-2.544,1.425A1.482,1.482,0,0,0,46,55.979a1.329,1.329,0,0,0,1.221.712,1.886,1.886,0,0,0,.712-.2l2.544-1.425v2.951a1.425,1.425,0,0,0,2.849,0V55.063l2.544,1.425a1.886,1.886,0,0,0,.712.2,1.412,1.412,0,0,0,1.221-.712,1.482,1.482,0,0,0-.509-2.035L54.755,52.52,57.3,51.095A1.518,1.518,0,0,0,58.011,49.06Z",
            transform: "translate(-1.739 -28.606)",
            fill: loginConfigure === "configure" ? blue : grey }), /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1514",
            "data-name": "Path 1514",
            d: "M65.793,40.025A1.391,1.391,0,0,0,64.369,38.6H10.539A8.056,8.056,0,0,0,2.5,46.639V58.545a8.056,8.056,0,0,0,8.039,8.039H58.772a1.425,1.425,0,1,0,0-2.849H10.539a5.211,5.211,0,0,1-5.19-5.19V46.639a5.211,5.211,0,0,1,5.19-5.19h53.83A1.335,1.335,0,0,0,65.793,40.025Z",
            transform: "translate(-2.5 -28.729)",
            fill: loginConfigure === "configure" ? blue : grey })))),




          renderLoginConfigure(loginConfigure)));


      }
    case "TextLoginType":
      if (loginConfigure === "none") {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_168_3",
            "data-name": "Component 168 \u2013 3",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(37.279 30)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(1 12.994)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Text_Login",
            "data-name": "Text Login",
            transform: "translate(38.721 69.158)",
            fill: "#2362c7",
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-46.232", y: "0" }, "Text Login")))), /*#__PURE__*/





          _react.default.createElement("g", {
            id: "Group_2376",
            "data-name": "Group 2376",
            transform: "translate(10980 9505.859)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "noun_Phone_1375627_1_",
            "data-name": "noun_Phone_1375627 (1)",
            transform: "translate(-10921 -9480.255)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1909",
            "data-name": "Path 1909",
            d: "M31.505,958.363A4.406,4.406,0,0,0,27,962.685v54.748a4.405,4.405,0,0,0,4.505,4.321H57.037a4.405,4.405,0,0,0,4.505-4.321V962.685a4.405,4.405,0,0,0-4.505-4.323H31.505Zm8.26,2.873h9a.72.72,0,1,1,0,1.44h-9a.72.72,0,1,1,0-1.44ZM30,965.56H58.536v46.106H30Zm14.266,48.27a2.885,2.885,0,1,1-3,2.873,2.944,2.944,0,0,1,3.011-2.869Z",
            transform: "translate(-27 -958.361)",
            fill: "#2362c7",
            stroke: "#fff",
            strokeWidth: "0.2" })), /*#__PURE__*/


          _react.default.createElement("path", {
            id: "Rectangle_1288",
            "data-name": "Rectangle 1288",
            d: "M0,0H26.817V44.056H0Z",
            transform: "translate(-10917.169 -9472.104)",
            fill: "#2362c7",
            opacity: "0.5" }))));




      } else {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_168_35",
            "data-name": "Component 168 \u2013 35",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(37.279 26)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(1 12.994)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Text_Login",
            "data-name": "Text Login",
            transform: "translate(38.721 69.158)",
            fill: loginConfigure === "configure" ? blue : grey,
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-46.232", y: "0" }, "Text Login")))), /*#__PURE__*/





          _react.default.createElement("g", {
            id: "Group_2376",
            "data-name": "Group 2376",
            transform: "translate(10980 9501.859)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "noun_Phone_1375627_1_",
            "data-name": "noun_Phone_1375627 (1)",
            transform: "translate(-10921 -9480.255)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Path_1909",
            "data-name": "Path 1909",
            d: "M31.505,958.363A4.406,4.406,0,0,0,27,962.685v54.748a4.405,4.405,0,0,0,4.505,4.321H57.037a4.405,4.405,0,0,0,4.505-4.321V962.685a4.405,4.405,0,0,0-4.505-4.323H31.505Zm8.26,2.873h9a.72.72,0,1,1,0,1.44h-9a.72.72,0,1,1,0-1.44ZM30,965.56H58.536v46.106H30Zm14.266,48.27a2.885,2.885,0,1,1-3,2.873,2.944,2.944,0,0,1,3.011-2.869Z",
            transform: "translate(-27 -958.361)",
            fill: loginConfigure === "configure" ? blue : grey,
            stroke: "#fff",
            strokeWidth: "0.2" })), /*#__PURE__*/


          _react.default.createElement("path", {
            id: "Rectangle_1288",
            "data-name": "Rectangle 1288",
            d: "M0,0H26.817V44.056H0Z",
            transform: "translate(-10917.169 -9472.104)",
            fill: loginConfigure === "configure" ? blue : grey,
            opacity: "0.5" })),


          renderLoginConfigure(loginConfigure)));


      }
    case "SocialSupportType":
      if (loginConfigure === "none") {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 394 394" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Component_169_1",
            "data-name": "Component 169 \u2013 1",
            transform: "translate(0 -0.235)" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "394",
            height: "394",
            rx: "195",
            transform: "translate(0 0.235)",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(105.582 65.276)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(0 0)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Social_Support",
            "data-name": "Social Support",

            transform: "translate(87 214.606)",
            fill: "#2362c7",
            fontSize: "41",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-69.413", y: "0" }, "Social",
          " "), /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-86.941", y: "50" }, "Support")), /*#__PURE__*/



          _react.default.createElement("g", {
            id: "Group_1773",
            "data-name": "Group 1773",
            transform: "translate(31.933 0)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Union_69",
            "data-name": "Union 69",
            d: "M26.155,157.975c-7.713,0-14.053-2.466-18.842-7.324C2.462,145.727,0,139.052,0,130.8c0-3.17.1-6.309.3-9.329a99.269,99.269,0,0,1,1.2-9.983,83.319,83.319,0,0,1,2.3-10.036A51.025,51.025,0,0,1,7.674,92.1a35.056,35.056,0,0,1,5.836-8.109,25.541,25.541,0,0,1,8.39-5.613,27.35,27.35,0,0,1,10.706-2.07c1.512,0,2.977.662,5.8,2.624,1.766,1.227,3.8,2.624,6.051,4.155a33.594,33.594,0,0,0,7.821,3.674,28.631,28.631,0,0,0,19.138,0,33.67,33.67,0,0,0,7.821-3.674c2.273-1.546,4.308-2.943,6.047-4.155,2.827-1.958,4.293-2.62,5.8-2.62a27.449,27.449,0,0,1,10.71,2.062,25.552,25.552,0,0,1,8.386,5.616,35.181,35.181,0,0,1,5.84,8.109,51.3,51.3,0,0,1,3.874,9.359,83.322,83.322,0,0,1,2.3,10.036c.592,3.543,1,6.9,1.2,9.979.2,3.008.3,6.151.3,9.332,0,8.248-2.462,14.926-7.313,19.846-4.793,4.859-11.133,7.324-18.842,7.324ZM35.664,64.95a38.08,38.08,0,0,1-10.46-26.9,38.077,38.077,0,0,1,10.46-26.9,34.179,34.179,0,0,1,50.5,0,38.07,38.07,0,0,1,10.463,26.9,38.066,38.066,0,0,1-10.463,26.9,34.179,34.179,0,0,1-50.5,0Z",
            transform: "translate(0 0)",
            fill: "#2362c7" })))))));







      } else {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_169_3",
            "data-name": "Component 169 \u2013 3",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(37.279 30)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(1 12.994)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Social_Support",
            "data-name": "Social Support",
            transform: "translate(38.721 54.158)",
            fill: loginConfigure === "configure" ? blue : grey,
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-64.829", y: "0" }, "Social Support")), /*#__PURE__*/



          _react.default.createElement("g", {
            id: "Group_1773",
            "data-name": "Group 1773",
            transform: "translate(15.121 -28.646)" }, /*#__PURE__*/

          _react.default.createElement("path", {
            id: "Union_69",
            "data-name": "Union 69",
            d: "M10.157,61.346A9.863,9.863,0,0,1,2.84,58.5,10.548,10.548,0,0,1,0,50.795c0-1.231.039-2.45.115-3.623A38.549,38.549,0,0,1,.581,43.3a32.355,32.355,0,0,1,.895-3.9,19.814,19.814,0,0,1,1.5-3.634,13.613,13.613,0,0,1,2.266-3.149A9.918,9.918,0,0,1,8.5,30.435a10.621,10.621,0,0,1,4.157-.8,4.074,4.074,0,0,1,2.253,1.019c.686.477,1.477,1.019,2.35,1.613A13.045,13.045,0,0,0,20.3,33.69a11.118,11.118,0,0,0,7.432,0,13.075,13.075,0,0,0,3.037-1.427c.883-.6,1.673-1.143,2.348-1.613a4.088,4.088,0,0,1,2.254-1.017,10.659,10.659,0,0,1,4.159.8,9.923,9.923,0,0,1,3.257,2.181,13.662,13.662,0,0,1,2.268,3.149,19.92,19.92,0,0,1,1.5,3.634,32.356,32.356,0,0,1,.895,3.9c.23,1.376.388,2.68.466,3.875.076,1.168.115,2.389.117,3.624A10.545,10.545,0,0,1,45.2,58.5a9.867,9.867,0,0,1-7.317,2.844Zm3.693-36.124A14.787,14.787,0,0,1,9.788,14.774,14.786,14.786,0,0,1,13.849,4.328a13.272,13.272,0,0,1,19.611,0,14.784,14.784,0,0,1,4.063,10.446A14.782,14.782,0,0,1,33.46,25.222a13.272,13.272,0,0,1-19.611,0Z",
            transform: "translate(0 0)",
            fill: loginConfigure === "configure" ? blue : grey })))),




          renderLoginConfigure(loginConfigure)));


      }

    case "PalmLoginType":
      if (loginConfigure === "none") {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            id: "Component_166_12",
            "data-name": "Component 166 \u2013 12",
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(37.279 30)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(1 12.994)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Palm_Login",
            "data-name": "Palm Login",
            transform: "translate(38.721 69.158)",
            fill: "#2362c7",
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-50.269", y: "0" }, "Palm Login")), /*#__PURE__*/



          _react.default.createElement("path", {
            id: "Path_1504",
            "data-name": "Path 1504",
            d: "M-506.9-76.7a3.072,3.072,0,0,0-3.068,3.068v14.657a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-22.5a3.072,3.072,0,0,0-3.068-3.068,3.063,3.063,0,0,0-3.033,2.673v21.434a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-20.7a1.513,1.513,0,0,1-.04-.334v-2.377a3.066,3.066,0,0,0-.9-2.174,3.06,3.06,0,0,0-2.168-.895,3.072,3.072,0,0,0-3.068,3.068v23.414a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5V-79.41s0-.005,0-.008a3.045,3.045,0,0,0-.9-2.168,3.048,3.048,0,0,0-2.169-.905,3.076,3.076,0,0,0-3.073,3.073v15.455a6.033,6.033,0,0,1,1.12,3.489v8.051a1.793,1.793,0,0,0,1.325,1.712,16.778,16.778,0,0,1,7.235,4.246,17.232,17.232,0,0,1,4.742,9.27,1.5,1.5,0,0,1-1.235,1.73,1.5,1.5,0,0,1-.25.021,1.5,1.5,0,0,1-1.48-1.256,14.2,14.2,0,0,0-3.9-7.637,13.811,13.811,0,0,0-5.956-3.49,4.775,4.775,0,0,1-3.488-4.6v-8.051a2.993,2.993,0,0,0-.751-1.989l-.046-.053c-.8-.915-.93-1.032-1.615-1.032h-3.245l.007,18.061c0,11.7,7.908,20.187,18.8,20.187h2.423A19.976,19.976,0,0,0-509.641-31a19.057,19.057,0,0,0,5.812-13.72V-73.634a3.037,3.037,0,0,0-.9-2.168A3.033,3.033,0,0,0-506.9-76.7Z",
            transform: "translate(561.207 70.572)",
            fill: "#2362c7" })))));





      } else {
        return /*#__PURE__*/(
          _react.default.createElement("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "153",
            height: "153",
            viewBox: "0 0 153 153" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2602",
            "data-name": "Group 2602",
            transform: "translate(-104 -412)" }, /*#__PURE__*/

          _react.default.createElement("rect", {
            id: "Rectangle_1279",
            "data-name": "Rectangle 1279",
            width: "153",
            height: "153",
            rx: "76.5",
            transform: "translate(104 412)",
            fill: "#fff" }), /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2299",
            "data-name": "Group 2299",
            transform: "translate(142.279 440)" }, /*#__PURE__*/

          _react.default.createElement("g", {
            id: "Group_2302",
            "data-name": "Group 2302",
            transform: "translate(1 12.994)" }, /*#__PURE__*/

          _react.default.createElement("text", {
            id: "Palm_Login",
            "data-name": "Palm Login",
            transform: "translate(38.721 67.158)",
            fill: loginConfigure === "configure" ? blue : grey,
            fontSize: "17",
            fontFamily: "Montserrat-Bold, Montserrat",
            fontWeight: "700" }, /*#__PURE__*/

          _react.default.createElement("tspan", { x: "-50.269", y: "0" }, "Palm Login")), /*#__PURE__*/



          _react.default.createElement("path", {
            id: "Path_1504",
            "data-name": "Path 1504",
            d: "M-506.9-76.7a3.072,3.072,0,0,0-3.068,3.068v14.657a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-22.5a3.072,3.072,0,0,0-3.068-3.068,3.063,3.063,0,0,0-3.033,2.673v21.434a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5v-20.7a1.513,1.513,0,0,1-.04-.334v-2.377a3.066,3.066,0,0,0-.9-2.174,3.06,3.06,0,0,0-2.168-.895,3.072,3.072,0,0,0-3.068,3.068v23.414a1.5,1.5,0,0,1-1.5,1.5,1.5,1.5,0,0,1-1.5-1.5V-79.41s0-.005,0-.008a3.045,3.045,0,0,0-.9-2.168,3.048,3.048,0,0,0-2.169-.905,3.076,3.076,0,0,0-3.073,3.073v15.455a6.033,6.033,0,0,1,1.12,3.489v8.051a1.793,1.793,0,0,0,1.325,1.712,16.778,16.778,0,0,1,7.235,4.246,17.232,17.232,0,0,1,4.742,9.27,1.5,1.5,0,0,1-1.235,1.73,1.5,1.5,0,0,1-.25.021,1.5,1.5,0,0,1-1.48-1.256,14.2,14.2,0,0,0-3.9-7.637,13.811,13.811,0,0,0-5.956-3.49,4.775,4.775,0,0,1-3.488-4.6v-8.051a2.993,2.993,0,0,0-.751-1.989l-.046-.053c-.8-.915-.93-1.032-1.615-1.032h-3.245l.007,18.061c0,11.7,7.908,20.187,18.8,20.187h2.423A19.976,19.976,0,0,0-509.641-31a19.057,19.057,0,0,0,5.812-13.72V-73.634a3.037,3.037,0,0,0-.9-2.168A3.033,3.033,0,0,0-506.9-76.7Z",
            transform: "translate(561.207 70.572)",
            fill: loginConfigure === "configure" ? blue : grey }))), /*#__PURE__*/



          _react.default.createElement("g", { transform: "translate(105 416)" }, renderLoginConfigure(loginConfigure)))));



      }}

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N2Zy9Mb2dpbk1ldGhvZE9wdGlvblN2Zy5qc3giXSwibmFtZXMiOlsiTG9naW5NZXRob2RPcHRpb25TdmciLCJDb21wb25lbnQiLCJyZW5kZXIiLCJsb2dpbk1ldGhvZCIsImxvZ2luQ29uZmlndXJlIiwicHJvcHMiLCJyZW5kZXJMb2dpbk1ldGhvZCIsInJlbmRlckxvZ2luQ29uZmlndXJlIiwiYmx1ZSIsImdyZXkiXSwibWFwcGluZ3MiOiJnWEFBQTs7QUFFZSxNQUFNQSxvQkFBTixTQUFtQ0MsZ0JBQW5DLENBQTZDOzs7OztBQUsxREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTSxFQUFFQyxXQUFGLEVBQWVDLGNBQWYsS0FBa0MsRUFBRSxHQUFHLEtBQUtDLEtBQVYsRUFBeEM7QUFDQSxXQUFPQyxpQkFBaUIsQ0FBQ0gsV0FBRCxFQUFjQyxjQUFkLENBQXhCO0FBQ0QsR0FSeUQsQyxxRUFBdkNKLG9CLGtCQUNHLEVBQ3BCRyxXQUFXLEVBQUUsbUJBRE8sRUFFcEJDLGNBQWMsRUFBRSxNQUZJLENBRUk7QUFGSixDO0FBU3hCLE1BQU1HLG9CQUFvQixHQUFJSCxjQUFELElBQW9CO0FBQy9DO0FBQ0UsaUNBQUMsZUFBRDtBQUNHQSxJQUFBQSxjQUFjLEtBQUssS0FBbkI7QUFDQztBQUNFLE1BQUEsRUFBRSxFQUFDLFlBREw7QUFFRSxtQkFBVSxZQUZaO0FBR0UsTUFBQSxTQUFTLEVBQUMsc0JBSFo7O0FBS0U7QUFDRSxNQUFBLEVBQUUsRUFBQyxnQkFETDtBQUVFLG1CQUFVLGdCQUZaO0FBR0UsTUFBQSxLQUFLLEVBQUMsSUFIUjtBQUlFLE1BQUEsTUFBTSxFQUFDLElBSlQ7QUFLRSxNQUFBLEVBQUUsRUFBQyxHQUxMO0FBTUUsTUFBQSxTQUFTLEVBQUMsb0JBTlo7QUFPRSxNQUFBLElBQUksRUFBQyxTQVBQLEdBTEY7O0FBY0U7QUFDRSxNQUFBLEVBQUUsRUFBQyxZQURMO0FBRUUsbUJBQVUsWUFGWjtBQUdF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O0FBS0UsWUFBQSxRQUFRLEVBQUMsSUFMWDtBQU1FLFlBQUEsVUFBVSxFQUFDLDZCQU5iO0FBT0UsWUFBQSxVQUFVLEVBQUMsS0FQYjs7QUFTRSxrREFBTyxDQUFDLEVBQUMsU0FBVCxFQUFtQixDQUFDLEVBQUMsR0FBckIsaUJBVEYsQ0FMRjs7OztBQWtCRTtBQUNFLFlBQUEsRUFBRSxFQUFDLFdBREw7QUFFRSx5QkFBVSxXQUZaO0FBR0UsWUFBQSxDQUFDLEVBQUMseWhDQUhKO0FBSUUsWUFBQSxTQUFTLEVBQUMsMkJBSlo7QUFLRSxZQUFBLElBQUksRUFBRUwsY0FBYyxLQUFLLFdBQW5CLEdBQWlDSSxJQUFqQyxHQUF3Q0MsSUFMaEQsR0FsQkYsQ0FMRixDQWRGOzs7O0FBOENFLDhDQUFHLFNBQVMsRUFBQyxvQkFBYixJQUFtQ0Ysb0JBQW9CLENBQUNILGNBQUQsQ0FBdkQsQ0E5Q0YsQ0FORixDQURGOzs7O0FBeURELE9BeHJCTDs7QUEwckJELENBN3JCRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luTWV0aG9kT3B0aW9uU3ZnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBsb2dpbk1ldGhvZDogXCJQYXNzd29yZExvZ2luVHlwZVwiLFxuICAgIGxvZ2luQ29uZmlndXJlOiBcIm5vbmVcIiwgLy8gYWRkLCBjb25maWd1cmVcbiAgfTtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgbG9naW5NZXRob2QsIGxvZ2luQ29uZmlndXJlIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICByZXR1cm4gcmVuZGVyTG9naW5NZXRob2QobG9naW5NZXRob2QsIGxvZ2luQ29uZmlndXJlKTtcbiAgfVxufVxuY29uc3QgcmVuZGVyTG9naW5Db25maWd1cmUgPSAobG9naW5Db25maWd1cmUpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICB7bG9naW5Db25maWd1cmUgPT09IFwiYWRkXCIgJiYgKFxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiR3JvdXBfMjU5OFwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjU5OFwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMTMgLTIzOSlcIlxuICAgICAgICA+XG4gICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEzNjhcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDEzNjhcIlxuICAgICAgICAgICAgd2lkdGg9XCI4NVwiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxOFwiXG4gICAgICAgICAgICByeD1cIjlcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE0NyAzNTQpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjMjM2MmM3XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICBpZD1cIkFkZF9NZXRob2RcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiQWRkIE1ldGhvZFwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTU2IDM2NylcIlxuICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgZm9udFNpemU9XCIxMlwiXG4gICAgICAgICAgICBmb250RmFtaWx5PVwiSGVsdmV0aWNhTmV1ZSwgSGVsdmV0aWNhIE5ldWVcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDx0c3BhbiB4PVwiMFwiIHk9XCIwXCI+XG4gICAgICAgICAgICAgIEFkZCBNZXRob2RcbiAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L2c+XG4gICAgICApfVxuICAgICAge2xvZ2luQ29uZmlndXJlID09PSBcImNvbmZpZ3VyZVwiICYmIChcbiAgICAgICAgPGdcbiAgICAgICAgICBpZD1cIkdyb3VwXzI2MDBcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDI2MDBcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTA1IC0yNDEpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMzY4XCJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMzY4XCJcbiAgICAgICAgICAgIHdpZHRoPVwiNzBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMThcIlxuICAgICAgICAgICAgcng9XCI5XCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxNDcgMzU0KVwiXG4gICAgICAgICAgICBmaWxsPVwiIzIzNjJjN1wiXG4gICAgICAgICAgLz5cbiAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgaWQ9XCJDb25maWd1cmVcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE1NiAzNjcpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgIGZvbnRTaXplPVwiMTJcIlxuICAgICAgICAgICAgZm9udEZhbWlseT1cIkhlbHZldGljYU5ldWUsIEhlbHZldGljYSBOZXVlXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8dHNwYW4geD1cIjBcIiB5PVwiMFwiPlxuICAgICAgICAgICAgICBDb25maWd1cmVcbiAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgPC90ZXh0PlxuICAgICAgICA8L2c+XG4gICAgICApfVxuICAgIDwvRnJhZ21lbnQ+XG4gICk7XG59O1xuY29uc3QgcmVuZGVyTG9naW5NZXRob2QgPSAobG9naW5NZXRob2QsIGxvZ2luQ29uZmlndXJlKSA9PiB7XG4gIGNvbnN0IGJsdWUgPSBcIiMyMzYyYzdcIjtcbiAgY29uc3QgZ3JleSA9IFwiIzlhOWE5YVwiO1xuICBzd2l0Y2ggKGxvZ2luTWV0aG9kKSB7XG4gICAgY2FzZSBcIlNlY3VyaXR5UXVlc3Rpb25zTG9naW5UeXBlXCI6XG4gICAgICBpZiAobG9naW5Db25maWd1cmUgPT09IFwibm9uZVwiKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgaWQ9XCJDb21wb25lbnRfMTU4XzFcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiQ29tcG9uZW50IDE1OCDigJMgMVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MyAxNTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyNzlcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI3OVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUzXCJcbiAgICAgICAgICAgICAgcng9XCI3Ni41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjI5OVwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIyOTlcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzcuMjc5IDM2KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgaWQ9XCJTZWN1cml0eV9RdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlNlY3VyaXR5XG4gICAgICBRdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOC43MjEgNjkuMTU4KVwiXG4gICAgICAgICAgICAgICAgZmlsbD1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTdcIlxuICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRzcGFuIHg9XCItMzguOTM4XCIgeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgIFNlY3VyaXR5e1wiIFwifVxuICAgICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgICAgPHRzcGFuIHg9XCItNDUuMTAxXCIgeT1cIjIwXCI+XG4gICAgICAgICAgICAgICAgICBRdWVzdGlvbnNcbiAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMTI5XCJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMTI5XCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTMuNjM0IC0xMS42MDMpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkdyb3VwXzIxMjZcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjEyNlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMClcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xNTE3XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTE3XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0tMzUxLjMzNCwyMi4xYy0yNS40NTQsMC0yNS40NTQsNi4zNDgtMjUuNDU0LDYuMzQ4VjQ5LjU1YTMxLjcyNCwzMS43MjQsMCwwLDAsMTYuMjExLDI3LjY2bDkuMjQzLDUuMTksOS4yNDMtNS4yMzdBMzEuNzI2LDMxLjcyNiwwLDAsMC0zMjUuODgsNDkuNVYyOC40NDRTLTMyNy40NzEsMjIuMS0zNTEuMzM0LDIyLjFabS0uMzg4LDQ5LjQ5MmEyLjcxMywyLjcxMywwLDAsMS0yLjcxMy0yLjcxMywyLjcxMywyLjcxMywwLDAsMSwyLjcxMy0yLjcxMywyLjcxMywyLjcxMywwLDAsMSwyLjcxMywyLjcxM0EyLjcxMywyLjcxMywwLDAsMS0zNTEuNzIyLDcxLjU4OFptOC4yNDMtMTguNTY2Yy0zLjA2NCwxLjk1Ni01LjA3NCwzLjM3Mi01LjA3NCw1LjMyOWEyLjM5LDIuMzksMCwwLDEtMi4zOTMsMi4zODYsMi4zOSwyLjM5LDAsMCwxLTIuMzkzLTIuMzg2YzAtNC43MjUsNC4xLTcuMjg2LDcuMjkyLTkuMzU1LDEuNjQzLTEuMDM0LDMuODc4LTIuNDY1LDMuODc4LTMuMzcyLDAtNS44NTUtLjY1NS0xMC4zNDEtOC43NzctMTAuMzQxLTguNTM3LDAtOC43NzcsNi40MjctOC43NzcsNy4xNThhMi4zODksMi4zODksMCwwLDEtMi4zOTMsMi4zODYsMi4zOSwyLjM5LDAsMCwxLTIuMzkzLTIuMzg2YzAtNC4xMiwyLjg0MS0xMS45MzEsMTMuNTYzLTExLjkzMSwxMy41NjMsMCwxMy41NjMsMTAuNTk1LDEzLjU2MywxNS4xMTNDLTMzNy4zODMsNDkuMTU3LTM0MC40MTUsNTEuMDY1LTM0My40NzksNTMuMDIyWlwiXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNzYuNzg4IC0yMi4wOTYpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsUnVsZT1cImV2ZW5vZGRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgaWQ9XCJDb21wb25lbnRfMTU4XzFcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiQ29tcG9uZW50IDE1OCDigJMgMVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MyAxNTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyNzlcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI3OVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUzXCJcbiAgICAgICAgICAgICAgcng9XCI3Ni41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjI5OVwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIyOTlcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzguMjc5IDI3KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgaWQ9XCJTZWN1cml0eV9RdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlNlY3VyaXR5XG5RdWVzdGlvbnNcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOC43MjEgNjkuMTU4KVwiXG4gICAgICAgICAgICAgICAgZmlsbD17bG9naW5Db25maWd1cmUgPT09IFwiY29uZmlndXJlXCIgPyBibHVlIDogZ3JleX1cbiAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE3XCJcbiAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiTW9udHNlcnJhdC1Cb2xkLCBNb250c2VycmF0XCJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0c3BhbiB4PVwiLTM4LjkzOFwiIHk9XCIwXCI+XG4gICAgICAgICAgICAgICAgICBTZWN1cml0eXtcIiBcIn1cbiAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgIDx0c3BhbiB4PVwiLTQ1LjEwMVwiIHk9XCIyMFwiPlxuICAgICAgICAgICAgICAgICAgUXVlc3Rpb25zXG4gICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjEyOVwiXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjEyOVwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEzLjYzNCAtMTEuNjAzKVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMTI2XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIxMjZcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDApXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMTUxN1wiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTUxN1wiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNLTM1MS4zMzQsMjIuMWMtMjUuNDU0LDAtMjUuNDU0LDYuMzQ4LTI1LjQ1NCw2LjM0OFY0OS41NWEzMS43MjQsMzEuNzI0LDAsMCwwLDE2LjIxMSwyNy42Nmw5LjI0Myw1LjE5LDkuMjQzLTUuMjM3QTMxLjcyNiwzMS43MjYsMCwwLDAtMzI1Ljg4LDQ5LjVWMjguNDQ0Uy0zMjcuNDcxLDIyLjEtMzUxLjMzNCwyMi4xWm0tLjM4OCw0OS40OTJhMi43MTMsMi43MTMsMCwwLDEtMi43MTMtMi43MTMsMi43MTMsMi43MTMsMCwwLDEsMi43MTMtMi43MTMsMi43MTMsMi43MTMsMCwwLDEsMi43MTMsMi43MTNBMi43MTMsMi43MTMsMCwwLDEtMzUxLjcyMiw3MS41ODhabTguMjQzLTE4LjU2NmMtMy4wNjQsMS45NTYtNS4wNzQsMy4zNzItNS4wNzQsNS4zMjlhMi4zOSwyLjM5LDAsMCwxLTIuMzkzLDIuMzg2LDIuMzksMi4zOSwwLDAsMS0yLjM5My0yLjM4NmMwLTQuNzI1LDQuMS03LjI4Niw3LjI5Mi05LjM1NSwxLjY0My0xLjAzNCwzLjg3OC0yLjQ2NSwzLjg3OC0zLjM3MiwwLTUuODU1LS42NTUtMTAuMzQxLTguNzc3LTEwLjM0MS04LjUzNywwLTguNzc3LDYuNDI3LTguNzc3LDcuMTU4YTIuMzg5LDIuMzg5LDAsMCwxLTIuMzkzLDIuMzg2LDIuMzksMi4zOSwwLDAsMS0yLjM5My0yLjM4NmMwLTQuMTIsMi44NDEtMTEuOTMxLDEzLjU2My0xMS45MzEsMTMuNTYzLDAsMTMuNTYzLDEwLjU5NSwxMy41NjMsMTUuMTEzQy0zMzcuMzgzLDQ5LjE1Ny0zNDAuNDE1LDUxLjA2NS0zNDMuNDc5LDUzLjAyMlpcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzc2Ljc4OCAtMjIuMDk2KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9e2xvZ2luQ29uZmlndXJlID09PSBcImNvbmZpZ3VyZVwiID8gYmx1ZSA6IGdyZXl9XG4gICAgICAgICAgICAgICAgICAgIGZpbGxSdWxlPVwiZXZlbm9kZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGcgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgNylcIj5cbiAgICAgICAgICAgICAge3JlbmRlckxvZ2luQ29uZmlndXJlKGxvZ2luQ29uZmlndXJlKX1cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICBjYXNlIFwiUGFzc3dvcmRMb2dpblR5cGVcIjpcbiAgICAgIGlmIChsb2dpbkNvbmZpZ3VyZSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBpZD1cIkNvbXBvbmVudF8xNjdfM1wiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTY3IOKAkyAzXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgd2lkdGg9XCIxNTNcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTUzXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUzIDE1M1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI3OVwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjc5XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTNcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTNcIlxuICAgICAgICAgICAgICByeD1cIjc2LjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMjk5XCJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjI5OVwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNy4yNzkgMzApXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cIkdyb3VwXzIzMDJcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIzMDJcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEyLjk5NClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIGlkPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4LjcyMSA2OS4xNTgpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dHNwYW4geD1cIi00My4xNTRcIiB5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgIGlkPVwiR3JvdXBfMTc5OFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAxNzk4XCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTAuOTcxIC0xLjQzKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzE1MTBcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1MTBcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTkzLjcyLDQ0LjY3Mkg5Mi41di01LjlBOS44OCw5Ljg4LDAsMCwwLDgyLjYyOSwyOC45SDc5LjA2N0E5Ljg4LDkuODgsMCwwLDAsNjkuMiwzOC43NzF2NS45SDY3Ljk3NkE0LjM0Myw0LjM0MywwLDAsMCw2My42LDQ5LjA0OFY2Ny4zNjRhNC4zNDMsNC4zNDMsMCwwLDAsNC4zNzYsNC4zNzZIOTMuNzJBNC4zNDMsNC4zNDMsMCwwLDAsOTguMSw2Ny4zNjRWNDkuMDQ4QTQuNDA4LDQuNDA4LDAsMCwwLDkzLjcyLDQ0LjY3MlpNODMuNzQ4LDY0LjAwNmEuNzE0LjcxNCwwLDAsMS0uNzEyLjkxNkg3OC42NmEuNzUuNzUsMCwwLDEtLjcxMi0uOTE2bDEuNDI1LTUuN2EzLjM3LDMuMzcsMCwwLDEtMi4wMzUtMy4xNTQsMy40NiwzLjQ2LDAsMSwxLDYuOTIsMCwzLjM3LDMuMzcsMCwwLDEtMi4wMzUsMy4xNTRaTTg2LjYsNDQuNjcySDc1LjF2LTUuOUEzLjk3MywzLjk3MywwLDAsMSw3OS4wNjcsMzQuOGgzLjU2MUEzLjk3MywzLjk3MywwLDAsMSw4Ni42LDM4Ljc3MXY1LjlaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xLjQyNiAtMjguOSlcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzE1MTFcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1MTFcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTIzLjAxMSw0OS4wNmExLjQ4MiwxLjQ4MiwwLDAsMC0yLjAzNS0uNTA5bC0yLjU0NCwxLjQyNVY0Ny4wMjVhMS40MjUsMS40MjUsMCwxLDAtMi44NDksMHYyLjk1MWwtMi41NDQtMS40MjVhMS40ODMsMS40ODMsMCwxLDAtMS41MjYsMi41NDRsMi41NDQsMS40MjUtMi41NDQsMS40MjVBMS40ODIsMS40ODIsMCwwLDAsMTEsNTUuOTc5YTEuMzI5LDEuMzI5LDAsMCwwLDEuMjIxLjcxMiwxLjg4NiwxLjg4NiwwLDAsMCwuNzEyLS4ybDIuNTQ0LTEuNDI1djIuOTUxYTEuNDI1LDEuNDI1LDAsMCwwLDIuODQ5LDBWNTUuMDYzbDIuNTQ0LDEuNDI1YTEuODg2LDEuODg2LDAsMCwwLC43MTIuMiwxLjQxMiwxLjQxMiwwLDAsMCwxLjIyMS0uNzEyLDEuNDgyLDEuNDgyLDAsMCwwLS41MDktMi4wMzVMMTkuNzU1LDUyLjUyLDIyLjMsNTEuMDk1QTEuNTE4LDEuNTE4LDAsMCwwLDIzLjAxMSw0OS4wNlpcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIuMzU0IC0yOC42MDYpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xNTEyXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTEyXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk00MC41MTEsNDkuMDZhMS40ODIsMS40ODIsMCwwLDAtMi4wMzUtLjUwOWwtMi41NDQsMS40MjVWNDcuMDI1YTEuNDI1LDEuNDI1LDAsMSwwLTIuODQ5LDB2Mi45NTFsLTIuNTQ0LTEuNDI1YTEuNDgzLDEuNDgzLDAsMSwwLTEuNTI2LDIuNTQ0bDIuNTQ0LDEuNDI1LTIuNTQ0LDEuNDI1YTEuNDgyLDEuNDgyLDAsMCwwLS41MDksMi4wMzUsMS4zMjksMS4zMjksMCwwLDAsMS4yMjEuNzEyLDEuODg2LDEuODg2LDAsMCwwLC43MTItLjJsMi41NDQtMS40MjV2Mi45NTFhMS40MjUsMS40MjUsMCwwLDAsMi44NDksMFY1NS4wNjNsMi41NDQsMS40MjVhMS44ODcsMS44ODcsMCwwLDAsLjcxMi4yLDEuNDEyLDEuNDEyLDAsMCwwLDEuMjIxLS43MTIsMS40ODIsMS40ODIsMCwwLDAtLjUwOS0yLjAzNUwzNy4yNTUsNTIuNTIsMzkuOCw1MS4wOTVBMS41MTgsMS41MTgsMCwwLDAsNDAuNTExLDQ5LjA2WlwiXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMi4wNDcgLTI4LjYwNilcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzE1MTNcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1MTNcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTU4LjAxMSw0OS4wNmExLjQ4MiwxLjQ4MiwwLDAsMC0yLjAzNS0uNTA5bC0yLjU0NCwxLjQyNVY0Ny4wMjVhMS40MjUsMS40MjUsMCwwLDAtMi44NDksMHYyLjk1MWwtMi41NDQtMS40MjVhMS40ODMsMS40ODMsMCwxLDAtMS41MjYsMi41NDRsMi41NDQsMS40MjUtMi41NDQsMS40MjVBMS40ODIsMS40ODIsMCwwLDAsNDYsNTUuOTc5YTEuMzI5LDEuMzI5LDAsMCwwLDEuMjIxLjcxMiwxLjg4NiwxLjg4NiwwLDAsMCwuNzEyLS4ybDIuNTQ0LTEuNDI1djIuOTUxYTEuNDI1LDEuNDI1LDAsMCwwLDIuODQ5LDBWNTUuMDYzbDIuNTQ0LDEuNDI1YTEuODg2LDEuODg2LDAsMCwwLC43MTIuMiwxLjQxMiwxLjQxMiwwLDAsMCwxLjIyMS0uNzEyLDEuNDgyLDEuNDgyLDAsMCwwLS41MDktMi4wMzVMNTQuNzU1LDUyLjUyLDU3LjMsNTEuMDk1QTEuNTE4LDEuNTE4LDAsMCwwLDU4LjAxMSw0OS4wNlpcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEuNzM5IC0yOC42MDYpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xNTE0XCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTE0XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk02NS43OTMsNDAuMDI1QTEuMzkxLDEuMzkxLDAsMCwwLDY0LjM2OSwzOC42SDEwLjUzOUE4LjA1Niw4LjA1NiwwLDAsMCwyLjUsNDYuNjM5VjU4LjU0NWE4LjA1Niw4LjA1NiwwLDAsMCw4LjAzOSw4LjAzOUg1OC43NzJhMS40MjUsMS40MjUsMCwxLDAsMC0yLjg0OUgxMC41MzlhNS4yMTEsNS4yMTEsMCwwLDEtNS4xOS01LjE5VjQ2LjYzOWE1LjIxMSw1LjIxMSwwLDAsMSw1LjE5LTUuMTloNTMuODNBMS4zMzUsMS4zMzUsMCwwLDAsNjUuNzkzLDQwLjAyNVpcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTIuNSAtMjguNzI5KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGlkPVwiQ29tcG9uZW50XzE2N18zXCJcbiAgICAgICAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNjcg4oCTIDNcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB3aWR0aD1cIjE1M1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNTNcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNTMgMTUzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjc5XCJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDEyNzlcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE1M1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICAgIHJ4PVwiNzYuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICBpZD1cIkdyb3VwXzIyOTlcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMjk5XCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3LjI3OSAyOClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjMwMlwiXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjMwMlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEgMTIuOTk0KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzguNzIxIDYzLjE1OClcIlxuICAgICAgICAgICAgICAgICAgZmlsbD17bG9naW5Db25maWd1cmUgPT09IFwiY29uZmlndXJlXCIgPyBibHVlIDogZ3JleX1cbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dHNwYW4geD1cIi00My4xNTRcIiB5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICBQYXNzd29yZFxuICAgICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgIGlkPVwiR3JvdXBfMTc5OFwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAxNzk4XCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTAuOTcxIC0xLjQzKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzE1MTBcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1MTBcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTkzLjcyLDQ0LjY3Mkg5Mi41di01LjlBOS44OCw5Ljg4LDAsMCwwLDgyLjYyOSwyOC45SDc5LjA2N0E5Ljg4LDkuODgsMCwwLDAsNjkuMiwzOC43NzF2NS45SDY3Ljk3NkE0LjM0Myw0LjM0MywwLDAsMCw2My42LDQ5LjA0OFY2Ny4zNjRhNC4zNDMsNC4zNDMsMCwwLDAsNC4zNzYsNC4zNzZIOTMuNzJBNC4zNDMsNC4zNDMsMCwwLDAsOTguMSw2Ny4zNjRWNDkuMDQ4QTQuNDA4LDQuNDA4LDAsMCwwLDkzLjcyLDQ0LjY3MlpNODMuNzQ4LDY0LjAwNmEuNzE0LjcxNCwwLDAsMS0uNzEyLjkxNkg3OC42NmEuNzUuNzUsMCwwLDEtLjcxMi0uOTE2bDEuNDI1LTUuN2EzLjM3LDMuMzcsMCwwLDEtMi4wMzUtMy4xNTQsMy40NiwzLjQ2LDAsMSwxLDYuOTIsMCwzLjM3LDMuMzcsMCwwLDEtMi4wMzUsMy4xNTRaTTg2LjYsNDQuNjcySDc1LjF2LTUuOUEzLjk3MywzLjk3MywwLDAsMSw3OS4wNjcsMzQuOGgzLjU2MUEzLjk3MywzLjk3MywwLDAsMSw4Ni42LDM4Ljc3MXY1LjlaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xLjQyNiAtMjguOSlcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtsb2dpbkNvbmZpZ3VyZSA9PT0gXCJjb25maWd1cmVcIiA/IGJsdWUgOiBncmV5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xNTExXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTExXCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0yMy4wMTEsNDkuMDZhMS40ODIsMS40ODIsMCwwLDAtMi4wMzUtLjUwOWwtMi41NDQsMS40MjVWNDcuMDI1YTEuNDI1LDEuNDI1LDAsMSwwLTIuODQ5LDB2Mi45NTFsLTIuNTQ0LTEuNDI1YTEuNDgzLDEuNDgzLDAsMSwwLTEuNTI2LDIuNTQ0bDIuNTQ0LDEuNDI1LTIuNTQ0LDEuNDI1QTEuNDgyLDEuNDgyLDAsMCwwLDExLDU1Ljk3OWExLjMyOSwxLjMyOSwwLDAsMCwxLjIyMS43MTIsMS44ODYsMS44ODYsMCwwLDAsLjcxMi0uMmwyLjU0NC0xLjQyNXYyLjk1MWExLjQyNSwxLjQyNSwwLDAsMCwyLjg0OSwwVjU1LjA2M2wyLjU0NCwxLjQyNWExLjg4NiwxLjg4NiwwLDAsMCwuNzEyLjIsMS40MTIsMS40MTIsMCwwLDAsMS4yMjEtLjcxMiwxLjQ4MiwxLjQ4MiwwLDAsMC0uNTA5LTIuMDM1TDE5Ljc1NSw1Mi41MiwyMi4zLDUxLjA5NUExLjUxOCwxLjUxOCwwLDAsMCwyMy4wMTEsNDkuMDZaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yLjM1NCAtMjguNjA2KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9e2xvZ2luQ29uZmlndXJlID09PSBcImNvbmZpZ3VyZVwiID8gYmx1ZSA6IGdyZXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzE1MTJcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1MTJcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTQwLjUxMSw0OS4wNmExLjQ4MiwxLjQ4MiwwLDAsMC0yLjAzNS0uNTA5bC0yLjU0NCwxLjQyNVY0Ny4wMjVhMS40MjUsMS40MjUsMCwxLDAtMi44NDksMHYyLjk1MWwtMi41NDQtMS40MjVhMS40ODMsMS40ODMsMCwxLDAtMS41MjYsMi41NDRsMi41NDQsMS40MjUtMi41NDQsMS40MjVhMS40ODIsMS40ODIsMCwwLDAtLjUwOSwyLjAzNSwxLjMyOSwxLjMyOSwwLDAsMCwxLjIyMS43MTIsMS44ODYsMS44ODYsMCwwLDAsLjcxMi0uMmwyLjU0NC0xLjQyNXYyLjk1MWExLjQyNSwxLjQyNSwwLDAsMCwyLjg0OSwwVjU1LjA2M2wyLjU0NCwxLjQyNWExLjg4NywxLjg4NywwLDAsMCwuNzEyLjIsMS40MTIsMS40MTIsMCwwLDAsMS4yMjEtLjcxMiwxLjQ4MiwxLjQ4MiwwLDAsMC0uNTA5LTIuMDM1TDM3LjI1NSw1Mi41MiwzOS44LDUxLjA5NUExLjUxOCwxLjUxOCwwLDAsMCw0MC41MTEsNDkuMDZaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yLjA0NyAtMjguNjA2KVwiXG4gICAgICAgICAgICAgICAgICAgIGZpbGw9e2xvZ2luQ29uZmlndXJlID09PSBcImNvbmZpZ3VyZVwiID8gYmx1ZSA6IGdyZXl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzE1MTNcIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE1MTNcIlxuICAgICAgICAgICAgICAgICAgICBkPVwiTTU4LjAxMSw0OS4wNmExLjQ4MiwxLjQ4MiwwLDAsMC0yLjAzNS0uNTA5bC0yLjU0NCwxLjQyNVY0Ny4wMjVhMS40MjUsMS40MjUsMCwwLDAtMi44NDksMHYyLjk1MWwtMi41NDQtMS40MjVhMS40ODMsMS40ODMsMCwxLDAtMS41MjYsMi41NDRsMi41NDQsMS40MjUtMi41NDQsMS40MjVBMS40ODIsMS40ODIsMCwwLDAsNDYsNTUuOTc5YTEuMzI5LDEuMzI5LDAsMCwwLDEuMjIxLjcxMiwxLjg4NiwxLjg4NiwwLDAsMCwuNzEyLS4ybDIuNTQ0LTEuNDI1djIuOTUxYTEuNDI1LDEuNDI1LDAsMCwwLDIuODQ5LDBWNTUuMDYzbDIuNTQ0LDEuNDI1YTEuODg2LDEuODg2LDAsMCwwLC43MTIuMiwxLjQxMiwxLjQxMiwwLDAsMCwxLjIyMS0uNzEyLDEuNDgyLDEuNDgyLDAsMCwwLS41MDktMi4wMzVMNTQuNzU1LDUyLjUyLDU3LjMsNTEuMDk1QTEuNTE4LDEuNTE4LDAsMCwwLDU4LjAxMSw0OS4wNlpcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEuNzM5IC0yOC42MDYpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17bG9naW5Db25maWd1cmUgPT09IFwiY29uZmlndXJlXCIgPyBibHVlIDogZ3JleX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMTUxNFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTUxNFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNNjUuNzkzLDQwLjAyNUExLjM5MSwxLjM5MSwwLDAsMCw2NC4zNjksMzguNkgxMC41MzlBOC4wNTYsOC4wNTYsMCwwLDAsMi41LDQ2LjYzOVY1OC41NDVhOC4wNTYsOC4wNTYsMCwwLDAsOC4wMzksOC4wMzlINTguNzcyYTEuNDI1LDEuNDI1LDAsMSwwLDAtMi44NDlIMTAuNTM5YTUuMjExLDUuMjExLDAsMCwxLTUuMTktNS4xOVY0Ni42MzlhNS4yMTEsNS4yMTEsMCwwLDEsNS4xOS01LjE5aDUzLjgzQTEuMzM1LDEuMzM1LDAsMCwwLDY1Ljc5Myw0MC4wMjVaXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yLjUgLTI4LjcyOSlcIlxuICAgICAgICAgICAgICAgICAgICBmaWxsPXtsb2dpbkNvbmZpZ3VyZSA9PT0gXCJjb25maWd1cmVcIiA/IGJsdWUgOiBncmV5fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIHtyZW5kZXJMb2dpbkNvbmZpZ3VyZShsb2dpbkNvbmZpZ3VyZSl9XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgY2FzZSBcIlRleHRMb2dpblR5cGVcIjpcbiAgICAgIGlmIChsb2dpbkNvbmZpZ3VyZSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBpZD1cIkNvbXBvbmVudF8xNjhfM1wiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTY4IOKAkyAzXCJcbiAgICAgICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICAgICAgd2lkdGg9XCIxNTNcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiMTUzXCJcbiAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMTUzIDE1M1wiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHJlY3RcbiAgICAgICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI3OVwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjc5XCJcbiAgICAgICAgICAgICAgd2lkdGg9XCIxNTNcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTNcIlxuICAgICAgICAgICAgICByeD1cIjc2LjVcIlxuICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMjk5XCJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjI5OVwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzNy4yNzkgMzApXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cIkdyb3VwXzIzMDJcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIzMDJcIlxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxIDEyLjk5NClcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgIGlkPVwiVGV4dF9Mb2dpblwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJUZXh0IExvZ2luXCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOC43MjEgNjkuMTU4KVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjE3XCJcbiAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICAgICAgICAgICAgZm9udFdlaWdodD1cIjcwMFwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9XCItNDYuMjMyXCIgeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgVGV4dCBMb2dpblxuICAgICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjM3NlwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIzNzZcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA5ODAgOTUwNS44NTkpXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICBpZD1cIm5vdW5fUGhvbmVfMTM3NTYyN18xX1wiXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwibm91bl9QaG9uZV8xMzc1NjI3ICgxKVwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0xMDkyMSAtOTQ4MC4yNTUpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMTkwOVwiXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE5MDlcIlxuICAgICAgICAgICAgICAgICAgZD1cIk0zMS41MDUsOTU4LjM2M0E0LjQwNiw0LjQwNiwwLDAsMCwyNyw5NjIuNjg1djU0Ljc0OGE0LjQwNSw0LjQwNSwwLDAsMCw0LjUwNSw0LjMyMUg1Ny4wMzdhNC40MDUsNC40MDUsMCwwLDAsNC41MDUtNC4zMjFWOTYyLjY4NWE0LjQwNSw0LjQwNSwwLDAsMC00LjUwNS00LjMyM0gzMS41MDVabTguMjYsMi44NzNoOWEuNzIuNzIsMCwxLDEsMCwxLjQ0aC05YS43Mi43MiwwLDEsMSwwLTEuNDRaTTMwLDk2NS41Nkg1OC41MzZ2NDYuMTA2SDMwWm0xNC4yNjYsNDguMjdhMi44ODUsMi44ODUsMCwxLDEtMywyLjg3MywyLjk0NCwyLjk0NCwwLDAsMSwzLjAxMS0yLjg2OVpcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNyAtOTU4LjM2MSlcIlxuICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyODhcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjg4XCJcbiAgICAgICAgICAgICAgICBkPVwiTTAsMEgyNi44MTdWNDQuMDU2SDBaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEwOTE3LjE2OSAtOTQ3Mi4xMDQpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICAgICAgb3BhY2l0eT1cIjAuNVwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgICk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgIGlkPVwiQ29tcG9uZW50XzE2OF8zNVwiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTY4IOKAkyAzNVwiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MyAxNTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyNzlcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI3OVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUzXCJcbiAgICAgICAgICAgICAgcng9XCI3Ni41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjI5OVwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIyOTlcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzcuMjc5IDI2KVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMzAyXCJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMzAyXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxMi45OTQpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICBpZD1cIlRleHRfTG9naW5cIlxuICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiVGV4dCBMb2dpblwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzguNzIxIDY5LjE1OClcIlxuICAgICAgICAgICAgICAgICAgZmlsbD17bG9naW5Db25maWd1cmUgPT09IFwiY29uZmlndXJlXCIgPyBibHVlIDogZ3JleX1cbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dHNwYW4geD1cIi00Ni4yMzJcIiB5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICBUZXh0IExvZ2luXG4gICAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMzc2XCJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjM3NlwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDk4MCA5NTAxLjg1OSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwibm91bl9QaG9uZV8xMzc1NjI3XzFfXCJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJub3VuX1Bob25lXzEzNzU2MjcgKDEpXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEwOTIxIC05NDgwLjI1NSlcIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgIGlkPVwiUGF0aF8xOTA5XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTkwOVwiXG4gICAgICAgICAgICAgICAgICBkPVwiTTMxLjUwNSw5NTguMzYzQTQuNDA2LDQuNDA2LDAsMCwwLDI3LDk2Mi42ODV2NTQuNzQ4YTQuNDA1LDQuNDA1LDAsMCwwLDQuNTA1LDQuMzIxSDU3LjAzN2E0LjQwNSw0LjQwNSwwLDAsMCw0LjUwNS00LjMyMVY5NjIuNjg1YTQuNDA1LDQuNDA1LDAsMCwwLTQuNTA1LTQuMzIzSDMxLjUwNVptOC4yNiwyLjg3M2g5YS43Mi43MiwwLDEsMSwwLDEuNDRoLTlhLjcyLjcyLDAsMSwxLDAtMS40NFpNMzAsOTY1LjU2SDU4LjUzNnY0Ni4xMDZIMzBabTE0LjI2Niw0OC4yN2EyLjg4NSwyLjg4NSwwLDEsMS0zLDIuODczLDIuOTQ0LDIuOTQ0LDAsMCwxLDMuMDExLTIuODY5WlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTI3IC05NTguMzYxKVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPXtsb2dpbkNvbmZpZ3VyZSA9PT0gXCJjb25maWd1cmVcIiA/IGJsdWUgOiBncmV5fVxuICAgICAgICAgICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD1cIjAuMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyODhcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjg4XCJcbiAgICAgICAgICAgICAgICBkPVwiTTAsMEgyNi44MTdWNDQuMDU2SDBaXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEwOTE3LjE2OSAtOTQ3Mi4xMDQpXCJcbiAgICAgICAgICAgICAgICBmaWxsPXtsb2dpbkNvbmZpZ3VyZSA9PT0gXCJjb25maWd1cmVcIiA/IGJsdWUgOiBncmV5fVxuICAgICAgICAgICAgICAgIG9wYWNpdHk9XCIwLjVcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAge3JlbmRlckxvZ2luQ29uZmlndXJlKGxvZ2luQ29uZmlndXJlKX1cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICBjYXNlIFwiU29jaWFsU3VwcG9ydFR5cGVcIjpcbiAgICAgIGlmIChsb2dpbkNvbmZpZ3VyZSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDM5NCAzOTRcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGlkPVwiQ29tcG9uZW50XzE2OV8xXCJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiQ29tcG9uZW50IDE2OSDigJMgMVwiXG4gICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0wLjIzNSlcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyNzlcIlxuICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjc5XCJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjM5NFwiXG4gICAgICAgICAgICAgICAgaGVpZ2h0PVwiMzk0XCJcbiAgICAgICAgICAgICAgICByeD1cIjE5NVwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMC4yMzUpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMjk5XCJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMjk5XCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTA1LjU4MiA2NS4yNzYpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkdyb3VwXzIzMDJcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjMwMlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMCAwKVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHRleHRcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJTb2NpYWxfU3VwcG9ydFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlNvY2lhbFxuICAgICAgICBTdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDg3IDIxNC42MDYpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD1cIiMyMzYyYzdcIlxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZT1cIjQxXCJcbiAgICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8dHNwYW4geD1cIi02OS40MTNcIiB5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICAgIFNvY2lhbHtcIiBcIn1cbiAgICAgICAgICAgICAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9XCItODYuOTQxXCIgeT1cIjUwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgU3VwcG9ydFxuICAgICAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgPGdcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8xNzczXCJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMTc3M1wiXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMS45MzMgMClcIlxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiVW5pb25fNjlcIlxuICAgICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlVuaW9uIDY5XCJcbiAgICAgICAgICAgICAgICAgICAgICBkPVwiTTI2LjE1NSwxNTcuOTc1Yy03LjcxMywwLTE0LjA1My0yLjQ2Ni0xOC44NDItNy4zMjRDMi40NjIsMTQ1LjcyNywwLDEzOS4wNTIsMCwxMzAuOGMwLTMuMTcuMS02LjMwOS4zLTkuMzI5YTk5LjI2OSw5OS4yNjksMCwwLDEsMS4yLTkuOTgzLDgzLjMxOSw4My4zMTksMCwwLDEsMi4zLTEwLjAzNkE1MS4wMjUsNTEuMDI1LDAsMCwxLDcuNjc0LDkyLjFhMzUuMDU2LDM1LjA1NiwwLDAsMSw1LjgzNi04LjEwOSwyNS41NDEsMjUuNTQxLDAsMCwxLDguMzktNS42MTMsMjcuMzUsMjcuMzUsMCwwLDEsMTAuNzA2LTIuMDdjMS41MTIsMCwyLjk3Ny42NjIsNS44LDIuNjI0LDEuNzY2LDEuMjI3LDMuOCwyLjYyNCw2LjA1MSw0LjE1NWEzMy41OTQsMzMuNTk0LDAsMCwwLDcuODIxLDMuNjc0LDI4LjYzMSwyOC42MzEsMCwwLDAsMTkuMTM4LDAsMzMuNjcsMzMuNjcsMCwwLDAsNy44MjEtMy42NzRjMi4yNzMtMS41NDYsNC4zMDgtMi45NDMsNi4wNDctNC4xNTUsMi44MjctMS45NTgsNC4yOTMtMi42Miw1LjgtMi42MmEyNy40NDksMjcuNDQ5LDAsMCwxLDEwLjcxLDIuMDYyLDI1LjU1MiwyNS41NTIsMCwwLDEsOC4zODYsNS42MTYsMzUuMTgxLDM1LjE4MSwwLDAsMSw1Ljg0LDguMTA5LDUxLjMsNTEuMywwLDAsMSwzLjg3NCw5LjM1OSw4My4zMjIsODMuMzIyLDAsMCwxLDIuMywxMC4wMzZjLjU5MiwzLjU0MywxLDYuOSwxLjIsOS45NzkuMiwzLjAwOC4zLDYuMTUxLjMsOS4zMzIsMCw4LjI0OC0yLjQ2MiwxNC45MjYtNy4zMTMsMTkuODQ2LTQuNzkzLDQuODU5LTExLjEzMyw3LjMyNC0xOC44NDIsNy4zMjRaTTM1LjY2NCw2NC45NWEzOC4wOCwzOC4wOCwwLDAsMS0xMC40Ni0yNi45LDM4LjA3NywzOC4wNzcsMCwwLDEsMTAuNDYtMjYuOSwzNC4xNzksMzQuMTc5LDAsMCwxLDUwLjUsMCwzOC4wNywzOC4wNywwLDAsMSwxMC40NjMsMjYuOSwzOC4wNjYsMzguMDY2LDAsMCwxLTEwLjQ2MywyNi45LDM0LjE3OSwzNC4xNzksMCwwLDEtNTAuNSwwWlwiXG4gICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDAgMClcIlxuICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgaWQ9XCJDb21wb25lbnRfMTY5XzNcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiQ29tcG9uZW50IDE2OSDigJMgM1wiXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MyAxNTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyNzlcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI3OVwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTUzXCJcbiAgICAgICAgICAgICAgcng9XCI3Ni41XCJcbiAgICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjI5OVwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDIyOTlcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzcuMjc5IDMwKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMzAyXCJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMzAyXCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxMi45OTQpXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZXh0XG4gICAgICAgICAgICAgICAgICBpZD1cIlNvY2lhbF9TdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlNvY2lhbCBTdXBwb3J0XCJcbiAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzOC43MjEgNTQuMTU4KVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPXtsb2dpbkNvbmZpZ3VyZSA9PT0gXCJjb25maWd1cmVcIiA/IGJsdWUgOiBncmV5fVxuICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxN1wiXG4gICAgICAgICAgICAgICAgICBmb250RmFtaWx5PVwiTW9udHNlcnJhdC1Cb2xkLCBNb250c2VycmF0XCJcbiAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDx0c3BhbiB4PVwiLTY0LjgyOVwiIHk9XCIwXCI+XG4gICAgICAgICAgICAgICAgICAgIFNvY2lhbCBTdXBwb3J0XG4gICAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8xNzczXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDE3NzNcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE1LjEyMSAtMjguNjQ2KVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhdGhcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJVbmlvbl82OVwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlVuaW9uIDY5XCJcbiAgICAgICAgICAgICAgICAgICAgZD1cIk0xMC4xNTcsNjEuMzQ2QTkuODYzLDkuODYzLDAsMCwxLDIuODQsNTguNSwxMC41NDgsMTAuNTQ4LDAsMCwxLDAsNTAuNzk1YzAtMS4yMzEuMDM5LTIuNDUuMTE1LTMuNjIzQTM4LjU0OSwzOC41NDksMCwwLDEsLjU4MSw0My4zYTMyLjM1NSwzMi4zNTUsMCwwLDEsLjg5NS0zLjksMTkuODE0LDE5LjgxNCwwLDAsMSwxLjUtMy42MzQsMTMuNjEzLDEzLjYxMywwLDAsMSwyLjI2Ni0zLjE0OUE5LjkxOCw5LjkxOCwwLDAsMSw4LjUsMzAuNDM1YTEwLjYyMSwxMC42MjEsMCwwLDEsNC4xNTctLjgsNC4wNzQsNC4wNzQsMCwwLDEsMi4yNTMsMS4wMTljLjY4Ni40NzcsMS40NzcsMS4wMTksMi4zNSwxLjYxM0ExMy4wNDUsMTMuMDQ1LDAsMCwwLDIwLjMsMzMuNjlhMTEuMTE4LDExLjExOCwwLDAsMCw3LjQzMiwwLDEzLjA3NSwxMy4wNzUsMCwwLDAsMy4wMzctMS40MjdjLjg4My0uNiwxLjY3My0xLjE0MywyLjM0OC0xLjYxM2E0LjA4OCw0LjA4OCwwLDAsMSwyLjI1NC0xLjAxNywxMC42NTksMTAuNjU5LDAsMCwxLDQuMTU5LjgsOS45MjMsOS45MjMsMCwwLDEsMy4yNTcsMi4xODEsMTMuNjYyLDEzLjY2MiwwLDAsMSwyLjI2OCwzLjE0OSwxOS45MiwxOS45MiwwLDAsMSwxLjUsMy42MzQsMzIuMzU2LDMyLjM1NiwwLDAsMSwuODk1LDMuOWMuMjMsMS4zNzYuMzg4LDIuNjguNDY2LDMuODc1LjA3NiwxLjE2OC4xMTUsMi4zODkuMTE3LDMuNjI0QTEwLjU0NSwxMC41NDUsMCwwLDEsNDUuMiw1OC41YTkuODY3LDkuODY3LDAsMCwxLTcuMzE3LDIuODQ0Wm0zLjY5My0zNi4xMjRBMTQuNzg3LDE0Ljc4NywwLDAsMSw5Ljc4OCwxNC43NzQsMTQuNzg2LDE0Ljc4NiwwLDAsMSwxMy44NDksNC4zMjhhMTMuMjcyLDEzLjI3MiwwLDAsMSwxOS42MTEsMCwxNC43ODQsMTQuNzg0LDAsMCwxLDQuMDYzLDEwLjQ0NkExNC43ODIsMTQuNzgyLDAsMCwxLDMzLjQ2LDI1LjIyMmExMy4yNzIsMTMuMjcyLDAsMCwxLTE5LjYxMSwwWlwiXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIDApXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17bG9naW5Db25maWd1cmUgPT09IFwiY29uZmlndXJlXCIgPyBibHVlIDogZ3JleX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICB7cmVuZGVyTG9naW5Db25maWd1cmUobG9naW5Db25maWd1cmUpfVxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgY2FzZSBcIlBhbG1Mb2dpblR5cGVcIjpcbiAgICAgIGlmIChsb2dpbkNvbmZpZ3VyZSA9PT0gXCJub25lXCIpIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICBpZD1cIkNvbXBvbmVudF8xNjZfMTJcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiQ29tcG9uZW50IDE2NiDigJMgMTJcIlxuICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICB3aWR0aD1cIjE1M1wiXG4gICAgICAgICAgICBoZWlnaHQ9XCIxNTNcIlxuICAgICAgICAgICAgdmlld0JveD1cIjAgMCAxNTMgMTUzXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cmVjdFxuICAgICAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjc5XCJcbiAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDEyNzlcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjE1M1wiXG4gICAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICAgIHJ4PVwiNzYuNVwiXG4gICAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICBpZD1cIkdyb3VwXzIyOTlcIlxuICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMjk5XCJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM3LjI3OSAzMClcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Z1xuICAgICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjMwMlwiXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjMwMlwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEgMTIuOTk0KVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgaWQ9XCJQYWxtX0xvZ2luXCJcbiAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhbG0gTG9naW5cIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4LjcyMSA2OS4xNTgpXCJcbiAgICAgICAgICAgICAgICAgIGZpbGw9XCIjMjM2MmM3XCJcbiAgICAgICAgICAgICAgICAgIGZvbnRTaXplPVwiMTdcIlxuICAgICAgICAgICAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dHNwYW4geD1cIi01MC4yNjlcIiB5PVwiMFwiPlxuICAgICAgICAgICAgICAgICAgICBQYWxtIExvZ2luXG4gICAgICAgICAgICAgICAgICA8L3RzcGFuPlxuICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgaWQ9XCJQYXRoXzE1MDRcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxNTA0XCJcbiAgICAgICAgICAgICAgICAgIGQ9XCJNLTUwNi45LTc2LjdhMy4wNzIsMy4wNzIsMCwwLDAtMy4wNjgsMy4wNjh2MTQuNjU3YTEuNSwxLjUsMCwwLDEtMS41LDEuNSwxLjUsMS41LDAsMCwxLTEuNS0xLjV2LTIyLjVhMy4wNzIsMy4wNzIsMCwwLDAtMy4wNjgtMy4wNjgsMy4wNjMsMy4wNjMsMCwwLDAtMy4wMzMsMi42NzN2MjEuNDM0YTEuNSwxLjUsMCwwLDEtMS41LDEuNSwxLjUsMS41LDAsMCwxLTEuNS0xLjV2LTIwLjdhMS41MTMsMS41MTMsMCwwLDEtLjA0LS4zMzR2LTIuMzc3YTMuMDY2LDMuMDY2LDAsMCwwLS45LTIuMTc0LDMuMDYsMy4wNiwwLDAsMC0yLjE2OC0uODk1LDMuMDcyLDMuMDcyLDAsMCwwLTMuMDY4LDMuMDY4djIzLjQxNGExLjUsMS41LDAsMCwxLTEuNSwxLjUsMS41LDEuNSwwLDAsMS0xLjUtMS41Vi03OS40MXMwLS4wMDUsMC0uMDA4YTMuMDQ1LDMuMDQ1LDAsMCwwLS45LTIuMTY4LDMuMDQ4LDMuMDQ4LDAsMCwwLTIuMTY5LS45MDUsMy4wNzYsMy4wNzYsMCwwLDAtMy4wNzMsMy4wNzN2MTUuNDU1YTYuMDMzLDYuMDMzLDAsMCwxLDEuMTIsMy40ODl2OC4wNTFhMS43OTMsMS43OTMsMCwwLDAsMS4zMjUsMS43MTIsMTYuNzc4LDE2Ljc3OCwwLDAsMSw3LjIzNSw0LjI0NiwxNy4yMzIsMTcuMjMyLDAsMCwxLDQuNzQyLDkuMjcsMS41LDEuNSwwLDAsMS0xLjIzNSwxLjczLDEuNSwxLjUsMCwwLDEtLjI1LjAyMSwxLjUsMS41LDAsMCwxLTEuNDgtMS4yNTYsMTQuMiwxNC4yLDAsMCwwLTMuOS03LjYzNywxMy44MTEsMTMuODExLDAsMCwwLTUuOTU2LTMuNDksNC43NzUsNC43NzUsMCwwLDEtMy40ODgtNC42di04LjA1MWEyLjk5MywyLjk5MywwLDAsMC0uNzUxLTEuOTg5bC0uMDQ2LS4wNTNjLS44LS45MTUtLjkzLTEuMDMyLTEuNjE1LTEuMDMyaC0zLjI0NWwuMDA3LDE4LjA2MWMwLDExLjcsNy45MDgsMjAuMTg3LDE4LjgsMjAuMTg3aDIuNDIzQTE5Ljk3NiwxOS45NzYsMCwwLDAtNTA5LjY0MS0zMWExOS4wNTcsMTkuMDU3LDAsMCwwLDUuODEyLTEzLjcyVi03My42MzRhMy4wMzcsMy4wMzcsMCwwLDAtLjktMi4xNjhBMy4wMzMsMy4wMzMsMCwwLDAtNTA2LjktNzYuN1pcIlxuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU2MS4yMDcgNzAuNTcyKVwiXG4gICAgICAgICAgICAgICAgICBmaWxsPVwiIzIzNjJjN1wiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjE1M1wiXG4gICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDE1MyAxNTNcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgIGlkPVwiR3JvdXBfMjYwMlwiXG4gICAgICAgICAgICAgIGRhdGEtbmFtZT1cIkdyb3VwIDI2MDJcIlxuICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoLTEwNCAtNDEyKVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxyZWN0XG4gICAgICAgICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI3OVwiXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDEyNzlcIlxuICAgICAgICAgICAgICAgIHdpZHRoPVwiMTUzXCJcbiAgICAgICAgICAgICAgICBoZWlnaHQ9XCIxNTNcIlxuICAgICAgICAgICAgICAgIHJ4PVwiNzYuNVwiXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwNCA0MTIpXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgaWQ9XCJHcm91cF8yMjk5XCJcbiAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMjk5XCJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTQyLjI3OSA0NDApXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxnXG4gICAgICAgICAgICAgICAgICBpZD1cIkdyb3VwXzIzMDJcIlxuICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjMwMlwiXG4gICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMSAxMi45OTQpXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGV4dFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhbG1fTG9naW5cIlxuICAgICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJQYWxtIExvZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDM4LjcyMSA2Ny4xNTgpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17bG9naW5Db25maWd1cmUgPT09IFwiY29uZmlndXJlXCIgPyBibHVlIDogZ3JleX1cbiAgICAgICAgICAgICAgICAgICAgZm9udFNpemU9XCIxN1wiXG4gICAgICAgICAgICAgICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHRzcGFuIHg9XCItNTAuMjY5XCIgeT1cIjBcIj5cbiAgICAgICAgICAgICAgICAgICAgICBQYWxtIExvZ2luXG4gICAgICAgICAgICAgICAgICAgIDwvdHNwYW4+XG4gICAgICAgICAgICAgICAgICA8L3RleHQ+XG4gICAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgICBpZD1cIlBhdGhfMTUwNFwiXG4gICAgICAgICAgICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTUwNFwiXG4gICAgICAgICAgICAgICAgICAgIGQ9XCJNLTUwNi45LTc2LjdhMy4wNzIsMy4wNzIsMCwwLDAtMy4wNjgsMy4wNjh2MTQuNjU3YTEuNSwxLjUsMCwwLDEtMS41LDEuNSwxLjUsMS41LDAsMCwxLTEuNS0xLjV2LTIyLjVhMy4wNzIsMy4wNzIsMCwwLDAtMy4wNjgtMy4wNjgsMy4wNjMsMy4wNjMsMCwwLDAtMy4wMzMsMi42NzN2MjEuNDM0YTEuNSwxLjUsMCwwLDEtMS41LDEuNSwxLjUsMS41LDAsMCwxLTEuNS0xLjV2LTIwLjdhMS41MTMsMS41MTMsMCwwLDEtLjA0LS4zMzR2LTIuMzc3YTMuMDY2LDMuMDY2LDAsMCwwLS45LTIuMTc0LDMuMDYsMy4wNiwwLDAsMC0yLjE2OC0uODk1LDMuMDcyLDMuMDcyLDAsMCwwLTMuMDY4LDMuMDY4djIzLjQxNGExLjUsMS41LDAsMCwxLTEuNSwxLjUsMS41LDEuNSwwLDAsMS0xLjUtMS41Vi03OS40MXMwLS4wMDUsMC0uMDA4YTMuMDQ1LDMuMDQ1LDAsMCwwLS45LTIuMTY4LDMuMDQ4LDMuMDQ4LDAsMCwwLTIuMTY5LS45MDUsMy4wNzYsMy4wNzYsMCwwLDAtMy4wNzMsMy4wNzN2MTUuNDU1YTYuMDMzLDYuMDMzLDAsMCwxLDEuMTIsMy40ODl2OC4wNTFhMS43OTMsMS43OTMsMCwwLDAsMS4zMjUsMS43MTIsMTYuNzc4LDE2Ljc3OCwwLDAsMSw3LjIzNSw0LjI0NiwxNy4yMzIsMTcuMjMyLDAsMCwxLDQuNzQyLDkuMjcsMS41LDEuNSwwLDAsMS0xLjIzNSwxLjczLDEuNSwxLjUsMCwwLDEtLjI1LjAyMSwxLjUsMS41LDAsMCwxLTEuNDgtMS4yNTYsMTQuMiwxNC4yLDAsMCwwLTMuOS03LjYzNywxMy44MTEsMTMuODExLDAsMCwwLTUuOTU2LTMuNDksNC43NzUsNC43NzUsMCwwLDEtMy40ODgtNC42di04LjA1MWEyLjk5MywyLjk5MywwLDAsMC0uNzUxLTEuOTg5bC0uMDQ2LS4wNTNjLS44LS45MTUtLjkzLTEuMDMyLTEuNjE1LTEuMDMyaC0zLjI0NWwuMDA3LDE4LjA2MWMwLDExLjcsNy45MDgsMjAuMTg3LDE4LjgsMjAuMTg3aDIuNDIzQTE5Ljk3NiwxOS45NzYsMCwwLDAtNTA5LjY0MS0zMWExOS4wNTcsMTkuMDU3LDAsMCwwLDUuODEyLTEzLjcyVi03My42MzRhMy4wMzcsMy4wMzcsMCwwLDAtLjktMi4xNjhBMy4wMzMsMy4wMzMsMCwwLDAtNTA2LjktNzYuN1pcIlxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNTYxLjIwNyA3MC41NzIpXCJcbiAgICAgICAgICAgICAgICAgICAgZmlsbD17bG9naW5Db25maWd1cmUgPT09IFwiY29uZmlndXJlXCIgPyBibHVlIDogZ3JleX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9nPlxuICAgICAgICAgICAgICA8L2c+XG4gICAgICAgICAgICAgIDxnIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMDUgNDE2KVwiPntyZW5kZXJMb2dpbkNvbmZpZ3VyZShsb2dpbkNvbmZpZ3VyZSl9PC9nPlxuICAgICAgICAgICAgPC9nPlxuICAgICAgICAgIDwvc3ZnPlxuICAgICAgICApO1xuICAgICAgfVxuICB9XG59O1xuIl19