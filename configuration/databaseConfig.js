const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("Db Connected Successfully"))
    .catch((error) => {
      console.log("Db Connection failed");
      console.log(error);
      process.exit(1);
    });
};
