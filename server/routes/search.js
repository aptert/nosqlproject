var express = require('express');
var router = express.Router();
var movies = require("../controller/moviesController")

router.route("/search")
  .get((req, res) => {
    movies.findMovie(req, res)
  })



module.exports = router;
