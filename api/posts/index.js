// imports
const posts = require('../../database/database.json');

// @desc     Get Posts
// @route    GET /posts
// @access   Public
const getPosts = async (req, res, next) => {
  try {
    return res.status(201).json({ status: true, data: posts})
  } catch (error) {
    return res.status(500).json({ status: false, message: 'something went wrong', error: error })
  }
}

module.exports = { getPosts }