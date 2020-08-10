import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

LoginTypeBase.discriminator(
  "SecurityQuestionsLoginType",
  new mongoose.Schema({
    securityQuestions: [
    {
      question: { type: String, required: true },
      answerSalt: { type: String, required: true },
      answerHash: { type: String, required: true },
    },
  ]})
);

export default mongoose.model("SecurityQuestionsLoginType");
