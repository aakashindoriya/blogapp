require("dotenv").config()

const express = require("express")
const cors = require("cors")
const Connect = require("./config/db")
const userRoute = require("./routes/user.route")

const app = express()
app.use(cors())
app.use(express.json())


app.get("/", (req, res) => { res.status(200).send("welcome") })
app.use("/user", userRoute)


app.listen(process.env.PORT || 8080, () => {
    Connect()
    console.log("server is running")
})

