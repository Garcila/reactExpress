const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  created: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
