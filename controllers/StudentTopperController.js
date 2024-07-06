const StudentTopper = require("../models/StudentTopper");

exports.GetAllTopper = async (req, res) => {
  try {
    const topperList = await StudentTopper.find();

    return res.status(200).json({
      success: true,
      message: "Topper list fetched, Successully",
      data: topperList,
    });
  } catch (error) {
    console.log("An error ocurred during fetching the student topper", error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while fetching the student topper",
    });
  }
};