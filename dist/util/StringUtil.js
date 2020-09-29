"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));var _fs = _interopRequireDefault(require("fs"));

class StringUtil {
  static stringFromFile(input) {return (0, _asyncToGenerator2.default)(function* () {
      // const readFileAsync = (inputFile) => {
      //   return new Promise((resolve, reject) => {
      //     const reader = new FileReader();
      //     reader.onload = () => {
      //       resolve(reader.result);
      //     };
      //     reader.onerror = reject;
      //     reader.readAsDataURL(inputFile);
      //   });
      // };

      // const returnString = await readFileAsync(input);
      // return returnString;
      const data = yield _fs.default.promises.readFile(input);
      return new Buffer(data).toString('utf8');})();
  }}var _default =


StringUtil;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsL1N0cmluZ1V0aWwuanMiXSwibmFtZXMiOlsiU3RyaW5nVXRpbCIsInN0cmluZ0Zyb21GaWxlIiwiaW5wdXQiLCJkYXRhIiwiZnMiLCJwcm9taXNlcyIsInJlYWRGaWxlIiwiQnVmZmVyIiwidG9TdHJpbmciXSwibWFwcGluZ3MiOiI2UkFBQTs7QUFFQSxNQUFNQSxVQUFOLENBQWlCO0FBQ2YsU0FBYUMsY0FBYixDQUE0QkMsS0FBNUIsRUFBbUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQU1DLElBQUksU0FBU0MsWUFBR0MsUUFBSCxDQUFZQyxRQUFaLENBQXFCSixLQUFyQixDQUFuQjtBQUNBLGFBQVEsSUFBSUssTUFBSixDQUFXSixJQUFYLENBQUQsQ0FBbUJLLFFBQW5CLENBQTRCLE1BQTVCLENBQVAsQ0FmaUM7QUFnQmxDLEdBakJjLEM7OztBQW9CRlIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmcyBmcm9tIFwiZnNcIjtcblxuY2xhc3MgU3RyaW5nVXRpbCB7XG4gIHN0YXRpYyBhc3luYyBzdHJpbmdGcm9tRmlsZShpbnB1dCkge1xuICAgIC8vIGNvbnN0IHJlYWRGaWxlQXN5bmMgPSAoaW5wdXRGaWxlKSA9PiB7XG4gICAgLy8gICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgIC8vICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xuICAgIC8vICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xuICAgIC8vICAgICAgIHJlc29sdmUocmVhZGVyLnJlc3VsdCk7XG4gICAgLy8gICAgIH07XG4gICAgLy8gICAgIHJlYWRlci5vbmVycm9yID0gcmVqZWN0O1xuICAgIC8vICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChpbnB1dEZpbGUpO1xuICAgIC8vICAgfSk7XG4gICAgLy8gfTtcblxuICAgIC8vIGNvbnN0IHJldHVyblN0cmluZyA9IGF3YWl0IHJlYWRGaWxlQXN5bmMoaW5wdXQpO1xuICAgIC8vIHJldHVybiByZXR1cm5TdHJpbmc7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZzLnByb21pc2VzLnJlYWRGaWxlKGlucHV0KTtcbiAgICByZXR1cm4gKG5ldyBCdWZmZXIoZGF0YSkpLnRvU3RyaW5nKCd1dGY4Jyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU3RyaW5nVXRpbDtcbiJdfQ==