/**
 * 用户管理
 */
const express = require('express')


const admin = express.Router()

admin.get('/login', require('./admin/loginPage'))
// // 实现登录功能
admin.post('/login', require('./admin/login'))

// // 创建用户列表
admin.get('/user', require('./admin/userPage'))

// 退出功能
admin.get('/logout',require('./admin/logout'))

// 创建用户编辑页面路由
admin.get('/user-edit',require('./admin/user-edit'))

// 创建用户新增功能
admin.post('/user-edit',require('./admin/user-edit-fn'))

// 修改用户列表
admin.post('/user-modify',require('./admin/user-modify'))

// 删除用户列表
admin.get('/delete',require('./admin/user-delete'))



// 创建文章列表页面路由
admin.get('/article',require('./admin/articalPage'))

// 创建文章编辑页面路由
admin.get('/article-edit',require('./admin/articalEditPage'))

// 实现文章添加功能
admin.post('/article-add',require('./admin/article-add'))

// 实现文章修改功能
admin.post('/article-modify',require('./admin/article-modify'))


//将路由对象暴露出去
module.exports = admin