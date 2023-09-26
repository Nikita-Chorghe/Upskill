const Joi = require('joi');
const objectId = require('joi-objectid')(Joi); // Pass Joi as an argument
const mongoose = require('mongoose');
const { courseSchema } = require('./course');

const Tutor = mongoose.model('Tutors', new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
    minlength: 5,
    maxlength: 255
  },
  course: { 
    type: courseSchema,  
    required: true
  },
  level: { 
    type: String, 
    required: true,
    min: 0,
    max: 255
  },
  dailyRentalRate: { 
    type: Number, 
    required: true,
    min: 0,
    max: 255
  }
}));

function validateTutor(tutor) {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    courseId: objectId().required(), // Use objectId() here
    level: Joi.string().min(5).max(50).required(),
    dailyRentalRate: Joi.number().min(0).required()
  });

  return schema.validate(tutor);
}

exports.Tutor = Tutor; 
exports.validate = validateTutor;
