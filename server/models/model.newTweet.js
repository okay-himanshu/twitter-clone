const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  tweet: {
    type: String,
    require: true,
  },
});

const tweetModel = mongoose.model("Tweet", tweetSchema);
module.exports = tweetModel;
