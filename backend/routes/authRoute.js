const express = require("express");
const passport = require("passport");
const {
  loginUser,
  registerUser,
  successAuth,
  failedAuth,
  logoutUser,
} = require("../controllers/authController");
const paths = require("../config/constants");
const { authorizedUser } = require("../handler/authHandler");
const router = express.Router();

router.post("/login", loginUser);
router.post("/register", registerUser);
router.post("/logout", authorizedUser, logoutUser);

//GOOGLE AUTHENTICATION
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", {
    failureRedirect: "/login/failed",
  }),
  successAuth
);

//GITHUB AUTHENTICATION
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/login/failed",
    successRedirect: paths.client_uri,
  })
);

// router.get("/login/success", successAuth);
router.get("/login/failed", failedAuth);

module.exports = router;
