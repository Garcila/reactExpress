const express = require('express');

const router = express.Router();
const Image = require('../models/image');

router.get('/', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      return console.error(err);
    }
    res.json(images);
  });
});

module.exports = router;
