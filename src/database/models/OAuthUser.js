var mongoose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

var OAuthUserSchema = new mongoose.Schema({
  oauthId: { type: String, index: true },
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: [true, "can't be blank"],
    match: [/^[a-zA-Z0-9]+$/, "is invalid"],
    index: true,
  },
  loginTypes: [{ type: mongoose.Schema.Types.ObjectId, ref: "LoginTypeBase" }],
});

OAuthUserSchema.plugin(uniqueValidator, { message: "is already taken." });

const OAuthUser = mongoose.model("OAuthUser", OAuthUserSchema);
module.exports = OAuthUser;
