const mongoose = require("mongoose");

const departmentNotice = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  departId: {
    type: String,
    enum: ["ASGE", "IT", "COMP", "ENTC", "MECH", "ADMIN"],
    required: true,
  },
  category: {
    type: String,
    enum: ["Notice", "Tender", "Events"],
    required: true,
  }
});

module.exports = mongoose.model("DepartNotice", departmentNotice);
