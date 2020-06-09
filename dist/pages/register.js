"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import global from './global.css'
// import index from './index.css'
// import img from './img.jpg'
class Register extends _react.default.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("div", {
      class: "row"
    }, /*#__PURE__*/_react.default.createElement("div", {
      class: "col-sm-12"
    }, /*#__PURE__*/_react.default.createElement("div", {
      class: "jumbotron"
    }, /*#__PURE__*/_react.default.createElement("h1", null, "Register"), /*#__PURE__*/_react.default.createElement("form", {
      method: "POST",
      action: "/register"
    }, /*#__PURE__*/_react.default.createElement("label", {
      for: "fname"
    }, "Username1:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "userName1",
      name: "userName1"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      for: "lname"
    }, "Password1:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "password1",
      name: "password1"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      for: "fname"
    }, "Username2:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "userName2",
      name: "userName2"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      for: "lname"
    }, "Password2:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "password2",
      name: "password2"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      for: "fname"
    }, "Username2:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "userName3",
      name: "userName3"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      for: "lname"
    }, "Password3:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "password3",
      name: "password3"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "submit",
      value: "Submit"
    }))))));
  }

}

var _default = Register;
exports.default = _default;