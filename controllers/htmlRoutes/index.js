// eslint-disable-next-line import/no-extraneous-dependencies
const axios = require('axios');
const router = require('express').Router();
const authChecker = require('../../utils/auth.js');

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/flightInfo', async (req, res) => {
  res.render('flightInfo', {
    logged_in: req.session.logged_in,
  });
});

router.get('/api/users/login', async (req, res) => {
  res.render('login');
});
router.get('/search', authChecker, async (req, res) => {
  console.log(req.query);
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
    queryString.push(`departureDate=${departureDate}`);
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
  const flightResponse = await axios.get(
    `https://app.goflightlabs.com/search-best-flights${query}&access_key=${process.env.API_KEY}&adults=1`
  );
  console.log(flightResponse.data.data);
  // const flights = flightResponse.data.data.buckets.map(
  //   (flight) => ({
  //     id: flight.id,
  //   }),
  //   await console.log(flights.id)
  // );

  res.render('searchResults', {
    flights: flightResponse.data.data.buckets,
    logged_in: req.session.logged_in,
  });
});

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

router.get('/dashboard', async (req, res) => {
  res.render('dashboard', {
    logged_in: req.session.logged_in,
  });
});
module.exports = router;
