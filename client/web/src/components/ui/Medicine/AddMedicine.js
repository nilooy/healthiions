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
} from "antd";
import { PlusOutlined } from "@ant-design/icons";
import TextArea from "antd/lib/input/TextArea";
import Undraw from "react-undraw";
import axios from "axios";

const { Option } = Select;

const AddMedicine = (props) => {
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
    axios
      .post("http://localhost:8000/api/medicine/create", { ...values })
      .then((res) => {
        setState({
          ...state,
          success: true,
          loading: false,
        });

        resetForm();

        notification.success({
          message: `${res.data.name} added successfully`,
          placement: "topLeft",
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
        <PlusOutlined /> Add Medicine
      </Button>
      <Drawer
        title="Create a new medicine"
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
        <Undraw name="building-blocks" height="250px" primaryColor="#0f62fe" />
        <Form
          form={form}
          layout="vertical"
          hideRequiredMark
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                label="Medicine name"
                name="name"
                rules={[
                  {
                    required: true,
                    message: "Please enter medicine name",
                  },
                ]}
              >
                <Input placeholder="Medicine name" size={"large"} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                label="Company Name"
                name="company"
                rules={[
                  {
                    required: true,
                    message: "Please enter company name",
                  },
                ]}
              >
                <Input placeholder="Company or Brand Name" size={"large"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                label="Genetic name"
                name="geneticName"
                rules={[
                  {
                    required: true,
                    message: "Please enter genetic name",
                  },
                ]}
              >
                <Input placeholder="Genetic name" size={"large"} />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                name="alternative"
                label="Alternative Medicine"
                rules={[
                  {
                    type: "array",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Please select alternative medicines"
                  size="large"
                >
                  <Option value="1">Medicine 1</Option>
                  <Option value="2">Medicine 2</Option>
                  <Option value="3">Medicine 3</Option>
                  <Option value="4">Medicine 4</Option>
                  <Option value="5">Medicine 5</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item label="Price" name="price">
                <Input
                  type="number"
                  addonBefore="&#2547;"
                  style={{ width: "100%" }}
                  size={"large"}
                />
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item label="Contraindication" name="contraindication">
                <Input type="number" style={{ width: "100%" }} size={"large"} />
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item
                name="sideEffect"
                label="Side Effects"
                rules={[
                  {
                    type: "array",
                  },
                ]}
              >
                <Select
                  mode="multiple"
                  placeholder="Please select side effects"
                  size="large"
                >
                  <Option value="1">Side Effects 1</Option>
                  <Option value="2">Side Effects 2</Option>
                  <Option value="3">Side Effects 3</Option>
                  <Option value="4">Side Effects 4</Option>
                  <Option value="5">Side Effects 5</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xs={24} sm={24} md={24} lg={12} xl={12}>
              <Form.Item label="Warning" name="warning">
                <Input placeholder="Warnings" size={"large"} />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Description" name="description">
            <TextArea rows={4} placeholder="Write description here" />
          </Form.Item>
        </Form>
      </Drawer>
    </>
  );
};

export default AddMedicine;
