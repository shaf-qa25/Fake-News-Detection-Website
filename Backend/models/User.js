import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  googleId: { type: String, default: null },
  bookmarkedNews: [{ type: mongoose.Schema.Types.ObjectId, ref: "News" }]
}, { timestamps: true });

export default mongoose.model("User", UserSchema);
