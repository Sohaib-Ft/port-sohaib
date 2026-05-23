const Message = require('../models/Message');

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({}).sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const createMessage = async (req, res) => {
  const { name, email, phone, message } = req.body;

  try {
    const newMessage = new Message({
      name,
      email,
      phone,
      message,
    });

    const createdMessage = await newMessage.save();
    res.status(201).json(createdMessage);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const deleteMessage = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (message) {
      await Message.deleteOne({ _id: message._id });
      res.json({ message: 'Message removed' });
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

const updateMessageStatus = async (req, res) => {
  try {
    const message = await Message.findById(req.params.id);

    if (message) {
      message.isRead = req.body.isRead !== undefined ? req.body.isRead : message.isRead;
      const updatedMessage = await message.save();
      res.json(updatedMessage);
    } else {
      res.status(404).json({ message: 'Message not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getMessages, createMessage, deleteMessage, updateMessageStatus };
