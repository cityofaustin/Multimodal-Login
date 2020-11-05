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
  "/public/css/5a4b29863371796728fb2ee4c907519e.scss";
}

class Register extends _react.Component {
  constructor() {var _this;
    super();_this = this;(0, _defineProperty2.default)(this, "loadAppSettings", /*#__PURE__*/(0, _asyncToGenerator2.default)(







































    function* () {
      try {
        const url = "api/app-settings";
        const init = {
          method: "GET",
          headers: { "Content-Type": "application/json" } };

        const response = yield fetch(url, init);
        const appSettings = yield response.json();
        const titleSetting = appSettings.find(
        a => a.settingName === "title");

        if (titleSetting) {
          document.title = titleSetting.settingValue + ' Auth';
        }
      } catch (err) {
        console.log("Error!");
        console.log(err);
      }
    }));(0, _defineProperty2.default)(this, "handleInputChange",

    e => {
      const { value } = e.target;
      const key = e.target.name;
      this.setState({ [key]: value });
    });(0, _defineProperty2.default)(this, "handleSnapshot", /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(

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
      });return function (_x) {return _ref2.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "handleGoBack", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(





      function* (selectedRole, step, data) {
        const { totalSteps, questions } = { ..._this.state };
        if (data && Object.keys(data)) {
          const key = Object.keys(data)[0];
          _this.setState({ [key]: data[key] });
        }
        if (step === 1) {
          _this.goBackToWelcome();
          return;
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

      });return function (_x2, _x3, _x4) {return _ref3.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "handleGoForward", /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2.default)(








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
      });return function (_x5, _x6, _x7) {return _ref4.apply(this, arguments);};}());this.state = { selectedRole: 'owner', step: 1, // selectedRole: 'owner',
      // step: 10,
      isAnimatingForward: false, isAnimatingBackward: false, faceRegister: false, faceTemplate: undefined, totalSteps: 10, emailItem: undefined, questions: { forgetsPassword: undefined, devicesWithCamera: undefined, lostPhone: undefined, scanningPalm: undefined, answeringSecurityQuestions: undefined }, passwordItem: undefined, textItem: undefined, palmItem: undefined, securityItems: undefined };}componentDidMount() {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {if (process.env.BROWSER) {_this2.loadAppSettings();yield (0, _delay.default)(1000);const splash = document.getElementById('splash');splash.style.animation = 'fadeout 1s';splash.style.opacity = 0;document.getElementById('main').style.animation = 'fadein 1s';document.getElementById('main').style.opacity = 1;yield (0, _delay.default)(1000);splash.parentNode.removeChild(splash);}})();}goBackToWelcome() {window.location.href = '../' + location.search;}skipPalm(questions) {return questions.devicesWithCamera && questions.devicesWithCamera.indexOf('cameraAccessNone') > -1;}getElObj() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL3JlZ2lzdGVyLmpzeCJdLCJuYW1lcyI6WyJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsIlJlZ2lzdGVyIiwiQ29tcG9uZW50IiwiY29uc3RydWN0b3IiLCJ1cmwiLCJpbml0IiwibWV0aG9kIiwiaGVhZGVycyIsInJlc3BvbnNlIiwiZmV0Y2giLCJhcHBTZXR0aW5ncyIsImpzb24iLCJ0aXRsZVNldHRpbmciLCJmaW5kIiwiYSIsInNldHRpbmdOYW1lIiwiZG9jdW1lbnQiLCJ0aXRsZSIsInNldHRpbmdWYWx1ZSIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJlIiwidmFsdWUiLCJ0YXJnZXQiLCJrZXkiLCJuYW1lIiwic2V0U3RhdGUiLCJibG9iIiwidXNlcm5hbWUiLCJzdGF0ZSIsImltZ0ZpbGUiLCJGaWxlIiwidHlwZSIsImxhc3RNb2RpZmllZCIsIkRhdGUiLCJub3ciLCJpbnB1dCIsImZvcm1kYXRhIiwiRm9ybURhdGEiLCJhcHBlbmQiLCJib2R5IiwicmVzcG9uc2VKU09OIiwiZmFjZVRlbXBsYXRlIiwicmVnaXN0ZXJGYWNlUmVzcG9uc2UiLCJwZXJzb25JZCIsImZhY2VSZWdpc3RlciIsImVycm9yIiwibWVzc2FnZSIsInNlbGVjdGVkUm9sZSIsInN0ZXAiLCJkYXRhIiwidG90YWxTdGVwcyIsInF1ZXN0aW9ucyIsIk9iamVjdCIsImtleXMiLCJnb0JhY2tUb1dlbGNvbWUiLCJpc0FuaW1hdGluZ0JhY2t3YXJkIiwiZWxPYmoiLCJnZXRFbE9iaiIsInN0eWxlIiwiYmFja2dyb3VuZEltYWdlIiwicHJvZ3Jlc3NDb250YWluZXIiLCJvcGFjaXR5Iiwic2tpcERpc3RhbmNlIiwidHJhbnNmb3JtIiwic2tpcFBhbG0iLCJ3YXZlIiwicHJvZ3Jlc3MiLCJ3aWR0aCIsInVuZGVmaW5lZCIsImVtYWlsSXRlbSIsImxvZ2luTWV0aG9kIiwiaXNBbmltYXRpbmdGb3J3YXJkIiwiZm9yZ2V0c1Bhc3N3b3JkIiwiZGV2aWNlc1dpdGhDYW1lcmEiLCJsb3N0UGhvbmUiLCJzY2FubmluZ1BhbG0iLCJhbnN3ZXJpbmdTZWN1cml0eVF1ZXN0aW9ucyIsInBhc3N3b3JkSXRlbSIsInRleHRJdGVtIiwicGFsbUl0ZW0iLCJzZWN1cml0eUl0ZW1zIiwiY29tcG9uZW50RGlkTW91bnQiLCJsb2FkQXBwU2V0dGluZ3MiLCJzcGxhc2giLCJnZXRFbGVtZW50QnlJZCIsImFuaW1hdGlvbiIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlYXJjaCIsImluZGV4T2YiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib3duZXIiLCJoZWxwZXIiLCJyZW5kZXJPbmJvYXJkaW5nIiwiaGFuZGxlR29CYWNrIiwiaGFuZGxlR29Gb3J3YXJkIiwicmVuZGVyIiwicG9zaXRpb24iLCJ0b3AiXSwibWFwcGluZ3MiOiJvZEFBQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHLENBZkE7QUFDQTtBQWdCQTtBQUNBLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNBO0FBQ0Q7O0FBRUQsTUFBTUMsUUFBTixTQUF1QkMsZ0JBQXZCLENBQWlDO0FBQy9CQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixXQURZOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNJLGlCQUFZO0FBQzVCLFVBQUk7QUFDRixjQUFNQyxHQUFHLEdBQUcsa0JBQVo7QUFDQSxjQUFNQyxJQUFJLEdBQUc7QUFDWEMsVUFBQUEsTUFBTSxFQUFFLEtBREc7QUFFWEMsVUFBQUEsT0FBTyxFQUFFLEVBQUUsZ0JBQWdCLGtCQUFsQixFQUZFLEVBQWI7O0FBSUEsY0FBTUMsUUFBUSxTQUFTQyxLQUFLLENBQUNMLEdBQUQsRUFBTUMsSUFBTixDQUE1QjtBQUNBLGNBQU1L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WSxFQUFFLEtBQUswQyxZQURyQjtBQUVFLGtCQUFBLGVBQWUsRUFBRSxLQUFLQyxlQUZ4QixHQURGOzs7QUFNRDtBQUNIO0FBQ0UsZ0NBQU8sNkJBQUMsZUFBRCxPQUFQLENBekJKOztBQTJCRjtBQUNFO0FBQ0UsdUNBQUMsbUJBQUQ7QUFDRSxZQUFBLFlBQVksRUFBRSxLQUFLRCxZQURyQjtBQUVFLFlBQUEsZUFBZSxFQUFFLEtBQUtDLGVBRnhCLEdBREYsRUF0Vko7Ozs7QUE2VkQ7O0FBRURDLEVBQUFBLE1BQU0sR0FBRztBQUNQLFFBQUl2RyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsT0FBaEIsRUFBeUI7QUFDdkIsWUFBTSxFQUFFa0QsSUFBRixLQUFXLEVBQUUsR0FBRyxLQUFLcEIsS0FBVixFQUFqQjtBQUNBO0FBQ0UscUNBQUMsZUFBRDtBQUNFLDhDQUFLLEVBQUUsRUFBQyxRQUFSO0FBQ0UscUNBQUMsZ0JBQUQsT0FERixDQURGOztBQUlFLDhDQUFLLFNBQVMsRUFBQyxvQkFBZjtBQUNFLDhDQUFLLEVBQUUsRUFBQyxVQUFSLEVBQW1CLFNBQVMsRUFBQyxjQUE3QixHQURGLENBSkY7O0FBT0UsK0NBQU0sRUFBRSxFQUFDLE1BQVQsRUFBZ0IsS0FBSyxFQUFFLEVBQUV3RSxRQUFRLEVBQUUsVUFBWixFQUF3QkMsR0FBRyxFQUFFLENBQTdCLEVBQWdDeEMsT0FBTyxFQUFFLENBQXpDLEVBQXZCO0FBQ0Usa0RBQVMsU0FBUyxFQUFDLGdCQUFuQjtBQUNFLHFDQUFDLGdCQUFELE9BREYsQ0FERjs7QUFJRSxrREFBUyxTQUFTLEVBQUMsV0FBbkIsSUFBZ0MsS0FBS21DLGdCQUFMLEVBQWhDLENBSkYsQ0FQRixDQURGOzs7O0FBZ0JELEtBbEJELE1Ba0JPO0FBQ0wsMEJBQU8sNkJBQUMsZUFBRCxPQUFQO0FBQ0Q7QUFDRixHQTlsQjhCLEM7OztBQWltQmxCakcsUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCwgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IExvZ29TdmcgZnJvbSAnLi4vc3ZnL2xvZ28tc3ZnJztcbi8vIGltcG9ydCBXZWJDYW1lcmFTaGFwc2hvdCBmcm9tICcuLi93ZWItY2FtZXJhLXNoYXBzaG90Jztcbi8vIGltcG9ydCBDb2duaXRpdmVGYWNlU2VydmljZSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db2duaXRpdmVGYWNlU2VydmljZSc7XG5pbXBvcnQgV2F2ZVN2ZyBmcm9tICcuLi9zdmcvV2F2ZVN2Zyc7XG5pbXBvcnQgT3duZXJPdmVydmlldyBmcm9tICcuL3JlZ2lzdGVyL093bmVyT3ZlcnZpZXcnO1xuaW1wb3J0IGRlbGF5IGZyb20gJy4uLy4uL3V0aWwvZGVsYXknO1xuaW1wb3J0IFJvbGVTZWxlY3QgZnJvbSAnLi9yZWdpc3Rlci9Sb2xlU2VsZWN0JztcbmltcG9ydCBIZWxwZXJPdmVydmlldyBmcm9tICcuL3JlZ2lzdGVyL0hlbHBlck92ZXJ2aWV3JztcbmltcG9ydCBPd25lckVtYWlsIGZyb20gJy4vcmVnaXN0ZXIvT3duZXJFbWFpbCc7XG5pbXBvcnQgT3duZXJRdWl6SW50cm8gZnJvbSAnLi9yZWdpc3Rlci9xdWl6L093bmVyUXVpekludHJvJztcbmltcG9ydCBPd25lclBhc3N3b3JkUSBmcm9tICcuL3JlZ2lzdGVyL3F1aXovT3duZXJQYXNzd29yZFEnO1xuaW1wb3J0IE93bmVyQ2FtZXJhUSBmcm9tICcuL3JlZ2lzdGVyL3F1aXovT3duZXJDYW1lcmFRJztcbmltcG9ydCBPd25lckxvc3RQaG9uZVEgZnJvbSAnLi9yZWdpc3Rlci9xdWl6L093bmVyTG9zdFBob25lUSc7XG5pbXBvcnQgT3duZXJQYWxtUSBmcm9tICcuL3JlZ2lzdGVyL3F1aXovT3duZXJQYWxtUSc7XG5pbXBvcnQgT3duZXJTZWN1cml0eVEgZnJvbSAnLi9yZWdpc3Rlci9xdWl6L093bmVyU2VjdXJpdHlRJztcbmltcG9ydCBPd25lckxvZ2luUmVjb21tZW5kIGZyb20gJy4vcmVnaXN0ZXIvT3duZXJMb2dpblJlY29tbWVuZCc7XG5pbXBvcnQgTG9naW5NZXRob2RTZXR1cCBmcm9tICcuL3JlZ2lzdGVyL2xvZ2luLW1ldGhvZC1zZXR1cC9Mb2dpbk1ldGhvZFNldHVwJztcblxuLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzMwMzU1MDgwLzY5MDc1NDFcbmlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gIHJlcXVpcmUoJy4uL2dsb2JhbC5zY3NzJyk7XG4gIHJlcXVpcmUoJy4vcmVnaXN0ZXIuc2NzcycpO1xufVxuXG5jbGFzcyBSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNlbGVjdGVkUm9sZTogJ293bmVyJyxcbiAgICAgIHN0ZXA6IDEsXG4gICAgICAvLyBzZWxlY3RlZFJvbGU6ICdvd25lcicsXG4gICAgICAvLyBzdGVwOiAxMCxcbiAgICAgIGlzQW5pbWF0aW5nRm9yd2FyZDogZmFsc2UsXG4gICAgICBpc0FuaW1hdGluZ0JhY2t3YXJkOiBmYWxzZSxcbiAgICAgIGZhY2VSZWdpc3RlcjogZmFsc2UsXG4gICAgICBmYWNlVGVtcGxhdGU6IHVuZGVmaW5lZCxcbiAgICAgIHRvdGFsU3RlcHM6IDEwLFxuICAgICAgZW1haWxJdGVtOiB1bmRlZmluZWQsXG4gICAgICBxdWVzdGlvbnM6IHtcbiAgICAgICAgZm9yZ2V0c1Bhc3N3b3JkOiB1bmRlZmluZWQsXG4gICAgICAgIGRldmljZXNXaXRoQ2FtZXJhOiB1bmRlZmluZWQsXG4gICAgICAgIGxvc3RQaG9uZTogdW5kZWZpbmVkLFxuICAgICAgICBzY2FubmluZ1BhbG06IHVuZGVmaW5lZCxcbiAgICAgICAgYW5zd2VyaW5nU2VjdXJpdHlRdWVzdGlvbnM6IHVuZGVmaW5lZCxcbiAgICAgIH0sXG4gICAgICBwYXNzd29yZEl0ZW06IHVuZGVmaW5lZCxcbiAgICAgIHRleHRJdGVtOiB1bmRlZmluZWQsXG4gICAgICBwYWxtSXRlbTogdW5kZWZpbmVkLFxuICAgICAgc2VjdXJpdHlJdGVtczogdW5kZWZpbmVkLFxuICAgIH07XG4gIH1cblxuICBhc3luYyBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICAgICAgdGhpcy5sb2FkQXBwU2V0dGluZ3MoKTtcbiAgICAgIGF3YWl0IGRlbGF5KDEwMDApO1xuICAgICAgY29uc3Qgc3BsYXNoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NwbGFzaCcpO1xuICAgICAgc3BsYXNoLnN0eWxlLmFuaW1hdGlvbiA9ICdmYWRlb3V0IDFzJztcbiAgICAgIHNwbGFzaC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJykuc3R5bGUuYW5pbWF0aW9uID0gJ2ZhZGVpbiAxcyc7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbicpLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgICAgYXdhaXQgZGVsYXkoMTAwMCk7XG4gICAgICBzcGxhc2gucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzcGxhc2gpO1xuICAgIH1cbiAgfVxuXG4gIGxvYWRBcHBTZXR0aW5ncyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXJsID0gXCJhcGkvYXBwLXNldHRpbmdzXCI7XG4gICAgICBjb25zdCBpbml0ID0ge1xuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgIH07XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwgaW5pdCk7XG4gICAgICBjb25zdCBhcHBTZXR0aW5ncyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgIGNvbnN0IHRpdGxlU2V0dGluZyA9IGFwcFNldHRpbmdzLmZpbmQoXG4gICAgICAgIChhKSA9PiBhLnNldHRpbmdOYW1lID09PSBcInRpdGxlXCJcbiAgICAgICk7XG4gICAgICBpZiAodGl0bGVTZXR0aW5nKSB7XG4gICAgICAgIGRvY3VtZW50LnRpdGxlID0gdGl0bGVTZXR0aW5nLnNldHRpbmdWYWx1ZSArICcgQXV0aCc7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIVwiKTtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZSkgPT4ge1xuICAgIGNvbnN0IHsgdmFsdWUgfSA9IGUudGFyZ2V0O1xuICAgIGNvbnN0IGtleSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVTbmFwc2hvdCA9IGFzeW5jIChibG9iKSA9PiB7XG4gICAgY29uc3QgeyB1c2VybmFtZSB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgaWYgKGJsb2IpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGltZ0ZpbGUgPSBuZXcgRmlsZShbYmxvYl0sICdpbWdGaWxlLnBuZycsIHtcbiAgICAgICAgICB0eXBlOiBibG9iLnR5cGUsXG4gICAgICAgICAgbGFzdE1vZGlmaWVkOiBEYXRlLm5vdygpLFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5wdXQgPSAnL3JlZ2lzdGVyL2ZhY2UnO1xuICAgICAgICBjb25zdCBmb3JtZGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xuICAgICAgICBmb3JtZGF0YS5hcHBlbmQoJ2ltZycsIGltZ0ZpbGUsICdpbWdGaWxlJyk7XG4gICAgICAgIGZvcm1kYXRhLmFwcGVuZCgndXNlcm5hbWUnLCB1c2VybmFtZSk7XG4gICAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgYm9keTogZm9ybWRhdGEsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goaW5wdXQsIGluaXQpO1xuICAgICAgICBjb25zdCByZXNwb25zZUpTT04gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGZhY2VUZW1wbGF0ZTogcmVzcG9uc2VKU09OLnJlZ2lzdGVyRmFjZVJlc3BvbnNlLnBlcnNvbklkLFxuICAgICAgICAgIGZhY2VSZWdpc3RlcjogZmFsc2UsXG4gICAgICAgIH0pO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyLm1lc3NhZ2UpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBnb0JhY2tUb1dlbGNvbWUoKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLi4vJyArIGxvY2F0aW9uLnNlYXJjaDtcbiAgfVxuXG4gIGhhbmRsZUdvQmFjayA9IGFzeW5jIChzZWxlY3RlZFJvbGUsIHN0ZXAsIGRhdGEpID0+IHtcbiAgICBjb25zdCB7IHRvdGFsU3RlcHMsIHF1ZXN0aW9ucyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgaWYgKGRhdGEgJiYgT2JqZWN0LmtleXMoZGF0YSkpIHtcbiAgICAgIGNvbnN0IGtleSA9IE9iamVjdC5rZXlzKGRhdGEpWzBdO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IFtrZXldOiBkYXRhW2tleV0gfSk7XG4gICAgfVxuICAgIGlmIChzdGVwID09PSAxKSB7XG4gICAgICB0aGlzLmdvQmFja1RvV2VsY29tZSgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNldFN0YXRlKHsgaXNBbmltYXRpbmdCYWNrd2FyZDogdHJ1ZSB9KTtcbiAgICAvLyB3YWl0aW5nIGZvciByZWFjdCB0byBwdXQgb24gZG9tLCBzZXRTdGF0ZSBjYWxsYmFjayBkaWRuJ3Qgc2VlbVxuICAgIC8vIHRvIGRvIHRoZSB0cmljayBzbyBwdXQgaW4gYSBzaG9ydCBkZWxheVxuICAgIGF3YWl0IGRlbGF5KDEwMCk7XG4gICAgY29uc3QgZWxPYmogPSB0aGlzLmdldEVsT2JqKCk7XG4gICAgaWYgKHN0ZXAgPT09IDEpIHtcbiAgICAgIGVsT2JqLmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYGxpbmVhci1ncmFkaWVudCgjMjM2MmM3IDUwJSwgIzRiYTlkOSA1MCUpYDtcbiAgICAgIGVsT2JqLnByb2dyZXNzQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIH1cbiAgICBsZXQgc2tpcERpc3RhbmNlID0gMzYwO1xuICAgIGVsT2JqW3NlbGVjdGVkUm9sZV1bc3RlcF0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtza2lwRGlzdGFuY2V9cHgpYDtcbiAgICBlbE9ialtzZWxlY3RlZFJvbGVdW3N0ZXBdLnN0eWxlLm9wYWNpdHkgPSAwO1xuICAgIGlmIChzdGVwID09PSA4ICYmIHRoaXMuc2tpcFBhbG0ocXVlc3Rpb25zKSkge1xuICAgICAgLy8gc2tpcCBwYWxtIHF1ZXN0aW9uIHNpbmNlIG5vIGNhbWVyYVxuICAgICAgc3RlcC0tO1xuICAgIH1cbiAgICBlbE9iai53YXZlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0keyhzdGVwIC0gMSkgKiAzNjB9cHgpYDtcbiAgICBlbE9iai5wcm9ncmVzcy5zdHlsZS53aWR0aCA9ICgoc3RlcCAtIDEpICogMTAwKSAvIHRvdGFsU3RlcHMgKyAnJSc7XG4gICAgYXdhaXQgZGVsYXkoMTUwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzZWxlY3RlZFJvbGU6IHN0ZXAgLSAxID09PSAwID8gdW5kZWZpbmVkIDogc2VsZWN0ZWRSb2xlLFxuICAgICAgc3RlcDogc3RlcCAtIDEsXG4gICAgICBpc0FuaW1hdGluZ0JhY2t3YXJkOiBmYWxzZSxcbiAgICB9KTtcbiAgfTtcblxuICBza2lwUGFsbShxdWVzdGlvbnMpIHtcbiAgICByZXR1cm4gKFxuICAgICAgcXVlc3Rpb25zLmRldmljZXNXaXRoQ2FtZXJhICYmXG4gICAgICBxdWVzdGlvbnMuZGV2aWNlc1dpdGhDYW1lcmEuaW5kZXhPZignY2FtZXJhQWNjZXNzTm9uZScpID4gLTFcbiAgICApO1xuICB9XG5cbiAgaGFuZGxlR29Gb3J3YXJkID0gYXN5bmMgKHNlbGVjdGVkUm9sZSwgc3RlcCwgZGF0YSkgPT4ge1xuICAgIGNvbnN0IHsgdG90YWxTdGVwcyB9ID0geyAuLi50aGlzLnN0YXRlIH07XG4gICAgbGV0IHsgZW1haWxJdGVtLCBxdWVzdGlvbnMsIGxvZ2luTWV0aG9kIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICBpZiAoZGF0YSAmJiBkYXRhLmVtYWlsSXRlbSkge1xuICAgICAgKHsgZW1haWxJdGVtIH0gPSBkYXRhKTtcbiAgICB9XG4gICAgaWYgKGRhdGEgJiYgZGF0YS5xdWVzdGlvbnMpIHtcbiAgICAgICh7IHF1ZXN0aW9ucyB9ID0gZGF0YSk7XG4gICAgfVxuICAgIGlmIChkYXRhICYmIGRhdGEubG9naW5NZXRob2QpIHtcbiAgICAgICh7IGxvZ2luTWV0aG9kIH0gPSBkYXRhKTtcbiAgICB9XG4gICAgYXdhaXQgZGVsYXkoMTAwKTtcbiAgICBjb25zdCBlbE9iaiA9IHRoaXMuZ2V0RWxPYmooKTtcbiAgICBpZiAoc3RlcCA9PT0gMSkge1xuICAgICAgZWxPYmouYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPVxuICAgICAgICBzZWxlY3RlZFJvbGUgPT09ICdvd25lcidcbiAgICAgICAgICA/ICdsaW5lYXItZ3JhZGllbnQoIzIzNjJjNyA1MCUsIHdoaXRlIDUwJSknXG4gICAgICAgICAgOiAnbGluZWFyLWdyYWRpZW50KCM0YmE5ZDkgNTAlLCB3aGl0ZSA1MCUpJztcbiAgICAgIGVsT2JqLnByb2dyZXNzQ29udGFpbmVyLnN0eWxlLm9wYWNpdHkgPSAxO1xuICAgIH1cbiAgICBlbE9ialtzZWxlY3RlZFJvbGVdW3N0ZXAgLSAxXS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgtMzYwcHgpJztcbiAgICBlbE9ialtzZWxlY3RlZFJvbGVdW3N0ZXAgLSAxXS5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgIGlmIChzdGVwID09PSA3ICYmIHRoaXMuc2tpcFBhbG0ocXVlc3Rpb25zKSkge1xuICAgICAgLy8gc2tpcCBwYWxtIHF1ZXN0aW9uIHNpbmNlIG5vIGNhbWVyYVxuICAgICAgc3RlcCsrO1xuICAgIH1cbiAgICBlbE9iai53YXZlLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKC0ke3N0ZXAgKiAzNjB9cHgpYDtcbiAgICBlbE9iai5wcm9ncmVzcy5zdHlsZS53aWR0aCA9IChzdGVwICogMTAwKSAvIHRvdGFsU3RlcHMgKyAnJSc7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzdGVwLFxuICAgICAgc2VsZWN0ZWRSb2xlLFxuICAgICAgaXNBbmltYXRpbmdGb3J3YXJkOiB0cnVlLFxuICAgICAgZW1haWxJdGVtLFxuICAgICAgcXVlc3Rpb25zLFxuICAgICAgbG9naW5NZXRob2QsXG4gICAgfSk7XG4gICAgYXdhaXQgZGVsYXkoMTUwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGlzQW5pbWF0aW5nRm9yd2FyZDogZmFsc2UgfSk7XG4gIH07XG5cbiAgZ2V0RWxPYmooKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGJvZHk6IGRvY3VtZW50LmJvZHksXG4gICAgICB3YXZlOiBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd3YXZlLWNvbnRhaW5lcicpWzBdLFxuICAgICAgcHJvZ3Jlc3M6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9ncmVzcycpLFxuICAgICAgcHJvZ3Jlc3NDb250YWluZXI6IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXG4gICAgICAgICdwcm9ncmVzcy1jb250YWluZXInXG4gICAgICApWzBdLFxuICAgICAgb3duZXI6IFtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24wJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTEtb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tMi1vd25lcicpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi0zLW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTQtb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tNS1vd25lcicpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi02LW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTctb3duZXInKSxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NlY3Rpb24tOC1vd25lcicpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi05LW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTEwLW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTExLW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTEyLW93bmVyJyksXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uLTEzLW93bmVyJyksXG4gICAgICBdLFxuICAgICAgaGVscGVyOiBbXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzZWN0aW9uMCcpLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2VjdGlvbi0xLWhlbHBlcicpLFxuICAgICAgXSxcbiAgICB9O1xuICB9XG5cbiAgcmVuZGVyT25ib2FyZGluZygpIHtcbiAgICBjb25zdCB7XG4gICAgICBzdGVwLFxuICAgICAgc2VsZWN0ZWRSb2xlLFxuICAgICAgaXNBbmltYXRpbmdGb3J3YXJkLFxuICAgICAgaXNBbmltYXRpbmdCYWNrd2FyZCxcbiAgICAgIGVtYWlsSXRlbSxcbiAgICAgIHF1ZXN0aW9ucyxcbiAgICAgIGxvZ2luTWV0aG9kLFxuICAgICAgcGFzc3dvcmRJdGVtLFxuICAgICAgdGV4dEl0ZW0sXG4gICAgICBwYWxtSXRlbSxcbiAgICAgIHNlY3VyaXR5SXRlbXMsXG4gICAgfSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgfTtcbiAgICBjb25zdCBza2lwUGFsbSA9IHRoaXMuc2tpcFBhbG0ocXVlc3Rpb25zKTtcbiAgICBzd2l0Y2ggKHNlbGVjdGVkUm9sZSkge1xuICAgICAgY2FzZSAnb3duZXInOlxuICAgICAgICBzd2l0Y2ggKHN0ZXApIHtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPFJvbGVTZWxlY3QgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lck92ZXJ2aWV3IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8Um9sZVNlbGVjdCBwb3NpdGlvbj1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyT3ZlcnZpZXcgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3duZXJPdmVydmlld1xuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyT3ZlcnZpZXcgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lckVtYWlsIGVtYWlsSXRlbT17ZW1haWxJdGVtfSBwb3NpdGlvbj1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FuaW1hdGluZ0JhY2t3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyT3ZlcnZpZXcgcG9zaXRpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lckVtYWlsIGVtYWlsSXRlbT17ZW1haWxJdGVtfSAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPd25lckVtYWlsXG4gICAgICAgICAgICAgICAgICBlbWFpbEl0ZW09e2VtYWlsSXRlbX1cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lckVtYWlsIGVtYWlsSXRlbT17ZW1haWxJdGVtfSAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyUXVpekludHJvIHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJFbWFpbFxuICAgICAgICAgICAgICAgICAgICBlbWFpbEl0ZW09e2VtYWlsSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb249XCJsZWZ0XCJcbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJRdWl6SW50cm8gLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3duZXJRdWl6SW50cm9cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lclF1aXpJbnRybyAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyUGFzc3dvcmRRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSBwb3NpdGlvbj1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FuaW1hdGluZ0JhY2t3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyUXVpekludHJvIHBvc2l0aW9uPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJQYXNzd29yZFEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE93bmVyUGFzc3dvcmRRXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lclBhc3N3b3JkUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lckNhbWVyYVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJQYXNzd29yZFEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJDYW1lcmFRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxPd25lckNhbWVyYVFcbiAgICAgICAgICAgICAgICAgIHF1ZXN0aW9ucz17cXVlc3Rpb25zfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29CYWNrPXt0aGlzLmhhbmRsZUdvQmFja31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvRm9yd2FyZD17dGhpcy5oYW5kbGVHb0ZvcndhcmR9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgICBpZiAoaXNBbmltYXRpbmdGb3J3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgPE93bmVyQ2FtZXJhUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lckxvc3RQaG9uZVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJDYW1lcmFRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSBwb3NpdGlvbj1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgPE93bmVyTG9zdFBob25lUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3duZXJMb3N0UGhvbmVRXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSA3OlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lckxvc3RQaG9uZVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJQYWxtUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJyaWdodFwiIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lckxvc3RQaG9uZVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICA8T3duZXJQYWxtUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3duZXJQYWxtUVxuICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zPXtxdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9e3RoaXMuaGFuZGxlR29CYWNrfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29Gb3J3YXJkPXt0aGlzLmhhbmRsZUdvRm9yd2FyZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGNhc2UgODpcbiAgICAgICAgICAgIGlmIChpc0FuaW1hdGluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgaWYgKHNraXBQYWxtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgICAgPE93bmVyTG9zdFBob25lUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPE93bmVyU2VjdXJpdHlRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSBwb3NpdGlvbj1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAgICA8T3duZXJQYWxtUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgICAgPE93bmVyU2VjdXJpdHlRIHF1ZXN0aW9ucz17cXVlc3Rpb25zfSBwb3NpdGlvbj1cInJpZ2h0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChpc0FuaW1hdGluZ0JhY2t3YXJkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgICAgICAgICAge3RoaXMuc2tpcFBhbG0ocXVlc3Rpb25zKSAmJiAoXG4gICAgICAgICAgICAgICAgICAgIDxPd25lckxvc3RQaG9uZVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IHBvc2l0aW9uPVwibGVmdFwiIC8+XG4gICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgeyF0aGlzLnNraXBQYWxtKHF1ZXN0aW9ucykgJiYgKFxuICAgICAgICAgICAgICAgICAgICA8T3duZXJQYWxtUSBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8T3duZXJTZWN1cml0eVEgcXVlc3Rpb25zPXtxdWVzdGlvbnN9IC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPE93bmVyU2VjdXJpdHlRXG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSA5OlxuICAgICAgICAgICAgaWYgKGlzQW5pbWF0aW5nRm9yd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lclNlY3VyaXR5USBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lckxvZ2luUmVjb21tZW5kXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwicmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICBlbWFpbEl0ZW09e2VtYWlsSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zPXtxdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSXRlbT17cGFzc3dvcmRJdGVtfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0SXRlbT17dGV4dEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHBhbG1JdGVtPXtwYWxtSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlJdGVtcz17c2VjdXJpdHlJdGVtc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNBbmltYXRpbmdCYWNrd2FyZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICAgICAgICAgIDxPd25lclNlY3VyaXR5USBxdWVzdGlvbnM9e3F1ZXN0aW9uc30gcG9zaXRpb249XCJsZWZ0XCIgLz5cbiAgICAgICAgICAgICAgICAgIDxPd25lckxvZ2luUmVjb21tZW5kXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsSXRlbT17ZW1haWxJdGVtfVxuICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJdGVtPXtwYXNzd29yZEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHRleHRJdGVtPXt0ZXh0SXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcGFsbUl0ZW09e3BhbG1JdGVtfVxuICAgICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zPXtzZWN1cml0eUl0ZW1zfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8T3duZXJMb2dpblJlY29tbWVuZFxuICAgICAgICAgICAgICAgICAgZW1haWxJdGVtPXtlbWFpbEl0ZW19XG4gICAgICAgICAgICAgICAgICBxdWVzdGlvbnM9e3F1ZXN0aW9uc31cbiAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSXRlbT17cGFzc3dvcmRJdGVtfVxuICAgICAgICAgICAgICAgICAgdGV4dEl0ZW09e3RleHRJdGVtfVxuICAgICAgICAgICAgICAgICAgcGFsbUl0ZW09e3BhbG1JdGVtfVxuICAgICAgICAgICAgICAgICAgc2VjdXJpdHlJdGVtcz17c2VjdXJpdHlJdGVtc31cbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgY2FzZSAxMDpcbiAgICAgICAgICAgIGlmIChpc0FuaW1hdGluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJMb2dpblJlY29tbWVuZFxuICAgICAgICAgICAgICAgICAgICBlbWFpbEl0ZW09e2VtYWlsSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zPXtxdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSXRlbT17cGFzc3dvcmRJdGVtfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0SXRlbT17dGV4dEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHBhbG1JdGVtPXtwYWxtSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlJdGVtcz17c2VjdXJpdHlJdGVtc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TG9naW5NZXRob2RTZXR1cFxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbj1cInJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgbG9naW5NZXRob2Q9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZEl0ZW09e3Bhc3N3b3JkSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgdGV4dEl0ZW09e3RleHRJdGVtfVxuICAgICAgICAgICAgICAgICAgICBwYWxtSXRlbT17cGFsbUl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHNlY3VyaXR5SXRlbXM9e3NlY3VyaXR5SXRlbXN9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8T3duZXJMb2dpblJlY29tbWVuZFxuICAgICAgICAgICAgICAgICAgICBlbWFpbEl0ZW09e2VtYWlsSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb25zPXtxdWVzdGlvbnN9XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uPVwibGVmdFwiXG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSXRlbT17cGFzc3dvcmRJdGVtfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0SXRlbT17dGV4dEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHBhbG1JdGVtPXtwYWxtSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlJdGVtcz17c2VjdXJpdHlJdGVtc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICA8TG9naW5NZXRob2RTZXR1cFxuICAgICAgICAgICAgICAgICAgICBsb2dpbk1ldGhvZD17bG9naW5NZXRob2R9XG4gICAgICAgICAgICAgICAgICAgIHBhc3N3b3JkSXRlbT17cGFzc3dvcmRJdGVtfVxuICAgICAgICAgICAgICAgICAgICB0ZXh0SXRlbT17dGV4dEl0ZW19XG4gICAgICAgICAgICAgICAgICAgIHBhbG1JdGVtPXtwYWxtSXRlbX1cbiAgICAgICAgICAgICAgICAgICAgc2VjdXJpdHlJdGVtcz17c2VjdXJpdHlJdGVtc31cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExvZ2luTWV0aG9kU2V0dXBcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUdvQmFjaz17dGhpcy5oYW5kbGVHb0JhY2t9XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0ZvcndhcmQ9e3RoaXMuaGFuZGxlR29Gb3J3YXJkfVxuICAgICAgICAgICAgICAgICAgbG9naW5NZXRob2Q9e2xvZ2luTWV0aG9kfVxuICAgICAgICAgICAgICAgICAgcGFzc3dvcmRJdGVtPXtwYXNzd29yZEl0ZW19XG4gICAgICAgICAgICAgICAgICB0ZXh0SXRlbT17dGV4dEl0ZW19XG4gICAgICAgICAgICAgICAgICBwYWxtSXRlbT17cGFsbUl0ZW19XG4gICAgICAgICAgICAgICAgICBzZWN1cml0eUl0ZW1zPXtzZWN1cml0eUl0ZW1zfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiA8RnJhZ21lbnQgLz47XG4gICAgICAgIH1cbiAgICAgIGNhc2UgJ2hlbHBlcic6XG4gICAgICAgIHN3aXRjaCAoc3RlcCkge1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIGlmIChpc0FuaW1hdGluZ0ZvcndhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8Um9sZVNlbGVjdCAvPlxuICAgICAgICAgICAgICAgICAgPEhlbHBlck92ZXJ2aWV3IHBvc2l0aW9uPVwicmlnaHRcIiAvPlxuICAgICAgICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzQW5pbWF0aW5nQmFja3dhcmQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICAgICAgICA8Um9sZVNlbGVjdCBwb3NpdGlvbj1cImxlZnRcIiAvPlxuICAgICAgICAgICAgICAgICAgPEhlbHBlck92ZXJ2aWV3IC8+XG4gICAgICAgICAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEhlbHBlck92ZXJ2aWV3XG4gICAgICAgICAgICAgICAgICBoYW5kbGVHb0JhY2s9e3RoaXMuaGFuZGxlR29CYWNrfVxuICAgICAgICAgICAgICAgICAgaGFuZGxlR29Gb3J3YXJkPXt0aGlzLmhhbmRsZUdvRm9yd2FyZH1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gPEZyYWdtZW50IC8+O1xuICAgICAgICB9XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxSb2xlU2VsZWN0XG4gICAgICAgICAgICBoYW5kbGVHb0JhY2s9e3RoaXMuaGFuZGxlR29CYWNrfVxuICAgICAgICAgICAgaGFuZGxlR29Gb3J3YXJkPXt0aGlzLmhhbmRsZUdvRm9yd2FyZH1cbiAgICAgICAgICAvPlxuICAgICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuQlJPV1NFUikge1xuICAgICAgY29uc3QgeyBzdGVwIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGlkPVwic3BsYXNoXCI+XG4gICAgICAgICAgICA8TG9nb1N2ZyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGlkPVwicHJvZ3Jlc3NcIiBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXJcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bWFpbiBpZD1cIm1haW5cIiBzdHlsZT17eyBwb3NpdGlvbjogJ2Fic29sdXRlJywgdG9wOiAwLCBvcGFjaXR5OiAwIH19PlxuICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwid2F2ZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPFdhdmVTdmcgLz5cbiAgICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPnt0aGlzLnJlbmRlck9uYm9hcmRpbmcoKX08L3NlY3Rpb24+XG4gICAgICAgICAgPC9tYWluPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXI7XG4iXX0=