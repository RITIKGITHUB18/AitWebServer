const express = require("express");
const router = express.Router();

const { GetAllTopper } = require("../controllers/StudentTopperController");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");

// ! *************** Router *************************
router.get("/get-all-student-topper", verifyhttpsMethod, GetAllTopper);

module.exports = router;
