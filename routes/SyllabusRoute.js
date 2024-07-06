const express = require("express");
const router = express.Router();

const {
  GetAllSyllabus,
} = require("../controllers/SyllabusController");

// ! *************** Router *************************
router.get("/get-all-syllabus", GetAllSyllabus);
module.exports = router;
