const express = require("express");
const Vehicles = require("../db/vehicles");
const isAuthenticated = require("../middlewares");
const router = express.Router();

/* GET all vehicles. */
router.get("/", isAuthenticated, async function (req, res, next) {
  const vehicles = await Vehicles.find({});
  res.send(vehicles);
});

// create a vehicle
router.post("/", isAuthenticated, async function (req, res, next) {
  const data = req.body;
  try {
    await Vehicles.create({ userID: req.user._id, ...data });
  } catch (e) {
    return res.send({ ok: false, error: e });
  }
  res.send({ ok: true });
});

module.exports = router;
