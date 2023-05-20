const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../db/users");
const jwt = require("jsonwebtoken");

// login user
router.post("/", async function (req, res, next) {
  const data = req.body;
  const user = await Users.findOne({ phoneNumber: data.phoneNumber }).lean();
  if (!user) {
    return res.status(400).send("User does not exist");
  }
  const passwordCheck = bcrypt.compareSync(data.password, user.password);

  if (!passwordCheck) {
    return res.status(400).send("Invalid password");
  }

  delete user.password;
  const token = jwt.sign(
    {
      ...user,
    },
    "secret"
  );

  res.status(200).send({ token });
});

module.exports = router;
