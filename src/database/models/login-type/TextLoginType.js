import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

LoginTypeBase.discriminator(
  "TextLoginType",
  new mongoose.Schema({
    phoneNumber: { type: String, required: true },
  })
);

export default mongoose.model("TextLoginType");
