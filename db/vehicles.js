const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema(
  {
    _id: {},
    userID: {
      type: mongoose.ObjectId,
    },
    plateCode: {
      type: Number,
    },
    plateRegion: {
      type: String,
    },
    plateNumber: {
      type: Number,
    },
    fuelType: {
      type: String,
      enum: ["Regular", "Gasoline"],
      default: "Regular",
    },
    status: {
      type: String,
      enum: ["active", "disabled"],
      default: "active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Vehicles", vehicleSchema);
