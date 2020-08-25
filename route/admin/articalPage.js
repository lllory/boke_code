const mongooseSexPage = require('mongoose-sex-page')
let { Article } = require('../../model/article')
module.exports = async (req,res)=>{
    // req.app.locals.currentLink = 'article'
    
    // let page = req.query.page  || 1
    // let pageSize = 10
    // // 查询总的数据
    // let count = await Article.countDocuments({}) 
    // // 多少分页
    // let sizes = Math.ceil( count / pageSize)

    // // 从第几个开始查询
    // let start = ( page - 1 ) * 10

    // // 分页
    // let articles = await Article.find({}).limit(10).skip(start)
    // // let articles = await Article.find()

    // // console.log(count , sizes , start ,articles)  
    
    // // res.send(articles)
    // // res.render('admin/article')
    // res.render('admin/article.art',{
    //     articles:articles,
    //     sizes:sizes,
    //     count:count,
    //     page:page

    // })
    req.app.locals.currentLink = 'article'
    
    let page = req.query.page  || 1
    let pageSize = 10
    // 查询总的数据
    let count = await Article.countDocuments({}) 
    // 多少分页
    let sizes = Math.ceil( count / pageSize)

    // 从第几个开始查询
    let start = ( page - 1 ) * 10

    // 分页
    let articles = await mongooseSexPage(Article).find().page(page).size(2).display(3).populate('author').exec()
    // let articles = await Article.find()

    // console.log(count , sizes , start ,articles)  
    
    // res.send(articles)
    // res.render('admin/article')
    res.render('admin/article.art',{
        articles:articles,
        // sizes:sizes,
        // count:count,
        // page:page

    })
}