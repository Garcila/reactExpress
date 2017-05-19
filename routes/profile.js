const express = require('express');
const multer = require('multer');

const router = express.Router();
/* GET home page. */
router.get('/', (req, res) => {
  res.render('profile', { title: 'Profile' });
});

router.post('/', multer({ dest: './uploads/' }).single('upl'), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.status(204).end();
});

module.exports = router;
