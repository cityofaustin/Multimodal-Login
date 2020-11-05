"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _react = _interopRequireWildcard(require("react"));
var PropTypes = _interopRequireWildcard(require("prop-types"));
var _CvService = _interopRequireDefault(require("../services/CvService"));
var _exampleWorker = _interopRequireDefault(require("../workers/example.worker.js"));

// if (process.env.BROWSER) {

// import('../workers/opencv-4-3-0.js').then((rawModule) => {
//   eval.call(null, rawModule.default);
//   cv['onRuntimeInitialized'] = () => {
//     let mat = new cv.Mat();
//     console.log(mat.size());
//     mat.delete();
//   };
// });

const runWorker = /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* () {
    const worker = new _exampleWorker.default();
    const message = yield new Promise((resolve, reject) => {
      worker.addEventListener('message', event => resolve(event.data), false);
      worker.addEventListener('error', reject, false);
    });
    return message;
  });return function runWorker() {return _ref.apply(this, arguments);};}();

// ref: https://aralroca.com/blog/opencv-in-the-web
// We'll limit the processing size to 200px.
const maxVideoSize = 200;

class WebCameraShapshot extends _react.Component {
  constructor(props) {var _this;
    super(props);_this = this;(0, _defineProperty2.default)(this, "onClick", /*#__PURE__*/(0, _asyncToGenerator2.default)(












































































































    function* () {
      // debugger;

      const { handleSnapshot } = { ..._this.props };
      _this.setState({ processing: true });

      const ctx = _this.canvasEl.getContext('2d');
      ctx.canvas.width = maxVideoSize;
      ctx.canvas.height = maxVideoSize;
      ctx.drawImage(_this.videoElement, 0, 0, maxVideoSize, maxVideoSize);
      const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize);
      // const keyPair = await runWorker();
      // console.log(keyPair);
      // console.log("!");
      // Load the model
      // console.log("!");

      // Processing image
      const processedImage = yield _CvService.default.imageProcessing(image);
      // debugger;
      // Render the processed image to the canvas
      const imageData = processedImage.data.payload;
      ctx.canvas.width = imageData.width;
      ctx.canvas.height = imageData.height;
      ctx.putImageData(imageData, 0, 0);
      const getCanvasBlob = canvas => {
        return new Promise((resolve, reject) => {
          return canvas.toBlob(blob => {
            return resolve(blob);
          });
        });
      };
      const blob = yield getCanvasBlob(ctx.canvas);
      handleSnapshot(blob);
      _this.setState({ processing: false });
    }));this.videoElement = null;this.canvasEl = null;this.state = { processing: false };}componentDidMount() {this.load();}componentWillUnmount() {// Turns off webcam
    const stream = this.videoElement.srcObject;const tracks = stream.getTracks();tracks.forEach(function (track) {track.stop();});this.videoElement.srcObject = null;}load() {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {const videoLoaded = yield _this2.setupCamera();yield _CvService.default.load();videoLoaded.addEventListener('play', () => {_this2.timerCallback();}, false);videoLoaded.play();return videoLoaded;})();}timerCallback() {if (this.videoElement.paused || this.videoElement.ended) {return;}this.computeFrame();let self = this;setTimeout(function () {self.timerCallback();}, 1000);}computeFrame() {var _this3 = this;return (0, _asyncToGenerator2.default)(function* () {const ctx = _this3.canvasEl.getContext('2d');ctx.canvas.width = maxVideoSize;ctx.canvas.height = maxVideoSize;ctx.drawImage(_this3.videoElement, 0, 0, maxVideoSize, maxVideoSize); // this.ctx1.drawImage(this.video, 0, 0, this.width, this.height);
      // let frame = this.ctx1.getImageData(0, 0, this.width, this.height);
      // let l = frame.data.length / 4;
      // for (let i = 0; i < l; i++) {
      //   let r = frame.data[i * 4 + 0];
      //   let g = frame.data[i * 4 + 1];
      //   let b = frame.data[i * 4 + 2];
      //   if (g > 100 && r > 100 && b < 43)
      //     frame.data[i * 4 + 3] = 0;
      // }
      // this.ctx2.putImageData(frame, 0, 0);
      const image = ctx.getImageData(0, 0, maxVideoSize, maxVideoSize);const processedImage = yield _CvService.default.imageProcessing(image); // Render the processed image to the canvas
      const imageData = processedImage.data.payload;ctx.canvas.width = imageData.width;ctx.canvas.height = imageData.height;ctx.putImageData(imageData, 0, 0);return;})();}setupCamera() {var _this4 = this;return (0, _asyncToGenerator2.default)(function* () {_this4.videoElement.width = maxVideoSize;_this4.videoElement.height = maxVideoSize;if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {const stream = yield navigator.mediaDevices.getUserMedia({ audio: false, video: { facingMode: 'user', width: maxVideoSize, height: maxVideoSize } });_this4.videoElement.srcObject = stream;return new Promise(resolve => {_this4.videoElement.onloadedmetadata = () => {resolve(_this4.videoElement);};});}const errorMessage = 'This browser does not support video capture, or this device does not have a camera';alert(errorMessage);return Promise.reject(errorMessage);})();} /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * What we will do in the onClick event is capture a frame within
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              * the video to pass this image on our service.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              */ /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * What we're going to render is:
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 1. A video component for the user to see what he sees on the camera.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 2. A simple button, that with the onClick we will generate an image of
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *  the video, we will load OpenCV and we will treat the image.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * 3. A canvas, which will allow us to capture the image of the video
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * while showing the user what image has been taken from the video after
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  * pressing the button.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  *
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  */render() {const { processing } = { ...this.state };return /*#__PURE__*/_react.default.createElement("div", { style: { display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' } }, /*#__PURE__*/_react.default.createElement("video", { style: { display: 'none' }, className: "video",
      playsInline: true,
      ref: videoElement => {
        this.videoElement = videoElement;
      } }), /*#__PURE__*/

    _react.default.createElement("button", {
      disabled: processing,
      style: { width: maxVideoSize, padding: 10 },
      onClick: () => this.onClick() },

    processing ? 'Processing...' : 'Take a photo'), /*#__PURE__*/

    _react.default.createElement("canvas", {
      ref: canvasEl => {
        this.canvasEl = canvasEl;
      },
      width: maxVideoSize,
      height: maxVideoSize }));



  }}


