// imports
const feed = require('../../database/feed.json');

// @desc     Get Feed
// @route    GET /feed
// @access   Public
const getFeed = async (req, res, next) => {
  try {
    
    const size = req.size;
    const offset = req.offset;

    let filterdResult = feed;
    if (req.query.name) {
      filterdResult = feed.filter((item) => item.name === req.query.name);
    }

    const result = filterdResult.slice(offset, offset + size);
    return res.status(200).json({ status: true, data: result });
  } catch (error) {
    return res.status(500).json({ status: false, message: 'something went wrong', error: error })
  }
}

module.exports = { getFeed }