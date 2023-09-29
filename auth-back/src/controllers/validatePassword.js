const {UserSchema} =  require ("../models/User")

const validatePassword  = async(username,password)=>{
    const user = await UserSchema.findOne({username});
  if(!user) return false;
  const isValid = await bcrypt.compare(password,user.password);
  if(!isValid) return false;
  return user;
}
 
module.exports = validatePassword;