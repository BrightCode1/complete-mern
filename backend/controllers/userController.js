const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");

const getUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(500);
    throw new Error("Could not get user data");
  }

  res.status(200).json({
    id: user._id,
    name: user.name,
    email: user.email,
    image: user.image,
  });
});

module.exports = {
  getUser,
};
