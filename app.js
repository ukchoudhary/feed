// imports
const express = require('express');
const { json } = require('body-parser');
const { feedRouter } = require('./routes/feed');


const app = express();

// middlewares
app.use(json())
app.use(feedRouter)

module.exports = { app }