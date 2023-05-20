const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.SECRET;

function isAuthenticated(req, res, next) {
  const token = req.get("x-token");
  let decoded;
  try {
    decoded = jwt.verify(token, secret);
  } catch (e) {
    return res.status(400).send("Invalid credentials");
  }
  req.user = decoded;
  next();
}

module.exports = isAuthenticated;
