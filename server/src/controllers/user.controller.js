const jwt = require("jsonwebtoken")
const argon2 = require("argon2");
const User = require("../models/user.model");

const CreateUser = async (req, res) => {
    try {
        const { email, password, name } = req.body
        const hashedPassword = await argon2.hash(password);
        let user = await User.findOne({ email })
        if (user) return res.status(409).send({ message: "user alredy exist please login" })
        user = await User.create({ email, name, password: hashedPassword })
        let token = await jwt.sign({ email, name, id: user._id }, process.env.JWTSEC || "abcdefg", { expiresIn: 24 * 60 * 1000 })

        return res.status(201).send({ message: "Account created successfully", token })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(402).send({ message: "invalid credentials" })
        }
        const passwordCheck = await argon2.verify(user.password, password)
        if (passwordCheck) {
            let token = await jwt.sign({ email, name: user.name, id: user._id, }, process.env.JWTSEC || "abcdefg", { expiresIn: 24 * 60 * 1000 })
            return res.status(200).send({ message: "Login successfully", token })
        }
        return res.status(409).send({ message: "invalid credentials" })

    } catch (error) {
        return res.status(500).send(error.message)
    }
}


module.exports = { CreateUser, Login }