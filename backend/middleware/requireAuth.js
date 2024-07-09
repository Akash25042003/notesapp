


const jwt = require("jsonwebtoken");
const user = require("../models/usermodle");
const SECRET = "skylighter";

const requireAuth = async (req, res, next) => {
    try {
        const token = req.cookies.Authorization;

        if (!token) {
            console.log("Authorization cookie is missing");
            return res.status(401).json({ message: "Unauthorized" });
        }

        const decoded = jwt.verify(token, SECRET);
        // console.log("Decoded JWT payload:", decoded);

        const superuser = await user.findById(decoded.sub);

        if (!superuser) {
            console.log("User not found for ID:", decoded.sub);
            return res.status(401).json({ message: "Unauthorized" });
        }

        req.user = superuser;
        next();
    } catch (error) {
        console.error("Token verification failed:", error);
        res.status(401).json({ message: "Unauthorized" });
    }
};

module.exports = requireAuth;



