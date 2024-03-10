const express = require('express');
const path = require('path');
const { router: indexRouter, messages } = require('./routes/index'); // Import router and messages array from indexRouter
const usersRouter = require('./routes/users'); // Import users router
const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/', indexRouter);
app.use('/new', usersRouter); // Mount the users router for the '/new' path

module.exports = app;
