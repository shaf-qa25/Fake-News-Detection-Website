
import express from "express";
import { checkNews } from "../Controllers/newsController.js";

const router = express.Router();


router.post("/check-news", checkNews);

export default router;
