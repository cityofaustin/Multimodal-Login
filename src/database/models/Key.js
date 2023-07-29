import mongoose from "mongoose";

const KeySchema = new mongoose.Schema({
  uuid: { type: String, index: true },
  encryptedKey: String,
});

const Key = mongoose.models.Key || mongoose.model("Key", KeySchema);
export default Key;
