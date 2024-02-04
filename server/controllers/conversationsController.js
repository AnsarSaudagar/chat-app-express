// conversationsController.js

const ConversationsService = require('../services/conversationsService');

class ConversationsController {
  static async getAllConversations(req, res) {
    try {
      const conversations = await ConversationsService.getAllConversations();
      res.json(conversations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createConversation(req, res) {
    try {
      const conversation = await ConversationsService.createConversation(req.body);
      res.status(201).json(conversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getConversationById(req, res) {
    try {
      const { id } = req.params;
      const conversation = await ConversationsService.getConversationById(id);
      if (!conversation) {
        return res.status(404).json({ error: 'Conversation not found' });
      }
      res.json(conversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateConversation(req, res) {
    try {
      const { id } = req.params;
      const conversation = await ConversationsService.updateConversation(id, req.body);
      res.json(conversation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteConversation(req, res) {
    try {
      const { id } = req.params;
      await ConversationsService.deleteConversation(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = ConversationsController;
