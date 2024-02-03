const jwt = require("jsonwebtoken");
const { env_config } = require("../config/config.env");

const userAuthentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (authorization && authorization.startsWith("Bearer")) {
      const token = authorization.split(" ")[1];
      const { userId } = jwt.verify(token, env_config.JWT_SECRET_KEY);
      req.user = { userId };
      next();
    } else {
      res.json({
        status: false,
        message: "token not found",
      });
    }
  } catch (err) {
    console.error(err);
    res.json({
      status: false,
      message: "Unauthorized token",
    });
  }
};

module.exports = userAuthentication;
