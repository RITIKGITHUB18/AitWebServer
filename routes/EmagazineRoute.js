const express = require("express");
const router = express.Router();

const { GetAllEmagazine } = require("../controllers/EmagazineController");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");

// ! *************** Router *************************
router.get("/get-all-emagazine", verifyhttpsMethod, GetAllEmagazine);

module.exports = router;
