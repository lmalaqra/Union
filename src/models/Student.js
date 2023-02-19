const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  student_id: { type: String, required: true },
  name: String,
  class: String,
  email: { type: String },
  phone: Number,
  state: String,
});

const StudentModel = mongoose.model("Student", studentSchema);
module.exports = { StudentModel, studentSchema };
