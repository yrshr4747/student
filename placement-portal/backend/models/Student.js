const mongoose = require("mongoose")

const studentSchema = new mongoose.Schema({
name:String,
roll_no:String,
username:String,
password:String,
department:String,
cgpa:Number,
skills:String
})

module.exports = mongoose.model("Student",studentSchema)