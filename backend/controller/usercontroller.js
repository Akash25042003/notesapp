const user = require("../models/usermodle")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const SECRET = "skylighter"

const signup = async (req, res) => {
    try {
        const { email, password } = req.body
        const superuser = await user.findOne({ email });
        if (superuser) {
            return res.status(404).json({ message: "this email already exists" })
        }
        const hashpassword = bcrypt.hashSync(password, 8);
        const pro = await user.create({ email, password: hashpassword })
        console.log(pro)
        return res.status(200).json(pro)
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const superuser = await user.findOne({ email })
        if (!superuser) {
            return res.status(400).json({ message: "username doesn't exist" })
        }
        const passwordmatch = await bcrypt.compare(password, superuser.password)
        if (!passwordmatch) {
            return res.status(400).json({ message: "password is incorrect" })
        }

        // Create a jwt
        const exp = Date.now() + 1000 * 60 * 60 * 24 * 30
        const token = jwt.sign({ sub: superuser._id, exp }, SECRET)

        // Set cookie
        res.cookie("Authorization", token, {
            expires:new Date(exp),
            httpOnly: true,
            sameSite: "lax",
            secure: false,
            path: '/',
            domain: 'localhost'
        })
        console.log(res.getHeaders(),exp);

        return res.status(200).json({ success:true, message: "Login successful" },);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const logout = async (req, res) => {
    try {
        res.clearCookie("Authorization");
        return res.status(200).json({ message: "logout successfully" });
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const checkAuth = async (req, res) => {
    // console.log("hello i am akash this is my user",req.user)
    try {
        return res.status(200).json({ message: "Authenticated" });
        
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

module.exports = { signup, login, logout, checkAuth }
