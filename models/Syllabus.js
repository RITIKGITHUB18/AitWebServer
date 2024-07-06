const mongoose = require("mongoose");

const syllabus = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
  departId: {
    type: String,
    enum: ["ASGE", "IT", "COMP", "ENTC", "MECH", "ADMIN"],
    required: true,
  },
});

module.exports = mongoose.model("Syllabus", syllabus);
