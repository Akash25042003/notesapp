const mongoose =require("mongoose");
const schema =mongoose.Schema;

const notesSchema=new schema({
    tittle:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    user:{type:mongoose.Schema.Types.ObjectId,ref:'user'}
})

Notes=mongoose.model("Notes",notesSchema);
module.exports=Notes;