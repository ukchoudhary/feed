/** @format */
const { validationResult } = require("express-validator");

const validator = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log("validation error", errors.array());
      return res.status(400).json({
        status: false,
        message: "Invalid query parameter",
        errors: errors.array(),
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      status: false,
      message: "Invalid query parameter",
      errors: error,
    });
  }
};

module.exports = { validator };
