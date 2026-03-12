const Company = require("../models/Company")

// Add company
exports.addCompany = async (req,res)=>{

const company = new Company(req.body)

await company.save()

res.json({message:"Company added successfully"})

}


// Get companies
exports.getCompanies = async (req,res)=>{

const companies = await Company.find()

res.json(companies)

}