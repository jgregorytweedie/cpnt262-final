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

// ADD HTML AND JSON ENDPOINTS

// index endpoint
app.get('/', function(request, response){
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

// subscribe page render 
app.get('/subscribers', function(request, response) {
  response.render('pages/subscribe', {
    title: "Subscribe",
    current: "subscribe",
    tagline: "Subscribe to our page",
  })
});

// members page render
app.get('/members', function(request, response) {
  response.render('pages/members', {
    title: "Members",
    current: "members",
})
});

//
app.post('/subscribers',function(request, response) {
  Subscriber.insertMany(request.body);
  response.send('<p>Could not retrieve subscribers</p>')  
});
  
app.get('/api/subscribers', function(request, response) {
  Subscriber.find({}, function(err, data) {
    if(error) {
      response.send('<p>could not retrieve subscribers</p>');
    }else {
     response.json(data);               
    }
  });
})
  
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
