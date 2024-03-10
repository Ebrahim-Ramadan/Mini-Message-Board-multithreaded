// var express = require('express');
// var router = express.Router();
// const messages = require('../data/messages');

// /* GET new message form. */

// router.get('/new', (req, res) => {
//   res.render('form', { title: 'Mini Messageboard' });
// });

// /* POST new message. */
// router.post('/new', (req, res) => {
//   const { text, user } = req.body;
//   messages.push({ text, user, added: new Date() });
//   res.redirect('/');
// });

// module.exports = router;
// routes/user.js
var express = require('express');
var router = express.Router();
const messages = require('../data/messages');

router.get('/', (req, res) => {
  res.render('form', { title: 'Mini Messageboard', messages: messages });
});

module.exports = router;
