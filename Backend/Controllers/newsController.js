
export const checkNews = (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ error: "News text is required" });
  }

  
  res.json({
    news: text,
    result: "Pending API integration", 
  });
};
