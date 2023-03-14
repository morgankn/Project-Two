const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Trip extends Model {}

Trip.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    date_created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
    users_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    flights_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'flights',
        key: 'id',
        unique: false,
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'trips',
  }
);

module.exports = Trip;
