"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _express = _interopRequireDefault(require("express"));
var _server = require("react-dom/server");
var _index = _interopRequireDefault(require("../components/pages/index"));
var _login = _interopRequireDefault(require("../components/pages/login"));
var _settings = _interopRequireDefault(require("../components/pages/settings"));
var _register = _interopRequireDefault(require("../components/pages/register"));
var _unregister = _interopRequireDefault(require("../components/pages/unregister"));
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

router.get('/settings', /*#__PURE__*/function () {var _ref3 = (0, _asyncToGenerator2.default)(function* (_req, res) {
    let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_settings.default));
    res.status(200).render('./pages/settings', { reactApp: reactComp });
  });return function (_x5, _x6) {return _ref3.apply(this, arguments);};}());

router.get('/register', /*#__PURE__*/function () {var _ref4 = (0, _asyncToGenerator2.default)(function* (req, res) {
    let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_register.default));
    res.status(200).render('./pages/register', { reactApp: reactComp });
  });return function (_x7, _x8) {return _ref4.apply(this, arguments);};}());

router.get('/unregister', /*#__PURE__*/function () {var _ref5 = (0, _asyncToGenerator2.default)(function* (req, res) {
    let reactComp = (0, _server.renderToString)( /*#__PURE__*/_react.default.createElement(_unregister.default));
    res.status(200).render('./pages/unregister', { reactApp: reactComp });
  });return function (_x9, _x10) {return _ref5.apply(this, arguments);};}());var _default =

