const {UserSchema} =  require ("../../bd")
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Singupcontroller = async({username, name, password})=>{
    const salt = await bcrypt.genSalt(saltRounds);
    password = await bcrypt.hash(password,salt);
    const NewUser = await UserSchema.create({username, name, password});
    return NewUser;}
    

module.exports = Singupcontroller;