const db = require('../models');

class UsersConversationsService {
  static async createUserConversation(data) {
    return await db.Users_Conversations.create(data);
  }

  static async getAllUserConversations(){
    return await db.Users_Conversations.findAll();
  }

  static async getUserConversationById(id) {
    return await db.Users_Conversations.findByPk(id);
  }

  static async updateUserConversation(id, data) {
    const userConversation = await db.Users_Conversations.findByPk(id);
    if (!userConversation) {
      throw new Error('User conversation not found');
    }
    return await userConversation.update(data);
  }

  static async deleteUserConversation(id) {
    const userConversation = await db.Users_Conversations.findByPk(id);
    if (!userConversation) {
      throw new Error('User conversation not found');
    }
    return await userConversation.destroy();
  }
}

module.exports = UsersConversationsService;
