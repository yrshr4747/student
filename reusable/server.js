const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")

const itemRoutes=require("./routes/itemRoutes")

const app=express()

app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://student:student123@cluster0.mongodb.net/examDB?retryWrites=true&w=majority")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err))

app.use("/api",itemRoutes)

app.listen(3000,()=>{

console.log("Server running on port 3000")

})