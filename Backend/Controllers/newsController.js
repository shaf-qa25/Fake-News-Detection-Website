import NewsModel from "../Models/News.js";

/**
 * Saves a news item to the database.
 * Endpoint: POST /api/news/save
 */
export const saveNewsItem = async (req, res) => {
    // Note: ensureAuthenticated middleware yahan se pehle chal chuka hai, lekin 
    // hum NewsModel mein user ID abhi nahi daal rahe hain. Hum sirf news item save kar rahe hain.
    const { title, content, prediction } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required." });
    }

    try {
        const newNews = new NewsModel({
            title,
            content,
            prediction // Prediction field bhi save kar rahe hain
        });

        const savedNews = await newNews.save();

        // CRITICAL: savedNews mein MongoDB se mili _id hoti hai, jo bookmarking ke liye zaroori hai.
        res.status(201).json({
            message: "News item saved successfully.",
            newsItem: savedNews
        });

    } catch (error) {
        console.error("Error saving news item to DB:", error);
        res.status(500).json({ message: "Internal server error while saving news." });
    }
};
