const note =require("../models/placemodle")
// const user=require("../models/usermodle")

const getallnotes = async (req, res) => {
    try {
        const pro =await note.find({user:req.user._id}).populate("note");
        res.status(200).json(pro)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
};

const createnotes =async(req,res)=>{
    try {
        const{tittle,description}=req.body;
        const pro=await note.create({
            tittle,
            description,
            user:req.user._id
        })
        await pro.save();
        await user.note.push(pro._id);
        const create =await note.find({user:req.user._id}).populate("note");
        res.status(200).json(create)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
    
}

const deletenotes =async(req,res)=>{
    try {
        const {id}=req.params
        const del=await note.deleteOne({id:id,user:req.user._id});
        await del.save()
        const pro =await note.find({ user: req.user._id }).populate("note");
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
        const dummy=await note.findOneAndUpdate({id:id,user:req.user._id})

        if(!dummy){
            res.status(400).json({message:"can't find your note"})
        }
        const updatednote=await note.findById(id)
        res.status(200).json(updatednote)

    } catch (error) {
        res.status(404).json({message:error.message})
    }
}

module.exports = {
    getallnotes,createnotes,deletenotes,getnote,updatenote
};