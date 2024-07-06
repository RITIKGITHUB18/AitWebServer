const express = require("express");
const router = express.Router();

const {
  GetAllStudentRollDetail,
} = require("../controllers/StudentRoll");

// ! *************** Router *************************
router.get("/get-all-student-roll", GetAllStudentRollDetail);

module.exports = router;
