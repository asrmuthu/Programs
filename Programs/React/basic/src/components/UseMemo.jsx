import React, { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState(0);

  const handleChange = (e) => {
    setNumber(e.target.value);
  };

  const handleFactorial = (n) => {
    let result = 1;

    for (let i = 2; i <= n; i++) {
        result *= i;
      }
      return result;
    };

    const memocal = useMemo(() => handleFactorial(number), [number]);

    
  return (
    <div>
      Factorial
      <input type="number" value={number} onChange={handleChange} />
      <p>
        factorial of {number} value is {memocal}
      </p>
    </div>
  );
};

export default UseMemo;
