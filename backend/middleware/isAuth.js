const jwt = require("jsonwebtoken");
const User = require("../models/User");

const isAuth = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (token) {
      const decoded = jwt.verify(token, process.env.SECRET);
      const user = await User.findById(decoded.userID).select("-password");
      req.user = user;
      next();
    }
    res.send({ msg: "token is required" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = isAuth;
