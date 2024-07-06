const mongoose = require("mongoose");

const placementDetail = new mongoose.Schema({
  years: {
    type: String,
    required: true,
  },
  studentRegistered: {
    type: String,
    required: true,
  },
  studentPlacedIn: {
    type: String,
    required: true,
  },
  studentPlacedInPercent: {
    type: String,
    required: true,
  },
  highestSalary: {
    type: String,
    required: true,
  },
  avgSalary: {
    type: String,
    required: true,
  },
  departId: {
    type: String,
    enum: ["ASGE", "IT", "COMP", "ENTC", "MECH", "ADMIN"],
    required: true,
  },
});

module.exports = mongoose.model("PlacementDetail", placementDetail);
