const mongoose = require('mongoose');
const { eventNames } = require('npmlog');

mongoose.connect(`mongodb://127.0.0.1:27017/authenticate`);

const userSchema= mongoose.Schema({
username : String,
email : String,
password :String,
age :Number
})

module.exports  = mongoose.model("user",userSchema);