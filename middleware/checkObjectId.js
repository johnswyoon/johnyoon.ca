const mongoose = require("mongoose");

// Middleware to check for valid object id
const checkObjectId = (uncheckedId) => (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params[uncheckedId])) {
    return res.status(400).json({ msg: "Invalid ID" });
  }
  next();
};

module.exports = checkObjectId;
