

// const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// // Register user with email and password
// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: 'User already exists' });

//     user = new User({ email, password });
//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// // Login user with email and password
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// // Google OAuth login
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.redirect(`/dashboard?token=${token}`);
//   }
// );

// module.exports = router;


// const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const User = require('../models/User');

// const router = express.Router();

// // Register user with email and password
// router.post('/register', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     let user = await User.findOne({ email });
//     if (user) return res.status(400).json({ message: 'User already exists' });

//     user = new User({ email, password });
//     await user.save();

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// // Login user with email and password
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'Invalid credentials' });

//     const isMatch = await user.matchPassword(password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).send('Server error');
//   }
// });

// // Google OAuth login - Redirect to Google for authentication
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

// // Google OAuth callback route
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.redirect(`/dashboard?token=${token}`);
//   }
// );

// // POST route to handle the idToken from the frontend
// router.post('/google-login', async (req, res) => {
//   const { idToken } = req.body;
//   try {
//     // Verify and decode the idToken from Google
//     const payload = jwt.verify(idToken, process.env.REACT_APP_GOOGLE_CLIENT_ID);
//     let user = await User.findOne({ googleId: payload.sub });

//     if (!user) {
//       // Create a new user if not found
//       user = new User({
//         googleId: payload.sub,
//         email: payload.email,
//         name: payload.name
//       });
//       await user.save();
//     }

//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user });
//   } catch (err) {
//     res.status(500).send('Google login failed');
//   }
// });

// module.exports = router;
//----------------
// routes/authRoutes.js
// const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const { OAuth2Client } = require('google-auth-library');
// const User = require('../models/User');

// const router = express.Router();
// const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

// // Google Login Route (for React token validation)
// router.post('/google-login', async (req, res) => {
//   const { idToken } = req.body;
//   try {
//     // Verify the token from the client
//     const ticket = await client.verifyIdToken({
//       idToken,
//       audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//     });

//     const { email, sub: googleId } = ticket.getPayload();

//     // Check if the user exists in the database
//     let user = await User.findOne({ googleId });
//     if (!user) {
//       user = new User({ email, googleId });
//       await user.save();
//     }

//     // Generate a JWT token for the user
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//     res.json({ token, user });
//   } catch (error) {
//     console.error('Error during Google login:', error);
//     res.status(500).json({ error: 'Google login failed' });
//   }
// });

// // Google OAuth Callback Route (used by Google)
// router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
//   const token = jwt.sign({ id: req.user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
//   res.redirect(`http://localhost:3000?token=${token}`); // Redirect back to the React app with the token
// });

// module.exports = router;
//-----------------

// const express = require('express');
// const passport = require('passport');
// const jwt = require('jsonwebtoken');
// const { OAuth2Client } = require('google-auth-library');
// const User = require('../models/User');

// const router = express.Router();
// const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

// // Google Login Route (for React token validation)
// router.post('/google-login', async (req, res) => {
//   const { idToken } = req.body;

//   try {
//     // Verify the token from the client
//     const ticket = await client.verifyIdToken({
//       idToken,
//       audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//     });

//     const { email, sub: googleId } = ticket.getPayload();

//     // Check if the user exists in the database
//     let user = await User.findOne({ googleId });
//     if (!user) {
//       user = new User({ email, googleId });
//       await user.save();
//     }

//     // Generate a JWT token for the user
//     const token = jwt.sign(
//       { id: user._id, email: user.email },
//       process.env.JWT_SECRET,
//       { expiresIn: '1h' }
//     );

//     // Send the token and user data to the client
//     res.json({ token, user });
//   } catch (error) {
//     console.error('Error during Google login:', error.message);
//     res.status(500).json({ error: 'Google login failed' });
//   }
// });

// // Google OAuth Callback Route (used by Google for server-side OAuth)
// router.get(
//   '/google/callback',
//   passport.authenticate('google', { failureRedirect: '/' }),
//   (req, res) => {
//     try {
//       // Generate a JWT token after successful authentication
//       const token = jwt.sign(
//         { id: req.user._id, email: req.user.email },
//         process.env.JWT_SECRET,
//         { expiresIn: '1h' }
//       );

//       // Redirect back to the React app with the token as a query parameter
//       res.redirect(`http://localhost:3000?token=${token}`);
//     } catch (error) {
//       console.error('Error during OAuth callback:', error.message);
//       res.status(500).send('Authentication failed');
//     }
//   }
// );

// module.exports = router;
//---------------------

const express = require('express');
const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const User = require('../models/User');

const router = express.Router();
const client = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

// Google Login Route
router.post('/google-login', async (req, res) => {
  const { idToken } = req.body;

  try {
    // Verify the ID Token
    const ticket = await client.verifyIdToken({
      idToken,
      audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    });

    const { email, sub: googleId, name } = ticket.getPayload();

    // Check if the user already exists
    let user = await User.findOne({ googleId });
    if (!user) {
      // Create a new user if one doesn't exist
      user = new User({ name, email, googleId });
      await user.save();
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, email: user.email },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    // Send the token and user information
    res.json({ token, user });
  } catch (error) {
    console.error('Error during Google login:', error.message);
    res.status(500).json({ error: 'Google login failed' });
  }
});

module.exports = router;
