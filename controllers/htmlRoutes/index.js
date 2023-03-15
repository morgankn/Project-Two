// const axios = require('axios');
const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('home', {
    loggedIn: req.session.loggedIn,
  });
});

router.get('/login', async (req, res) => {
  res.render('login');
});
// router.get('/search/:searchFlight', authChecker, async (req, res) => {
//   const { searchTerm } = req.params;
//   const origin = doc.queryselector(userinput);
//   const destination = doc.queryselector(userinput);
//   const departureDate = doc.req.params;
//   await axios.get(`https://app.goflightlabs.com/search-all-flights?access_key={process.env.API_KEY}&adults=1&${origin.val}&${destination.val}&${departureDate.val}&${currency.val}&${arriveTo.val}

//     `);

//   const flight = flightResponse.data.items.map((flight) => ({
//     id: flight.id,
//   }));

//   res.render('search', {
//     flight,
//   });
// });

router.get('/logout', async (req, res) => {
  req.session.destroy();
  res.redirect('/');
});

module.exports = router;
