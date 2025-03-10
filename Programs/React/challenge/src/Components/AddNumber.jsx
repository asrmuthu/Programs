import React, { useState } from "react";

const AddNumber = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [sum, setSum] = useState('');

  const calculateSum = () => {
    setSum(Number(num1) + Number(num2));
  };

  return (
    <div>
      <input
        placeholder="First Number"
        type="number"
        value={num1}
        onChange={(e) => {
          setNum1(e.target.value);
        }}
      />
      <input
        placeholder="Second Number"
        type="number"
        value={num2}
        onChange={(e) => {
          setNum2(e.target.value);
        }}
      />
      <button onClick={calculateSum}>Calculate Sum</button>
      <div>{sum}</div>
    </div>
  );
};

export default AddNumber;
