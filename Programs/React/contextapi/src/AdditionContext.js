import { createContext, useContext, useState } from "react";

// Create Context
const AdditionContext = createContext();

// Create Provider
export const AdditionProvider = ({ children }) => {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [sum, setSum] = useState(0);

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <AdditionContext.Provider value={{ num1, num2, sum, setNum1, setNum2, calculateSum }}>
      {children}
    </AdditionContext.Provider>
  );
};

// Custom Hook
export const useAddition = () => useContext(AdditionContext);
