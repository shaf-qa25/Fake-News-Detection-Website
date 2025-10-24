import mongoose from "mongoose";

const BookmarkSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  prediction: {
    label: String,
    score: Number
  }
}, { timestamps: true });

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);
export default Bookmark;
