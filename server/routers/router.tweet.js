const app = require("express");
const userAuthentication = require("../middlewares/middleware.auth");
const {
  handleNewTweet,
  handleAllTweetLists,
  handleUserTweet,
} = require("../controllers/controller.tweet");

const router = app.Router();

router.post("/new-tweet", userAuthentication, handleNewTweet);
router.get("/all-tweet-lists", handleAllTweetLists);
router.get("/tweet-count/:userId", handleUserTweet);

module.exports = router;
