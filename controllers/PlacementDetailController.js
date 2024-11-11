const PlacementDetail = require("../models/placementDetail");

exports.GetAllPlacementDetail = async (req, res) => {
  try {
    const placementdetail = await PlacementDetail.find();

    return res.status(200).json({
      success: true,
      message: "Placement Detail fetched, Successully",
      data: placementdetail,
    });
  } catch (error) {
    console.log("An error ocurred during fetching the placement detail", error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while fetching the placement detail",
    });
  }
};
