const mongoose = require("mongoose");
const {
  hashedPassword,
  validatePassword,
} = require("../../helpers/passwordController");

const PrescriptionSchema = new mongoose.Schema(
  {
    syrup: {
      type: String,
      maxlength: 200,
    },
    labTest: {
      type: String,
      maxlength: 100,
    },

    symptoms: {
      type: String,
      required: true,
      maxlength: 500,
    },

    advice: {
      type: String,
      required: true,
      maxlength: 2000,
      unique: true,
    },
    nextVisitDate: {
      type: String,
      maxlength: 10,
    },
  },
  { timestamps: true }
);

PrescriptionSchema.pre("save", hashedPassword);
PrescriptionSchema.methods.validatePassword = validatePassword;

module.exports = mongoose.model("patient", PrescriptionSchema);