WebCameraShapshot.defaultProps = {
  handleSnaphot: () => {} };


WebCameraShapshot.propTypes = {
  handleSnaphot: PropTypes.func.isRequired };var _default =


WebCameraShapshot;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21wb25lbnRzL3dlYi1jYW1lcmEtc2hhcHNob3QuanN4Il0sIm5hbWVzIjpbInJ1bldvcmtlciIsIndvcmtlciIsIldvcmtlciIsIm1lc3NhZ2UiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImRhdGEiLCJtYXhWaWRlb1NpemUiLCJXZWJDYW1lcmFTaGFwc2hvdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJoYW5kbGVTbmFwc2hvdCIsInNldFN0YXRlIiwicHJvY2Vzc2luZyIsImN0eCIsImNhbnZhc0VsIiwiZ2V0Q29udGV4dCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwidmlkZW9FbGVtZW50IiwiaW1hZ2UiLCJnZXRJbWFnZURhdGEiLCJwcm9jZXNzZWRJbWFnZSIsImN2c2VydmljZSIsImltYWdlUHJvY2Vzc2luZyIsImltYWdlRGF0YSIsInBheWxvYWQiLCJwdXRJbWFnZURhdGEiLCJnZXRDYW52YXNCbG9iIiwidG9CbG9iIiwiYmxvYiIsInN0YXRlIiwiY29tcG9uZW50RGlkTW91bnQiLCJsb2FkIiwiY29tcG9uZW50V2lsbFVubW91bnQiLCJzdHJlYW0iLCJzcmNPYmplY3QiLCJ0cmFja3MiLCJnZXRUcmFja3MiLCJmb3JFYWNoIiwidHJhY2siLCJzdG9wIiwidmlkZW9Mb2FkZWQiLCJzZXR1cENhbWVyYSIsInRpbWVyQ2FsbGJhY2siLCJwbGF5IiwicGF1c2VkIiwiZW5kZWQiLCJjb21wdXRlRnJhbWUiLCJzZWxmIiwic2V0VGltZW91dCIsIm5hdmlnYXRvciIsIm1lZGlhRGV2aWNlcyIsImdldFVzZXJNZWRpYSIsImF1ZGlvIiwidmlkZW8iLCJmYWNpbmdNb2RlIiwib25sb2FkZWRtZXRhZGF0YSIsImVycm9yTWVzc2FnZSIsImFsZXJ0IiwicmVuZGVyIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwib25DbGljayIsImRlZmF1bHRQcm9wcyIsImhhbmRsZVNuYXBob3QiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJmdW5jIiwiaXNSZXF1aXJlZCJdLCJtYXBwaW5ncyI6Im9kQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsU0FBUyx3RUFBRyxhQUFZO0FBQzVCLFVBQU1DLE1BQU0sR0FBRyxJQUFJQyxzQkFBSixFQUFmO0FBQ0EsVUFBTUMsT0FBTyxTQUFTLElBQUlDLE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVVDLE1BQVYsS0FBcUI7QUFDckRMLE1BQUFBLE1BQU0sQ0FBQ00sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBb0NDLEtBQUQsSUFBV0gsT0FBTyxDQUFDRyxLQUFLLENBQUNDLElBQVAsQ0FBckQsRUFBbUUsS0FBbkU7QUFDQVIsTUFBQUEsTUFBTSxDQUFDTSxnQkFBUCxDQUF3QixPQUF4QixFQUFpQ0QsTUFBakMsRUFBeUMsS0FBekM7QUFDRCxLQUhxQixDQUF0QjtBQUlBLFdBQU9ILE9BQVA7QUFDRCxHQVBjLGtCQUFUSCxTQUFTLDRDQUFmOztBQVNBO0FBQ0E7QUFDQSxNQUFNVSxZQUFZLEdBQUcsR0FBckI7O0FBRUEsTUFBTUMsaUJBQU4sU0FBZ0NDLGdCQUFoQyxDQUEwQztBQUN4Q0MsRUFBQUEsV0FBVyxDQUFDQyxLQUFELEVBQVE7QUFDakIsVUFBTUEsS0FBTixDQURpQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThHVCxpQkFBWTtBQUNwQjs7QUFFQSxZQUFNLEVBQUVDLGNBQUYsS0FBcUIsRUFBRSxHQUFHLEtBQUksQ0FBQ0QsS0FBVixFQUEzQjtBQUNBLE1BQUEsS0FBSSxDQUFD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LEVBRFQsaUJBUUUsd0NBQ0UsS0FBSyxFQUFFLEVBQUVILE9BQU8sRUFBRSxNQUFYLEVBRFQsRUFFRSxTQUFTLEVBQUMsT0FGWjtBQUdFLE1BQUEsV0FBVyxNQUhiO0FBSUUsTUFBQSxHQUFHLEVBQUcxQyxZQUFELElBQWtCO0FBQ3JCLGFBQUtBLFlBQUwsR0FBb0JBLFlBQXBCO0FBQ0QsT0FOSCxHQVJGOztBQWdCRTtBQUNFLE1BQUEsUUFBUSxFQUFFUixVQURaO0FBRUUsTUFBQSxLQUFLLEVBQUUsRUFBRUssS0FBSyxFQUFFWixZQUFULEVBQXVCNkQsT0FBTyxFQUFFLEVBQWhDLEVBRlQ7QUFHRSxNQUFBLE9BQU8sRUFBRSxNQUFNLEtBQUtDLE9BQUwsRUFIakI7O0FBS0d2RCxJQUFBQSxVQUFVLEdBQUcsZUFBSCxHQUFxQixjQUxsQyxDQWhCRjs7QUF1QkU7QUFDRSxNQUFBLEdBQUcsRUFBR0UsUUFBRCxJQUFjO0FBQ2pCLGFBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0QsT0FISDtBQUlFLE1BQUEsS0FBSyxFQUFFVCxZQUpUO0FBS0UsTUFBQSxNQUFNLEVBQUVBLFlBTFYsR0F2QkYsQ0FERjs7OztBQWlDRCxHQXBNdUM7OztBQXVNMUNDLGlCQUFpQixDQUFDOEQsWUFBbEIsR0FBaUM7QUFDL0JDLEVBQUFBLGFBQWEsRUFBRSxNQUFNLENBQUUsQ0FEUSxFQUFqQzs7O0FBSUEvRCxpQkFBaUIsQ0FBQ2dFLFNBQWxCLEdBQThCO0FBQzVCRCxFQUFBQSxhQUFhLEVBQUVFLFNBQVMsQ0FBQ0MsSUFBVixDQUFlQyxVQURGLEVBQTlCLEM7OztBQUllbkUsaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0ICogYXMgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGN2c2VydmljZSBmcm9tICcuLi9zZXJ2aWNlcy9DdlNlcnZpY2UnO1xuaW1wb3J0IFdvcmtlciBmcm9tICcuLi93b3JrZXJzL2V4YW1wbGUud29ya2VyLmpzJztcblxuLy8gaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcblxuLy8gaW1wb3J0KCcuLi93b3JrZXJzL29wZW5jdi00LTMtMC5qcycpLnRoZW4oKHJhd01vZHVsZSkgPT4ge1xuLy8gICBldmFsLmNhbGwobnVsbCwgcmF3TW9kdWxlLmRlZmF1bHQpO1xuLy8gICBjdlsnb25SdW50aW1lSW5pdGlhbGl6ZWQnXSA9ICgpID0+IHtcbi8vICAgICBsZXQgbWF0ID0gbmV3IGN2Lk1hdCgpO1xuLy8gICAgIGNvbnNvbGUubG9nKG1hdC5zaXplKCkpO1xuLy8gICAgIG1hdC5kZWxldGUoKTtcbi8vICAgfTtcbi8vIH0pO1xuXG5jb25zdCBydW5Xb3JrZXIgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHdvcmtlciA9IG5ldyBXb3JrZXIoKTtcbiAgY29uc3QgbWVzc2FnZSA9IGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICB3b3JrZXIuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIChldmVudCkgPT4gcmVzb2x2ZShldmVudC5kYXRhKSwgZmFsc2UpO1xuICAgIHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdlcnJvcicsIHJlamVjdCwgZmFsc2UpO1xuICB9KTtcbiAgcmV0dXJuIG1lc3NhZ2U7XG59O1xuXG4vLyByZWY6IGh0dHBzOi8vYXJhbHJvY2EuY29tL2Jsb2cvb3BlbmN2LWluLXRoZS13ZWJcbi8vIFdlJ2xsIGxpbWl0IHRoZSBwcm9jZXNzaW5nIHNpemUgdG8gMjAwcHguXG5jb25zdCBtYXhWaWRlb1NpemUgPSAyMDA7XG5cbmNsYXNzIFdlYkNhbWVyYVNoYXBzaG90IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy52aWRlb0VsZW1lbnQgPSBudWxsO1xuICAgIHRoaXMuY2FudmFzRWwgPSBudWxsO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHByb2Nlc3Npbmc6IGZhbHNlLFxuICAgIH07XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmxvYWQoKTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIC8vIFR1cm5zIG9mZiB3ZWJjYW1cbiAgICBjb25zdCBzdHJlYW0gPSB0aGlzLnZpZGVvRWxlbWVudC5zcmNPYmplY3Q7XG4gICAgY29uc3QgdHJhY2tzID0gc3RyZWFtLmdldFRyYWNrcygpO1xuXG4gICAgdHJhY2tzLmZvckVhY2goZnVuY3Rpb24gKHRyYWNrKSB7XG4gICAgICB0cmFjay5zdG9wKCk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnZpZGVvRWxlbWVudC5zcmNPYmplY3QgPSBudWxsO1xuICB9XG5cbiAgYXN5bmMgbG9hZCgpIHtcbiAgICBjb25zdCB2aWRlb0xvYWRlZCA9IGF3YWl0IHRoaXMuc2V0dXBDYW1lcmEoKTtcbiAgICBhd2FpdCBjdnNlcnZpY2UubG9hZCgpO1xuICAgIHZpZGVvTG9hZGVkLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAncGxheScsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMudGltZXJDYWxsYmFjaygpO1xuICAgICAgfSxcbiAgICAgIGZhbHNlXG4gICAgKTtcbiAgICB2aWRlb0xvYWRlZC5wbGF5KCk7XG5cbiAgICByZXR1cm4gdmlkZW9Mb2FkZWQ7XG4gIH1cblxuICB0aW1lckNhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLnZpZGVvRWxlbWVudC5wYXVzZWQgfHwgdGhpcy52aWRlb0VsZW1lbnQuZW5kZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5jb21wdXRlRnJhbWUoKTtcbiAgICBsZXQgc2VsZiA9IHRoaXM7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBzZWxmLnRpbWVyQ2FsbGJhY2soKTtcbiAgICB9LCAxMDAwKTtcbiAgfVxuXG4gIGFzeW5jIGNvbXB1dGVGcmFtZSgpIHtcbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhc0VsLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IG1heFZpZGVvU2l6ZTtcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IG1heFZpZGVvU2l6ZTtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMudmlkZW9FbGVtZW50LCAwLCAwLCBtYXhWaWRlb1NpemUsIG1heFZpZGVvU2l6ZSk7XG4gICAgLy8gdGhpcy5jdHgxLmRyYXdJbWFnZSh0aGlzLnZpZGVvLCAwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gbGV0IGZyYW1lID0gdGhpcy5jdHgxLmdldEltYWdlRGF0YSgwLCAwLCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG4gICAgLy8gbGV0IGwgPSBmcmFtZS5kYXRhLmxlbmd0aCAvIDQ7XG5cbiAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IGw7IGkrKykge1xuICAgIC8vICAgbGV0IHIgPSBmcmFtZS5kYXRhW2kgKiA0ICsgMF07XG4gICAgLy8gICBsZXQgZyA9IGZyYW1lLmRhdGFbaSAqIDQgKyAxXTtcbiAgICAvLyAgIGxldCBiID0gZnJhbWUuZGF0YVtpICogNCArIDJdO1xuICAgIC8vICAgaWYgKGcgPiAxMDAgJiYgciA+IDEwMCAmJiBiIDwgNDMpXG4gICAgLy8gICAgIGZyYW1lLmRhdGFbaSAqIDQgKyAzXSA9IDA7XG4gICAgLy8gfVxuICAgIC8vIHRoaXMuY3R4Mi5wdXRJbWFnZURhdGEoZnJhbWUsIDAsIDApO1xuICAgIGNvbnN0IGltYWdlID0gY3R4LmdldEltYWdlRGF0YSgwLCAwLCBtYXhWaWRlb1NpemUsIG1heFZpZGVvU2l6ZSk7XG4gICAgY29uc3QgcHJvY2Vzc2VkSW1hZ2UgPSBhd2FpdCBjdnNlcnZpY2UuaW1hZ2VQcm9jZXNzaW5nKGltYWdlKTtcbiAgICAvLyBSZW5kZXIgdGhlIHByb2Nlc3NlZCBpbWFnZSB0byB0aGUgY2FudmFzXG4gICAgY29uc3QgaW1hZ2VEYXRhID0gcHJvY2Vzc2VkSW1hZ2UuZGF0YS5wYXlsb2FkO1xuICAgIGN0eC5jYW52YXMud2lkdGggPSBpbWFnZURhdGEud2lkdGg7XG4gICAgY3R4LmNhbnZhcy5oZWlnaHQgPSBpbWFnZURhdGEuaGVpZ2h0O1xuICAgIGN0eC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBhc3luYyBzZXR1cENhbWVyYSgpIHtcbiAgICB0aGlzLnZpZGVvRWxlbWVudC53aWR0aCA9IG1heFZpZGVvU2l6ZTtcbiAgICB0aGlzLnZpZGVvRWxlbWVudC5oZWlnaHQgPSBtYXhWaWRlb1NpemU7XG5cbiAgICBpZiAobmF2aWdhdG9yLm1lZGlhRGV2aWNlcyAmJiBuYXZpZ2F0b3IubWVkaWFEZXZpY2VzLmdldFVzZXJNZWRpYSkge1xuICAgICAgY29uc3Qgc3RyZWFtID0gYXdhaXQgbmF2aWdhdG9yLm1lZGlhRGV2aWNlcy5nZXRVc2VyTWVkaWEoe1xuICAgICAgICBhdWRpbzogZmFsc2UsXG4gICAgICAgIHZpZGVvOiB7XG4gICAgICAgICAgZmFjaW5nTW9kZTogJ3VzZXInLFxuICAgICAgICAgIHdpZHRoOiBtYXhWaWRlb1NpemUsXG4gICAgICAgICAgaGVpZ2h0OiBtYXhWaWRlb1NpemUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHRoaXMudmlkZW9FbGVtZW50LnNyY09iamVjdCA9IHN0cmVhbTtcblxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgIHRoaXMudmlkZW9FbGVtZW50Lm9ubG9hZGVkbWV0YWRhdGEgPSAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSh0aGlzLnZpZGVvRWxlbWVudCk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID1cbiAgICAgICdUaGlzIGJyb3dzZXIgZG9lcyBub3Qgc3VwcG9ydCB2aWRlbyBjYXB0dXJlLCBvciB0aGlzIGRldmljZSBkb2VzIG5vdCBoYXZlIGEgY2FtZXJhJztcbiAgICBhbGVydChlcnJvck1lc3NhZ2UpO1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvck1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoYXQgd2Ugd2lsbCBkbyBpbiB0aGUgb25DbGljayBldmVudCBpcyBjYXB0dXJlIGEgZnJhbWUgd2l0aGluXG4gICAqIHRoZSB2aWRlbyB0byBwYXNzIHRoaXMgaW1hZ2Ugb24gb3VyIHNlcnZpY2UuXG4gICAqL1xuICBvbkNsaWNrID0gYXN5bmMgKCkgPT4ge1xuICAgIC8vIGRlYnVnZ2VyO1xuXG4gICAgY29uc3QgeyBoYW5kbGVTbmFwc2hvdCB9ID0geyAuLi50aGlzLnByb3BzIH07XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHByb2Nlc3Npbmc6IHRydWUgfSk7XG5cbiAgICBjb25zdCBjdHggPSB0aGlzLmNhbnZhc0VsLmdldENvbnRleHQoJzJkJyk7XG4gICAgY3R4LmNhbnZhcy53aWR0aCA9IG1heFZpZGVvU2l6ZTtcbiAgICBjdHguY2FudmFzLmhlaWdodCA9IG1heFZpZGVvU2l6ZTtcbiAgICBjdHguZHJhd0ltYWdlKHRoaXMudmlkZW9FbGVtZW50LCAwLCAwLCBtYXhWaWRlb1NpemUsIG1heFZpZGVvU2l6ZSk7XG4gICAgY29uc3QgaW1hZ2UgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIG1heFZpZGVvU2l6ZSwgbWF4VmlkZW9TaXplKTtcbiAgICAvLyBjb25zdCBrZXlQYWlyID0gYXdhaXQgcnVuV29ya2VyKCk7XG4gICAgLy8gY29uc29sZS5sb2coa2V5UGFpcik7XG4gICAgLy8gY29uc29sZS5sb2coXCIhXCIpO1xuICAgIC8vIExvYWQgdGhlIG1vZGVsXG4gICAgLy8gY29uc29sZS5sb2coXCIhXCIpO1xuXG4gICAgLy8gUHJvY2Vzc2luZyBpbWFnZVxuICAgIGNvbnN0IHByb2Nlc3NlZEltYWdlID0gYXdhaXQgY3ZzZXJ2aWNlLmltYWdlUHJvY2Vzc2luZyhpbWFnZSk7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gUmVuZGVyIHRoZSBwcm9jZXNzZWQgaW1hZ2UgdG8gdGhlIGNhbnZhc1xuICAgIGNvbnN0IGltYWdlRGF0YSA9IHByb2Nlc3NlZEltYWdlLmRhdGEucGF5bG9hZDtcbiAgICBjdHguY2FudmFzLndpZHRoID0gaW1hZ2VEYXRhLndpZHRoO1xuICAgIGN0eC5jYW52YXMuaGVpZ2h0ID0gaW1hZ2VEYXRhLmhlaWdodDtcbiAgICBjdHgucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XG4gICAgY29uc3QgZ2V0Q2FudmFzQmxvYiA9IChjYW52YXMpID0+IHtcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBjYW52YXMudG9CbG9iKChibG9iKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlc29sdmUoYmxvYik7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgfTtcbiAgICBjb25zdCBibG9iID0gYXdhaXQgZ2V0Q2FudmFzQmxvYihjdHguY2FudmFzKTtcbiAgICBoYW5kbGVTbmFwc2hvdChibG9iKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcHJvY2Vzc2luZzogZmFsc2UgfSk7XG4gIH07XG5cbiAgLyoqXG4gICAqIFdoYXQgd2UncmUgZ29pbmcgdG8gcmVuZGVyIGlzOlxuICAgKlxuICAgKiAxLiBBIHZpZGVvIGNvbXBvbmVudCBmb3IgdGhlIHVzZXIgdG8gc2VlIHdoYXQgaGUgc2VlcyBvbiB0aGUgY2FtZXJhLlxuICAgKlxuICAgKiAyLiBBIHNpbXBsZSBidXR0b24sIHRoYXQgd2l0aCB0aGUgb25DbGljayB3ZSB3aWxsIGdlbmVyYXRlIGFuIGltYWdlIG9mXG4gICAqICB0aGUgdmlkZW8sIHdlIHdpbGwgbG9hZCBPcGVuQ1YgYW5kIHdlIHdpbGwgdHJlYXQgdGhlIGltYWdlLlxuICAgKlxuICAgKiAzLiBBIGNhbnZhcywgd2hpY2ggd2lsbCBhbGxvdyB1cyB0byBjYXB0dXJlIHRoZSBpbWFnZSBvZiB0aGUgdmlkZW9cbiAgICogd2hpbGUgc2hvd2luZyB0aGUgdXNlciB3aGF0IGltYWdlIGhhcyBiZWVuIHRha2VuIGZyb20gdGhlIHZpZGVvIGFmdGVyXG4gICAqIHByZXNzaW5nIHRoZSBidXR0b24uXG4gICAqXG4gICAqL1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBwcm9jZXNzaW5nIH0gPSB7IC4uLnRoaXMuc3RhdGUgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXG4gICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgICAgIH19XG4gICAgICA+XG4gICAgICAgIDx2aWRlb1xuICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fVxuICAgICAgICAgIGNsYXNzTmFtZT1cInZpZGVvXCJcbiAgICAgICAgICBwbGF5c0lubGluZVxuICAgICAgICAgIHJlZj17KHZpZGVvRWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy52aWRlb0VsZW1lbnQgPSB2aWRlb0VsZW1lbnQ7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGRpc2FibGVkPXtwcm9jZXNzaW5nfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBtYXhWaWRlb1NpemUsIHBhZGRpbmc6IDEwIH19XG4gICAgICAgICAgb25DbGljaz17KCkgPT4gdGhpcy5vbkNsaWNrKCl9XG4gICAgICAgID5cbiAgICAgICAgICB7cHJvY2Vzc2luZyA/ICdQcm9jZXNzaW5nLi4uJyA6ICdUYWtlIGEgcGhvdG8nfVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGNhbnZhc1xuICAgICAgICAgIHJlZj17KGNhbnZhc0VsKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmNhbnZhc0VsID0gY2FudmFzRWw7XG4gICAgICAgICAgfX1cbiAgICAgICAgICB3aWR0aD17bWF4VmlkZW9TaXplfVxuICAgICAgICAgIGhlaWdodD17bWF4VmlkZW9TaXplfVxuICAgICAgICA+PC9jYW52YXM+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbldlYkNhbWVyYVNoYXBzaG90LmRlZmF1bHRQcm9wcyA9IHtcbiAgaGFuZGxlU25hcGhvdDogKCkgPT4ge30sXG59O1xuXG5XZWJDYW1lcmFTaGFwc2hvdC5wcm9wVHlwZXMgPSB7XG4gIGhhbmRsZVNuYXBob3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBXZWJDYW1lcmFTaGFwc2hvdDtcbiJdfQ==