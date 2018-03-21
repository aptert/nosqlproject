var mongoose = require("mongoose")
var movie = require("../model/movies")

module.exports.getAllMovies = (req, res) => {
    movie.find((err, movies) => {
        if(err){res.send(err)}
        else{
            res.json(movies)
        }
    })
}

module.exports.findMovieByTitle = (title, req, res) => {
    movie.where('title', title).exec((err, movie) => {
        if(err){res.send(err)}
        else{
            res.json(movie)
        }
    })
}

module.exports.findMovieRatinGTE = (rating, req, res) => {
    movie.where('rating').gte(rating).exec((err, movie) => {
        if(err){res.send(err)}
        else{
            res.json(movie)
        }
    })
}

module.exports.findMovieRatinLTE = (rating, req, res) => {
    movie.where('rating').lte(rating).exec((err, movie) => {
        if(err){res.send(err)}
        else{
            res.json(movie)
        }
    })
}