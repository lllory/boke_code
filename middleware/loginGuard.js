const guard = (req,res,next)=>{
    // 判断用户访问的是否是登录页面
    // 判断用户是否登录
    // console.log(req.url,'reqqqqqq');
    
    if(req.url != '/login' && !req.session.username){
        res.redirect('/admin/login')
    }else {
        console.log(req.session.role,'role');
        
        if(req.session.role == 'normal'){
            // 如果是普通用戶登錄跳轉到首頁
           return res.redirect('/home/')
            
        }
        // 用户登录成功
        next()
    }
} 

module.exports = guard