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

module.exports.findMovie = (req, res) => {
    var jsonQuery = req.query

    if(jsonQuery.year){
        jsonQuery.year = parseInt(jsonQuery.year)
    }
    /*If we want an exact rating */
    if(jsonQuery.rating){
        jsonQuery.rating = parseInt(jsonQuery.rating)
    }
    
    /*If we want an exact rank */
    if(jsonQuery.rank){
        jsonQuery.rank = parseInt(jsonQuery.rank)
    }

    /*If we want a rating gte */
    if(jsonQuery.rating_gte && jsonQuery.rating){
        jsonQuery.rating = "{$gte: "+jsonQuery.rating+"}"
        delete jsonQuery.rating_gte
        
    }
    //var query = "db.getCollection('movies').find("+JSON.stringify(jsonQuery)+")"
    // movie.find(jsonQuery).exec((err, movie)=>{
    //     if(err){res.send(err)}
    //     else{
    //         res.json(movie)
    //     }
    // })
    res.send(jsonQuery)
}


