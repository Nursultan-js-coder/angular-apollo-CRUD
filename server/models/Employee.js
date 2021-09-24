const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position:{
    type:String,
    required:true,
  },
  level:{
    type:String,
    required:true
  }
});

module.exports = Employee = mongoose.model("employee", EmployeeSchema);
