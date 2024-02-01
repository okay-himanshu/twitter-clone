const tweetModel = require("../models/model.tweet");

const handleNewTweet = async (req, res) => {
  const { tweet } = req.body;
  const { userId } = req.user;
  try {
    if (tweet && userId) {
      const newTweet = new tweetModel({ tweet, user: userId });
      await newTweet.save();

      return res.status(201).send({
        success: true,
        message: "Tweet successfully",
        newTweet,
      });
    } else {
      return res.status(404).send({
        success: false,
        message: "Tweet or user not found",
      });
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error while saving the tweet",
      error: err.message,
    });
  }
};

const handleAllTweetLists = async (req, res) => {
  try {
    const allTweets = await tweetModel
      .find({})
      .populate("user", "name username");
    return res.status(200).send({
      success: true,
      message: "Fetched all tweet successfully",
      allTweets,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error while fetching all tweets",
      error: err.message,
    });
  }
};

const handleTweetCount = async (req, res) => {
  try {
    const userId = req.params.userId;
    console.log("userid", userId);

    const tweetCount = await tweetModel.countDocuments({ user: userId });

    console.log(tweetCount);
    return res.status(200).send({
      success: true,
      message: "Tweet count retrieved successfully",
      tweetCount: tweetCount,
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error while getting user tweets",
      error: err.message,
    });
  }
};

module.exports = { handleNewTweet, handleAllTweetLists, handleTweetCount };
