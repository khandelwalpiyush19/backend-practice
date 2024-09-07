const mongoose = require('mongoose');
const user = require('./user');

 
const postSchema = mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    },
    date:{
        type:Date,
        default:Date.now
    },
    content:String,
    Likes:[
        {
            type:mongoose.Schema.Types.ObjectId, ref:"post"
        }]
     
});

module.exports = mongoose.model('post',postSchema);