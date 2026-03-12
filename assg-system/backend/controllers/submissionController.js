const Submission = require("../models/Submission")

exports.submitAssignment = async (req,res)=>{

const submission = new Submission(req.body)

await submission.save()

res.json({message:"Submitted successfully"})

}

exports.getSubmissions = async (req,res)=>{

const submissions = await Submission.find()

res.json(submissions)

}