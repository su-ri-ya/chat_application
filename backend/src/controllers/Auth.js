const User = require("../models/user");

const bcrypt = require("bcrypt");
const validateUserData = require("../utils/validate");
const generateToken = require("../utils/generateToken");

const signUp = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await validateUserData(name, email, password);

    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("invalid crentials");
    }
    const ispasswordValid = await bcrypt.compare(password, user.password);
    if (!ispasswordValid) {
     throw new Error("invalid crentials");
    }
    const token = generateToken(user._id);

    res.cookie("token", token);
    res.status(201).json({ message: "User login successfully", user });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
const logOut = async (req, res) => {
  try {
    res.cookie("token", "", { expires: new Date(Date.now()) });
    res.status(201).json({ message: "logout sucussfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { signUp, login, logOut };
