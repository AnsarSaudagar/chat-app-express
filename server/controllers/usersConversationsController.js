// usersConversationsController.js

const UsersConversationsService = require('../services/usersConversationsService');

class UsersConversationsController {
  static async createUserConversation(req, res) {
    try {
      const userConversation = await UsersConversationsService.createUserConversation(req.body);
      res.status(201).json(userConversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllUserConversations(req, res) {
    try {
      const userConversation = await UsersConversationsService.getAllUserConversations();
      res.status(201).json(userConversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getUserConversationById(req, res) {
    try {
      const { id } = req.params;
      const userConversation = await UsersConversationsService.getUserConversationById(id);
      if (!userConversation) {
        return res.status(404).json({ error: 'User conversation not found' });
      }
      res.json(userConversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateUserConversation(req, res) {
    try {
      const { id } = req.params;
      const userConversation = await UsersConversationsService.updateUserConversation(id, req.body);
      res.json(userConversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteUserConversation(req, res) {
    try {
      const { id } = req.params;
      await UsersConversationsService.deleteUserConversation(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getCurrentUserConversations(req, res) {
    try {
      const { id } = req.params;
      const userConversation = await UsersConversationsService.getCurrentUserConversations(id);
      res.status(201).json(userConversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsersConversationsController;
