const Syllabus = require("../models/Syllabus");

exports.GetAllSyllabus = async (req, res) => {
  try {
    const allSyllabus = await Syllabus.find();

    if (!allSyllabus) {
      return res.status(200).json({
        success: true,
        message: "No syllabus is available",
        data: "Syllabus is not available",
      });
    }

    return res.status(200).json({
      success: true,
      message: "All Syllabus is fetched successfully",
      data: allSyllabus,
    });
  } catch (error) {
    console.log("Error occured during getting all the syllabus", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while Geting all the syllabus",
    });
  }
};
