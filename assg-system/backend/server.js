const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const authRoutes = require("./routes/authRoutes")
const assignmentRoutes = require("./routes/assignmentRoutes")
const submissionRoutes = require("./routes/submissionRoutes")

const app = express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://student:student123@cluster0.2gnlnog.mongodb.net/assignmentDB?retryWrites=true&w=majority&appName=Cluster0")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/api",authRoutes)
app.use("/api",assignmentRoutes)
app.use("/api",submissionRoutes)

app.listen(3000,()=>{
console.log("Server running on port 3000")
})