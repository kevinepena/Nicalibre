var mongoose = require('mongoose');

// Create a new schema for our tweet data
var tweetschema = new mongoose.Schema({
    twid: String
    , active: Boolean
    , author: String
    , avatar: String
    , body: String
    , date: Date
    , screenname: String
});



// Return a Tweet model based upon the defined schema
module.exports = Tweet = mongoose.model('Tweet', tweetschema);