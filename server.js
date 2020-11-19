// these are all our dependencies that we need for the project - jayden.
const path = require('path');
const express = require("express");
const ejs = require("ejs");
// mongoose stuff here - jayden
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
//  REQUIRE GALLERY MODULE - IVAN
const shoes = require('./seeds/shoes');
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

// index endpoint
app.get('/home', function(request, response){
  response.render('pages/index.ejs', {title: 'title'})
});

// gallery page render
app.get('/gallery', function(request, response){
  response.render('pages/gallery',{title: 'gallery'})
});

// gallery endpoint - ivan
app.get('/api/v0/gallery', function(request, response){
  response.json(shoes);
});

app.post('/subscribers', function(request, response) {
  const subscribers = new Subscribers(request.body);
  subscribers.save(function(error) {
    if (error) return response.status(500).send(error);
    return response.send(`<p>Thanks for the ${request.body.title}.</p>`);
  });
});

app.get('/api/v0/subscribers', (request, response) => {
  Subscribers.find({}, (error, data) => {
    if (error) {
      response.send('Could not retrieve subscribers')
    }
    else {
      response.json(data);
    }
  });
});

app.get('api/v0/members', function(request, response) => {
  response.json(4);
});

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
