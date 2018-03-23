var mongoose = require("mongoose")

var movieSchema = mongoose.Schema({
    title:{
        type: String, 
        required: true
    },

    plot:{
        type: String, 
        required: true
    },

    year:{
        type: Number,
        required: true
    },

    release_date:{
        type: String, 
        required: true
    },

    rank:{
        type: Number, 
        required: true
    },

    rating:{
        type: Number, 
        required: true
    },

    directors:{
        type: [], 
        required: true
    },

    image:{
        type: String, 
        required: true
    },

    running_time_secs:{
        type: String, 
        required: true
    },
})

module.exports = mongoose.model("movie", movieSchema);