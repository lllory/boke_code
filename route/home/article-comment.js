const {Comment} = require('../../model/comment')
const dateFormat = require('dateformat')

module.exports =async (req,res)=>{
    // 获取文章id
    // const id = req.app.locals.id
    // 获取评论者id
    // let authorId = req.session.authorId
    // let authorId = req.session._id
    // uid：文章id   aid：登录人id   
    let { uid, aid , content} = req.body
    // 评论时间
    let time = dateFormat(new Date() , 'yyyy-mm-dd')
    let comments = await Comment.create({
        aid,
        uid,
        time,
        content
    })

    res.redirect('/home/article?id='+aid)

}