router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvcGFnZXMuanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsImdldCIsInJlcSIsInJlcyIsInJlYWN0Q29tcCIsIlJlYWN0IiwiY3JlYXRlRWxlbWVudCIsIkluZGV4Iiwic3RhdHVzIiwicmVuZGVyIiwicmVhY3RBcHAiLCJMb2dpbiIsIl9yZXEiLCJTZXR0aW5ncyIsIlJlZ2lzdGVyIiwiVW5yZWdpc3RlciJdLCJtYXBwaW5ncyI6IjZSQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsTUFBTSxHQUFHQyxpQkFBUUMsTUFBUixFQUFmOztBQUVBRixNQUFNLENBQUNHLEdBQVAsQ0FBVyxHQUFYLHVFQUFnQixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDbEMsUUFBSUMsU0FBUyxHQUFHLDBDQUFlQyxlQUFNQyxhQUFOLENBQW9CQyxjQUFwQixDQUFmLENBQWhCO0FBQ0FKLElBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLE1BQWhCLENBQXVCLGVBQXZCLEVBQXdDLEVBQUVDLFFBQVEsRUFBRU4sU0FBWixFQUF4QztBQUNELEdBSEQ7O0FBS0FOLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFFBQVgsd0VBQXFCLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUN2QyxRQUFJQyxTQUFTLEdBQUcsMENBQWVDLGVBQU1DLGFBQU4sQ0FBb0JLLGNBQXBCLENBQWYsQ0FBaEI7QUFDQVIsSUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUIsZUFBdkIsRUFBd0MsRUFBRUMsUUFBUSxFQUFFTixTQUFaLEVBQXhDO0FBQ0QsR0FIRDs7QUFLQU4sTUFBTSxDQUFDRyxHQUFQLENBQVcsV0FBWCx3RUFBd0IsV0FBT1csSUFBUCxFQUFhVCxHQUFiLEVBQXFCO0FBQzNDLFFBQUlDLFNBQVMsR0FBRywwQ0FBZUMsZUFBTUMsYUFBTixDQUFvQk8saUJBQXBCLENBQWYsQ0FBaEI7QUFDQVYsSUFBQUEsR0FBRyxDQUFDSyxNQUFKLENBQVcsR0FBWCxFQUFnQkMsTUFBaEIsQ0FBdUIsa0JBQXZCLEVBQTJDLEVBQUVDLFFBQVEsRUFBRU4sU0FBWixFQUEzQztBQUNELEdBSEQ7O0FBS0FOLE1BQU0sQ0FBQ0csR0FBUCxDQUFXLFdBQVgsd0VBQXdCLFdBQU9DLEdBQVAsRUFBWUMsR0FBWixFQUFvQjtBQUMxQyxRQUFJQyxTQUFTLEdBQUcsMENBQWVDLGVBQU1DLGFBQU4sQ0FBb0JRLGlCQUFwQixDQUFmLENBQWhCO0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ0ssTUFBSixDQUFXLEdBQVgsRUFBZ0JDLE1BQWhCLENBQXVCLGtCQUF2QixFQUEyQyxFQUFFQyxRQUFRLEVBQUVOLFNBQVosRUFBM0M7QUFDRCxHQUhEOztBQUtBTixNQUFNLENBQUNHLEdBQVAsQ0FBVyxhQUFYLHdFQUEwQixXQUFPQyxHQUFQLEVBQVlDLEdBQVosRUFBb0I7QUFDNUMsUUFBSUMsU0FBUyxHQUFHLDBDQUFlQyxlQUFNQyxhQUFOLENBQW9CUyxtQkFBcEIsQ0FBZixDQUFoQjtBQUNBWixJQUFBQSxHQUFHLENBQUNLLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxNQUFoQixDQUF1QixvQkFBdkIsRUFBNkMsRUFBRUMsUUFBUSxFQUFFTixTQUFaLEVBQTdDO0FBQ0QsR0FIRCwwRTs7QUFLZU4sTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XG5pbXBvcnQgeyByZW5kZXJUb1N0cmluZyB9IGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IEluZGV4IGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZXMvaW5kZXgnO1xuaW1wb3J0IExvZ2luIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZXMvbG9naW4nO1xuaW1wb3J0IFNldHRpbmdzIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZXMvc2V0dGluZ3MnO1xuaW1wb3J0IFJlZ2lzdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZXMvcmVnaXN0ZXInO1xuaW1wb3J0IFVucmVnaXN0ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlcy91bnJlZ2lzdGVyJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHJvdXRlciA9IGV4cHJlc3MuUm91dGVyKCk7XG5cbnJvdXRlci5nZXQoJy8nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHJlYWN0Q29tcCA9IHJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoSW5kZXgpKTtcbiAgcmVzLnN0YXR1cygyMDApLnJlbmRlcignLi9wYWdlcy9pbmRleCcsIHsgcmVhY3RBcHA6IHJlYWN0Q29tcCB9KTtcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvbG9naW4nLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHJlYWN0Q29tcCA9IHJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoTG9naW4pKTtcbiAgcmVzLnN0YXR1cygyMDApLnJlbmRlcignLi9wYWdlcy9sb2dpbicsIHsgcmVhY3RBcHA6IHJlYWN0Q29tcCB9KTtcbn0pO1xuXG5yb3V0ZXIuZ2V0KCcvc2V0dGluZ3MnLCBhc3luYyAoX3JlcSwgcmVzKSA9PiB7XG4gIGxldCByZWFjdENvbXAgPSByZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KFNldHRpbmdzKSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5yZW5kZXIoJy4vcGFnZXMvc2V0dGluZ3MnLCB7IHJlYWN0QXBwOiByZWFjdENvbXAgfSk7XG59KTtcblxucm91dGVyLmdldCgnL3JlZ2lzdGVyJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGxldCByZWFjdENvbXAgPSByZW5kZXJUb1N0cmluZyhSZWFjdC5jcmVhdGVFbGVtZW50KFJlZ2lzdGVyKSk7XG4gIHJlcy5zdGF0dXMoMjAwKS5yZW5kZXIoJy4vcGFnZXMvcmVnaXN0ZXInLCB7IHJlYWN0QXBwOiByZWFjdENvbXAgfSk7XG59KTtcblxucm91dGVyLmdldCgnL3VucmVnaXN0ZXInLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgbGV0IHJlYWN0Q29tcCA9IHJlbmRlclRvU3RyaW5nKFJlYWN0LmNyZWF0ZUVsZW1lbnQoVW5yZWdpc3RlcikpO1xuICByZXMuc3RhdHVzKDIwMCkucmVuZGVyKCcuL3BhZ2VzL3VucmVnaXN0ZXInLCB7IHJlYWN0QXBwOiByZWFjdENvbXAgfSk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcm91dGVyO1xuIl19