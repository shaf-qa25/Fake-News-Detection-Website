// server.js
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import AuthRouter from "./routes/AuthRouter.js";
import ProductRouter from "./routes/ProductRouter.js";
import newsRouter from "./routes/NewsRouter.js";
import predictRoute from "./routes/predict.js"; // Step C route

// DB
import "./models/db.js";

dotenv.config();
const app = express();
const PORT = parseInt(process.env.PORT, 10) || 8000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Optional: serve static files if you have frontend
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));

// Ping test
app.get("/ping", (req, res) => {
  console.log("ping-pong");
  res.status(200).json({ message: "pong", port: PORT });
});

// Main routes
app.use("/auth", AuthRouter);
app.use("/products", ProductRouter);
app.use("/api", newsRouter);

// Step C: predict route
app.use("/predict", predictRoute);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
