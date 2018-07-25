const axios = require("axios");
const db = require("../models");


// getSea searches the NYT API and returns only the entries we haven't already saved
module.exports = {
    getTweets: function (req, res) {

        // Query the db, using skip and limit to achieve page chunks
        db.Tweet.find({})
            .then(docs => {
                // If everything is cool...
                docs.forEach(function (tweet) {
                    tweet.active = true; // Set them to active
                });
                res.json(docs)
            })
            .catch(err => res.status(422).json(err));;
    }

};


