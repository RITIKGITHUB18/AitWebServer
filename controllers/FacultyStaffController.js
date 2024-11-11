const FacultyOrStaff = require("../models/FacultyStaff");

exports.getAllFacultyOrStaff = async (req, res) => {
  try {
    const getAllFacultyOrStaff = await FacultyOrStaff.find();

    if (!getAllFacultyOrStaff) {
      return res.status(401).json({
        success: false,
        message: "Data is not present",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data fetched successfully",
      data: getAllFacultyOrStaff,
    });
  } catch (error) {
    console.log(
      "Error occured during fetching the faculty or staff profile",
      error
    );
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the faculty or staff data",
    });
  }
};