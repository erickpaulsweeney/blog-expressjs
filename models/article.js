const mongoose = require("mongoose");

const articleSchema = new mongoose.Schema({
    title: {
        type: String, 
        require: true
    }, 
    body: {
        type: String,
        require: true
    },
    author: {
        type: String,
        require: true
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const ArticleModel = mongoose.model("Article", articleSchema);
module.exports = ArticleModel;