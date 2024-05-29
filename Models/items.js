const { DataTypes } = require('sequelize');
const sequelize = require('../Config/database');
const Item = sequelize.define('Item', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  starting_price: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  current_price: {
    type: DataTypes.DECIMAL,
    defaultValue: DataTypes.DECIMAL,
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  end_time: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false,
  tableName: 'items',
});

module.exports = Item;
