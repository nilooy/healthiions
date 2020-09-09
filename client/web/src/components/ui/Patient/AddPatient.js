import React, { useState, useRef } from "react";
import {
  Drawer,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  notification,
  Radio,
  InputNumber,
  DatePicker,
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import Undraw from "react-undraw";
import axios from "axios";
import bloodGroups from "../../../data/bloodGroups";
const { Option } = Select;

const AddPatient = (props) => {
  const [state, setState] = useState({
    visible: false,
    success: false,
    loading: false,
  });

  const [form] = Form.useForm();

  const showDrawer = () => {
    setState({
      ...state,
      visible: true,
    });
  };

  const onClose = () => {
    setState({
      ...state,
      visible: false,
    });
  };

  const onSubmit = () => {
    setState({
      ...state,
      loading: true,
    });
    form.submit();
  };

  const resetForm = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    values.birthDate = values.birthDate.format("L");
    axios
      .post("http://localhost:8000/api/patient/create", { ...values })
      .then((res) => {
        setState({
          ...state,
          success: true,
          loading: false,
        });

        resetForm();
        onClose();

        notification.success({
          message: `${res.data.name} added successfully`,
          placement: "bottomCenter",
        });

        props.reloadListTest();
      })
      .catch((err) => {
        setState({
          ...state,
          success: false,
          loading: false,
        });
      });
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <>
      <Button size="large" type="primary" onClick={showDrawer}>
        <PlusOutlined /> Register Patient
      </Button>
      <Drawer
        title="Register a new patient"
        width={720}
        onClose={onClose}
        visible={state.visible}
        bodyStyle={{ paddingBottom: 80 }}
        footer={
          <div
            style={{
              textAlign: "right",
            }}
          >
            <Button onClick={onClose} style={{ marginRight: 8 }}>
              Cancel
            </Button>
            <Button onClick={onSubmit} type="primary" loading={state.loading}>
              Submit
            </Button>
          </div>
        }
      >
        <Undraw name="add-user" height="150px" primaryColor="#0f62fe" />

        <Form
          name="basic"
          layout="vertical"
          initialValues={{
            nidNumber: 234,
            confirm: "1",
            bloodGroup: "A+",
            email: "mdrezwanferdous@gmail.com",
            gender: "male",
            name: "Md Rezwan Ferdous Niloy",
            password: "1",
            tel: "35254112545",
          }}
          onFinish={onFinish}
          form={form}
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
            label="Blood Group"
            name="bloodGroup"
            rules={[
              {
                required: true,
                message: "Please select your Blood Group!",
              },
            ]}
          >
            <Select
              showSearch
              style={{ width: "100%" }}
              size="large"
              placeholder="Select your Blood Group"
              optionFilterProp="children"
            >
              {bloodGroups.map((item, index) => (
                <Option key={index} value={item}>
                  {item}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="NID Number"
            name="nidNumber"
            rules={[
              {
                required: true,
                message: "Please enter your NID Number!",
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
      </Drawer>
    </>
  );
};

export default AddPatient;
