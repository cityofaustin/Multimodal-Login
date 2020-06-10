import mongoose from "mongoose";

const OAuthClientSchema = new mongoose.Schema({
  clientId: { type: String },
  clientSecret: { type: String },
  redirectUris: { type: Array },
  grants: { type: Array },
});

const OAuthClient = mongoose.model("OAuthClient", OAuthClientSchema);

module.exports = OAuthClient;
