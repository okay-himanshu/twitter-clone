const mongoose = require("mongoose");

const tweetSchema = new mongoose.Schema(
  {
    tweet: {
      type: String,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const tweetModel = mongoose.model("Tweet", tweetSchema);
module.exports = tweetModel;
