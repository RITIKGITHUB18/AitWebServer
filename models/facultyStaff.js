const mongoose = require("mongoose");

const facultyStaff = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  designation: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["faculty", "staff"],
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  departId: {
    type: String,
    enum: ["ASGE", "IT", "COMP", "ENTC", "MECH", "ADMIN"],
    required: true,
  },
  emailId: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
    default: "Email",
  },
  img: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("FacultyOrStaff", facultyStaff);
