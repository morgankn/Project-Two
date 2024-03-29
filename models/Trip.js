const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    destination: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    // user_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'user',
    //     key: 'id',
    //     unique: false,
    //   },
    // },
    // flight_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'flight',
    //     key: 'id',
    //     unique: false,
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'trip',
  }
);

module.exports = Trip;
