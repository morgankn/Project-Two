const router = require('express').Router();
const userRoutes = require('./userRoutes');
const flightRoutes = require('./flightRoutes');
const tripRoutes = require('./tripRoutes');
const { User } = require('../../models');

router.use('/users', userRoutes);
router.use('/flights', flightRoutes);
router.use('/trips', tripRoutes);

module.exports = router;
