var mongoose = require("mongoose");

const LoginTypeBase = require("./LoginTypeBase");

const FaceLoginType = LoginTypeBase.discriminator(
  "FaceLoginType",
  new mongoose.Schema({
    faceGuidSalt: { type: String, required: true },
    faceGuidHash: { type: String, required: true },
  })
);

module.exports = mongoose.model("FaceLoginType");
