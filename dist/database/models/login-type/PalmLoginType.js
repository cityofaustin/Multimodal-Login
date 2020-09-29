"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));
var _LoginTypeBase = _interopRequireDefault(require("./LoginTypeBase"));

_LoginTypeBase.default.discriminator(
"PalmLoginType",
new _mongoose.default.Schema({
  palmGuidSalt: { type: String, required: true },
  palmGuidHash: { type: String, required: true } }));var _default =



_mongoose.default.model("PalmLoginType");exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvbG9naW4tdHlwZS9QYWxtTG9naW5UeXBlLmpzIl0sIm5hbWVzIjpbIkxvZ2luVHlwZUJhc2UiLCJkaXNjcmltaW5hdG9yIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJwYWxtR3VpZFNhbHQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJwYWxtR3VpZEhhc2giLCJtb2RlbCJdLCJtYXBwaW5ncyI6InlMQUFBO0FBQ0E7O0FBRUFBLHVCQUFjQyxhQUFkO0FBQ0UsZUFERjtBQUVFLElBQUlDLGtCQUFTQyxNQUFiLENBQW9CO0FBQ2xCQyxFQUFBQSxZQUFZLEVBQUUsRUFBRUMsSUFBSSxFQUFFQyxNQUFSLEVBQWdCQyxRQUFRLEVBQUUsSUFBMUIsRUFESTtBQUVsQkMsRUFBQUEsWUFBWSxFQUFFLEVBQUVILElBQUksRUFBRUMsTUFBUixFQUFnQkMsUUFBUSxFQUFFLElBQTFCLEVBRkksRUFBcEIsQ0FGRixFOzs7O0FBUWVMLGtCQUFTTyxLQUFULENBQWUsZUFBZixDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xuaW1wb3J0IExvZ2luVHlwZUJhc2UgZnJvbSBcIi4vTG9naW5UeXBlQmFzZVwiO1xuXG5Mb2dpblR5cGVCYXNlLmRpc2NyaW1pbmF0b3IoXG4gIFwiUGFsbUxvZ2luVHlwZVwiLFxuICBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgICBwYWxtR3VpZFNhbHQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHBhbG1HdWlkSGFzaDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIH0pXG4pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbChcIlBhbG1Mb2dpblR5cGVcIik7XG4iXX0=