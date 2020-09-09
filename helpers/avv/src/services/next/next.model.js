const mongoose = require("mongoose");

const NextSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 40,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("next", NextSchema);
