// import Undraw from "react-undraw";
import { Button, Form, Input, Spin, Checkbox } from "antd";
import React, { useState } from "react";
import Undraw from "react-undraw";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

const PatientSignIn = () => {
  const [state, setState] = useState({
    success: false,
    loading: false,
  });

  const onFinish = (values) => {
    console.log(values);
    setState({
      success: false,
      loading: true,
    });

    axios
      .post("http://localhost:8000/api/signin/patient", { ...values })
      .then((res) => {
        authenticate(res, () => {
          setTimeout(() => {
            setState({
              success: true,
              loading: false,
            });
          }, 1000);
        });
      });
  };

  const authenticate = (data, next) => {
    if (typeof window != "undefined") {
      localStorage.setItem("jwt", JSON.stringify(data));
      next();
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const redirectToSuccess = () => state.success && <Redirect to="/dashboard" />;

  return (
    <div aria-label="SignUp">
      <Spin
        spinning={state.loading}
        tip="Just a little patience please! You are being registered to the system..."
        size="large"
      >
        {redirectToSuccess()}

        <div className="flex h-screen flex-col sm:flex-row ">
          <div className="bg-gray-200 sm:w-2/4 sm:flex hidden flex-col">
            <h1 className="md:text-6xl text-5xl m-auto">Healthiions</h1>
            <Undraw name="medicine" height="550px" primaryColor="#0f62fe" />;
          </div>
          <div className="bg-teal-600 sm:w-2/4 w-full flex bg-blue-carbon flex-1 blue-grad p-6 overflow-y-hidden">
            <div className="bg-gray-100 sm:w-10/12 w-11/12 h-auto m-auto p-5 shadow-2xl overflow-y-scroll h-full scrollbar-custom  flex flex-col justify-center">
              <h1 className="text-blue-500 md:text-6xl text-5xl m-auto ">
                Patient Sign In
              </h1>
              <Form
                name="basic"
                layout="vertical"
                initialValues={{
                  email: "mdrezwanferdous@gmail.com",
                  password: "1",
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: "Please enter a email address",
                    },
                    {
                      type: "email",
                      message: "Please enter a valid email address",
                    },
                  ]}
                >
                  <Input size={"large"} />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: "Please create your Password!" },
                  ]}
                >
                  <Input.Password style={{ width: "100%" }} size="large" />
                </Form.Item>

                <Form.Item name="remember" valuePropName="checked">
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item>
                  <Button size="large" type="primary" htmlType="submit">
                    Sign In
                  </Button>
                </Form.Item>
              </Form>
              <Undraw name="welcome" height="200px" primaryColor="#0f62fe" />;
              <p className="text-3xl mx-auto">
                Don't have an account!{" "}
                <Link to="/auth/signup/patient" className="text-blue-500">
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default PatientSignIn;
