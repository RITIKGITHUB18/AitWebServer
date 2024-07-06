const mongoose = require("mongoose");

const emagazineSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  pdf: {
    type: String,
    required: true,
  },
  cover: {
    type: String,
    required: true,
  },
  departId: {
    type: String,
    enum: ["ASGE", "IT", "COMP", "ENTC", "MECH", "ADMIN"],
  },
});

module.exports = mongoose.model("EMagazine", emagazineSchema);
