const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const db = require("./db");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const vehicleRouter = require("./routes/vehicle");
const authRouter = require("./routes/auth");

const app = express();
db();

// view engine setup

app.use(logger("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/", indexRouter);
app.use("/api/users", usersRouter);
app.use("/api/vehicles", vehicleRouter);
app.use("/api/auth", authRouter);

module.exports = app;
