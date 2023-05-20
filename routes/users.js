const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const Users = require("../db/users");
const salt = bcrypt.genSaltSync(10);

/* GET users. */
router.get("/", async function (req, res, next) {
  const users = await Users.find({});
  res.send(users);
});

// create a user
router.post("/", async function (req, res, next) {
  const data = req.body;
  const hashPassword = bcrypt.hashSync(data.password, salt);
  try {
    await Users.create({ ...data, password: hashPassword });
  } catch (e) {
    return res.send({ ok: false, error: e });
  }
  res.send({ ok: true });
});

module.exports = router;
