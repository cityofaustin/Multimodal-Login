import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

const PalmLoginTypeSchema = new mongoose.Schema({
  // NOTE: don't hash template as need original to compare.
  palmTemplate: { type: String, required: true },
});
const PalmLoginType =
  mongoose.models.PalmLoginType ||
  LoginTypeBase.discriminator("PalmLoginType", PalmLoginTypeSchema);

export default PalmLoginType;
