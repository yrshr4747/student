const User = require("../models/User");

exports.register = async(req,res)=>{

const user = new User(req.body);

await user.save();

res.send("User registered");

};

exports.login = async(req,res)=>{

const user = await User.findOne({
email:req.body.email,
password:req.body.password
});

if(user)
res.send("Login successful");
else
res.send("Invalid credentials");

};