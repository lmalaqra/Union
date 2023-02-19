const express = require("express");
const router = express.Router();
const StudentController = require("../controllers/studentController");
const studentController = new StudentController();

router
  .route("/")
  .get((req, res) => {
    res.send("hi");
  })
  .post(studentController.registerStudent);

module.exports = router;
