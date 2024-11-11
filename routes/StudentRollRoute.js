const express = require("express");
const router = express.Router();

const { GetAllStudentRollDetail } = require("../controllers/StudentRoll");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");

// ! *************** Router *************************
router.get("/get-all-student-roll", verifyhttpsMethod, GetAllStudentRollDetail);

module.exports = router;
