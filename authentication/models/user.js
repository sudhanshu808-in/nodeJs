const mongoose = require('mongoose');
const { eventNames } = require('npmlog');

mongoose.connect(`mongodb://127.0.0.1:27017/authenticate`);

const userSchema= mongoose.Schema({
username : {
    type  : String,
    required : true,
    unique : true
},
email : {
    type  : String,
    required : true,
    unique : true
},
password : {
    type  : String,
    required : true,
    unique : true
},
age : {
    type  : String,
    required : true,
    unique : true
}
})

module.exports  = mongoose.model("user",userSchema);