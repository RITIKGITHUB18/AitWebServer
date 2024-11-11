const express = require("express");
const router = express.Router();

const {
  getAllFacultyOrStaff,
} = require("../controllers/FacultyStaffController");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");

// ! *************** Router *************************
router.get("/get-all-faculty_staff", verifyhttpsMethod, getAllFacultyOrStaff);

module.exports = router;
