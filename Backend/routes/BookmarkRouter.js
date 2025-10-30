import express from "express";
import { toggleBookmark } from "../controllers/BookmarkController.js";
import ensureAuthenticated from "../middlewares/ensureAuthenticated.js";
import Bookmark from "../models/bookmark.js";

const router = express.Router();

router.post("/toggle", ensureAuthenticated, toggleBookmark);

router.get("/", ensureAuthenticated, async (req, res) => {
  const userId = req.user._id;
  const bookmarks = await Bookmark.find({ userId });
  res.json(bookmarks);
});

export default router;
