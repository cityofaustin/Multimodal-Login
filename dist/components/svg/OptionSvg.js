"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/bb6429536fb17211493eda210c0a925f.scss"));
}

class OptionSvg extends _react.Component {






  render() {
    return /*#__PURE__*/(
      _react.default.createElement("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "128",
        height: "128",
        viewBox: "0 0 128 128",
        className: `${this.props.isSelected ? 'selected' : ''}`,
        onClick: this.props.handleClick },

      this.renderSvg()));


  }

  renderSvg() {
    switch (this.props.svgType) {
      case 'meh':
        return meh();
      case 'no-phone':
        return noPhone;
      case 'meh-phone':
        return meh('-48.451', 'Once or more ');
      case 'meh-security':
        return meh('-43.303', "I'm not good");
      case 'meh-palm':
        return mehPalm;
      case 'smiley':
        return smiley();
      case 'smiley-phone':
        return smiley('-19.981', 'Never');
      case 'smiley-security':
        return smiley('-29.848', "I'm good");
      case 'smiley-palm':
        return smileyPalm;
      case 'none':
        return none;
      case 'tablet':
        return tablet;
      case 'computer':
        return computer;
      case 'phone':
        return phone;
      default:
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, null);}

  }}exports.default = OptionSvg;(0, _defineProperty2.default)(OptionSvg, "defaultProps", { svgType: 'meh', handleClick: () => {}, isSelected: false });


const meh = (x = '-19.312', text = 'Often') => /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_1",
  "data-name": "Component 161 \u2013 1",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("text", {
  id: "Often",
  transform: "translate(54.929 91.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: x, y: "0" },
text)), /*#__PURE__*/


_react.default.createElement("g", { id: "Group_2337", "data-name": "Group 2337", transform: "translate(27 17)" }, /*#__PURE__*/
_react.default.createElement("circle", {
  id: "Ellipse_676",
  "data-name": "Ellipse 676",
  cx: "27",
  cy: "27",
  r: "27",
  fill: "#ababab" }), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_679",
  "data-name": "Ellipse 679",
  transform: "translate(12 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_680",
  "data-name": "Ellipse 680",
  transform: "translate(33 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Component_158_171",
  "data-name": "Component 158 \u2013 171",
  transform: "translate(17.957 36.414)" }, /*#__PURE__*/

_react.default.createElement("path", {
  id: "Path_1851",
  "data-name": "Path 1851",
  d: "M-13460.542-9598.3a134.452,134.452,0,0,1,18.129-2.759",
  transform: "translate(13460.542 9601.058)",
  fill: "none",
  stroke: "#fbfdfd",
  strokeLinecap: "round",
  strokeWidth: "4" })))));







const smiley = (x = '-21.443', text = 'Rarely') => /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_14",
  "data-name": "Component 161 \u2013 14",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("g", { id: "Group_2337", "data-name": "Group 2337", transform: "translate(28 17)" }, /*#__PURE__*/
_react.default.createElement("circle", {
  id: "Ellipse_676",
  "data-name": "Ellipse 676",
  cx: "27",
  cy: "27",
  r: "27",
  fill: "#ababab" }), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_679",
  "data-name": "Ellipse 679",
  transform: "translate(12 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_680",
  "data-name": "Ellipse 680",
  transform: "translate(33 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Component_158_33",
  "data-name": "Component 158 \u2013 33",
  transform: "translate(11.134 33.647)" }, /*#__PURE__*/

_react.default.createElement("path", {
  id: "Path_1853",
  "data-name": "Path 1853",
  d: "M-13468.475-9601.988c3.791.523,25.38.8,29.454,0s-3.257,11.192-13.8,11.192S-13472.266-9602.511-13468.475-9601.988Z",
  transform: "translate(13469.364 9602.026)",
  fill: "#fff" }))), /*#__PURE__*/



_react.default.createElement("text", {
  id: "Rarely",
  transform: "translate(54.929 91.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: x, y: "0" },
text))));






const noPhone = /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_37",
  "data-name": "Component 161 \u2013 37",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("text", {
  id: "I_don_t_have_a_phone",
  "data-name": "I don't have a phone",

  transform: "translate(54.929 81.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: "-39.708", y: "0" }, "I don't have"), /*#__PURE__*/



_react.default.createElement("tspan", { x: "-29.594", y: "16" }, "a phone")), /*#__PURE__*/



_react.default.createElement("g", {
  id: "Group_2429",
  "data-name": "Group 2429",
  transform: "translate(-109 -214)" }, /*#__PURE__*/

_react.default.createElement("g", {
  id: "noun_Phone_1375627_1_",
  "data-name": "noun_Phone_1375627 (1)",
  transform: "translate(151.207 229)" }, /*#__PURE__*/

_react.default.createElement("path", {
  id: "Path_1909",
  "data-name": "Path 1909",
  d: "M30.316,958.363a3.292,3.292,0,0,0-2.318.877,3.114,3.114,0,0,0-1,2.216v39.187a3.114,3.114,0,0,0,1,2.216,3.293,3.293,0,0,0,2.318.877H49.107a3.293,3.293,0,0,0,2.318-.877,3.114,3.114,0,0,0,1-2.216V961.455a3.113,3.113,0,0,0-1-2.217,3.293,3.293,0,0,0-2.319-.877H30.316Zm6.079,2.056h6.626a.516.516,0,1,1,0,1.031H36.395a.516.516,0,1,1,0-1.031Zm-7.19,3.094H50.211v33H29.2Zm10.5,34.55a2.066,2.066,0,1,1-2.211,2.056,2.141,2.141,0,0,1,2.216-2.054Z",
  transform: "translate(-27 -958.36)",
  fill: "#ababab",
  stroke: "#fff",
  strokeWidth: "0.2" })), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Group_2388",
  "data-name": "Group 2388",
  transform: "translate(154.293 242.067)" }, /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_688",
  "data-name": "Ellipse 688",
  transform: "translate(1.706 0.933)",
  fill: "#ababab",
  stroke: "#707070",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("ellipse", { cx: "8", cy: "8.5", rx: "8", ry: "8.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("ellipse", { cx: "8", cy: "8.5", rx: "7.5", ry: "8", fill: "none" })), /*#__PURE__*/

_react.default.createElement("path", {
  id: "noun_Question_670398",
  d: "M12.454,3a9.454,9.454,0,1,0,9.454,9.454A9.454,9.454,0,0,0,12.454,3Zm-.129,15.674a1.082,1.082,0,1,1,1.082-1.082A1.082,1.082,0,0,1,12.326,18.674Zm1.183-5.254s-.107.038-.107.1v.859a1.077,1.077,0,1,1-2.154,0v-.859a2.277,2.277,0,0,1,1.571-2.142,1.529,1.529,0,0,0,1.044-1.5,1.571,1.571,0,0,0-1.547-1.489,1.525,1.525,0,0,0-1.37.869A1.077,1.077,0,1,1,9,8.323,3.667,3.667,0,0,1,12.3,6.235h.022a3.717,3.717,0,0,1,3.693,3.579,3.671,3.671,0,0,1-2.5,3.6Z",
  transform: "translate(-3 -3)",
  fill: "#fff" })))));







const mehPalm = /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_1",
  "data-name": "Component 161 \u2013 1",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("text", {
  id: "I_m_not_comfortable",
  "data-name": "I'm not\ncomfortable",

  transform: "translate(54.929 83.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: "-25.74", y: "0" }, "I'm not",
' '), /*#__PURE__*/

_react.default.createElement("tspan", { x: "-41.88", y: "16" }, "comfortable")), /*#__PURE__*/



_react.default.createElement("g", { id: "Group_2337", "data-name": "Group 2337", transform: "translate(27 9)" }, /*#__PURE__*/
_react.default.createElement("circle", {
  id: "Ellipse_676",
  "data-name": "Ellipse 676",
  cx: "27",
  cy: "27",
  r: "27",
  fill: "#ababab" }), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_679",
  "data-name": "Ellipse 679",
  transform: "translate(12 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_680",
  "data-name": "Ellipse 680",
  transform: "translate(33 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Component_158_173",
  "data-name": "Component 158 \u2013 173",
  transform: "translate(17.957 36.414)" }, /*#__PURE__*/

_react.default.createElement("path", {
  id: "Path_1851",
  "data-name": "Path 1851",
  d: "M-13460.542-9598.3a134.452,134.452,0,0,1,18.129-2.759",
  transform: "translate(13460.542 9601.058)",
  fill: "none",
  stroke: "#fbfdfd",
  strokeLinecap: "round",
  strokeWidth: "4" })))));







