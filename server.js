// these are all our dependencies that we need for the project - jayden.
// mongoose stuff here - jayden
const path = require('path');
const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

//  require gallery module - ivan
const shoes = require('./seeds/shoes');
const subscribers = require('./seeds/subscribers');
const members = require('./seeds/members');


// import models- ivan
const Shoe = require('./models/shoe.js');
const Member = require('./models/member.js');
const Subscriber = require('./models/subscriber.js');

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

// ***********************************************************************************************
    // RENDERED ENDPOINTS
// ***********************************************************************************************

// index page render
app.get('/', function(request, response){
  response.render('pages/index.ejs', {title: 'homepage'})
});

// gallery page render
app.get('/gallery', function(request, response){
  response.render('pages/gallery',{title: 'gallery'})
});

// members page render
app.get('/teams', function(request, response) {
  response.render('pages/members', {title: 'members'})
});

// subscribe page render 
app.get('/subscribers', function(request, response) {
  response.render('pages/subscribers', {title: 'subscribe'})
});

// ***********************************************************************************************
    // API ENDPOINTS
// ***********************************************************************************************

// gallery api endpoint - ivan
app.get('/api/v0/gallery', function(request, response){
    response.json(shoes);
});

app.get('/api/v0/subscribers', function(request, response) {
  response.json(subscribers);
});

app.get('api/v0/members', function(request, response){
  response.json(members);
});





// *************************************************************************************************
    // API : ID ENDPOINTS
// *************************************************************************************************

// gallery/:id to get object individually
app.get('api/v0/shoes/:id', function(request, response){
  let shoeId = request.params.id;
  Shoe.findOne({id: shoeId}, function(error,shoes){
    if (error) {
      response.send('file does not exist')
    }
    else {
      response.json(shoes);
    }
  });
  
});


app.post('/subscribers',function(request, response) {
  Subscriber.insertMany(request.body);
  response.send('<p>Could not retrieve subscribers</p>')  
});
  


// *************************************************************************************************

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
