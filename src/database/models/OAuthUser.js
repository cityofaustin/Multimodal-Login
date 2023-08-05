import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const OAuthUserSchema = new mongoose.Schema({
  oauthId: { type: String, index: true },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    // match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  email: String,
  contactEmail: String,
  phoneNumber: String,
  oneTimeCode: Number,
  didAddress: String,
  didPublicEncryptionKey: String,
  didPrivateKeyGuid: String,
  oneTimeCodeIssueDate: Date,
  loginTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: "LoginTypeBase" }],
});

OAuthUserSchema.plugin(uniqueValidator, { message: "is already taken." });

// https://stackoverflow.com/questions/62440264/mongoose-nextjs-model-is-not-defined-cannot-overwrite-model-once-compiled
const OAuthUser = mongoose.models.OAuthUser || mongoose.model("OAuthUser", OAuthUserSchema);

export default OAuthUser;
