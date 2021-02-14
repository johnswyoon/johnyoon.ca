const express = require("express");
const router = express.Router();

const Post = require("../Models/PostModel");

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post("/posts", async (req, res) => {
  try {
    const newPost = new Post({
      title: req.body.title,
      thumbnail: req.body.thumbnail,
      tag: req.body.tag,
      markdownText: req.body.markdownText,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
