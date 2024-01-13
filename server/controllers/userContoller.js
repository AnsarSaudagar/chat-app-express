const UserService = require('../services/userService');
const bcrypt = require('bcryptjs');
const UserController = {
  getAllUsers: async (req, res) => {
    try {
      const users = await UserService.getAllUsers();
      res.json(users);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  },

  getUserById: async (req, res) => {
    const userId = req.params.id;
    try {
      const user = await UserService.getUserById(userId);
      if (!user) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json(user);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  },

  createUser: async (req, res) => {
    
    try {
      // const body = req.body;
      const salt = await bcrypt.genSalt(10);
      const hasPassword = await bcrypt.hash(req.body.password, salt);

      const body = {
        firstName: req.body.firstName,
        middleName: req.body.middleName,
        lastName: req.body.lastName,
        email: req.body.email,
        passwordHash: hasPassword,
      }

      console.log(body);

      const newUser = await UserService.createUser(body);
      res.json(newUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  },

  updateUser: async (req, res) => {
    const userId = req.params.id;
    const { username, email } = req.body;
    try {
      const updatedUser = await UserService.updateUser(userId, username, email);
      if (!updatedUser) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json(updatedUser);
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  },

  deleteUser: async (req, res) => {
    const userId = req.params.id;
    try {
      const deletedUser = await UserService.deleteUser(userId);
      if (!deletedUser) {
        return res.status(404).json({ msg: 'User not found' });
      }
      res.json({ msg: 'User deleted successfully' });
    } catch (error) {
      console.error(error.message);
      res.status(500).send('Server Error');
    }
  },
};

module.exports = UserController;
