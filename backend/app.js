const placeroutes=require("./routes/placerotes");
const userroutes=require("./routes/userrotes");
const cookieParser=require("cookie-parser")
const express = require("express");
const mongoose =require("mongoose");
const cors=require("cors");
const app= express()


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    orgin:"http://localhost:3000",
    methods:["POST","GET","DELETE","PUT"]
}))

app.use("/api/notes",placeroutes);
app.use("/users",userroutes);




mongoose.connect("mongodb+srv://akashakash93161:XRlOiWUMPZUw3miZ@cluster0.rdumdsh.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>{
    app.listen(4000,()=>{
        console.log("connected to the database")
    })
})
.catch(()=>{
    console.log("connection failed")
})
