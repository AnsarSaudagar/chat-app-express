const db = require('../models'); 

class ConversationsService {
  static async getAllConversations() {
    return await db.Conversations.findAll();
  }

  static async createConversation(data) {
    return await db.Conversations.create(data);
  }

  static async getConversationById(id) {
    return await db.Conversations.findByPk(id);
  }

  static async updateConversation(id, data) {
    const conversation = await db.Conversations.findByPk(id);
    if (!conversation) {
      throw new Error('Conversation not found');
    }
    return await conversation.update(data);
  }

  static async deleteConversation(id) {
    const conversation = await db.Conversations.findByPk(id);
    if (!conversation) {
      throw new Error('Conversation not found');
    }
    return await conversation.destroy();
  }
}

module.exports = ConversationsService;
