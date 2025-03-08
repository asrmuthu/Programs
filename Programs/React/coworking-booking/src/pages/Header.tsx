import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { PhoneFilled } from "@ant-design/icons";
import Bhive_logo from "../assets/image54.png";
import Vector7 from "../assets/Vector7.png";
import Coworking from "../assets/Coworking.png";

const { Text } = Typography;

const Header: React.FC = () => {
  return (
    <div style={{ position: "relative", padding: "10px 20px" }}>
      <Row justify="space-between" align="middle">
        <Col>
          <img src={Bhive_logo} alt="BHIVE Logo" style={{ height: "40px" }} />
        </Col>
        <Col>
          <Button type="link" href="tel:7904688429">
            <PhoneFilled className="phone-button" />
          </Button>
        </Col>
      </Row>

      <Row gutter={[16, 16]} align="middle" style={{ marginTop: 20 }}>
        <Col
          xs={{ order: 1, span: 24 }}
          md={{ order: 2, span: 12 }}
          style={{
            textAlign: "center",
            position: "relative",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <img
            src={Vector7}
            alt="Vector7"
            style={{ maxHeight: "350px", width: "100%", maxWidth: "500px" }}
          />
          <img
            src={Coworking}
            alt="Coworking"
            style={{
              position: "absolute",
              top: "60%",
              left: "45%",
              transform: "translate(-50%, -50%)",
              width: "70%",
              maxWidth: "250px",
            }}
          />
        </Col>

        <Col xs={{ order: 2, span: 24 }} md={{ order: 1, span: 12 }}>
          <Text
            className="banner-text"
            style={{
              fontSize: "4vw",
              fontWeight: "700",
              lineHeight: "1.2",
              display: "block",
            }}
          >
            Host your meeting with world-class amenities.
            <br />
            Starting at <span style={{ color: "#FFBB00" }}>₹199/-!</span>
          </Text>
        </Col>
      </Row>
    </div>
  );
};

export default Header;
