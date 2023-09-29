const { generateAccessToken } = require("../../auth/generatertokens");
const getUserInfo = require("../../lib/getUserInfo");

const crearaccestoken = async()=>{
 return generateAccessToken(getUserInfo(this));
}

module.exports = crearaccestoken;