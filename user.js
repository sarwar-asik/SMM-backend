const mongoose = require("mongoose");

const userSchema =  new mongoose.Schema({
name:String,
password:Number,
})
mongoose.model("user",userSchema)

module.exports = mongoose.model("user",userSchema)