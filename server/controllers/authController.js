const UserService = require('../services/userService');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/config.json')

const AuthController = {
    login: async (req, res) => {
        const userData = await UserService.getUserByEmail(req.body.email);

        if (userData) {
            const validPassword = await bcrypt.compare(req.body.password, userData.passwordHash);
            if (!validPassword) return res.status(401).send("Password is wrong");

            // Create and assign token
            let payload = { id: userData.id };
            const token = jwt.sign(payload, config.secret_key);

            res.status(200).header("auth-token", token).send({ "token": token });
        }else{
            return res.status(401).send("Email is wrong");
        }
    }
}

module.exports = AuthController;