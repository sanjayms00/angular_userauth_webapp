require('dotenv').config()
const jwt  = require('jsonwebtoken')


const authenticate = (req, res, next) => {
    jwtSecretKey = process.env.JWT_SECRET_KEY;
    const token = req.header("x-access-token") || req.body.token || req.query.token;
    if(!token){
        //403 Forbidden response. refuses to fulfill it due to some authorization or permission-related issue.
        return res.status(403).send("insufficient credentials")
    }
    try {
        const decode = jwt.verify(token, jwtSecretKey)
        req.user = decode
        next()
    } catch (error) {
        // 401 represents an "Unauthorized" response from the server. 
        res.status(401).send(error.message)   
    }
}

module.exports = {
    authenticate
}