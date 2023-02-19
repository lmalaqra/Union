const { StudentModel } = require("../models/Student");

module.exports = class StudentServiecs {
  async registerUser(student) {
    const foundtudent = await StudentModel.findOne({
      student_id: student.student_id,
    });

    if (!foundtudent) return await StudentModel.create(student);
    throw new Error("User with this ID already exists");
  }
};
