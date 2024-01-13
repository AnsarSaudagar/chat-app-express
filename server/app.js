//server.js
var express = require('express');
const { Sequelize } = require('sequelize');
const users = require('./routes/users')
// Connect Sequelize to the database
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'chat-app-node',
    password: '403769',
    database: 'chat-app-node'
});

const app = express();

app.use('/users', users);

app.get('/', function (req, res) {
    res.send({ check: 'Hello World Ansar' });
})
const server = app.listen(8080, function () {
    console.log("Serverlistening at http://localhost:8080")
})