const {
    Article
} = require('../../model/article')
const path = require('path')
module.exports = async (req, res) => {
    console.log(path.join(__dirname),'文件路径');
    
    let {
        id,
        message
    } = req.query
    let articles = await Article.findOne({
        _id: id
    })
    if (!id) {
        res.render('admin/article-edit', {
            message: message,
            link: '/admin/article-edit',
            button: '新增'
        })
    } else {
        res.render('admin/article-edit', {
            message: message,
            articles: articles,
            id: id,
            path:path.join(__dirname,'../','../','public'),
            link: '/admin/article-modify?id='+id,
            button: '修改'
        })
    }
    // res.render('admin/article-edit') 
}