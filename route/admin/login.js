// 导入用户集合构造函数
const {
    User
} = require('../../model/user')
const moduleFun = require('../../utils/utils')
module.exports = async (req, res) => {
    // 接收请求参数
    // res.send(req.body)

    const {
        email,
        password
    } = req.body

    if (email.trim().length == 0 || password.trim().length == 0) {
        alert('邮箱和密码不能为空')
        //    return  res.status(400).send('<h4>邮箱或者密码错误</h4>')
        // return res.status(400).render('admin/error', {
        //     code: 400,
        //     msg: '请填写邮箱或者密码'
        // })
    }

    let user = await User.findOne({
        email
    })
    let key = 'password'
    // 密码加密比对，为true是进入user页面
    let isValid = password == moduleFun.aesDecrypto(user.password, key) ? true : false
    // 根据邮箱地址查询用户
    if (user) {
        if (isValid) {
            // 将用户名存储在请求
            req.session.username = user.username
            req.session._id = user._id
            // 获取登录信息 
            req.app.locals.userInfo = user
            req.session.role = user.role
            // res.send('登录成功')
            //    res.render('admin/user')
            // 對用戶角色判斷
            if(user.role == 'admin'){
                res.redirect('/admin/user')
            }else{
                res.redirect('/home/')
            }
            // 重定向用户列表页面
            res.redirect('user')
        } else {
            res.status(400).render('admin/error', {
                code: 400,
                msg: '邮箱地址或者密码错误'
            })
        }
    } else {
        res.status(400).render('admin/error', {
            code: 400,
            msg: '邮箱地址或者密码错误'
        })
    }
}

