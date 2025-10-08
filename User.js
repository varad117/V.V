const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  passwordHash: {
    type: String,
    required: true
  }
});


const User = require('./models/User');

module.exports = mongoose.model('User', userSchema);

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: String,
  otp: String,
  verified: Boolean,
  premium: Boolean,
});

module.exports = mongoose.model('User', userSchema);

