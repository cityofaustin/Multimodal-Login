import mongoose from "mongoose";

import LoginTypeBase from "./LoginTypeBase";

const FaceLoginTypeSchema = new mongoose.Schema({
  faceGuidSalt: { type: String, required: true },
  faceGuidHash: { type: String, required: true },
});
const FaceLoginType =
  mongoose.models.FaceLoginType ||
  LoginTypeBase.discriminator("FaceLoginType", FaceLoginTypeSchema);

export default FaceLoginType;
