const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    default: '',
  },
  github: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);
