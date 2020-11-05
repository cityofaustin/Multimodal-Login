"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _cvWorker = _interopRequireDefault(require("../workers/cv.worker.js"));

class CvService {
  constructor() {
    this.worker = {};
  }
  /**
     * We will use this method privately to communicate with the worker and
     * return a promise with the result of the event. This way we can call
     * the worker asynchronously.
     */
  _dispatch(event) {
    const { msg } = event;
    this._status[msg] = ['loading'];

    this.worker.postMessage(event);

    return new Promise((res, rej) => {
      let interval = setInterval(() => {
        const status = this._status[msg];
        // console.log(status);
        if (status[0] === 'done') res(status[1]);
        if (status[0] === 'error') rej(status[1]);
        if (status[0] !== 'loading') {
          delete this._status[msg];
          clearInterval(interval);
        }
      }, 50);
    });
  }

  /**
     * First, we will load the worker and capture the onmessage
     * and onerror events to always know the status of the event
     * we have triggered.
     *
     * Then, we are going to call the 'load' event, as we've just
     * implemented it so that the worker can capture it.
     */
  load() {
    this._status = {};
    this.worker = new _cvWorker.default(); // load worker

    // Capture events and save [status, event] inside the _status object
    this.worker.onmessage = e => {
      this._status[e.data.msg] = ['done', e];
    };

    this.worker.onerror = e => {
      this._status[e.data.msg] = ['error', e];
    };

    return this._dispatch({ msg: 'load' });
  }

  /**
     * We are going to use the _dispatch event that we created before to
     * call the postMessage with the msg and the image as payload.
     *
     * Thanks to what we have implemented in the _dispatch, this will
     * return a promise with the processed image.
     */
  imageProcessing(payload) {
    return this._dispatch({ msg: 'imageProcessing', payload });
  }

  imageProcessing2(payload) {
    return this._dispatch({ msg: 'imageProcessing2', payload });
  }

  imageProcessing3(payload) {
    return this._dispatch({ msg: 'imageProcessing3', payload });
  }

  imageProcessing4(payload) {
    return this._dispatch({ msg: 'imageProcessing4', payload });
  }}


