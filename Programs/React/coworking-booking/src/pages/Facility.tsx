import React from "react";
import { Row, Col, Typography, Card, Grid } from "antd";
import {
  CalendarOutlined,
  HeartOutlined,
  WifiOutlined,
  CoffeeOutlined,
  DollarOutlined,
  AppstoreOutlined,
  ThunderboltOutlined,
  DribbbleOutlined
} from "@ant-design/icons";

const { Text } = Typography;
const { useBreakpoint } = Grid;

const Facility = () => {
  const screens = useBreakpoint(); 

  const facilities = [
    { name: "Community Events", icon: <CalendarOutlined /> },
    { name: "Gym Facilities", icon: <HeartOutlined /> },
    { name: "High-Speed WiFi", icon: <WifiOutlined /> },
    { name: "Café & Tea Bar", icon: <CoffeeOutlined /> },
    { name: "Affordable", icon: <DollarOutlined /> },
    { name: "Comfort Lounges", icon: <AppstoreOutlined /> },
    { name: "Quick Booking", icon: <ThunderboltOutlined /> },
    { name: "Sports Area", icon: <DribbbleOutlined /> }
  ];

  return (
    <div style={{ marginTop: "50px", padding: "20px"}}>
      <Text
        strong
        style={{
          fontSize: screens.md ? "36px" : "24px",
          display: "block",
          marginBottom: "20px"
        }}
      >
        Why Choose Us?
      </Text>

      <Row gutter={[16, 16]} justify="center">
        {facilities.map((facility, index) => (
          <Col key={index} xs={12} sm={8} md={6}>
            <Card
              hoverable
              style={{
                width: "100%",
                height: "100px",
                display: "flex",
                alignItems: screens.md ? "center" : "center",
                justifyContent: screens.md ? "flex-start" : "center",
                flexDirection: screens.md ? "row" : "column",
                padding: "10px",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                textAlign: screens.md ? "left" : "center"
              }}
            >
              {screens.md ? (
                <span
                  style={{
                    fontSize: "28px",
                    color: "#FFBB00",
                    marginRight: "12px"
                  }}
                >
                  {facility.icon}
                </span>
              ) : (
                <div
                  style={{
                    fontSize: "28px",
                    color: "#FFBB00",
                    marginBottom: "8px"
                  }}
                >
                  {facility.icon}
                </div>
              )}

              <Text style={{ fontSize: "16px", fontWeight: 500 }}>{facility.name}</Text>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Facility;
