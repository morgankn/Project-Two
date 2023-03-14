// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Flight extends Model {}

// Flight.init(
//   {
//     departure: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     arrival: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     arrival_time: {
//       type: DataTypes.DATETIME,
//       allowNull: false,
//     },
//     price: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     user_id: {
//         type: DataTypes.INTEGER,
//         references: {
//           model: 'user',
//           key: 'id',
//         },
//   },
// }
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'flight',
//   }
//   // console.log("From Flight Model")
// );

// module.exports = Flight;
