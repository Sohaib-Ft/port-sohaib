const mongoose = require('mongoose');

const skillSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Frontend', 'Backend', 'Database', 'API', 'Tools', 'Other'],
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  role: {
    type: String,
    default: '',
  },
  order: {
    type: Number,
    default: 0,
  }
}, { timestamps: true });

module.exports = mongoose.model('Skill', skillSchema);
