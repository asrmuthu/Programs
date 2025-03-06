import React from "react";
import { Layout } from "antd";

const { Footer } = Layout;

const AppFooter = () => {
  return (
    <Footer style={{ textAlign: "center", background: "#f0f2f5", padding: "20px" }}>
      © {new Date().getFullYear()} Co-Working Space | All Rights Reserved
    </Footer>
  );
};

export default AppFooter;
