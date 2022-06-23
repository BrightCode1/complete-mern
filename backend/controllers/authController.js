const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const { generateToken } = require("../utils/genToken");
const paths = require("../config/constants");

const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error("Fill in all required details");
  }

  const user = await User.findOne({
    email,
  });
  if (!user) {
    res.status(400);
    throw new Error("Invalid login credentials");
  }

  const verifyPassword = bcrypt.compare(password, user.password);

  if (!verifyPassword) {
    res.status(400);
    throw new Error("Invalid Password");
  }
  res.status(200).json({
    success: true,
    message: "Successfully loggedIn",
    data: {
      id: user._id,
      name: user.name,
      email: user.email,
      image: user.image,
      token: generateToken(user._id),
    },
  });
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, image, type, password } = req.body;

  if (!name || !email || !image || !password) {
    res.status(400);
    throw new Error("Fill in all required details");
  }

  const user = await User.findOne({
    email,
  });
  if (user) {
    res.status(400);
    throw new Error("Email Address already exist");
  }

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(password, salt);

  const saveUser = await User.create({
    name,
    email,
    image,
    userType: type,
    password: hashPassword,
  });

  if (saveUser) {
    res.status(201).json({
      success: true,
      message: "Successfully registered",
      data: {
        id: saveUser._id,
        name: saveUser.name,
        email: saveUser.email,
        image: saveUser.image,
        token: generateToken(saveUser._id),
      },
    });
  } else {
    res.status(400);
    throw new Error("User not created, Invalid user data");
  }
});

const logoutUser = (req, res) => {
  req.logout();
  res.redirect(paths.client_uri);
};

const successAuth = (req, res) => {
  try {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: "Success",
        data: {
          id: req.user._id,
          name: req.user.name,
          email: req.user.email,
          image: req.user.image,
          token: generateToken(req.user._id),
        },
      });
    } else {
      res.status(500);
      throw new Error("No user found");
    }
  } catch (error) {
    res.status(500);
    throw new Error(error.message);
  }
};

const failedAuth = (req, res) => {
  console.log(req.user);
  console.log(req.body);
  res.status(401);
  throw new Error("Login failed, try again");
};

module.exports = {
  loginUser,
  registerUser,
  successAuth,
  failedAuth,
  logoutUser,
};
