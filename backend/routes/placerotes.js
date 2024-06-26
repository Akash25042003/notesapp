const { getallnotes,createnotes,deletenotes, getnote,updatenote }=require("../controller/placecontroller")
const express=require("express");
const router = express.Router();



router.get("/allnotes",getallnotes);
router.post("/createnotes",createnotes)
router.delete("/deletenotes/:id",deletenotes)
router.get("/note/:id",getnote)
router.put("/update/:id",updatenote)

module.exports=router



