const express = require("express")
const mongoose = require("mongoose")

const app = express()
const port = 3000

app.get("/", (req, res)=>{
    res.send("Bye world!!!")
})

app.listen(port, ()=>{
    console.log("App Running on port: ", port)
})