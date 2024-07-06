const StudentRoll = require("../models/StudentRoll");

exports.GetAllStudentRollDetail = async (req, res) => {
  try {
    const student = await StudentRoll.find();

    return res.status(200).json({
      success: true,
      message: "student roll fetched, Successully",
      data: student,
    });
  } catch (error) {
    console.log("An error ocurred during fetching the student roll", error);
    return res.status(500).json({
      success: false,
      message: "something went wrong while fetching the student roll",
    });
  }
};
