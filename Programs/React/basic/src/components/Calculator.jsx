import React, { useState } from 'react';
// import '../css/Calculator.css';


const Calculator = () => {
  const [num1, setNum1] = useState(''); // Initialize the first number
  const [num2, setNum2] = useState(''); // Initialize the second number
  const [result, setResult] = useState(''); // Initialize the result
  const [currentOperation, setCurrentOperation] = useState(''); // Track the current operation


  // Handle the calculation
  const sum = () => {
    const add = Number(num1) + Number(num2);
    setResult(add);
    setCurrentOperation('Add'); // Update operation name
  };
  const subtraction = () => {
    const subtract = Number(num1) - Number(num2);
    setResult(subtract);
    setCurrentOperation('Sub'); // Update operation name
  };
  const multiply = () => {
    const product = Number(num1) * Number(num2); // Correct multiplication logic
    setResult(product);
    setCurrentOperation('Mul'); // Update operation name
  };
  const division = () => {
    if (num2 === '0' || num2 === '') {
      setResult('Cannot divide by zero'); // Handle division by zero
      setCurrentOperation('Div');
    } else {
      const quotient = Number(num1) / Number(num2);
      setResult(quotient);
      setCurrentOperation('Div'); // Update operation name
    }
  };


  // Get first number
  const handleChange1 = (e) => {
    setNum1(e.target.value);
  };


  // Get second number
  const handleChange2 = (e) => {
    setNum2(e.target.value);
  };


  const reset = () => {
    setNum1('');
    setNum2('');
    setResult('');
    setCurrentOperation(''); // Clear the operation name
  };


  return (
    <>
      <h1>Enter the Two Numbers</h1>
      <input
        type="number"
        value={num1}
        onChange={handleChange1}
        placeholder="First Number"
      />
      <input
        type="number"
        value={num2}
        onChange={handleChange2}
        placeholder="Second Number"
      />
      <div>
        <button onClick={sum}>+</button>
        <button onClick={subtraction}>-</button>
        <button onClick={multiply}>*</button>
        <button onClick={division}>/</button>
        <button onClick={reset}>Clear</button>
      </div>
      {/* {result !== '' && <h2>Result: {result}</h2>} */}
      {result !== '' && (<h2>{currentOperation}: {result}</h2>)}
    </>
  );
}

export default Calculator;