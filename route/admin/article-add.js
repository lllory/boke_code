const formidable = require('formidable')
const path = require('path')
const Article = require('../../model/article')
module.exports = (req, res) => {
    // 创建表单解析对象
    const form = new formidable.IncomingForm()
    // 文件上传的路径
    form.uploadDir = path.join(__dirname,'../','../','public','uploads')
    // 文件扩展名是否显示
    form.keepExtensions = true

    form.parse(req, (err, fieldes, files) => {
        //fields 储存普通请求参数
        // files 储存上传文件信息
        const { title , author , publishDate , content} = fieldes
    res.send(files)

    })
    // res.send(req.body)
}