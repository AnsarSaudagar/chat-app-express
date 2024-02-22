// usersConversationsRoutes.js

const express = require('express');
const router = express.Router();
const UsersConversationsController = require('../controllers/usersConversationsController');

// Define routes
router.post('/', UsersConversationsController.createUserConversation);
router.get('/', UsersConversationsController.getAllUserConversations);
router.get('/:id', UsersConversationsController.getUserConversationById);
router.get('/user-friends/:id', UsersConversationsController.getCurrentUserConversations)
router.put('/:id', UsersConversationsController.updateUserConversation);
router.delete('/:id', UsersConversationsController.deleteUserConversation);

module.exports = router;
