/**
 * 文章管理
 */
const express = require('express')

const home = express.Router()

// 博客前台首页的展示页面
home.get('/',require('./home/index'))
// 博客前台文章展示页面
home.get('/article',require('./home/article'))

// 创建文章评论接口
home.post('/article-comment',require('./home/article-comment'))

//将路由对象暴露出去
module.exports = home