var mongoose = require("mongoose");
const LoginTypeBase = require("./LoginTypeBase");

const PasswordLoginType = LoginTypeBase.discriminator(
  "PasswordLoginType",
  new mongoose.Schema({
    passwordSalt: { type: String, required: true },
    passwordHash: { type: String, required: true },
  })
);

module.exports = mongoose.model("PasswordLoginType");
