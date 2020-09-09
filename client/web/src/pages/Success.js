import React from "react";
import { Result, Button } from "antd";
import Undraw from "react-undraw";

const Success = () => {
  return (
    <div className="flex flex-col w-full h-screen">
      <Result
        style={{ margin: "auto" }}
        status="success"
        icon={<Undraw name="doctor" height="350px" primaryColor="#0f62fe" />}
        title="Congrats !! You have been registered successfully ! the BMDC verification process might take 48 hours"
        subTitle="We will go through your application manually and verify your BMDC number"
        extra={[
          <Button type="primary" key="console" disabled={true}>
            Contact us
          </Button>,
          <Button key="buy" disabled={true}>
            Sign in
          </Button>,
        ]}
      />
      ;
    </div>
  );
};

export default Success;
