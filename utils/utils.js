const crypto = require('crypto')
const Joi = require('joi')

let moduleFun = (function(){
// 加密   // 创建一个aes对称加密算法，加密解密都要使用key，第一个参数基于OpenSSL（也是一种加密的方式），第二个参数用来派生key
function aesEncrypto(data,key){
    const cipher = crypto.createCipher('aes192',key)
    var encrypted = cipher.update(data,'utf8','hex')
    encrypted+=cipher.final('hex')
    return encrypted
}

// 解密
function aesDecrypto(data,key){
    const decipher = crypto.createDecipher('aes192',key)
    var decrypted = decipher.update(data,'hex','utf8')
    decrypted+=decipher.final('utf8')
    return decrypted
}

/**
 * 表单参数验证
 * formData 表单数据
 * regData   Joi验证规则
 * res 重定向页面
 * 可以通过异步函数（async和await）获取信息，必须加try catch , 也可以通过then和catch来捕获信息 
 */
async function enJoi(formData,regData,path ,next){
    try {
        // 验证通过
    //   const valid = await Joi.validate(formData,regData) 
    return  valid = await Joi.validate(formData,regData) 
      
    } catch (error) {
        // 验证不通过，重定向页面
        console.log(error.message,'error');
        
    //   return  res.redirect('/admin/user-edit?message='+error.message)
    // return next(JSON.stringify({path:'/admin/user-edit',message:error.message}))
    return next(JSON.stringify({path:path,message:error.message}))
    // return  next
    }
}

  
    return {
        aesEncrypto,
        aesDecrypto,
        enJoi
    }
})()


module.exports = moduleFun