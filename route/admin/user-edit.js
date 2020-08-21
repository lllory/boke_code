const {
    User
} = require('../../model/user')
module.exports = async (req, res) => {
   
    const {
        message,
        id
    } = req.query
   
    if (id) {
        //  修改操作
        let userMag = await User.findOne({
            _id: id
        })
        res.render('admin/user-edit', {
            message: message,
            userMag,
            id,
            link:'/admin/user-modify?id='+id,
            button:'修改'
        })
        
    } else {
        // 新增操作
        res.render('admin/user-edit', {
            message: message,
            link:'/admin/user-edit',
            button:'新增'
        })
    }
    console.log(req.body,'req.body');
  
}