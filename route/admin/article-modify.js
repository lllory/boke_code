/**
 * formidable  特殊表单处理  如图片 表格 zip等
 */
let formidable = require('formidable')
const path = require('path')
const Joi = require('joi')
const moduleFun = require('../../utils/utils')
let {
    Article
} = require('../../model/article')
module.exports = (req, res ,next) => {
    let {
        id
    } = req.query
    // 创建表单解析对象
    const form = new formidable.IncomingForm()
    //  创建文件上传路径
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads')
    // 文件扩展名是否展示
    form.keepExtensions = true
    // 表单数据梳理
    form.parse(req, async (err, fieldes, files) => {
        const {
            title,
            author,
            publishDate,
            content
        } = fieldes
        // let schema ={
        //     title:Joi.string().min(4).max(20).required().error(new Error('必填项字符串，长度是4-20')),
        //     author:Joi.string().required().error(new Error('必填项，请填写作者')),
        //     publishDate:Joi.string(),
        //     content:Joi.string()
        // }
        // let errorResult =  await moduleFun.enJoi(fieldes , schema , '/admin/article-edit' , next)
        // console.log(errorResult,'errorResult');
         // 根据id查询文章用户是否存在
        // console.log(fieldes,'fieldes');
        // console.log(files);
        
        
        // res.send(files)
        // 添加文章
         await Article.updateOne({_id:id},{
            title: title,
            author: author,
            publishDate: publishDate,
            content: content,
            cover: files.cover.path.split('public')[1]
        })
        // // 文章插入成功跳转到文章列表页面
        res.redirect('/admin/article')
    })


}