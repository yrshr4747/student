const Assignment = require("../models/Assignment")

exports.createAssignment = async (req,res)=>{

const assignment = new Assignment(req.body)

await assignment.save()

res.json({message:"Assignment created"})

}

exports.getAssignments = async (req,res)=>{

const assignments = await Assignment.find()

res.json(assignments)

}