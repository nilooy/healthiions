const PatientsRouter = require("./src/services/patient/");
const DoctorRouter = require("./src/services/doctor/");
const AuthRouter = require("./src/services/auth/");
const MedicineRouter = require("./src/services/medicine");

const useRoutes = (app) => {
  const apiInitPath = process.env.API_INIT_PATH;
  //=================================================>
  // Here goes all the routes entry
  //=================================================>

  app.use(apiInitPath, PatientsRouter);
  app.use(apiInitPath, DoctorRouter);
  app.use(apiInitPath, AuthRouter);
  app.use(apiInitPath, MedicineRouter);

  var route,
    routes = [];

  app._router.stack.forEach(function (middleware) {
    if (middleware.route) {
      // routes registered directly on the app
      routes.push(middleware.route);
    } else if (middleware.name === "router") {
      // router middleware
      middleware.handle.stack.forEach(function (handler) {
        route = handler.route;
        route && routes.push(route);
      });
    }
  });

  console.log(routes);
};

module.exports = useRoutes;
