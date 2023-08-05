import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

const TextLoginTypeSchema = new mongoose.Schema({
  phoneNumber: { type: String, required: true },
});
const TextLoginType =
  mongoose.models.TextLoginType ||
  LoginTypeBase.discriminator("TextLoginType", TextLoginTypeSchema);

export default TextLoginType;
