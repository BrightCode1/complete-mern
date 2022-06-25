const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "FullName is required"],
    },
    email: {
      type: String,
      required: [true, "Email Address is required"],
      unique: true,
    },
    image: {
      type: String,
      required: true,
      default: "",
    },
    userType: {
      type: String,
      required: true,
      default: "email",
    },
    password: {
      type: String,
    },
    googleId: {
      type: String,
      default: "",
    },
    githubId: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
