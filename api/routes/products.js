const Joi = require('joi');
const express = require('express');
const router = express.Router();

router.use(express.json());

const courses = [
    {id: 1, name: 'course1'},
    {id: 2, name: 'course2'},
    {id: 3, name: 'course3'}
];

router.get('/courses', (req, res, next) => {
    res.send(courses);
});

router.get('/courses/:id', (req, res, next) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given id not found');
    res.send(course);
});

router.post('/courses', (req, res, next) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    const result = Joi.validate(req.body, schema);
    console.log(result);

    if (!req.body.name || req.body.name.length < 3){
        res.status(404).send("Invalid input please");
        return;
    }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Yes you have handled a post request"
    })
});

module.exports = router;