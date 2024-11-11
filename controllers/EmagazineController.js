const EMagazine = require("../models/Emagazine");

exports.GetAllEmagazine = async (req, res) => {
  try {
    const allEmagazine = await EMagazine.find();

    if (!allEmagazine) {
      return res.status(200).json({
        success: true,
        message: "No magazine is available",
        data: "Emagazine is not available",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All magazine is fetched successfully",
      data: allEmagazine,
    });
  } catch (error) {
    console.log("Error occured during getting all the Emagazine", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while Geting all the emagazine",
    });
  }
};