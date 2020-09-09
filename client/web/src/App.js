import { Layout } from "antd";
import React from "react";
import Navbar from "./components/ui/Navbar";
import Sidebar from "./components/ui/Sidebar";

const { Content } = Layout;

const AppLayout = ({ children }) => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Navbar />
        <Content className="site-layout-content">{children}</Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
