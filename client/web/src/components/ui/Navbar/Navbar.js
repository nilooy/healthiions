import { Layout, Menu, Avatar } from "antd";
import React from "react";
import SubMenu from "antd/lib/menu/SubMenu";
import { SettingOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
const { Header } = Layout;

const Navbar = () => {
  return (
    <Header
      style={{
        zIndex: 1,
        width: "100%",
        background: "#fff",
      }}
      id="components-layout-demo-fixed"
    >
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["2"]}>
        <SubMenu
          style={{ float: "right", backgroundColor: "#d5fbf9" }}
          icon={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="Dr. Monmoi Chok."
        >
          <Menu.ItemGroup title="Doctor">
            <Menu.Item key="setting:1">
              <Link to="/auth/signup/doctor">Sign up</Link>
            </Menu.Item>
            <Menu.Item key="setting:2">
              <Link to="/auth/signin/doctor">Sign in</Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Patient">
            <Menu.Item key="setting:3">
              <Link to="/auth/signup/patient">Sign up</Link>
            </Menu.Item>
            <Menu.Item key="setting:4">
              <Link to="/auth/signin/patient">Sign in</Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
      </Menu>
    </Header>
  );
};

export default Navbar;
