const tweetModel = require("../models/model.tweet");

const handleNewTweet = async (req, res) => {
  const { tweet } = req.body;
  try {
    if (tweet) {
      console.log(tweet);
      const newTweet = new tweetModel({ tweet });
      await newTweet.save();

      return res.status(201).send({
        success: true,
        message: "Tweet successfully",
        newTweet,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "tweet cannot be empty",
        error: err.message,
      });
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "error while user signup",
      error: err.message,
    });
  }
};

module.exports = { handleNewTweet };
