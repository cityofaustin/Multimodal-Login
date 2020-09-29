"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _express = _interopRequireDefault(require("express"));
var _pages = _interopRequireDefault(require("./pages"));
var _auth = _interopRequireDefault(require("./auth"));
var _api = _interopRequireDefault(require("./api"));

const router = _express.default.Router();

router.use(_pages.default);
router.use(_auth.default);
router.use("/api", _api.default);var _default =

router;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9yb3V0ZXMvaW5kZXguanMiXSwibmFtZXMiOlsicm91dGVyIiwiZXhwcmVzcyIsIlJvdXRlciIsInVzZSIsInBhZ2VzIiwiYXV0aCIsImFwaSJdLCJtYXBwaW5ncyI6InlMQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLE1BQU0sR0FBR0MsaUJBQVFDLE1BQVIsRUFBZjs7QUFFQUYsTUFBTSxDQUFDRyxHQUFQLENBQVdDLGNBQVg7QUFDQUosTUFBTSxDQUFDRyxHQUFQLENBQVdFLGFBQVg7QUFDQUwsTUFBTSxDQUFDRyxHQUFQLENBQVcsTUFBWCxFQUFtQkcsWUFBbkIsRTs7QUFFZU4sTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHBhZ2VzIGZyb20gXCIuL3BhZ2VzXCI7XG5pbXBvcnQgYXV0aCBmcm9tIFwiLi9hdXRoXCI7XG5pbXBvcnQgYXBpIGZyb20gXCIuL2FwaVwiO1xuXG5jb25zdCByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG5yb3V0ZXIudXNlKHBhZ2VzKTtcbnJvdXRlci51c2UoYXV0aCk7XG5yb3V0ZXIudXNlKFwiL2FwaVwiLCBhcGkpO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXI7XG4iXX0=