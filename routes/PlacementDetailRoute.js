const express = require("express");
const router = express.Router();

const {
  GetAllPlacementDetail,
} = require("../controllers/PlacementDetailController");

// ! *************** Router *************************
router.get("/get-all-placement-detail", GetAllPlacementDetail);

module.exports = router;
