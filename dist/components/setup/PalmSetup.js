"use strict";var _interopRequireWildcard3 = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _interopRequireWildcard2 = _interopRequireDefault(require("@babel/runtime/helpers/interopRequireWildcard"));var _react = _interopRequireWildcard3(require("react"));
var _PalmDetectedSvg = _interopRequireDefault(require("../svg/PalmDetectedSvg"));
var _PalmNotDetectedSvg = _interopRequireDefault(require("../svg/PalmNotDetectedSvg"));
var _HowSvg = _interopRequireDefault(require("../svg/HowSvg"));
var _PalmExampleSvg = _interopRequireDefault(require("../svg/PalmExampleSvg"));
var _MStepper = _interopRequireDefault(require("../common/MStepper"));
var _PalmHashDiagramSvg = _interopRequireDefault(require("../svg/PalmHashDiagramSvg"));
var _PalmSvg = _interopRequireDefault(require("../svg/PalmSvg"));
var _NoWifiSvg = _interopRequireDefault(require("../svg/NoWifiSvg"));
var _AirplaneModeHelpSvg = _interopRequireDefault(require("../svg/AirplaneModeHelpSvg"));
var _delay = _interopRequireDefault(require("../../util/delay"));

var _GoBackSvg = _interopRequireDefault(require("../svg/GoBackSvg"));
var _CvService = _interopRequireDefault(require("../../services/CvService"));
var _urlUtil = _interopRequireDefault(require("../../util/url-util"));
var _PalmDiagram = _interopRequireDefault(require("../svg/PalmDiagram")); // import templateSample from "../../../../palmLines.json";

if (process.env.BROWSER) {
  Promise.resolve().then(() => (0, _interopRequireWildcard2.default)("/public/css/05c21e1b5396d15c57bd2692464fc801.scss"));
}
class PalmSetup extends _react.Component {
  // the webcam ref
  // the original snapshot ref
  // the processed snapshot ref
  // the template palm image data
  // this.width = 204;
  // this.height = 314;



