const router = require('express').Router();
const Flight = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newFlight = await Flight.create({
      ...req.body,
      user_id: req.session.user_id,
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
        user_id: req.session.user_id,
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

module.exports = router;
