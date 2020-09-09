import React, { useState, useEffect } from "react";
import { Empty, Col, Row } from "antd";
import { ListPatient, AddPatient } from "../components/ui/Patient/";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
const { Search } = Input;

const Patient = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8000/api/patient/read_all").then((res) => {
      setData(res.data);
      // console.log(res);
    });
  };

  const reloadListTest = () => {
    getData();
  };

  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: "#1890ff",
      }}
    />
  );
  return (
    <div>
      <Row>
        <Col flex="100px">
          <AddPatient reloadListTest={reloadListTest} />
        </Col>
        <Col flex="auto">
          <Search
            placeholder="Search Patient"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={(value) => console.log(value)}
          />
        </Col>
      </Row>

      <div className="mt-5">
        <ListPatient data={data} />
      </div>
    </div>
  );
};

export default Patient;
