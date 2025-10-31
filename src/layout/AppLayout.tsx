import { Layout } from "antd";
const { Header, Sider, Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* Header - full width */}
      <Header
        style={{
          background: "#fff",
          padding: "0 16px",
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 64,
          display: "flex",
          alignItems: "center",
          zIndex: 1000,
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        <div className="m-4 h-20 w-20 bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </Header>

      {/* Body Layout */}
      <Layout style={{ marginTop: 64 }}>
        {/* Sider */}
        <Sider
          width={200}
          style={{
            background: "#fafafa",
            borderRight: "1px solid #f0f0f0",
            height: "calc(100vh - 64px)",
            position: "fixed",
            left: 0,
            top: 64,
            overflow: "auto",
          }}
        >
          Sider Content
        </Sider>

        {/* Content */}
        <Layout style={{ marginLeft: 200 }}>
          <Content
            style={{
              padding: "24px",
              minHeight: "calc(100vh - 64px)",
              background: "#fff",
            }}
          >
            Main Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
