const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");

router.post("/addEmployee",employeeController.addEmployee);
router.get("/employees",employeeController.getEmployees);
router.delete("/deleteEmployee/:id",employeeController.deleteEmployee);

module.exports = router;