const mongoose = require("mongoose");
const UserModel = require("../user/user.model");
//=================================================>
// Extended UserModel by mongoose discriminator
//=================================================>

const PatientSchema = new mongoose.Schema({
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
  address: {
    type: String,
    maxlength: 500,
  },
  city: {
    type: String,
    maxlength: 20,
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
  photo: {
    type: String,
  },
});

module.exports = UserModel.discriminator("patient", PatientSchema);
