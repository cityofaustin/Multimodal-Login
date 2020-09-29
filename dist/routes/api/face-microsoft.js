"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _CognitiveFaceService = _interopRequireDefault(require("../../services/CognitiveFaceService"));

const router = _express.default.Router();

router.post('/verify/face', /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* (req, res) {
    if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined)
    {
      res.status(501).json({
        error: 'Must include a file to upload.' });

      return;
    }
    const file =
    req.files.img[0] === undefined ? req.files.img : req.files.img[0];
    const dataBuffer = fs.readFileSync(file.tempFilePath);
    const response = yield _CognitiveFaceService.default.verifyFaceToUsername(
    dataBuffer,
    req.body.username);

    return res.json({ registerFaceResponse: response });
  });return function (_x, _x2) {return _ref.apply(this, arguments);};}());

router.post('/register/face', /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(function* (req, res) {
    if (
    req.files === undefined ||
    req.files === null ||
    req.files.img === undefined)
    {
      res.status(501).json({
        error: 'Must include a file to upload.' });

      return;
    }
    const file =
    req.files.img[0] === undefined ? req.files.img : req.files.img[0];
    const dataBuffer = fs.readFileSync(file.tempFilePath);
    const response = yield _CognitiveFaceService.default.registerFaceToUsername(
    dataBuffer,
    req.body.username);

    return res.json({ registerFaceResponse: response });
  });return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());var _default =

