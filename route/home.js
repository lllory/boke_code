/**
 * 文章管理
 */
const express = require('express')

const home = express.Router()

// 创建文章列表页面路由
// home.get('/article',require('./admin/articalPage'))

// 创建文章编辑页面路由
// home.get('/article-edit',require('./home/articalEditPage'))

//将路由对象暴露出去
module.exports = home