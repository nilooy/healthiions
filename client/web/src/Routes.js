import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Patients from "./pages/Patients";
import SinglePatient from "./pages/SinglePatient";
import Profile from "./pages/Profile";
import Authentication from "./pages/Authentication";
import Prescriptions from "./pages/Prescriptions";
import Medicine from "./pages/Medicine";
import Success from "./pages/Success";
import EntryPoint from "./pages/EntryPoint";

const routes = [
  {
    layout: App,
    subRoutes: [
      {
        path: "/dashboard",
        exact: true,
        component: Dashboard,
      },

      {
        path: "/profile",
        component: Profile,
      },
      {
        path: "/patients",
        component: Patients,
      },
      {
        path: "/patient/:id",
        component: SinglePatient,
      },
      {
        path: "/prescriptions",
        component: Prescriptions,
      },
      {
        path: "/medicine",
        component: Medicine,
      },
    ],
  },
  {
    layout: Fragment,
    subRoutes: [
      {
        path: "/",
        exact: true,
        component: EntryPoint,
      },

      {
        path: "/auth/:type/:role",
        exact: true,
        component: Authentication,
      },
      {
        path: "/success",
        component: Success,
      },
    ],
  },
];

const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map((route, i) => (
          <Route
            key={i}
            exact={route.subRoutes.some((r) => r.exact)}
            path={route.subRoutes.map((r) => r.path)}
          >
            <route.layout>
              {route.subRoutes.map((subRoute, i) => (
                <Route key={i} {...subRoute} />
              ))}
            </route.layout>
          </Route>
        ))}
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
};

export default Routes;
