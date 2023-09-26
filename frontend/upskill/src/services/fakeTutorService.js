import * as coursesAPI from "./fakeCourseService";
// import randomstring from "random-string";
const tutors = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    name: "Terminator",
    course: { _id: "5b21ca3eeb7f6fbccd471818", name: "Taxes" },
    level: "Basic",
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked:true
  },
  {
    _id: "5b21ca3eeb7f6fbccd471816",
    name: "Die Hard",
    course: { _id: "5b21ca3eeb7f6fbccd471818", name: "Taxes" },
    level: "Basic",
    dailyRentalRate: 2.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471817",
    name: "Get Out",
    course: { _id: "5b21ca3eeb7f6fbccd471820", name: "Cooking" },
    level: "Basic",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471819",
    name: "Trip to Italy",
    course: { _id: "5b21ca3eeb7f6fbccd471814", name: "Coding" },
    level: "Basic",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181a",
    name: "Airplane",
    course: { _id: "5b21ca3eeb7f6fbccd471814", name: "Coding" },
    level: "Intermediate",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181b",
    name: "Wedding Crashers",
    course: { _id: "5b21ca3eeb7f6fbccd471814", name: "Coding" },
    level: "Intermediate",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181e",
    name: "Gone Girl",
    course: { _id: "5b21ca3eeb7f6fbccd471820", name: "Cooking" },
    level: "Intermediate",
    dailyRentalRate: 4.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd47181f",
    name: "The Sixth Sense",
    course: { _id: "5b21ca3eeb7f6fbccd471820", name: "Cooking" },
    level: "Advance",
    dailyRentalRate: 3.5
  },
  {
    _id: "5b21ca3eeb7f6fbccd471821",
    name: "The Avengers",
    course: { _id: "5b21ca3eeb7f6fbccd471818", name: "Taxes" },
    level: "Advance",
    dailyRentalRate: 3.5
  }
];

export function getTutors() {
  return tutors;
}

export function getTutor(id) {
  return tutors.find(m => m._id === id);
}

export function saveTutors(tutor) {
  let tutorInDb = tutors.find(m => m._id === tutor._id) || {};
  tutorInDb.name = tutor.name;
  tutorInDb.course = coursesAPI.courses.find(g => g._id === tutor.courseId);
  tutorInDb.level = tutor.level;
  tutorInDb.dailyRentalRate = tutor.dailyRentalRate;

  if (!tutorInDb._id) {
    tutorInDb._id = Date.now().toString();
    tutors.push(tutorInDb);
  }

  return tutorInDb;
}

export function deletetutor(id) {
  let tutorInDb = tutors.find(m => m._id === id);
  tutors.splice(tutors.indexOf(tutorInDb), 1);
  return tutorInDb;
}
