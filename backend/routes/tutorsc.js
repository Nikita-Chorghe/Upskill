// const bcrypt = require('bcrypt');
// const _ = require('lodash');
// const { Tutor, validate } = require('../models/tutorc');
// const mongoose = require('mongoose');
// const express = require('express');
// const router = express.Router();

// router.get("/", async (req, res) => {
//     const tutors = await Tutor.find()
//       .select("-__v")
//       .sort("name");
//     res.send(tutors);
//   });

// router.post('/', async (req, res) => {
//   const { error } = validate(req.body);
//   if (error) return res.status(400).send(error.details[0].message);

//   let tutor = await Tutor.findOne({ email: req.body.email });
//   if (tutor) return res.status(400).send('Tutor already registered');

//   tutor = new Tutor(_.pick(req.body, ['name', 'email', 'password', 'subject', 'level', 'description']));
//   const salt = await bcrypt.genSalt(10);
//   tutor.password = await bcrypt.hash(tutor.password, salt);
//   await tutor.save();

//   const token = tutor.generateAuthToken(); // Implement this method
//   res.header('x-auth-token', token).send(_.pick(tutor, ['_id', 'name', 'email', 'subject', 'level', 'description']));
// });

// module.exports = router;
