const router = require('express').Router();
const { User, Flight, Trip } = require('../../models');
const withAuth = require('../../utils/auth');

// localhost:3001/api/trips
router.post('/', withAuth, async (req, res) => {
  try {
    const newTrip = await Trip.create({
      ...req.body,
      // user_id: req.session.user_id,
    });

    res.status(200).json(newTrip);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const tripData = await Trip.destroy({
      where: {
        id: req.params.id,
        // user_id: req.session.user_id,
      },
    });

    if (!tripData) {
      res.status(404).json({ message: 'No trip found with this id!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    const productData = await Trip.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    console.log('from the trips put');
    const productData = await Trip.update(
      {
        name: req.body.name,
        description: req.body.description,
        users_id: req.body.users_id,
        flights_id: req.body.flights,
      },
      {
        where: {
          trip_id: req.params.trip_id,
        },
      }
    );
    // console.log(productData);
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const tripData = await Trip.findByPk(req.params.id, {
      include: [User, Flight],
    });

    if (!tripData) {
      res.status(404).json({ message: 'No trip found with this id!' });
      return;
    }

    res.status(200).json(tripData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
