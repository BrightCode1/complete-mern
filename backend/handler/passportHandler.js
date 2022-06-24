const GitHubStrategy = require("passport-github2").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const { v4: uuidv4 } = require("uuid");

const User = require("../models/userModel");
const { generateToken } = require("../utils/genToken");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: process.env.GOOGLE_CALLBACK_URI,
      passReqToCallback: true,
    },
    function (req, accessToken, refreshToken, profile, done) {
      User.findOne({
        email: profile.emails[0].value,
      }).then(async (user) => {
        if (user) {
          done(null, {
            success: true,
            message: "Successful",
            data: {
              id: user._id,
              name: user.name,
              email: user.email,
              image: user.image,
              token: generateToken(user._id),
            },
          });
        } else {
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
              message: "Successful",
              data: {
                id: saveUser._id,
                name: saveUser.name,
                email: saveUser.email,
                image: saveUser.image,
                token: generateToken(saveUser._id),
              },
            });
          } else {
            res.status(500);
            throw new Error("User not created, Invalid user data");
          }
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
    function (req, accessToken, refreshToken, profile, done) {
      User.findOne({
        email: profile.emails[0].value,
      }).then(async (user) => {
        if (user) {
          if (user.userType === "email") {
            res.status(400);
            throw new Error(
              "This account was already created using Email & Password"
            );
          }
          done(null, {
            success: true,
            message: "Successful",
            data: {
              id: user._id,
              name: user.name,
              email: user.email,
              image: user.image,
              token: generateToken(user._id),
            },
          });
        } else {
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
              message: "Successful",
              data: {
                id: saveUser._id,
                name: saveUser.name,
                email: saveUser.email,
                image: saveUser.image,
                token: generateToken(saveUser._id),
              },
            });
          } else {
            res.status(500);
            throw new Error("User not created, Invalid user data");
          }
        }
      });
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.data.id);
});
passport.deserializeUser(function (userId, done) {
  User.findById(userId).then((usr) => {
    if (usr) {
      done(null, {
        success: true,
        message: "Successful",
        data: {
          id: usr._id,
          name: usr.name,
          email: usr.email,
          image: usr.image,
          token: generateToken(usr._id),
        },
      });
    }
  });
});
