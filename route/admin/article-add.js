const formidable = require('formidable')
const path = require('path')
const moduleFun = require('../../utils/utils')
const Joi = require('joi')
const {Article} = require('../../model/article')
// module.exports = async (req, res) => {
   
//     // res.send(req.body)
// }

module.exports =  (req, res , next) => {
    // 创建表单解析对象
    const form = new formidable.IncomingForm()
    // 文件上传的路径
    form.uploadDir = path.join(__dirname, '../', '../', 'public', 'uploads')
    // 文件扩展名是否显示
    form.keepExtensions = true

    form.parse(req,async (err, fieldes, files) => {
        //fields 储存普通请求参数
        // files 储存上传文件信息
       
        const {
            title,
            author,
            publishDate,
            content
        } = fieldes
        let schema ={
            title:Joi.string().min(4).max(20).required().error(new Error('必填项字符串，长度是4-20')),
            author:Joi.string().required().error(new Error('必填项，请填写作者')),
            publishDate:Joi.string(),
            content:Joi.string()
        }
        let errorResult =  await moduleFun.enJoi(fieldes , schema , '/admin/article-edit' , next)
        // console.log(errorResult,'errorResult');
        
        if(!errorResult) return
        // res.send(files.cover.path.split('public')[1])
        // 添加文章
         await Article.create({
            title: title,
            author: author,
            publishDate: publishDate,
            content: content,
            cover: files.cover.path.split('public')[1]
        })
        // 文章插入成功跳转到文章列表页面
        res.redirect('/admin/article')
    })
    
  
}