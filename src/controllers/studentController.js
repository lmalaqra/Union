const StudentServices = require("../services/sttudentServices");
const studentServices = new StudentServices();
const SlotServices = require("../services/slotServices");
const slotServices = new SlotServices();
const { convertTimeToIndexes } = require("../services/helper");

module.exports = class StudentController {
  async registerStudent(req, res, next) {
    try {
      const slots = [...req.body.slots];
      const student = await studentServices.registerUser(req.body.user);

      const foundSlots = await slotServices.registerStudentScheduale(
        student,
        convertTimeToIndexes(slots)
      );

      return res.status(200).json(foundSlots);
    } catch (e) {
      console.log(e);
      res.status(400).json({ error: e.message });
    }
  }
};
