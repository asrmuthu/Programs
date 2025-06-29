import React from "react";
import useWindowSize from "./useWindowSize";

const IBM_WindowSize = () => {
  const { width} = useWindowSize();

  return (
    <div>
      <h1>Window Width</h1>
      <p>{width}</p>
    </div>
  );
};

export default IBM_WindowSize;
