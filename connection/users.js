const mongoose=require('mongoose');

const user=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
},{
    timeStamp:true
})

const users=mongoose.model('users',user);
module.exports=users;