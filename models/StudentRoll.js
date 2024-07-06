const mongoose = require("mongoose");

const studentRoll = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rollNo: {
    type: String,
    required: true,
  },
  councellor: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  departId: {
    type: String,
    enum: ["ASGE", "IT", "COMP", "ENTC", "MECH", "ADMIN"],
    required: true,
  },
});

module.exports = mongoose.model("StudentRoll", studentRoll);
