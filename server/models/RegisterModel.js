//import
const mongoose = require('mongoose');
//schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  
})

//model
const user = mongoose.model('registerUser', userSchema);
//export
module.exports = user;