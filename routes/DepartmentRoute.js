const express = require("express");
const router = express.Router();

const {
  getAllNotice,
} = require("../controllers/DepartNoticeController");

// ! *************** Router *************************
router.get("/get-all-notices", getAllNotice);

module.exports = router;
