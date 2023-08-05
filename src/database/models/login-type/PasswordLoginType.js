import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

const PasswordLoginTypeSchema = new mongoose.Schema({
  passwordSalt: { type: String, required: true },
  passwordHash: { type: String, required: true },
});
const PasswordLoginType =
  mongoose.models.PasswordLoginType ||
  LoginTypeBase.discriminator("PasswordLoginType", PasswordLoginTypeSchema);

export default PasswordLoginType;
