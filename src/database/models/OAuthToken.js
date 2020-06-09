import mongoose from "mongoose";

const OAuthTokenSchema = new mongoose.Schema({
    accessToken: { type: String },
    accessTokenExpiresAt: { type: Date },
    client: { type: mongoose.Schema.Types.ObjectId, ref: "OAuthClient" },
    clientId: { type: String },
    refreshToken: { type: String },
    refreshTokenExpiresAt: { type: Date },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "OAuthUser" },
    userId: { type: String },
});

const OAuthToken = mongoose.model("OAuthToken", OAuthTokenSchema);

export default OAuthToken;
