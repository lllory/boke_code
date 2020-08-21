/**
 * express 引入express框架
 * path 处理访问views文件的路径
 * bodyParser 处理post参数
 * expressSession 生成session秘钥储存在cookie中
 */
// 引用express框架
const express = require('express')
let path = require('path')
const  bodyParser = require('body-parser')
const expressSession = require('express-session')
// 


// 创建网站服务器
const app = express()

// 数据库连接
require('./model/connect')

// 公共处理js
// const moduleFun =  require('./utils/utils')

// 处理post参数
app.use(bodyParser.urlencoded({extended:false}))
// 处理特殊表单数据
// const form = new formidable.IncomingForm()
// form.uploadDir=''
// form.keepExtensions = true
// form.parse(req,(err,fiedle , files)=>{

// })
// 引入用户列表
// require('./model/user')

// require('./model/article')
// 告诉express框架模板所在的位置
app.set('views',path.join(__dirname,'views'))
// 告诉模板express框架模板默认后缀
app.set('view engine','art')
// 当渲染后缀为art时，使用的模板引擎
app.engine('art',require('express-art-template'))
// 开放静态资源文件
app.use(express.static(path.join(__dirname,'public')))
// 配置session
app.use(expressSession({secret:'secret key'}))
// express.prototype.moduleFun = moduleFun
// 引入路由模块
const home = require('./route/home')
const admin = require('./route/admin')

// 拦截请求
app.use('/admin',require('./middleware/loginGuard') )

app.use('/home',home)
app.use('/admin',admin)

// 重定向
app.use((err,req,res,next)=>{
    let result = JSON.parse(err)
    let params = []
    for(let attr in result){
        if(attr != 'path'){
            params.push(attr+'='+result[attr])
        }
    }
    // res.redirect(`${result.path}?message=${result.message}`)
    res.redirect(`${result.path}?${params.join('&')}`)
})
app.listen(8080)
console.log('网站服务器启动成功，请访问localhost');


