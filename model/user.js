/**
 * 创建用户集合
 */
const mongoose = require('mongoose')
// const crypto = require('crypto')
const moduleFun = require('../utils/utils')

// 创建用户集合规则
const userSchema =new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        unique:true,//保证邮箱地址不重复
    },
    password:{
        type:String,
        required:true
    },
    // admin 超级管理员
    // normal 普通人员
    role:{
        type:String,
        required:true
    },
    // 字段是0（启用）  1（禁用）
    state:{
        type:Number,
        default:0
    }

})

const User = mongoose.model('User',userSchema)

var data = 'luoli'
var key = 'password'
 let result = moduleFun.aesEncrypto(data,key)

User.create(
//     {
//     username:'luoli',
//     email:'luoli@163.com',
//     password:moduleFun.aesEncrypto(data,key),
//     role:'admin',
//     state:0
// }
{
    username:'luoli',
    email:'luoli@163.com',
    password:moduleFun.aesEncrypto('luoli22',key),
    role:'admin',
    state:0
}
).then(()=>{
    console.log('用户创建成功');
    
}).catch(()=>{
    console.log('用户创建失败');
    
})
module.exports = {User}
