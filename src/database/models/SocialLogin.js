import mongoose from "mongoose";

const SocialLoginSchema = new mongoose.Schema({
  requestingUserId: { type: String },
  providingUserId: { type: String },
  uuid: { type: String },
  timestamp: { type: Date },
});

const SocialLogin = mongoose.model("SocialLogin", SocialLoginSchema);

module.exports = SocialLogin;
