const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
//Models
const User = require("../Models/UserModel");

// @route   POST api/users
// @desc    Create User
// @access  Public
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if username already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ msg: "User already exists" });
    }
    // Create new user if doesn't exist
    user = new User({ username, password });

    // Encrypt password
    const salt = await bcrypt.genSalt(10); // To random data used to hash; 10 is recommended for speed and security
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Return json web token
    const payload = { user: { id: user.id } };
    jwt.sign(
      payload,
      process.env.JWT_SECRET,
      { expiresIn: "0.5h" },
      (error, token) => {
        if (error) throw error;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
