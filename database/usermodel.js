const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/mongopractice`);

const userSchema= mongoose.Schema({
    name : String,
    username : String,
    email : String
})
// we are exporting model because on the basis of this model we can perfom the curd operations
module.exports = mongoose.model("user", userSchema);
