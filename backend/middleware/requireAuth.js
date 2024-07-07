// const jwt = require("jsonwebtoken");
// const user = require("../models/usermodle");

// const SECRET = "skylighter"; // Use environment variable for SECRET

// const requireAuth = async (req, res, next) => {
//     try {
//         const token = req.cookies.Authorization;

//         if (!token) {
//             console.log("Authorization cookie is missing");
//             return res.status(401).json({ message: "Unauthorized" });
//         }

//         const decoded = jwt.verify(token, SECRET);
//         const superuser = await user.findById(decoded.sub);

//         if (!superuser) {
//             console.log("User not found");
//             return res.status(401).json({ message: "Unauthorized" });
//         }

//         req.user = superuser; // Attach user object to request for use in subsequent middleware or route handlers
//         // console.log("User authenticated:", superuser);
//         // console.log(req.user)
//         next(); // Continue to the next middleware or route handler
//     } catch (error) {
//         console.error("Token verification failed:", error);
//         res.status(401).json({ message: "Unauthorized" }); // Handle token verification errors
//     }
// };

// module.exports = requireAuth;


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



