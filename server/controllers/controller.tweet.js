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

const handleUserTweet = async (req, res) => {
  try {
    const userId = req.params.userId;

    const userTweet = await tweetModel.find({ user: userId });

    return res.status(200).send({
      success: true,
      message: "Tweet count retrieved successfully",
      tweet: {
        tweets: userTweet,
        tweetCount: userTweet.length,
      },
    });
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "Error while getting user tweets",
      error: err.message,
    });
  }
};

const handleLikeTweet = async (req, res) => {
  try {
    const { tweetId } = req.params;
    const { userId } = req.user;

    // Check if tweetId and userId are available
    if (!tweetId || !userId) {
      return res.status(400).json({
        success: false,
        message: "Tweet ID or User ID not provided",
      });
    }

    // Find the tweet by its ID
    const tweet = await tweetModel.findById(tweetId);

    // Check if the tweet exists
    if (!tweet) {
      return res.status(404).json({
        success: false,
        message: "Tweet not found",
      });
    }

    if (!tweet.likes) {
      tweet.likes = [];
    }
    // Check if the tweet has already been liked by the user
    if (
      tweet.likes &&
      Array.isArray(tweet.likes) &&
      tweet.likes.includes(userId)
    ) {
      return res.status(400).json({
        success: false,
        message: "Tweet already liked by the user",
      });
    }

    // Add the user's ID to the likes array of the tweet
    tweet.likes.push(userId);

    // Save the updated tweet
    await tweet.save();

    return res.status(200).json({
      success: true,
      message: "Tweet liked successfully",
    });
  } catch (err) {
    console.error(err.message);
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
      error: err.message,
    });
  }
};

module.exports = {
  handleNewTweet,
  handleAllTweetLists,
  handleUserTweet,
  handleLikeTweet,
};
