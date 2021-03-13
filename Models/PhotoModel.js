const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  album: {
    type: String,
    required: true,
  },
  imageData: {
    type: Buffer,
    required: true,
  },
  imageType: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("photo", PhotoSchema);
