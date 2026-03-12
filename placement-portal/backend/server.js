const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const studentRoutes = require("./routes/studentRoutes")
const companyRoutes = require("./routes/companyRoutes")
const applicationRoutes = require("./routes/applicationRoutes")
const authRoutes = require("./routes/authRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://student:student123@cluster0.2gnlnog.mongodb.net/placementDB")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/api",studentRoutes)
app.use("/api",companyRoutes)
app.use("/api",applicationRoutes)
app.use("/api",authRoutes)

app.listen(3000,()=>{
console.log("Server running on port 3000")
})

