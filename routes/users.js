const express = require('express');

const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res) => {
  User.find({}, (err, users) => {
    if (err) {
      console.error(err);
    } else {
    res.json(users);
    }
  });
});

module.exports = router;
