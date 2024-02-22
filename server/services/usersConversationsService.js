const db = require('../models');
const { Op } = require('sequelize');

class UsersConversationsService {
  static async createUserConversation(data) {
    return await db.Users_Conversations.create(data);
  }

  static async getAllUserConversations() {
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

  static async getCurrentUserConversations(userId) {
    const allConversations = await db.Users_Conversations.findAll({
      where: {
        user_id: userId
      }
    })
    console.log(allConversations[0].conversation_id);
    const userFriends = await db.Users_Conversations.findAll({
      where: {
        conversation_id: allConversations[0].conversation_id,
        // conversation_id: [1, 19],
        user_id:
          { [Op.not]: userId }
      }
    })
    console.log(userFriends);
    return userFriends;

  }
}

module.exports = UsersConversationsService;
