var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');


mongoose.connect('mongodb://savi:sham1311BHAVI@cluster0-shard-00-00.46c53.mongodb.net:27017,cluster0-shard-00-01.46c53.mongodb.net:27017,cluster0-shard-00-02.46c53.mongodb.net:27017/movie?ssl=true&replicaSet=cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
mongoose.connection.on('connected',()=>{
    console.log("Connected DATABASE")
})
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
})


var app = express();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/browse', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
