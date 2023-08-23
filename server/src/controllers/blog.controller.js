const Blog = require("../models/blog.model")

const GetBlogs = async (req, res) => {
    try {
        let { category, page = 1 } = req.query
        let Query = {}
        if (category) Query.category = category
        const blogs = await Blog.find(Query).skip((page - 1) * 10).limit(10).populate("author", { name: 1, _id: 0 })
        return res.status(200).send(blogs)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const GetBlogById = async (req, res) => {
    try {
        let { id } = req.params
        const blog = await Blog.findOne({ _id: id }).populate("author", { name: 1, _id: 0 })
        res.status(200).send(blog)
    } catch (error) {
        res.status(500).send(error.message)
    }
}
const CreateBlog = async (req, res) => {
    try {
        let { title, content, category } = req.body
        let author = req.user.id
        const blog = await Blog.create({ title, content, category, author })
        res.status(201).send(blog)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

const EditBlog = async (req, res) => {
    try {
        let { title, content, category } = req.body
        let { id } = req.params
        let blog = await Blog.findOne({ _id: id })
        if (blog.author != req.user.id) {
            return res.status(403).send({ message: "opration not allowed" })
        }
        if (title) blog.title = title
        if (content) blog.content = content
        if (category) blog.category = category
        blog.save()
        return res.status(201).send(blog)
    } catch (error) {
        res.status(500).send(error.message)
    }
}


module.exports = { EditBlog, CreateBlog, GetBlogs, GetBlogById }