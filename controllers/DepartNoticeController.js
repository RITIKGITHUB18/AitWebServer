const DepartNotice = require("../models/departmentNotice");

exports.getAllNotice = async (req, res) => {
  try {
    const allNotice = await DepartNotice.find({});
    return res.status(200).json({
      success: true,
      data: allNotice,
    });
  } catch (error) {
    console.log("Error occured during geting all notices", error);
    return res.status(500).json({
      success: false,
      message: "Some error occured during fetching all notices",
    });
  }
};
