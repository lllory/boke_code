const {
    User
} = require('../../model/user')
module.exports  =async (req, res) => {
    // 接收客户端传递过来的当前页参数
    let page = req.query.page || 1 
    
    // 全局属性  标识  表示当前访问的是用户管理页面  给侧边栏添加选中状态
    req.app.locals.currentLink = 'user'
    // 每一页的条数
    let pageSize = 10

    // 查询用户的总数
    let count =await User.countDocuments({})

    // 总页数  向上取整
    let total = Math.ceil (count / pageSize)
    
    // 从第几个开始查询
    let start = (page - 1) * pageSize
    // 分页
    let users = await User.find({}).limit(pageSize).skip(start)
       //  渲染用户列表 
    res.render('admin/user', {
        users:users,
        count:count,
        page:page,
        total:total
    })
    // res.send('欢迎来到管理页面首页')
}