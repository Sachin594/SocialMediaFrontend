import { Col, Layout, Menu, Row, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import DingtalkOutlined from "@ant-design/icons";
import React from "react";
import { Header } from "antd/es/layout/layout";

const AppLayout = () => {
  const {
    token: { cyan2 },
  } = theme.useToken();

  const TabsList = [
    {
      key: "overview",
      icon: <DingtalkOutlined />,
      label: "Overview",
    },
    {
      key: "s",
      icon: <DingtalkOutlined />,
      label: "Overview",
    },
  ];

  return (
    <Layout style={{ background: cyan2 }}>
      <Header>{/* <div>kullllllllllll</div> */}</Header>
      <Layout>
        <Sider>
          <Menu items={TabsList} />
        </Sider>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
