


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
      user: req.user._id, 
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
    const { tittle, description } = req.body;
    const dummy = await note.findOneAndUpdate(
      { _id: id, user: req.user._id },
      { tittle, description },
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
