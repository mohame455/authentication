const express = require("express");
const router = express.Router();
const { register, login, getAuthUser } = require("../controllers/authController");
const {
  registerRules,
  validator,
  loginRules,
} = require("../middleware/bodyValidator");
const isAuth = require("../middleware/isAuth");

router.post("/register", registerRules(), validator, register);
router.post("/login", loginRules(), validator, login);
router.get("/current_user", isAuth, getAuthUser);

module.exports = router;
