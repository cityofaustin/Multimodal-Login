import mongoose from "mongoose";

const OAuthAuthorizationCodeSchema = new mongoose.Schema({
  authorizationCode: { type: String },
  expiresAt: { type: Date },
  redirectUri: { type: Object },
  client: { type: mongoose.Schema.Types.ObjectId, ref: "OAuthClient" },
  clientId: { type: String },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "OAuthUser" },
  userId: { type: String },
});

const OAuthAuthorizationCode = mongoose.model(
  "OAuthAuthorizationCode",
  OAuthAuthorizationCodeSchema
);

export default OAuthAuthorizationCode;
