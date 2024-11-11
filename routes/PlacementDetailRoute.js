const express = require("express");
const router = express.Router();

const {
  GetAllPlacementDetail,
} = require("../controllers/PlacementDetailController");
const { verifyhttpsMethod } = require("../middlewares/allowedHttpsMethod");

// ! *************** Router *************************
router.get(
  "/get-all-placement-detail",
  verifyhttpsMethod,
  GetAllPlacementDetail
);

module.exports = router;
