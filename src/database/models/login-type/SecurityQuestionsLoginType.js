import mongoose from "mongoose";
import LoginTypeBase from "./LoginTypeBase";

const SecurityQuestionsLoginTypeSchema = new mongoose.Schema({
  securityQuestions: [
    {
      question: { type: String, required: true },
      answerSalt: { type: String, required: true },
      answerHash: { type: String, required: true },
    },
  ],
});
const SecurityQuestionsLoginType =
  mongoose.models.SecurityQuestionsLoginType ||
  LoginTypeBase.discriminator(
    "SecurityQuestionsLoginType",
    SecurityQuestionsLoginTypeSchema
  );

export default SecurityQuestionsLoginType;
