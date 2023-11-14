const bcrypt = require("bcrypt");

const hash = async (password) => {
  const salt = await bcrypt.genSalt(8);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

const compare = async (userPassword, dbPassword) => {
  return await bcrypt.compare(userPassword, dbPassword);
};

module.exports = { hash, compare };
