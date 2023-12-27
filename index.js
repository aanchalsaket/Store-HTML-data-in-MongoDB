const fs = require("node:fs")
const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

const Contact = require("./model/contact")

// middleware 
app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb://localhost:27017/UserDataDB").then(()=>{
    console.log("Database Connected")
}).catch((e)=>{
    console.log(e)
    console.log("Database Can't Be Connected")
})

app.get("/", (req, res)=>{
    let a = fs.readFileSync("index.html")
    res.send(a.toString())
})

app.post("/", async(req, res)=>{
    const contactData = new Contact(req.body)
    await contactData.save()
    let a = fs.readFileSync("submit.html")
    res.send(a.toString())
})

app.listen(port, ()=>{
    console.log("App Running on port: ", port)
})