const smileyPalm = /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_14",
  "data-name": "Component 161 \u2013 4",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("g", { id: "Group_2337", "data-name": "Group 2337", transform: "translate(28 18)" }, /*#__PURE__*/
_react.default.createElement("circle", {
  id: "Ellipse_676",
  "data-name": "Ellipse 676",
  cx: "27",
  cy: "27",
  r: "27",
  fill: "#ababab" }), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_679",
  "data-name": "Ellipse 679",
  transform: "translate(12 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Ellipse_680",
  "data-name": "Ellipse 680",
  transform: "translate(33 16)",
  fill: "#fff",
  stroke: "#fff",
  strokeWidth: "1" }, /*#__PURE__*/

_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4.5", stroke: "none" }), /*#__PURE__*/
_react.default.createElement("circle", { cx: "4.5", cy: "4.5", r: "4", fill: "none" })), /*#__PURE__*/

_react.default.createElement("g", {
  id: "Component_158_33",
  "data-name": "Component 158 \u2013 33",
  transform: "translate(11.134 33.647)" }, /*#__PURE__*/

_react.default.createElement("path", {
  id: "Path_1853",
  "data-name": "Path 1853",
  d: "M-13468.475-9601.988c3.791.523,25.38.8,29.454,0s-3.257,11.192-13.8,11.192S-13472.266-9602.511-13468.475-9601.988Z",
  transform: "translate(13469.364 9602.026)",
  fill: "#fff" }))), /*#__PURE__*/



_react.default.createElement("text", {
  id: "I_m_comfortable",
  "data-name": "I'm comfortable",
  transform: "translate(54.929 88.103)",
  fill: "#ababab",
  fontSize: "11",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: "-45.832", y: "0" }, "I'm comfortable"))));







const none = /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_31",
  "data-name": "Component 161 \u2013 31",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("text", {
  id: "I_don_t",
  "data-name": "I don't",
  transform: "translate(54.929 89.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: "-21.541", y: "0" }, "I don't")), /*#__PURE__*/



_react.default.createElement("path", {
  id: "noun_Stop_1877355",
  d: "M48.4,13.638a.879.879,0,0,0-.1-.127l-.415-.415a.837.837,0,0,0-.131-.107,24.912,24.912,0,0,0-34.461.322c-9.641,9.339-9.213,24.883-.311,34.474a.841.841,0,0,0,.1.118l.415.415a.889.889,0,0,0,.124.1A24.914,24.914,0,0,0,48.084,48.1C57.723,38.767,57.3,23.23,48.4,13.638Zm-33.719,1.6C22.907,6.465,36.74,6.519,45.57,14.17L14.15,45.589A22.528,22.528,0,0,1,14.685,15.239Zm16,37.737a22.868,22.868,0,0,1-14.882-5.728L47.231,15.823A22.257,22.257,0,0,1,30.689,52.976Z",
  transform: "translate(23.816 9.771)",
  fill: "#868686",
  stroke: "#868686",
  strokeWidth: "1" })));




const tablet = /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_1a",
  "data-name": "Component 161 \u2013 1",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("text", {
  id: "A_tablet",
  "data-name": "A tablet",
  transform: "translate(54.929 89.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: "-27.027", y: "0" }, "A tablet")), /*#__PURE__*/



_react.default.createElement("path", {
  id: "noun_Tablet_867078",
  d: "M47.989,2.167H15.423a3.135,3.135,0,0,0-3.05,3.214V50.625a3.135,3.135,0,0,0,3.05,3.214H47.989a3.135,3.135,0,0,0,3.049-3.214V5.381A3.135,3.135,0,0,0,47.989,2.167ZM29.783,4.215h4.138c.309,0,.559.188.559.419s-.251.419-.559.419H29.783c-.309,0-.559-.188-.559-.419S29.475,4.215,29.783,4.215ZM31.706,51.93a1.419,1.419,0,1,1,1.418-1.419A1.419,1.419,0,0,1,31.706,51.93Zm17.414-4.91H14.29V7.275H49.12V47.021Z",
  transform: "translate(23.627 12.833)",
  fill: "#868686" })));




const computer = /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_3",
  "data-name": "Component 161 \u2013 3",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("text", {
  id: "A_computer",
  "data-name": "A computer",
  transform: "translate(54.929 89.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: "-40.261", y: "0" }, "A computer")), /*#__PURE__*/



_react.default.createElement("g", { id: "noun_Laptop_3067137", transform: "translate(78 -179.5)" }, /*#__PURE__*/
_react.default.createElement("path", {
  id: "Path_1913",
  "data-name": "Path 1913",
  d: "M9.217,486.874,4.333,474.838A1.345,1.345,0,0,0,3.1,474H-48.647a1.345,1.345,0,0,0-1.237.838l-4.9,12.037A3.114,3.114,0,0,0-55,488.008v.284a1.884,1.884,0,0,0,1.882,1.882H7.542a1.884,1.884,0,0,0,1.882-1.882v-.284A2.855,2.855,0,0,0,9.217,486.874Zm-26.38-.232H-28.414a.689.689,0,0,1-.683-.8l.631-3.892a.468.468,0,0,1,.451-.387h10.426a.448.448,0,0,1,.451.387l.631,3.892A.659.659,0,0,1-17.163,486.642Z",
  transform: "translate(0 -243.48)",
  fill: "#868686" }), /*#__PURE__*/

_react.default.createElement("path", {
  id: "Path_1914",
  "data-name": "Path 1914",
  d: "M-9.72,228.419H42.035a.578.578,0,0,0,.58-.58V195.08a.578.578,0,0,0-.58-.58H-9.72a.578.578,0,0,0-.58.58v32.759A.577.577,0,0,0-9.72,228.419Zm1.8-31.587H40.231v29.254H-7.916Z",
  transform: "translate(-38.939 0)",
  fill: "#868686" }))));





