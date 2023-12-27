const fs = require("node:fs")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

// middleware 
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/UserDataDB").then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database Can't Be Connected")
})

app.get("/", (req, res)=>{
    res.send("Bye world!!")
})

app.listen(port, ()=>{
    console.log("App Running on port: ", port)
})