// Export the same instant everywhere
var _default = new CvService();exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9DdlNlcnZpY2UuanMiXSwibmFtZXMiOlsiQ3ZTZXJ2aWNlIiwiY29uc3RydWN0b3IiLCJ3b3JrZXIiLCJfZGlzcGF0Y2giLCJldmVudCIsIm1zZyIsIl9zdGF0dXMiLCJwb3N0TWVzc2FnZSIsIlByb21pc2UiLCJyZXMiLCJyZWoiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwic3RhdHVzIiwiY2xlYXJJbnRlcnZhbCIsImxvYWQiLCJXb3JrZXIiLCJvbm1lc3NhZ2UiLCJlIiwiZGF0YSIsIm9uZXJyb3IiLCJpbWFnZVByb2Nlc3NpbmciLCJwYXlsb2FkIiwiaW1hZ2VQcm9jZXNzaW5nMiIsImltYWdlUHJvY2Vzc2luZzMiLCJpbWFnZVByb2Nlc3Npbmc0Il0sIm1hcHBpbmdzIjoieUxBQUE7O0FBRUEsTUFBTUEsU0FBTixDQUFnQjtBQUNkQyxFQUFBQSxXQUFXLEdBQUc7QUFDWixTQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUNEO0FBQ0Q7Ozs7O0FBS0FDLEVBQUFBLFNBQVMsQ0FBQ0MsS0FBRCxFQUFRO0FBQ2YsVUFBTSxFQUFFQyxHQUFGLEtBQVVELEtBQWhCO0FBQ0EsU0FBS0UsT0FBTCxDQUFhRCxHQUFiLElBQW9CLENBQUMsU0FBRCxDQUFwQjs7QUFFQSxTQUFLSCxNQUFMLENBQVlLLFdBQVosQ0FBd0JILEtBQXhCOztBQUVBLFdBQU8sSUFBSUksT0FBSixDQUFZLENBQUNDLEdBQUQsRUFBTUMsR0FBTixLQUFjO0FBQy9CLFVBQUlDLFFBQVEsR0FBR0MsV0FBVyxDQUFDLE1BQU07QUFDL0IsY0FBTUMsTUFBTSxHQUFHLEtBQUtQLE9BQUwsQ0FBYUQsR0FBYixDQUFmO0FBQ0E7QUFDQSxZQUFJUSxNQUFNLENBQUMsQ0FBRCxDQUFOLEtBQWMsTUFBbEIsRUFBMEJKLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLENBQUQsQ0FBUCxDQUFIO0FBQzFCLFlBQUlBLE1BQU0sQ0FBQyxDQUFELENBQU4sS0FBYyxPQUFsQixFQUEyQkgsR0FBRyxDQUFDRyxNQUFNLENBQUMsQ0FBRCxDQUFQLENBQUg7QUFDM0IsWUFBSUEsTUFBTSxDQUFDLENBQUQsQ0FBTixLQUFjLFNBQWxCLEVBQTZCO0FBQzNCLGlCQUFPLEtBQUtQLE9BQUwsQ0FBYUQsR0FBYixDQUFQO0FBQ0FTLFVBQUFBLGFBQWEsQ0FBQ0gsUUFBRCxDQUFiO0FBQ0Q7QUFDRixPQVR5QixFQVN2QixFQVR1QixDQUExQjtBQVVELEtBWE0sQ0FBUDtBQVlEOztBQUVEOzs7Ozs7OztBQVFBSSxFQUFBQSxJQUFJLEdBQUc7QUFDTCxTQUFLVCxPQUFMLEdBQWUsRUFBZjtBQUNBLFNBQUtKLE1BQUwsR0FBYyxJQUFJYyxpQkFBSixFQUFkLENBRkssQ0FFdUI7O0FBRTVCO0FBQ0EsU0FBS2QsTUFBTCxDQUFZZSxTQUFaLEdBQXlCQyxDQUFELElBQU87QUFDN0IsV0FBS1osT0FBTCxDQUFhWSxDQUFDLENBQUNDLElBQUYsQ0FBT2QsR0FBcEIsSUFBMkIsQ0FBQyxNQUFELEVBQVNhLENBQVQsQ0FBM0I7QUFDRCxLQUZEOztBQUlBLFNBQUtoQixNQUFMLENBQVlrQixPQUFaLEdBQXVCRixDQUFELElBQU87QUFDM0IsV0FBS1osT0FBTCxDQUFhWSxDQUFDLENBQUNDLElBQUYsQ0FBT2QsR0FBcEIsSUFBMkIsQ0FBQyxPQUFELEVBQVVhLENBQVYsQ0FBM0I7QUFDRCxLQUZEOztBQUlBLFdBQU8sS0FBS2YsU0FBTCxDQUFlLEVBQUVFLEdBQUcsRUFBRSxNQUFQLEVBQWYsQ0FBUDtBQUNEOztBQUVEOzs7Ozs7O0FBT0FnQixFQUFBQSxlQUFlLENBQUNDLE9BQUQsRUFBVTtBQUN2QixXQUFPLEtBQUtuQixTQUFMLENBQWUsRUFBRUUsR0FBRyxFQUFFLGlCQUFQLEVBQTBCaUIsT0FBMUIsRUFBZixDQUFQO0FBQ0Q7O0FBRURDLEVBQUFBLGdCQUFnQixDQUFDRCxPQUFELEVBQVU7QUFDeEIsV0FBTyxLQUFLbkIsU0FBTCxDQUFlLEVBQUVFLEdBQUcsRUFBRSxrQkFBUCxFQUEyQmlCLE9BQTNCLEVBQWYsQ0FBUDtBQUNEOztBQUVERSxFQUFBQSxnQkFBZ0IsQ0FBQ0YsT0FBRCxFQUFVO0FBQ3hCLFdBQU8sS0FBS25CLFNBQUwsQ0FBZSxFQUFFRSxHQUFHLEVBQUUsa0JBQVAsRUFBMkJpQixPQUEzQixFQUFmLENBQVA7QUFDRDs7QUFFREcsRUFBQUEsZ0JBQWdCLENBQUNILE9BQUQsRUFBVTtBQUN4QixXQUFPLEtBQUtuQixTQUFMLENBQWUsRUFBRUUsR0FBRyxFQUFFLGtCQUFQLEVBQTJCaUIsT0FBM0IsRUFBZixDQUFQO0FBQ0QsR0ExRWE7OztBQTZFaEI7ZUFDZSxJQUFJdEIsU0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdvcmtlciBmcm9tICcuLi93b3JrZXJzL2N2Lndvcmtlci5qcyc7XG5cbmNsYXNzIEN2U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMud29ya2VyID0ge307XG4gIH1cbiAgLyoqXG4gICAqIFdlIHdpbGwgdXNlIHRoaXMgbWV0aG9kIHByaXZhdGVseSB0byBjb21tdW5pY2F0ZSB3aXRoIHRoZSB3b3JrZXIgYW5kXG4gICAqIHJldHVybiBhIHByb21pc2Ugd2l0aCB0aGUgcmVzdWx0IG9mIHRoZSBldmVudC4gVGhpcyB3YXkgd2UgY2FuIGNhbGxcbiAgICogdGhlIHdvcmtlciBhc3luY2hyb25vdXNseS5cbiAgICovXG4gIF9kaXNwYXRjaChldmVudCkge1xuICAgIGNvbnN0IHsgbXNnIH0gPSBldmVudDtcbiAgICB0aGlzLl9zdGF0dXNbbXNnXSA9IFsnbG9hZGluZyddO1xuXG4gICAgdGhpcy53b3JrZXIucG9zdE1lc3NhZ2UoZXZlbnQpO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xuICAgICAgbGV0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBjb25zdCBzdGF0dXMgPSB0aGlzLl9zdGF0dXNbbXNnXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3RhdHVzKTtcbiAgICAgICAgaWYgKHN0YXR1c1swXSA9PT0gJ2RvbmUnKSByZXMoc3RhdHVzWzFdKTtcbiAgICAgICAgaWYgKHN0YXR1c1swXSA9PT0gJ2Vycm9yJykgcmVqKHN0YXR1c1sxXSk7XG4gICAgICAgIGlmIChzdGF0dXNbMF0gIT09ICdsb2FkaW5nJykge1xuICAgICAgICAgIGRlbGV0ZSB0aGlzLl9zdGF0dXNbbXNnXTtcbiAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcbiAgICAgICAgfVxuICAgICAgfSwgNTApO1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcnN0LCB3ZSB3aWxsIGxvYWQgdGhlIHdvcmtlciBhbmQgY2FwdHVyZSB0aGUgb25tZXNzYWdlXG4gICAqIGFuZCBvbmVycm9yIGV2ZW50cyB0byBhbHdheXMga25vdyB0aGUgc3RhdHVzIG9mIHRoZSBldmVudFxuICAgKiB3ZSBoYXZlIHRyaWdnZXJlZC5cbiAgICpcbiAgICogVGhlbiwgd2UgYXJlIGdvaW5nIHRvIGNhbGwgdGhlICdsb2FkJyBldmVudCwgYXMgd2UndmUganVzdFxuICAgKiBpbXBsZW1lbnRlZCBpdCBzbyB0aGF0IHRoZSB3b3JrZXIgY2FuIGNhcHR1cmUgaXQuXG4gICAqL1xuICBsb2FkKCkge1xuICAgIHRoaXMuX3N0YXR1cyA9IHt9O1xuICAgIHRoaXMud29ya2VyID0gbmV3IFdvcmtlcigpOyAvLyBsb2FkIHdvcmtlclxuXG4gICAgLy8gQ2FwdHVyZSBldmVudHMgYW5kIHNhdmUgW3N0YXR1cywgZXZlbnRdIGluc2lkZSB0aGUgX3N0YXR1cyBvYmplY3RcbiAgICB0aGlzLndvcmtlci5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgdGhpcy5fc3RhdHVzW2UuZGF0YS5tc2ddID0gWydkb25lJywgZV1cbiAgICB9O1xuXG4gICAgdGhpcy53b3JrZXIub25lcnJvciA9IChlKSA9PiB7XG4gICAgICB0aGlzLl9zdGF0dXNbZS5kYXRhLm1zZ10gPSBbJ2Vycm9yJywgZV1cbiAgICB9O1xuXG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BhdGNoKHsgbXNnOiAnbG9hZCcgfSk7XG4gIH1cblxuICAvKipcbiAgICogV2UgYXJlIGdvaW5nIHRvIHVzZSB0aGUgX2Rpc3BhdGNoIGV2ZW50IHRoYXQgd2UgY3JlYXRlZCBiZWZvcmUgdG9cbiAgICogY2FsbCB0aGUgcG9zdE1lc3NhZ2Ugd2l0aCB0aGUgbXNnIGFuZCB0aGUgaW1hZ2UgYXMgcGF5bG9hZC5cbiAgICpcbiAgICogVGhhbmtzIHRvIHdoYXQgd2UgaGF2ZSBpbXBsZW1lbnRlZCBpbiB0aGUgX2Rpc3BhdGNoLCB0aGlzIHdpbGxcbiAgICogcmV0dXJuIGEgcHJvbWlzZSB3aXRoIHRoZSBwcm9jZXNzZWQgaW1hZ2UuXG4gICAqL1xuICBpbWFnZVByb2Nlc3NpbmcocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaCh7IG1zZzogJ2ltYWdlUHJvY2Vzc2luZycsIHBheWxvYWQgfSlcbiAgfVxuXG4gIGltYWdlUHJvY2Vzc2luZzIocGF5bG9hZCkge1xuICAgIHJldHVybiB0aGlzLl9kaXNwYXRjaCh7IG1zZzogJ2ltYWdlUHJvY2Vzc2luZzInLCBwYXlsb2FkIH0pXG4gIH1cblxuICBpbWFnZVByb2Nlc3NpbmczKHBheWxvYWQpIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzcGF0Y2goeyBtc2c6ICdpbWFnZVByb2Nlc3NpbmczJywgcGF5bG9hZCB9KVxuICB9XG5cbiAgaW1hZ2VQcm9jZXNzaW5nNChwYXlsb2FkKSB7XG4gICAgcmV0dXJuIHRoaXMuX2Rpc3BhdGNoKHsgbXNnOiAnaW1hZ2VQcm9jZXNzaW5nNCcsIHBheWxvYWQgfSlcbiAgfVxufVxuXG4vLyBFeHBvcnQgdGhlIHNhbWUgaW5zdGFudCBldmVyeXdoZXJlXG5leHBvcnQgZGVmYXVsdCBuZXcgQ3ZTZXJ2aWNlKCk7XG4iXX0=