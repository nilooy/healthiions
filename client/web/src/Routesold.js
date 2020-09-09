import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Dashboard from "./pages/Dashboard";
import Error from "./pages/Error";
import Patients from "./pages/Patients";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
const Routes = () => {
  return (
    <Router>
      <Switch>
        <App>
          <Route exact path="/signup">
            <SignUp />
          </Route>

          <Route exact path="/">
            <Dashboard />
          </Route>
          <Route path="/patients">
            <Patients />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </App>
      </Switch>
    </Router>
  );
};

export default Routes;
