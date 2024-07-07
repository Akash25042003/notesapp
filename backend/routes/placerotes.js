// const { getallnotes,createnotes,deletenotes, getnote,updatenote }=require("../controller/placecontroller")
// const express=require("express");
// const router = express.Router();
// // const auth=require("../middleware/requireAuth")



// router.get("/allnotes",getallnotes);
// router.post("/createnotes",createnotes)
// router.delete("/deletenotes/:id",deletenotes)
// router.get("/note/:id",getnote)
// router.put("/update/:id",updatenote)

// module.exports=router

const { getallnotes, createnotes, deletenotes, getnote, updatenote } = require("../controller/placecontroller");
const requireauth = require("../middleware/requireAuth");
const express = require("express");
const router = express.Router();


// router.use(requireauth);    

router.get("/allnotes",requireauth, getallnotes);
router.post("/createnotes",requireauth, createnotes);
router.delete("/deletenotes/:id",requireauth, deletenotes);
router.get("/note/:id",requireauth, getnote);
router.put("/update/:id",requireauth, updatenote);

module.exports = router;


