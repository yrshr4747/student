const express = require("express")
const router = express.Router()

const studentController = require("../controllers/studentController")

router.post("/student/register",studentController.registerStudent)

module.exports = router