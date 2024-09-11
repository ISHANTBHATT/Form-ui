import mongoose, { Schema } from "mongoose";

const tokenSchema = new Schema({
  //   userid: {
  //     type: Schema.Types.ObjectId,
  //     required: true,
  //     ref: "user",
  //     unique: true,
  //   },
  token: { type: String, required: true },
  createdAt: { typel: Date, default: Date.now(), expires: 3600 },
});
module.exports = mongoose.model("token", tokenSchema);
