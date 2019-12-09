const router = require('express').Router();
const User = require('../models/User');
const verify = require('../helpers/verifyToken');

router.post('/', verify, (req, res) => {
    res.json({ posts: { title: "Lorem Ispsum", description: "Randdom Description" } })
})
module.exports = router;