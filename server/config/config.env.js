const env_config = {
  MONGODB_URL: String(process.env.MONGODB_URL),
  PORT: String(process.env.PORT),
};

module.exports = { env_config };
