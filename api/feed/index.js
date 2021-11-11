// imports
const env = process.env.NODE_ENV;
const feed = require(`../../database/${env}-feed.json`);

// @desc     Get Feed
// @route    GET /feed
// @access   Public
const getFeed = async (req, res, next) => {
  try {
    const size = req.size;
    const offset = req.offset;

    let filterdResult = feed;

    if (req.query.name) filterdResult = getSearchResult(req.query.name);

    let sortedResult = filterdResult;
    if (req.query.sortBy) {
      sortedResult = sortBy(req.query.sortBy, filterdResult);
    } else {
      sortedResult = sortBy("dateLastEdited", filterdResult);
    }

    //console.log("filterdResult", filterdResult);

    const result = sortedResult.slice(offset, offset + size);
    return res.status(200).json({ status: true, data: result });
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", error: error });
  }
};

const getSearchResult = (query) => {
  if (query[0] == '"' && query[query.length - 1]) {
    return getExactMatch(query.slice(1, query.length - 1));
  }
  return getPartialMatch(query);
};

const getExactMatch = (query) => {
  return feed.filter(
    (item) => item.name.includes(query) || item.description.includes(query)
  );
};

const getPartialMatch = (query) => {
  const grams = query.split(" ");
  return feed.filter((item) => {
    let counter = 0;
    let found = false;
    for (const gram of grams) {
      if (item.name.includes(gram)) counter++;
    }

    found = counter == grams.length;
    counter = 0;
    if (!found) {
      for (const gram of grams) {
        if (item.description.toLowerCase().includes(gram.toLowerCase()))
          counter++;
      }
    }
    found = counter == grams.length;
    return found;
  });
};

const sortBy = (field, array) => {
  return array.sort(function (a, b) {
    if (a[field].toLowerCase() < b[field].toLowerCase()) {
      return -1;
    }
    if (a[field].toLowerCase() > b[field].toLowerCase()) {
      return 1;
    }
    return 0;
  });
};

module.exports = { getFeed }