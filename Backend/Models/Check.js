
import mongoose from "mongoose";

const CheckSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: false
    },
    snippet: String,
    rawText: String,
    prediction: {
      label: String, 
      score: Number  
    },
    ip: String,
    userAgent: String
  },
  { timestamps: true }
);

const Check = mongoose.model("Check", CheckSchema);
export default Check;
