const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userContoller');
const AuthController = require('../controllers/authController');

router.post('/signup', UserController.createUser);
router.post('/login', AuthController.login);

module.exports = router;
