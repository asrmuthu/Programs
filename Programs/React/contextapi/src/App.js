import React, { createContext, useState } from "react";
import Parent from "./Parent";
import Child from "./Child";

export const MyContext = createContext(); // Creating Context

const App = () => {
  const [name, setName] = useState("Muthupandi"); // Creating State

  return (
    <MyContext.Provider value={{ name, setName }}>
      <Parent />
      <Child />
    </MyContext.Provider>
  );
};

export default App;
