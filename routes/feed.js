// imports
const express = require('express');
const { getFeed } = require("../api/feed");

const feedRouter = express.Router();

feedRouter.get('/feed', getFeed);

module.exports = { feedRouter }