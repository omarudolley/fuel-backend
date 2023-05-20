const jwt = require("jsonwebtoken");

function isAuthenticated(req, res, next) {
  const token = req.get("x-token");
  let decoded;
  try {
    decoded = jwt.verify(token, "secret");
  } catch (e) {
    return res.status(400).send("Invalid credentials");
  }
  req.user = decoded;
  next();
}

module.exports = isAuthenticated;
