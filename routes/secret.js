const express = require('express');

const router = express.Router();
const a = 1;

/* GET secret page. */
router.get('/', isLoggedIn, (req, res) => {
  res.render('secret', { title: 'Secret' });
});

function isLoggedIn(req, res, next) {
  if (a === 0) {
    return next();
  }
  res.send('zapato');
}

module.exports = router;
