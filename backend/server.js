const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://student:student123@cluster0.2gnlnog.mongodb.net/examDB?retryWrites=true&w=majority")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

const userSchema = new mongoose.Schema({
email:String,
password:String
});

const courseSchema = new mongoose.Schema({
email:String,
course:String
});

const User = mongoose.model("User",userSchema);
const Course = mongoose.model("Course",courseSchema);

app.post("/register",async(req,res)=>{

const user=new User(req.body);
await user.save();

res.send("User registered");

});

app.post("/login",async(req,res)=>{

const user=await User.findOne({
email:req.body.email,
password:req.body.password
});

if(user)
res.send("Login successful");
else
res.send("Invalid credentials");

});

app.post("/addCourse",async(req,res)=>{

const course=new Course(req.body);

await course.save();

res.send("Course added");

});

app.get("/courses",async(req,res)=>{

const data=await Course.find();

res.json(data);

});

app.delete("/deleteCourse/:id",async(req,res)=>{

await Course.findByIdAndDelete(req.params.id);

res.send("Course deleted");

});

app.listen(3000,()=>{

console.log("Server running on port 3000");

});
