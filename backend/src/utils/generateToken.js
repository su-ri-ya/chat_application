const jwt = require("jsonwebtoken");
const generateToken = async (userId) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET_KEY, {
    expiresIn: "1h",
  });

  return token;
};
module.exports = generateToken;
