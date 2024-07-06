const mongoose = require("mongoose");

const department = new mongoose.Schema({
  departName: {
    type: String,
    required: true,
  },
  departNotice: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "DepartNotice",
    },
  ],
  StudentsRoll: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentRoll",
    },
  ],
  syllabus: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Syllabus",
    },
  ],
  studentTopper: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StudentTopper",
    },
  ],
  emagazine: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "EMagazine",
    },
  ],
  placementDetail: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "PlacementDetail",
    },
  ],
  faculty: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FacultyOrStaff",
    },
  ],
});

module.exports = mongoose.model("Department", department);
