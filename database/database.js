const Sequelize = require('sequelize');

const connection = new Sequelize('tasks', 'user', 'password',{
    host: 'host',
    dialect: 'mysql'
});

module.exports = connection;