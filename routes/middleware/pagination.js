/** @format */

const pagination = async (req, res, next) => {
  try {
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
    return res.status(400).json({
      status: false,
      message: "Invalid query parameter",
      error: error,
    });
  }
};

module.exports = { pagination };
