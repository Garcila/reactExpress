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

router.post('/', (req, res) => {
  const title = req.body.title;
  const image = req.body.image;
  const description = req.body.description;

  const newImage = { title, image, description };
  Image.create(newImage, (err, newimage) => {
    if (err) {
      return console.error(err);
    }
    res.send(newimage);
  });
});

module.exports = router;
