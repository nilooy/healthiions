const mongoose = require("mongoose");
const UserModel = require("../user/user.model");

const DoctorSchema = new mongoose.Schema(
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
      maxlength: 15,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
      maxlength: 6,
    },
    password: {
      type: String,
      require: true,
    },
    bmdcNumber: {
      type: String,
      required: true,
      maxlength: 20,
      unique: true,
    },
    photo: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = UserModel.discriminator("doctor", DoctorSchema);
