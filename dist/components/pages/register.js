"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _logoSvg = _interopRequireDefault(require("../svg/logo-svg"));


var _WaveSvg = _interopRequireDefault(require("../svg/WaveSvg"));
var _OwnerOverview = _interopRequireDefault(require("./register/OwnerOverview"));
var _delay = _interopRequireDefault(require("../../util/delay"));
var _RoleSelect = _interopRequireDefault(require("./register/RoleSelect"));
var _HelperOverview = _interopRequireDefault(require("./register/HelperOverview"));
var _OwnerEmail = _interopRequireDefault(require("./register/OwnerEmail"));
var _OwnerQuizIntro = _interopRequireDefault(require("./register/quiz/OwnerQuizIntro"));
var _OwnerPasswordQ = _interopRequireDefault(require("./register/quiz/OwnerPasswordQ"));
var _OwnerCameraQ = _interopRequireDefault(require("./register/quiz/OwnerCameraQ"));
var _OwnerLostPhoneQ = _interopRequireDefault(require("./register/quiz/OwnerLostPhoneQ"));
var _OwnerPalmQ = _interopRequireDefault(require("./register/quiz/OwnerPalmQ"));
var _OwnerSecurityQ = _interopRequireDefault(require("./register/quiz/OwnerSecurityQ"));
var _OwnerLoginRecommend = _interopRequireDefault(require("./register/OwnerLoginRecommend"));
var _LoginMethodSetup = _interopRequireDefault(require("./register/login-method-setup/LoginMethodSetup")); // import WebCameraShapshot from '../web-camera-shapshot';
// import CognitiveFaceService from '../../services/CognitiveFaceService';
// https://stackoverflow.com/a/30355080/6907541
if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/74aba3e781c60f7e4adb14bf18f9ab4b.scss";
}

