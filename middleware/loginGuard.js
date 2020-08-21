const guard = (req,res,next)=>{
    // 判断用户访问的是否是登录页面
    // 判断用户是否登录
    // console.log(req.url,'reqqqqqq');
    
    if(req.url != '/login' && !req.session.username){
        res.redirect('/admin/login')
    }else {
        // 用户登录成功
        next()
    }
} 

module.exports = guard