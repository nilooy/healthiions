const jwt = require("jsonwebtoken");
module.exports = {
  signToken: (user) => {
    return jwt.sign(
      {
        iss: "Healthiions",
        sub: user._id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate() + 1),
      },
      process.env.JWT_SECRET
    );
  },

  getUserModel: (role) => {
    let userModel;

    switch (role) {
      case "doctor":
        userModel = require("../doctor/doctor.model");
        break;
      case "patient":
        userModel = require("../patient/patient.model");
        break;
      default:
        userModel = undefined;
    }

    return userModel;
  },
};
