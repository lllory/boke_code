/**
 * 创建文章列表集合
 */
const mongoose = require('mongoose')


// 创建表规则
const articleSchema = new mongoose.Schema({
    title:{
        type:String,
        maxlength:20,
        minlength:4,
        required:[true,'请填写文章标题'],//在插入数据库之前的判断
    },
    author:{
        type:mongoose.Schema.Types.ObjectId, //和用户集合的用户关联
        ref:'User', //实际上找到的是User表里面的_id用户
        required:[true,'请填写作者']
    },
    publishDate:{
        type:Date,
        default:Date.now,
    },
    cover:{
        type:String,
        default:null
    },
    content:{
        type:String
    }

})

// 创建表
const Article = mongoose.model('Article', articleSchema)


// 表的数据
Article.create({

}).then(()=>{
    console.log('文章列表创建成功');
    
}).catch(()=>{
    console.log('文章列表创建失败');
})

// 导出数据
module.exports = {
    Article
}