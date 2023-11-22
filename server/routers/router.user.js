const app = require("express");
const {
  handleUserSingUp,
  handleUserLogin,
} = require("../controllers/controllers.user");
const userAuthentication = require("../middlewares/middlewares.auth");

const router = app.Router();

router.get("/", (req, res) => {
  return res.send({ message: "hello world" });
});

router.post("/signup", handleUserSingUp);
router.post("/login", handleUserLogin);

module.exports = router;
