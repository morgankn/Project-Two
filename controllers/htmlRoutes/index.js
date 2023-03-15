const axios = require('axios');
const router = require('express').Router();
const authChecker = require('../../utils/auth.js');

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/flights', async (req, res) => {
  res.render('flightinfo', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', async (req, res) => {
  res.render('login');
});
router.get('/search', authChecker, async (req, res) => {
  let queryString = [];
  const searchFlight = req.query.searchFlight;
  if(searchFlight){
    queryString.push(`searchFlight=${searchFlight}`);
  }
  const origin = req.query.origin;
  if(origin){
    queryString.push(`origin=${origin}`);
  }
  const destination = req.query.destination;
  if(destination){
    queryString.push(`destination=${destination}`);
  }
  const departureDate = req.query.departureDate;
  if(departureDate){
    queryString.push(`destinationDate=${destinationDate}`);
  }
  const arriveTo = req.query.arriveTo;
  if(arriveTo){
    queryString.push(`arriveTo=${arriveTo}`);
  }
  const currency =req.query.currency;
  if(currency){
    queryString.push(`currency=${currency}`);
  }
  const query = `?${queryString.join('&')}`;
  await axios.get(`https://app.goflightlabs.com/search-all-flights${query}&access_key=${process.env.API_KEY}&adult=1`)
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
