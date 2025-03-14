import React, { useContext } from "react";
import { MyContext } from "./App";

const Child = () => {
  const { name, setName } = useContext(MyContext); // Accessing Context

  return (
    <div>
      <h2>Child: {name}</h2>
      <button onClick={() => setName("Raj")}>Change Name</button>
    </div>
  );
};

export default Child;
