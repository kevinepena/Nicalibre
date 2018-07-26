const axios = require("axios");
const db = require("../models");


// getSea searches the NYT API and returns only the entries we haven't already saved
module.exports = {
    getTweets: function (req, res) {

        // Query the db, using skip and limit to achieve page chunks
        db.Tweet.find({},'twid active author avatar body date screenname',{skip: 0, limit: 10}).sort({date: 'desc'})
            .then(docs => {
                // If everything is cool...
                docs.forEach(tweet => {
                    tweet.active = true; // Set them to active
                });
                res.json(docs);
            })
            .catch(err => res.status(422).json(err));;
    }

};


