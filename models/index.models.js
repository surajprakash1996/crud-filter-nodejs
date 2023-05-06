const { Sequelize, DataTypes, Op } = require('sequelize');
const { connection } = require('../config/config');
const TaskModel = require('./task.model');

const sequelize = new Sequelize (
    connection.dbName,
    connection.dbUser,
    connection.dbPass, {
        dialect:connection.dbDialact
    }
);

( async () => {
    try {
        console.log(`Connecting....`);
        await sequelize.authenticate();
        console.log(`Connection established.`);
    } catch(err) {
        console.log(`Error: `, err.message);
        process.exit();
    }
})();

const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.dataTypes = DataTypes;
db.op = Op;

db.taskModel = TaskModel(db.sequelize, db.dataTypes);

module.exports = db;