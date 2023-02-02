const createError = require('http-errors');
const express = require('express');
var fs = require('fs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const errorMiddleware = require('./middleware/errorMiddleware.js');
const allowCrossDomain = require('./middleware/allowCrossDomain');
const app = express();

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' });
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
// log all requests to access.log
app.use(logger('common', { stream: accessLogStream }));
app.use(allowCrossDomain);
app.use(cors({ origin: '*' }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/api/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (_req, _res, next) {
  next(createError(404));
});

// error handler - last Middleware
app.use(errorMiddleware);

module.exports = app;
