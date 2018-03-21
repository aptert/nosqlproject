var express = require('express');
var router = express.Router();
var movies = require("../controller/moviesController")


/*Get all movies*/
router.route("/")
  .get((req, res) => {
    movies.getAllMovies(req, res)
  })

//Get by title
router.route("title=:_title")
  .get((req, res) => {
    var title = req.params._title
    movies.findMovieByTitle(title, req, res)
  });

//Get for gte 
router.route("/rating_gte=:_rating")
  .get((req, res) => {
    var rating = req.params._rating
    movies.findMovieRatinGTE(rating,req,res)
  })

//Get for lte 
router.route("/rating_lte=:_rating")
  .get((req, res) => {
    var rating = req.params._rating
    movies.findMovieRatinLTE(rating,req,res)
  })

module.exports = router;
