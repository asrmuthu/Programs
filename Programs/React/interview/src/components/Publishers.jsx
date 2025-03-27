import React from "react";
import { useState } from "react";

const Publishers = () => {
  const [val, setVal] = useState(0);

  const handleAdd = () => {
    setVal((preval) => preval + 1);
  };

  const handleMin = () => {
    if (val > 0) {
      setVal((preval) => preval - 1);
    }
  };

  return (
    <div>
      <p>App</p>
      <p>{val}</p>
      <button onClick={handleAdd}>Add</button>{" "}
      <button onClick={handleMin}>Min</button>
    </div>
  );
};

export default Publishers;
