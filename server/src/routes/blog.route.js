const express = require("express")
const { CreateBlog, EditBlog, GetBlogs, GetBlogById, GetMyBlog, DeletBlog } = require("../controllers/blog.controller")
const { Auth } = require("../middlewares/auth")
const app = express.Router()

app.post("/", Auth, CreateBlog)
app.patch("/:id", Auth, EditBlog)
app.get("/myblogs", Auth, GetMyBlog)
app.get("/", GetBlogs)

app.get("/myblog/:id", GetBlogById)
app.delete("/:id", Auth, DeletBlog)
module.exports = app