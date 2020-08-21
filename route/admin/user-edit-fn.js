const moduleFun = require('../../utils/utils')
const Joi = require('joi')
const {
    User
} = require('../../model/user')
module.exports = async (req, res,next) => {
    // try {
        let schema = {
            username: Joi.string().min(4).max(16).required().error(new Error('用户名不符合规则')),
            email: Joi.string().email().error(new Error("邮箱不符合验证规则")),
            password: Joi.string().regex(/^[a-zA-Z0-9]{6,30}$/).required().error(new Error('密码是6-30位以数字或者字母开头')),
            role: Joi.string().valid('normal', 'admin').required().error(new Error('角色值非法')),
            state: Joi.number().valid(0, 1).required().error(new Error('状态值非法'))
        }
      let errorResult =await  moduleFun.enJoi(req.body, schema, res ,next)
      console.log(errorResult,'errorResult');
      
        if(!errorResult) return
        
    
        // 根据邮箱地址查询用户是否存在
        let result = await User.findOne({
            email: req.body.email
        })
        if (result) {
            // 用户已经存在                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
            // return res.redirect('/admin/user-edit?message=该用户已存在，请输入其他邮箱账号')
            // next接收一个参数  字符串类型
            return next(JSON.stringify({path:'/admin/user-edit',message:'该用户已存在，请输入其他邮箱账号'}))
    
        }
        // 密码加密
        let password = moduleFun.aesEncrypto(req.body.password, 'password')
        req.body.password = password
        // res.send(req.body.password)
        // 将用户添加到数据库
        User.create(req.body)
        res.redirect('/admin/user')
    

    // res.send(result)
}