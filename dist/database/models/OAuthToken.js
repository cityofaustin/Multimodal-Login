"use strict";var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;var _mongoose = _interopRequireDefault(require("mongoose"));

const OAuthTokenSchema = new _mongoose.default.Schema({
  accessToken: { type: String },
  accessTokenExpiresAt: { type: Date },
  client: { type: _mongoose.default.Schema.Types.ObjectId, ref: "OAuthClient" },
  clientId: { type: String },
  refreshToken: { type: String },
  refreshTokenExpiresAt: { type: Date },
  user: { type: _mongoose.default.Schema.Types.ObjectId, ref: "OAuthUser" },
  userId: { type: String } });


const OAuthToken = _mongoose.default.model("OAuthToken", OAuthTokenSchema);var _default =

OAuthToken;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvT0F1dGhUb2tlbi5qcyJdLCJuYW1lcyI6WyJPQXV0aFRva2VuU2NoZW1hIiwibW9uZ29vc2UiLCJTY2hlbWEiLCJhY2Nlc3NUb2tlbiIsInR5cGUiLCJTdHJpbmciLCJhY2Nlc3NUb2tlbkV4cGlyZXNBdCIsIkRhdGUiLCJjbGllbnQiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiY2xpZW50SWQiLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoVG9rZW5FeHBpcmVzQXQiLCJ1c2VyIiwidXNlcklkIiwiT0F1dGhUb2tlbiIsIm1vZGVsIl0sIm1hcHBpbmdzIjoieUxBQUE7O0FBRUEsTUFBTUEsZ0JBQWdCLEdBQUcsSUFBSUMsa0JBQVNDLE1BQWIsQ0FBb0I7QUFDekNDLEVBQUFBLFdBQVcsRUFBRSxFQUFFQyxJQUFJLEVBQUVDLE1BQVIsRUFENEI7QUFFekNDLEVBQUFBLG9CQUFvQixFQUFFLEVBQUVGLElBQUksRUFBRUcsSUFBUixFQUZtQjtBQUd6Q0MsRUFBQUEsTUFBTSxFQUFFLEVBQUVKLElBQUksRUFBRUgsa0JBQVNDLE1BQVQsQ0FBZ0JPLEtBQWhCLENBQXNCQyxRQUE5QixFQUF3Q0MsR0FBRyxFQUFFLGFBQTdDLEVBSGlDO0FBSXpDQyxFQUFBQSxRQUFRLEVBQUUsRUFBRVIsSUFBSSxFQUFFQyxNQUFSLEVBSitCO0FBS3pDUSxFQUFBQSxZQUFZLEVBQUUsRUFBRVQsSUFBSSxFQUFFQyxNQUFSLEVBTDJCO0FBTXpDUyxFQUFBQSxxQkFBcUIsRUFBRSxFQUFFVixJQUFJLEVBQUVHLElBQVIsRUFOa0I7QUFPekNRLEVBQUFBLElBQUksRUFBRSxFQUFFWCxJQUFJLEVBQUVILGtCQUFTQyxNQUFULENBQWdCTyxLQUFoQixDQUFzQkMsUUFBOUIsRUFBd0NDLEdBQUcsRUFBRSxXQUE3QyxFQVBtQztBQVF6Q0ssRUFBQUEsTUFBTSxFQUFFLEVBQUVaLElBQUksRUFBRUMsTUFBUixFQVJpQyxFQUFwQixDQUF6Qjs7O0FBV0EsTUFBTVksVUFBVSxHQUFHaEIsa0JBQVNpQixLQUFULENBQWUsWUFBZixFQUE2QmxCLGdCQUE3QixDQUFuQixDOztBQUVlaUIsVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcblxuY29uc3QgT0F1dGhUb2tlblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICAgIGFjY2Vzc1Rva2VuOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIGFjY2Vzc1Rva2VuRXhwaXJlc0F0OiB7IHR5cGU6IERhdGUgfSxcbiAgICBjbGllbnQ6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiT0F1dGhDbGllbnRcIiB9LFxuICAgIGNsaWVudElkOiB7IHR5cGU6IFN0cmluZyB9LFxuICAgIHJlZnJlc2hUb2tlbjogeyB0eXBlOiBTdHJpbmcgfSxcbiAgICByZWZyZXNoVG9rZW5FeHBpcmVzQXQ6IHsgdHlwZTogRGF0ZSB9LFxuICAgIHVzZXI6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiT0F1dGhVc2VyXCIgfSxcbiAgICB1c2VySWQ6IHsgdHlwZTogU3RyaW5nIH0sXG59KTtcblxuY29uc3QgT0F1dGhUb2tlbiA9IG1vbmdvb3NlLm1vZGVsKFwiT0F1dGhUb2tlblwiLCBPQXV0aFRva2VuU2NoZW1hKTtcblxuZXhwb3J0IGRlZmF1bHQgT0F1dGhUb2tlbjtcbiJdfQ==