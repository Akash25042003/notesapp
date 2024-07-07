// const note =require("../models/placemodle")

// const getallnotes = async (req, res) => {
//     try {
//         const pro =await note.find({})
//         if (!pro) {
//             return res.status(400).json({
//               success: false,
//               message: "User Doesn't Exist",
//               data: err.message,
//             });
//         }
//         // const notes = pro.notes;
//         return res.status(200).json(pro);

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// };

// const createnotes =async(req,res)=>{
//     try {
//         id=req.user._id
//         const{tittle,description}=req.body;
//         const pro=await note.create({
//             tittle,
//             description,
//         })
//         res.status(200).json(pro)
//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
    
// }

// const deletenotes =async(req,res)=>{
//     try {
//         const {id}=req.params
//         const del=await note.findByIdAndDelete(id);
//         await del.save()
//         const pro =await note.find({});
//         res.status(200).json(pro)

//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
// }

// const getnote=async(req,res)=>{
//     try {
//         const{id}=req.params
//         const pro=await note.findOne(id);
//         res.status(200).json(pro)

//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
// }


// const updatenote=async(req,res)=>{
//     try {
//         const {id}=req.params
//         const dummy=await note.findOneAndUpdate(id,req.body)

//         if(!dummy){
//             res.status(400).json({message:"can't find your note"})
//         }
//         res.status(200).json(dummy)

//     } catch (error) {
//         res.status(404).json({message:error.message})
//     }
// }

// module.exports = {
//     getallnotes,createnotes,deletenotes,getnote,updatenote
// };




// const    note = require("../models/placemodle")

// const getallnotes = async (req, res) => {
//     try {
//         // Fetch all notes belonging to the authenticated user
//         const notes = await note.find({ user: req.user._id });
        
//         if (!notes || notes.length === 0) {
//             return res.status(404).json({
//                 success: false,
//                 message: "No notes found for this user",
//             });
//         }
        
//         return res.status(200).json(notes);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const createnotes = async (req, res) => {
//     try {
//         const { tittle, description } = req.body;
//         const newNote = await note.create({
//             tittle,
//             description,
//             user: req.user._id, // Assign the note to the authenticated user
//         });
        
//         res.status(201).json(newNote);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const deletenotes = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const deletedNote = await note.findOneAndDelete({ _id: id, user: req.user._id });

//         if (!deletedNote) {
//             return res.status(404).json({ message: "Note not found" });
//         }

//         const remainingNotes = await note.find({ user: req.user._id });
//         res.status(200).json(remainingNotes);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const getnote = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const genote = await note.findOne({ _id: id, user: req.user._id });

//         if (!genote) {
//             return res.status(404).json({ message: "Note not found" });
//         }

//         res.status(200).json(genote);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const updatenote = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { tittle, description } = req.body;
//         const updatedNote = await note.findOneAndUpdate(
//             { _id: id, user: req.user._id },
//             { tittle, description },
//             { new: true }
//         );

//         if (!updatedNote) {
//             return res.status(404).json({ message: "Note not found" });
//         }

//         res.status(200).json(updatedNote);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// module.exports = {
//     getallnotes,
//     createnotes,
//     deletenotes,
//     getnote,
//     updatenote
// };


//////////////////////////////////////////////////////////////



// const Note = require("../models/placemodle");
// const User = require("../models/usermodle");

// const getallnotes = async (req, res) => {
//     try {
//         const userId = req.user._id;
//         const user = await User.findById(userId).populate("notes");
//         if (!user) {
//             return res.status(400).json({
//                 success: false,
//                 message: "User doesn't exist",
//             });
//         }
//         const notes = user.notes;
//         return res.status(200).json({
//             success: true,
//             notes,
//         });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// };

// const createnotes = async (req, res) => {
//     try {
//         const superuserId = req.user._id;
//         const { title, description } = req.body;
//         const createdNote = await Note.create({
//             superuserId,
//             title,
//             description,
//         });
//         const updatedUser = await User.findByIdAndUpdate(
//             superuserId,
//             {
//                 $push: { notes: createdNote._id },
//             },
//             { new: true }
//         );
//         return res.status(200).json({
//             success: true,
//             message: "Note created successfully",
//             createdNote,
//             updatedUser,
//         });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const deletenotes = async (req, res) => {
//     try {
//         const { id } = req.params;
//         if (!id) {
//             return res.status(400).json({ success: false, message: "Note ID is required" });
//         }
//         const note = await Note.findById(id);
//         const userId = req.user._id;
//         if (!userId) {
//             return res.status(401).json({ success: false, message: "User not authenticated" });
//         }
//         if (note && note.superuserId.toString() === userId) {
//             await User.findByIdAndUpdate(userId, {
//                 $pull: { notes: id },
//             });
//             await note.deleteOne();
//             res.json({ success: true, message: "Note removed successfully" });
//         } else {
//             res.status(404).json({ success: false, message: "Note not found" });
//         }
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const getnote = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const note = await Note.findById(id);
//         res.status(200).json(note);
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// };

