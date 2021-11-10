// imports
const express = require('express');
const { getPosts } = require("../api/posts");

const postRouter = express.Router();

postRouter.get('/posts', getPosts);

module.exports = { postRouter }