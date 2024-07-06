const mongoose = require("mongoose");

const studentTopper = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  cgpa: {
    type: String,
    required: true,
  },
  rank: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
    enum: ["FE", "SE", "TE", "BE"],
  },
  departId: {
    type: String,
    enum: ["ASGE", "IT", "COMP", "ENTC", "MECH", "ADMIN"],
    required: true,
  },
});

module.exports = mongoose.model("StudentTopper", studentTopper);
