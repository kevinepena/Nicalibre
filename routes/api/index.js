const router = require("express").Router();
const articleRoutes = require("./articles");
const searchRoute = require("./search");
const tweetRoute = require("./tweets");

// articles routes
router.use("/articles", articleRoutes);

// search routes
router.use("/search", searchRoute);

// tweets
router.use("/tweets", tweetRoute);

module.exports = router;
