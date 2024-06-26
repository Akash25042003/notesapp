const note =require("../models/placemodle")
const user=require("../models/usermodle")

const getallnotes = async (req, res) => {
    try {
        const pro =await note.find({user:req.user._id}).populate("note");
        if (!pro) {
            return res.status(400).json({
              success: false,
              message: "User Doesn't Exist",
              data: err.message,
            });
        }
        const notes = pro.notes;
        return res.status(200).json(notes);

    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const createnotes =async(req,res)=>{
    try {
        id=req.user._id
        const{tittle,description}=req.body;
        const pro=await note.create({
            tittle,
            description,
            user:id
        })

        const updateduser=await user.findOneAndUpdate(
            id,
            {
                $push:{notes:pro._Id},
            },
            { new:true }
        )
        res.status(200).json(pro,updateduser)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
}

const deletenotes =async(req,res)=>{
    try {
        const {id}=req.params
        const del=await note.deleteOne({id:id,user:req.user._id});
        await del.save()
        const pro =await note.find({ user: req.user._id }).populate("notes");
        res.status(200).json(pro)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

const getnote=async(req,res)=>{
    try {
        const{id}=req.params
        const pro=await note.findOne({_id:id,user:req.user._id});
        res.status(200).json(pro)

    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const updatenote=async(req,res)=>{
    try {
        const {id}=req.params
        const dummy=await note.findOneAndUpdate(id,{user:req.user._id},{new:true})

        if(!dummy){
            res.status(400).json({message:"can't find your note"})
        }
        res.status(200).json(dummy)

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

module.exports = {
    getallnotes,createnotes,deletenotes,getnote,updatenote
};