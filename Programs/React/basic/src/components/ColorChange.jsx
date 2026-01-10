import React, { useState, useEffect } from "react";

const ColorChange = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => setColor("blue"), 3000);

    return () => clearTimeout(timer);
  }, []);

  return <div style={{ backgroundColor: color, height: "100vh" }}></div>;
};

export default ColorChange;
