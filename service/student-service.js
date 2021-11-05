const Student = require("../database/models/student-model");
const { formatMongoData, checkObjectId } = require("../helper/dbHelper");
const constants = require("../constants");
const mongoose = require("mongoose");

module.exports.createStudent = async (serviceData) => {
  try {
    let student = new Student({ ...serviceData });
    let result = await student.save();
    return formatMongoData(result);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getAllStudents = async () => {
  try {
    let student = await Student.find({});
    return formatMongoData(student);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.getStudentById = async ({ id }) => {
  try {
    checkObjectId(id);
    let student = await Student.findById(id);
    if (!student) {
      throw new Error(constants.studentMessage.STUDENT_NOT_FOUND);
    }
    return formatMongoData(student);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.updateStudent = async ({ id, updateInfo }) => {
  try {
    checkObjectId(id);
    let student = await Student.findOneAndUpdate({ _id: id }, updateInfo, {
      new: true,
    });
    if (!student) {
      throw new Error(constants.studentMessage.STUDENT_UPDATED);
    }
    return formatMongoData(student);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports.deleteStudent = async ({ id }) => {
  try {
    checkObjectId(id);
    let student = await Student.findByIdAndDelete(id);
    if (!student) {
      throw new Error(constants.studentMessage.STUDENT_NOT_FOUND);
    }
    return formatMongoData(student);
  } catch (error) {
    throw new Error(error);
  }
};
