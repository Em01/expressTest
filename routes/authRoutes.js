const passport = require('passport');

module.exports = (app) => {

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

};
