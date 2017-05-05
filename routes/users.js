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
// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.json([{
//       image: 'https://cdn.pbrd.co/images/7t28OxT4o.jpg',
//       title: 'bug lady',
//       id: 11418204,
//       description: 'One morning, when Gregor Samsa woke from troubled dreams'
//     },
//     {
//       image: 'https://cdn.pbrd.co/images/7t92nqSxR.jpg',
//       title: 'sticky sipider',
//       id: 89344605,
//       description: 'He lay on his armour-like back, and if he lifted'
//     },
//     {
//       image: 'https://cdn.pbrd.co/images/7t9qmY3Pj.jpg',
//       title: 'franky trunky',
//       id: 50827591,
//       description: 'A collection of textile samples lay spread out on the table'
//     },
//     {
//       image: 'https://cdn.pbrd.co/images/7t9OM9gE0.jpg',
//       title: 'green z',
//       id: 84422609,
//       description: 'Gregor then turned to look out'
//     },
//     {
//       image: 'https://cdn.pbrd.co/images/7taoKfrYU.jpg',
//       title: 'flower',
//       id: 14698438,
//       description: 'Whats happened to me? he thought. It wasnt a dream.'
//     },
//     {
//       image: 'https://cdn.pbrd.co/images/7taNMOZKt.jpg',
//       title: 'captain stash',
//       id: 22900294,
//       description: 'His many legs, pitifully thin compared with the size'
//     }
//   ]);
// });

module.exports = router;
