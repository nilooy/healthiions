const JwtStrategy = require("passport-jwt").Strategy;
const { ExtractJwt } = require("passport-jwt");
const LocalStrategy = require("passport-local").Strategy;
const UserModel = require("../user/user.model");
require("dotenv").config();

module.exports = {
  // JSON WEB TOKENS STRATEGY
  jwt: () => {
    return new JwtStrategy(
      {
        jwtFromRequest: ExtractJwt.fromHeader("authorization"),
        secretOrKey: process.env.JWT_SECRET,
        passReqToCallback: true,
      },
      async (req, payload, done) => {
        try {
          // Find the user specified in token
          const user = await UserModel.findById(payload.sub);

          // If user doesn't exists, handle it
          if (!user)
            return done(null, false, { message: "User doesn't exist" });

          // Otherwise, return the user
          return done(null, user);
        } catch (error) {
          return done(null, false, {
            message: "Something is wrong! Report Bug",
          });
        }
      }
    );
  },

  // LOCAL STRATEGY
  local: () => {
    return new LocalStrategy(
      {
        usernameField: "email",
        passReqToCallback: true,
      },
      async (req, email, password, done) => {
        try {
          // Find the user given the email
          const user = await UserModel.findOne({ email });
          // If not, handle it
          if (!user)
            return done(null, false, { message: "User doesn't exist" });

          // Check if the password is correct
          const isMatch = await user.validatePassword(password);

          // If not, handle it
          if (!isMatch)
            return done(null, false, { message: "Incorrect password." });

          // Otherwise, return the user
          done(null, user);
        } catch (error) {
          done(error, false);
        }
      }
    );
  },
};
