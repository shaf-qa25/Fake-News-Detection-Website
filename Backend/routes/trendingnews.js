import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();
const router = express.Router();

router.get("/top-news", async (req, res) => {
  try {
    const response = await fetch(`https://gnews.io/api/v4/top-headlines?token=${process.env.GNEWS_API_KEY}&lang=en&max=9`);

    const data = await response.json();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch news" });
  }
});

export default router;
