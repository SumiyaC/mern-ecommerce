// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const LocalStrategy = require('passport-local').Strategy;
// const mongoose = require('mongoose');
// const User = require('../models/User');

// module.exports = function(passport) {
//   // Local Strategy
//   passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
//     User.findOne({ email: email.toLowerCase() }, (err, user) => {
//       if (err) return done(err);
//       if (!user) return done(null, false, { message: 'No user found' });
      
//       // Check password (you need a method in your User model for this)
//       user.comparePassword(password, (err, isMatch) => {
//         if (err) return done(err);
//         if (isMatch) return done(null, user);
//         return done(null, false, { message: 'Incorrect password' });
//       });
//     });
//   }));

//   // Google Strategy
//   passport.use(new GoogleStrategy({
//     clientID: process.env.GOOGLE_CLIENT_ID,
//     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
//     callbackURL: 'http://localhost:3000/auth/google/callback'
    
//   }, (token, tokenSecret, profile, done) => {
//     User.findOne({ googleId: profile.id }, async (err, user) => {
//       if (err) return done(err);
//       if (user) {
//         return done(null, user);
//       } else {
//         const newUser = new User({
//           googleId: profile.id,
//           name: profile.displayName,
//           email: profile.emails[0].value
//         });
//         await newUser.save();
//         return done(null, newUser);
//       }
//     });
//   }));

//   passport.serializeUser((user, done) => {
//     done(null, user.id);
//   });

//   passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//       done(err, user);
//     });
//   });
// };

const passport = require('passport');
const { OAuth2Client } = require('google-auth-library');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');
const bcrypt = require('bcryptjs');

const googleClient = new OAuth2Client(process.env.REACT_APP_GOOGLE_CLIENT_ID);

// Serialize and deserialize user
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

// Local Strategy for email/password login
passport.use(new LocalStrategy(
  { usernameField: 'email' },
  async (email, password, done) => {
    try {
      const user = await User.findOne({ email });
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Verify Google OAuth Token
async function verifyGoogleToken(token) {
  const ticket = await googleClient.verifyIdToken({
    idToken: token,
    audience: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  });
  return ticket.getPayload();
}

// Google OAuth Strategy for Google Login
passport.use(
  'google',
  new passport.Strategy(async (req, done) => {
    try {
      const { token } = req.body;
      const googleUser = await verifyGoogleToken(token);

      let user = await User.findOne({ googleId: googleUser.sub });
      if (!user) {
        user = new User({
          googleId: googleUser.sub,
          name: googleUser.name,
          email: googleUser.email,
        });
        await user.save();
      }

      done(null, user);
    } catch (err) {
      done(err, null);
    }
  })
);
