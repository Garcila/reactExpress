var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  title: String,
  image: String,
  description: String,
  created: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;
