const app = require("express");
const userAuthentication = require("../middlewares/middleware.auth");
const { handleNewTweet } = require("../controllers/controller.newTweet");

const router = app.Router();

router.post("/new-tweet", userAuthentication, handleNewTweet);

module.exports = router;