router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9yb3V0ZXMvYXBpL2ZhY2UtbWljcm9zb2Z0LmpzIl0sIm5hbWVzIjpbInJvdXRlciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJwb3N0IiwicmVxIiwicmVzIiwiZmlsZXMiLCJ1bmRlZmluZWQiLCJpbWciLCJzdGF0dXMiLCJqc29uIiwiZXJyb3IiLCJmaWxlIiwiZGF0YUJ1ZmZlciIsImZzIiwicmVhZEZpbGVTeW5jIiwidGVtcEZpbGVQYXRoIiwicmVzcG9uc2UiLCJDb2duaXRpdmVGYWNlU2VydmljZSIsInZlcmlmeUZhY2VUb1VzZXJuYW1lIiwiYm9keSIsInVzZXJuYW1lIiwicmVnaXN0ZXJGYWNlUmVzcG9uc2UiLCJyZWdpc3RlckZhY2VUb1VzZXJuYW1lIl0sIm1hcHBpbmdzIjoiNlJBQUE7QUFDQTs7QUFFQSxNQUFNQSxNQUFNLEdBQUdDLGlCQUFRQyxNQUFSLEVBQWY7O0FBRUFGLE1BQU0sQ0FBQ0csSUFBUCxDQUFZLGNBQVosdUVBQTRCLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUM5QztBQUNFRCxJQUFBQSxHQUFHLENBQUNFLEtBQUosS0FBY0MsU0FBZDtBQUNBSCxJQUFBQSxHQUFHLENBQUNFLEtBQUosS0FBYyxJQURkO0FBRUFGLElBQUFBLEdBQUcsQ0FBQ0UsS0FBSixDQUFVRSxHQUFWLEtBQWtCRCxTQUhwQjtBQUlFO0FBQ0FGLE1BQUFBLEdBQUcsQ0FBQ0ksTUFBSixDQUFXLEdBQVgsRUFBZ0JDLElBQWhCLENBQXFCO0FBQ25CQyxRQUFBQSxLQUFLLEVBQUUsZ0NBRFksRUFBckI7O0FBR0E7QUFDRDtBQUNELFVBQU1DLElBQUk7QUFDUlIsSUFBQUEsR0FBRyxDQUFDRSxLQUFKLENBQVVFLEdBQVYsQ0FBYyxDQUFkLE1BQXFCRCxTQUFyQixHQUFpQ0gsR0FBRyxDQUFDRSxLQUFKLENBQVVFLEdBQTNDLEdBQWlESixHQUFHLENBQUNFLEtBQUosQ0FBVUUsR0FBVixDQUFjLENBQWQsQ0FEbkQ7QUFFQSxVQUFNSyxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsWUFBSCxDQUFnQkgsSUFBSSxDQUFDSSxZQUFyQixDQUFuQjtBQUNBLFVBQU1DLFFBQVEsU0FBU0MsOEJBQXFCQyxvQkFBckI7QUFDckJOLElBQUFBLFVBRHFCO0FBRXJCVCxJQUFBQSxHQUFHLENBQUNnQixJQUFKLENBQVNDLFFBRlksQ0FBdkI7O0FBSUEsV0FBT2hCLEdBQUcsQ0FBQ0ssSUFBSixDQUFTLEVBQUVZLG9CQUFvQixFQUFFTCxRQUF4QixFQUFULENBQVA7QUFDRCxHQW5CRDs7QUFxQkFqQixNQUFNLENBQUNHLElBQVAsQ0FBWSxnQkFBWix3RUFBOEIsV0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQW9CO0FBQ2hEO0FBQ0VELElBQUFBLEdBQUcsQ0FBQ0UsS0FBSixLQUFjQyxTQUFkO0FBQ0FILElBQUFBLEdBQUcsQ0FBQ0UsS0FBSixLQUFjLElBRGQ7QUFFQUYsSUFBQUEsR0FBRyxDQUFDRSxLQUFKLENBQVVFLEdBQVYsS0FBa0JELFNBSHBCO0FBSUU7QUFDQUYsTUFBQUEsR0FBRyxDQUFDSSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUI7QUFDbkJDLFFBQUFBLEtBQUssRUFBRSxnQ0FEWSxFQUFyQjs7QUFHQTtBQUNEO0FBQ0QsVUFBTUMsSUFBSTtBQUNSUixJQUFBQSxHQUFHLENBQUNFLEtBQUosQ0FBVUUsR0FBVixDQUFjLENBQWQsTUFBcUJELFNBQXJCLEdBQWlDSCxHQUFHLENBQUNFLEtBQUosQ0FBVUUsR0FBM0MsR0FBaURKLEdBQUcsQ0FBQ0UsS0FBSixDQUFVRSxHQUFWLENBQWMsQ0FBZCxDQURuRDtBQUVBLFVBQU1LLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxZQUFILENBQWdCSCxJQUFJLENBQUNJLFlBQXJCLENBQW5CO0FBQ0EsVUFBTUMsUUFBUSxTQUFTQyw4QkFBcUJLLHNCQUFyQjtBQUNyQlYsSUFBQUEsVUFEcUI7QUFFckJULElBQUFBLEdBQUcsQ0FBQ2dCLElBQUosQ0FBU0MsUUFGWSxDQUF2Qjs7QUFJQSxXQUFPaEIsR0FBRyxDQUFDSyxJQUFKLENBQVMsRUFBRVksb0JBQW9CLEVBQUVMLFFBQXhCLEVBQVQsQ0FBUDtBQUNELEdBbkJELHlFOztBQXFCZWpCLE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tIFwiZXhwcmVzc1wiO1xuaW1wb3J0IENvZ25pdGl2ZUZhY2VTZXJ2aWNlIGZyb20gJy4uLy4uL3NlcnZpY2VzL0NvZ25pdGl2ZUZhY2VTZXJ2aWNlJztcblxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKTtcblxucm91dGVyLnBvc3QoJy92ZXJpZnkvZmFjZScsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICBpZiAoXG4gICAgcmVxLmZpbGVzID09PSB1bmRlZmluZWQgfHxcbiAgICByZXEuZmlsZXMgPT09IG51bGwgfHxcbiAgICByZXEuZmlsZXMuaW1nID09PSB1bmRlZmluZWRcbiAgKSB7XG4gICAgcmVzLnN0YXR1cyg1MDEpLmpzb24oe1xuICAgICAgZXJyb3I6ICdNdXN0IGluY2x1ZGUgYSBmaWxlIHRvIHVwbG9hZC4nLFxuICAgIH0pO1xuICAgIHJldHVybjtcbiAgfVxuICBjb25zdCBmaWxlID1cbiAgICByZXEuZmlsZXMuaW1nWzBdID09PSB1bmRlZmluZWQgPyByZXEuZmlsZXMuaW1nIDogcmVxLmZpbGVzLmltZ1swXTtcbiAgY29uc3QgZGF0YUJ1ZmZlciA9IGZzLnJlYWRGaWxlU3luYyhmaWxlLnRlbXBGaWxlUGF0aCk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgQ29nbml0aXZlRmFjZVNlcnZpY2UudmVyaWZ5RmFjZVRvVXNlcm5hbWUoXG4gICAgZGF0YUJ1ZmZlcixcbiAgICByZXEuYm9keS51c2VybmFtZVxuICApO1xuICByZXR1cm4gcmVzLmpzb24oeyByZWdpc3RlckZhY2VSZXNwb25zZTogcmVzcG9uc2UgfSk7XG59KTtcblxucm91dGVyLnBvc3QoJy9yZWdpc3Rlci9mYWNlJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGlmIChcbiAgICByZXEuZmlsZXMgPT09IHVuZGVmaW5lZCB8fFxuICAgIHJlcS5maWxlcyA9PT0gbnVsbCB8fFxuICAgIHJlcS5maWxlcy5pbWcgPT09IHVuZGVmaW5lZFxuICApIHtcbiAgICByZXMuc3RhdHVzKDUwMSkuanNvbih7XG4gICAgICBlcnJvcjogJ011c3QgaW5jbHVkZSBhIGZpbGUgdG8gdXBsb2FkLicsXG4gICAgfSk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGNvbnN0IGZpbGUgPVxuICAgIHJlcS5maWxlcy5pbWdbMF0gPT09IHVuZGVmaW5lZCA/IHJlcS5maWxlcy5pbWcgOiByZXEuZmlsZXMuaW1nWzBdO1xuICBjb25zdCBkYXRhQnVmZmVyID0gZnMucmVhZEZpbGVTeW5jKGZpbGUudGVtcEZpbGVQYXRoKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBDb2duaXRpdmVGYWNlU2VydmljZS5yZWdpc3RlckZhY2VUb1VzZXJuYW1lKFxuICAgIGRhdGFCdWZmZXIsXG4gICAgcmVxLmJvZHkudXNlcm5hbWVcbiAgKTtcbiAgcmV0dXJuIHJlcy5qc29uKHsgcmVnaXN0ZXJGYWNlUmVzcG9uc2U6IHJlc3BvbnNlIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==