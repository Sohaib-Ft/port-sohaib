const express = require('express');
const router = express.Router();
const { getMessages, createMessage, deleteMessage, updateMessageStatus } = require('../controllers/messageController');
const { protect } = require('../middleware/authMiddleware');

router.route('/')
  .get(getMessages)
  .post(createMessage); // Public (anyone can send a message)

router.route('/:id')
  .put(updateMessageStatus)
  .delete(deleteMessage);

module.exports = router;
