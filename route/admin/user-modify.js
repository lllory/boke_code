const {
    User
} = require('../../model/user')
const moduleFun = require('../../utils/utils')
module.exports =async (req, res ,next) => {
   const {username , email , state , role ,password} = req.body
    const {
        id
    } = req.query
    // 密码加密
    let aesPassword = moduleFun.aesEncrypto(password, 'password')
    let users = await User.findOne({
        _id: id
    })

    // 密码比对   输入密码和数据库的比对
    let valid = aesPassword == users.password
    if (!valid) {
        // req.body.password = password
        // res.send('密码比对失败')
      return  next(JSON.stringify({path:'/admin/user-edit',id:id,message:'输入密码和数据库不一致'}))
    }else{
        // res.send(req.body)
        // req.body.password = password
       await User.updateOne({_id:id},{
           username:username,
           email:email,
           state:state,
           role:role 
           })
        res.redirect('/admin/user')
    }






}