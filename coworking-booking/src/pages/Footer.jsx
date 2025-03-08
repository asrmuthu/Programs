import React from "react";
import Group1000007102 from "../assets/Group1000007102.png";
import AppStore from "../assets/image1938.png";
import PlayStore from "../assets/image1939.png";
import { Row, Col, Typography, Grid } from "antd";

const { Text } = Typography;

const Footer = () => {
  const screens = Grid.useBreakpoint();

  return (
    <div
      style={{
        marginTop: "50px",
        background: "#F8F9FB",
        padding: "5px",
      }}
    >
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>
        Download our app now
      </h1>

      <Row style={{ paddingTop: "30px" }} justify="center">
        <Col md={10} style={{ textAlign: "left", paddingLeft: 0 }}>
          <img
            src={Group1000007102}
            alt="Mobile App"
            style={{ maxWidth: "100%", display: "block" }}
          />
        </Col>

        <Col
          md={12}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            margin: "30px",
            textAlign: "left",
          }}
        >
          {screens.md && (
            <>
              <Text style={{ fontSize: "16px", color: "#666", lineHeight: "1.6" }}>
                Boost your productivity with the BHIVE Workspace app.
              </Text>
              <Text style={{ fontSize: "16px", color: "#666", lineHeight: "1.6" }}>
                Elevate your workspace, collaborate efficiently, and unlock exclusive perks.
              </Text>
            </>
          )}
          <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
            <img
              src={PlayStore}
              alt="Play Store"
              style={{ height: "50px", cursor: "pointer" }}
            />
            <img
              src={AppStore}
              alt="App Store"
              style={{ height: "50px", cursor: "pointer" }}
            />
          </div>
        </Col>
      </Row>

      <div
        style={{
          background: "#222E34",
          marginTop: screens.md ? "50px" : "20px",
          padding: "12px",
          fontSize: "14px",
          textAlign: "center",
          width: "100%",
        }}
      >
        <Text style={{ color: "#fff" }}>
          © 2021 BHIVE Workspace. All rights reserved.
        </Text>
      </div>
    </div>
  );
};

export default Footer;
