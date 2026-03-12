const Student = require("../models/Student")

exports.login = async (req,res)=>{

const {username,password} = req.body

const student = await Student.findOne({username,password})

if(student){
res.json({role:"student"})
}
else if(username==="admin" && password==="admin123"){
res.json({role:"admin"})
}
else{
res.json({message:"Invalid credentials"})
}

}