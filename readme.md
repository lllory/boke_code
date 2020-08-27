#监理项目需要的文件夹
新建public , model , route , views 文件夹
#初始化项目描述
npm init -y
#下载第三方模块
npm install express mongoose art-template express-art-template


#使用bcrypt加密依赖的环境(弃用，不生效)，改用nodejs的crypto
1. python环境,配置系统环境变量
2. npm install node-gyp
3. windows-build-tools工具  npm install -global --production windows-build-tools
4. 安装scrypt  npm install bcrypt

#验证请求参数  第三方模块Joi（JavaScript对象规则的描述语言和验证器）
1. 安装  npm install joi
##用法
<script> 
    const joi = require('Joi')
    const schema = {
        // alphanum表示只能是字母字符串或者数字字符串，required表示必选
        username:joi.string().alphanum().min(3).max(30).required().error(new Error('不能为空')),
        password:joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
        // 指定两种数据类型
        token:[joi.string(),joi.number()],
        email:joi.string().email()
    }
</script>
##验证
<script> 
// 可以通过异步函数调用方法
   joi.validate({username:'abc',email:'luoli'},schema)
</script>

#下载JSON formatter插件   格式化json数据的展示  ，谷歌浏览器 -- 更多工具 -- 扩展程序 --  将自己下载好的json formatter插件移到谷歌浏览器中

#分页用到的查询方法   
1. limit(2) //限制查询数量
2. skip(1) //跳过多少条数据  传入显示数据的开始位置

#body-parse模块处理普通的form数据
#formidable模块处理特殊表单数据（如文件上传）
1. 用法  
const formidable = require('formidable') ;  
const form = formidable.incomingForm()  ;  //创建表单解析对象
form.unloadDir = '/my/dir' // 设置文件上传路径
form.keepExtensions = false  //是否保留上传文件的扩展名
form.parse(req,(err,fields,files)=>{
    //fields 储存普通请求参数
    // files 储存上传文件信息
})

#文件读取（FileReader()，内置构造函数）  如图片
1. 用法
var reader = new FileReader();
reader.readAsDataURL("文件");//读取文件（二进制）异步方法
reader.onload = function(){
    <!--reader.result 是读取文件的结果 -->
}

#dateformat (第三方插件  日期格式化工具)  npm i dateformat
dateFormat(date , 'yyyy-mm-dd')

#实现分页，使用mongoose-sex-page插件
1. 用法
const pagination = require('mongoose-sex-page')
<!-- display显示多少个页码 exec查询条件完成，向后台发起请求 -->
pagination(集合构造函数).page(1).size(10).display(8).exec() 
{
    page:1 , //当前页
    size: 2 , //每页显示的数量
    total:20, //总数
    records:[{}], //查询出来的数据
    pages:4 , //总的页数
    display:[1,2,3,4] , //制定显示的页码
}

#node热更新代码  npm install -g supervisor   使用supervisor代替node执行命令

#将数据信息打印到控制台中   npm i morgan

#模块config  读取文件之前会自动判断当前环境   不用手动设置了
1. npm install config
2. 项目的根目录下面新建config文件夹
3. 在config文件夹下面新建default.json 、 development.json 、 profuction.json文件
4. 引入模块  ，  模块内部提供的get方法获取配置信息
##将敏感信息存储在环境变量中
1. 在config文件夹下面新建custom-environment-variables.json文件，将敏感的配置信息放在这个文件里面
2. 在环境变量配置了数据库密码的变量为APP_PWD ，值为itcase ,在文件夹中{"db":{"pwd":"APP_PWD"}}

