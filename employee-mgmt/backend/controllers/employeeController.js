const Employee = require("../models/employee");

exports.addEmployee = async(req,res)=>{

const employee = new Employee(req.body);

await employee.save();

res.send("Employee added");

};

exports.getEmployees = async(req,res)=>{

const data = await Employee.find();

res.json(data);

};

exports.deleteEmployee = async(req,res)=>{

await Employee.findByIdAndDelete(req.params.id);

res.send("Employee deleted");

};