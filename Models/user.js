const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('database', 'username', 'password', {
    host: 'localhost',
    dialect: 'mysql',
});
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true, 
        autoIncrement: true, 
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'user',
    },
    created_at: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW, 
    },
}, {
    timestamps: false,
    tableName: 'users',
});

module.exports = User;
