const jwt=require("jsonwebtoken");
const user=require("../models/usermodle")


const SECRET="skylighter"
const requireauth=async(req,res,next)=>{
    try {
        const token= req.cookie.Authorization

        const decoded=jwt.verify(token,SECRET);

        const superuser=await user.findById(decoded.sub);
        if(!superuser)return res.status(400).json({message:"error "});
        //attach to the user
        req.user=superuser;

        //continue on
        next();
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}

module.exports=requireauth;