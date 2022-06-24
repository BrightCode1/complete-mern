require("dotenv").config();
const express = require("express");
const passport = require("passport");
const cors = require("cors");
const session = require("express-session");

const paths = require("./config/constants");
const connectMongoDB = require("./config/dbConnect");
const { errorHandler } = require("./handler/errorHandler");

require("./handler/passportHandler");

const app = express();

const PORT = process.env.PORT || 5000;

connectMongoDB();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,PUT,POST,DELETE",
  })
);
app.use(
  session({
    secret: "mysec",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(paths.auth, require("./routes/authRoute"));
app.use(paths.user, require("./routes/userRoute"));

app.use(errorHandler);

app.listen(PORT, () => console.log(`server started on Port: ${PORT}`));
