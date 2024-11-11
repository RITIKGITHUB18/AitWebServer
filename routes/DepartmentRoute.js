const express = require("express");
const router = express.Router();

const { getAllNotice } = require("../controllers/DepartNoticeController");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");

// ! *************** Router *************************
router.get("/get-all-notices", verifyhttpsMethod, getAllNotice);

module.exports = router;
