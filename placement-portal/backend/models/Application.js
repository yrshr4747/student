const mongoose = require("mongoose")

const applicationSchema = new mongoose.Schema({
student_name:String,
company:String,
role:String,
status:String,
application_date:String
})

module.exports = mongoose.model("Application",applicationSchema)