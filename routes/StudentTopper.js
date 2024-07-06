const express = require("express");
const router = express.Router();

const {
  GetAllTopper,
} = require("../controllers/StudentTopperController");

// ! *************** Router *************************
router.get("/get-all-student-topper", GetAllTopper);

module.exports = router;
