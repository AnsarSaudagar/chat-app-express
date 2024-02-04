const MessageService = require('../services/messageService');

class MessageController {
  static async createMessage(req, res) {
    try {
      const message = await MessageService.createMessage(req.body);
      res.status(201).json(message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getAllMessages(req, res){
    try {
        const messages = await MessageService.getAllMessages();
        res.status(201).json(messages);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getMessageById(req, res) {
    try {
      const { id } = req.params;
      const message = await MessageService.getMessageById(id);
      if (!message) {
        return res.status(404).json({ error: 'Message not found' });
      }
      res.json(message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateMessage(req, res) {
    try {
      const { id } = req.params;
      const message = await MessageService.updateMessage(id, req.body);
      res.json(message);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteMessage(req, res) {
    try {
      const { id } = req.params;
      await MessageService.deleteMessage(id);
      res.sendStatus(204);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = MessageController;
