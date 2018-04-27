const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();

passport.use(
  new GoogleStrategy({
    clientID: keys.googleClientID,
    clientSecret: keys.googleClientSecret,
    callbackURL: '/auth/google/callback'
  },
  (accessToken, refreshToken, profile, done) => {
    console.log(accessToken, 'accessToken');
    console.log(refreshToken, 'refreshToken');
    console.log(profile, 'profile');

  })
);

//callback url is for after user grants permission. Then starts oauth process managed by passport.

//first time to kick into oath flow
app.get(
  '/auth/google',
  passport.authenticate('google', {
    scope: ['profile', 'email']
  })
);

//second time with code and google strategy will exchange the code for user profile.
app.get('/auth/google/callback', passport.authenticate('google'));

const PORT = process.env.PORT || 5000;
app.listen(PORT);
