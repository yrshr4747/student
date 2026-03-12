const User = require("../models/User")

exports.login = async (req,res)=>{

const {username,password} = req.body

const user = await User.findOne({username,password})

if(user){
res.json({message:"Login successful",role:user.role})
}
else{
res.json({message:"Invalid credentials"})
}

}

exports.register = async (req,res)=>{

    const {username,password,role} = req.body
    
    const user = new User({username,password,role})
    
    await user.save()
    
    res.json({message:"User registered successfully"})
    
    }