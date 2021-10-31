const Joi = require("joi");

module.exports.createStudentScehma = Joi.object().keys({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  courseName: Joi.string().required(),
  hours: Joi.number().required(),
  price: Joi.number().required(),
  dob: Joi.date().required(),
});

module.exports.updateStudentSchema = Joi.object().keys({
  firstName: Joi.string(),
  lastName: Joi.string(),
  courseName: Joi.string(),
  hours: Joi.number(),
  price: Joi.number(),
  dob: Joi.date(),
});
