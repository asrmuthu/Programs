import { Card, Col, Row, Typography, Tag } from "antd";
import React from "react";
import { DoubleRightOutlined, CalendarOutlined } from "@ant-design/icons";
import Group000007097 from "../assets/Group000007097.png";

interface CenterCardProps {
  name: string;
  price: number;
  image: string;
  perday: number;
  discount: number;
  space: string;
}

const { Text } = Typography;

const CenterCard: React.FC<CenterCardProps> = ({
  name,
  price,
  image,
  perday,
  discount,
  space,
}) => {
  return (
    <Card
      hoverable
      style={{
        borderRadius: "12px",
        overflow: "hidden",
        boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        position: "relative",
      }}
      title={<Text strong style={{ fontSize: "16px" }}>{name}
       <img
            src={Group000007097}
            alt="Workspace Icon"
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              width: "40px",
              height: "auto",
            }}
          />
      </Text>}
      
      cover={
        <div style={{ position: "relative" }}>
          <img
            alt={name}
            src={image}
            style={{ width: "100%", borderRadius: "12px 12px 0 0", display: "block" }}
          />
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              background: "#263238",
              color: "#FFCF4B",
              padding: "4px 10px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >         
            <CalendarOutlined /> {space}
          </div>         
        </div>
      }
    >
      <Row gutter={16} align="middle">
        <Col span={12}>
          <div
            style={{
              background: "#fff",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #ddd",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: "14px", color: "#666", whiteSpace: "nowrap" }}>
                Day Pass
              </Text>
              <DoubleRightOutlined />
            </div>
            <div style={{ display: "flex", alignItems: "baseline", whiteSpace: "nowrap", gap: "4px" }}>
              <Text style={{ fontSize: "16px", fontWeight: 600, color: "black" }}>
                ₹{perday}
              </Text>
              <Text style={{ fontSize: "14px", color: "#666" }}>/Day</Text>
            </div>
          </div>
        </Col>

        <Col span={12}>
          <div
            style={{
              background: "#FFCF4B",
              padding: "12px",
              borderRadius: "8px",
              position: "relative",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              height: "100%",
            }}
          >
            <Tag
              color="black"
              style={{
                position: "absolute",
                top: "-10px",
                left: "50%",
                transform: "translateX(-50%)",
                fontSize: "12px",
                fontWeight: "bold",
                background: "#000",
                color: "#fff",
                borderRadius: "8px",
                whiteSpace: "nowrap",
              }}
            >
              {discount}% Discount
            </Tag>

            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <Text style={{ fontSize: "14px", color: "#666", whiteSpace: "nowrap" }}>
                Bulk Pass
              </Text>
              <DoubleRightOutlined style={{ color: "#666" }} />
            </div>
            <div style={{ display: "flex", alignItems: "baseline", whiteSpace: "nowrap", gap: "4px" }}>
              <Text style={{ fontSize: "16px", fontWeight: 600, color: "black" }}>
                ₹{price}
              </Text>
              <Text style={{ fontSize: "14px", color: "#666" }}>/10 Days</Text>
            </div>
          </div>
        </Col>
      </Row>
    </Card>
  );
};

export default CenterCard;
