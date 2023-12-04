const jwt = require("jsonwebtoken");
const userModel = require("../models/modules.user");
const { hash, compare } = require("../helper/helper.bcrypt");
const { env_config } = require("../config/config.env");

const handleUserSingUp = async (req, res) => {
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

          console.log("backend ", user);

          return res.status(201).send({
            success: true,
            message: "user signup successfully",
            token,
            user: {
              username,
              name,
              email,
            },
          });
        } else {
          return res.status(200).send({
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

        return res.status(400).send({
          success: false,
          message,
        });
      }
    } else {
      return res.status(400).send({
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

const handleUserLogin = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if ((email || username) && password) {
      const user = await userModel.findOne({ $or: [{ email }, { username }] });

      if (user) {
        const isMatch = await compare(password, user?.password);

        if (isMatch) {
          const token = jwt.sign(
            { userId: user._id },
            env_config.JWT_SECRET_KEY,
            { expiresIn: "5d" }
          );

          return res.status(200).send({
            success: true,
            message: "Login successfully",
            token,
            user: {
              username,
              email,
            },
          });
        } else {
          return res.status(401).send({
            success: false,
            message: "email or password doesn't matched",
          });
        }
      } else {
        return res.status(404).send({
          success: false,
          message: "User not found, please signup",
        });
      }
    } else {
      return res.status(400).send({
        success: false,
        message: "All field is required",
      });
    }
  } catch (err) {
    return res.status(400).send({
      success: false,
      message: "error while user login ",
    });
  }
};

module.exports = { handleUserSingUp, handleUserLogin };
