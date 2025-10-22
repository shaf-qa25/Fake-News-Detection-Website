import express from "express";
import cors from "cors";

const app = express();

// ✅ Middleware
app.use(express.json());

// ✅ Global CORS middleware handles preflight automatically
app.use(cors({
  origin: 'http://localhost:3000', // your React app
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// ML prediction route
app.post("/predict", (req, res) => {
  const text = (req.body.text || "").toLowerCase();

  const fakeWords = ["fake", "false", "jhooth", "jhuthi", "jhutha"];
  const found = fakeWords.some(word => text.includes(word));

  const score = found ? 0.8 + Math.random() * 0.15 : 0.1 + Math.random() * 0.3;
  const label = score > 0.5 ? "fake" : "real";

  res.json({ label, score: Number(score.toFixed(3)) });
});

const PORT = 5001;
app.listen(PORT, () => console.log(`ML stub running on http://localhost:${PORT}`));
