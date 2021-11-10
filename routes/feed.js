// imports
const express = require('express');
const { getFeed } = require("../api/feed");
const { pagination } = require("./middleware/pagination");

const feedRouter = express.Router();

feedRouter.get("/feed", pagination, getFeed);

module.exports = { feedRouter }