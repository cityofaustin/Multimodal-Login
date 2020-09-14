import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

LoginTypeBase.discriminator("SocialSupportType", new mongoose.Schema({}));

export default mongoose.model("SocialSupportType");
