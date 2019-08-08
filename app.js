const productRoutes = require('./api/routes/products');
const express = require("express");
const app = express();

app.use('/products', productRoutes);

module.exports = app;
