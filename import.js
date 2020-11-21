const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

// Import seed data
const shoeSeed = require(`./seeds/shoes.js`);
const memberSeed = require(`./seeds/members.js`);
const subscribeSeed = require(`./seeds/subscribers.js`);

// Define model
const Shoe = require(`./models/shoe.js`);
const Member = require(`./models/member.js`);
const Subscriber = require(`./models/subscriber.js`);

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

Shoe.insertMany(shoeSeed, function(error, shoe) {
  console.log('Data import completed.')
  mongoose.connection.close();
});

Member.insertMany(memberSeed, function(error, member) {
  console.log('Data import completed.')
  mongoose.connection.close();
});

Subscriber.insertMany(subscribeSeed, function(error, subscriber) {
  console.log('Data import completed.')
  mongoose.connection.close();
});