class Register extends _react.Component {
  constructor() {var _this;
    super();_this = this;(0, _defineProperty2.default)(this, "handleInputChange",






































    e => {
      const { value } = e.target;
      const key = e.target.name;
      this.setState({ [key]: value });
    });(0, _defineProperty2.default)(this, "handleSnapshot", /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(

      function* (blob) {
        const { username } = { ..._this.state };
        if (blob) {
          try {
            const imgFile = new File([blob], 'imgFile.png', {
              type: blob.type,
              lastModified: Date.now() });

            const input = '/register/face';
            const formdata = new FormData();
            formdata.append('img', imgFile, 'imgFile');
            formdata.append('username', username);
            const init = {
              method: 'POST',
              body: formdata };

            const response = yield fetch(input, init);
            const responseJSON = yield response.json();
            _this.setState({
              faceTemplate: responseJSON.registerFaceResponse.personId,
              faceRegister: false });

          } catch (err) {
            console.error(err.message);
          }
        }
      });return function (_x) {return _ref.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "handleGoBack", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(





      function* (selectedRole, step, data) {
        const { totalSteps, questions } = { ..._this.state };
        if (data && Object.keys(data)) {
          const key = Object.keys(data)[0];
          _this.setState({ [key]: data[key] });
        }
        if (step === 0) {
          _this.goBackToWelcome();
        }
        _this.setState({ isAnimatingBackward: true });
        // waiting for react to put on dom, setState callback didn't seem
        // to do the trick so put in a short delay
        yield (0, _delay.default)(100);
        const elObj = _this.getElObj();
        if (step === 1) {
          elObj.body.style.backgroundImage = `linear-gradient(#2362c7 50%, #4ba9d9 50%)`;
          elObj.progressContainer.style.opacity = 0;
        }
        let skipDistance = 360;
        elObj[selectedRole][step].style.transform = `translateX(${skipDistance}px)`;
        elObj[selectedRole][step].style.opacity = 0;
        if (step === 8 && _this.skipPalm(questions)) {
          // skip palm question since no camera
          step--;
        }
        elObj.wave.style.transform = `translateX(-${(step - 1) * 360}px)`;
        elObj.progress.style.width = (step - 1) * 100 / totalSteps + '%';
        yield (0, _delay.default)(1500);
        _this.setState({
          selectedRole: step - 1 === 0 ? undefined : selectedRole,
          step: step - 1,
          isAnimatingBackward: false });

      });return function (_x2, _x3, _x4) {return _ref2.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "handleGoForward", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(








      function* (selectedRole, step, data) {
        const { totalSteps } = { ..._this.state };
        let { emailItem, questions, loginMethod } = { ..._this.state };
        if (data && data.emailItem) {
          ({ emailItem } = data);
        }
        if (data && data.questions) {
          ({ questions } = data);
        }
        if (data && data.loginMethod) {
          ({ loginMethod } = data);
        }
        yield (0, _delay.default)(100);
        const elObj = _this.getElObj();
        if (step === 1) {
          elObj.body.style.backgroundImage =
          selectedRole === 'owner' ?
          'linear-gradient(#2362c7 50%, white 50%)' :
          'linear-gradient(#4ba9d9 50%, white 50%)';
          elObj.progressContainer.style.opacity = 1;
        }
        elObj[selectedRole][step - 1].style.transform = 'translateX(-360px)';
        elObj[selectedRole][step - 1].style.opacity = '0';
        if (step === 7 && _this.skipPalm(questions)) {
          // skip palm question since no camera
          step++;
        }
        elObj.wave.style.transform = `translateX(-${step * 360}px)`;
        elObj.progress.style.width = step * 100 / totalSteps + '%';
        _this.setState({
          step,
          selectedRole,
          isAnimatingForward: true,
          emailItem,
          questions,
          loginMethod });

        yield (0, _delay.default)(1500);
        _this.setState({ isAnimatingForward: false });
      });return function (_x5, _x6, _x7) {return _ref3.apply(this, arguments);};}());this.state = { selectedRole: undefined, step: 0, // selectedRole: 'owner',
      // step: 10,
      isAnimatingForward: false, isAnimatingBackward: false, faceRegister: false, faceTemplate: undefined, totalSteps: 10, emailItem: undefined, questions: { forgetsPassword: undefined, devicesWithCamera: undefined, lostPhone: undefined, scanningPalm: undefined, answeringSecurityQuestions: undefined }, passwordItem: undefined, textItem: undefined, palmItem: undefined, securityItems: undefined };}componentDidMount() {return (0, _asyncToGenerator2.default)(function* () {if (process.env.BROWSER) {yield (0, _delay.default)(1000);const splash = document.getElementById('splash');splash.style.animation = 'fadeout 1s';splash.style.opacity = 0;document.getElementById('main').style.animation = 'fadein 1s';document.getElementById('main').style.opacity = 1;yield (0, _delay.default)(1000);splash.parentNode.removeChild(splash);}})();}goBackToWelcome() {window.location.href = '../' + location.search;}skipPalm(questions) {return questions.devicesWithCamera && questions.devicesWithCamera.indexOf('cameraAccessNone') > -1;}getElObj() {
    return {
      body: document.body,
      wave: document.getElementsByClassName('wave-container')[0],
      progress: document.getElementById('progress'),
      progressContainer: document.getElementsByClassName(
      'progress-container')[
      0],
      owner: [
      document.getElementById('section0'),
      document.getElementById('section-1-owner'),
      document.getElementById('section-2-owner'),
      document.getElementById('section-3-owner'),
      document.getElementById('section-4-owner'),
      document.getElementById('section-5-owner'),
      document.getElementById('section-6-owner'),
      document.getElementById('section-7-owner'),
      document.getElementById('section-8-owner'),
      document.getElementById('section-9-owner'),
      document.getElementById('section-10-owner'),
      document.getElementById('section-11-owner'),
      document.getElementById('section-12-owner'),
      document.getElementById('section-13-owner')],

      helper: [
      document.getElementById('section0'),
      document.getElementById('section-1-helper')] };


  }

  renderOnboarding() {
    const {
      step,
      selectedRole,
      isAnimatingForward,
      isAnimatingBackward,
      emailItem,
      questions,
      loginMethod,
      passwordItem,
      textItem,
      palmItem,
      securityItems } =
    {
      ...this.state };

    const skipPalm = this.skipPalm(questions);
    switch (selectedRole) {
      case 'owner':
        switch (step) {
          case 1:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_RoleSelect.default, null), /*#__PURE__*/
                _react.default.createElement(_OwnerOverview.default, { position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_RoleSelect.default, { position: "left" }), /*#__PURE__*/
                _react.default.createElement(_OwnerOverview.default, null)));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerOverview.default, {
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 2:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerOverview.default, null), /*#__PURE__*/
                _react.default.createElement(_OwnerEmail.default, { emailItem: emailItem, position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerOverview.default, { position: "left" }), /*#__PURE__*/
                _react.default.createElement(_OwnerEmail.default, { emailItem: emailItem })));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerEmail.default, {
                  emailItem: emailItem,
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 3:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerEmail.default, { emailItem: emailItem }), /*#__PURE__*/
                _react.default.createElement(_OwnerQuizIntro.default, { position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerEmail.default, {
                  emailItem: emailItem,
                  position: "left" }), /*#__PURE__*/

                _react.default.createElement(_OwnerQuizIntro.default, null)));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerQuizIntro.default, {
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 4:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerQuizIntro.default, null), /*#__PURE__*/
                _react.default.createElement(_OwnerPasswordQ.default, { questions: questions, position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerQuizIntro.default, { position: "left" }), /*#__PURE__*/
                _react.default.createElement(_OwnerPasswordQ.default, { questions: questions })));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerPasswordQ.default, {
                  questions: questions,
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 5:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerPasswordQ.default, { questions: questions }), /*#__PURE__*/
                _react.default.createElement(_OwnerCameraQ.default, { questions: questions, position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerPasswordQ.default, { questions: questions, position: "left" }), /*#__PURE__*/
                _react.default.createElement(_OwnerCameraQ.default, { questions: questions })));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerCameraQ.default, {
                  questions: questions,
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 6:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerCameraQ.default, { questions: questions }), /*#__PURE__*/
                _react.default.createElement(_OwnerLostPhoneQ.default, { questions: questions, position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerCameraQ.default, { questions: questions, position: "left" }), /*#__PURE__*/
                _react.default.createElement(_OwnerLostPhoneQ.default, { questions: questions })));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerLostPhoneQ.default, {
                  questions: questions,
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 7:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerLostPhoneQ.default, { questions: questions }), /*#__PURE__*/
                _react.default.createElement(_OwnerPalmQ.default, { questions: questions, position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerLostPhoneQ.default, { questions: questions, position: "left" }), /*#__PURE__*/
                _react.default.createElement(_OwnerPalmQ.default, { questions: questions })));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerPalmQ.default, {
                  questions: questions,
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 8:
            if (isAnimatingForward) {
              if (skipPalm) {
                return /*#__PURE__*/(
                  _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                  _react.default.createElement(_OwnerLostPhoneQ.default, { questions: questions }), /*#__PURE__*/
                  _react.default.createElement(_OwnerSecurityQ.default, { questions: questions, position: "right" })));


              } else {
                return /*#__PURE__*/(
                  _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                  _react.default.createElement(_OwnerPalmQ.default, { questions: questions }), /*#__PURE__*/
                  _react.default.createElement(_OwnerSecurityQ.default, { questions: questions, position: "right" })));


              }
            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null,
                this.skipPalm(questions) && /*#__PURE__*/
                _react.default.createElement(_OwnerLostPhoneQ.default, { questions: questions, position: "left" }),

                !this.skipPalm(questions) && /*#__PURE__*/
                _react.default.createElement(_OwnerPalmQ.default, { questions: questions, position: "left" }), /*#__PURE__*/

                _react.default.createElement(_OwnerSecurityQ.default, { questions: questions })));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerSecurityQ.default, {
                  questions: questions,
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 9:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerSecurityQ.default, { questions: questions }), /*#__PURE__*/
                _react.default.createElement(_OwnerLoginRecommend.default, {
                  position: "right",
                  emailItem: emailItem,
                  questions: questions,
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems })));



            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerSecurityQ.default, { questions: questions, position: "left" }), /*#__PURE__*/
                _react.default.createElement(_OwnerLoginRecommend.default, {
                  emailItem: emailItem,
                  questions: questions,
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems })));



            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_OwnerLoginRecommend.default, {
                  emailItem: emailItem,
                  questions: questions,
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems,
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          case 10:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerLoginRecommend.default, {
                  emailItem: emailItem,
                  questions: questions,
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems }), /*#__PURE__*/

                _react.default.createElement(_LoginMethodSetup.default, {
                  position: "right",
                  loginMethod: loginMethod,
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems })));



            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_OwnerLoginRecommend.default, {
                  emailItem: emailItem,
                  questions: questions,
                  position: "left",
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems }), /*#__PURE__*/

                _react.default.createElement(_LoginMethodSetup.default, {
                  loginMethod: loginMethod,
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems })));



            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_LoginMethodSetup.default, {
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward,
                  loginMethod: loginMethod,
                  passwordItem: passwordItem,
                  textItem: textItem,
                  palmItem: palmItem,
                  securityItems: securityItems }));


            }
          default:
            return /*#__PURE__*/_react.default.createElement(_react.Fragment, null);}

      case 'helper':
        switch (step) {
          case 1:
            if (isAnimatingForward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_RoleSelect.default, null), /*#__PURE__*/
                _react.default.createElement(_HelperOverview.default, { position: "right" })));


            } else if (isAnimatingBackward) {
              return /*#__PURE__*/(
                _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
                _react.default.createElement(_RoleSelect.default, { position: "left" }), /*#__PURE__*/
                _react.default.createElement(_HelperOverview.default, null)));


            } else {
              return /*#__PURE__*/(
                _react.default.createElement(_HelperOverview.default, {
                  handleGoBack: this.handleGoBack,
                  handleGoForward: this.handleGoForward }));


            }
          default:
            return /*#__PURE__*/_react.default.createElement(_react.Fragment, null);}

      default:
        return /*#__PURE__*/(
          _react.default.createElement(_RoleSelect.default, {
            handleGoBack: this.handleGoBack,
            handleGoForward: this.handleGoForward }));}



  }

  render() {
    if (process.env.BROWSER) {
      const { step } = { ...this.state };
      return /*#__PURE__*/(
        _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
        _react.default.createElement("div", { id: "splash" }, /*#__PURE__*/
        _react.default.createElement(_logoSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("div", { className: "progress-container" }, /*#__PURE__*/
        _react.default.createElement("div", { id: "progress", className: "progress-bar" })), /*#__PURE__*/

        _react.default.createElement("main", { id: "main", style: { position: 'absolute', top: 0, opacity: 0 } }, /*#__PURE__*/
        _react.default.createElement("section", { className: "wave-container" }, /*#__PURE__*/
        _react.default.createElement(_WaveSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("section", { className: "container" }, this.renderOnboarding()))));



    } else {
      return /*#__PURE__*/_react.default.createElement(_react.Fragment, null);
    }
  }}var _default =


Register;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIlJlZ2lzdGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwic2V0U3RhdGUiLCJibG9iIiwidXNlcm5hbWUiLCJzdGF0ZSIsImltZ0ZpbGUiLCJGaWxlIiwidHlwZSIsImxhc3RNb2RpZmllZCIsIkRhdGUiLCJub3ciLCJpbnB1dCIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJpbml0IiwibWV0aG9kIiwiYm9keSIsInJlc3BvbnNlIiwiZmV0Y2giLCJyZXNwb25zZUpTT04iLCJqc29uIiwiZmFjZVRlbXBsYXRlIiwicmVnaXN0ZXJGYWNlUmVzcG9uc2UiLCJwZXJzb25JZCIsImZhY2VSZWdpc3RlciIsImVyciIsImNvbnNvbGUiLCJlcnJvciIsIm1lc3NhZ2UiLCJzZWxlY3RlZFJvbGUiLCJzdGVwIiwiZGF0YSIsInRvdGFsU3RlcHMiLCJxdWVzdGlvbnMiLCJPYmplY3QiLCJrZXlzIiwiZ29CYWNrVG9XZWxjb21lIiwiaXNBbmltYXRpbmdCYWNrd2FyZCIsImVsT2JqIiwiZ2V0RWxPYmoiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsInByb2dyZXNzQ29udGFpbmVyIiwib3BhY2l0eSIsInNraXBEaXN0YW5jZSIsInRyYW5zZm9ybSIsInNraXBQYWxtIiwid2F2ZSIsInByb2dyZXNzIiwid2lkdGgiLCJ1bmRlZmluZWQiLCJlbWFpbEl0ZW0iLCJsb2dpbk1ldGhvZCIsImlzQW5pbWF0aW5nRm9yd2FyZCIsImZvcmdldHNQYXNzd29yZCIsImRldmljZXNXaXRoQ2FtZXJhIiwibG9zdFBob25lIiwic2Nhbm5pbmdQYWxtIiwiYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnMiLCJwYXNzd29yZEl0ZW0iLCJ0ZXh0SXRlbSIsInBhbG1JdGVtIiwic2VjdXJpdHlJdGVtcyIsImNvbXBvbmVudERpZE1vdW50Iiwic3BsYXNoIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFuaW1hdGlvbiIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlYXJjaCIsImluZGV4T2YiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3duZXIiLCJoZWxwZXIiLCJyZW5kZXJPbmJvYXJkaW5nIiwiaGFuZGxlR29CYWNrIiwiaGFuZGxlR29Gb3J3YXJkIiwicmVuZGVyIiwicG9zaXRpb24iLCJ0b3AiXSwibWFwcGluZ3MiOiJvZEFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHLENBZkE7QUFDQTtBQWdCQTtBQUNBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0Q7O0FBRUQsTUFBTUMsUUFBTixTQUF1QkMsZ0JBQXZCLENBQWlDO0FBQy9CQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixXQURZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3Q09DLElBQUFBLENBQUQsSUFBTztBQUN6QixZQUFNLEVBQUVDLEtBQUYsS0FBWUQsQ0FBQyxDQUFDRSxNQUFwQjtBQUNBLFlBQU1DLEdBQUcsR0FBR0gsQ0FBQyxDQUFDRSxNQUFGLENBQVNFLElBQXJCO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEVBQUUsQ0FBQ0YsR0FBRCxHQUFPRixLQUFULEVBQWQ7QUFDRCxLQTVDYTs7QUE4Q0csaUJBQU9LLElBQVAsRUFBZ0I7QUFDL0IsY0FBTSxFQUFFQyxRQUFGLEtBQWUsRUFBRSxHQUFHLEtBQUksQ0FBQ0MsS0FBVixFQUFyQjtBQUNBLFlBQUlGLElBQUosRUFBVTtBQUNSLGNBQUk7QUFDRixrQkFBTUcsT0FBTyxHQUFHLElBQUlDLElBQUosQ0FB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bEJELE1Ba0JPO0FBQ0wsMEJBQU8sNkJBQUMsZUFBRCxPQUFQO0FBQ0Q7QUFDRixHQXZrQjhCLEM7OztBQTBrQmxCdEYsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ29TdmcgZnJvbSAnLi4vc3ZnL2xvZ28tc3ZnJztcbi8vIGltcG9ydCBXZWJDYW1lcmFTaGFwc2hvdCBmcm9tICcuLi93ZWItY2FtZXJhLXNoYXBzaG90Jztcbi8vIGltcG9ydCBDb2duaXRpdmVGYWNlU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db2duaXRpdmVGYWNlU2VydmljZSc7XG5pbXBvcnQgV2F2ZVN2ZyBmcm9tICcuLi9zdmcvV2F2ZVN2Zyc7XG5pbXBvcnQgT3duZXJPdmVydmlldyBmcm9tICcuL3JlZ2lzdGVyL093bmVyT3ZlcnZpZXcnO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4uLy4uL3V0aWwvZGVsYXknO1xuaW1wb3J0IFJvbGVTZWxlY3QgZnJvbSAnLi9yZWdpc3Rlci9Sb2xlU2VsZWN0JztcbmltcG9ydCBIZWxwZXJPdmVydmlldyBmcm9tICcuL3JlZ2lzdGVyL0hlbHBlck92ZXJ2aWV3JztcbmltcG9ydCBPd25lckVtYWlsIGZyb20gJy4vcmVnaXN0ZXIvT3duZXJFbWFpbCc7XG5pbXBvcnQgT3duZXJRdWl6SW50cm8gZnJvbSAnLi9yZWdpc3Rlci9xdWl6L093bmVyUXVpekludHJvJztcbmltcG9ydCBPd25lclBhc3N3b3JkUSBmcm9tICcuL3JlZ2lzdGVyL3F1aXovT3duZXJQYXNzd29yZFEnO1xuaW1wb3J0IE93bmVyQ2FtZXJhUSBmcm9tICcuL3JlZ2lzdGVyL3F1aXovT3duZXJDYW1lcmFRJztcbmltcG9ydCBPd25lckxvc3RQaG9uZVEgZnJvbSAnLi9yZWdpc3Rlci9xdWl6L093bmVyTG9zdFBob25lUSc7XG5pbXBvcnQgT3duZXJQYWxtUSBmcm9tICcuL3JlZ2lzdGVyL3F1aXovT3duZXJQYWxtUSc7XG5pbXBvcnQgT3duZXJTZWN1cml0eVEgZnJvbSAnLi9yZWdpc3Rlci9xdWl6L093bmVyU2VjdXJpdHlRJztcbmltcG9ydCBPd25lckxvZ2luUmVjb21tZW5kIGZyb20gJy4vcmVnaXN0ZXIvT3duZXJMb2dpblJlY29tbWVuZCc7XG5pbXBvcnQgTG9naW5NZXRob2RTZXR1cCBmcm9tICcuL3JlZ2lzdGVyL2xvZ2luLW1ldGhvZC1zZXR1cC9Mb2dpbk1ldGhvZFNldHVwJztcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMwMzU1MDgwLzY5MDc1NDFcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4uL2dsb2JhbC5zY3NzJyk7XG4gIHJlcXVpcmUoJy4vcmVnaXN0ZXIuc2NzcycpO1xufVxuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkUm9sZTogdW5kZWZpbmVkLFxuICAgICAgc3RlcDogMCxcbiAgICAgIC8vIHNlbGVjdGVkUm9sZTogJ293bmVyJyxcbiAgICAgIC8vIHN0ZXA6IDEwLFxuICAgICAgaXNBbmltYXRpbmdGb3J3YXJkOiBmYWxzZSxcbiAgICAgIGlzQW5pbWF0aW5nQmFja3dhcmQ6IGZhbHNlLFxuICAgICAgZmFjZVJlZ2lzdGVyOiBmYWxzZSxcbiAgICAgIGZhY2VUZW1wbGF0ZTogdW5kZWZpbmVkLFxuICAgICAgdG90YWxTdGVwczogMTAsXG4gICAgICBlbWFpbEl0ZW06IHVuZGVmaW5lZCxcbiAgICAgIHF1ZXN0aW9uczoge1xuICAgICAgICBmb3JnZXRzUGFzc3dvcmQ6IHVuZGVmaW5lZCxcbiAgICAgICAgZGV2aWNlc1dpdGhDYW1lcmE6IHVuZGVmaW5lZCxcbiAgICAgICAgbG9zdFBob25lOiB1bmRlZmluZWQsXG4gICAgICAgIHNjYW5uaW5nUGFsbTogdW5kZWZpbmVkLFxuICAgICAgICBhbnN3ZXJpbmdTZWN1cml0eVF1ZXN0aW9uczogdW5kZWZpbmVkLFxuICAgICAgfSxcbiAgICAgIHBhc3N3b3JkSXRlbTogdW5kZWZpbmVkLFxuICAgICAgdGV4dEl0ZW06IHVuZGVmaW5lZCxcbiAgICAgIHBhbG1JdGVtOiB1bmRlZmluZWQsXG4gICAgICBzZWN1cml0eUl0ZW1zOiB1bmRlZmluZWQsXG4gICAgfTtcbiAgfVxuXG4gIGFzeW5jIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICBhd2FpdCBkZWxheSgxMDAwKTtcbiAgICAgIGNvbnN0IHNwbGFzaCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzcGxhc2gnKTtcbiAgICAgIHNwbGFzaC5zdHlsZS5hbmltYXRpb24gPSAnZmFkZW91dCAxcyc7XG4gICAgICBzcGxhc2guc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlaW4gMXMnO1xuICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4nKS5zdHlsZS5vcGFjaXR5ID0gMTtcbiAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgICAgc3BsYXNoLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3BsYXNoKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgeyB2YWx1ZSB9ID0gZS50YXJnZXQ7XG4gICAgY29uc3Qga2V5ID0gZS50YXJnZXQubmFtZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgW2tleV06IHZhbHVlIH0pO1xuICB9O1xuXG4gIGhhbmRsZVNuYXBzaG90ID0gYXN5bmMgKGJsb2IpID0+IHtcbiAgICBjb25zdCB7IHVzZXJuYW1lIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBpZiAoYmxvYikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW1nRmlsZSA9IG5ldyBGaWxlKFtibG9iXSwgJ2ltZ0ZpbGUucG5nJywge1xuICAgICAgICAgIHR5cGU6IGJsb2IudHlwZSxcbiAgICAgICAgICBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCksXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbnB1dCA9ICcvcmVnaXN0ZXIvZmFjZSc7XG4gICAgICAgIGNvbnN0IGZvcm1kYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIGZvcm1kYXRhLmFwcGVuZCgnaW1nJywgaW1nRmlsZSwgJ2ltZ0ZpbGUnKTtcbiAgICAgICAgZm9ybWRhdGEuYXBwZW5kKCd1c2VybmFtZScsIHVzZXJuYW1lKTtcbiAgICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiBmb3JtZGF0YSxcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChpbnB1dCwgaW5pdCk7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlSlNPTiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZmFjZVRlbXBsYXRlOiByZXNwb25zZUpTT04ucmVnaXN0ZXJGYWNlUmVzcG9uc2UucGVyc29uSWQsXG4gICAgICAgICAgZmFjZVJlZ2lzdGVyOiBmYWxzZSxcbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIubWVzc2FnZSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGdvQmFja1RvV2VsY29tZSgpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcuLi8nICsgbG9jYXRpb24uc2VhcmNoO1xuICB9XG5cbiAgaGFuZGxlR29CYWNrID0gYXN5bmMgKHNlbGVjdGVkUm9sZSwgc3RlcCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgdG90YWxTdGVwcywgcXVlc3Rpb25zIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBpZiAoZGF0YSAmJiBPYmplY3Qua2V5cyhkYXRhKSkge1xuICAgICAgY29uc3Qga2V5ID0gT2JqZWN0LmtleXMoZGF0YSlbMF07XG4gICAgICB0aGlzLnNldFN0YXRlKHsgW2tleV06IGRhdGFba2V5XSB9KTtcbiAgICB9XG4gICAgaWYgKHN0ZXAgPT09IDApIHtcbiAgICAgIHRoaXMuZ29CYWNrVG9XZWxjb21lKCk7XG4gICAgfVxuICAgIHRoaXMuc2V0U3RhdGUoeyBpc0FuaW1hdGluZ0JhY2t3YXJkOiB0cnVlIH0pO1xuICAgIC8vIHdhaXRpbmcgZm9yIHJlYWN0IHRvIHB1dCBvbiBkb20sIHNldFN0YXRlIGNhbGxiYWNrIGRpZG4ndCBzZWVtXG4gICAgLy8gdG8gZG8gdGhlIHRyaWNrIHNvIHB1dCBpbiBhIHNob3J0IGRlbGF5XG4gICAgYXdhaXQgZGVsYXkoMTAwKTtcbiAgICBjb25zdCBlbE9iaiA9IHRoaXMuZ2V0RWxPYmooKTtcbiAgICBpZiAoc3RlcCA9PT0gMSkge1xuICAgICAgZWxPYmouYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgbGluZWFyLWdyYWRpZW50KCMyMzYyYzcgNTAlLCAjNGJhOWQ5IDUwJSlgO1xuICAgICAgZWxPYmoucHJvZ3Jlc3NDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgfVxuICAgIGxldCBza2lwRGlzdGFuY2UgPSAzNjA7XG4gICAgZWxPYmpbc2VsZWN0ZWRSb2xlXVtzdGVwXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke3NraXBEaXN0YW5jZX1weClgO1xuICAgIGVsT2JqW3NlbGVjdGVkUm9sZV1bc3RlcF0uc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgaWYgKHN0ZXAgPT09IDggJiYgdGhpcy5za2lwUGFsbShxdWVzdGlvbnMpKSB7XG4gICAgICAvLyBza2lwIHBhbG0gcXVlc3Rpb24gc2luY2Ugbm8gY2FtZXJhXG4gICAgICBzdGVwLS07XG4gICAgfVxuICAgIGVsT2JqLndhdmUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7KHN0ZXAgLSAxKSAqIDM2MH1weClgO1xuICAgIGVsT2JqLnByb2dyZXNzLnN0eWxlLndpZHRoID0gKChzdGVwIC0gMSkgKiAxMDApIC8gdG90YWxTdGVwcyArICclJztcbiAgICBhd2FpdCBkZWxheSgxNTAwKTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNlbGVjdGVkUm9sZTogc3RlcCAtIDEgPT09IDAgPyB1bmRlZmluZWQgOiBzZWxlY3RlZFJvbGUsXG4gICAgICBzdGVwOiBzdGVwIC0gMSxcbiAgICAgIGlzQW5pbWF0aW5nQmFja3dhcmQ6IGZhbHNlLFxuICAgIH0pO1xuICB9O1xuXG4gIHNraXBQYWxtKHF1ZXN0aW9ucykge1xuICAgIHJldHVybiAoXG4gICAgICBxdWVzdGlvbnMuZGV2aWNlc1dpdGhDYW1lcmEgJiZcbiAgICAgIHF1ZXN0aW9ucy5kZXZpY2VzV2l0aENhbWVyYS5pbmRleE9mKCdjYW1lcmFBY2Nlc3NOb25lJykgPiAtMVxuICAgICk7XG4gIH1cblxuICBoYW5kbGVHb0ZvcndhcmQgPSBhc3luYyAoc2VsZWN0ZWRSb2xlLCBzdGVwLCBkYXRhKSA9PiB7XG4gICAgY29uc3QgeyB0b3RhbFN0ZXBzIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBsZXQgeyBlbWFpbEl0ZW0sIHF1ZXN0aW9ucywgbG9naW5NZXRob2QgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIGlmIChkYXRhICYmIGRhdGEuZW1haWxJdGVtKSB7XG4gICAgICAoeyBlbWFpbEl0ZW0gfSA9IGRhdGEpO1xuICAgIH1cbiAgICBpZiAoZGF0YSAmJiBkYXRhLnF1ZXN0aW9ucykge1xuICAgICAgKHsgcXVlc3Rpb25zIH0gPSBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5sb2dpbk1ldGhvZCkge1xuICAgICAgKHsgbG9naW5NZXRob2QgfSA9IGRhdGEpO1xuICAgIH1cbiAgICBhd2FpdCBkZWxheSgxMDApO1xuICAgIGNvbnN0IGVsT2JqID0gdGhpcy5nZXRFbE9iaigpO1xuICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICBlbE9iai5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9XG4gICAgICAgIHNlbGVjdGVkUm9sZSA9PT0gJ293bmVyJ1xuICAgICAgICAgID8gJ2xpbmVhci1ncmFkaWVudCgjMjM2MmM3IDUwJSwgd2hpdGUgNTAlKSdcbiAgICAgICAgICA6ICdsaW5lYXItZ3JhZGllbnQoIzRiYTlkOSA1MCUsIHdoaXRlIDUwJSknO1xuICAgICAgZWxPYmoucHJvZ3Jlc3NDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuICAgIGVsT2JqW3NlbGVjdGVkUm9sZV1bc3RlcCAtIDFdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKC0zNjBweCknO1xuICAgIGVsT2JqW3NlbGVjdGVkUm9sZV1bc3RlcCAtIDFdLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgaWYgKHN0ZXAgPT09IDcgJiYgdGhpcy5za2lwUGFsbShxdWVzdGlvbnMpKSB7XG4gICAgICAvLyBza2lwIHBhbG0gcXVlc3Rpb24gc2luY2Ugbm8gY2FtZXJhXG4gICAgICBzdGVwKys7XG4gICAgfVxuICAgIGVsT2JqLndhdmUuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoLSR7c3RlcCAqIDM2MH1weClgO1xuICAgIGVsT2JqLnByb2dyZXNzLnN0eWxlLndpZHRoID0gKHN0ZXAgKiAxMDApIC8gdG90YWxTdGVwcyArICclJztcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHN0ZXAsXG4gICAgICBzZWxlY3RlZFJvbGUsXG4gICAgICBpc0FuaW1hdGluZ0ZvcndhcmQ6IHRydWUsXG4gICAgICBlbWFpbEl0ZW0sXG4gICAgICBxdWVzdGlvbnMsXG4gICAgICBsb2dpbk1ldGhvZCxcbiAgICB9KTtcbiAgICBhd2FpdCBkZWxheSgxNTAwKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBbmltYXRpbmdGb3J3YXJkOiBmYWxzZSB9KTtcbiAgfTtcblxuICBnZXRFbE9iaigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgYm9keTogZG9jdW1lbnQuYm9keSxcbiAgICAgIHdhdmU6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dhdmUtY29udGFpbmVyJylbMF0sXG4gICAgICBwcm9ncmVzczogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2dyZXNzJyksXG4gICAgICBwcm9ncmVzc0NvbnRhaW5lcjogZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcbiAgICAgICAgJ3Byb2dyZXNzLWNvbnRhaW5lcidcbiAgICAgIClbMF0sXG4gICAgICBvd25lcjogW1xuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbjAnKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tMS1vd25lcicpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi0yLW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTMtb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tNC1vd25lcicpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi01LW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTYtb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tNy1vd25lcicpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi04LW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTktb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tMTAtb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tMTEtb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tMTItb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tMTMtb3duZXInKSxcbiAgICAgIF0sXG4gICAgICBoZWxwZXI6IFtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24wJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTEtaGVscGVyJyksXG4gICAgICBdLFxuICAgIH07XG4gIH1cblxuICByZW5kZXJPbmJvYXJkaW5nKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIHN0ZXAsXG4gICAgICBzZWxlY3RlZFJvbGUsXG4gICAgICBpc0FuaW1hdGluZ0ZvcndhcmQsXG4gICAgICBpc0FuaW1hdGluZ0JhY2t3YXJkLFxuICAgICAgZW1haWxJdGVtLFxuICAgICAgcXVlc3Rpb25zLFxuICAgICAgbG9naW5NZXRob2QsXG4gICAgICBwYXNzd29yZEl0ZW0sXG4gICAgICB0ZXh0SXRlbSxcbiAgICAgIHBhbG1JdGVtLFxuICAgICAgc2VjdXJpdHlJdGVtcyxcbiAgICB9ID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICB9O1xuICAgIGNvbnN0IHNraXBQYWxtID0gdGhpcy5za2lwUGFsbShxdWVzdGlvbnMpO1xuICAgIHN3aXRjaCAoc2VsZWN0ZWRSb2xlKSB7XG4gICAgICBjYXNlICdvd25lcic6XG4gICAgICAgIHN3aXRjaCAoc3RlcCkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmIChpc0FuaW1hdGluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8Um9sZVNlbGVjdCAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyT3ZlcnZpZXcgcG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxSb2xlU2VsZWN0IHBvc2l0aW9uPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJPdmVydmlldyAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPd25lck92ZXJ2aWV3XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9e3RoaXMuaGFuZGxlR29CYWNrfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29Gb3J3YXJkPXt0aGlzLmhhbmRsZUdvRm9yd2FyZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIGlmIChpc0FuaW1hdGluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJPdmVydmlldyAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyRW1haWwgZW1haWxJdGVtPXtlbWFpbEl0ZW19IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJPdmVydmlldyBwb3NpdGlvbj1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyRW1haWwgZW1haWxJdGVtPXtlbWFpbEl0ZW19IC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE93bmVyRW1haWxcbiAgICAgICAgICAgICAgICAgIGVtYWlsSXRlbT17ZW1haWxJdGVtfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyRW1haWwgZW1haWxJdGVtPXtlbWFpbEl0ZW19IC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJRdWl6SW50cm8gcG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lckVtYWlsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsSXRlbT17ZW1haWxJdGVtfVxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cImxlZnRcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lclF1aXpJbnRybyAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPd25lclF1aXpJbnRyb1xuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyUXVpekludHJvIC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJQYXNzd29yZFEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJRdWl6SW50cm8gcG9zaXRpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lclBhc3N3b3JkUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3duZXJQYXNzd29yZFFcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyUGFzc3dvcmRRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyQ2FtZXJhUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lclBhc3N3b3JkUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lckNhbWVyYVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE93bmVyQ2FtZXJhUVxuICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zPXtxdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9e3RoaXMuaGFuZGxlR29CYWNrfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29Gb3J3YXJkPXt0aGlzLmhhbmRsZUdvRm9yd2FyZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgNjpcbiAgICAgICAgICAgIGlmIChpc0FuaW1hdGluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJDYW1lcmFRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyTG9zdFBob25lUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lckNhbWVyYVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJMb3N0UGhvbmVRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPd25lckxvc3RQaG9uZVFcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyTG9zdFBob25lUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lclBhbG1RIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSBwb3NpdGlvbj1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FuaW1hdGluZ0JhY2t3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyTG9zdFBob25lUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lclBhbG1RIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPd25lclBhbG1RXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSA4OlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICBpZiAoc2tpcFBhbG0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8T3duZXJMb3N0UGhvbmVRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgICA8T3duZXJTZWN1cml0eVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxPd25lclBhbG1RIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgICA8T3duZXJTZWN1cml0eVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICB7dGhpcy5za2lwUGFsbShxdWVzdGlvbnMpICYmIChcbiAgICAgICAgICAgICAgICAgICAgPE93bmVyTG9zdFBob25lUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICB7IXRoaXMuc2tpcFBhbG0ocXVlc3Rpb25zKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxPd25lclBhbG1RIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSBwb3NpdGlvbj1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDxPd25lclNlY3VyaXR5USBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3duZXJTZWN1cml0eVFcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDk6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyU2VjdXJpdHlRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyTG9naW5SZWNvbW1lbmRcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJyaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsSXRlbT17ZW1haWxJdGVtfVxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJdGVtPXtwYXNzd29yZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHRleHRJdGVtPXt0ZXh0SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcGFsbUl0ZW09e3BhbG1JdGVtfVxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zPXtzZWN1cml0eUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FuaW1hdGluZ0JhY2t3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyU2VjdXJpdHlRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSBwb3NpdGlvbj1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyTG9naW5SZWNvbW1lbmRcbiAgICAgICAgICAgICAgICAgICAgZW1haWxJdGVtPXtlbWFpbEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEl0ZW09e3Bhc3N3b3JkSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dEl0ZW09e3RleHRJdGVtfVxuICAgICAgICAgICAgICAgICAgICBwYWxtSXRlbT17cGFsbUl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5SXRlbXM9e3NlY3VyaXR5SXRlbXN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPd25lckxvZ2luUmVjb21tZW5kXG4gICAgICAgICAgICAgICAgICBlbWFpbEl0ZW09e2VtYWlsSXRlbX1cbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJdGVtPXtwYXNzd29yZEl0ZW19XG4gICAgICAgICAgICAgICAgICB0ZXh0SXRlbT17dGV4dEl0ZW19XG4gICAgICAgICAgICAgICAgICBwYWxtSXRlbT17cGFsbUl0ZW19XG4gICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zPXtzZWN1cml0eUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDEwOlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lckxvZ2luUmVjb21tZW5kXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsSXRlbT17ZW1haWxJdGVtfVxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJdGVtPXtwYXNzd29yZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHRleHRJdGVtPXt0ZXh0SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcGFsbUl0ZW09e3BhbG1JdGVtfVxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zPXtzZWN1cml0eUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxMb2dpbk1ldGhvZFNldHVwXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZD17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSXRlbT17cGFzc3dvcmRJdGVtfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0SXRlbT17dGV4dEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHBhbG1JdGVtPXtwYWxtSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlJdGVtcz17c2VjdXJpdHlJdGVtc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lckxvZ2luUmVjb21tZW5kXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsSXRlbT17ZW1haWxJdGVtfVxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJdGVtPXtwYXNzd29yZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHRleHRJdGVtPXt0ZXh0SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcGFsbUl0ZW09e3BhbG1JdGVtfVxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zPXtzZWN1cml0eUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIDxMb2dpbk1ldGhvZFNldHVwXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luTWV0aG9kPXtsb2dpbk1ldGhvZH1cbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJdGVtPXtwYXNzd29yZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHRleHRJdGVtPXt0ZXh0SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcGFsbUl0ZW09e3BhbG1JdGVtfVxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zPXtzZWN1cml0eUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8TG9naW5NZXRob2RTZXR1cFxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZD17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgICBwYXNzd29yZEl0ZW09e3Bhc3N3b3JkSXRlbX1cbiAgICAgICAgICAgICAgICAgIHRleHRJdGVtPXt0ZXh0SXRlbX1cbiAgICAgICAgICAgICAgICAgIHBhbG1JdGVtPXtwYWxtSXRlbX1cbiAgICAgICAgICAgICAgICAgIHNlY3VyaXR5SXRlbXM9e3NlY3VyaXR5SXRlbXN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcbiAgICAgICAgfVxuICAgICAgY2FzZSAnaGVscGVyJzpcbiAgICAgICAgc3dpdGNoIChzdGVwKSB7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxSb2xlU2VsZWN0IC8+XG4gICAgICAgICAgICAgICAgICA8SGVscGVyT3ZlcnZpZXcgcG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxSb2xlU2VsZWN0IHBvc2l0aW9uPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8SGVscGVyT3ZlcnZpZXcgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8SGVscGVyT3ZlcnZpZXdcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiA8RnJhZ21lbnQgLz47XG4gICAgICAgIH1cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPFJvbGVTZWxlY3RcbiAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICBjb25zdCB7IHN0ZXAgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgaWQ9XCJzcGxhc2hcIj5cbiAgICAgICAgICAgIDxMb2dvU3ZnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzcy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9ncmVzc1wiIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhclwiPjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxtYWluIGlkPVwibWFpblwiIHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCB0b3A6IDAsIG9wYWNpdHk6IDAgfX0+XG4gICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3YXZlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8V2F2ZVN2ZyAvPlxuICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+e3RoaXMucmVuZGVyT25ib2FyZGluZygpfTwvc2VjdGlvbj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gPEZyYWdtZW50IC8+O1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZWdpc3RlcjtcbiJdfQ==