const Joi = require('joi')


// 验证规则
const schema = {
    username: Joi.string().min(6).max(18).error(new Error('username属性不通过'))

}

async function run() {
   
    try {
        await Joi.validate({
            username: 'luol'
        }, schema)

    } catch (error) {
        console.log(error.message);
        return

    }
}

run()