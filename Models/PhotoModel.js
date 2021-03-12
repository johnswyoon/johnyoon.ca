const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  collection: {
    type: String,
    required: true,
  },
  imageData: {
    type: Buffer,
    required: true,
  },
  imageType: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("photo", PhotoSchema);
