const User = require('./User');
const Flight = require('./Flight');
const Trip = require('./Trip');



User.belongsToMany(Flight, {
  // Define the third table needed to store the foreign keys
  through: Trip,
  // Define an alias for when data is retrieved
  // add in to flightroutes get by id the include
});

Flight.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: Trip,
  // Define an alias for when data is retrieved
  // add in to userroutes get by id the include
});
User.hasMany(Trip);
Trip.belongsTo(User);
Flight.hasMany(Trip);
Trip.belongsTo(Flight);
module.exports = { User, Flight, Trip };
