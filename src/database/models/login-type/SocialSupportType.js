import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

const SocialSupportTypeSchema = new mongoose.Schema({});
const SocialSupportType =
  mongoose.models.SocialSupportType ||
  LoginTypeBase.discriminator("SocialSupportType", SocialSupportTypeSchema);

export default SocialSupportType;
