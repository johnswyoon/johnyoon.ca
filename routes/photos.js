const express = require("express");
const router = express.Router();

// Models
const Photo = require("../Models/PhotoModel");
const imageMimeTypes = ["image/jpeg", "image/jpg", "image/png"];

// @route   POST api/photos
// @desc    Upload a photo
// @access  Public (for now)
router.post("/", async (req, res) => {
  try {
    const { title, album, date, imageDataRaw } = req.body;
    const newPhoto = new Photo({ title, album, date });
    saveImageData(newPhoto, imageDataRaw);

    photo = await newPhoto.save();
    // console.log(photo);
    res.json(photo);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

const saveImageData = (photo, imageEncoded) => {
  if (imageEncoded == null) return;
  console.log(imageEncoded[0][0]);
  const photoImage = JSON.parse(imageEncoded);
  if (photoImage != null && imageMimeTypes.includes(photoImage.type)) {
    photo.imageData = new Buffer.from(photoImage.data, "base64");
    photo.imageType = photoImage.type;
  }
};

module.exports = router;
