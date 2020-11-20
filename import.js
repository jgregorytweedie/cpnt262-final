const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const shoeSeed = require(`./seeds/shoes.js`);
const memberSeed = require(`./seeds/members.js`);
const subscribeSeed = require(`./seeds/subscribes.js`);

// Define model
const Shoe = require(`./models/shoe.js`);
const Member = require(`./models/member.js`);
const Subscribe = require(`./models/subscribe.js`);

/*******************************/
/* Mongoose/MongoDB Connection */
/*******************************/

mongoose.connect(process.env.MONGODB_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

var db = mongoose.connection;

db.on('error', function(error){
  console.log(`Connection Error: ${error.message}`)
});

db.once('open', function() {
  console.log('Connected to DB...');

});

Shoe.insertMany(dbSeed, function(error, shoe) {
  console.log('Data import completed.')
  mongoose.connection.close();
});

Member.insertMany(dbSeed, function(error, member) {
  console.log('Data import completed.')
  mongoose.connection.close();
});

Subscribe.insertMany(dbSeed, function(error, subscribe) {
  console.log('Data import completed.')
  mongoose.connection.close();
});