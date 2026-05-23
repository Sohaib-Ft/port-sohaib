const express = require('express');
const router = express.Router();
const { getSkills, createSkill, updateSkill, deleteSkill } = require('../controllers/skillController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getSkills) // Public
  .post(createSkill);

router.route('/:id')
  .put(updateSkill)
  .delete(deleteSkill);

module.exports = router;
