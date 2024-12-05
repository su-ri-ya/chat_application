const validator = require("validator");

const validateUserData = async (name, email, password) => {
  if (!name || !email || !password) {
    throw new Error("All fields are required");
  }
  if (name.length <= 4) {
    throw new Error("Name should be more than 4 characters");
  }
  if (!validator.isEmail(email)) {
    throw new Error("Email is not valid");
  }
  if (!validator.isStrongPassword(password)) {
    throw new Error("Password is not valid, please enter a strong password");
  }
};

module.exports = validateUserData;
