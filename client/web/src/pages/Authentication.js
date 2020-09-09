import React from "react";
import { DoctorSignUp, PatientSignUp } from "../components/ui/SignUp";
import { DoctorSignIn, PatientSignIn } from "../components/ui/SignIn";
import { Redirect, useParams } from "react-router-dom";

const SignUp = () => {
  let { type, role } = useParams();

  switch (type) {
    case "signin":
      switch (role) {
        case "doctor":
          return <DoctorSignIn />;
        case "patient":
          return <PatientSignIn />;
      }

    case "signup":
      switch (role) {
        case "doctor":
          return <DoctorSignUp />;
        case "patient":
          return <PatientSignUp />;
      }

    default:
      return <Redirect to="404" />;
  }
};

export default SignUp;
