const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// Models
const User = require("../Models/UserModel");

// @route   POST api/auth
// @desc    Authenticate User and Get Token (Login)
// @access  Public
router.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    // Check if user exists
    let user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ errors: [{ msg: "Invalid Username" }] });
    }

    // If username exists, compare passowrds
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ msg: "Invalid Password" });
    }

    // Return token
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
    res.status(500).send("Server Error");
  }
});

module.exports = router;
