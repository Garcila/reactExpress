const express = require('express');

const multer = require('multer');

const router = express.Router();
const Image = require('../models/image');

// index route
router.get('/images', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      return console.error(err);
    }
    res.json(images);
  });
});

// create route
router.post('/images',
  multer({ dest: './uploads' }).single('upl'),
  (req, res) => {
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

// show route
router.get('/images/:id', (req, res) => {
  Image.findById(req.params.id, (err, foundImage) => {
    res.json(foundImage);
  });
});

// Delete route
router.delete('/images/:id', (req, res) => {
  const id = req.params.id;
  Image.findByIdAndRemove({ _id: id }, (err, image) => {
    if (err) {
      return console.error(err);
    }
    console.log('image', image);
    res.json({ message: 'deleted it is' });
  });
});

module.exports = router;
