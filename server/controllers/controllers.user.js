const jwt = require("jsonwebtoken");

const userModel = require("../models/modules.user");
const { hash } = require("../helper/helper.bcrypt");
const { env_config } = require("../config/config.env");

const handleRegisterUser = async (req, res) => {
  try {
    const {
      name,
      username,
      email,
      securityQuestion,
      password,
      confirmPassword,
    } = req.body;

    if (
      name &&
      username &&
      email &&
      securityQuestion &&
      password &&
      confirmPassword
    ) {
      const checkExistedUser = await userModel.findOne({
        $or: [{ email }, { username }],
      });

      if (!checkExistedUser) {
        if (password === confirmPassword) {
          const hashPassword = await hash(password);
          const user = new userModel({
            name,
            username,
            email,
            password: hashPassword,
            securityQuestion,
          });
          await user.save();

          //? Generating JWT TOKEN

          const token = jwt.sign(
            { userId: user._id },
            env_config.JWT_SECRET_KEY,
            {
              expiresIn: "5d",
            }
          );

          res.status(201).send({
            success: true,
            message: "user signup successfully",
            token,
          });
        } else {
          res.status(200).send({
            success: false,
            message: "password and confirm password doesn't matched",
          });
        }
      } else {
        let message = "";

        switch (true) {
          case checkExistedUser.email === email:
            message = "User with the same email already exists";
            break;
          case checkExistedUser.username === username:
            message = "username already exists";
            break;

          default:
            message = "User with the same email or username already exists";
            break;
        }

        res.status(400).send({
          success: false,
          message,
        });
      }
    } else {
      res.status(201).send({
        success: false,
        message: "all field is required",
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

module.exports = { handleRegisterUser };
