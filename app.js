const courses = require('./api/routes/course');
const express = require("express");
const app = express();

app.use('/api', courses);

module.exports = app;
