const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema({
  tweet: {
    type: String,
    require: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const tweetModel = mongoose.model("Tweet", tweetSchema);
module.exports = tweetModel;
