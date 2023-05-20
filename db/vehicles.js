const mongoose = require("mongoose");

const vehicleSchema = mongoose.Schema(
  {
    userID: {
      type: mongoose.ObjectId,
    },
    plateCode: {
      type: Number,
      require: true,
    },
    plateRegion: {
      type: String,
      require: true,
    },
    plateNumber: {
      type: Number,
      require: true,
    },
    fuelType: {
      type: String,
      enum: ["Regular", "Gasoline"],
      default: "Regular",
    },
    vehicleType: {
      type: String,
    },
    vehicleModel: {
      type: String,
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
