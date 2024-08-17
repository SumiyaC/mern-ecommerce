// const express = require('express');
// const passport = require('passport');
// const router = express.Router();
// const User = require('../models/User');

// // Local Register
// router.post('/register', async (req, res) => {
//   const { name, email, password, role } = req.body;
//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(400).json({ error: 'User already exists' });
//     }

//     const newUser = new User({ name, email, password, role });
//     await newUser.save();
//     res.status(201).json({ message: 'User registered successfully' });
//   } catch (error) {
//     res.status(500).json({ error: 'Server error' });
//   }
// });

// // Local Login
// router.post('/login', (req, res, next) => {
//   passport.authenticate('local', (err, user, info) => {
//     if (err) return next(err);
//     if (!user) return res.status(400).json({ error: info.message });

//     req.logIn(user, err => {
//       if (err) return next(err);
//       res.json({ message: 'Logged in successfully', user });
//     });
//   })(req, res, next);
// });

// // Google Login
// router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/auth/google/callback',
//   passport.authenticate('google', { failureRedirect: '/login' }),
//   (req, res) => {
//     res.redirect('/'); // Redirect to homepage or dashboard after login
//   }
// );

// // Logout
// router.get('/logout', (req, res) => {
//   req.logout();
//   res.json({ message: 'Logged out successfully' });
// });

// module.exports = router;

// authRoutes.js
const express = require('express');
const axios = require('axios');
const User = require('../models/User'); // Adjust the path to your User model
const router = express.Router();

// Google login route
router.post('/auth/google', async (req, res) => {
  const { token } = req.body; // This is the token from the client

  try {
    // Verify the token with Google
    const response = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${token}`);
    const { sub: googleId, name, email } = response.data; // Extract user info from token

    // Check if user already exists in the database
    let user = await User.findOne({ googleId });
    if (!user) {
      // If user doesn't exist, create a new one
      user = new User({ googleId, name, email });
      await user.save();
    }

    // Send user information back to client
    res.json({ message: 'Google login successful', user });
  } catch (error) {
    console.error('Google Login Error:', error);
    res.status(401).json({ message: 'Google login failed' });
  }
});

module.exports = router;