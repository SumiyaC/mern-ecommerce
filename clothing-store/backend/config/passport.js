

// const passport = require('passport');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const User = require('../models/User');

// passport.serializeUser((user, done) => {
//   done(null, user.id);
// });

// passport.deserializeUser((id, done) => {
//   User.findById(id).then(user => {
//     done(null, user);
//   });
// });

// passport.use(new GoogleStrategy({
//   clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
//   clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
//   callbackURL: '/api/auth/google/callback',
// }, async (accessToken, refreshToken, profile, done) => {
//   const existingUser = await User.findOne({ googleId: profile.id });
//   if (existingUser) {
//     return done(null, existingUser);
//   }
//   const user = await new User({ googleId: profile.id, email: profile.emails[0].value }).save();
//   done(null, user);
// }));

// config/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then(user => {
    done(null, user);
  });
});

passport.use(new GoogleStrategy({
  clientID: process.env.REACT_APP_GOOGLE_CLIENT_ID,
  clientSecret: process.env.REACT_APP_GOOGLE_CLIENT_SECRET,
  callbackURL: 'http://localhost:5000/api/auth/google/callback',
}, async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({ googleId: profile.id });
  if (existingUser) {
    return done(null, existingUser);
  }
  const user = await new User({ googleId: profile.id, email: profile.emails[0].value }).save();
  done(null, user);
}));
