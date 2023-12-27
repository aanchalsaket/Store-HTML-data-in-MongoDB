const mongoose = require("mongoose")

const contactData = new mongoose.Schema({
    name:{
        type: String
    },
    age:{
        type: Number
    }
})

const Contact = mongoose.model("Contact", contactData)
module.exports = Contact