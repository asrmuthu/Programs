import React from "react";
import { Card, Button } from "antd";
import { Link } from "react-router-dom";
import { spaces } from "../data/spaces";

const Features = () => {
  return (
    <div style={{ maxWidth: 900, margin: "auto", padding: "20px" }}>
      <h1>Why Choose us?</h1>
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {spaces.map((space) => (
          <Card
            key={space.id}
            cover={<img alt={space.name} src={space.image} />}
            style={{ width: 300 }}
          >
            <h3>{space.name}</h3>
            <p>{space.price}</p>
            <Link to="/booking">
              <Button type="primary">Book Now</Button>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
