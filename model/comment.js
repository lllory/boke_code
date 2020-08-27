const mongoose = require('mongoose')

const commentSchem = new mongoose.Schema({
    // 文章id
    aid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Article'
    },
    // 当前登录人的id
    uid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    time:{
        type:String
    },
    content:{
        type:String
    }
})

const Comment =mongoose.model('comment',commentSchem)

module.exports = {Comment}