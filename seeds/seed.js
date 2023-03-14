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

  for (const flight of flightData) {
    await Flight.create({
      ...flight,
      // users_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  await Trip.bulkCreate(tripData, {
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
