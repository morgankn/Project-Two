const User = require('./User');
const Flight = require('./Flight');
const Trip = require('./Trip');

User.belongsToMany(Flight, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips',
});

Flight.belongsToMany(User, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false,
  },
  // Define an alias for when data is retrieved
  as: 'users_flight',
});

module.exports = { User, Flight, Trip };

// module.exports = Trip;
