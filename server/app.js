var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var search = require('./routes/search');
var add = require('./routes/add');

var app = express();

//Mongoose connection
var mongoose = require('mongoose')
mongoose.connect('mongodb://root:root@ds213759.mlab.com:13759/nosqlproject')
  .then(() => {console.log('Connected to the database!')})
  .catch(err => {console.log("Connection Error " + err)})

//Starting server
var port = 3001;
app.listen(port, ()=> {
  console.log('Listening on port ' + port + "...")
})
app.use('/api/search', search);
app.use('/api/add', add);
app.get('/', (req, res) => {
  res.send("go to /api")
})











// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
