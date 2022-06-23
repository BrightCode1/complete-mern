const GitHubStrategy = require("passport-github2").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");

const User = require("../models/userModel");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({
        email: profile.emails[0].value,
      }).then(async (user) => {
        if (user) {
          done(null, user);
          return;
        }

        const saveUser = await User.create({
          name: profile.displayName,
          email: profile.emails[0].value,
          image: profile.photos[0].value,
          userType: "google",
          password: uuidv4(),
        });

        if (saveUser) {
          done(null, {
            success: true,
            message: "Successfully registered",
            data: {
              id: saveUser._id,
              name: saveUser.name,
              email: saveUser.email,
              image: saveUser.image,
            },
          });
        } else {
          res.status(500);
          throw new Error("User not created, Invalid user data");
        }
      });
    }
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: process.env.GITHUB_CALLBACK_URI,
    },
    function (accessToken, refreshToken, profile, done) {
      console.log(profile);
      done(null, profile);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user);
});
passport.deserializeUser(function (user, done) {
  done(null, user);
});