const phone = /*#__PURE__*/
_react.default.createElement(_react.Fragment, null, /*#__PURE__*/
_react.default.createElement("defs", null, /*#__PURE__*/
_react.default.createElement("filter", {
  id: "Rectangle_1284",
  x: "0",
  y: "0",
  width: "128",
  height: "128",
  filterUnits: "userSpaceOnUse" }, /*#__PURE__*/

_react.default.createElement("feOffset", { dy: "3", input: "SourceAlpha" }), /*#__PURE__*/
_react.default.createElement("feGaussianBlur", { stdDeviation: "3", result: "blur" }), /*#__PURE__*/
_react.default.createElement("feFlood", { floodOpacity: "0.161" }), /*#__PURE__*/
_react.default.createElement("feComposite", { operator: "in", in2: "blur" }), /*#__PURE__*/
_react.default.createElement("feComposite", { in: "SourceGraphic" }))), /*#__PURE__*/


_react.default.createElement("g", {
  id: "Component_161_4",
  "data-name": "Component 161 \u2013 4",
  transform: "translate(9 6)" }, /*#__PURE__*/

_react.default.createElement("g", { transform: "matrix(1, 0, 0, 1, -9, -6)", filter: "url(#Rectangle_1284)" }, /*#__PURE__*/
_react.default.createElement("rect", {
  id: "Rectangle_1284-2",
  "data-name": "Rectangle 1284",
  width: "110",
  height: "110",
  rx: "26",
  transform: "translate(9 6)",
  fill: "#fff" })), /*#__PURE__*/


_react.default.createElement("text", {
  id: "A_phone",
  "data-name": "A phone",
  transform: "translate(54.929 89.103)",
  fill: "#ababab",
  fontSize: "13",
  fontFamily: "Montserrat-Bold, Montserrat",
  fontWeight: "700" }, /*#__PURE__*/

_react.default.createElement("tspan", { x: "-28.723", y: "0" }, "A phone")), /*#__PURE__*/



_react.default.createElement("g", {
  id: "Group_2376",
  "data-name": "Group 2376",
  transform: "translate(10964 9507.255)" }, /*#__PURE__*/

_react.default.createElement("g", {
  id: "noun_Phone_1375627_1_",
  "data-name": "noun_Phone_1375627 (1)",
  transform: "translate(-10923 -9492.255)" }, /*#__PURE__*/

_react.default.createElement("path", {
  id: "Path_1909",
  "data-name": "Path 1909",
  d: "M30.691,958.363A3.61,3.61,0,0,0,27,961.9v44.861a3.61,3.61,0,0,0,3.691,3.541h20.92a3.61,3.61,0,0,0,3.691-3.541V961.9a3.61,3.61,0,0,0-3.691-3.542H30.691Zm6.768,2.354h7.377a.59.59,0,0,1,0,1.18H37.459a.59.59,0,0,1,0-1.18Zm-8,3.543H52.84v37.779H29.455Zm11.69,39.552a2.364,2.364,0,1,1-2.461,2.354,2.412,2.412,0,0,1,2.467-2.351Z",
  transform: "translate(-27 -958.36)",
  fill: "#868686",
  stroke: "#fff",
  strokeWidth: "0.2" })))));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3N2Zy9PcHRpb25TdmcuanN4Il0sIm5hbWVzIjpbInByb2Nlc3MiLCJlbnYiLCJCUk9XU0VSIiwiT3B0aW9uU3ZnIiwiQ29tcG9uZW50IiwicmVuZGVyIiwicHJvcHMiLCJpc1NlbGVjdGVkIiwiaGFuZGxlQ2xpY2siLCJyZW5kZXJTdmciLCJzdmdUeXBlIiwibWVoIiwibm9QaG9uZSIsIm1laFBhbG0iLCJzbWlsZXkiLCJzbWlsZXlQYWxtIiwibm9uZSIsInRhYmxldCIsImNvbXB1dGVyIiwicGhvbmUiLCJ4IiwidGV4dCJdLCJtYXBwaW5ncyI6ImllQUFBO0FBQ0EsSUFBSUEsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0Q7O0FBRWMsTUFBTUMsU0FBTixTQUF3QkMsZ0JBQXhCLENBQWtDOzs7Ozs7O0FBTy9DQyxFQUFBQSxNQUFNLEdBQUc7QUFDUDtBQUNFO0FBQ0UsUUFBQSxLQUFLLEVBQUMsNEJBRFI7QUFFRSxRQUFBLEtBQUssRUFBQyxLQUZSO0FBR0UsUUFBQSxNQUFNLEVBQUMsS0FIVDtBQUlFLFFBQUEsT0FBTyxFQUFDLGFBSlY7QUFLRSxRQUFBLFNBQVMsRUFBRyxHQUFFLEtBQUtDLEtBQUwsQ0FBV0MsVUFBWCxHQUF3QixVQUF4QixHQUFxQyxFQUFHLEVBTHhEO0FBTUUsUUFBQSxPQUFPLEVBQUUsS0FBS0QsS0FBTCxDQUFXRSxXQU50Qjs7QUFRRyxXQUFLQyxTQUFMLEVBUkgsQ0FERjs7O0FBWUQ7O0FBRURBLEVBQUFBLFNBQVMsR0FBRztBQUNWLFlBQVEsS0FBS0gsS0FBTCxDQUFXSSxPQUFuQjtBQUNFLFdBQUssS0FBTDtBQUNFLGVBQU9DLEdBQUcsRUFBVjtBQUNGLFdBQUssVUFBTDtBQUNFLGVBQU9DLE9BQVA7QUFDRixXQUFLLFdBQUw7QUFDRSxlQUFPRCxHQUFHLENBQUMsU0FBRCxFQUFZLGVBQVosQ0FBVjtBQUNGLFdBQUssY0FBTDtBQUNFLGVBQU9BLEdB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RixDQWpCRixDQURGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICBpbXBvcnQoJy4vT3B0aW9uU3ZnLnNjc3MnKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3B0aW9uU3ZnIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgc3RhdGljIGRlZmF1bHRQcm9wcyA9IHtcbiAgICBzdmdUeXBlOiAnbWVoJyxcbiAgICBoYW5kbGVDbGljazogKCkgPT4ge30sXG4gICAgaXNTZWxlY3RlZDogZmFsc2UsXG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8c3ZnXG4gICAgICAgIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIlxuICAgICAgICB3aWR0aD1cIjEyOFwiXG4gICAgICAgIGhlaWdodD1cIjEyOFwiXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgMTI4IDEyOFwiXG4gICAgICAgIGNsYXNzTmFtZT17YCR7dGhpcy5wcm9wcy5pc1NlbGVjdGVkID8gJ3NlbGVjdGVkJyA6ICcnfWB9XG4gICAgICAgIG9uQ2xpY2s9e3RoaXMucHJvcHMuaGFuZGxlQ2xpY2t9XG4gICAgICA+XG4gICAgICAgIHt0aGlzLnJlbmRlclN2ZygpfVxuICAgICAgPC9zdmc+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclN2ZygpIHtcbiAgICBzd2l0Y2ggKHRoaXMucHJvcHMuc3ZnVHlwZSkge1xuICAgICAgY2FzZSAnbWVoJzpcbiAgICAgICAgcmV0dXJuIG1laCgpO1xuICAgICAgY2FzZSAnbm8tcGhvbmUnOlxuICAgICAgICByZXR1cm4gbm9QaG9uZTtcbiAgICAgIGNhc2UgJ21laC1waG9uZSc6XG4gICAgICAgIHJldHVybiBtZWgoJy00OC40NTEnLCAnT25jZSBvciBtb3JlICcpO1xuICAgICAgY2FzZSAnbWVoLXNlY3VyaXR5JzpcbiAgICAgICAgcmV0dXJuIG1laCgnLTQzLjMwMycsIFwiSSdtIG5vdCBnb29kXCIpO1xuICAgICAgY2FzZSAnbWVoLXBhbG0nOlxuICAgICAgICByZXR1cm4gbWVoUGFsbTtcbiAgICAgIGNhc2UgJ3NtaWxleSc6XG4gICAgICAgIHJldHVybiBzbWlsZXkoKTtcbiAgICAgIGNhc2UgJ3NtaWxleS1waG9uZSc6XG4gICAgICAgIHJldHVybiBzbWlsZXkoJy0xOS45ODEnLCAnTmV2ZXInKTtcbiAgICAgIGNhc2UgJ3NtaWxleS1zZWN1cml0eSc6XG4gICAgICAgIHJldHVybiBzbWlsZXkoJy0yOS44NDgnLCBcIkknbSBnb29kXCIpO1xuICAgICAgY2FzZSAnc21pbGV5LXBhbG0nOlxuICAgICAgICByZXR1cm4gc21pbGV5UGFsbTtcbiAgICAgIGNhc2UgJ25vbmUnOlxuICAgICAgICByZXR1cm4gbm9uZTtcbiAgICAgIGNhc2UgJ3RhYmxldCc6XG4gICAgICAgIHJldHVybiB0YWJsZXQ7XG4gICAgICBjYXNlICdjb21wdXRlcic6XG4gICAgICAgIHJldHVybiBjb21wdXRlcjtcbiAgICAgIGNhc2UgJ3Bob25lJzpcbiAgICAgICAgcmV0dXJuIHBob25lO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgbWVoID0gKHggPSAnLTE5LjMxMicsIHRleHQgPSAnT2Z0ZW4nKSA9PiAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGVmcz5cbiAgICAgIDxmaWx0ZXJcbiAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NFwiXG4gICAgICAgIHg9XCIwXCJcbiAgICAgICAgeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjEyOFwiXG4gICAgICAgIGhlaWdodD1cIjEyOFwiXG4gICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgPlxuICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIgaW5wdXQ9XCJTb3VyY2VBbHBoYVwiIC8+XG4gICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIzXCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjAuMTYxXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPVwiaW5cIiBpbjI9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIC8+XG4gICAgICA8L2ZpbHRlcj5cbiAgICA8L2RlZnM+XG4gICAgPGdcbiAgICAgIGlkPVwiQ29tcG9uZW50XzE2MV8xXCJcbiAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNjEg4oCTIDFcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpXCIgZmlsdGVyPVwidXJsKCNSZWN0YW5nbGVfMTI4NClcIj5cbiAgICAgICAgPHJlY3RcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjg0LTJcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjg0XCJcbiAgICAgICAgICB3aWR0aD1cIjExMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTEwXCJcbiAgICAgICAgICByeD1cIjI2XCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOSA2KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPHRleHRcbiAgICAgICAgaWQ9XCJPZnRlblwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NC45MjkgOTEuMTAzKVwiXG4gICAgICAgIGZpbGw9XCIjYWJhYmFiXCJcbiAgICAgICAgZm9udFNpemU9XCIxM1wiXG4gICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgID5cbiAgICAgICAgPHRzcGFuIHg9e3h9IHk9XCIwXCI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvdHNwYW4+XG4gICAgICA8L3RleHQ+XG4gICAgICA8ZyBpZD1cIkdyb3VwXzIzMzdcIiBkYXRhLW5hbWU9XCJHcm91cCAyMzM3XCIgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDI3IDE3KVwiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzY3NlwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSA2NzZcIlxuICAgICAgICAgIGN4PVwiMjdcIlxuICAgICAgICAgIGN5PVwiMjdcIlxuICAgICAgICAgIHI9XCIyN1wiXG4gICAgICAgICAgZmlsbD1cIiNhYmFiYWJcIlxuICAgICAgICAvPlxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiRWxsaXBzZV82NzlcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgNjc5XCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTIgMTYpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0LjVcIiBzdHJva2U9XCJub25lXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiNC41XCIgY3k9XCI0LjVcIiByPVwiNFwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiRWxsaXBzZV82ODBcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgNjgwXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzMgMTYpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0LjVcIiBzdHJva2U9XCJub25lXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiNC41XCIgY3k9XCI0LjVcIiByPVwiNFwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiQ29tcG9uZW50XzE1OF8xNzFcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNTgg4oCTIDE3MVwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE3Ljk1NyAzNi40MTQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlBhdGhfMTg1MVwiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NTFcIlxuICAgICAgICAgICAgZD1cIk0tMTM0NjAuNTQyLTk1OTguM2ExMzQuNDUyLDEzNC40NTIsMCwwLDEsMTguMTI5LTIuNzU5XCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzQ2MC41NDIgOTYwMS4wNTgpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiNmYmZkZmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmNvbnN0IHNtaWxleSA9ICh4ID0gJy0yMS40NDMnLCB0ZXh0ID0gJ1JhcmVseScpID0+IChcbiAgPEZyYWdtZW50PlxuICAgIDxkZWZzPlxuICAgICAgPGZpbHRlclxuICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjg0XCJcbiAgICAgICAgeD1cIjBcIlxuICAgICAgICB5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTI4XCJcbiAgICAgICAgaGVpZ2h0PVwiMTI4XCJcbiAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICA+XG4gICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIiBpbnB1dD1cIlNvdXJjZUFscGhhXCIgLz5cbiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjNcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMC4xNjFcIiAvPlxuICAgICAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9XCJpblwiIGluMj1cImJsdXJcIiAvPlxuICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIgLz5cbiAgICAgIDwvZmlsdGVyPlxuICAgIDwvZGVmcz5cbiAgICA8Z1xuICAgICAgaWQ9XCJDb21wb25lbnRfMTYxXzE0XCJcbiAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNjEg4oCTIDE0XCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5IDYpXCJcbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgLTksIC02KVwiIGZpbHRlcj1cInVybCgjUmVjdGFuZ2xlXzEyODQpXCI+XG4gICAgICAgIDxyZWN0XG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NC0yXCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI4NFwiXG4gICAgICAgICAgd2lkdGg9XCIxMTBcIlxuICAgICAgICAgIGhlaWdodD1cIjExMFwiXG4gICAgICAgICAgcng9XCIyNlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGlkPVwiR3JvdXBfMjMzN1wiIGRhdGEtbmFtZT1cIkdyb3VwIDIzMzdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjggMTcpXCI+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfNjc2XCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDY3NlwiXG4gICAgICAgICAgY3g9XCIyN1wiXG4gICAgICAgICAgY3k9XCIyN1wiXG4gICAgICAgICAgcj1cIjI3XCJcbiAgICAgICAgICBmaWxsPVwiI2FiYWJhYlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzY3OVwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSA2NzlcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMiAxNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjQuNVwiIGN5PVwiNC41XCIgcj1cIjQuNVwiIHN0cm9rZT1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzY4MFwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSA2ODBcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMyAxNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjQuNVwiIGN5PVwiNC41XCIgcj1cIjQuNVwiIHN0cm9rZT1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJDb21wb25lbnRfMTU4XzMzXCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTU4IOKAkyAzM1wiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExLjEzNCAzMy42NDcpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlBhdGhfMTg1M1wiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NTNcIlxuICAgICAgICAgICAgZD1cIk0tMTM0NjguNDc1LTk2MDEuOTg4YzMuNzkxLjUyMywyNS4zOC44LDI5LjQ1NCwwcy0zLjI1NywxMS4xOTItMTMuOCwxMS4xOTJTLTEzNDcyLjI2Ni05NjAyLjUxMS0xMzQ2OC40NzUtOTYwMS45ODhaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzQ2OS4zNjQgOTYwMi4wMjYpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgICA8dGV4dFxuICAgICAgICBpZD1cIlJhcmVseVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NC45MjkgOTEuMTAzKVwiXG4gICAgICAgIGZpbGw9XCIjYWJhYmFiXCJcbiAgICAgICAgZm9udFNpemU9XCIxM1wiXG4gICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgID5cbiAgICAgICAgPHRzcGFuIHg9e3h9IHk9XCIwXCI+XG4gICAgICAgICAge3RleHR9XG4gICAgICAgIDwvdHNwYW4+XG4gICAgICA8L3RleHQ+XG4gICAgPC9nPlxuICA8L0ZyYWdtZW50PlxuKTtcblxuY29uc3Qgbm9QaG9uZSA9IChcbiAgPEZyYWdtZW50PlxuICAgIDxkZWZzPlxuICAgICAgPGZpbHRlclxuICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjg0XCJcbiAgICAgICAgeD1cIjBcIlxuICAgICAgICB5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTI4XCJcbiAgICAgICAgaGVpZ2h0PVwiMTI4XCJcbiAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICA+XG4gICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIiBpbnB1dD1cIlNvdXJjZUFscGhhXCIgLz5cbiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjNcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMC4xNjFcIiAvPlxuICAgICAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9XCJpblwiIGluMj1cImJsdXJcIiAvPlxuICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIgLz5cbiAgICAgIDwvZmlsdGVyPlxuICAgIDwvZGVmcz5cbiAgICA8Z1xuICAgICAgaWQ9XCJDb21wb25lbnRfMTYxXzM3XCJcbiAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNjEg4oCTIDM3XCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5IDYpXCJcbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgLTksIC02KVwiIGZpbHRlcj1cInVybCgjUmVjdGFuZ2xlXzEyODQpXCI+XG4gICAgICAgIDxyZWN0XG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NC0yXCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI4NFwiXG4gICAgICAgICAgd2lkdGg9XCIxMTBcIlxuICAgICAgICAgIGhlaWdodD1cIjExMFwiXG4gICAgICAgICAgcng9XCIyNlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDx0ZXh0XG4gICAgICAgIGlkPVwiSV9kb25fdF9oYXZlX2FfcGhvbmVcIlxuICAgICAgICBkYXRhLW5hbWU9XCJJIGRvbid0IGhhdmVcbiBhIHBob25lXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0LjkyOSA4MS4xMDMpXCJcbiAgICAgICAgZmlsbD1cIiNhYmFiYWJcIlxuICAgICAgICBmb250U2l6ZT1cIjEzXCJcbiAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgPlxuICAgICAgICA8dHNwYW4geD1cIi0zOS43MDhcIiB5PVwiMFwiPlxuICAgICAgICAgIEkgZG9uJmFwb3M7dCBoYXZlXG4gICAgICAgIDwvdHNwYW4+XG4gICAgICAgIHsvKiA8dHNwYW4geD1cIi0yOS41OTRcIiB5PVwiMTZcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiPiAqL31cbiAgICAgICAgPHRzcGFuIHg9XCItMjkuNTk0XCIgeT1cIjE2XCI+XG4gICAgICAgICAgYSBwaG9uZVxuICAgICAgICA8L3RzcGFuPlxuICAgICAgPC90ZXh0PlxuICAgICAgPGdcbiAgICAgICAgaWQ9XCJHcm91cF8yNDI5XCJcbiAgICAgICAgZGF0YS1uYW1lPVwiR3JvdXAgMjQyOVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTA5IC0yMTQpXCJcbiAgICAgID5cbiAgICAgICAgPGdcbiAgICAgICAgICBpZD1cIm5vdW5fUGhvbmVfMTM3NTYyN18xX1wiXG4gICAgICAgICAgZGF0YS1uYW1lPVwibm91bl9QaG9uZV8xMzc1NjI3ICgxKVwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE1MS4yMDcgMjI5KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJQYXRoXzE5MDlcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxOTA5XCJcbiAgICAgICAgICAgIGQ9XCJNMzAuMzE2LDk1OC4zNjNhMy4yOTIsMy4yOTIsMCwwLDAtMi4zMTguODc3LDMuMTE0LDMuMTE0LDAsMCwwLTEsMi4yMTZ2MzkuMTg3YTMuMTE0LDMuMTE0LDAsMCwwLDEsMi4yMTYsMy4yOTMsMy4yOTMsMCwwLDAsMi4zMTguODc3SDQ5LjEwN2EzLjI5MywzLjI5MywwLDAsMCwyLjMxOC0uODc3LDMuMTE0LDMuMTE0LDAsMCwwLDEtMi4yMTZWOTYxLjQ1NWEzLjExMywzLjExMywwLDAsMC0xLTIuMjE3LDMuMjkzLDMuMjkzLDAsMCwwLTIuMzE5LS44NzdIMzAuMzE2Wm02LjA3OSwyLjA1Nmg2LjYyNmEuNTE2LjUxNiwwLDEsMSwwLDEuMDMxSDM2LjM5NWEuNTE2LjUxNiwwLDEsMSwwLTEuMDMxWm0tNy4xOSwzLjA5NEg1MC4yMTF2MzNIMjkuMlptMTAuNSwzNC41NWEyLjA2NiwyLjA2NiwwLDEsMS0yLjIxMSwyLjA1NiwyLjE0MSwyLjE0MSwwLDAsMSwyLjIxNi0yLjA1NFpcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNyAtOTU4LjM2KVwiXG4gICAgICAgICAgICBmaWxsPVwiI2FiYWJhYlwiXG4gICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC4yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJHcm91cF8yMzg4XCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMzg4XCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTU0LjI5MyAyNDIuMDY3KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8Z1xuICAgICAgICAgICAgaWQ9XCJFbGxpcHNlXzY4OFwiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDY4OFwiXG4gICAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMS43MDYgMC45MzMpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjYWJhYmFiXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiM3MDcwNzBcIlxuICAgICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjhcIiBjeT1cIjguNVwiIHJ4PVwiOFwiIHJ5PVwiOC41XCIgc3Ryb2tlPVwibm9uZVwiIC8+XG4gICAgICAgICAgICA8ZWxsaXBzZSBjeD1cIjhcIiBjeT1cIjguNVwiIHJ4PVwiNy41XCIgcnk9XCI4XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJub3VuX1F1ZXN0aW9uXzY3MDM5OFwiXG4gICAgICAgICAgICBkPVwiTTEyLjQ1NCwzYTkuNDU0LDkuNDU0LDAsMSwwLDkuNDU0LDkuNDU0QTkuNDU0LDkuNDU0LDAsMCwwLDEyLjQ1NCwzWm0tLjEyOSwxNS42NzRhMS4wODIsMS4wODIsMCwxLDEsMS4wODItMS4wODJBMS4wODIsMS4wODIsMCwwLDEsMTIuMzI2LDE4LjY3NFptMS4xODMtNS4yNTRzLS4xMDcuMDM4LS4xMDcuMXYuODU5YTEuMDc3LDEuMDc3LDAsMSwxLTIuMTU0LDB2LS44NTlhMi4yNzcsMi4yNzcsMCwwLDEsMS41NzEtMi4xNDIsMS41MjksMS41MjksMCwwLDAsMS4wNDQtMS41LDEuNTcxLDEuNTcxLDAsMCwwLTEuNTQ3LTEuNDg5LDEuNTI1LDEuNTI1LDAsMCwwLTEuMzcuODY5QTEuMDc3LDEuMDc3LDAsMSwxLDksOC4zMjMsMy42NjcsMy42NjcsMCwwLDEsMTIuMyw2LjIzNWguMDIyYTMuNzE3LDMuNzE3LDAsMCwxLDMuNjkzLDMuNTc5LDMuNjcxLDMuNjcxLDAsMCwxLTIuNSwzLjZaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMyAtMylcIlxuICAgICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuXG5jb25zdCBtZWhQYWxtID0gKFxuICA8RnJhZ21lbnQ+XG4gICAgPGRlZnM+XG4gICAgICA8ZmlsdGVyXG4gICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyODRcIlxuICAgICAgICB4PVwiMFwiXG4gICAgICAgIHk9XCIwXCJcbiAgICAgICAgd2lkdGg9XCIxMjhcIlxuICAgICAgICBoZWlnaHQ9XCIxMjhcIlxuICAgICAgICBmaWx0ZXJVbml0cz1cInVzZXJTcGFjZU9uVXNlXCJcbiAgICAgID5cbiAgICAgICAgPGZlT2Zmc2V0IGR5PVwiM1wiIGlucHV0PVwiU291cmNlQWxwaGFcIiAvPlxuICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPVwiM1wiIHJlc3VsdD1cImJsdXJcIiAvPlxuICAgICAgICA8ZmVGbG9vZCBmbG9vZE9wYWNpdHk9XCIwLjE2MVwiIC8+XG4gICAgICAgIDxmZUNvbXBvc2l0ZSBvcGVyYXRvcj1cImluXCIgaW4yPVwiYmx1clwiIC8+XG4gICAgICAgIDxmZUNvbXBvc2l0ZSBpbj1cIlNvdXJjZUdyYXBoaWNcIiAvPlxuICAgICAgPC9maWx0ZXI+XG4gICAgPC9kZWZzPlxuICAgIDxnXG4gICAgICBpZD1cIkNvbXBvbmVudF8xNjFfMVwiXG4gICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTYxIOKAkyAxXCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5IDYpXCJcbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgLTksIC02KVwiIGZpbHRlcj1cInVybCgjUmVjdGFuZ2xlXzEyODQpXCI+XG4gICAgICAgIDxyZWN0XG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NC0yXCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI4NFwiXG4gICAgICAgICAgd2lkdGg9XCIxMTBcIlxuICAgICAgICAgIGhlaWdodD1cIjExMFwiXG4gICAgICAgICAgcng9XCIyNlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDx0ZXh0XG4gICAgICAgIGlkPVwiSV9tX25vdF9jb21mb3J0YWJsZVwiXG4gICAgICAgIGRhdGEtbmFtZT1cIkknbSBub3RcbmNvbWZvcnRhYmxlXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0LjkyOSA4My4xMDMpXCJcbiAgICAgICAgZmlsbD1cIiNhYmFiYWJcIlxuICAgICAgICBmb250U2l6ZT1cIjEzXCJcbiAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgPlxuICAgICAgICA8dHNwYW4geD1cIi0yNS43NFwiIHk9XCIwXCI+XG4gICAgICAgICAgSSZhcG9zO20gbm90eycgJ31cbiAgICAgICAgPC90c3Bhbj5cbiAgICAgICAgPHRzcGFuIHg9XCItNDEuODhcIiB5PVwiMTZcIj5cbiAgICAgICAgICBjb21mb3J0YWJsZVxuICAgICAgICA8L3RzcGFuPlxuICAgICAgPC90ZXh0PlxuICAgICAgPGcgaWQ9XCJHcm91cF8yMzM3XCIgZGF0YS1uYW1lPVwiR3JvdXAgMjMzN1wiIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyNyA5KVwiPlxuICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzY3NlwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSA2NzZcIlxuICAgICAgICAgIGN4PVwiMjdcIlxuICAgICAgICAgIGN5PVwiMjdcIlxuICAgICAgICAgIHI9XCIyN1wiXG4gICAgICAgICAgZmlsbD1cIiNhYmFiYWJcIlxuICAgICAgICAvPlxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiRWxsaXBzZV82NzlcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgNjc5XCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMTIgMTYpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0LjVcIiBzdHJva2U9XCJub25lXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiNC41XCIgY3k9XCI0LjVcIiByPVwiNFwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiRWxsaXBzZV82ODBcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIkVsbGlwc2UgNjgwXCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMzMgMTYpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlPVwiI2ZmZlwiXG4gICAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0LjVcIiBzdHJva2U9XCJub25lXCIgLz5cbiAgICAgICAgICA8Y2lyY2xlIGN4PVwiNC41XCIgY3k9XCI0LjVcIiByPVwiNFwiIGZpbGw9XCJub25lXCIgLz5cbiAgICAgICAgPC9nPlxuICAgICAgICA8Z1xuICAgICAgICAgIGlkPVwiQ29tcG9uZW50XzE1OF8xNzNcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNTgg4oCTIDE3M1wiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDE3Ljk1NyAzNi40MTQpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlBhdGhfMTg1MVwiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NTFcIlxuICAgICAgICAgICAgZD1cIk0tMTM0NjAuNTQyLTk1OTguM2ExMzQuNDUyLDEzNC40NTIsMCwwLDEsMTguMTI5LTIuNzU5XCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzQ2MC41NDIgOTYwMS4wNTgpXCJcbiAgICAgICAgICAgIGZpbGw9XCJub25lXCJcbiAgICAgICAgICAgIHN0cm9rZT1cIiNmYmZkZmRcIlxuICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiNFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9nPlxuICAgICAgPC9nPlxuICAgIDwvZz5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmNvbnN0IHNtaWxleVBhbG0gPSAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGVmcz5cbiAgICAgIDxmaWx0ZXJcbiAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NFwiXG4gICAgICAgIHg9XCIwXCJcbiAgICAgICAgeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjEyOFwiXG4gICAgICAgIGhlaWdodD1cIjEyOFwiXG4gICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgPlxuICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIgaW5wdXQ9XCJTb3VyY2VBbHBoYVwiIC8+XG4gICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIzXCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjAuMTYxXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPVwiaW5cIiBpbjI9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIC8+XG4gICAgICA8L2ZpbHRlcj5cbiAgICA8L2RlZnM+XG4gICAgPGdcbiAgICAgIGlkPVwiQ29tcG9uZW50XzE2MV8xNFwiXG4gICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTYxIOKAkyA0XCJcbiAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5IDYpXCJcbiAgICA+XG4gICAgICA8ZyB0cmFuc2Zvcm09XCJtYXRyaXgoMSwgMCwgMCwgMSwgLTksIC02KVwiIGZpbHRlcj1cInVybCgjUmVjdGFuZ2xlXzEyODQpXCI+XG4gICAgICAgIDxyZWN0XG4gICAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NC0yXCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJSZWN0YW5nbGUgMTI4NFwiXG4gICAgICAgICAgd2lkdGg9XCIxMTBcIlxuICAgICAgICAgIGhlaWdodD1cIjExMFwiXG4gICAgICAgICAgcng9XCIyNlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICAgIDxnIGlkPVwiR3JvdXBfMjMzN1wiIGRhdGEtbmFtZT1cIkdyb3VwIDIzMzdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoMjggMTgpXCI+XG4gICAgICAgIDxjaXJjbGVcbiAgICAgICAgICBpZD1cIkVsbGlwc2VfNjc2XCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJFbGxpcHNlIDY3NlwiXG4gICAgICAgICAgY3g9XCIyN1wiXG4gICAgICAgICAgY3k9XCIyN1wiXG4gICAgICAgICAgcj1cIjI3XCJcbiAgICAgICAgICBmaWxsPVwiI2FiYWJhYlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzY3OVwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSA2NzlcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMiAxNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjQuNVwiIGN5PVwiNC41XCIgcj1cIjQuNVwiIHN0cm9rZT1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJFbGxpcHNlXzY4MFwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiRWxsaXBzZSA2ODBcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgzMyAxNilcIlxuICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICBzdHJva2VXaWR0aD1cIjFcIlxuICAgICAgICA+XG4gICAgICAgICAgPGNpcmNsZSBjeD1cIjQuNVwiIGN5PVwiNC41XCIgcj1cIjQuNVwiIHN0cm9rZT1cIm5vbmVcIiAvPlxuICAgICAgICAgIDxjaXJjbGUgY3g9XCI0LjVcIiBjeT1cIjQuNVwiIHI9XCI0XCIgZmlsbD1cIm5vbmVcIiAvPlxuICAgICAgICA8L2c+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJDb21wb25lbnRfMTU4XzMzXCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTU4IOKAkyAzM1wiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDExLjEzNCAzMy42NDcpXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICBpZD1cIlBhdGhfMTg1M1wiXG4gICAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE4NTNcIlxuICAgICAgICAgICAgZD1cIk0tMTM0NjguNDc1LTk2MDEuOTg4YzMuNzkxLjUyMywyNS4zOC44LDI5LjQ1NCwwcy0zLjI1NywxMS4xOTItMTMuOCwxMS4xOTJTLTEzNDcyLjI2Ni05NjAyLjUxMS0xMzQ2OC40NzUtOTYwMS45ODhaXCJcbiAgICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgxMzQ2OS4zNjQgOTYwMi4wMjYpXCJcbiAgICAgICAgICAgIGZpbGw9XCIjZmZmXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgICA8dGV4dFxuICAgICAgICBpZD1cIklfbV9jb21mb3J0YWJsZVwiXG4gICAgICAgIGRhdGEtbmFtZT1cIkknbSBjb21mb3J0YWJsZVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NC45MjkgODguMTAzKVwiXG4gICAgICAgIGZpbGw9XCIjYWJhYmFiXCJcbiAgICAgICAgZm9udFNpemU9XCIxMVwiXG4gICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgID5cbiAgICAgICAgPHRzcGFuIHg9XCItNDUuODMyXCIgeT1cIjBcIj5cbiAgICAgICAgICBJJmFwb3M7bSBjb21mb3J0YWJsZVxuICAgICAgICA8L3RzcGFuPlxuICAgICAgPC90ZXh0PlxuICAgIDwvZz5cbiAgPC9GcmFnbWVudD5cbik7XG5cbmNvbnN0IG5vbmUgPSAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGVmcz5cbiAgICAgIDxmaWx0ZXJcbiAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NFwiXG4gICAgICAgIHg9XCIwXCJcbiAgICAgICAgeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjEyOFwiXG4gICAgICAgIGhlaWdodD1cIjEyOFwiXG4gICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgPlxuICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIgaW5wdXQ9XCJTb3VyY2VBbHBoYVwiIC8+XG4gICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIzXCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjAuMTYxXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPVwiaW5cIiBpbjI9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIC8+XG4gICAgICA8L2ZpbHRlcj5cbiAgICA8L2RlZnM+XG4gICAgPGdcbiAgICAgIGlkPVwiQ29tcG9uZW50XzE2MV8zMVwiXG4gICAgICBkYXRhLW5hbWU9XCJDb21wb25lbnQgMTYxIOKAkyAzMVwiXG4gICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOSA2KVwiXG4gICAgPlxuICAgICAgPGcgdHJhbnNmb3JtPVwibWF0cml4KDEsIDAsIDAsIDEsIC05LCAtNilcIiBmaWx0ZXI9XCJ1cmwoI1JlY3RhbmdsZV8xMjg0KVwiPlxuICAgICAgICA8cmVjdFxuICAgICAgICAgIGlkPVwiUmVjdGFuZ2xlXzEyODQtMlwiXG4gICAgICAgICAgZGF0YS1uYW1lPVwiUmVjdGFuZ2xlIDEyODRcIlxuICAgICAgICAgIHdpZHRoPVwiMTEwXCJcbiAgICAgICAgICBoZWlnaHQ9XCIxMTBcIlxuICAgICAgICAgIHJ4PVwiMjZcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg5IDYpXCJcbiAgICAgICAgICBmaWxsPVwiI2ZmZlwiXG4gICAgICAgIC8+XG4gICAgICA8L2c+XG4gICAgICA8dGV4dFxuICAgICAgICBpZD1cIklfZG9uX3RcIlxuICAgICAgICBkYXRhLW5hbWU9XCJJIGRvbid0XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0LjkyOSA4OS4xMDMpXCJcbiAgICAgICAgZmlsbD1cIiNhYmFiYWJcIlxuICAgICAgICBmb250U2l6ZT1cIjEzXCJcbiAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgPlxuICAgICAgICA8dHNwYW4geD1cIi0yMS41NDFcIiB5PVwiMFwiPlxuICAgICAgICAgIEkgZG9uJmFwb3M7dFxuICAgICAgICA8L3RzcGFuPlxuICAgICAgPC90ZXh0PlxuICAgICAgPHBhdGhcbiAgICAgICAgaWQ9XCJub3VuX1N0b3BfMTg3NzM1NVwiXG4gICAgICAgIGQ9XCJNNDguNCwxMy42MzhhLjg3OS44NzksMCwwLDAtLjEtLjEyN2wtLjQxNS0uNDE1YS44MzcuODM3LDAsMCwwLS4xMzEtLjEwNywyNC45MTIsMjQuOTEyLDAsMCwwLTM0LjQ2MS4zMjJjLTkuNjQxLDkuMzM5LTkuMjEzLDI0Ljg4My0uMzExLDM0LjQ3NGEuODQxLjg0MSwwLDAsMCwuMS4xMThsLjQxNS40MTVhLjg4OS44ODksMCwwLDAsLjEyNC4xQTI0LjkxNCwyNC45MTQsMCwwLDAsNDguMDg0LDQ4LjFDNTcuNzIzLDM4Ljc2Nyw1Ny4zLDIzLjIzLDQ4LjQsMTMuNjM4Wm0tMzMuNzE5LDEuNkMyMi45MDcsNi40NjUsMzYuNzQsNi41MTksNDUuNTcsMTQuMTdMMTQuMTUsNDUuNTg5QTIyLjUyOCwyMi41MjgsMCwwLDEsMTQuNjg1LDE1LjIzOVptMTYsMzcuNzM3YTIyLjg2OCwyMi44NjgsMCwwLDEtMTQuODgyLTUuNzI4TDQ3LjIzMSwxNS44MjNBMjIuMjU3LDIyLjI1NywwLDAsMSwzMC42ODksNTIuOTc2WlwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgyMy44MTYgOS43NzEpXCJcbiAgICAgICAgZmlsbD1cIiM4Njg2ODZcIlxuICAgICAgICBzdHJva2U9XCIjODY4Njg2XCJcbiAgICAgICAgc3Ryb2tlV2lkdGg9XCIxXCJcbiAgICAgIC8+XG4gICAgPC9nPlxuICA8L0ZyYWdtZW50PlxuKTtcbmNvbnN0IHRhYmxldCA9IChcbiAgPEZyYWdtZW50PlxuICAgIDxkZWZzPlxuICAgICAgPGZpbHRlclxuICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjg0XCJcbiAgICAgICAgeD1cIjBcIlxuICAgICAgICB5PVwiMFwiXG4gICAgICAgIHdpZHRoPVwiMTI4XCJcbiAgICAgICAgaGVpZ2h0PVwiMTI4XCJcbiAgICAgICAgZmlsdGVyVW5pdHM9XCJ1c2VyU3BhY2VPblVzZVwiXG4gICAgICA+XG4gICAgICAgIDxmZU9mZnNldCBkeT1cIjNcIiBpbnB1dD1cIlNvdXJjZUFscGhhXCIgLz5cbiAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj1cIjNcIiByZXN1bHQ9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlRmxvb2QgZmxvb2RPcGFjaXR5PVwiMC4xNjFcIiAvPlxuICAgICAgICA8ZmVDb21wb3NpdGUgb3BlcmF0b3I9XCJpblwiIGluMj1cImJsdXJcIiAvPlxuICAgICAgICA8ZmVDb21wb3NpdGUgaW49XCJTb3VyY2VHcmFwaGljXCIgLz5cbiAgICAgIDwvZmlsdGVyPlxuICAgIDwvZGVmcz5cbiAgICA8Z1xuICAgICAgaWQ9XCJDb21wb25lbnRfMTYxXzFhXCJcbiAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNjEg4oCTIDFcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpXCIgZmlsdGVyPVwidXJsKCNSZWN0YW5nbGVfMTI4NClcIj5cbiAgICAgICAgPHJlY3RcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjg0LTJcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjg0XCJcbiAgICAgICAgICB3aWR0aD1cIjExMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTEwXCJcbiAgICAgICAgICByeD1cIjI2XCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOSA2KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPHRleHRcbiAgICAgICAgaWQ9XCJBX3RhYmxldFwiXG4gICAgICAgIGRhdGEtbmFtZT1cIkEgdGFibGV0XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDU0LjkyOSA4OS4xMDMpXCJcbiAgICAgICAgZmlsbD1cIiNhYmFiYWJcIlxuICAgICAgICBmb250U2l6ZT1cIjEzXCJcbiAgICAgICAgZm9udEZhbWlseT1cIk1vbnRzZXJyYXQtQm9sZCwgTW9udHNlcnJhdFwiXG4gICAgICAgIGZvbnRXZWlnaHQ9XCI3MDBcIlxuICAgICAgPlxuICAgICAgICA8dHNwYW4geD1cIi0yNy4wMjdcIiB5PVwiMFwiPlxuICAgICAgICAgIEEgdGFibGV0XG4gICAgICAgIDwvdHNwYW4+XG4gICAgICA8L3RleHQ+XG4gICAgICA8cGF0aFxuICAgICAgICBpZD1cIm5vdW5fVGFibGV0Xzg2NzA3OFwiXG4gICAgICAgIGQ9XCJNNDcuOTg5LDIuMTY3SDE1LjQyM2EzLjEzNSwzLjEzNSwwLDAsMC0zLjA1LDMuMjE0VjUwLjYyNWEzLjEzNSwzLjEzNSwwLDAsMCwzLjA1LDMuMjE0SDQ3Ljk4OWEzLjEzNSwzLjEzNSwwLDAsMCwzLjA0OS0zLjIxNFY1LjM4MUEzLjEzNSwzLjEzNSwwLDAsMCw0Ny45ODksMi4xNjdaTTI5Ljc4Myw0LjIxNWg0LjEzOGMuMzA5LDAsLjU1OS4xODguNTU5LjQxOXMtLjI1MS40MTktLjU1OS40MTlIMjkuNzgzYy0uMzA5LDAtLjU1OS0uMTg4LS41NTktLjQxOVMyOS40NzUsNC4yMTUsMjkuNzgzLDQuMjE1Wk0zMS43MDYsNTEuOTNhMS40MTksMS40MTksMCwxLDEsMS40MTgtMS40MTlBMS40MTksMS40MTksMCwwLDEsMzEuNzA2LDUxLjkzWm0xNy40MTQtNC45MUgxNC4yOVY3LjI3NUg0OS4xMlY0Ny4wMjFaXCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDIzLjYyNyAxMi44MzMpXCJcbiAgICAgICAgZmlsbD1cIiM4Njg2ODZcIlxuICAgICAgLz5cbiAgICA8L2c+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuY29uc3QgY29tcHV0ZXIgPSAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGVmcz5cbiAgICAgIDxmaWx0ZXJcbiAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NFwiXG4gICAgICAgIHg9XCIwXCJcbiAgICAgICAgeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjEyOFwiXG4gICAgICAgIGhlaWdodD1cIjEyOFwiXG4gICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgPlxuICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIgaW5wdXQ9XCJTb3VyY2VBbHBoYVwiIC8+XG4gICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIzXCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjAuMTYxXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPVwiaW5cIiBpbjI9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIC8+XG4gICAgICA8L2ZpbHRlcj5cbiAgICA8L2RlZnM+XG4gICAgPGdcbiAgICAgIGlkPVwiQ29tcG9uZW50XzE2MV8zXCJcbiAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNjEg4oCTIDNcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpXCIgZmlsdGVyPVwidXJsKCNSZWN0YW5nbGVfMTI4NClcIj5cbiAgICAgICAgPHJlY3RcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjg0LTJcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjg0XCJcbiAgICAgICAgICB3aWR0aD1cIjExMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTEwXCJcbiAgICAgICAgICByeD1cIjI2XCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOSA2KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPHRleHRcbiAgICAgICAgaWQ9XCJBX2NvbXB1dGVyXCJcbiAgICAgICAgZGF0YS1uYW1lPVwiQSBjb21wdXRlclwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NC45MjkgODkuMTAzKVwiXG4gICAgICAgIGZpbGw9XCIjYWJhYmFiXCJcbiAgICAgICAgZm9udFNpemU9XCIxM1wiXG4gICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgID5cbiAgICAgICAgPHRzcGFuIHg9XCItNDAuMjYxXCIgeT1cIjBcIj5cbiAgICAgICAgICBBIGNvbXB1dGVyXG4gICAgICAgIDwvdHNwYW4+XG4gICAgICA8L3RleHQ+XG4gICAgICA8ZyBpZD1cIm5vdW5fTGFwdG9wXzMwNjcxMzdcIiB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoNzggLTE3OS41KVwiPlxuICAgICAgICA8cGF0aFxuICAgICAgICAgIGlkPVwiUGF0aF8xOTEzXCJcbiAgICAgICAgICBkYXRhLW5hbWU9XCJQYXRoIDE5MTNcIlxuICAgICAgICAgIGQ9XCJNOS4yMTcsNDg2Ljg3NCw0LjMzMyw0NzQuODM4QTEuMzQ1LDEuMzQ1LDAsMCwwLDMuMSw0NzRILTQ4LjY0N2ExLjM0NSwxLjM0NSwwLDAsMC0xLjIzNy44MzhsLTQuOSwxMi4wMzdBMy4xMTQsMy4xMTQsMCwwLDAtNTUsNDg4LjAwOHYuMjg0YTEuODg0LDEuODg0LDAsMCwwLDEuODgyLDEuODgySDcuNTQyYTEuODg0LDEuODg0LDAsMCwwLDEuODgyLTEuODgydi0uMjg0QTIuODU1LDIuODU1LDAsMCwwLDkuMjE3LDQ4Ni44NzRabS0yNi4zOC0uMjMySC0yOC40MTRhLjY4OS42ODksMCwwLDEtLjY4My0uOGwuNjMxLTMuODkyYS40NjguNDY4LDAsMCwxLC40NTEtLjM4N2gxMC40MjZhLjQ0OC40NDgsMCwwLDEsLjQ1MS4zODdsLjYzMSwzLjg5MkEuNjU5LjY1OSwwLDAsMS0xNy4xNjMsNDg2LjY0MlpcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgwIC0yNDMuNDgpXCJcbiAgICAgICAgICBmaWxsPVwiIzg2ODY4NlwiXG4gICAgICAgIC8+XG4gICAgICAgIDxwYXRoXG4gICAgICAgICAgaWQ9XCJQYXRoXzE5MTRcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIlBhdGggMTkxNFwiXG4gICAgICAgICAgZD1cIk0tOS43MiwyMjguNDE5SDQyLjAzNWEuNTc4LjU3OCwwLDAsMCwuNTgtLjU4VjE5NS4wOGEuNTc4LjU3OCwwLDAsMC0uNTgtLjU4SC05LjcyYS41NzguNTc4LDAsMCwwLS41OC41OHYzMi43NTlBLjU3Ny41NzcsMCwwLDAtOS43MiwyMjguNDE5Wm0xLjgtMzEuNTg3SDQwLjIzMXYyOS4yNTRILTcuOTE2WlwiXG4gICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0zOC45MzkgMClcIlxuICAgICAgICAgIGZpbGw9XCIjODY4Njg2XCJcbiAgICAgICAgLz5cbiAgICAgIDwvZz5cbiAgICA8L2c+XG4gIDwvRnJhZ21lbnQ+XG4pO1xuY29uc3QgcGhvbmUgPSAoXG4gIDxGcmFnbWVudD5cbiAgICA8ZGVmcz5cbiAgICAgIDxmaWx0ZXJcbiAgICAgICAgaWQ9XCJSZWN0YW5nbGVfMTI4NFwiXG4gICAgICAgIHg9XCIwXCJcbiAgICAgICAgeT1cIjBcIlxuICAgICAgICB3aWR0aD1cIjEyOFwiXG4gICAgICAgIGhlaWdodD1cIjEyOFwiXG4gICAgICAgIGZpbHRlclVuaXRzPVwidXNlclNwYWNlT25Vc2VcIlxuICAgICAgPlxuICAgICAgICA8ZmVPZmZzZXQgZHk9XCIzXCIgaW5wdXQ9XCJTb3VyY2VBbHBoYVwiIC8+XG4gICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249XCIzXCIgcmVzdWx0PVwiYmx1clwiIC8+XG4gICAgICAgIDxmZUZsb29kIGZsb29kT3BhY2l0eT1cIjAuMTYxXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIG9wZXJhdG9yPVwiaW5cIiBpbjI9XCJibHVyXCIgLz5cbiAgICAgICAgPGZlQ29tcG9zaXRlIGluPVwiU291cmNlR3JhcGhpY1wiIC8+XG4gICAgICA8L2ZpbHRlcj5cbiAgICA8L2RlZnM+XG4gICAgPGdcbiAgICAgIGlkPVwiQ29tcG9uZW50XzE2MV80XCJcbiAgICAgIGRhdGEtbmFtZT1cIkNvbXBvbmVudCAxNjEg4oCTIDRcIlxuICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDkgNilcIlxuICAgID5cbiAgICAgIDxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLCAwLCAwLCAxLCAtOSwgLTYpXCIgZmlsdGVyPVwidXJsKCNSZWN0YW5nbGVfMTI4NClcIj5cbiAgICAgICAgPHJlY3RcbiAgICAgICAgICBpZD1cIlJlY3RhbmdsZV8xMjg0LTJcIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIlJlY3RhbmdsZSAxMjg0XCJcbiAgICAgICAgICB3aWR0aD1cIjExMFwiXG4gICAgICAgICAgaGVpZ2h0PVwiMTEwXCJcbiAgICAgICAgICByeD1cIjI2XCJcbiAgICAgICAgICB0cmFuc2Zvcm09XCJ0cmFuc2xhdGUoOSA2KVwiXG4gICAgICAgICAgZmlsbD1cIiNmZmZcIlxuICAgICAgICAvPlxuICAgICAgPC9nPlxuICAgICAgPHRleHRcbiAgICAgICAgaWQ9XCJBX3Bob25lXCJcbiAgICAgICAgZGF0YS1uYW1lPVwiQSBwaG9uZVwiXG4gICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSg1NC45MjkgODkuMTAzKVwiXG4gICAgICAgIGZpbGw9XCIjYWJhYmFiXCJcbiAgICAgICAgZm9udFNpemU9XCIxM1wiXG4gICAgICAgIGZvbnRGYW1pbHk9XCJNb250c2VycmF0LUJvbGQsIE1vbnRzZXJyYXRcIlxuICAgICAgICBmb250V2VpZ2h0PVwiNzAwXCJcbiAgICAgID5cbiAgICAgICAgPHRzcGFuIHg9XCItMjguNzIzXCIgeT1cIjBcIj5cbiAgICAgICAgICBBIHBob25lXG4gICAgICAgIDwvdHNwYW4+XG4gICAgICA8L3RleHQ+XG4gICAgICA8Z1xuICAgICAgICBpZD1cIkdyb3VwXzIzNzZcIlxuICAgICAgICBkYXRhLW5hbWU9XCJHcm91cCAyMzc2XCJcbiAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKDEwOTY0IDk1MDcuMjU1KVwiXG4gICAgICA+XG4gICAgICAgIDxnXG4gICAgICAgICAgaWQ9XCJub3VuX1Bob25lXzEzNzU2MjdfMV9cIlxuICAgICAgICAgIGRhdGEtbmFtZT1cIm5vdW5fUGhvbmVfMTM3NTYyNyAoMSlcIlxuICAgICAgICAgIHRyYW5zZm9ybT1cInRyYW5zbGF0ZSgtMTA5MjMgLTk0OTIuMjU1KVwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgaWQ9XCJQYXRoXzE5MDlcIlxuICAgICAgICAgICAgZGF0YS1uYW1lPVwiUGF0aCAxOTA5XCJcbiAgICAgICAgICAgIGQ9XCJNMzAuNjkxLDk1OC4zNjNBMy42MSwzLjYxLDAsMCwwLDI3LDk2MS45djQ0Ljg2MWEzLjYxLDMuNjEsMCwwLDAsMy42OTEsMy41NDFoMjAuOTJhMy42MSwzLjYxLDAsMCwwLDMuNjkxLTMuNTQxVjk2MS45YTMuNjEsMy42MSwwLDAsMC0zLjY5MS0zLjU0MkgzMC42OTFabTYuNzY4LDIuMzU0aDcuMzc3YS41OS41OSwwLDAsMSwwLDEuMThIMzcuNDU5YS41OS41OSwwLDAsMSwwLTEuMThabS04LDMuNTQzSDUyLjg0djM3Ljc3OUgyOS40NTVabTExLjY5LDM5LjU1MmEyLjM2NCwyLjM2NCwwLDEsMS0yLjQ2MSwyLjM1NCwyLjQxMiwyLjQxMiwwLDAsMSwyLjQ2Ny0yLjM1MVpcIlxuICAgICAgICAgICAgdHJhbnNmb3JtPVwidHJhbnNsYXRlKC0yNyAtOTU4LjM2KVwiXG4gICAgICAgICAgICBmaWxsPVwiIzg2ODY4NlwiXG4gICAgICAgICAgICBzdHJva2U9XCIjZmZmXCJcbiAgICAgICAgICAgIHN0cm9rZVdpZHRoPVwiMC4yXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2c+XG4gICAgICA8L2c+XG4gICAgPC9nPlxuICA8L0ZyYWdtZW50PlxuKTtcbiJdfQ==