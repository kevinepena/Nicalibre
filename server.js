const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const twitter = require('twitter');
const config = require("./config");
const streamHandler = require('./utils/streamHandler');
const PORT = process.env.PORT || 3001;
// Create a new ntwitter instance
var twit = new twitter(config.twitter);

// Configure body parser for AJAX requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Disable etag headers on responses
app.disable('etag');


// Set up promises with mongoose
mongoose.Promise = global.Promise;
// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/react-tweets"
);


// const TweetsApp = React.createFactory(require('./components/TweetsApp.react'));
const Tweet = require("./models/Tweet");
// Index Route
app.get('/', function(req, res) {
  // Call static model method to get tweets in the db
  Tweet.getTweets(0,0, function(tweets, pages) {

    // Render React to a string, passing in our fetched tweets
    // var markup = React.renderToString(
    //   TweetsApp({
    //     tweets: tweets
    //   })
    // );

    // Render our 'home' template
    res.render({
      // markup: markup, // Pass rendered react markup
      state: JSON.stringify(tweets) // Pass current state to client side
    });

  });
});

// Add routes, both API and view
app.use(routes);


// Start the API server
var server = app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

// Initialize socket.io
var io = require('socket.io').listen(server);


// Set a stream listener for tweets matching tracking keywords
twit.stream('statuses/filter',{ track: 'SOSNicaragua, GritoPorNicaragua, OEA, FreeNica, NicaLibre, nicaragua'}, function(stream){
  streamHandler(stream,io);
});