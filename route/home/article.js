const {
    Article
} = require('../../model/article')
const {Comment} = require('../../model/comment')
module.exports =async (req,res)=>{
    const { id } = req.query
   
  let result =  await Article.findOne({_id:id}).populate('author')

//   查询当前文章所对应的评论
   let commons = await Comment.find({aid:id}) .populate('uid')
//    res.send(commons)
//    return
//   req.session.authorId = result.author._id
//   req.app.locals.id = id
//   req.session.time = result.publishDate
//   console.log(result,'result');
  
//   console.log( id,' req.session.id');
//   res.send(result)
//   return
    res.render('home/article',{
        result,
        commons
    })
}