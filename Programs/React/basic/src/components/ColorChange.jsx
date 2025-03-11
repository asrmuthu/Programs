import { useEffect, useState } from "react";

const ColorChange = () => {
  const [color, setColor] = useState("red");

  useEffect(() => {
    setTimeout(() => {
      setColor("blue");
    }, 3000);
  }, []);

  return (
    <div style={{height: "100vh", backgroundColor: color }}>
      
    </div>
  );
};

export default ColorChange;
