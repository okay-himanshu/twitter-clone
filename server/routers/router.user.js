const app = require("express");
const { handleRegisterUser } = require("../controllers/controllers.user");

const router = app.Router();

router.get("/", (req, res) => {
  return res.send({ message: "hello world" });
});

router.post("/signup", handleRegisterUser);

module.exports = router;
