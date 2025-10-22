import express from "express";
// Controller jismein news item save karne ka logic hai
import { saveNewsItem } from "../controllers/NewsController.js"; 
// Middleware jo check karta hai ki user logged in hai ya nahi (token check)
import ensureAuthenticated from "../Middlewares/ensureAuthenticated.js"; 

const router = express.Router();

// Route: POST /api/news/save
// Pehle ensureAuthenticated chalega, phir saveNewsItem chalega.
router.post("/news/save", ensureAuthenticated, saveNewsItem); 

// Agar aapke pass koi aur News-related routes hain, toh unhe bhi yahan add kar sakte hain.
// Jaise: router.get("/news/:id", getNewsById);

export default router;
