/** @format */

const pagination = async (req, res, next) => {
  try {
    console.log("pagenation paramas", req.query.size, req.query.page);
    let size = req.query.size || 10;
    let page = req.query.page || 1;
    if (size < 0) {
      size = 10;
    }

    if (page < 0) {
      page = 1;
    }

    const offset = (page - 1) * size;

    req.size = size;
    req.offset = offset;

    next();
  } catch (error) {
    return res
      .status(500)
      .json({ status: false, message: "something went wrong", error: error });
  }
};

module.exports = { pagination };
