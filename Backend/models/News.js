import mongoose from "mongoose";

const NewsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    // News ID automatically provided by MongoDB
});

const NewsModel = mongoose.model("News", NewsSchema);
export default NewsModel;
