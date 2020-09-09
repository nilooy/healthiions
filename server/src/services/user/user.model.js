const mongoose = require("mongoose");
const {
  hashedPassword,
  validatePassword,
} = require("../../helpers/passwordController");

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      maxlength: 100,
      unique: true,
    },
    tel: {
      type: Number,
      required: true,
      maxlength: 15,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
    discriminatorKey: "userType",
    id: false,
  }
);

UserSchema.pre("save", hashedPassword);
UserSchema.methods.validatePassword = validatePassword;

module.exports = mongoose.model("user", UserSchema);