// const updatenote = async (req, res) => {
//     try {
//         const { id } = req.params;
//         const { title, description } = req.body;
//         if (!id) {
//             return res.status(400).json({
//                 success: false,
//                 message: "No Note ID present",
//             });
//         }
//         const updatedNote = await Note.findByIdAndUpdate(
//             id,
//             {
//                 title: title,
//                 description: description,
//             },
//             { new: true }
//         );
//         return res.status(200).json({
//             success: true,
//             message: "Note updated successfully",
//             updatedNote,
//         });
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// };

// module.exports = {
//     getallnotes,
//     createnotes,
//     deletenotes,
//     getnote,
//     updatenote,
// };

///////////////////////////////////////////////


// const note =require("../models/placemodle")

// const getallnotes = async (req, res) => {
//     try {
//         const pro =await note.find({user:req.user._id})
//         if (!pro) {
//             return res.status(400).json({
//               success: false,
//               message: "User Doesn't Exist",
//               data: err.message,
//             });
//         }
//         // const notes = pro.notes;
//         return res.status(200).json(pro);

//     } catch (error) {
//         res.status(500).json({message:error.message})
//     }
// };

// const createnotes =async(req,res)=>{
//     try {
//         id=req.user._id
//         const{tittle,description}=req.body;
//         const pro=await note.create({
//             tittle,
//             description,
//         })
//         res.status(200).json(pro)
//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
    
// }

// const deletenotes =async(req,res)=>{
//     try {
//         const {id}=req.params
//         const del=await note.DeleteOne({id:id,user:req.user._id});
//         await del.save()
//         const pro =await note.find({});
//         res.status(200).json(pro)

//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
// }

// const getnote=async(req,res)=>{
//     try {
//         const{id}=req.params
//         const pro=await note.findOne({_id:id,user:req.user._id});
//         res.status(200).json(pro)

//     } catch (error) {
//         res.status(400).json({message:error.message})
//     }
// }


// const updatenote=async(req,res)=>{
//     try {
//         const {id}=req.params
//         const{tittle,description}=req.body;
//         const dummy=await note.findOneAndUpdate({id,tittle,description,user:req.user._id})

//         if(!dummy){
//             res.status(400).json({message:"can't find your note"})
//         }
//         res.status(200).json(dummy)

//     } catch (error) {
//         res.status(404).json({message:error.message})
//     }
// }

// module.exports = {
//     getallnotes,createnotes,deletenotes,getnote,updatenote
// };

///////////////////////////////


const note = require("../models/placemodle");

const getallnotes = async (req, res) => {
  // console.log('Controller user:', req.user);
  try {
    const pro = await note.find({ user: req.user._id });
    if (!pro) {
      return res.status(400).json({
        success: false,
        message: "User Doesn't Exist",
      });
    }
    return res.status(200).json(pro);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createnotes = async (req, res) => {
  try {
    const { tittle, description } = req.body;
    const pro = await note.create({
      tittle,
      description,
      user: req.user._id, // Make sure to associate the note with the user
    });
    res.status(200).json(pro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletenotes = async (req, res) => {
  try {
    const { id } = req.params;
    const del = await note.deleteOne({ _id: id, user: req.user._id });
    if (!del.deletedCount) {
      return res.status(404).json({ message: "Note not found or not authorized" });
    }
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getnote = async (req, res) => {
  try {
    const { id } = req.params;
    const pro = await note.findOne({ _id: id, user: req.user._id });
    if (!pro) {
      return res.status(404).json({ message: "Note not found or not authorized" });
    }
    res.status(200).json(pro);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatenote = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description } = req.body;
    const dummy = await note.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { title, description },
      { new: true }
    );
    if (!dummy) {
      return res.status(400).json({ message: "Can't find your note or not authorized" });
    }
    res.status(200).json(dummy);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getallnotes,
  createnotes,
  deletenotes,
  getnote,
  updatenote
};
