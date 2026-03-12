const express = require("express")
const router = express.Router()

const submissionController = require("../controllers/submissionController")

router.post("/submit",submissionController.submitAssignment)
router.get("/submissions",submissionController.getSubmissions)

module.exports = router