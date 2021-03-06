var path = require('path');
var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');

// Express configuration
var app = express();
app.set('views', VIEW_ROOT);
app.engine('html', require('ejs').renderFile);
app.use(express.static(PUBLIC_ROOT));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  name: 'next_network',
  secret: 'Jangre',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 3600000 // 1 hour
  }
}));

// routers
var indexRouter = require(path.join(SRC_ROOT, 'routes/index.js'));
var studentsRouter = require(path.join(SRC_ROOT, 'routes/students.js'));

app.use('/', indexRouter);
app.use('/students', studentsRouter);

// Error handling
app.use(function(req, res, next) {
  var err = new Error('Not found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err.message);
});

module.exports = app;