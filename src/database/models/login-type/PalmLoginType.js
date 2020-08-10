import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

LoginTypeBase.discriminator(
  "PalmLoginType",
  new mongoose.Schema({
    palmGuidSalt: { type: String, required: true },
    palmGuidHash: { type: String, required: true },
  })
);

export default mongoose.model("PalmLoginType");
