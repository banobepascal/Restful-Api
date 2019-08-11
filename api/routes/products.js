const express = require('express');
const router = express.Router();

const courses = [
    {id: 1, name: course1},
    {id: 2, name: course2},
    {id: 3, name: course3}
];

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Yes you have handled a get request"
    });
});

router.get('/courses/:id', (req, res, next) => {
    const courese = courses.find(c => c.id === parseInt(req.params.id));
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Yes you have handled a post request"
    })
});

module.exports = router;