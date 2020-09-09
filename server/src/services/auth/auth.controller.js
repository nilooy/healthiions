const { signToken } = require("./auth.helper");
const passport = require("passport");

const AuthController = {
  signin: async (req, res) => {
    const token = await signToken(req.user);
    const { userType, _id } = req.user;
    // Just kidding,
    if (userType !== req.params.role)
      return res.status(401).json({
        message: "Access Denied",
      });
    res.status(200).json({
      t: token,
      user: {
        userType,
        _id,
      },
    });
  },

  secret: async (req, res) => {
    try {
      res.json({ secret: "resource" });
    } catch (error) {
      res.status(403).json({
        error: "Access Denied",
      });
    }
  },

  passportJwt: (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user, info) => {
      if (err) return next(info);

      if (!user) return res.status(400).json(info);

      req.logIn(user, { session: false }, function (err) {
        if (err) return next(info);

        next();
      });
    })(req, res, next);
  },

  passportLocal: (req, res, next) => {
    passport.authenticate("local", { session: false }, (err, user, info) => {
      if (err) return next(err);

      if (!user) return res.status(400).json(info);

      req.logIn(user, { session: false }, function (err) {
        if (err) return next(err);

        next();
      });
    })(req, res, next);
  },
};

module.exports = AuthController;
