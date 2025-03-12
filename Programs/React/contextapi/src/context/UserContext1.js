// src/context/UserContext.js
import { createContext, useState } from "react";

// Create Context
export const CreateContext = createContext();

const UserContext1 = ({ children }) => {
  const [name, setName] = useState("Muthupandi");

  return (
    <CreateContext.Provider value={{ name, setName }}>
      {children}
    </CreateContext.Provider>
  );
};

export default UserContext1;
