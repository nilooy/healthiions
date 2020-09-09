// import Undraw from "react-undraw";
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Col,
  Row,
  Spin,
} from "antd";
import React, { useState } from "react";
import Undraw from "react-undraw";
import departments from "../../../data/departments";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";
const { Option } = Select;

const DoctorSignUp = () => {
  const [state, setState] = useState({
    success: false,
    loading: false,
  });

  const onFinish = (values) => {
    setState({
      success: false,
      loading: true,
    });
    values.birthDate = values.birthDate.format("L");

    axios
      .post("http://localhost:8000/api/doctor/create", { ...values })
      .then((res) => {
        if (!res.error && res.data._id)
          setTimeout(() => {
            setState({
              success: true,
              loading: false,
            });
          }, 2000);
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const redirectToSuccess = () => state.success && <Redirect to="/success" />;

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
            <div className="bg-gray-100 sm:w-10/12 w-11/12 h-auto m-auto p-5 shadow-2xl overflow-y-scroll h-full scrollbar-custom">
              <h1 className="text-3xl pb-3 text-blue-500">
                Doctor Registration
              </h1>

              <Form
                name="basic"
                layout="vertical"
                initialValues={{
                  bmdcNumber: 234,
                  confirm: "1",
                  department: "Internal Medicine Physician",
                  email: "mdrezwanferdous@gmail.com",
                  gender: "male",
                  name: "Md Rezwan Ferdous Niloy",
                  password: "1",
                  tel: "35254112545",
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
              >
                <Form.Item
                  label="Full Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your Full Name!" },
                  ]}
                >
                  <Input size={"large"} />
                </Form.Item>

                <Row gutter={16}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
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
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item label="Tel/Cell" name="tel">
                      <Input
                        type="number"
                        addonBefore="+880"
                        style={{ width: "100%" }}
                        size={"large"}
                      />
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item
                  label="Department"
                  name="department"
                  rules={[
                    {
                      required: true,
                      message: "Please select your Department!",
                    },
                  ]}
                >
                  <Select
                    showSearch
                    style={{ width: "100%" }}
                    size="large"
                    placeholder="Select your Department"
                    optionFilterProp="children"
                  >
                    {departments.map((item, index) => (
                      <Option key={index} value={item}>
                        {item}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>

                <Form.Item
                  label="BMDC Number"
                  name="bmdcNumber"
                  rules={[
                    {
                      required: true,
                      message: "Please enter your BMDC Number!",
                    },
                  ]}
                >
                  <InputNumber style={{ width: "100%" }} size="large" />
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

                <Form.Item
                  name="confirm"
                  label="Confirm Password"
                  dependencies={["password"]}
                  hasFeedback
                  rules={[
                    {
                      required: true,
                      message: "Please confirm your password!",
                    },
                    ({ getFieldValue }) => ({
                      validator(rule, value) {
                        if (!value || getFieldValue("password") === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(
                          "The two passwords that you entered do not match!"
                        );
                      },
                    }),
                  ]}
                >
                  <Input.Password style={{ width: "100%" }} size="large" />
                </Form.Item>

                <Row gutter={16}>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item
                      label="Birth Date"
                      name="birthDate"
                      rules={[
                        {
                          required: true,
                          message: "Please enter your Birth Date!",
                        },
                      ]}
                    >
                      <DatePicker
                        format={"DD/MM/YYYY"}
                        style={{ width: "100%" }}
                        size={"large"}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={24} md={24} lg={12} xl={12}>
                    <Form.Item
                      label="Gender"
                      name="gender"
                      rules={[
                        {
                          required: true,
                          message: "Please select your Gender!",
                        },
                      ]}
                    >
                      <Radio.Group>
                        <Radio value={"male"}>Male</Radio>
                        <Radio value={"female"}>Female</Radio>
                        <Radio value={"others"}>Others</Radio>
                      </Radio.Group>
                    </Form.Item>
                  </Col>
                </Row>

                <Form.Item>
                  <Button type="primary" htmlType="submit">
                    Register
                  </Button>
                </Form.Item>
              </Form>

              <p className="text-2xl mx-auto">
                Already have an account{" "}
                <Link to="/auth/signin/doctor" className="text-blue-500">
                  Sign In
                </Link>
              </p>
            </div>
          </div>
        </div>
      </Spin>
    </div>
  );
};

export default DoctorSignUp;
