import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

LoginTypeBase.discriminator(
  "PalmLoginType",
  new mongoose.Schema({
    // NOTE: don't hash template as need original to compare.
    palmTemplate: { type: String, required: true },
  })
);

export default mongoose.model("PalmLoginType");
