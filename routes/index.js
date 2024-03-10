// var express = require('express');
// var router = express.Router();
// const messages = require('../data/messages'); // Import messages array

// /* GET home page. */
// router.get('/', (req, res) => {
//   res.render('index', { title: 'Welcome to Mini Messageboard', messages: messages }); // Pass messages array to the template
// });

// router.get('/new', (req, res) => {
//   res.render('form', { title: 'Mini Messageboard', messages: messages }); // Pass messages array to the template
// });

// /* POST new message. */
// router.post('/new', (req, res) => {
//   const { text, user } = req.body;
//   messages.push({ text, user, added: new Date() });
//   res.redirect('/');
// });

// module.exports = router;
// routes/index.js
var express = require('express');
var router = express.Router();
const messages = require('../data/messages'); // Import messages array

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Welcome to Mini Messageboard', messages: messages }); // Pass messages array to the template
});

module.exports = router;
