"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _server = require("react-dom/server");
var _index = _interopRequireDefault(require("../components/pages/index"));
var _login = _interopRequireDefault(require("../components/pages/login"));
var _register = _interopRequireDefault(require("../components/pages/register"));
var _react = _interopRequireDefault(require("react"));

const router = _express.default.Router();

router.get('/', /*#__PURE__*/function () {var _ref = (0, _asyncToGenerator2.default)(function* (req, res) {
    let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_index.default));
    res.status(200).render('./pages/index', { reactApp: reactComp });
  });return function (_x, _x2) {return _ref.apply(this, arguments);};}());

router.get('/login', /*#__PURE__*/function () {var _ref2 = (0, _asyncToGenerator2.default)(function* (req, res) {
    let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_login.default));
    res.status(200).render('./pages/login', { reactApp: reactComp });
  });return function (_x3, _x4) {return _ref2.apply(this, arguments);};}());

router.get('/register', /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(function* (req, res) {
    let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_register.default));
    res.status(200).render('./pages/register', { reactApp: reactComp });
  });return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());var _default =

router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcGFnZXMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInJlYWN0Q29tcCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkluZGV4Iiwic3RhdHVzIiwicmVuZGVyIiwicmVhY3RBcHAiLCJMb2dpbiIsIlJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiNlJBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsR0FBWCx1RUFBZ0IsV0FBT0MsR0FBUCxFQUFZQyxHQUFaLEVBQW9CO0FBQ2xDLFFBQUlDLFNBQVMsR0FBRywwQ0FBZUMsZUFBTUMsYUFBTixDQUFvQkMsY0FBcEIsQ0FBZixDQUFoQjtBQUNBSixJQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxNQUFoQixDQUF1QixlQUF2QixFQUF3QyxFQUFFQyxRQUFRLEVBQUVOLFNBQVosRUFBeEM7QUFDRCxHQUhEOztBQUtBTixNQUFNLENBQUNHLEdBQVAsQ0FBVyxRQUFYLHdFQUFxQixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDdkMsUUFBSUMsU0FBUyxHQUFHLDBDQUFlQyxlQUFNQyxhQUFOLENBQW9CSyxjQUFwQixDQUFmLENBQWhCO0FBQ0FSLElBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLE1BQWhCLENBQXVCLGVBQXZCLEVBQXdDLEVBQUVDLFFBQVEsRUFBRU4sU0FBWixFQUF4QztBQUNELEdBSEQ7O0FBS0FOLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFdBQVgsd0VBQXdCLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUMxQyxRQUFJQyxTQUFTLEdBQUcsMENBQWVDLGVBQU1DLGFBQU4sQ0FBb0JNLGlCQUFwQixDQUFmLENBQWhCO0FBQ0FULElBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLE1BQWhCLENBQXVCLGtCQUF2QixFQUEyQyxFQUFFQyxRQUFRLEVBQUVOLFNBQVosRUFBM0M7QUFDRCxHQUhELHlFOztBQUtlTixNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGV4cHJlc3MgZnJvbSBcImV4cHJlc3NcIjtcbmltcG9ydCB7IHJlbmRlclRvU3RyaW5nIH0gZnJvbSAncmVhY3QtZG9tL3NlcnZlcic7XG5pbXBvcnQgSW5kZXggZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlcy9pbmRleCc7XG5pbXBvcnQgTG9naW4gZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlcy9sb2dpbic7XG5pbXBvcnQgUmVnaXN0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlcy9yZWdpc3Rlcic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCByZWFjdENvbXAgPSByZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KEluZGV4KSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5yZW5kZXIoJy4vcGFnZXMvaW5kZXgnLCB7IHJlYWN0QXBwOiByZWFjdENvbXAgfSk7XG59KTtcblxucm91dGVyLmdldCgnL2xvZ2luJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCByZWFjdENvbXAgPSByZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KExvZ2luKSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5yZW5kZXIoJy4vcGFnZXMvbG9naW4nLCB7IHJlYWN0QXBwOiByZWFjdENvbXAgfSk7XG59KTtcblxucm91dGVyLmdldCgnL3JlZ2lzdGVyJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCByZWFjdENvbXAgPSByZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KFJlZ2lzdGVyKSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5yZW5kZXIoJy4vcGFnZXMvcmVnaXN0ZXInLCB7IHJlYWN0QXBwOiByZWFjdENvbXAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19