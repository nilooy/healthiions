import React from "react";
import { Link } from "react-router-dom";

const EntryPoint = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <div className="flex w-full" style={{ height: "50vh" }}>
        <div
          className="flex w-2/4  pr-16 pb-16 cursor-pointer"
          style={{ background: "#0ef2e9" }}
        >
          <Link
            to="/auth/signin/doctor"
            className=" flex w-full h-full bg-white hover:bg-gray-300"
          >
            <h1 className="m-auto text-6xl p-10">Doctor</h1>
          </Link>
        </div>
        <div
          className="flex w-2/4  pl-16 pb-16 cursor-pointer"
          style={{ background: "#0ef2e9" }}
        >
          <Link
            to="/auth/signin/patient"
            className="flex w-full h-full bg-white hover:bg-gray-300"
          >
            <h1 className="m-auto text-6xl p-10">Patient</h1>
          </Link>
        </div>
      </div>

      <div className="flex w-full" style={{ height: "50vh" }}>
        <div
          className="flex w-2/4  pr-16 pt-16 cursor-pointer "
          style={{ background: "#0ef2e9" }}
        >
          <Link
            to="/auth/signin/patient"
            className="flex w-full h-full bg-white hover:bg-gray-300 pointer-events-none"
          >
            <h1 className="m-auto text-6xl p-10">Hospital</h1>
          </Link>
        </div>
        <div
          className="flex w-2/4  pl-16 pt-16 cursor-pointer"
          style={{ background: "#0ef2e9" }}
        >
          <Link
            to="/auth/signin/patient"
            className="flex w-full h-full bg-white hover:bg-gray-300 pointer-events-none"
          >
            <h1 className="m-auto text-6xl p-10">Diagonostic Center</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EntryPoint;
