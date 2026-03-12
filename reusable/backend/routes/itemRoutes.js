const express=require("express")

const router=express.Router()

const controller=require("../controllers/itemController")

router.post("/add",controller.addItem)

router.get("/items",controller.getItems)

router.delete("/delete/:id",controller.deleteItem)

module.exports=router