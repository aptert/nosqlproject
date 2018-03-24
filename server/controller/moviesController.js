var mongoose = require("mongoose")
var MongoClient = require("mongodb").MongoClient;
var movie = require("../model/movies")

module.exports.getAllMovies = (req, res) => {
    movie.find((err, movies) => {
        if(err){res.send(err)}
        else{
            res.json(movies)
        }
    })
    
}

module.exports.findMovie = (req, res) => {
    var query = req.query

    if(query.year){
        query.year = parseInt(query.year)
    }
    /*If we want an exact rating */
    if(query.rating){
        query.rating = parseInt(query.rating)
    }
    
    /*If we want an exact rank */
    if(query.rank){
        query.rank = parseInt(query.rank)
    }

    /*If we want a rating gte */
    if(query.rating_gte){
        rating = query.rating_gte
        delete query.rating_gte
        movie.find(query)
            .where("rating").gte(rating)
            .exec((err, movie)=>{
            if(err){res.send(err)}
            else{
                res.json(movie)
            }
        })
    }
    //var query = "db.getCollection('movies').find("+JSON.stringify(query)+")"
    movie.find(query).exec((err, movie)=>{
        if(err){res.send(err)}
        else{
            res.json(movie)
        }
    })

    
}

module.exports.addMovie = (req, res) => {
    movie.insert
}


