const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  email: { type: String, required: true },
  location: { type: String, required: true },
  about: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Profile', profileSchema);
