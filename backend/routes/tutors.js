const {Tutor, validate} = require('../models/tutor'); 
const {Course} = require('../models/course');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// router.get("/", (req, res) => {
//   res.sendFile("./public/build/index.html", (err) => {
//     res.status(500).send(err);
//   });
// });

router.get('/', async (req, res) => {
  const tutors = await Tutor.find().sort('name');
  res.send(tutors);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findById(req.body.courseId);
  if (!course) return res.status(400).send('Invalid Course.');

  const tutor = new Tutor({ 
    name: req.body.name,
    course: {
      _id: course._id,
      name: course.name
    },
    level: req.body.level,
    dailyRentalRate: req.body.dailyRentalRate
  });
  await tutor.save();
  
  res.send(tutor);
});

router.put('/:id', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  const course = await Course.findById(req.body.courseId);
  if (!course) return res.status(400).send('Invalid course.');

  const tutor = await Tutor.findByIdAndUpdate(req.params.id,
    { 
      name: req.body.name,
      course: {
        _id: course._id,
        name: course.name
      },
      level: req.body.level,
      dailyRentalRate: req.body.dailyRentalRate
    }, { new: true });

  if (!tutor) return res.status(404).send('The tutor with the given ID was not found.');
  
  res.send(tutor);
});

router.delete('/:id', async (req, res) => {
  const tutor = await Tutor.findByIdAndRemove(req.params.id);

  if (!tutor) return res.status(404).send('The tutor with the given ID was not found.');

  res.send(tutor);
});

router.get('/:id', async (req, res) => {
  const tutor = await Tutor.findById(req.params.id);

  if (!tutor) return res.status(404).send('The tutor with the given ID was not found.');

  res.send(tutor);
});

module.exports = router; 