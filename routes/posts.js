const express = require("express");
const router = express.Router();
const checkObjectId = require("../middleware/checkObjectId");

const Post = require("../Models/PostModel");

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post("/", async (req, res) => {
  try {
    const { title, thumbnail, tag, text } = req.body;
    const newPost = new Post({
      title,
      thumbnail,
      tag,
      text,
    });

    const post = await newPost.save();
    res.json(post);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/posts
// @desc    Get all posts
// @access  Public
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 }); // most recent first
    res.send(posts);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   GET api/posts/:id
// @desc    Get post by id
// @access  Public
router.get("/:id", checkObjectId("id"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id); // get id from url
    if (!post) return res.status(404).json({ msg: "Post not found" });
    res.send(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete post by id
// @access  Private
router.delete("/:id", checkObjectId("id"), async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    await post.remove();
    res.json({ msg: "Post Removed" });
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
