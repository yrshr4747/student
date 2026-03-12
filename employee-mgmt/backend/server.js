const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const logger = require("./middleware/logger");

const authRoutes = require("./routes/authRoutes");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use(logger);

mongoose.connect("mongodb+srv://student:student123@cluster0.2gnlnog.mongodb.net/companyDB?retryWrites=true&w=majority")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

app.use("/",authRoutes);
app.use("/",employeeRoutes);

app.listen(3000,()=>{

console.log("Server running on port 3000");

});