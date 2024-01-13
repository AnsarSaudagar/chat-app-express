//server.js
var express = require('express');
const { Sequelize } = require('sequelize');
const users = require('./routes/users')
const auth = require('./routes/auth')
var bodyParser = require('body-parser')
const app = express();

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'chat-app-node',
    password: '403769',
    database: 'chat-app-node'
});


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

//Users route
app.use('/users', users);

//authentication route
app.use('/site', auth);

const server = app.listen(8080, function () {
    console.log("Serverlistening at http://localhost:8080")
})