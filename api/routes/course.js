const Joi = require("joi");
const express = require("express");
const router = express.Router();

router.use(express.json());

const courses = [
  { id: 1, name: "course1" },
  { id: 2, name: "course2" },
  { id: 3, name: "course3" }
];

router.get("/courses", (req, res, next) => {
  res.send(courses);
});

router.get("/courses/:id", (req, res, next) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) res.status(404).send("The course with the given id not found");
  res.send(course);
});

router.post("/courses", (req, res, next) => {
  const { error } = validateCourse(req.body);
  if (error) return res.status(404).send(error.details[0].message);

  const course = {
    id: courses.length + 1,
    name: req.body.name
  };
  courses.push(course);
  res.send(course);
});

router.put("/courses/:id", (req, res, next) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("Course not availabe");

  const { error } = validateCourse(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  course.name = req.body.name;
  res.send(course);
});

router.delete("/courses/:id", (req, res, next) => {
  const course = courses.find(c => c.id === parseInt(req.params.id));
  if (!course) return res.status(404).send("This course is not avaliable");

  // delete
  const index = courses.indexOf(course);
  courses.splice(index, 1);

  res.send(course);
});

router.post("/", (req, res, next) => {
  res.status(200).json({
    message: "Yes you have handled a post request"
  });
});

function validateCourse(course) {
  // validate
  const schema = {
    name: Joi.string()
      .min(3)
      .required()
  };
  return Joi.validate(course, schema);
}

module.exports = router;
