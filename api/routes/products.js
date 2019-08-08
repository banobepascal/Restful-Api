const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: "Yes you have handled a get request"
    });
});

router.post('/', (req, res, next) => {
    res.status(200).json({
        message: "Yes you have handled a post request"
    })
});

module.exports = router;