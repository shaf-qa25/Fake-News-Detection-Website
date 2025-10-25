
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./models/db.js";

import AuthRouter from "./routes/AuthRouter.js";
import ProductRouter from "./routes/ProductRouter.js";
import NewsRouter from "./routes/NewsRouter.js";
import predictRoute from "./routes/predict.js"; 
import BookmarkRouter from "./routes/BookmarkRouter.js";
import oauthRoutes from "./routes/oauthRoutes.js";
import passport from "passport";
import TnewsRoutes from "./routes/trendingnews.js";
dotenv.config();

connectDB();


const app = express();
const PORT = parseInt(process.env.PORT, 10) || 8000;


app.use(bodyParser.json());
app.use(cors({ origin: "*" }));
app.use(passport.initialize());


app.use("/auth", oauthRoutes);




const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname, "public")));


app.get("/ping", (req, res) => {
  console.log("ping-pong");
  res.status(200).json({ message: "pong", port: PORT });
});


app.use("/api/auth", AuthRouter);
app.use("/products", ProductRouter);
app.use("/api", NewsRouter);
app.use("/api/bookmarks", BookmarkRouter);

app.use("/api/trending", TnewsRoutes);

app.use("/predict", predictRoute);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
