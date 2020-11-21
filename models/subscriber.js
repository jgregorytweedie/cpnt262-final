const mongoose = require('mongoose');


const gallerySchema = new mongoose.Schema(
    {
      name:     String,
      email:    String,
    }
);



module.exports = mongoose.model('Subscriber', gallerySchema);