  constructor(props) {var _this;
    super(props);_this = this;(0, _defineProperty2.default)(this, "videoElement", null);(0, _defineProperty2.default)(this, "canvasElement", null);(0, _defineProperty2.default)(this, "canvasElement2", null);(0, _defineProperty2.default)(this, "imageData", null);(0, _defineProperty2.default)(this, "width", 467.77);(0, _defineProperty2.default)(this, "height", 720);(0, _defineProperty2.default)(this, "handleOpenCamera",






















    () => {
      this.setupCamera();
      this.setState({ enableCamera: true });
    });(0, _defineProperty2.default)(this, "handleTakePicture", /*#__PURE__*/(0, _asyncToGenerator2.default)(

    function* () {
      const { currentStep } = { ..._this.state };
      // TODO:
      // 1) add palm overlay for desired ROI of palm
      // 2) add canvas over here, send back ROI of palm to canvas
      // 3) run houghline code https://answers.opencv.org/question/218774/how-to-extract-palm-lines/
      _this.ctx1 = _this.canvasElement.getContext("2d");
      const image = _this.videoElement; // An element to draw into the context.
      const sx = 40; // The x-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
      const sy = 100; // The y-axis coordinate of the top left corner of the sub-rectangle of the source image to draw into the destination context.
      const sWidth = 128; // The width of the sub-rectangle of the source image to draw into the destination context. If not specified, the entire rectangle from the coordinates specified by sx and sy to the bottom-right corner of the image is used.
      const sHeight = 128; // The height of the sub-rectangle of the source image to draw into the destination context.
      const dx = 0; // The x-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
      const dy = 0; // The y-axis coordinate in the destination canvas at which to place the top-left corner of the source image.
      const dWidth = 128; // The width to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in width when drawn.
      const dHeight = 128; // The height to draw the image in the destination canvas. This allows scaling of the drawn image. If not specified, the image is not scaled in height when drawn.
      // this.ctx1.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
      _this.ctx1.drawImage(
      image,
      0,
      0,
      _this.width,
      _this.height,
      0,
      0,
      _this.width,
      _this.height);

      // Turns off webcam
      const stream = _this.videoElement.srcObject;
      const tracks = stream.getTracks();
      tracks.forEach(track => track.stop());
      _this.videoElement.srcObject = null;

      const imageInput = _this.ctx1.getImageData(0, 0, _this.width, _this.height);
      const payload = (yield _CvService.default.imageProcessing3(imageInput)).data.payload;
      _this.imageData = payload.img;

      // const ctx2 = this.canvasElement2.getContext("2d");
      // ctx2.canvas.width = 128;
      // ctx2.canvas.height = 128;
      // ctx2.putImageData(this.imageData, 0, 0);

      // let palmTemplate = "";
      // templateSample.forEach((dataPoint) => {
      //   palmTemplate += dataPoint.toString();
      // });
      const palmTemplate = payload.template;

      _this.setState(
      {
        palmTemplate,
        enableCamera: false,
        currentStep: currentStep + 1 }, /*#__PURE__*/(0, _asyncToGenerator2.default)(

      function* () {
        yield (0, _delay.default)(50); // enough time for react to render the canvas element.
        const ctx2 = _this.canvasElement2.getContext("2d");
        ctx2.canvas.width = 128;
        ctx2.canvas.height = 128;
        ctx2.putImageData(_this.imageData, 0, 0);
      }));

    }));(0, _defineProperty2.default)(this, "verifyAndSave", /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(































      function* (e) {
        e.preventDefault();
        const { goBack, isAdd, loginMethods, setLoginMethods } = { ..._this.props };
        const { palmTemplate } = { ..._this.state };
        try {
          const url = "/api/login-methods";
          const authorization = _urlUtil.default.getQueryVariable("access_token");
          const init = {
            method: isAdd ? "POST" : "PUT",
            headers: {
              Authorization: `Bearer ${authorization}`,
              "Content-Type": "application/json" },

            body: JSON.stringify({ palmTemplate: JSON.stringify(palmTemplate) }) };

          yield fetch(url, init);
          if (isAdd) {
            loginMethods.push("PalmLoginType");
            setLoginMethods(loginMethods);
          }
          goBack();
        } catch (err) {
          console.error(err);
        }
      });return function (_x) {return _ref3.apply(this, arguments);};}());(0, _defineProperty2.default)(this, "deletePalm", /*#__PURE__*/(0, _asyncToGenerator2.default)(

    function* () {
      const { setLoginMethods, goBack } = { ..._this.props };
      let { loginMethods } = { ..._this.props };
      try {
        const url = "/api/login-methods/PalmLoginType";
        const authorization = _urlUtil.default.getQueryVariable("access_token");
        const init = {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${authorization}`,
            "Content-Type": "application/json" } };


        yield fetch(url, init);
        loginMethods = loginMethods.filter(lm => lm !== "PalmLoginType");
        setLoginMethods(loginMethods);
        goBack();
      } catch (err) {
        console.error(err);
      }
    })); // const palmTemplate = props.palmItem
    //   ? props.palmItem.palmTemplate
    //   : undefined;
    this.state = { palmTemplate: undefined, currentStep: 1, // currentStep: 3,
      totalSteps: 4, reConfigure: false };}componentDidMount() {this.load();}load() {return (0, _asyncToGenerator2.default)(function* () {if (process.env.BROWSER) {yield _CvService.default.load();}})();}setupCamera() {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {// Turns on webcam
      yield (0, _delay.default)(50); // enough time for react to render the video element.
      _this2.videoElement.width = _this2.width;_this2.videoElement.height = _this2.height;if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {const stream = yield navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: "user", width: _this2.width, height: _this2.height } });_this2.videoElement.srcObject = stream;return new Promise(resolve => {_this2.videoElement.onloadedmetadata = () => {_this2.videoElement.play();resolve(_this2.videoElement);};});}const errorMessage = "This browser does not support video capture, or this device does not have a camera";alert(errorMessage);return Promise.reject(errorMessage);})();}renderConfigure() {return /*#__PURE__*/_react.default.createElement("form", { onSubmit: this.verifyAndSave }, /*#__PURE__*/_react.default.createElement("input", { style: { width: "210px", fontSize: "22px" },
      type: "submit",
      value: "Verify and Save" }));



  }

  renderLogin() {
    const { renderHiddenInputs } = { ...this.props };
    const { palmTemplate } = { ...this.state };
    return /*#__PURE__*/(
      _react.default.createElement("form", { method: "POST", action: "/authorize" }, /*#__PURE__*/
      _react.default.createElement("input", { name: "palmTemplate", type: "hidden", value: palmTemplate }),
      renderHiddenInputs(), /*#__PURE__*/
      _react.default.createElement("input", {
        style: { width: "210px", fontSize: "22px" },
        type: "submit",
        value: "Verify and Login" })));



  }

  renderTakePicture() {
    const { isLogin, toggleDisplayHow, isSettings } = { ...this.props };
    const { palmTemplate, currentStep, enableCamera, totalSteps } = {
      ...this.state };

    return /*#__PURE__*/(
      _react.default.createElement("div", { id: "palm-setup", className: "card owner1" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
      _react.default.createElement("div", { className: "card-title" }, "Palm Login"), /*#__PURE__*/
      _react.default.createElement("div", { className: "excerpt" },
      !palmTemplate && "Please use your camera to register your palm",
      palmTemplate &&
      "Great! Here’s the hash that was created from your palm print:")),



      !palmTemplate && !enableCamera && /*#__PURE__*/
      _react.default.createElement("div", null, /*#__PURE__*/
      _react.default.createElement(_PalmNotDetectedSvg.default, null)),


      !palmTemplate && enableCamera && /*#__PURE__*/
      _react.default.createElement("div", { style: { position: "relative" } }, /*#__PURE__*/
      _react.default.createElement("div", { className: "palm-overlay" }, /*#__PURE__*/
      _react.default.createElement(_PalmExampleSvg.default, null)), /*#__PURE__*/

      _react.default.createElement("video", {
        className: "video",
        playsInline: true,
        ref: videoElement => {
          this.videoElement = videoElement;
        } }), /*#__PURE__*/

      _react.default.createElement("canvas", {
        ref: canvasElement => {
          this.canvasElement = canvasElement;
        },
        width: this.width,
        height: this.height,
        style: {
          display: "none",
          marginTop: "20px",
          maxWidth: "100%",
          backgroundColor: "black",
          border: "1px solid #555" } })),




      palmTemplate && /*#__PURE__*/
      _react.default.createElement(_react.Fragment, null, /*#__PURE__*/
      _react.default.createElement("canvas", {
        ref: canvasElement2 => {
          this.canvasElement2 = canvasElement2;
        },
        width: 128,
        height: 128,
        style: {
          maxWidth: "100%",
          backgroundColor: "black",
          border: "1px solid #555" } }), /*#__PURE__*/


      _react.default.createElement("span", { className: "palm-template" }, palmTemplate), /*#__PURE__*/
      _react.default.createElement("div", { className: "diagram-excerpt-1" }, "We will send this hash to our server to verify you."), /*#__PURE__*/


      _react.default.createElement("div", { className: "diagram-excerpt-1" }, "If you disabled your internet connection, re-enable it first and then tap the button below.")), /*#__PURE__*/






      _react.default.createElement(_MStepper.default, { currentStep: currentStep, totalSteps: totalSteps }), /*#__PURE__*/
      _react.default.createElement("div", { className: "submit-section" },
      !palmTemplate && !enableCamera && /*#__PURE__*/
      _react.default.createElement("input", {
        type: "button",
        value: "Open Camera",
        onClick: this.handleOpenCamera }),


      !palmTemplate && enableCamera && /*#__PURE__*/
      _react.default.createElement("input", {
        type: "button",
        value: "Take Picture",
        onClick: this.handleTakePicture }),


      palmTemplate && !isLogin && !isSettings && /*#__PURE__*/
      _react.default.createElement("input", {
        type: "button",
        value: "Set Palm",
        onClick: () =>
        this.props.handleGoBack("owner", 10, {
          palmItem: { palmTemplate } }) }),




      palmTemplate && isLogin && this.renderLogin(),
      palmTemplate && isSettings && this.renderConfigure(),
      toggleDisplayHow && /*#__PURE__*/
      _react.default.createElement("div", { className: "how", onClick: toggleDisplayHow }, "How does this work?"))));






  }

  renderPalmCard() {
    const { toggleDisplayHow, isSettings, isAdd } = { ...this.props };
    const { currentStep, totalSteps, reConfigure, confirmDelete } = {
      ...this.state };

    if (confirmDelete) {
      return /*#__PURE__*/(
        _react.default.createElement("div", {
          id: "palm-setup",
          className: "card owner1 delete",
          style: { width: "216px" } }, /*#__PURE__*/

        _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "card-title" }, "Palm Login"), /*#__PURE__*/
        _react.default.createElement(_PalmSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("div", { className: "delete-excerpt" }, /*#__PURE__*/
        _react.default.createElement("p", null, "Are you sure you wish to delete this login method?"), /*#__PURE__*/
        _react.default.createElement("p", null, "You will have to re-configure your palm print from scratch if you change your mind")), /*#__PURE__*/




        _react.default.createElement("div", null, /*#__PURE__*/
        _react.default.createElement("input", {
          className: "delete-button",
          style: { width: "210px" },
          type: "button",
          value: "Yes, delete",
          onClick: this.deletePalm }), /*#__PURE__*/

        _react.default.createElement("div", {
          className: "delete-excerpt",
          onClick: () => this.setState({ confirmDelete: false }),
          style: {
            marginTop: "12px",
            cursor: "pointer" } }, "no, take me back"))));







    }
    if (isSettings && !isAdd && !reConfigure) {
      return /*#__PURE__*/(
        _react.default.createElement("div", { id: "palm-setup", className: "card owner1", style: { width: "216px" } }, /*#__PURE__*/
        _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
        _react.default.createElement("div", { className: "card-title" }, "Palm Login"), /*#__PURE__*/
        _react.default.createElement(_PalmSvg.default, null)), /*#__PURE__*/

        _react.default.createElement("div", {
          style: {
            fontSize: "15px",
            color: "rgba(72, 72, 72, 0.77)",
            textAlign: "center",
            fontWeight: "500" } }, "Welcome to your palm print configuration!"), /*#__PURE__*/




        _react.default.createElement(_PalmDiagram.default, null), /*#__PURE__*/
        _react.default.createElement("div", {
          style: {
            fontSize: "15px",
            color: "rgba(72, 72, 72, 0.77)",
            textAlign: "center",
            fontWeight: "500" } }, "Tap below to replace your existing biometric data with a new palm print."), /*#__PURE__*/





        _react.default.createElement("div", null, /*#__PURE__*/
        _react.default.createElement("input", {
          style: { width: "210px" },
          type: "button",
          value: "Re-configure",
          onClick: () => {
            this.setState({ reConfigure: true });
          } }), /*#__PURE__*/

        _react.default.createElement("div", {
          onClick: () => this.setState({ confirmDelete: true }),
          style: {
            color: "#d95868",
            marginTop: "12px",
            fontSize: "15px",
            cursor: "pointer",
            textAlign: "center" } }, "delete this login method"))));







    }
    switch (currentStep) {
      case 1:
        return /*#__PURE__*/(
          _react.default.createElement("div", { id: "palm-setup", className: "card owner1" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-title" }, "Palm Login"), /*#__PURE__*/
          _react.default.createElement(_PalmSvg.default, null)), /*#__PURE__*/

          _react.default.createElement(_PalmHashDiagramSvg.default, null), /*#__PURE__*/
          _react.default.createElement("div", { className: "diagram-excerpt-1" }, "In the following screens, we\u2019ll take a picture of your palm and convert it to a hash password that is specific to you."), /*#__PURE__*/



          _react.default.createElement(_MStepper.default, { currentStep: currentStep, totalSteps: totalSteps }), /*#__PURE__*/
          _react.default.createElement("div", { className: "submit-section" }, /*#__PURE__*/
          _react.default.createElement("input", {
            type: "button",
            value: "Next",
            onClick: () => this.setState({ currentStep: currentStep + 1 }) }),

          toggleDisplayHow && /*#__PURE__*/
          _react.default.createElement("div", { className: "how", onClick: toggleDisplayHow }, "How does this work?"))));






      case 2:
        return /*#__PURE__*/(
          _react.default.createElement("div", { id: "palm-setup", className: "card owner1" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-content" }, /*#__PURE__*/
          _react.default.createElement("div", { className: "card-title" }, "Test it for youself")), /*#__PURE__*/

          _react.default.createElement("div", { className: "diagram-excerpt-1" }, "By storing the picture of your palm locally in your phone, we ensure it doesn't get leaked or stolen. We do this by not uploading it to our servers."), /*#__PURE__*/




          _react.default.createElement("div", { className: "diagram-section-1" }, /*#__PURE__*/
          _react.default.createElement(_NoWifiSvg.default, null), /*#__PURE__*/
          _react.default.createElement("a", { href: "https://www.computerhope.com/issues/ch001957.htm#:~:text=In%20the%20pop%2Dup%20menu,Airplane%20mode%20on%20or%20off." }, /*#__PURE__*/
          _react.default.createElement(_AirplaneModeHelpSvg.default, null))), /*#__PURE__*/


          _react.default.createElement("div", { className: "diagram-excerpt-1" }, "To test this, you may temporarily disable your internet connection or skip this optional step if you trust us to handle your data safely."), /*#__PURE__*/




          _react.default.createElement(_MStepper.default, { currentStep: currentStep, totalSteps: totalSteps }), /*#__PURE__*/
          _react.default.createElement("div", { className: "submit-section" }, /*#__PURE__*/
          _react.default.createElement("input", {
            type: "button",
            value: "Next",
            onClick: () => this.setState({ currentStep: currentStep + 1 }) }),

          toggleDisplayHow && /*#__PURE__*/
          _react.default.createElement("div", { className: "how", onClick: toggleDisplayHow }, "How does this work?"))));






      case 3:
        return this.renderTakePicture();
      case 4:
        return this.renderTakePicture();
      default:
        return /*#__PURE__*/_react.default.createElement(_react.Fragment, null);}

  }

  renderHow() {
    const { isLogin, toggleDisplayHow, isSettings } = { ...this.props };
    const howSection = /*#__PURE__*/
    _react.default.createElement("div", { className: "how-container" }, /*#__PURE__*/
    _react.default.createElement(_HowSvg.default, { loginMethod: "palm" }), /*#__PURE__*/
    _react.default.createElement("div", { className: "sec-excerpt" }, "Palm recognition is a technology that records your unique palm print and utilizes it to login to your account using your device's camera."), /*#__PURE__*/



    _react.default.createElement(_PalmExampleSvg.default, null));


    return isLogin || isSettings ? /*#__PURE__*/
    _react.default.createElement("div", null, /*#__PURE__*/
    _react.default.createElement("div", { className: "card owner1" },
    howSection, /*#__PURE__*/
    _react.default.createElement(_GoBackSvg.default, { color: "#2362c7", goBack: () => toggleDisplayHow() }))) :



    howSection;

  }

  render() {
    const { isDisplayHow } = { ...this.props };
    return !isDisplayHow ? this.renderPalmCard() : this.renderHow();
  }}exports.default = PalmSetup;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3NldHVwL1BhbG1TZXR1cC5qc3giXSwibmFtZXMiOlsicHJvY2VzcyIsImVudiIsIkJST1dTRVIiLCJQYWxtU2V0dXAiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsInByb3BzIiwic2V0dXBDYW1lcmEiLCJzZXRTdGF0ZSIsImVuYWJsZUNhbWVyYSIsImN1cnJlbnRTdGVwIiwic3RhdGUiLCJjdHgxIiwiY2FudmFzRWxlbWVudCIsImdldENvbnRleHQiLCJpbWFnZSIsInZpZGVvRWxlbWVudCIsInN4Iiwic3kiLCJzV2lkdGgiLCJzSGVpZ2h0IiwiZHgiLCJkeSIsImRXaWR0aCIsImRIZWlnaHQiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInN0cmVhbSIsInNyY09iamVjdCIsInRyYWNrcyIsImdldFRyYWNrcyIsImZvckVhY2giLCJ0cmFjayIsInN0b3AiLCJpbWFnZUlucHV0IiwiZ2V0SW1hZ2VEYXRhIiwicGF5bG9hZCIsImN2c2VydmljZSIsImltYWdlUHJvY2Vzc2luZzMiLCJkYXRhIiwiaW1hZ2VEYXRhIiwiaW1nIiwicGFsbVRlbXBsYXRlIiwidGVtcGxhdGUiLCJjdHgyIiwiY2FudmFzRWxlbWVudDIiLCJjYW52YXMiLCJwdXRJbWFnZURhdGEiLCJlIiwicHJldmVudERlZmF1bHQiLCJnb0JhY2siLCJpc0FkZCIsImxvZ2luTWV0aG9kcyIsInNldExvZ2luTWV0aG9kcyIsInVybCIsImF1dGhvcml6YXRpb24iLCJVcmxVdGlsIiwiZ2V0UXVlcnlWYXJpYWJsZSIsImluaXQiLCJtZXRob2QiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiZmV0Y2giLCJwdXNoIiwiZXJyIiwiY29uc29sZSIsImVycm9yIiwiZmlsdGVyIiwibG0iLCJ1bmRlZmluZWQiLCJ0b3RhbFN0ZXBzIiwicmVDb25maWd1cmUiLCJjb21wb25lbnREaWRNb3VudCIsImxvYWQiLCJuYXZpZ2F0b3IiLCJtZWRpYURldmljZXMiLCJnZXRVc2VyTWVkaWEiLCJhdWRpbyIsInZpZGVvIiwiZmFjaW5nTW9kZSIsIlByb21pc2UiLCJyZXNvbHZlIiwib25sb2FkZWRtZXRhZGF0YSIsInBsYXkiLCJlcnJvck1lc3NhZ2UiLCJhbGVydCIsInJlamVjdCIsInJlbmRlckNvbmZpZ3VyZSIsInZlcmlmeUFuZFNhdmUiLCJmb250U2l6ZSIsInJlbmRlckxvZ2luIiwicmVuZGVySGlkZGVuSW5wdXRzIiwicmVuZGVyVGFrZVBpY3R1cmUiLCJpc0xvZ2luIiwidG9nZ2xlRGlzcGxheUhvdyIsImlzU2V0dGluZ3MiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJtYXJnaW5Ub3AiLCJtYXhXaWR0aCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlciIsImhhbmRsZU9wZW5DYW1lcmEiLCJoYW5kbGVUYWtlUGljdHVyZSIsImhhbmRsZUdvQmFjayIsInBhbG1JdGVtIiwicmVuZGVyUGFsbUNhcmQiLCJjb25maXJtRGVsZXRlIiwiZGVsZXRlUGFsbSIsImN1cnNvciIsImNvbG9yIiwidGV4dEFsaWduIiwiZm9udFdlaWdodCIsInJlbmRlckhvdyIsImhvd1NlY3Rpb24iLCJyZW5kZXIiLCJpc0Rpc3BsYXlIb3ciXSwibWFwcGluZ3MiOiJxa0JBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx5RSxDQUpBOztBQU1BLElBQUlBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxPQUFoQixFQUF5QjtBQUN2QjtBQUNEO0FBQ2MsTUFBTUMsU0FBTixTQUF3QkMsZ0JBQXhCLENBQWtDO0FBQzFCO0FBQ0M7QUFDQztBQUNMO0FBQ2xCO0FBQ0E7Ozs7QUFJQUMsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTixDQURpQixrRUFUSixJQVNJLHVEQVJILElBUUcsd0RBUEYsSUFPRSxtREFOUCxJQU1PLCtDQUhY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LElBQVEsV0FBVyxFQUFDLE1BQXBCLEdBREY7QUFFRSwwQ0FBSyxTQUFTLEVBQUMsYUFBZixnSkFGRjs7OztBQU1FLGlDQUFDLHVCQUFELE9BTkYsQ0FERjs7O0FBVUEsV0FBT3JCLE9BQU8sSUFBSUUsVUFBWDtBQUNMO0FBQ0UsMENBQUssU0FBUyxFQUFDLGFBQWY7QUFDR21CLElBQUFBLFVBREg7QUFFRSxpQ0FBQyxrQkFBRCxJQUFXLEtBQUssRUFBQyxTQUFqQixFQUEyQixNQUFNLEVBQUUsTUFBTXBCLGdCQUFnQixFQUF6RCxHQUZGLENBREYsQ0FESzs7OztBQVFMb0IsSUFBQUEsVUFSRjs7QUFVRDs7QUFFREMsRUFBQUEsTUFBTSxHQUFHO0FBQ1AsVUFBTSxFQUFFQyxZQUFGLEtBQW1CLEVBQUUsR0FBRyxLQUFLbEgsS0FBVixFQUF6QjtBQUNBLFdBQU8sQ0FBQ2tILFlBQUQsR0FBZ0IsS0FBS1YsY0FBTCxFQUFoQixHQUF3QyxLQUFLTyxTQUFMLEVBQS9DO0FBQ0QsR0EzZ0I4QyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBQYWxtRGV0ZWN0ZWRTdmcgZnJvbSBcIi4uL3N2Zy9QYWxtRGV0ZWN0ZWRTdmdcIjtcbmltcG9ydCBQYWxtTm90RGV0ZWN0ZWRTdmcgZnJvbSBcIi4uL3N2Zy9QYWxtTm90RGV0ZWN0ZWRTdmdcIjtcbmltcG9ydCBIb3dTdmcgZnJvbSBcIi4uL3N2Zy9Ib3dTdmdcIjtcbmltcG9ydCBQYWxtRXhhbXBsZVN2ZyBmcm9tIFwiLi4vc3ZnL1BhbG1FeGFtcGxlU3ZnXCI7XG5pbXBvcnQgTVN0ZXBwZXIgZnJvbSBcIi4uL2NvbW1vbi9NU3RlcHBlclwiO1xuaW1wb3J0IFBhbG1IYXNoRGlhZ3JhbVN2ZyBmcm9tIFwiLi4vc3ZnL1BhbG1IYXNoRGlhZ3JhbVN2Z1wiO1xuaW1wb3J0IFBhbG1TdmcgZnJvbSBcIi4uL3N2Zy9QYWxtU3ZnXCI7XG5pbXBvcnQgTm9XaWZpU3ZnIGZyb20gXCIuLi9zdmcvTm9XaWZpU3ZnXCI7XG5pbXBvcnQgQWlycGxhbmVNb2RlSGVscFN2ZyBmcm9tIFwiLi4vc3ZnL0FpcnBsYW5lTW9kZUhlbHBTdmdcIjtcbmltcG9ydCBkZWxheSBmcm9tIFwiLi4vLi4vdXRpbC9kZWxheVwiO1xuLy8gaW1wb3J0IHRlbXBsYXRlU2FtcGxlIGZyb20gXCIuLi8uLi8uLi8uLi9wYWxtTGluZXMuanNvblwiO1xuaW1wb3J0IEdvQmFja1N2ZyBmcm9tIFwiLi4vc3ZnL0dvQmFja1N2Z1wiO1xuaW1wb3J0IGN2c2VydmljZSBmcm9tIFwiLi4vLi4vc2VydmljZXMvQ3ZTZXJ2aWNlXCI7XG5pbXBvcnQgVXJsVXRpbCBmcm9tIFwiLi4vLi4vdXRpbC91cmwtdXRpbFwiO1xuaW1wb3J0IFBhbG1EaWFncmFtU3ZnIGZyb20gXCIuLi9zdmcvUGFsbURpYWdyYW1cIjtcblxuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgaW1wb3J0KFwiLi9QYWxtU2V0dXAuc2Nzc1wiKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbG1TZXR1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHZpZGVvRWxlbWVudCA9IG51bGw7IC8vIHRoZSB3ZWJjYW0gcmVmXG4gIGNhbnZhc0VsZW1lbnQgPSBudWxsOyAvLyB0aGUgb3JpZ2luYWwgc25hcHNob3QgcmVmXG4gIGNhbnZhc0VsZW1lbnQyID0gbnVsbDsgLy8gdGhlIHByb2Nlc3NlZCBzbmFwc2hvdCByZWZcbiAgaW1hZ2VEYXRhID0gbnVsbDsgLy8gdGhlIHRlbXBsYXRlIHBhbG0gaW1hZ2UgZGF0YVxuICAvLyB0aGlzLndpZHRoID0gMjA0O1xuICAvLyB0aGlzLmhlaWdodCA9IDMxNDtcbiAgd2lkdGggPSA0NjcuNzc7XG4gIGhlaWdodCA9IDcyMDtcblxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICAvLyBjb25zdCBwYWxtVGVtcGxhdGUgPSBwcm9wcy5wYWxtSXRlbVxuICAgIC8vICAgPyBwcm9wcy5wYWxtSXRlbS5wYWxtVGVtcGxhdGVcbiAgICAvLyAgIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBwYWxtVGVtcGxhdGU6IHVuZGVmaW5lZCxcbiAgICAgIGN1cnJlbnRTdGVwOiAxLFxuICAgICAgLy8gY3VycmVudFN0ZXA6IDMsXG4gICAgICB0b3RhbFN0ZXBzOiA0LFxuICAgICAgcmVDb25maWd1cmU6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIGFzeW5jIGxvYWQoKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgICAgIGF3YWl0IGN2c2VydmljZS5sb2FkKCk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlT3BlbkNhbWVyYSA9ICgpID0+IHtcbiAgICB0aGlzLnNldHVwQ2FtZXJhKCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGVuYWJsZUNhbWVyYTogdHJ1ZSB9KTtcbiAgfTtcblxuICBoYW5kbGVUYWtlUGljdHVyZSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IGN1cnJlbnRTdGVwIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICAvLyBUT0RPOlxuICAgIC8vIDEpIGFkZCBwYWxtIG92ZXJsYXkgZm9yIGRlc2lyZWQgUk9JIG9mIHBhbG1cbiAgICAvLyAyKSBhZGQgY2FudmFzIG92ZXIgaGVyZSwgc2VuZCBiYWNrIFJPSSBvZiBwYWxtIHRvIGNhbnZhc1xuICAgIC8vIDMpIHJ1biBob3VnaGxpbmUgY29kZSBodHRwczovL2Fuc3dlcnMub3BlbmN2Lm9yZy9xdWVzdGlvbi8yMTg3NzQvaG93LXRvLWV4dHJhY3QtcGFsbS1saW5lcy9cbiAgICB0aGlzLmN0eDEgPSB0aGlzLmNhbnZhc0VsZW1lbnQuZ2V0Q29udGV4dChcIjJkXCIpO1xuICAgIGNvbnN0IGltYWdlID0gdGhpcy52aWRlb0VsZW1lbnQ7IC8vIEFuIGVsZW1lbnQgdG8gZHJhdyBpbnRvIHRoZSBjb250ZXh0LlxuICAgIGNvbnN0IHN4ID0gNDA7IC8vIFRoZSB4LWF4aXMgY29vcmRpbmF0ZSBvZiB0aGUgdG9wIGxlZnQgY29ybmVyIG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxuICAgIGNvbnN0IHN5ID0gMTAwOyAvLyBUaGUgeS1heGlzIGNvb3JkaW5hdGUgb2YgdGhlIHRvcCBsZWZ0IGNvcm5lciBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC5cbiAgICBjb25zdCBzV2lkdGggPSAxMjg7IC8vIFRoZSB3aWR0aCBvZiB0aGUgc3ViLXJlY3RhbmdsZSBvZiB0aGUgc291cmNlIGltYWdlIHRvIGRyYXcgaW50byB0aGUgZGVzdGluYXRpb24gY29udGV4dC4gSWYgbm90IHNwZWNpZmllZCwgdGhlIGVudGlyZSByZWN0YW5nbGUgZnJvbSB0aGUgY29vcmRpbmF0ZXMgc3BlY2lmaWVkIGJ5IHN4IGFuZCBzeSB0byB0aGUgYm90dG9tLXJpZ2h0IGNvcm5lciBvZiB0aGUgaW1hZ2UgaXMgdXNlZC5cbiAgICBjb25zdCBzSGVpZ2h0ID0gMTI4OyAvLyBUaGUgaGVpZ2h0IG9mIHRoZSBzdWItcmVjdGFuZ2xlIG9mIHRoZSBzb3VyY2UgaW1hZ2UgdG8gZHJhdyBpbnRvIHRoZSBkZXN0aW5hdGlvbiBjb250ZXh0LlxuICAgIGNvbnN0IGR4ID0gMDsgLy8gVGhlIHgtYXhpcyBjb29yZGluYXRlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMgYXQgd2hpY2ggdG8gcGxhY2UgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgc291cmNlIGltYWdlLlxuICAgIGNvbnN0IGR5ID0gMDsgLy8gVGhlIHktYXhpcyBjb29yZGluYXRlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMgYXQgd2hpY2ggdG8gcGxhY2UgdGhlIHRvcC1sZWZ0IGNvcm5lciBvZiB0aGUgc291cmNlIGltYWdlLlxuICAgIGNvbnN0IGRXaWR0aCA9IDEyODsgLy8gVGhlIHdpZHRoIHRvIGRyYXcgdGhlIGltYWdlIGluIHRoZSBkZXN0aW5hdGlvbiBjYW52YXMuIFRoaXMgYWxsb3dzIHNjYWxpbmcgb2YgdGhlIGRyYXduIGltYWdlLiBJZiBub3Qgc3BlY2lmaWVkLCB0aGUgaW1hZ2UgaXMgbm90IHNjYWxlZCBpbiB3aWR0aCB3aGVuIGRyYXduLlxuICAgIGNvbnN0IGRIZWlnaHQgPSAxMjg7IC8vIFRoZSBoZWlnaHQgdG8gZHJhdyB0aGUgaW1hZ2UgaW4gdGhlIGRlc3RpbmF0aW9uIGNhbnZhcy4gVGhpcyBhbGxvd3Mgc2NhbGluZyBvZiB0aGUgZHJhd24gaW1hZ2UuIElmIG5vdCBzcGVjaWZpZWQsIHRoZSBpbWFnZSBpcyBub3Qgc2NhbGVkIGluIGhlaWdodCB3aGVuIGRyYXduLlxuICAgIC8vIHRoaXMuY3R4MS5kcmF3SW1hZ2UoaW1hZ2UsIHN4LCBzeSwgc1dpZHRoLCBzSGVpZ2h0LCBkeCwgZHksIGRXaWR0aCwgZEhlaWdodCk7XG4gICAgdGhpcy5jdHgxLmRyYXdJbWFnZShcbiAgICAgIGltYWdlLFxuICAgICAgMCxcbiAgICAgIDAsXG4gICAgICB0aGlzLndpZHRoLFxuICAgICAgdGhpcy5oZWlnaHQsXG4gICAgICAwLFxuICAgICAgMCxcbiAgICAgIHRoaXMud2lkdGgsXG4gICAgICB0aGlzLmhlaWdodFxuICAgICk7XG4gICAgLy8gVHVybnMgb2ZmIHdlYmNhbVxuICAgIGNvbnN0IHN0cmVhbSA9IHRoaXMudmlkZW9FbGVtZW50LnNyY09iamVjdDtcbiAgICBjb25zdCB0cmFja3MgPSBzdHJlYW0uZ2V0VHJhY2tzKCk7XG4gICAgdHJhY2tzLmZvckVhY2goKHRyYWNrKSA9PiB0cmFjay5zdG9wKCkpO1xuICAgIHRoaXMudmlkZW9FbGVtZW50LnNyY09iamVjdCA9IG51bGw7XG5cbiAgICBjb25zdCBpbWFnZUlucHV0ID0gdGhpcy5jdHgxLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgY29uc3QgcGF5bG9hZCA9IChhd2FpdCBjdnNlcnZpY2UuaW1hZ2VQcm9jZXNzaW5nMyhpbWFnZUlucHV0KSkuZGF0YS5wYXlsb2FkO1xuICAgIHRoaXMuaW1hZ2VEYXRhID0gcGF5bG9hZC5pbWc7XG5cbiAgICAvLyBjb25zdCBjdHgyID0gdGhpcy5jYW52YXNFbGVtZW50Mi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gY3R4Mi5jYW52YXMud2lkdGggPSAxMjg7XG4gICAgLy8gY3R4Mi5jYW52YXMuaGVpZ2h0ID0gMTI4O1xuICAgIC8vIGN0eDIucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcblxuICAgIC8vIGxldCBwYWxtVGVtcGxhdGUgPSBcIlwiO1xuICAgIC8vIHRlbXBsYXRlU2FtcGxlLmZvckVhY2goKGRhdGFQb2ludCkgPT4ge1xuICAgIC8vICAgcGFsbVRlbXBsYXRlICs9IGRhdGFQb2ludC50b1N0cmluZygpO1xuICAgIC8vIH0pO1xuICAgIGNvbnN0IHBhbG1UZW1wbGF0ZSA9IHBheWxvYWQudGVtcGxhdGU7XG5cbiAgICB0aGlzLnNldFN0YXRlKFxuICAgICAge1xuICAgICAgICBwYWxtVGVtcGxhdGUsXG4gICAgICAgIGVuYWJsZUNhbWVyYTogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCArIDEsXG4gICAgICB9LFxuICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBkZWxheSg1MCk7IC8vIGVub3VnaCB0aW1lIGZvciByZWFjdCB0byByZW5kZXIgdGhlIGNhbnZhcyBlbGVtZW50LlxuICAgICAgICBjb25zdCBjdHgyID0gdGhpcy5jYW52YXNFbGVtZW50Mi5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgICAgIGN0eDIuY2FudmFzLndpZHRoID0gMTI4O1xuICAgICAgICBjdHgyLmNhbnZhcy5oZWlnaHQgPSAxMjg7XG4gICAgICAgIGN0eDIucHV0SW1hZ2VEYXRhKHRoaXMuaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICAgIH1cbiAgICApO1xuICB9O1xuXG4gIGFzeW5jIHNldHVwQ2FtZXJhKCkge1xuICAgIC8vIFR1cm5zIG9uIHdlYmNhbVxuICAgIGF3YWl0IGRlbGF5KDUwKTsgLy8gZW5vdWdoIHRpbWUgZm9yIHJlYWN0IHRvIHJlbmRlciB0aGUgdmlkZW8gZWxlbWVudC5cbiAgICB0aGlzLnZpZGVvRWxlbWVudC53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy52aWRlb0VsZW1lbnQuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG5cbiAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgZmFjaW5nTW9kZTogXCJ1c2VyXCIsXG4gICAgICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgdGhpcy52aWRlb0VsZW1lbnQuc3JjT2JqZWN0ID0gc3RyZWFtO1xuXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQub25sb2FkZWRtZXRhZGF0YSA9ICgpID0+IHtcbiAgICAgICAgICB0aGlzLnZpZGVvRWxlbWVudC5wbGF5KCk7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLnZpZGVvRWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgIFwiVGhpcyBicm93c2VyIGRvZXMgbm90IHN1cHBvcnQgdmlkZW8gY2FwdHVyZSwgb3IgdGhpcyBkZXZpY2UgZG9lcyBub3QgaGF2ZSBhIGNhbWVyYVwiO1xuICAgIGFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yTWVzc2FnZSk7XG4gIH1cblxuICB2ZXJpZnlBbmRTYXZlID0gYXN5bmMgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBnb0JhY2ssIGlzQWRkLCBsb2dpbk1ldGhvZHMsIHNldExvZ2luTWV0aG9kcyB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgY29uc3QgeyBwYWxtVGVtcGxhdGUgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW4tbWV0aG9kc1wiO1xuICAgICAgY29uc3QgYXV0aG9yaXphdGlvbiA9IFVybFV0aWwuZ2V0UXVlcnlWYXJpYWJsZShcImFjY2Vzc190b2tlblwiKTtcbiAgICAgIGNvbnN0IGluaXQgPSB7XG4gICAgICAgIG1ldGhvZDogaXNBZGQgPyBcIlBPU1RcIiA6IFwiUFVUXCIsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7YXV0aG9yaXphdGlvbn1gLFxuICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IHBhbG1UZW1wbGF0ZTogSlNPTi5zdHJpbmdpZnkocGFsbVRlbXBsYXRlKSB9KSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgICAgaWYgKGlzQWRkKSB7XG4gICAgICAgIGxvZ2luTWV0aG9kcy5wdXNoKFwiUGFsbUxvZ2luVHlwZVwiKTtcbiAgICAgICAgc2V0TG9naW5NZXRob2RzKGxvZ2luTWV0aG9kcyk7XG4gICAgICB9XG4gICAgICBnb0JhY2soKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgZGVsZXRlUGFsbSA9IGFzeW5jICgpID0+IHtcbiAgICBjb25zdCB7IHNldExvZ2luTWV0aG9kcywgZ29CYWNrIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBsZXQgeyBsb2dpbk1ldGhvZHMgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1cmwgPSBcIi9hcGkvbG9naW4tbWV0aG9kcy9QYWxtTG9naW5UeXBlXCI7XG4gICAgICBjb25zdCBhdXRob3JpemF0aW9uID0gVXJsVXRpbC5nZXRRdWVyeVZhcmlhYmxlKFwiYWNjZXNzX3Rva2VuXCIpO1xuICAgICAgY29uc3QgaW5pdCA9IHtcbiAgICAgICAgbWV0aG9kOiBcIkRFTEVURVwiLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke2F1dGhvcml6YXRpb259YCxcbiAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgICBhd2FpdCBmZXRjaCh1cmwsIGluaXQpO1xuICAgICAgbG9naW5NZXRob2RzID0gbG9naW5NZXRob2RzLmZpbHRlcihsbSA9PiBsbSAhPT0gXCJQYWxtTG9naW5UeXBlXCIpO1xuICAgICAgc2V0TG9naW5NZXRob2RzKGxvZ2luTWV0aG9kcyk7XG4gICAgICBnb0JhY2soKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICB9XG4gIH07XG5cbiAgcmVuZGVyQ29uZmlndXJlKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy52ZXJpZnlBbmRTYXZlfT5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiwgZm9udFNpemU6IFwiMjJweFwiIH19XG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgdmFsdWU9XCJWZXJpZnkgYW5kIFNhdmVcIlxuICAgICAgICAvPlxuICAgICAgPC9mb3JtPlxuICAgICk7XG4gIH1cblxuICByZW5kZXJMb2dpbigpIHtcbiAgICBjb25zdCB7IHJlbmRlckhpZGRlbklucHV0cyB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgY29uc3QgeyBwYWxtVGVtcGxhdGUgfSA9IHsgLi4udGhpcy5zdGF0ZSB9O1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9ybSBtZXRob2Q9XCJQT1NUXCIgYWN0aW9uPVwiL2F1dGhvcml6ZVwiPlxuICAgICAgICA8aW5wdXQgbmFtZT1cInBhbG1UZW1wbGF0ZVwiIHR5cGU9XCJoaWRkZW5cIiB2YWx1ZT17cGFsbVRlbXBsYXRlfSAvPlxuICAgICAgICB7cmVuZGVySGlkZGVuSW5wdXRzKCl9XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIsIGZvbnRTaXplOiBcIjIycHhcIiB9fVxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIHZhbHVlPVwiVmVyaWZ5IGFuZCBMb2dpblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclRha2VQaWN0dXJlKCkge1xuICAgIGNvbnN0IHsgaXNMb2dpbiwgdG9nZ2xlRGlzcGxheUhvdywgaXNTZXR0aW5ncyB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgY29uc3QgeyBwYWxtVGVtcGxhdGUsIGN1cnJlbnRTdGVwLCBlbmFibGVDYW1lcmEsIHRvdGFsU3RlcHMgfSA9IHtcbiAgICAgIC4uLnRoaXMuc3RhdGUsXG4gICAgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBpZD1cInBhbG0tc2V0dXBcIiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlBhbG0gTG9naW48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImV4Y2VycHRcIj5cbiAgICAgICAgICAgIHshcGFsbVRlbXBsYXRlICYmIFwiUGxlYXNlIHVzZSB5b3VyIGNhbWVyYSB0byByZWdpc3RlciB5b3VyIHBhbG1cIn1cbiAgICAgICAgICAgIHtwYWxtVGVtcGxhdGUgJiZcbiAgICAgICAgICAgICAgXCJHcmVhdCEgSGVyZeKAmXMgdGhlIGhhc2ggdGhhdCB3YXMgY3JlYXRlZCBmcm9tIHlvdXIgcGFsbSBwcmludDpcIn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgeyFwYWxtVGVtcGxhdGUgJiYgIWVuYWJsZUNhbWVyYSAmJiAoXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxQYWxtTm90RGV0ZWN0ZWRTdmcgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgICAgeyFwYWxtVGVtcGxhdGUgJiYgZW5hYmxlQ2FtZXJhICYmIChcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbG0tb3ZlcmxheVwiPlxuICAgICAgICAgICAgICA8UGFsbUV4YW1wbGVTdmcgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHZpZGVvXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvXCJcbiAgICAgICAgICAgICAgcGxheXNJbmxpbmVcbiAgICAgICAgICAgICAgcmVmPXsodmlkZW9FbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSB2aWRlb0VsZW1lbnQ7XG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICByZWY9eyhjYW52YXNFbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50ID0gY2FudmFzRWxlbWVudDtcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgd2lkdGg9e3RoaXMud2lkdGh9XG4gICAgICAgICAgICAgIGhlaWdodD17dGhpcy5oZWlnaHR9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogXCJub25lXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNTU1XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgICB7cGFsbVRlbXBsYXRlICYmIChcbiAgICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgICA8Y2FudmFzXG4gICAgICAgICAgICAgIHJlZj17KGNhbnZhc0VsZW1lbnQyKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jYW52YXNFbGVtZW50MiA9IGNhbnZhc0VsZW1lbnQyO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICB3aWR0aD17MTI4fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezEyOH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBcIjFweCBzb2xpZCAjNTU1XCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicGFsbS10ZW1wbGF0ZVwiPntwYWxtVGVtcGxhdGV9PC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFncmFtLWV4Y2VycHQtMVwiPlxuICAgICAgICAgICAgICBXZSB3aWxsIHNlbmQgdGhpcyBoYXNoIHRvIG91ciBzZXJ2ZXIgdG8gdmVyaWZ5IHlvdS5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFncmFtLWV4Y2VycHQtMVwiPlxuICAgICAgICAgICAgICBJZiB5b3UgZGlzYWJsZWQgeW91ciBpbnRlcm5ldCBjb25uZWN0aW9uLCByZS1lbmFibGUgaXQgZmlyc3QgYW5kXG4gICAgICAgICAgICAgIHRoZW4gdGFwIHRoZSBidXR0b24gYmVsb3cuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHsvKiA8UGFsbURldGVjdGVkU3ZnIC8+ICovfVxuICAgICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICAgICl9XG4gICAgICAgIDxNU3RlcHBlciBjdXJyZW50U3RlcD17Y3VycmVudFN0ZXB9IHRvdGFsU3RlcHM9e3RvdGFsU3RlcHN9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3VibWl0LXNlY3Rpb25cIj5cbiAgICAgICAgICB7IXBhbG1UZW1wbGF0ZSAmJiAhZW5hYmxlQ2FtZXJhICYmIChcbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJPcGVuIENhbWVyYVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlT3BlbkNhbWVyYX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7IXBhbG1UZW1wbGF0ZSAmJiBlbmFibGVDYW1lcmEgJiYgKFxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICB2YWx1ZT1cIlRha2UgUGljdHVyZVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlVGFrZVBpY3R1cmV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3BhbG1UZW1wbGF0ZSAmJiAhaXNMb2dpbiAmJiAhaXNTZXR0aW5ncyAmJiAoXG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiU2V0IFBhbG1cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxuICAgICAgICAgICAgICAgIHRoaXMucHJvcHMuaGFuZGxlR29CYWNrKFwib3duZXJcIiwgMTAsIHtcbiAgICAgICAgICAgICAgICAgIHBhbG1JdGVtOiB7IHBhbG1UZW1wbGF0ZSB9LFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7cGFsbVRlbXBsYXRlICYmIGlzTG9naW4gJiYgdGhpcy5yZW5kZXJMb2dpbigpfVxuICAgICAgICAgIHtwYWxtVGVtcGxhdGUgJiYgaXNTZXR0aW5ncyAmJiB0aGlzLnJlbmRlckNvbmZpZ3VyZSgpfVxuICAgICAgICAgIHt0b2dnbGVEaXNwbGF5SG93ICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaG93XCIgb25DbGljaz17dG9nZ2xlRGlzcGxheUhvd30+XG4gICAgICAgICAgICAgIEhvdyBkb2VzIHRoaXMgd29yaz9cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIHJlbmRlclBhbG1DYXJkKCkge1xuICAgIGNvbnN0IHsgdG9nZ2xlRGlzcGxheUhvdywgaXNTZXR0aW5ncywgaXNBZGQgfSA9IHsgLi4udGhpcy5wcm9wcyB9O1xuICAgIGNvbnN0IHsgY3VycmVudFN0ZXAsIHRvdGFsU3RlcHMsIHJlQ29uZmlndXJlLCBjb25maXJtRGVsZXRlIH0gPSB7XG4gICAgICAuLi50aGlzLnN0YXRlLFxuICAgIH07XG4gICAgaWYgKGNvbmZpcm1EZWxldGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXZcbiAgICAgICAgICBpZD1cInBhbG0tc2V0dXBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImNhcmQgb3duZXIxIGRlbGV0ZVwiXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjE2cHhcIiB9fVxuICAgICAgICA+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPlBhbG0gTG9naW48L2Rpdj5cbiAgICAgICAgICAgIDxQYWxtU3ZnIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkZWxldGUtZXhjZXJwdFwiPlxuICAgICAgICAgICAgPHA+QXJlIHlvdSBzdXJlIHlvdSB3aXNoIHRvIGRlbGV0ZSB0aGlzIGxvZ2luIG1ldGhvZD88L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgWW91IHdpbGwgaGF2ZSB0byByZS1jb25maWd1cmUgeW91ciBwYWxtIHByaW50IGZyb20gc2NyYXRjaCBpZiB5b3VcbiAgICAgICAgICAgICAgY2hhbmdlIHlvdXIgbWluZFxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZGVsZXRlLWJ1dHRvblwiXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjIxMHB4XCIgfX1cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIHZhbHVlPVwiWWVzLCBkZWxldGVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmRlbGV0ZVBhbG19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJkZWxldGUtZXhjZXJwdFwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjb25maXJtRGVsZXRlOiBmYWxzZSB9KX1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIG5vLCB0YWtlIG1lIGJhY2tcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIGlmIChpc1NldHRpbmdzICYmICFpc0FkZCAmJiAhcmVDb25maWd1cmUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgaWQ9XCJwYWxtLXNldHVwXCIgY2xhc3NOYW1lPVwiY2FyZCBvd25lcjFcIiBzdHlsZT17eyB3aWR0aDogXCIyMTZweFwiIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1jb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5QYWxtIExvZ2luPC9kaXY+XG4gICAgICAgICAgICA8UGFsbVN2ZyAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgIGZvbnRTaXplOiBcIjE1cHhcIixcbiAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg3MiwgNzIsIDcyLCAwLjc3KVwiLFxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiNTAwXCIsXG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFdlbGNvbWUgdG8geW91ciBwYWxtIHByaW50IGNvbmZpZ3VyYXRpb24hXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFBhbG1EaWFncmFtU3ZnIC8+XG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDcyLCA3MiwgNzIsIDAuNzcpXCIsXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgZm9udFdlaWdodDogXCI1MDBcIixcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgVGFwIGJlbG93IHRvIHJlcGxhY2UgeW91ciBleGlzdGluZyBiaW9tZXRyaWMgZGF0YSB3aXRoIGEgbmV3IHBhbG1cbiAgICAgICAgICAgIHByaW50LlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMjEwcHhcIiB9fVxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgdmFsdWU9XCJSZS1jb25maWd1cmVcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHJlQ29uZmlndXJlOiB0cnVlIH0pO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGNvbmZpcm1EZWxldGU6IHRydWUgfSl9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwiI2Q5NTg2OFwiLFxuICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMnB4XCIsXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTVweFwiLFxuICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBkZWxldGUgdGhpcyBsb2dpbiBtZXRob2RcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICk7XG4gICAgfVxuICAgIHN3aXRjaCAoY3VycmVudFN0ZXApIHtcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGlkPVwicGFsbS1zZXR1cFwiIGNsYXNzTmFtZT1cImNhcmQgb3duZXIxXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5QYWxtIExvZ2luPC9kaXY+XG4gICAgICAgICAgICAgIDxQYWxtU3ZnIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxQYWxtSGFzaERpYWdyYW1TdmcgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlhZ3JhbS1leGNlcnB0LTFcIj5cbiAgICAgICAgICAgICAgSW4gdGhlIGZvbGxvd2luZyBzY3JlZW5zLCB3ZeKAmWxsIHRha2UgYSBwaWN0dXJlIG9mIHlvdXIgcGFsbSBhbmRcbiAgICAgICAgICAgICAgY29udmVydCBpdCB0byBhIGhhc2ggcGFzc3dvcmQgdGhhdCBpcyBzcGVjaWZpYyB0byB5b3UuXG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxNU3RlcHBlciBjdXJyZW50U3RlcD17Y3VycmVudFN0ZXB9IHRvdGFsU3RlcHM9e3RvdGFsU3RlcHN9IC8+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1Ym1pdC1zZWN0aW9uXCI+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIHZhbHVlPVwiTmV4dFwiXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5zZXRTdGF0ZSh7IGN1cnJlbnRTdGVwOiBjdXJyZW50U3RlcCArIDEgfSl9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt0b2dnbGVEaXNwbGF5SG93ICYmIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvd1wiIG9uQ2xpY2s9e3RvZ2dsZURpc3BsYXlIb3d9PlxuICAgICAgICAgICAgICAgICAgSG93IGRvZXMgdGhpcyB3b3JrP1xuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGRpdiBpZD1cInBhbG0tc2V0dXBcIiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+VGVzdCBpdCBmb3IgeW91c2VsZjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImRpYWdyYW0tZXhjZXJwdC0xXCI+XG4gICAgICAgICAgICAgIEJ5IHN0b3JpbmcgdGhlIHBpY3R1cmUgb2YgeW91ciBwYWxtIGxvY2FsbHkgaW4geW91ciBwaG9uZSwgd2VcbiAgICAgICAgICAgICAgZW5zdXJlIGl0IGRvZXNuJ3QgZ2V0IGxlYWtlZCBvciBzdG9sZW4uIFdlIGRvIHRoaXMgYnkgbm90XG4gICAgICAgICAgICAgIHVwbG9hZGluZyBpdCB0byBvdXIgc2VydmVycy5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFncmFtLXNlY3Rpb24tMVwiPlxuICAgICAgICAgICAgICA8Tm9XaWZpU3ZnIC8+XG4gICAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5jb21wdXRlcmhvcGUuY29tL2lzc3Vlcy9jaDAwMTk1Ny5odG0jOn46dGV4dD1JbiUyMHRoZSUyMHBvcCUyRHVwJTIwbWVudSxBaXJwbGFuZSUyMG1vZGUlMjBvbiUyMG9yJTIwb2ZmLlwiPlxuICAgICAgICAgICAgICAgIDxBaXJwbGFuZU1vZGVIZWxwU3ZnIC8+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkaWFncmFtLWV4Y2VycHQtMVwiPlxuICAgICAgICAgICAgICBUbyB0ZXN0IHRoaXMsIHlvdSBtYXkgdGVtcG9yYXJpbHkgZGlzYWJsZSB5b3VyIGludGVybmV0IGNvbm5lY3Rpb25cbiAgICAgICAgICAgICAgb3Igc2tpcCB0aGlzIG9wdGlvbmFsIHN0ZXAgaWYgeW91IHRydXN0IHVzIHRvIGhhbmRsZSB5b3VyIGRhdGFcbiAgICAgICAgICAgICAgc2FmZWx5LlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8TVN0ZXBwZXIgY3VycmVudFN0ZXA9e2N1cnJlbnRTdGVwfSB0b3RhbFN0ZXBzPXt0b3RhbFN0ZXBzfSAvPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJtaXQtc2VjdGlvblwiPlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIk5leHRcIlxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHRoaXMuc2V0U3RhdGUoeyBjdXJyZW50U3RlcDogY3VycmVudFN0ZXAgKyAxIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dG9nZ2xlRGlzcGxheUhvdyAmJiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3dcIiBvbkNsaWNrPXt0b2dnbGVEaXNwbGF5SG93fT5cbiAgICAgICAgICAgICAgICAgIEhvdyBkb2VzIHRoaXMgd29yaz9cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApO1xuICAgICAgY2FzZSAzOlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWtlUGljdHVyZSgpO1xuICAgICAgY2FzZSA0OlxuICAgICAgICByZXR1cm4gdGhpcy5yZW5kZXJUYWtlUGljdHVyZSgpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIDxGcmFnbWVudCAvPjtcbiAgICB9XG4gIH1cblxuICByZW5kZXJIb3coKSB7XG4gICAgY29uc3QgeyBpc0xvZ2luLCB0b2dnbGVEaXNwbGF5SG93LCBpc1NldHRpbmdzIH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICBjb25zdCBob3dTZWN0aW9uID0gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJob3ctY29udGFpbmVyXCI+XG4gICAgICAgIDxIb3dTdmcgbG9naW5NZXRob2Q9XCJwYWxtXCIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWMtZXhjZXJwdFwiPlxuICAgICAgICAgIFBhbG0gcmVjb2duaXRpb24gaXMgYSB0ZWNobm9sb2d5IHRoYXQgcmVjb3JkcyB5b3VyIHVuaXF1ZSBwYWxtIHByaW50XG4gICAgICAgICAgYW5kIHV0aWxpemVzIGl0IHRvIGxvZ2luIHRvIHlvdXIgYWNjb3VudCB1c2luZyB5b3VyIGRldmljZSdzIGNhbWVyYS5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxQYWxtRXhhbXBsZVN2ZyAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgICByZXR1cm4gaXNMb2dpbiB8fCBpc1NldHRpbmdzID8gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG93bmVyMVwiPlxuICAgICAgICAgIHtob3dTZWN0aW9ufVxuICAgICAgICAgIDxHb0JhY2tTdmcgY29sb3I9XCIjMjM2MmM3XCIgZ29CYWNrPXsoKSA9PiB0b2dnbGVEaXNwbGF5SG93KCl9IC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKSA6IChcbiAgICAgIGhvd1NlY3Rpb25cbiAgICApO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgaXNEaXNwbGF5SG93IH0gPSB7IC4uLnRoaXMucHJvcHMgfTtcbiAgICByZXR1cm4gIWlzRGlzcGxheUhvdyA/IHRoaXMucmVuZGVyUGFsbUNhcmQoKSA6IHRoaXMucmVuZGVySG93KCk7XG4gIH1cbn1cbiJdfQ==