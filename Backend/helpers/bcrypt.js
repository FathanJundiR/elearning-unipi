const bcrypt = require("bcrypt");

const hash = (plainPassword) => {
  return bcrypt.hashSync(plainPassword, 10);
};

const compare = (plainPassword, hashedPassword) => {
  return bcrypt.compareSync(plainPassword, hashedPassword);
};

module.exports = { hash, compare };
