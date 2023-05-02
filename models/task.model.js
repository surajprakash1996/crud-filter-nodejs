module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        taskTitle: {
            type: DataTypes.STRING,
            allowNull: false
        },
        taskDescription: {
            type: DataTypes.STRING
        }
    });

    return Task;
}