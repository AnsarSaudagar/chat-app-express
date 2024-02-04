const db = require('../models');

class MessageService {
  static async createMessage(data) {
    return await db.Message.create(data);
  }

  static async getAllMessages(){
    return await db.Message.findAll();
  }

  static async getMessageById(id) {
    return await db.Message.findByPk(id);
  }

  static async updateMessage(id, data) {
    const message = await db.Message.findByPk(id);
    if (!message) {
      throw new Error('Message not found');
    }
    return await message.update(data);
  }

  static async deleteMessage(id) {
    const message = await db.Message.findByPk(id);
    if (!message) {
      throw new Error('Message not found');
    }
    return await message.destroy();
  }
}

module.exports = MessageService;
