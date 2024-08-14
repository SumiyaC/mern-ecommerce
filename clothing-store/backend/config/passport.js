const GoogleStrategy = require('passport-google-oauth20').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');
const User = require('../models/User');

module.exports = function(passport) {
  // Local Strategy
  passport.use(new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    User.findOne({ email: email.toLowerCase() }, (err, user) => {
      if (err) return done(err);
      if (!user) return done(null, false, { message: 'No user found' });
      
      // Check password (you need a method in your User model for this)
      user.comparePassword(password, (err, isMatch) => {
        if (err) return done(err);
        if (isMatch) return done(null, user);
        return done(null, false, { message: 'Incorrect password' });
      });
    });
  }));

  // Google Strategy
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  }, (token, tokenSecret, profile, done) => {
    User.findOne({ googleId: profile.id }, async (err, user) => {
      if (err) return done(err);
      if (user) {
        return done(null, user);
      } else {
        const newUser = new User({
          googleId: profile.id,
          name: profile.displayName,
          email: profile.emails[0].value
        });
        await newUser.save();
        return done(null, newUser);
      }
    });
  }));

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
      done(err, user);
    });
  });
};
