import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";
import { ListMedicine, AddMedicine } from "../components/ui/Medicine/";
import { AudioOutlined } from "@ant-design/icons";
import { Input } from "antd";
import axios from "axios";
const { Search } = Input;

const Medicine = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios.get("http://localhost:8000/api/medicine/read_all").then((res) => {
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
          <AddMedicine reloadListTest={reloadListTest} />
        </Col>
        <Col flex="auto">
          <Search
            placeholder="Search Medicine"
            enterButton="Search"
            size="large"
            suffix={suffix}
            onSearch={(value) => console.log(value)}
          />
        </Col>
      </Row>

      <div className="mt-5">
        <ListMedicine data={data} />
      </div>
    </div>
  );
};

export default Medicine;
