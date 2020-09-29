"use strict";var mongoose = require("mongoose");

const LoginTypeBase = require("./LoginTypeBase");

const FaceLoginType = LoginTypeBase.discriminator(
"FaceLoginType",
new mongoose.Schema({
  faceGuidSalt: { type: String, required: true },
  faceGuidHash: { type: String, required: true } }));



module.exports = mongoose.model("FaceLoginType");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kYXRhYmFzZS9tb2RlbHMvbG9naW4tdHlwZS9GYWNlTG9naW5UeXBlLmpzIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwicmVxdWlyZSIsIkxvZ2luVHlwZUJhc2UiLCJGYWNlTG9naW5UeXBlIiwiZGlzY3JpbWluYXRvciIsIlNjaGVtYSIsImZhY2VHdWlkU2FsdCIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImZhY2VHdWlkSGFzaCIsIm1vZHVsZSIsImV4cG9ydHMiLCJtb2RlbCJdLCJtYXBwaW5ncyI6ImFBQUEsSUFBSUEsUUFBUSxHQUFHQyxPQUFPLENBQUMsVUFBRCxDQUF0Qjs7QUFFQSxNQUFNQyxhQUFhLEdBQUdELE9BQU8sQ0FBQyxpQkFBRCxDQUE3Qjs7QUFFQSxNQUFNRSxhQUFhLEdBQUdELGFBQWEsQ0FBQ0UsYUFBZDtBQUNwQixlQURvQjtBQUVwQixJQUFJSixRQUFRLENBQUNLLE1BQWIsQ0FBb0I7QUFDbEJDLEVBQUFBLFlBQVksRUFBRSxFQUFFQyxJQUFJLEVBQUVDLE1BQVIsRUFBZ0JDLFFBQVEsRUFBRSxJQUExQixFQURJO0FBRWxCQyxFQUFBQSxZQUFZLEVBQUUsRUFBRUgsSUFBSSxFQUFFQyxNQUFSLEVBQWdCQyxRQUFRLEVBQUUsSUFBMUIsRUFGSSxFQUFwQixDQUZvQixDQUF0Qjs7OztBQVFBRSxNQUFNLENBQUNDLE9BQVAsR0FBaUJaLFFBQVEsQ0FBQ2EsS0FBVCxDQUFlLGVBQWYsQ0FBakIiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbW9uZ29vc2UgPSByZXF1aXJlKFwibW9uZ29vc2VcIik7XG5cbmNvbnN0IExvZ2luVHlwZUJhc2UgPSByZXF1aXJlKFwiLi9Mb2dpblR5cGVCYXNlXCIpO1xuXG5jb25zdCBGYWNlTG9naW5UeXBlID0gTG9naW5UeXBlQmFzZS5kaXNjcmltaW5hdG9yKFxuICBcIkZhY2VMb2dpblR5cGVcIixcbiAgbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgZmFjZUd1aWRTYWx0OiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgICBmYWNlR3VpZEhhc2g6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICB9KVxuKTtcblxubW9kdWxlLmV4cG9ydHMgPSBtb25nb29zZS5tb2RlbChcIkZhY2VMb2dpblR5cGVcIik7XG4iXX0=