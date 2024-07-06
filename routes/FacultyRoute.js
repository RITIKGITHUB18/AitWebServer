const express = require("express");
const router = express.Router();

const {
  getAllFacultyOrStaff,
} = require("../controllers/FacultyStaffController");

// ! *************** Router *************************
router.get("/get-all-faculty_staff", getAllFacultyOrStaff);

module.exports = router;
