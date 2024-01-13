const { User } = require('../models');

const UserService = {
  getAllUsers: async () => {
    return await User.findAll();
  },

  getUserById: async (userId) => {
    return await User.findByPk(userId);
  },

  createUser: async (username, email) => {
    return await User.create({ username, email });
  },

  updateUser: async (userId, username, email) => {
    const user = await User.findByPk(userId);
    if (!user) {
      return null;
    }
    user.username = username;
    user.email = email;
    await user.save();
    return user;
  },

  deleteUser: async (userId) => {
    const user = await User.findByPk(userId);
    if (!user) {
      return null;
    }
    await user.destroy();
    return user;
  },
};

module.exports = UserService;
