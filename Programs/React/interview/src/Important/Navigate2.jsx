import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate2 = () => {
  const navigate = useNavigate();
  return (
    <div>
      Navigate2
      <button onClick={() => navigate("/")}>Back</button>
    </div>
  );
};

export default Navigate2;
