import {
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import React from "react";
import { Link, useLocation } from "react-router-dom";
const { Sider } = Layout;

const Sidebar = () => {
  const location = useLocation();

  console.log(location);

  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {}}
      onCollapse={(collapsed, type) => {}}
      theme="light"
    >
      <div className="logo_sidebar font-bold">Healthiions</div>
      <Menu theme="light" mode="inline" selectedKeys={[location.pathname]}>
        <Menu.Item key="/">
          <UserOutlined />
          <Link to="/dashboard" />
          <span>Dashboard</span>
        </Menu.Item>

        <Menu.Item key="/patients">
          <VideoCameraOutlined />
          <Link to="/patients" />
          <span>Patients</span>
        </Menu.Item>
        <Menu.Item key="/prescriptions">
          <VideoCameraOutlined />
          <Link to="/prescriptions" />
          <span>Prescriptions</span>
        </Menu.Item>
        <Menu.Item key="/profile">
          <UploadOutlined />
          <Link className="nav-text" to="/profile" />
          <span>Profile</span>
        </Menu.Item>
        <Menu.Item key="/medicine">
          <UploadOutlined />
          <Link className="nav-text" to="/medicine" />
          <span>Medicine</span>
        </Menu.Item>
        <Menu.Item key="4">
          <UserOutlined key="/" />
          <span>Log Out</span>
          <Link className="nav-text" to="/" />
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
