// these are all our dependencies that we need for the project - jayden.
const path = require('path')
const express = require("express");
const ejs = require("ejs");
// mongoose stuff here - jayden
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
// adding in connection to mongoDB - jayden
mongoose.connect(process.env.MONGODB_URL, { useUnifiedTopology: true, useNewUrlParser: true });

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));

db.once("open", function() {
  console.log("Connected to DB...");

});
// CREATE EXPRESS APP
const app = express();
app.set('view engine', 'ejs');

// app.use STATIC MIDDLEWARE
app.use(express.static(path.join(__dirname, 'public')));

// ADD JSON ENDPOINTS

// 404 RESPONSE
app.use(function(require, response, next){
  response.status(404);
  response.send('404: File Not Found');
});

const PORT = process.env.PORT || 8080;

// START SERVER
app.listen(PORT, function(){
  console.log(`listening on port ${PORT}`);
});
