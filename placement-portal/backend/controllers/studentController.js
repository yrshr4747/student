const Student = require("../models/Student")

exports.registerStudent = async (req,res)=>{

const student = new Student(req.body)

await student.save()

res.json({message:"Student registered successfully"})
}