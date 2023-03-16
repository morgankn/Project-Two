const { sequelize } = require('../config/connection');
const { User, Flight, Trip } = require('../models');

const userData = require('./userData.json');
const flightData = require('./flightData.json');
const tripData = require('./tripData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });
  // users();

  for (const flight of flightData) {
    await Flight.create({
      ...flight,
      // user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }
  await Trip.create({
    name: 'Los Angeles Bacholerette',
    description: 'Bacholerette',
    userId: 1,
    flightId: 1,
  }).catch((err) => {
    console.log(err);
  });

  await Trip.create({
    name: 'Miami Wedding',
    description: 'Wedding',
    user_id: 2,
    flight_id: 2,
  }).catch((err) => {
    console.log(err);
  });

  await Trip.create({
    name: 'Chicago Baseball Game',
    description: 'Baseball Game',
    user_id: 3,
    flight_id: 3,
  }).catch((err) => {
    console.log(err);
  });

  process.exit(0);
};

seedDatabase();
