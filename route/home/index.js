const {
    Article
} = require('../../model/article')
const mongooseSexPage = require('mongoose-sex-page')
module.exports = async (req, res) => {
    const {
        page
    } = req.query
    let articles = await mongooseSexPage(Article).find().page(page).size(2).display(3).populate('author').exec()
    //  res.send(articles)
    //  return
    res.render('home/default', {
        articles: articles
    })
}