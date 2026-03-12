const Application = require("../models/Application")
const Company = require("../models/Company")

exports.applyJob = async (req,res)=>{

const {student_name, company, role} = req.body

// Check if company exists
const companyExists = await Company.findOne({company_name: company})

if(!companyExists){
return res.json({message:"Company does not exist"})
}

// Save application
const application = new Application(req.body)

await application.save()

res.json({message:"Application submitted successfully"})
}


exports.getApplications = async (req,res)=>{

const applications = await Application.find()

res.json(applications)

}