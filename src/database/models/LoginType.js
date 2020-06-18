var mongoose = require("mongoose");

var LoginTypeSchema = new mongoose.Schema(
  {
    name: String,
  },
  { discriminatorKey: "kind" }
);

const LoginType = mongoose.model("LoginType", LoginTypeSchema);
module.exports = LoginType;
