const express = require("express")
const { CreateUser, Login } = require("../controllers/user.controller")
const app = express.Router()

app.post("/signup", CreateUser)
app.post("/login", Login)

module.exports = app