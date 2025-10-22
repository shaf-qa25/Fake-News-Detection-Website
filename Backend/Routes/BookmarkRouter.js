import express from "express";
import { toggleBookmark } from "../controllers/BookmarkController.js";
import ensureAuthenticated from "../Middlewares/ensureAuthenticated.js";
import Bookmark from "../models/bookmark.js";

const router = express.Router();

// Toggle bookmark (add/remove)
router.post("/toggle", ensureAuthenticated, toggleBookmark);

// Get all bookmarks of a user
router.get("/", ensureAuthenticated, async (req, res) => {
  const userId = req.user._id;
  const bookmarks = await Bookmark.find({ userId });
  res.json(bookmarks);
});

export default router;
