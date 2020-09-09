import React, { useState, useEffect } from "react";
import { Col, Row, Avatar, Tabs, Timeline, Button } from "antd";
import axios from "axios";
import { useParams } from "react-router-dom";
import {
  AppleOutlined,
  AndroidOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import { List } from "antd";
import Appointment from "../components/ui/Patient/Appointment";
import Prescription from "../components/ui/Patient/Prescription";
import AddPrescription from "../components/ui/Patient/AddPrescription";

const { TabPane } = Tabs;

const Patient = () => {
  const [data, setData] = useState({
    birthDate: "",
    bloodGroup: "",
    email: "",
    gender: "",
    name: "",
    nidNumber: 0,
    password: "",
    tel: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8000/api/patient/read/" + id).then((res) => {
      setData({
        ...res.data,
      });
    });
  };

  const details = [
    "Nid Number: " + data.nidNumber,
    "Birth Date: " + data.birthDate,
    "Blood Group: " + data.bloodGroup,
    "Email: " + data.email,
    "Gender: " + data.gender,
    "Tel:  " + data.tel,
  ];

  const calculate_age = (dob) => {
    dob = new Date(dob);
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms);

    return Math.abs(age_dt.getUTCFullYear() - 1970);
  };

  return (
    <div className="container ">
      <Row className="bg-white shadow-lg rounded-full p-3 mb-5">
        <Col flex="128px">
          <Avatar
            size={128}
            src="https://joinyena.com/wp-content/uploads/2018/01/profile-circle.png"
          />
        </Col>
        <Col flex="auto" className="flex">
          <h1 className="m-auto ml-5 text-4xl">
            {data.name} | Age: {calculate_age(data.birthDate)}{" "}
          </h1>
        </Col>
        <Col flex="auto" className="flex">
          <AddPrescription />
        </Col>
      </Row>
      <Row className="bg-white shadow-lg rounded p-3">
        <Tabs defaultActiveKey="2">
          <TabPane
            tab={
              <span>
                <AppleOutlined />
                Details
              </span>
            }
            key="1"
          >
            <List
              size="large"
              bordered
              dataSource={details}
              renderItem={(item) => (
                <List.Item className="text-bold">{item}</List.Item>
              )}
            />
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                History
              </span>
            }
            key="2"
          >
            <Timeline mode="alternate">
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item color="green">
                Solve initial network problems 2015-09-01
              </Timeline.Item>
              <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              >
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.
              </Timeline.Item>
              <Timeline.Item color="red">
                Network problems being solved 2015-09-01
              </Timeline.Item>
              <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
              <Timeline.Item
                dot={<ClockCircleOutlined style={{ fontSize: "16px" }} />}
              >
                Technical testing 2015-09-01
              </Timeline.Item>
            </Timeline>
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Prescriptions
              </span>
            }
            key="3"
          >
            <Prescription />
          </TabPane>
          <TabPane
            tab={
              <span>
                <AndroidOutlined />
                Appointment
              </span>
            }
            key="4"
          >
            <Appointment />
          </TabPane>
        </Tabs>
      </Row>
    </div>
  );
};

export default Patient;
