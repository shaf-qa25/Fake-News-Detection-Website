import Bookmark from "../models/bookmark.js";

export const toggleBookmark = async (req, res) => {
  try {
    const { title, content, prediction } = req.body;
    const userId = req.user._id;

  
    const existing = await Bookmark.findOne({ userId, title, content });

    if (existing) {
      
      await Bookmark.deleteOne({ _id: existing._id });
      return res.json({ message: "Removed from bookmarks", removed: true });
    }
    const bookmark = new Bookmark({ userId, title, content, prediction });
    await bookmark.save();
    res.json({ message: "Added to bookmarks", removed: false });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
