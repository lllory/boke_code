// 引入mongoose第三方模块
const mongoose = require('mongoose')
// 连接数据库
mongoose.connect('mongodb://123.57.200.101/READ_ME_TO_RECOVER_YOUR_DATA',{useNewUrlParser:true,useUnifiedTopology: true },(err)=>{
    if(err){
        console.log('连接失败');
        
    }else{
        console.log('连接成功');
        
    }
})