const express = require('express');
const multer = require('multer');

const router = express.Router();
const mongoose = require('mongoose');
const fs = require('fs');

let Grid = require('gridfs-stream');
let conn = mongoose.connection;
Grid.mongo = mongoose.mongo;
let gfs;

const Image = require('../models/image');

// multer setup
const storage = multer.diskStorage({
  destination: './uploads',
  filename(req, file, cb) {
    cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage });

//  ROUTES=====================================================
// routes once the connection is open
conn.once('open', () => {
    gfs = Grid(conn.db);

    // index route________________________________________________
    router.get('/images/', (req, res) => {
        Image.find()
        .then((images) => {
          // let imageIds = images.map((image) =>
          //     image._id
          //   );

          res.json(images);
        });
      });

    // create route______________________________________________
    router.post('/images', upload.single('file'), (req, res) => {
      // const filePath = req.file.path;
      // console.log('req file', req.file);

      const title = req.file.originalname;
      const meta = req.body;
      const mimetype = req.file.mimetype;
      const imgFilename = req.file.filename;
      const description = 'this will be the description';

      const writeStream = gfs.createWriteStream({
          filename: title,
          mode: 'w',
          content_type: mimetype,
          metadata: {
            description: description,
          },
        });
      fs.createReadStream(`./uploads/${req.file.originalname}`)
        .on('end', () => {fs.unlink(`./uploads/${imgFilename}`, (err) => {res.send('success');});})
        .on('err', () => {res.send('Error uploading image');})
        .pipe(writeStream);
    });

    // show route_______________________________________________
    router.get('/images/show/:_id', (req, res) => {
      const id = req.params._id;
      let readstream = gfs.createReadStream({ _id: id });
      readstream.on('error', (err) => {
        res.send(`No image found with id ${id}`);
      });
      readstream.pipe(res);
    });

    // Delete route____________________________________________
    router.delete('/images/:_id', (req, res) => {
      const id = req.params._id;
      gfs.exist({ _id: id }, (err, foundImage) => {
        if (err) res.send('Error occurred');
        if (foundImage) {
          gfs.remove({ _id: id }, (err) => {
            if (err) res.send('Error occurred');
            res.send(`image with id: ${id} deleted`);
          });
        } else {
          res.send(`Image with id: ${id} not found`);
        }
      });
    });
  });

module.exports = router;
