import mongoose from "mongoose";

const baseOptions = {
  discriminatorKey: "itemtype", // our discriminator key, could be anything
  collection: "abstractlogintypes", // the name of our collection
};

// Our Base schema: these properties will be shared with our "real" schemas
const LoginTypeBaseSchema = new mongoose.Schema(
  {
    loginTypeName: { type: String, required: false },
  },
  baseOptions
);

const LoginTypeBase =
  mongoose.models.LoginTypeBase ||
  mongoose.model("LoginTypeBase", LoginTypeBaseSchema);

export default LoginTypeBase;
