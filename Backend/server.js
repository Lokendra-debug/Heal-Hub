const express=require("express")
const cors=require("cors")
require("dotenv").config()
var cookieParser = require('cookie-parser')


const {connection}=require("./database/db")
const {userRoute}=require("./routes/user.route")



const app=express()
app.use(cookieParser())
app.use(express.json())
app.use(cors())

app.get("/",async(req,res)=>{
    res.status(200).send("base end point")
})



app.use("/users",userRoute)


app.all("*",(req,res)=>{
    return res.status(404).send("404 Route Not Found")
})

app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("DB connected")
    } catch (error) {
        console.log(error.message)
    }

    console.log(`server is running on port ${process.env.port}`)
})