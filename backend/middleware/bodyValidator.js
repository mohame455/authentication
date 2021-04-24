const { body, validationResult } = require("express-validator");

const registerRules = () => [
  body("name", "name must be not empty").notEmpty(),
  body("lastName", "last name must be not empty").notEmpty(),
  body("email", "email is not valid").isEmail(),
  body("password", "password should contain at least 6 characters").isLength({
    min: 6,
  })
];

const loginRules = () => [
  body("email", "email is not valid").isEmail(),
  body("password", "password should contain at least 6 characters").isLength({
    min: 6,
  })
];

const validator = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res
      .status(400)
      .json(errors.array().map((err) => ({ msg: err.msg })));
  } else {
    next();
  }
};

module.exports = { registerRules, loginRules, validator };
