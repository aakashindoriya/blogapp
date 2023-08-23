const mongoose = require("mongoose")

const BlogSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user', // Reference to the user collection
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

const Blog = mongoose.model("blog", BlogSchema)

module.exports = Blog