//login
const config = require('config');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const passwordComplexity = require("joi-password-complexity");
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user');
const {Tutor} = require('../models/tutorc');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let user  = await User.findOne({email:req.body.email});
  if (!user) return res.status(400).send('Invalid email or password');

  const validPassword = await bcrypt.compare(req.body.password, user.password)
  if (!validPassword) return res.status(400).send('Invalid email or password');
  const token = user.generateAuthToken();
  
  res.send(token);
});

router.post('/', async (req, res) => {
  const { error } = validate(req.body); 
  if (error) return res.status(400).send(error.details[0].message);

  let tutor  = await Tutor.findOne({email:req.body.email});
  if (!tutor) return res.status(400).send('Invalid email or password');

  const validPassword = await bcrypt.compare(req.body.password, tutor.password)
  if (!validPassword) return res.status(400).send('Invalid email or password');
  const token = tutor.generateAuthToken();
  
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
  }).send();
});


function validate(req) {
    const schema = Joi.object({
        email: Joi.string().min(5).max(255).required().email(),
        password: passwordComplexity()
    });

    return schema.validate(req);
}
 
module.exports = router;