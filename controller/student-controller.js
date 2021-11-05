const studentService = require("../service/student-service");
const constants = require("../constants");

module.exports.createStudent = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await studentService.createStudent(req.body);
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_CREATED;
    response.body = responseFromService;
  } catch {
   
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.getAllStudents = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await studentService.getAllStudents();
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_FETCHED;
    response.body = responseFromService;
  } catch {
  
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.getStudentById = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await studentService.getStudentById(req.params);
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_FETCHED;
    response.body = responseFromService;
  } catch {
   
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.updateStudent = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await studentService.updateStudent({
      id: req.params.id,
      updateInfo: req.body,
    });
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_FETCHED;
    response.body = responseFromService;
  } catch {
  
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};

module.exports.deleteStudent = async (req, res) => {
  let response = { ...constants.defaultServerResponse };
  try {
    const responseFromService = await studentService.deleteStudent(req.params);
    response.status = 200;
    response.message = constants.studentMessage.STUDENT_DELETED;
    response.body = responseFromService;
  } catch {
   
    response.message = error.message;
  }
  return res.status(response.status).send(response);
};
