import { Button, Col, Divider, Layout, Row, theme } from "antd";
import { useState } from "react";
import bgImage from "../assets/blueBg.jpg";
import logo from "../assets/logo.png";
import { useBreakpointWidth } from "../hooks/useBreakpoint";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  const isMobile = useBreakpointWidth(680);
  const [collapsed, setCollapsed] = useState(false);
  // const
  const {
    token: { colorBgBlur },
  } = theme.useToken();

  console.log(isMobile);
  return (
    <Layout
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        padding: 20,
      }}
    >
      <Header
        style={{
          height: 64,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
          zIndex: 1000,
        }}
        className="w-full! text-center! bg-gray-700! rounded-xl p-0! m-auto"
      >
        <Row align={"middle"} className="w-full! h-full! bg-transparent! ">
          <Col
            span={4}
            className="w-full! h-full!"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={logo}
              alt="logo"
              style={{
                minWidth: "max(50px, 5vw)",
                maxWidth: "60%",
                height: "auto",
                objectFit: "contain",
                display: "block",
              }}
            />
            <Divider
              style={{
                borderColor: "white", // ✅ make it visible
                opacity: 0.7,
                height: 20,
              }}
              type="vertical"
            />
          </Col>

          <Col></Col>
        </Row>
      </Header>
      {/* ===== Main Layout ===== */}
      <Layout
        style={{
          maxHeight: "100%",
          display: "flex",
          overflow: "hidden",
          background: "transparent",
          paddingTop: 20,
        }}
      >
        {/* Sidebar */}
        <Sider
          collapsedWidth={50}
          width={250}
          collapsed={collapsed || isMobile}
          onCollapse={(value) => setCollapsed(value)}
          className="w-full! text-center! relative! overflow-auto bg-gray-700! rounded-xl"
          style={{
            height: "calc(50vh-80px)",
            background: "#374151",
            color: "white",
            backdropFilter: "blur(8px)",
            position: "relative",
            overflow: "visible",
            flexShrink: 0,
          }}
        >
          <Button
            type="text"
            size="large"
            style={
              collapsed
                ? { margin: 0, width: "100%" }
                : { position: "absolute", right: 2, padding: 0 }
            }
            onClick={() => setCollapsed((prev) => !prev)}
          >
            {isMobile ? (
              <></>
            ) : collapsed ? (
              <MenuUnfoldOutlined className="text-white! text-2xl" />
            ) : (
              <MenuFoldOutlined className="text-white! text-2xl" />
            )}
          </Button>
        </Sider>

        {/* Content Area */}
        <Content
          style={{
            flex: 1,
            height: "100%",
            overflowY: "auto",
            padding: 24,
            background: "transparent",
            color: "white",
          }}
        >
          Main Content
        </Content>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
