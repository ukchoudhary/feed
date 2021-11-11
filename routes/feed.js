// imports
const express = require('express');
const { getFeed } = require("../api/feed");
const { pagination } = require("./middleware/pagination");
const { query, validationResult } = require("express-validator");
const { validator } = require("./middleware/validator");

const feedRouter = express.Router();

feedRouter.get(
  "/feed",
  query("size").isNumeric().optional(),
  query("page").isNumeric().optional(),
  query("name").isString().optional(),
  query("sortBy").isString().optional(),
  validator,
  pagination,
  getFeed
);

module.exports = { feedRouter }