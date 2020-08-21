
const {
    User
} = require('../../model/user')
module.exports =async (req,res)=>{
    let {id} = req.query

    if(id){
    //   await  User.deleteOne({_id:id})
    await  User.findOneAndDelete({_id:id})
      res.redirect('/admin/user')
    }
    // let users = await User.findOne({_id:id})

}