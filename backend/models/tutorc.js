// const jwt = require('jsonwebtoken')
// const config = require('config');
// const Joi = require('joi');
// const passwordComplexity = require("joi-password-complexity");
// const mongoose = require('mongoose');

// const tutorSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 50
//       },
//       email: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 225,
//         unique: true
//       },
//       subject:{
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 225,
//       },
//       level:{
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 225,
//       },
//       description:{
//         type: String,
//         required: true,
//         minlength: 5,
//       },
//       password: {
//         type: String,
//         required: true,
//         minlength: 5,
//         maxlength: 1024,
//       }
      
// });

// tutorSchema.methods.generateAuthToken = function(){
//     const token = jwt.sign({_id: this._id}, config.get('jwtPrivateKey'));
//     return token
// }

// const Tutor = mongoose.model('Tutor', tutorSchema );

// function validateTutor(tutor) {
//     const schema = Joi.object({
//         name: Joi.string().min(5).max(50).required(),
//         level: Joi.string().min(5).max(50).required(),
//         subject: Joi.string().min(5).max(50).required(),
//         description: Joi.string().min(5).required(),
//         email: Joi.string().min(5).max(255).required().email(),
//         password: passwordComplexity()
//     });
//     return schema.validate(tutor);
// }


// exports.Tutor = Tutor; 
// exports.validate = validateTutor;