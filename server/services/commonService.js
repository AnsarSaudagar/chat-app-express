const { sequelize, User, Conversations, Message, Users_Conversations } = require('../models');

class commonService {
    static async intializeCoversation(userId, content) {
        let transaction;
        console.log(userId);

        try {
            transaction = await sequelize.transaction();

            const newConversation = await Conversations.create(
                {},
                { transaction }
            );

            const newUserConversations = await Users_Conversations.create(
                {
                    user_id: userId,
                    conversation_id: newConversation.id
                },
                {transaction}
            );

            const newMessage = await Message.create(
                {
                    conversation_id: newConversation.id,
                    content: content,
                    sender_id: userId
                },
                {transaction}
            )
            await transaction.commit();
            console.log("cehck");

        } catch (error) {
            if (transaction) await transaction.rollback();
            console.error('Error occurred:', error);
        }

    }
}

module.exports = commonService;