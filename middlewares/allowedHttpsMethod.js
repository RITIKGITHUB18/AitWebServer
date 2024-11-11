exports.verifyhttpsMethod = async (req, res, next) => {
  try {
    const allowedMethods = ["GET"];

    if (!allowedMethods.includes(req.method)) {
      return res.status(405).send("Method Not Allowed");
    }
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Something went wrong while validating the methods",
    });
  }
};
