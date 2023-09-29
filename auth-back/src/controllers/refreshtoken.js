const { generateRefreshToken } = require("../../auth/generatertokens");
const {UserSchema} =  require ("../../bd")
const bcrypt = require('bcrypt');
const getUserInfo = require("../../lib/getUserInfo");
const Token = require("../models/Token");

const createrefreshtoken = async()=>{
    const resfreshToken = generateRefreshToken (getUserInfo(this));
    try {
        await new Token ({token:resfreshToken}).save();
        return resfreshToken;
    } catch (error) {
        console.error(error)
    }
 return generateRefreshToken
}

module.exports = createrefreshtoken;