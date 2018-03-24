
var express = require('express');
var router = express.Router();
var movies = require("../controller/moviesController")
var mongoclient = require("mongodb").MongoClient;


router.route("/search")
  .get((req, res) => {
    movies.findMovie(req,res)
  })

router.route("/add")
.get((req, res) => {
  movies.addMovie(req, res)
})


module.exports = router;
