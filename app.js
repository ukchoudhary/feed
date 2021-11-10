// imports
const express = require('express');
const { json } = require('body-parser');
const { postRouter } = require('./routes/posts');


const app = express();

// middlewares
app.use(json())
app.use(postRouter)

module.exports = { app }