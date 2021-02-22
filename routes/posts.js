const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const checkObjectId = require("../middleware/checkObjectId");
const slugify = require("slugify");
//Models
const Post = require("../Models/PostModel");

// @route   POST api/posts
// @desc    Create a post
// @access  Private
router.post("/", auth, async (req, res) => {
  try {
    const { title, thumbnail, tag, text } = req.body;
    const slug = slugify(title).toLowerCase();
    const newPost = new Post({
      title,
      thumbnail,
      tag,
      text,
      slug,
    });

    // See if post title already exists
    let post = await Post.find({ slug });
    if (post.length > 0) {
      return res.status(400).json({ msg: "Post already exists" });
    }

    post = await newPost.save();
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

// @route   GET api/posts/:slug
// @desc    Get post by slug id
// @access  Public
router.get("/:slug", async (req, res) => {
  try {
    const post = await Post.findOne({ slug: req.params.slug });
    if (!post) {
      return res.redirect("localhost:3000/blog");
    }
    res.send(post);
  } catch (err) {
    console.log(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   DELETE api/posts/:id
// @desc    Delete post by id
// @access  Private
router.delete("/:id", auth, checkObjectId("id"), async (req, res) => {
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
