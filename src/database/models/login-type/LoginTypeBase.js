var mongoose = require("mongoose");

const baseOptions = {
  discriminatorKey: "itemtype", // our discriminator key, could be anything
  collection: "abstractlogintypes", // the name of our collection
};

// Our Base schema: these properties will be shared with our "real" schemas
const LoginTypeBase = mongoose.model(
  "LoginTypeBase",
  new mongoose.Schema(
    {
      loginTypeName: { type: String, required: false },
    },
    baseOptions
  )
);

module.exports = mongoose.model("LoginTypeBase");
