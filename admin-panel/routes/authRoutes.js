const express = require('express');
const router = express.Router();
const { loginAdmin, createAdmin } = require('../controllers/authController');

router.post('/login', loginAdmin);
router.post('/register', createAdmin); // Usually you'd protect this in production or remove it after creating the first admin

module.exports = router;
