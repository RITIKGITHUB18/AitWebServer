const express = require("express");
const router = express.Router();

const {
  GetAllEmagazine,
} = require("../controllers/EmagazineController");

// ! *************** Router *************************
router.get("/get-all-emagazine", GetAllEmagazine);

module.exports = router;
