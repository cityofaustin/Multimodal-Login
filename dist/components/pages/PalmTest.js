"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _react = _interopRequireWildcard(require("react"));
var _CvService = _interopRequireDefault(require("../../services/CvService"));

// import("../../opencv").then(async (rawModule) => {
//   eval.call(null, rawModule.default);
//   cv = await cv;
//   let mat = new cv.Mat();
//   console.log(mat.size());
//   mat.delete();
//   main();
// });

// const imageWidth = 1600;
// const imageHeight = 1200;
const imageWidth = 640;
const imageHeight = 480;

let img;
if (process.env.BROWSER) {
  "/public/css/00dfd8cf84c12e73e19532059ed3ec47.scss";
  "/public/css/0d858633570615b14d1e84414a19493b.scss";
  img = "/public/img/4a33f4745dcb29e1e176a3551a8995b7.jpg".default;
}

class PalmTest extends _react.Component {
  constructor(props) {var _this;
    super(props);_this = this;(0, _defineProperty2.default)(this, "start", /*#__PURE__*/(0, _asyncToGenerator2.default)(
































    function* () {
      const { methodType } = { ..._this.state };
      let { matchResponse } = { ..._this.state };
      const canvas = document.getElementById('query-image');
      const ctx = canvas.getContext('2d');
      const image = ctx.getImageData(0, 0, imageWidth, imageHeight);
      const processedImage2 = yield _CvService.default.imageProcessing2(image);
      // debugger;
      // Render the processed image to the canvas
      const canvas2 = document.getElementById('preprocessed-image2');
      const ctx2 = canvas2.getContext('2d');
      const imageData2 = processedImage2.data.payload;
      ctx2.canvas.width = 111; // cols
      ctx2.canvas.height = 110; // rows
      ctx2.putImageData(imageData2, 0, 0);

      const processedImage3 = yield _CvService.default.imageProcessing3(imageData2);
      const canvas3 = document.getElementById('preprocessed-image3');
      const ctx3 = canvas3.getContext('2d');
      const imageData3 = processedImage3.data.payload;
      ctx3.canvas.width = 128;
      ctx3.canvas.height = 128;
      ctx3.putImageData(imageData3, 0, 0);

      // let payload = await cvservice.imageProcessing4(imageData3);
      // payload = payload.data.payload;
      // const canvas4 = document.getElementById('preprocessed-image4');
      // const ctx4 = canvas4.getContext('2d');
      // const imageData4 = payload.img;
      // ctx4.canvas.width = 128;
      // ctx4.canvas.height = 128;
      // ctx4.putImageData(imageData4, 0, 0);

      // if(methodType === 'line') {
      //   matchResponse = (payload.distance < 0.011) ? 1 : 2;
      // } else {
      //   // otherwise it's texture
      //   matchResponse = (payload.distance < 0.137) ? 1 : 2;
      // }
      // this.setState({
      //   userId: payload.userId,
      //   matchedUserId: payload.userId,
      //   // rounds to 7 decimals places
      //   distance: Number(Math.round(payload.distance+'e7')+'e-7'),
      //   matchResponse
      // });
    }));this.state = { isLoading: true, userId: 'none', matchedUserId: 'none', distance: 0, matchResponse: 0, // 0 none, 1 success, 2 failure
      methodType: 'line' // 'line' or 'texture'
    };}componentDidMount() {this.load();}load() {var _this2 = this;return (0, _asyncToGenerator2.default)(function* () {if (process.env.BROWSER) {yield _CvService.default.load(); // debugger;
        const canvas = document.getElementById('query-image');const ctx = canvas.getContext('2d');const image = document.getElementById('source');canvas.width = imageWidth;canvas.height = imageHeight;ctx.drawImage(image, 0, 0, imageWidth, imageHeight); // image.addEventListener('load', (e) => {
        // ctx.drawImage(image);
        // });
        // const button = document.getElementById('startStopButton');
        _this2.setState({ isLoading: false });}})();}render() {const { userId, matchedUserId, distance, matchResponse } = { ...this.state };return /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/
    _react.default.createElement("h1", null, "Palm Detection"), /*#__PURE__*/
    _react.default.createElement("div", { className: "top-form" }, /*#__PURE__*/
    _react.default.createElement("button", {
      id: "startStopButton",
      type: "button",
      disabled: this.state.isLoading,
      onClick: this.start }, "Start Identification"), /*#__PURE__*/



    _react.default.createElement("div", { className: "form-control" }, /*#__PURE__*/
    _react.default.createElement("label", { htmlFor: "method-select" }, "Method"), /*#__PURE__*/
    _react.default.createElement("select", { name: "pets", id: "method-select" }, /*#__PURE__*/
    _react.default.createElement("option", { value: "line" }, "Line based"), /*#__PURE__*/
    _react.default.createElement("option", { value: "texture", disabled: true }, "Texture based")))), /*#__PURE__*/



    _react.default.createElement("div", { id: "status" }), /*#__PURE__*/
    _react.default.createElement("img", { id: "source", src: img, style: { display: 'none' } }), /*#__PURE__*/
    _react.default.createElement("div", { className: "image-container" }, /*#__PURE__*/
    _react.default.createElement("canvas", {
      id: "query-image",
      width: imageWidth,
      height: imageHeight,
      style: {
        marginTop: '20px',
        maxWidth: '100%',
        backgroundColor: 'black',
        border: '1px solid #555' } }), /*#__PURE__*/


    _react.default.createElement("div", null, "Query Image")), /*#__PURE__*/

    _react.default.createElement("input", {
      id: "choose-different",
      type: "file",
      accept: "image/png, image/jpeg"
      // disabled={this.state.isLoading}
    }), /*#__PURE__*/
    _react.default.createElement("div", { className: "cv-section" }, /*#__PURE__*/
    _react.default.createElement("div", { className: "image-container" }, /*#__PURE__*/
    _react.default.createElement("canvas", {
      id: "preprocessed-image2",
      width: 111,
      height: 110,
      style: {
        marginTop: '20px',
        maxWidth: '100%',
        backgroundColor: 'black',
        border: '1px solid #555' } }), /*#__PURE__*/


    _react.default.createElement("div", null, "Extracted ROI")), /*#__PURE__*/

    _react.default.createElement("div", { className: "image-container" }, /*#__PURE__*/
    _react.default.createElement("canvas", {
      id: "preprocessed-image3",
      width: 128,
      height: 128,
      style: {
        marginTop: '20px',
        maxWidth: '100%',
        backgroundColor: 'black',
        border: '1px solid #555' } }), /*#__PURE__*/


    _react.default.createElement("div", null, "Extracted Feature")), /*#__PURE__*/

    _react.default.createElement("div", { className: "image-container" }, /*#__PURE__*/
    _react.default.createElement("canvas", {
      id: "preprocessed-image4",
      width: 128,
      height: 128,
      style: {
        marginTop: '20px',
        maxWidth: '100%',
        backgroundColor: 'black',
        border: '1px solid #555' } }), /*#__PURE__*/


    _react.default.createElement("div", null, "Matched Feature")), /*#__PURE__*/

    _react.default.createElement("div", { className: "results" }, /*#__PURE__*/
    _react.default.createElement("div", null, "User Id: ", userId), /*#__PURE__*/
    _react.default.createElement("div", null, "Matched User Id: ", matchedUserId), /*#__PURE__*/
    _react.default.createElement("div", null, "Distance: ", distance),
    matchResponse === 1 && /*#__PURE__*/_react.default.createElement("div", { className: "success" }, "ACCEPT"),
    matchResponse === 2 && /*#__PURE__*/_react.default.createElement("div", { className: "fail" }, "DECLINE"))));




  }}exports.default = PalmTest;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL3BhZ2VzL1BhbG1UZXN0LmpzeCJdLCJuYW1lcyI6WyJpbWFnZVdpZHRoIiwiaW1hZ2VIZWlnaHQiLCJpbWciLCJwcm9jZXNzIiwiZW52IiwiQlJPV1NFUiIsImRlZmF1bHQiLCJQYWxtVGVzdCIsIkNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwicHJvcHMiLCJtZXRob2RUeXBlIiwic3RhdGUiLCJtYXRjaFJlc3BvbnNlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJpbWFnZSIsImdldEltYWdlRGF0YSIsInByb2Nlc3NlZEltYWdlMiIsImN2c2VydmljZSIsImltYWdlUHJvY2Vzc2luZzIiLCJjYW52YXMyIiwiY3R4MiIsImltYWdlRGF0YTIiLCJkYXRhIiwicGF5bG9hZCIsIndpZHRoIiwiaGVpZ2h0IiwicHV0SW1hZ2VEYXRhIiwicHJvY2Vzc2VkSW1hZ2UzIiwiaW1hZ2VQcm9jZXNzaW5nMyIsImNhbnZhczMiLCJjdHgzIiwiaW1hZ2VEYXRhMyIsImlzTG9hZGluZyIsInVzZXJJZCIsIm1hdGNoZWRVc2VySWQiLCJkaXN0YW5jZSIsImNvbXBvbmVudERpZE1vdW50IiwibG9hZCIsImRyYXdJbWFnZSIsInNldFN0YXRlIiwicmVuZGVyIiwic3RhcnQiLCJkaXNwbGF5IiwibWFyZ2luVG9wIiwibWF4V2lkdGgiLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3JkZXIiXSwibWFwcGluZ3MiOiJvZEFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLE1BQU1BLFVBQVUsR0FBRyxHQUFuQjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxHQUFwQjs7QUFFQSxJQUFJQyxHQUFKO0FBQ0EsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlDLE9BQWhCLEVBQXlCO0FBQ3ZCO0FBQ0E7QUFDQUgsRUFBQUEsR0FBRyxH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UUFBQUEsU0FBUyxFQUFFLE1BRE47QUFFTEMsUUFBQUEsUUFBUSxFQUFFLE1BRkw7QUFHTEMsUUFBQUEsZUFBZSxFQUFFLE9BSFo7QUFJTEMsUUFBQUEsTUFBTSxFQUFFLGdCQUpILEVBSlQsR0FERjs7O0FBWUUsa0VBWkYsQ0FmRjs7QUE2QkUsMENBQUssU0FBUyxFQUFDLGlCQUFmO0FBQ0U7QUFDRSxNQUFBLEVBQUUsRUFBQyxxQkFETDtBQUVFLE1BQUEsS0FBSyxFQUFFLEdBRlQ7QUFHRSxNQUFBLE1BQU0sRUFBRSxHQUhWO0FBSUUsTUFBQSxLQUFLLEVBQUU7QUFDTEgsUUFBQUEsU0FBUyxFQUFFLE1BRE47QUFFTEMsUUFBQUEsUUFBUSxFQUFFLE1BRkw7QUFHTEMsUUFBQUEsZUFBZSxFQUFFLE9BSFo7QUFJTEMsUUFBQUEsTUFBTSxFQUFFLGdCQUpILEVBSlQsR0FERjs7O0FBWUUsZ0VBWkYsQ0E3QkY7O0FBMkNFLDBDQUFLLFNBQVMsRUFBQyxTQUFmO0FBQ0UsMkRBQWViLE1BQWYsQ0FERjtBQUVFLG1FQUF1QkMsYUFBdkIsQ0FGRjtBQUdFLDREQUFnQkMsUUFBaEIsQ0FIRjtBQUlHM0IsSUFBQUEsYUFBYSxLQUFLLENBQWxCLGlCQUF1QixzQ0FBSyxTQUFTLEVBQUMsU0FBZixhQUoxQjtBQUtHQSxJQUFBQSxhQUFhLEtBQUssQ0FBbEIsaUJBQXVCLHNDQUFLLFNBQVMsRUFBQyxNQUFmLGNBTDFCLENBM0NGLENBekNGLENBREY7Ozs7O0FBK0ZELEdBdEw2QyxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgY3ZzZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0N2U2VydmljZSc7XG5cbi8vIGltcG9ydChcIi4uLy4uL29wZW5jdlwiKS50aGVuKGFzeW5jIChyYXdNb2R1bGUpID0+IHtcbi8vICAgZXZhbC5jYWxsKG51bGwsIHJhd01vZHVsZS5kZWZhdWx0KTtcbi8vICAgY3YgPSBhd2FpdCBjdjtcbi8vICAgbGV0IG1hdCA9IG5ldyBjdi5NYXQoKTtcbi8vICAgY29uc29sZS5sb2cobWF0LnNpemUoKSk7XG4vLyAgIG1hdC5kZWxldGUoKTtcbi8vICAgbWFpbigpO1xuLy8gfSk7XG5cbi8vIGNvbnN0IGltYWdlV2lkdGggPSAxNjAwO1xuLy8gY29uc3QgaW1hZ2VIZWlnaHQgPSAxMjAwO1xuY29uc3QgaW1hZ2VXaWR0aCA9IDY0MDtcbmNvbnN0IGltYWdlSGVpZ2h0ID0gNDgwO1xuXG5sZXQgaW1nO1xuaWYgKHByb2Nlc3MuZW52LkJST1dTRVIpIHtcbiAgcmVxdWlyZSgnLi4vZ2xvYmFsLnNjc3MnKTtcbiAgcmVxdWlyZSgnLi9QYWxtVGVzdC5zY3NzJyk7XG4gIGltZyA9IHJlcXVpcmUoJy4uLy4uL2ltZy8wMDFfSU1HX18gKDQpLmpwZycpLmRlZmF1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhbG1UZXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGlzTG9hZGluZzogdHJ1ZSxcbiAgICAgIHVzZXJJZDogJ25vbmUnLFxuICAgICAgbWF0Y2hlZFVzZXJJZDogJ25vbmUnLFxuICAgICAgZGlzdGFuY2U6IDAsXG4gICAgICBtYXRjaFJlc3BvbnNlOiAwLCAvLyAwIG5vbmUsIDEgc3VjY2VzcywgMiBmYWlsdXJlXG4gICAgICBtZXRob2RUeXBlOiAnbGluZScsIC8vICdsaW5lJyBvciAndGV4dHVyZSdcbiAgICB9O1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5sb2FkKCk7XG4gIH1cblxuICBhc3luYyBsb2FkKCkge1xuICAgIGlmIChwcm9jZXNzLmVudi5CUk9XU0VSKSB7XG4gICAgICBhd2FpdCBjdnNlcnZpY2UubG9hZCgpO1xuICAgICAgLy8gZGVidWdnZXI7XG4gICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVlcnktaW1hZ2UnKTtcbiAgICAgIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuICAgICAgY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc291cmNlJyk7XG4gICAgICBjYW52YXMud2lkdGggPSBpbWFnZVdpZHRoO1xuICAgICAgY2FudmFzLmhlaWdodCA9IGltYWdlSGVpZ2h0O1xuICAgICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQpO1xuICAgICAgLy8gaW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChlKSA9PiB7XG4gICAgICAvLyBjdHguZHJhd0ltYWdlKGltYWdlKTtcbiAgICAgIC8vIH0pO1xuICAgICAgLy8gY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0YXJ0U3RvcEJ1dHRvbicpO1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTG9hZGluZzogZmFsc2UgfSk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnQgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3Qge21ldGhvZFR5cGV9ID0gey4uLnRoaXMuc3RhdGV9O1xuICAgIGxldCB7bWF0Y2hSZXNwb25zZX0gPSB7Li4udGhpcy5zdGF0ZX07XG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1ZXJ5LWltYWdlJyk7XG4gICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgaW1hZ2UgPSBjdHguZ2V0SW1hZ2VEYXRhKDAsIDAsIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0KTtcbiAgICBjb25zdCBwcm9jZXNzZWRJbWFnZTIgPSBhd2FpdCBjdnNlcnZpY2UuaW1hZ2VQcm9jZXNzaW5nMihpbWFnZSk7XG4gICAgLy8gZGVidWdnZXI7XG4gICAgLy8gUmVuZGVyIHRoZSBwcm9jZXNzZWQgaW1hZ2UgdG8gdGhlIGNhbnZhc1xuICAgIGNvbnN0IGNhbnZhczIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlcHJvY2Vzc2VkLWltYWdlMicpO1xuICAgIGNvbnN0IGN0eDIgPSBjYW52YXMyLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgaW1hZ2VEYXRhMiA9IHByb2Nlc3NlZEltYWdlMi5kYXRhLnBheWxvYWQ7XG4gICAgY3R4Mi5jYW52YXMud2lkdGggPSAxMTE7IC8vIGNvbHNcbiAgICBjdHgyLmNhbnZhcy5oZWlnaHQgPSAxMTA7IC8vIHJvd3NcbiAgICBjdHgyLnB1dEltYWdlRGF0YShpbWFnZURhdGEyLCAwLCAwKTtcblxuICAgIGNvbnN0IHByb2Nlc3NlZEltYWdlMyA9IGF3YWl0IGN2c2VydmljZS5pbWFnZVByb2Nlc3NpbmczKGltYWdlRGF0YTIpO1xuICAgIGNvbnN0IGNhbnZhczMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJlcHJvY2Vzc2VkLWltYWdlMycpO1xuICAgIGNvbnN0IGN0eDMgPSBjYW52YXMzLmdldENvbnRleHQoJzJkJyk7XG4gICAgY29uc3QgaW1hZ2VEYXRhMyA9IHByb2Nlc3NlZEltYWdlMy5kYXRhLnBheWxvYWQ7XG4gICAgY3R4My5jYW52YXMud2lkdGggPSAxMjg7XG4gICAgY3R4My5jYW52YXMuaGVpZ2h0ID0gMTI4O1xuICAgIGN0eDMucHV0SW1hZ2VEYXRhKGltYWdlRGF0YTMsIDAsIDApO1xuXG4gICAgLy8gbGV0IHBheWxvYWQgPSBhd2FpdCBjdnNlcnZpY2UuaW1hZ2VQcm9jZXNzaW5nNChpbWFnZURhdGEzKTtcbiAgICAvLyBwYXlsb2FkID0gcGF5bG9hZC5kYXRhLnBheWxvYWQ7XG4gICAgLy8gY29uc3QgY2FudmFzNCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmVwcm9jZXNzZWQtaW1hZ2U0Jyk7XG4gICAgLy8gY29uc3QgY3R4NCA9IGNhbnZhczQuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAvLyBjb25zdCBpbWFnZURhdGE0ID0gcGF5bG9hZC5pbWc7XG4gICAgLy8gY3R4NC5jYW52YXMud2lkdGggPSAxMjg7XG4gICAgLy8gY3R4NC5jYW52YXMuaGVpZ2h0ID0gMTI4O1xuICAgIC8vIGN0eDQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YTQsIDAsIDApO1xuXG4gICAgLy8gaWYobWV0aG9kVHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgLy8gICBtYXRjaFJlc3BvbnNlID0gKHBheWxvYWQuZGlzdGFuY2UgPCAwLjAxMSkgPyAxIDogMjtcbiAgICAvLyB9IGVsc2Uge1xuICAgIC8vICAgLy8gb3RoZXJ3aXNlIGl0J3MgdGV4dHVyZVxuICAgIC8vICAgbWF0Y2hSZXNwb25zZSA9IChwYXlsb2FkLmRpc3RhbmNlIDwgMC4xMzcpID8gMSA6IDI7XG4gICAgLy8gfVxuICAgIC8vIHRoaXMuc2V0U3RhdGUoe1xuICAgIC8vICAgdXNlcklkOiBwYXlsb2FkLnVzZXJJZCxcbiAgICAvLyAgIG1hdGNoZWRVc2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgIC8vICAgLy8gcm91bmRzIHRvIDcgZGVjaW1hbHMgcGxhY2VzXG4gICAgLy8gICBkaXN0YW5jZTogTnVtYmVyKE1hdGgucm91bmQocGF5bG9hZC5kaXN0YW5jZSsnZTcnKSsnZS03JyksXG4gICAgLy8gICBtYXRjaFJlc3BvbnNlXG4gICAgLy8gfSk7XG4gIH07XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdXNlcklkLCBtYXRjaGVkVXNlcklkLCBkaXN0YW5jZSwgbWF0Y2hSZXNwb25zZSB9ID0ge1xuICAgICAgLi4udGhpcy5zdGF0ZSxcbiAgICB9O1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+UGFsbSBEZXRlY3Rpb248L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1mb3JtXCI+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJzdGFydFN0b3BCdXR0b25cIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBkaXNhYmxlZD17dGhpcy5zdGF0ZS5pc0xvYWRpbmd9XG4gICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN0YXJ0fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIFN0YXJ0IElkZW50aWZpY2F0aW9uXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWV0aG9kLXNlbGVjdFwiPk1ldGhvZDwvbGFiZWw+XG4gICAgICAgICAgICA8c2VsZWN0IG5hbWU9XCJwZXRzXCIgaWQ9XCJtZXRob2Qtc2VsZWN0XCI+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsaW5lXCI+TGluZSBiYXNlZDwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwidGV4dHVyZVwiIGRpc2FibGVkPlRleHR1cmUgYmFzZWQ8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cInN0YXR1c1wiPjwvZGl2PlxuICAgICAgICA8aW1nIGlkPVwic291cmNlXCIgc3JjPXtpbWd9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgIGlkPVwicXVlcnktaW1hZ2VcIlxuICAgICAgICAgICAgd2lkdGg9e2ltYWdlV2lkdGh9XG4gICAgICAgICAgICBoZWlnaHQ9e2ltYWdlSGVpZ2h0fVxuICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgICAgICAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDxkaXY+UXVlcnkgSW1hZ2U8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIGlkPVwiY2hvb3NlLWRpZmZlcmVudFwiXG4gICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgIGFjY2VwdD1cImltYWdlL3BuZywgaW1hZ2UvanBlZ1wiXG4gICAgICAgICAgLy8gZGlzYWJsZWQ9e3RoaXMuc3RhdGUuaXNMb2FkaW5nfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImN2LXNlY3Rpb25cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBpZD1cInByZXByb2Nlc3NlZC1pbWFnZTJcIlxuICAgICAgICAgICAgICB3aWR0aD17MTExfVxuICAgICAgICAgICAgICBoZWlnaHQ9ezExMH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzU1NScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5FeHRyYWN0ZWQgUk9JPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxjYW52YXNcbiAgICAgICAgICAgICAgaWQ9XCJwcmVwcm9jZXNzZWQtaW1hZ2UzXCJcbiAgICAgICAgICAgICAgd2lkdGg9ezEyOH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXsxMjh9XG4gICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAnMjBweCcsXG4gICAgICAgICAgICAgICAgbWF4V2lkdGg6ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdibGFjaycsXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMXB4IHNvbGlkICM1NTUnLFxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxkaXY+RXh0cmFjdGVkIEZlYXR1cmU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGNhbnZhc1xuICAgICAgICAgICAgICBpZD1cInByZXByb2Nlc3NlZC1pbWFnZTRcIlxuICAgICAgICAgICAgICB3aWR0aD17MTI4fVxuICAgICAgICAgICAgICBoZWlnaHQ9ezEyOH1cbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6ICcyMHB4JyxcbiAgICAgICAgICAgICAgICBtYXhXaWR0aDogJzEwMCUnLFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQgIzU1NScsXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGRpdj5NYXRjaGVkIEZlYXR1cmU8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlc3VsdHNcIj5cbiAgICAgICAgICAgIDxkaXY+VXNlciBJZDoge3VzZXJJZH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+TWF0Y2hlZCBVc2VyIElkOiB7bWF0Y2hlZFVzZXJJZH08L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+RGlzdGFuY2U6IHtkaXN0YW5jZX08L2Rpdj5cbiAgICAgICAgICAgIHttYXRjaFJlc3BvbnNlID09PSAxICYmIDxkaXYgY2xhc3NOYW1lPVwic3VjY2Vzc1wiPkFDQ0VQVDwvZGl2Pn1cbiAgICAgICAgICAgIHttYXRjaFJlc3BvbnNlID09PSAyICYmIDxkaXYgY2xhc3NOYW1lPVwiZmFpbFwiPkRFQ0xJTkU8L2Rpdj59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuIl19