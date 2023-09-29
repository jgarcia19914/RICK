const { jwt } = require("jsonwebtoken")

function sign(payload,isAccesToken){
    return jwt.sign(payload,isAccesToken? procces.env.ACCESS_TOKEN_SECRET: process.env.RREFRESH_TOKEN_SECRET, 
        
        {
            algorithm: "HS256",
            expiresIn: 3600,
        }
        )
}

function generateAccessToken(user){
    return sign({user},true);
}

function generateRefreshToken(user){
    return sign({user},false);
}

module.exports = {generateAccessToken,generateRefreshToken}