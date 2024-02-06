//server.js
var express = require('express');
const { Sequelize } = require('sequelize');
const users = require('./routes/users')
const auth = require('./routes/auth')
const conversationsRoutes = require('./routes/conversationsRoutes');
const usersConversationsRoutes = require('./routes/usersConversationsRoutes');
const messageRoutes = require('./routes/messageRoutes');
const commonRoutes = require('./routes/commonRoutes')

var bodyParser = require('body-parser')
const app = express();
var cors = require('cors');

app.use(cors());

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

//conversations route
app.use('/conversations', conversationsRoutes);

//For userConversations route
app.use('/users-conversations', usersConversationsRoutes);

//For messages routes
app.use('/messages', messageRoutes);

//For common
app.use('/common', commonRoutes)

const server = app.listen(8080, function () {
    console.log("Serverlistening at http://localhost:8080")
})