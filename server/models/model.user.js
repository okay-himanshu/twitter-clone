const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  securityQuestion: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    required: true,
    min: 4,
    max: 20,
  },
});

const userModel = mongoose.model("User", userSchema);
module.exports = userModel;
