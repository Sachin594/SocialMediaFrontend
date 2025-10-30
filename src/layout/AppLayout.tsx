import { Col, Layout, Menu, Row, theme } from "antd";
import Sider from "antd/es/layout/Sider";
import DingtalkOutlined from "@ant-design/icons";
import React from "react";
import { Header } from "antd/es/layout/layout";

const AppLayout = () => {
  const {
    token: { cyan2, cyan4 },
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
    <div style={{ background: cyan2, padding: "10px" }}>
      <Layout>
        <Header style={{ background: cyan4 }}>
          {/* <div>kullllllllllll</div> */}
        </Header>
        <Layout>
          <Sider
            style={{ background: cyan4 }}
            breakpoint="lg"
            collapsedWidth="0"
            onBreakpoint={(broken) => {
              console.log(broken);
            }}
            onCollapse={(collapsed, type) => {
              console.log(collapsed, type);
            }}
          >
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["4"]}
              items={TabsList}
            />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
};

export default AppLayout;
