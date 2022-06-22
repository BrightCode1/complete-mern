const express = require("express");
const asyncHandler = require("express-async-handler");

const { getUser } = require("../controllers/userController");
const { authorizedUser } = require("../handler/authHandler");

const router = express.Router();

router.get("/", authorizedUser, getUser);

module.exports = router;
