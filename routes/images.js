const express = require('express');

const router = express.Router();
const Image = require('../models/image');

router.get('/images', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      return console.error(err);
    }
    res.json(images);
  });
});

router.post('/images', (req, res) => {
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

router.get('/images/:id', (req, res) => {
  Image.findById(req.params.id, (err, foundImage) => {
    res.json(foundImage);
  });
});

router.delete('/images/:id', (req, res) => {
  Image.findByIdAndRemove({ _id: '591b50807a1d27411f51ed89' }, (err, image) => {
    if (err) {
      return console.error(err);
    }
    console.log(image);
    res.json({ message: 'deleted it is' });
  });
});

module.exports = router;
