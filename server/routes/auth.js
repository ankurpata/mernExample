const router = require('express').Router();
const User = require('../models/User');

const { registerValidation, loginValidation } = require('../helpers/validation');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', async(req, res) => {

    //Validate input request.
    const error = await registerValidation(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // res.send('Saved');
    const user = new User({ name: req.body.name, email: req.body.email, password: hashedPassword });
    // const savedUser = await user.save();
    user.save(function(err) {
        if (err) {
            console.log(err);
            return;
        }

        res.send({ user: user._id });
    });
    // res.send({ user: user._id });
});

router.post('/login', async(req, res) => {
    //Validate input request.
    const error = await loginValidation(req.body);
    if (error) {
        return res.status(400).send(error);
    }

    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Email or password is invalid');

    //Check the password.
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Email or password is invalid');

    //Create and assign a token
    const token = jwt.sign({ _id: user._id }, process.env.TOKEN);
    res.header('auth-token', token).send(token);

});


module.exports = router;