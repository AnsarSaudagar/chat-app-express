//server.js
var express = require('express');
const { Sequelize } = require('sequelize');
const users = require('./routes/users')
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

app.use('/users', users);
app.get('/', function (req, res) {

    res.send({ check: 'Hello World Ansar' });
})
app.post('/', function (req, res) {
    console.log(req.body);
    // res.send({ check: 'Hello World Ansar' });
})
const server = app.listen(8080, function () {
    console.log("Serverlistening at http://localhost:8080")
})