import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import CenterCard from "../components/CenterCard";
import { Row, Col, Typography, Grid } from "antd";

const { Text } = Typography;

const SpaceOverview: React.FC = () => {
  const centers = useSelector((state: RootState) => state.centers.centers);

  const screens = Grid.useBreakpoint();

  return (
    <div style={{ marginTop: "50px" }}>
      <Text style={{ fontSize: screens.md ? "36px" : "24px", fontWeight: 700 }}>
        {screens.md ? "Our Space Overview" : "Our Space"}
      </Text>
      <Row gutter={[40, 40]}>
        {centers.map((center) => (
          <Col key={center.id} xs={24} md={8} lg={6}>
            <CenterCard {...center} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SpaceOverview;
