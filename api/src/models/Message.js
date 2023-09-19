const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Message', {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    content:{
      type: DataTypes.TEXT,
    },
    timestamp:{
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {timestamps: false});
};