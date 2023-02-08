const Sequelize = require ('sequelize');
const connection = require ('../database/database');

const Tasks = connection.define('tasks', {
    task: {
        type: Sequelize.STRING,
        allowNull: false
    },
    date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    userId: {
        type:Sequelize.INTEGER,
        allowNull: false
    }
}, 
{
    timestamps:false
});

Tasks.sync({force: false}).then(() => {console.log('Tasks table has been created')});

module.exports = Tasks;




