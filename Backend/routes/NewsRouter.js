import express from "express";
import { saveNewsItem } from "../controllers/newsController.js";
import ensureAuthenticated from "../middlewares/ensureAuthenticated.js"; 

const router = express.Router();
router.post("/news/save", ensureAuthenticated, saveNewsItem); 
export default router;
