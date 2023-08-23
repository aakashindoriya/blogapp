const jwt = require("jsonwebtoken")
const Auth = async (req, res, next) => {
    const authHeader = req.headers['authorization'];
    try {
        if (!authHeader) return res.status(402).send("not authorised")
        const user = await jwt.verify(authHeader, process.env.JWTSEC || "abcdefg")
        req.user = user
        next()

    } catch (error) {
        res.status(401).send(error.message("not authorised"))
    }

};

module.exports = { Auth }