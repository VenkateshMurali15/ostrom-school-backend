const express = require("express");
const router = express.Router();
const studentController = require("../controller/student-controller");
const joiSchemaValidation = require("../middleware/joiSchemaValidation");
const studentSchema = require("../api-schema/student-schema");

router.post(
  "/",
  joiSchemaValidation.validateBody(studentSchema.createStudentScehma),
  studentController.createStudent
);

router.get("/", studentController.getAllStudents);

router.get("/:id", studentController.getStudentById);

router.put(
  "/:id",
  joiSchemaValidation.validateBody(studentSchema.updateStudentSchema),
  studentController.updateStudent
);

router.delete("/:id", studentController.deleteStudent);

module.exports = router;
