const router = require("express").Router();
const tweetController = require("../../controllers/tweetsController");
// const TweetsApp = React.createFactory(require('./components/TweetsApp.react'));

router
    .route("/")
    .get(tweetController.getTweets);

module.exports = router;