import { theme } from "antd";
import "./App.css";
import AppLayout from "./layout/AppLayout";

function App() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <>
      <AppLayout />
    </>
  );
}

export default App;
