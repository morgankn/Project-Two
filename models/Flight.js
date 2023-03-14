const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../config/connection');

class Flight extends Model {}

Flight.init(
  {
    departure: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    arrival: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // arrival_time: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    // },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    // users_id: {
    //   type: DataTypes.INTEGER,
    //   references: {
    //     model: 'users',
    //     key: 'id',
    //   },
    // },
  },
  {
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'flights',
  }
);

module.exports = Flight;

// {
// 	"departure": "Los Angeles",
// 	"arrival": "Detroit",
// 	"arrival_time": "2022-10-11T06:30:00",
// 	"price": 100
// }