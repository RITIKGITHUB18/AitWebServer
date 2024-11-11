const express = require("express");
const router = express.Router();

const { GetAllSyllabus } = require("../controllers/SyllabusController");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");

// ! *************** Router *************************
router.get("/get-all-syllabus", verifyhttpsMethod, GetAllSyllabus);
module.exports = router;
