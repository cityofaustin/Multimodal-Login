"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));const common = require("../common/common");
const Crypto = require("crypto");

module.exports = {
  store: function () {var _ref = (0, _asyncToGenerator2.default)(function* (guid, key) {
      return module.exports.storeToDb(guid, key);
    });return function store(_x, _x2) {return _ref.apply(this, arguments);};}(),
  retrieve: function () {var _ref2 = (0, _asyncToGenerator2.default)(function* (guid) {
      return module.exports.retrieveFromDb(guid);
    });return function retrieve(_x3) {return _ref2.apply(this, arguments);};}(),

  storeToDb: function () {var _ref3 = (0, _asyncToGenerator2.default)(function* (guid, key) {
      let cipher = Crypto.createCipher("aes-256-cbc", process.env.AUTH_SECRET);
      let encryptedKey = cipher.update(key, "utf8", "hex");
      encryptedKey += cipher.final("hex");

      yield common.dbClient.store(guid, encryptedKey);
    });return function storeToDb(_x4, _x5) {return _ref3.apply(this, arguments);};}(),

  retrieveFromDb: function () {var _ref4 = (0, _asyncToGenerator2.default)(function* (guid) {
      const keyObj = yield common.dbClient.retrieve(guid);

      let decipher = Crypto.createDecipher(
      "aes-256-cbc",
      process.env.AUTH_SECRET);


      let decryptedKey = decipher.update(keyObj.encryptedKey, "hex", "utf8");
      decryptedKey += decipher.final("utf8");

      return decryptedKey;
    });return function retrieveFromDb(_x6) {return _ref4.apply(this, arguments);};}() };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9jb21tb24vc2VjdXJlS2V5U3RvcmFnZS5qcyJdLCJuYW1lcyI6WyJjb21tb24iLCJyZXF1aXJlIiwiQ3J5cHRvIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0b3JlIiwiZ3VpZCIsImtleSIsInN0b3JlVG9EYiIsInJldHJpZXZlIiwicmV0cmlldmVGcm9tRGIiLCJjaXBoZXIiLCJjcmVhdGVDaXBoZXIiLCJwcm9jZXNzIiwiZW52IiwiQVVUSF9TRUNSRVQiLCJlbmNyeXB0ZWRLZXkiLCJ1cGRhdGUiLCJmaW5hbCIsImRiQ2xpZW50Iiwia2V5T2JqIiwiZGVjaXBoZXIiLCJjcmVhdGVEZWNpcGhlciIsImRlY3J5cHRlZEtleSJdLCJtYXBwaW5ncyI6InNNQUFBLE1BQU1BLE1BQU0sR0FBR0MsT0FBTyxDQUFDLGtCQUFELENBQXRCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHRCxPQUFPLENBQUMsUUFBRCxDQUF0Qjs7QUFFQUUsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2ZDLEVBQUFBLEtBQUssMERBQUUsV0FBT0MsSUFBUCxFQUFhQyxHQUFiLEVBQXFCO0FBQzFCLGFBQU9KLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlSSxTQUFmLENBQXlCRixJQUF6QixFQUErQkMsR0FBL0IsQ0FBUDtBQUNELEtBRkksMEVBRFU7QUFJZkUsRUFBQUEsUUFBUSwyREFBRSxXQUFPSCxJQUFQLEVBQWdCO0FBQ3hCLGFBQU9ILE1BQU0sQ0FBQ0MsT0FBUCxDQUFlTSxjQUFmLENBQThCSixJQUE5QixDQUFQO0FBQ0QsS0FGTywwRUFKTzs7QUFRZkUsRUFBQUEsU0FBUywyREFBRSxXQUFPRixJQUFQLEVBQWFDLEdBQWIsRUFBcUI7QUFDOUIsVUFBSUksTUFBTSxHQUFHVCxNQUFNLENBQUNVLFlBQVAsQ0FBb0IsYUFBcEIsRUFBbUNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxXQUEvQyxDQUFiO0FBQ0EsVUFBSUMsWUFBWSxHQUFHTCxNQUFNLENBQUNNLE1BQVAsQ0FBY1YsR0FBZCxFQUFtQixNQUFuQixFQUEyQixLQUEzQixDQUFuQjtBQUNBUyxNQUFBQSxZQUFZLElBQUlMLE1BQU0sQ0FBQ08sS0FBUCxDQUFhLEtBQWIsQ0FBaEI7O0FBRUEsWUFBTWxCLE1BQU0sQ0FBQ21CLFFBQVAsQ0FBZ0JkLEtBQWhCLENBQXNCQyxJQUF0QixFQUE0QlUsWUFBNUIsQ0FBTjtBQUNELEtBTlEsZ0ZBUk07O0FBZ0JmTixFQUFBQSxjQUFjLDJEQUFFLFdBQU9KLElBQVAsRUFBZ0I7QUFDOUIsWUFBTWMsTUFBTSxTQUFTcEIsTUFBTSxDQUFDbUIsUUFBUCxDQUFnQlYsUUFBaEIsQ0FBeUJILElBQXpCLENBQXJCOztBQUVBLFVBQUllLFFBQVEsR0FBR25CLE1BQU0sQ0FBQ29CLGNBQVA7QUFDYixtQkFEYTtBQUViVCxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsV0FGQyxDQUFmOzs7QUFLQSxVQUFJUSxZQUFZLEdBQUdGLFFBQVEsQ0FBQ0osTUFBVCxDQUFnQkcsTUFBTSxDQUFDSixZQUF2QixFQUFxQyxLQUFyQyxFQUE0QyxNQUE1QyxDQUFuQjtBQUNBTyxNQUFBQSxZQUFZLElBQUlGLFFBQVEsQ0FBQ0gsS0FBVCxDQUFlLE1BQWYsQ0FBaEI7O0FBRUEsYUFBT0ssWUFBUDtBQUNELEtBWmEsZ0ZBaEJDLEVBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgY29tbW9uID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21tb25cIik7XG5jb25zdCBDcnlwdG8gPSByZXF1aXJlKFwiY3J5cHRvXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc3RvcmU6IGFzeW5jIChndWlkLCBrZXkpID0+IHtcbiAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHMuc3RvcmVUb0RiKGd1aWQsIGtleSk7XG4gIH0sXG4gIHJldHJpZXZlOiBhc3luYyAoZ3VpZCkgPT4ge1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cy5yZXRyaWV2ZUZyb21EYihndWlkKTtcbiAgfSxcblxuICBzdG9yZVRvRGI6IGFzeW5jIChndWlkLCBrZXkpID0+IHtcbiAgICBsZXQgY2lwaGVyID0gQ3J5cHRvLmNyZWF0ZUNpcGhlcihcImFlcy0yNTYtY2JjXCIsIHByb2Nlc3MuZW52LkFVVEhfU0VDUkVUKTtcbiAgICBsZXQgZW5jcnlwdGVkS2V5ID0gY2lwaGVyLnVwZGF0ZShrZXksIFwidXRmOFwiLCBcImhleFwiKTtcbiAgICBlbmNyeXB0ZWRLZXkgKz0gY2lwaGVyLmZpbmFsKFwiaGV4XCIpO1xuXG4gICAgYXdhaXQgY29tbW9uLmRiQ2xpZW50LnN0b3JlKGd1aWQsIGVuY3J5cHRlZEtleSk7XG4gIH0sXG5cbiAgcmV0cmlldmVGcm9tRGI6IGFzeW5jIChndWlkKSA9PiB7XG4gICAgY29uc3Qga2V5T2JqID0gYXdhaXQgY29tbW9uLmRiQ2xpZW50LnJldHJpZXZlKGd1aWQpO1xuXG4gICAgbGV0IGRlY2lwaGVyID0gQ3J5cHRvLmNyZWF0ZURlY2lwaGVyKFxuICAgICAgXCJhZXMtMjU2LWNiY1wiLFxuICAgICAgcHJvY2Vzcy5lbnYuQVVUSF9TRUNSRVRcbiAgICApO1xuXG4gICAgbGV0IGRlY3J5cHRlZEtleSA9IGRlY2lwaGVyLnVwZGF0ZShrZXlPYmouZW5jcnlwdGVkS2V5LCBcImhleFwiLCBcInV0ZjhcIik7XG4gICAgZGVjcnlwdGVkS2V5ICs9IGRlY2lwaGVyLmZpbmFsKFwidXRmOFwiKTtcblxuICAgIHJldHVybiBkZWNyeXB0ZWRLZXk7XG4gIH0sXG59O1xuIl19