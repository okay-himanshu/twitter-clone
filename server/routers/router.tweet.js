const app = require("express");
const userAuthentication = require("../middlewares/middleware.auth");
const {
  handleNewTweet,
  handleAllTweetLists,
} = require("../controllers/controller.tweet");

const router = app.Router();

router.post("/new-tweet", userAuthentication, handleNewTweet);
router.get("/all-tweet-lists", handleAllTweetLists);

module.exports = router;
