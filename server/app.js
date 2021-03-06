var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var fs = require("fs")
var path = require("path")

var route = require('./routes/search');

var app = express();

//To work at home
var localURL = 'mongodb://localhost:27017'

//To export
var cloudURL = 'mongodb://root:root@ds213759.mlab.com:13759/nosqlproject'

//Mongoose connection
var mongoose = require('mongoose')
mongoose.connect(cloudURL)
  .then(() => {console.log('Connected to the database!')})
  .catch(err => {console.log("Connection Error " + err)})

app.use(bodyParser.urlencoded({extended: true}))
//Starting server
var port = 3001;
app.listen(port, ()=> {
  console.log('Listening on port ' + port + "...")
})

//sending static files like css and js to the server 
app.use(express.static(__dirname + '/../client'))

app.use('/api/', route);

app.engine('jade', require('jade').renderFile);
app.set('view engine', 'jade');









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
