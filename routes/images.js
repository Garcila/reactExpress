
const express = require('express');

const multer = require('multer');

const router = express.Router();
const Image = require('../models/image');

//  ROUTES=====================================================

// index route________________________________________________
router.get('/images', (req, res) => {
  Image.find({}, (err, images) => {
    if (err) {
      return console.error(err);
    }
    res.json(images);
  });
});

//multer setup
const storage = multer.diskStorage({
  destination: './uploads',
  filename(req, file, cb) {
    cb(null, `${new Date()}-${file.originalname}`);
  }
});

const upload = multer({ storage });


// create route______________________________________________
router.post('/images', upload.single('file'), (req, res) => {
  console.log('multer file ', req.file.originalname);
  console.log('multer file', req.file);
  console.log('multer body ', req.body);
  const file = req.file;
  const title = req.file.originalname;
  const meta = req.body;
  const description = 'this will be the description';

    const newImage = { title, file, meta, description };
    Image.create(newImage, (err, newimage) => {
      if (err) {
        return console.error(err);
      }
      res.send(newimage);
    });
});

// show route_______________________________________________
router.get('/images/:id', (req, res) => {
  Image.findById(req.params.id, (err, foundImage) => {
    res.json(foundImage);
  });
});

// Delete route____________________________________________
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
