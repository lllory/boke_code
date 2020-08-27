module.exports = (req,res)=>{
    // 删除session
    req.session.destroy(function(){

        res.clearCookie('connect.sid')
        res.redirect('/admin/login')
        req.app.locals.userInfo = null
    })
}