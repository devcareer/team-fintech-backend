/* eslint-disable no-unused-vars */
// TODO controllers
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { User } = require('../models/index');

module.exports.passport.serializeUser((user, done) => {
  done(null, user.id);
});

module.exports.passport.deserializeUser((user, done) => {
  done(null, user);
});

module.exports.passport.use(
  new LocalStrategy(
    {
      usernameField: 'email',
      passwordField: 'password',
      session: true,
    },
    // eslint-disable-next-line consistent-return
    async (username, password, done) => {
      // console.log(`trying to log in as ${username}`);
      const user = await User.findOne({ where: { email: username } });
      if (!user) {
        return done(null, false);
      }
      bcrypt.compare(password, user.password, (err, res) => {
        if (res) {
          res.json('successful login');
          return done(null, user);
        }
        return done(null, false);
      });
    }
  )
);

module.exports.passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
    },
    async (accessToken, refreshToken, profile, cb) => {
      const [user, status] = await User.findOrCreate({
        where: {
          social_user_id: profile.id,
          name: profile.displayName,
          registration_type: 'google',
        },
      });
      cb(null, user);
    }
  )
);

module.exports = {
  getGoogleSignin: [passport.authenticate('google', { scope: ['profile'] })],

  handleGoogleSignin: [
    passport.authenticate('google', {
      failureRedirect: '/sign?signin_failed',
    }),
    (req, res) => {
      res.redirect('/');
    },
  ],
};

module.exports = {
  getSignin: (req, res) => {
    const isLoginFailed = typeof req.query.login_failed !== 'undefined';
    if (isLoginFailed) {
      req.send('validation_errors', [{ msg: 'Signin has failed.' }]);
    }
    res.json({
      user: req.user,
    });
  },

  postSignin: [
    passport.authenticate('local', { failureRedirect: '/Sigin?Signin_failed' }),
    (req, res) => {
      res.redirect('/');
    },
  ],

  handleSignout: (req, res) => {
    req.Signout();
    res.redirect('/');
  },
};
