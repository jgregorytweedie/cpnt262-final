// these are all our dependencies that we need for the project - jayden.
const path = require('path')
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
require("dotenv").config();

// CREATE EXPRESS APP
const app = express();
app.set('view engine', 'ejs');

// app.use STATIC MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));

// ADD JSON ENDPOINTS

// 404 RESPONSE
app.use(function (require, response, next) {
    response.status(404);
    response.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

// START SERVER
app.listen(PORT, function () {
    console.log(`listening on port ${PORT}`);
});