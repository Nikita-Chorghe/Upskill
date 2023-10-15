var path = require("path");
const config = require('config')
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const users = require('./routes/users');
const courses = require('./routes/courses');
const tutors = require('./routes/tutors');
const auth = require('./routes/auth');

require('dotenv').config();

var cors = require('cors');
app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
console.log(process.env.JWT_PRIVATE_KEY);

// if(!config.get('jwtPrivateKey')){
//     console.error('FATAL ERROR: jwtPrivateKey is not defined.');
//     process.exit(1);
// }

// mongoose.connect('mongodb://localhost/upskill')
mongoose.connect(process.env.MONGODB_CONNECT_URL)
  .then(() => console.log('Connected to MongoDB...'))
  .catch(err => console.error('Could not connect to MongoDB...'));

app.use(express.json());

app.use(express.static(path.join(__dirname, "./public/build")));

app.get("/", (req, res) => {
  res.sendFile("./public/build/index.html", (err) => {
    res.status(500).send(err);
  });
});



app.use('/api/courses', courses);
app.use('/api/users', users);
app.use('/api/auth', auth);
app.use('/api/tutors', tutors);

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Listening on port ${port}...`));