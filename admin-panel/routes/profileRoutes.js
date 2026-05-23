const express = require('express');
const router = express.Router();
const { getProfile, updateProfile } = require('../controllers/profileController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getProfile) // Public
  .put(updateProfile);

module.exports = router;
