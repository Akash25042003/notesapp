const mongoose=require("mongoose");

const Schema=mongoose.Schema;


const userschema=new Schema({
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password:{
        type:String,
        required:true
        
    },
    notes:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"notes"}
        ,
    ],
});


user=mongoose.model("user",userschema)
module.exports=user;