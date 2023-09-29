const {UserSchema} =  require ("../../bd")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashpassword = async({password, hash})=>{
     const same = await bcrypt.compare(password, hash);
     return same;
}

module.exports = hashpassword;