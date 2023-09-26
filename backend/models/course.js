const Joi = require('joi');
const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  }
});

const Course = mongoose.model('Course', courseSchema);

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(2).required()
  });

  return schema.validate(course);
}

exports.courseSchema = courseSchema;
exports.Course = Course; 
exports.validate = validateCourse;

