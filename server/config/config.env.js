const env_config = {
  MONGODB_URL: String(process.env.MONGODB_URL),
  PORT: String(process.env.PORT),
  JWT_SECRET_KEY: String(process.env.JWT_SECRET_KEY),
};

module.exports = { env_config };
