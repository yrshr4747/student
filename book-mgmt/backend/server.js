const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://student:student123@cluster0.2gnlnog.mongodb.net/bookDB?retryWrites=true&w=majority")
.then(()=>console.log("MongoDB connected"))
.catch(err=>console.log(err));

const bookSchema = new mongoose.Schema({
title:String,
author:String,
price:Number
});

const Book = mongoose.model("Book",bookSchema);

app.post("/addBook",async(req,res)=>{

const book = new Book(req.body);

await book.save();

res.send("Book added");

});

app.get("/books",async(req,res)=>{

const data = await Book.find();

res.json(data);

});

app.delete("/deleteBook/:id",async(req,res)=>{

await Book.findByIdAndDelete(req.params.id);

res.send("Book deleted");

});

app.listen(3000,()=>{

console.log("Server running on port 3000");

});