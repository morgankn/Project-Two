const router = require('express').Router();
const userRoutes = require('./userRoutes');
const projectRoutes = require('./flightRoutes');

router.use('/users', userRoutes);
router.use('/flights', projectRoutes);

module.exports = router;
