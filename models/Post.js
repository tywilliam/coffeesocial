const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: String,
    picture: String,
    location: String
}, {timestamps: true});

const Post = mongoose.model('Post', postSchema);
module.exports = Post;