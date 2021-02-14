const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  },
  tag: {
    type: [String],
  },
  date: {
    type: Date,
    default: Date.now,
  },
  text: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("post", PostSchema);
