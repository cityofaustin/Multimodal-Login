"use strict";var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var express = _interopRequireWildcard(require("express"));

class HealthController {



  constructor() {(0, _defineProperty2.default)(this, "path", '/');(0, _defineProperty2.default)(this, "router", express.Router());(0, _defineProperty2.default)(this, "getHealth",








    (request, response) => {
      return response.json({ status: 'UP' });
    });this.initializeRoutes();return this.router;}initializeRoutes() {this.router.get(this.path, this.getHealth);}}var _default =


HealthController;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb250cm9sbGVycy9IZWFsdGhDb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbIkhlYWx0aENvbnRyb2xsZXIiLCJjb25zdHJ1Y3RvciIsImV4cHJlc3MiLCJSb3V0ZXIiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJqc29uIiwic3RhdHVzIiwiaW5pdGlhbGl6ZVJvdXRlcyIsInJvdXRlciIsImdldCIsInBhdGgiLCJnZXRIZWFsdGgiXSwibWFwcGluZ3MiOiJnWEFBQTs7QUFFQSxNQUFNQSxnQkFBTixDQUF1Qjs7OztBQUlyQkMsRUFBQUEsV0FBVyxHQUFHLDZDQUhQLEdBR08sZ0RBRkxDLE9BQU8sQ0FBQ0MsTUFBUixFQUVLOzs7Ozs7Ozs7QUFTRixLQUFDQyxPQUFELEVBQVVDLFFBQVYsS0FBdUI7QUFDakMsYUFBT0EsUUFBUSxDQUFDQyxJQUFULENBQWMsRUFBQ0MsTUFBTSxFQUFFLElBQVQsRUFBZCxDQUFQO0FBQ0QsS0FYYSxFQUNaLEtBQUtDLGdCQUFMLEdBQ0EsT0FBTyxLQUFLQyxNQUFaLENBQ0QsQ0FFREQsZ0JBQWdCLEdBQUcsQ0FDakIsS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCLEtBQUtDLElBQXJCLEVBQTJCLEtBQUtDLFNBQWhDLEVBQ0QsQ0FYb0IsQzs7O0FBa0JSWixnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIGV4cHJlc3MgZnJvbSAnZXhwcmVzcyc7XG5cbmNsYXNzIEhlYWx0aENvbnRyb2xsZXIge1xuICBwYXRoID0gJy8nO1xuICByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuaW5pdGlhbGl6ZVJvdXRlcygpO1xuICAgIHJldHVybiB0aGlzLnJvdXRlcjtcbiAgfVxuXG4gIGluaXRpYWxpemVSb3V0ZXMoKSB7XG4gICAgdGhpcy5yb3V0ZXIuZ2V0KHRoaXMucGF0aCwgdGhpcy5nZXRIZWFsdGgpO1xuICB9XG5cbiAgZ2V0SGVhbHRoID0gKHJlcXVlc3QsIHJlc3BvbnNlKSA9PiB7XG4gICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oe3N0YXR1czogJ1VQJ30pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWx0aENvbnRyb2xsZXI7XG4iXX0=