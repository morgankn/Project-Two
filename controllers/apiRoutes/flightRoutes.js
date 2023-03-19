const router = require('express').Router();
const { User, Flight, Trip } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    console.log('from the flight post');
    const newFlight = await Flight.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newFlight);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const flightData = await Flight.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!flightData) {
      res.status(404).json({ message: 'No flight found with this id!' });
      return;
    }

    res.status(200).json(flightData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const productData = await Flight.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const flightData = await Flight.findByPk(req.params.id);

    if (!flightData) {
      res.status(404).json({ message: 'No flight found with this id!' });
      return;
    }

    res.status(200).json(flightData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// creating a new flight
router.post('/create', async (req, res) => {
  console.log('trying to createFlight');
  const { departure, arrival, arrivalTime, price } = req.body;
  if (!departure || !arrival || !arrivalTime || !price) {
    res.status(400);
    return;
  }
  try {
    const flightData = await Flight.create(req.body);

    res.status(200).json(flightData);
  } catch (err) {
    res.status(400).json(err);
  }
});
module.exports = router;
