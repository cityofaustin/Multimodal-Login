"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// import global from './global.css'
// import index from './index.css'
// import img from './img.jpg'
class Index extends _react.default.Component {
  constructor() {
    super();

    _defineProperty(this, "onFormSubmit", event => {
      event.preventDefault();
    });

    _defineProperty(this, "onNameChangeHandler", event => {
      this.setState({
        name: event.target.value
      });
    });

    _defineProperty(this, "onEmailChangeHandler", event => {
      this.setState({
        email: event.target.value
      });
    });

    this.state = {
      name: "a",
      email: ""
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, "Smoke -h"), /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.onFormSubmit
    }, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "name-input",
      defaultValue: "Name"
    }, "Name: "), /*#__PURE__*/_react.default.createElement("input", {
      name: "name-input",
      onChange: this.onNameChangeHandler,
      type: "text",
      value: this.state.name
    })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "email-input",
      defaultValue: "Email"
    }, "Email: "), /*#__PURE__*/_react.default.createElement("input", {
      name: "email-input",
      onChange: this.onEmailChangeHandler,
      type: "email",
      placeholder: "email",
      value: this.state.email
    })), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("button", {
      type: "submit"
    }, "Submit"))), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("h5", null, "Name: ", this.state.name)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("h5", null, "Email: ", this.state.email)));
  }

}

var _default = Index;
exports.default = _default;