const express = require("express")
const router = express.Router()

const applicationController = require("../Controllers/applicationController")

router.post("/apply",applicationController.applyJob)

router.get("/applications",applicationController.getApplications)

module.exports = router