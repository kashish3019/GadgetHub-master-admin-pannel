const mongoose=require('mongoose')

const userschema=new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  role: {
    type: String,
    default: "user", // Default role
  },
})
const user=mongoose.model("user",userschema)
module.exports=user;

  