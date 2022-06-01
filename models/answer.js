const mongoose = require('mongoose');
const answer = mongoose.Schema({
  firstName: { type: String, required: true },
  email: { type: String, required: true },
  lastName: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipCode: { type: String, required: true },
  country: { type: String, required: true },
});

mongoose.model('answer', answer);
module.exports = answer;
