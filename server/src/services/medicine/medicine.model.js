const mongoose = require("mongoose");
const {
  hashedPassword,
  validatePassword,
} = require("../../helpers/passwordController");

const MedicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 40,
    },
    company: {
      type: String,
      required: true,
      maxlength: 10,
    },
    geneticName: {
      type: String,
      required: true,
      maxlength: 100,
    },
    alternative: {
      type: Array,
      maxlength: 500,
    },
    price: {
      type: Number,
      maxlength: 5,
    },
    contraindication: {
      type: Number,
      maxlength: 500,
    },
    sideEffect: {
      type: Array,
      required: true,
    },
    warning: {
      type: String,
      require: true,
      maxlength: 1000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("medicine", MedicineSchema);
