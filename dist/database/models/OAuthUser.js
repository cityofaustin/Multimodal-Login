"use strict";var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

var OAuthUserSchema = new mongoose.Schema({
  oauthId: { type: String, index: true },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    // match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true },

  email: String,
  contactEmail: String,
  phoneNumber: String,
  oneTimeCode: Number,
  oneTimeCodeIssueDate: Date,
  loginTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: "LoginTypeBase" }] });


OAuthUserSchema.plugin(uniqueValidator, { message: "is already taken." });

const OAuthUser = mongoose.model("OAuthUser", OAuthUserSchema);
module.exports = OAuthUser;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvT0F1dGhVc2VyLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsInVuaXF1ZVZhbGlkYXRvciIsIk9BdXRoVXNlclNjaGVtYSIsIlNjaGVtYSIsIm9hdXRoSWQiLCJ0eXBlIiwiU3RyaW5nIiwiaW5kZXgiLCJ1c2VybmFtZSIsImxvd2VyY2FzZSIsInVuaXF1ZSIsImVtYWlsIiwiY29udGFjdEVtYWlsIiwicGhvbmVOdW1iZXIiLCJvbmVUaW1lQ29kZSIsIk51bWJlciIsIm9uZVRpbWVDb2RlSXNzdWVEYXRlIiwiRGF0ZSIsImxvZ2luVHlwZXMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwicGx1Z2luIiwibWVzc2FnZSIsIk9BdXRoVXNlciIsIm1vZGVsIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6ImFBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF0QjtBQUNBLElBQUlDLGVBQWUsR0FBR0QsT0FBTyxDQUFDLDJCQUFELENBQTdCOztBQUVBLElBQUlFLGVBQWUsR0FBRyxJQUFJSCxRQUFRLENBQUNJLE1BQWIsQ0FBb0I7QUFDeENDLEVBQUFBLE9BQU8sRUFBRSxFQUFFQyxJQUFJLEVBQUVDLE1BQVIsRUFBZ0JDLEtBQUssRUFBRSxJQUF2QixFQUQrQjtBQUV4Q0MsRUFBQUEsUUFBUSxFQUFFO0FBQ1JILElBQUFBLElBQUksRUFBRUMsTUFERTtBQUVSRyxJQUFBQSxTQUFTLEVBQUUsSUFGSDtBQUdSQyxJQUFBQSxNQUFNLEVBQUUsSUFIQTtBQUlSO0FBQ0FILElBQUFBLEtBQUssRUFBRSxJQUxDLEVBRjhCOztBQVN4Q0ksRUFBQUEsS0FBSyxFQUFFTCxNQVRpQztBQVV4Q00sRUFBQUEsWUFBWSxFQUFFTixNQVYwQjtBQVd4Q08sRUFBQUEsV0FBVyxFQUFFUCxNQVgyQjtBQVl4Q1EsRUFBQUEsV0FBVyxFQUFFQyxNQVoyQjtBQWF4Q0MsRUFBQUEsb0JBQW9CLEVBQUVDLElBYmtCO0FBY3hDQyxFQUFBQSxVQUFVLEVBQUUsQ0FBQyxFQUFFYixJQUFJLEVBQUVOLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQmdCLEtBQWhCLENBQXNCQyxRQUE5QixFQUF3Q0MsR0FBRyxFQUFFLGVBQTdDLEVBQUQsQ0FkNEIsRUFBcEIsQ0FBdEI7OztBQWlCQW5CLGVBQWUsQ0FBQ29CLE1BQWhCLENBQXVCckIsZUFBdkIsRUFBd0MsRUFBRXNCLE9BQU8sRUFBRSxtQkFBWCxFQUF4Qzs7QUFFQSxNQUFNQyxTQUFTLEdBQUd6QixRQUFRLENBQUMwQixLQUFULENBQWUsV0FBZixFQUE0QnZCLGVBQTVCLENBQWxCO0FBQ0F3QixNQUFNLENBQUNDLE9BQVAsR0FBaUJILFNBQWpCIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vbmdvb3NlID0gcmVxdWlyZShcIm1vbmdvb3NlXCIpO1xudmFyIHVuaXF1ZVZhbGlkYXRvciA9IHJlcXVpcmUoXCJtb25nb29zZS11bmlxdWUtdmFsaWRhdG9yXCIpO1xuXG52YXIgT0F1dGhVc2VyU2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIG9hdXRoSWQ6IHsgdHlwZTogU3RyaW5nLCBpbmRleDogdHJ1ZSB9LFxuICB1c2VybmFtZToge1xuICAgIHR5cGU6IFN0cmluZyxcbiAgICBsb3dlcmNhc2U6IHRydWUsXG4gICAgdW5pcXVlOiB0cnVlLFxuICAgIC8vIG1hdGNoOiBbL15bYS16QS1aMC05XSskLywgXCJpcyBpbnZhbGlkXCJdLFxuICAgIGluZGV4OiB0cnVlLFxuICB9LFxuICBlbWFpbDogU3RyaW5nLFxuICBjb250YWN0RW1haWw6IFN0cmluZyxcbiAgcGhvbmVOdW1iZXI6IFN0cmluZyxcbiAgb25lVGltZUNvZGU6IE51bWJlcixcbiAgb25lVGltZUNvZGVJc3N1ZURhdGU6IERhdGUsXG4gIGxvZ2luVHlwZXM6IFt7IHR5cGU6IG1vbmdvb3NlLlNjaGVtYS5UeXBlcy5PYmplY3RJZCwgcmVmOiBcIkxvZ2luVHlwZUJhc2VcIiB9XSxcbn0pO1xuXG5PQXV0aFVzZXJTY2hlbWEucGx1Z2luKHVuaXF1ZVZhbGlkYXRvciwgeyBtZXNzYWdlOiBcImlzIGFscmVhZHkgdGFrZW4uXCIgfSk7XG5cbmNvbnN0IE9BdXRoVXNlciA9IG1vbmdvb3NlLm1vZGVsKFwiT0F1dGhVc2VyXCIsIE9BdXRoVXNlclNjaGVtYSk7XG5tb2R1bGUuZXhwb3J0cyA9IE9BdXRoVXNlcjtcbiJdfQ==