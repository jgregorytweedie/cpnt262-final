const mongoose = require('mongoose');


const gallerySchema = new mongoose.Schema(
    {
      name:     String,
      email:    String,
      linkedIn: String,
      github:   String,
    }
);



module.exports = mongoose.model('Member', gallerySchema);