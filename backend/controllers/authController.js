const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { name, lastName, email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json([{ msg: "user already exist" }]);
    }
    const newUser = new User({ name, lastName, email, password });
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(password, salt);
    await newUser.save();
    const payload = {
      userID: newUser._id,
    };
    const token = jwt.sign(payload, process.env.SECRET);
    res.send({
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        lastName: newUser.lastName,
        email: newUser.email,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json([{ msg: "bad credentials email" }]);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json([{ msg: "Bad Credentials password" }]);
    }
    const payload = {
      userID: user._id,
    };
    const token = jwt.sign(payload, process.env.SECRET);
    res.send({
      token,
      user: {
        _id: user._id,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
      },
    });
  } catch (error) {
    console.error(error);
  }
};

const getAuthUser = (req, res) => {
  res.send(req.user);
};

module.exports = { register, login, getAuthUser };
