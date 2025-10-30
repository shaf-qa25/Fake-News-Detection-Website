import express from "express";
import Check from "../models/Check.js"; 

const router = express.Router();
const ML_URL = "https://fraud-news-1.onrender.com/predict";

router.post("/", async (req, res) => {
  console.log("🔥 /predict route hit with body:", req.body);
  try {
    const { text } = req.body;

    
    if (!text || typeof text !== "string" || text.trim().length === 0) {
      return res.status(400).json({ error: "Text is required" });
    }

    const response = await fetch(ML_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text })

    });

    if (!response.ok) {
      return res.status(500).json({ error: "ML service error" });
    }

    const mlResult = await response.json(); 
    console.log("ML API response:", mlResult);


    
    const newCheck = new Check({
      snippet: text.slice(0, 200),
      rawText: text,
      prediction: mlResult.predictions,
      ip: req.ip,
      userAgent: req.get("User-Agent")
    });

    await newCheck.save();

    
    res.json({
      message: "Prediction successful",
      prediction: mlResult.predictions,
      snippet: newCheck.snippet,
      createdAt: newCheck.createdAt
    });
  } catch (error) {
    console.error("Error in /predict:", error);
    res.status(500).json({ error: "Server error" });
  }
});

export default router;
