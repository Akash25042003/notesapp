const{signup,login,logout,checkAuth}=require("../controller/usercontroller")
const requireauth=require("../middleware/requireAuth")
const express=require("express");
const router =express.Router();




router.post("/signup",signup);
router.post("/login",login);
router.post("/logout",logout);
router.get("/check-auth",requireauth,checkAuth)



module.exports=router