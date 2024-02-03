const mongoose = require("mongoose");
const { env_config } = require("../config/config.env");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(env_config.MONGODB_URL);
    console.info("Connected to the database");
  } catch (err) {
    console.error("Error while connecting to the database");
    console.error(err.message);
  }
};

module.exports = { connectToDatabase };
