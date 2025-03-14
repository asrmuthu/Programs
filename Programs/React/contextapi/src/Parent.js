import React, { useContext } from "react";
import { MyContext } from "./App";

const Parent = () => {
  const { name } = useContext(MyContext); // Accessing Context

  return <h1>Parent: {name}</h1>;
};

export default Parent;
