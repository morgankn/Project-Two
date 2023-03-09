const router = require('express').Router();
const User = require('../../models');

router.post('/login', async (req, res) => {
    try {
    const newUserData = req.body;
    const dbUser = await User.create(req.body);//unpack req.body into it's actual data (username, password, email)
    const plainUser= dbUser.get({ plain: true });

    req.session.save(() => {
        req.session.loggedIn = true;
        res.status(201).json(plainUser);
    });  
    } catch (error) {
        console.log(error);
    };
});

module.exports = router;