const express = require("express");
const router = express.Router();
const Users = require("../db/users");
const Vehicles = require("../db/vehicles");

/* GET home page. */
router.get("/", async function (req, res, next) {
  const users = await Users.find({});
  const vehicles = await Vehicles.find({});

  res.send({ users, vehicles });
});

module.exports = router;
