const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const articleSchema = new Schema({

  header: { type: String, required: true },
  link: { type: String, required: true },
  src: { type: String, required: true },
  caption: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

const Article = mongoose.model("Article", articleSchema);

module.exports = Article;