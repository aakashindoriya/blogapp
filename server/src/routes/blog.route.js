const express = require("express")
const { CreateBlog, EditBlog, GetBlogs, GetBlogById } = require("../controllers/blog.controller")
const { Auth } = require("../middlewares/auth")
const app = express.Router()

app.post("/", Auth, CreateBlog)
app.patch("/:id", Auth, EditBlog)
app.get("/", GetBlogs)
app.get("/:id", GetBlogById)
module.exports = app