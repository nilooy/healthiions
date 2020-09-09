const mongoose = require("mongoose");
const {
  hashedPassword,
  validatePassword,
} = require("../../helpers/passwordController");

const DiseaseSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      maxlength: 40,
    },
    birthDate: {
      type: String,
      required: true,
      maxlength: 10,
    },
    email: {
      type: String,
      required: true,
      maxlength: 100,
      unique: true,
    },
    address: {
      type: String,
      maxlength: 500,
    },
    city: {
      type: String,
      maxlength: 20,
    },
    tel: {
      type: Number,
      required: true,
      maxlength: 15,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      maxlength: 6,
    },
    bloodGroup: {
      type: String,
      required: true,
      maxlength: 4,
    },
    nidNumber: {
      type: String,
      required: true,
      maxlength: 20,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

DiseaseSchema.pre("save", hashedPassword);
DiseaseSchema.methods.validatePassword = validatePassword;

module.exports = mongoose.model("patient", DiseaseSchema);
