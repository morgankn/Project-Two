// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');
const router = require('express').Router();
const authChecker = require('../../utils/auth.js');

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/flightinfo', async (req, res) => {
  res.render('flightinfo', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', async (req, res) => {
  res.render('login');
});
router.get('/search', authChecker, async (req, res) => {
  const queryString = [];
  const { searchFlight } = req.query;
  if (searchFlight) {
    queryString.push(`searchFlight=${searchFlight}`);
  }
  const { origin } = req.query;
  if (origin) {
    queryString.push(`origin=${origin}`);
  }
  const { destination } = req.query;
  if (destination) {
    queryString.push(`destination=${destination}`);
  }
  const { departureDate } = req.query;
  if (departureDate) {
    queryString.push(`destinationDate=${destinationDate}`);
  }
  const { arriveTo } = req.query;
  if (arriveTo) {
    queryString.push(`arriveTo=${arriveTo}`);
  }
  const { currency } = req.query;
  if (currency) {
    queryString.push(`currency=${currency}`);
  }
  const query = `?${queryString.join('&')}`;
  await axios.get(
    `https://app.goflightlabs.com/search-all-flights${query}&access_key=${process.env.API_KEY}&adult=1`
  );
  const flights = flightResponse.data.items.map((flight) => ({
    id: flight.id,
  }));

  res.render('search', {
    flights,
  });
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
