"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let img; // https://stackoverflow.com/a/30355080/6907541

if (process.env.BROWSER) {
  "/public/css/ee1adc02647bc49730dbd18e11bc0692.css";
  img = "/public/img/f53665075594dc59980862e7e2dca27a.jpg".default; // console.log(img1);
}

class Login extends _react.default.Component {
  constructor() {
    super();

    _defineProperty(this, "onFormSubmit", event => {
      event.preventDefault();
      alert("test");
    });

    _defineProperty(this, "handleInputChange", e => {
      const {
        value
      } = e.target;
      const key = e.target.name;
      this.setState({
        [key]: value
      });
    });

    this.state = {
      userName1: "1",
      password1: "1"
    };
  }

  render() {
    return /*#__PURE__*/_react.default.createElement("main", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("h1", {
      className: "heading"
    }, "Login"), /*#__PURE__*/_react.default.createElement("form", {
      onSubmit: this.onFormSubmit,
      method: "POST",
      action: "/authorize"
    }, /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "fname"
    }, "Username1:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "userName1",
      name: "userName1",
      onChange: this.handleInputChange,
      value: this.state.userName1
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "lname"
    }, "Password1:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "password1",
      name: "password1",
      onChange: this.handleInputChange,
      value: this.state.password1
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "fname"
    }, "Username2:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "userName2",
      name: "userName2"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "lname"
    }, "Password2:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "password2",
      name: "password2"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "fname"
    }, "Username3:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "userName3",
      name: "userName3"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "lname"
    }, "Password3:"), /*#__PURE__*/_react.default.createElement("input", {
      type: "text",
      id: "password3",
      name: "password3"
    }), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("br", null), /*#__PURE__*/_react.default.createElement("input", {
      type: "submit",
      value: "Submit"
    })), /*#__PURE__*/_react.default.createElement("img", {
      src: "/public/img/f53665075594dc59980862e7e2dca27a.jpg",
      width: "200",
      height: "200",
      alt: "something"
    }), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("h5", null, "username1: ", this.state.userName1)), /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("h5", null, "password1: ", this.state.password1))))));
  }

}

var _default = Login;
exports.default = _default;