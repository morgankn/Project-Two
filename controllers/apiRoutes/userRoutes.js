const router = require('express').Router();
const { User, Flight, Trip } = require('../../models');

// localhost:3001/api/users
router.post('/', async (req, res) => {
  console.log('trying to signup');
  const { username, password, email } = req.body;
  if (!username || !password || !email) {
    res.status(400);
    return;
  }
  try {
    const userData = await User.create(req.body);

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// route to login is localhost:3001/api/login
// router.post('/login', async (req, res) => {
//     try {
//     const newUserData = req.body;
//     const dbUser = await User.create(req.body);//unpack req.body into it's actual data (username, password, email)
//     const plainUser= dbUser.get({ plain: true });
//     console.log(plainUser);

//     req.session.save(() => {
//         req.session.loggedIn = true;
//         res.status(201).json(plainUser);
//     });
//     } catch (error) {
//     console.log(error);
//     };
// });

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    console.log('from the login');
    if (!userData) {
      res
        .status(404)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(404)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      console.log(req.session.logged_in);

      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

router.get('/', async (req, res) => {
  try {
    console.log('from the users get');
    const productData = await User.findAll();
    res.status(200).json(productData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    const userData = await User.findByPk(req.params.id, {
      include: Trip,
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
