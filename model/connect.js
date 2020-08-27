// 引入mongoose第三方模块
const mongoose = require('mongoose')
const config = require('config')
// 连接数据库
// 使用账户和密码连接数据库 mongoose.connect('mongodb://user:pwd@localhost:port/database')  admin: user:root pwd:root bolg : user:itcase   pwd:itcase
mongoose.connect(`mongodb://${config.get('db.user')}:${config.get('db.pwd')}@${config.get('db.host')}:${config.get('db.port')}/${config.get('db.name')}`,{useNewUrlParser:true,useUnifiedTopology: true },(err)=>{
    if(err){
        console.log(err);
        
        console.log('连接失败');
        
    }else{
        console.log('连接成功');
        
    }
})
// mongoose.connect('mongodb://itcase:itcase@123.57.200.101/blog',{useNewUrlParser:true,useUnifiedTopology: true },(err)=>{
//     if(err){
//         console.log(err);
        
//         console.log('连接失败');
        
//     }else{
//         console.log('连接成功');
        
//     }
// })