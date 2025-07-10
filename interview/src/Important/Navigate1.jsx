import React from "react";
import { useNavigate } from "react-router-dom";

const Navigate1 = () => {
  const navigate = useNavigate();
  return (
    <div>
      Navigate1
      <button onClick={() => navigate("/Navigate2")}>Next</button>
    </div>
  );
};

export default Navigate1