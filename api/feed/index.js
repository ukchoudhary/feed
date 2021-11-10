// imports
const feed = require('../../database/feed.json');

// @desc     Get Feed
// @route    GET /feed
// @access   Public
const getFeed = async (req, res, next) => {
  try {
    return res.status(200).json({ status: true, data: feed})
  } catch (error) {
    return res.status(500).json({ status: false, message: 'something went wrong', error: error })
  }
}

module.exports = { getFeed }