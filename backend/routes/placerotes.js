

const { getallnotes, createnotes, deletenotes, getnote, updatenote } = require("../controller/placecontroller");
const requireauth = require("../middleware/requireAuth");
const express = require("express");
const router = express.Router();

  

router.get("/allnotes",requireauth, getallnotes);
router.post("/createnotes",requireauth, createnotes);
router.delete("/deletenotes/:id",requireauth, deletenotes);
router.get("/note/:id",requireauth, getnote);
router.put("/update/:id",requireauth, updatenote);

module.exports = router;


