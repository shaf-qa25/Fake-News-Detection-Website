// ml_stub.js
import express from "express";

const app = express();
app.use(express.json());

// Simple dummy prediction route
app.post("/predict", (req, res) => {
  const text = (req.body.text || "").toLowerCase();

  // Basic rule — agar text me 'fake', 'false', 'jhooth' mila to fake maan lo
  const fakeWords = ["fake", "false", "jhooth", "jhuthi", "jhutha"];
  const found = fakeWords.some(word => text.includes(word));

  const score = found
    ? 0.8 + Math.random() * 0.15
    : 0.1 + Math.random() * 0.3;

  const label = score > 0.5 ? "fake" : "real";

  res.json({
    label,
    score: Number(score.toFixed(3))
  });
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`ML stub running on http://localhost:${PORT}`);
});
