// conversationsRoutes.js

const express = require('express');
const router = express.Router();
const ConversationsController = require('../controllers/conversationsController');

// Define routes
router.get('/', ConversationsController.getAllConversations);
router.post('/', ConversationsController.createConversation);
router.get('/:id', ConversationsController.getConversationById);
router.put('/:id', ConversationsController.updateConversation);
router.delete('/:id', ConversationsController.deleteConversation);

module.exports = router;
