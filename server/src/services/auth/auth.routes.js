const passport = require("passport");
const AuthRouter = require("express").Router();
const AuthController = require("./auth.controller");
const { passportLocal, passportJwt } = require("./auth.controller");
const { local, jwt } = require("./auth.passport");

//=================================================>
// Routes URL
//=================================================>
const signinRoute = "/signin/:role";
const secretRoute = "/secret/:role";
// const {}

//=================================================>
// Passport :: Middleware
//=================================================>
passport.use(local());
passport.use(jwt());

//=================================================>
// Sign In :: POST
//=================================================>
AuthRouter.post(signinRoute, passportLocal, AuthController.signin);

//=================================================>
// Secret :: POST
//=================================================>
AuthRouter.get(secretRoute, passportJwt, AuthController.secret);

module.exports = AuthRouter;
