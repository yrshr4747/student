const Item=require("../models/itemModel")

exports.addItem=async(req,res)=>{

const item=new Item(req.body)

await item.save()

res.send("Item added")

}

exports.getItems=async(req,res)=>{

const data=await Item.find()

res.json(data)

}

exports.deleteItem=async(req,res)=>{

await Item.findByIdAndDelete(req.params.id)

res.send("Item deleted")

}