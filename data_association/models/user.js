const mongoose = require('mongoose');

mongoose.connect(`mongodb://127.0.0.1:27017/association`);

const userSchema =  mongoose.Schema({
    uername : {
        type : String
    },
    name : String,
    age : Number,
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'post'
    }]
})


module.exports = mongoose.model('user',userSchema);

