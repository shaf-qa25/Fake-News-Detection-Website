import NewsModel from "../models/News.js";
export const saveNewsItem = async (req, res) => {
    const { title, content, prediction } = req.body;
    
    if (!title || !content) {
        return res.status(400).json({ message: "Title and content are required." });
    }

    try {
        const newNews = new NewsModel({
            title,
            content,
            prediction 
        });

        const savedNews = await newNews.save();

        res.status(201).json({
            message: "News item saved successfully.",
            newsItem: savedNews
        });

    } catch (error) {
        console.error("Error saving news item to DB:", error);
        res.status(500).json({ message: "Internal server error while saving news." });
    }
};
