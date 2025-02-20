const express = require('express');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const router = express.Router();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);


router.post('/google-login', async (req, res) => {
  const { idToken } = req.body;

  try {
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });

    const { email, sub: googleId, name } = ticket.getPayload();

    let user = await User.findOne({ googleId });
    if (!user) {
      user = new User({ name, email, googleId });
      await user.save();
    }

    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.json({ token, user });
  } catch (error) {
    console.error('Error during Google login:', error.message);
    res.status(500).json({ error: 'Google login failed' });
  }
});

module.exports = router;
